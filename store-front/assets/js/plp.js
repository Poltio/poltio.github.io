(function () {
  const CATS = CATALOG.categories;
  const want = new URLSearchParams(location.search).get('cat');
  const cat = CATS.find(c => c.key === want) || CATS[0]; // no/invalid cat → foundation
  Shell.mount({ page: 'plp', cat: cat.key });
  State.logEvent({ type: 'visit', cat: cat.key });

  const P = CATALOG.products;
  const KEYS = Match.keysFor(cat.key);
  const Q = KEYS.map(k => CATALOG.questions.find(q => q.key === k));
  const $ = s => document.querySelector(s);
  const { esc } = Ui;
  const INLINE_AFTER = [4, 10];
  const WHERE = 'plp:' + cat.key;
  let sort = 'best';

  document.title = `${cat.plural} · KIKO Milano Austria`;
  $('[data-crumb]').textContent = cat.plural;

  const label = (k, v) => Match.reasons({ category: cat.key, tags: {}, shades: [] }, { [k]: v })[0].label;
  const answeredHere = a => KEYS.some(k => a[k]);

  function renderHead(a, s) {
    $('[data-headline]').textContent = s.headline;
    const close = s.matched.length - s.count; // "good" matches shown above the divider
    $('[data-count]').innerHTML = !answeredHere(a) ? `${s.total} ${esc(cat.plural.toLowerCase())} · answer a question to personalise`
      : s.count ? `<b>${s.count}</b> great match${s.count === 1 ? '' : 'es'}${close ? ` · ${close} close` : ''} of ${s.total}`
      : close ? `No perfect match yet · <b>${close}</b> close match${close === 1 ? '' : 'es'}`
      : 'No perfect match yet. Here are the closest.';
  }

  function renderChips(a) {
    $('[data-chips]').innerHTML = Q.map(q => a[q.key]
      ? `<button class="fchip fchip--on" data-clear="${q.key}" aria-label="Remove ${esc(label(q.key, a[q.key]))}">${esc(label(q.key, a[q.key]))} ×</button>`
      : `<button class="fchip fchip--add" data-ask="${q.key}"><b>+</b> ${esc(q.short)}</button>`).join('');
  }

  function renderRail(a) {
    const groups = Q.map(q => `<div class="rail-q__group">
      <h3>${esc(q.short)}${a[q.key] ? `<button class="link-btn" data-clear="${q.key}">Clear</button>` : ''}</h3>
      <div class="rail-q__opts">${q.answers.map(x => `<button data-set="${q.key}:${x.key}" aria-pressed="${a[q.key] === x.key}">${q.type === 'swatch' ? `<i style="background:${x.visual}"></i>` : ''}${esc(x.title)}</button>`).join('')}</div>
    </div>`).join('');
    $('[data-rail]').innerHTML = groups + `<p class="rail-q__note">These aren't filters you have to figure out. They're the questions a <b>KIKO</b> beauty advisor would ask you, and every answer saves to your profile.</p>`;
  }

  /* Profile hides products → say so, with a way to see everything. */
  function renderShowAll(a, vis) {
    const el = $('[data-showall]');
    const show = State.getShowAll();
    el.hidden = !(vis.hiddenByProfile || show);
    if (el.hidden) return;
    el.innerHTML = show
      ? `<span>Showing <b>everything</b></span><button class="btn btn--ghost" data-showall-set="0">Back to my picks</button>`
      : `<span>Showing <b>${esc(Profile.label(a))}</b> from your profile</span><button class="btn btn--ghost" data-showall-set="1">Show everything</button>`;
  }

  function sorted(list) {
    const by = { 'price-asc': (x, y) => x.price - y.price, 'price-desc': (x, y) => y.price - x.price, rating: (x, y) => y.rating - x.rating };
    return by[sort] ? list.slice().sort(by[sort]) : list;
  }

  function renderGrid(a, s, vis) {
    const grid = $('[data-grid]');
    if (!vis.products.length) { // the whole category is hidden by the profile: never an empty grid
      grid.innerHTML = `<div class="hidden-cat"><h2>${esc(cat.plural)} are hidden from your store</h2>
        <p>You told us you're shopping for ${esc(Profile.label(a))}. You can still browse ${esc(cat.plural.toLowerCase())}.</p>
        <button class="btn btn--accent" data-showall-set="1">Show everything</button></div>`;
      return;
    }
    const open = Q.filter(q => !a[q.key]).slice(0, INLINE_AFTER.length);
    let items;
    if (sort === 'best') {
      items = s.matched.map(p => ({ p }));
      if (s.matched.length && s.others.length) items.push({ divider: `Other ${cat.plural.toLowerCase()}` });
      items = items.concat(s.others.map(p => ({ p })));
    } else {
      items = sorted(s.matched.concat(s.others)).map(p => ({ p }));
    }
    // Inline question cards after the 4th and 10th product (or at the end of a short list).
    let n = 0; const out = [];
    for (const it of items) {
      out.push(it);
      if (it.p) { n++; const at = INLINE_AFTER.indexOf(n); if (at !== -1 && open[at]) out.push({ q: open[at] }); }
    }
    if (n < INLINE_AFTER[0] && open[0]) out.push({ q: open[0] });
    grid.innerHTML = out.map(it => {
      if (it.divider) return `<div class="grid__divider" role="separator">${esc(it.divider)}</div>`;
      if (it.q) return `<div class="qcard" data-inline="${it.q.key}"></div>`;
      return Ui.card(it.p, a);
    }).join('');
    grid.querySelectorAll('[data-inline]').forEach(el => {
      const q = Q.find(x => x.key === el.dataset.inline);
      Question.render(el, q, null, v => State.setAnswer(q.key, v, WHERE), { variant: 'card', step: 'Help us narrow it down' });
    });
  }

  function render() {
    const a = State.getAnswers();
    const vis = Profile.visibleIn(cat.key, a, State.getShowAll());
    const s = Match.summary(vis.products, a, cat.key);
    renderHead(a, s); renderChips(a); renderRail(a); renderShowAll(a, vis); renderGrid(a, s, vis);
    const empty = !vis.products.length; // hidden category: the grid message says it all
    $('[data-chips]').hidden = empty; $('[data-rail]').hidden = empty; $('[data-count]').hidden = empty;
    $('.sort').hidden = empty;
    if (empty) { $('[data-showall]').hidden = true; $('[data-headline]').textContent = cat.plural; }
  }

  document.addEventListener('click', e => {
    const clear = e.target.closest('[data-grid] [data-clear], [data-chips] [data-clear], [data-rail] [data-clear]');
    if (clear) State.clearAnswer(clear.dataset.clear);
    const set = e.target.closest('[data-set]');
    if (set) {
      const [k, v] = set.dataset.set.split(':');
      if (State.getAnswers()[k] === v) State.clearAnswer(k); else State.setAnswer(k, v, WHERE);
    }
    const all = e.target.closest('[data-showall-set]');
    if (all) State.setShowAll(all.dataset.showallSet === '1');
    const ask = e.target.closest('[data-ask]');
    if (ask) {
      const q = Q.find(x => x.key === ask.dataset.ask);
      const dlg = document.getElementById('dlg-q');
      Question.render(dlg.querySelector('[data-q-slot]'), q, null, v => { State.setAnswer(q.key, v, WHERE); dlg.close(); }, { variant: 'inline' });
      dlg.showModal();
    }
  });
  $('[data-sort]').addEventListener('change', e => { sort = e.target.value; render(); });
  State.onChange(render);
  render();
})();
