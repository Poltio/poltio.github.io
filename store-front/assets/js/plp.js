(function () {
  Shell.mount({ page: 'plp' });
  const Q = CATALOG.questions;
  const P = CATALOG.products;
  const $ = s => document.querySelector(s);
  const { esc } = Ui;
  const INLINE_AFTER = [4, 10];
  let sort = 'best';

  const label = (q, key) => Match.reasons({ tags: {}, shades: [] }, { [q.key]: key })[0].label;

  function renderHead(a, s) {
    $('[data-headline]').textContent = s.headline;
    const any = Object.keys(a).length > 0;
    const close = s.matched.length - s.count; // "good" matches shown above the divider
    $('[data-count]').innerHTML = !any ? `${s.total} foundations · answer a question to personalise`
      : s.count ? `<b>${s.count}</b> great match${s.count === 1 ? '' : 'es'}${close ? ` · ${close} close` : ''} of ${s.total}`
      : close ? `No perfect match yet · <b>${close}</b> close match${close === 1 ? '' : 'es'}`
      : 'No perfect match yet. Here are the closest.';
  }

  function renderChips(a) {
    $('[data-chips]').innerHTML = Q.map(q => a[q.key]
      ? `<button class="fchip fchip--on" data-clear="${q.key}" aria-label="Remove ${esc(label(q, a[q.key]))}">${esc(label(q, a[q.key]))} ×</button>`
      : `<button class="fchip fchip--add" data-ask="${q.key}"><b>+</b> ${esc(q.short)}</button>`).join('');
  }

  function renderRail(a) {
    const groups = Q.map(q => `<div class="rail-q__group">
      <h3>${esc(q.short)}${a[q.key] ? `<button class="link-btn" data-clear="${q.key}">Clear</button>` : ''}</h3>
      <div class="rail-q__opts">${q.answers.map(x => `<button data-set="${q.key}:${x.key}" aria-pressed="${a[q.key] === x.key}">${q.type === 'swatch' ? `<i style="background:${x.visual}"></i>` : ''}${esc(x.title)}</button>`).join('')}</div>
    </div>`).join('');
    $('[data-rail]').innerHTML = groups + `<p class="rail-q__note">These aren't filters you have to figure out. They're the questions a <b>KIKO</b> beauty advisor would ask you.</p>`;
  }

  function sorted(list) {
    const by = { 'price-asc': (x, y) => x.price - y.price, 'price-desc': (x, y) => y.price - x.price, rating: (x, y) => y.rating - x.rating };
    return by[sort] ? list.slice().sort(by[sort]) : list;
  }

  function renderGrid(a, s) {
    const open = Q.filter(q => !a[q.key]).slice(0, INLINE_AFTER.length);
    let items;
    if (sort === 'best') {
      items = s.matched.map(p => ({ p }));
      if (s.matched.length && s.others.length) items.push({ divider: 'Other foundations' });
      items = items.concat(s.others.map(p => ({ p })));
    } else {
      items = sorted(s.matched.concat(s.others)).map(p => ({ p }));
    }
    // Insert inline question cards after the 4th and 10th product.
    let products = 0; const out = [];
    for (const it of items) {
      out.push(it);
      if (it.p) {
        products++;
        const at = INLINE_AFTER.indexOf(products);
        if (at !== -1 && open[at]) out.push({ q: open[at] });
      }
    }
    const grid = $('[data-grid]');
    grid.innerHTML = out.map(it => {
      if (it.divider) return `<div class="grid__divider" role="separator">${esc(it.divider)}</div>`;
      if (it.q) return `<div class="qcard" data-inline="${it.q.key}"></div>`;
      return Ui.card(it.p, a);
    }).join('');
    grid.querySelectorAll('[data-inline]').forEach(el => {
      const q = Q.find(x => x.key === el.dataset.inline);
      Question.render(el, q, null, v => State.setAnswer(q.key, v, 'plp'), { variant: 'card', step: 'Help us narrow it down' });
    });
  }

  function render() {
    const a = State.getAnswers();
    const s = Match.summary(P, a);
    renderHead(a, s); renderChips(a); renderRail(a); renderGrid(a, s);
  }

  document.addEventListener('click', e => {
    const clear = e.target.closest('[data-clear]');
    if (clear) State.clearAnswer(clear.dataset.clear);
    const set = e.target.closest('[data-set]');
    if (set) {
      const [k, v] = set.dataset.set.split(':');
      if (State.getAnswers()[k] === v) State.clearAnswer(k); else State.setAnswer(k, v, 'plp');
    }
    const ask = e.target.closest('[data-ask]');
    if (ask) {
      const q = Q.find(x => x.key === ask.dataset.ask);
      const dlg = document.getElementById('dlg-q');
      Question.render(dlg.querySelector('[data-q-slot]'), q, null, v => { State.setAnswer(q.key, v, 'plp'); dlg.close(); }, { variant: 'inline' });
      dlg.showModal();
    }
  });
  $('[data-sort]').addEventListener('change', e => { sort = e.target.value; render(); });
  State.onChange(render);
  render();
})();
