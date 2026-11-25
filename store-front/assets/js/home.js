(function () {
  Shell.mount({ page: 'home' });
  const P = CATALOG.products;
  const $ = s => document.querySelector(s);
  const { esc } = Ui;
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const byId = id => P.find(p => p.id === id);

  /* Free Unsplash photography, linked from their CDN (licence allows hotlinking). */
  const IMG = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;
  const PHOTO = {
    heroMakeup: '1648249969490-44f3052a3721',
    heroMen: '1607613992484-4df4d97b48fe',
    prep: '1620916297397-a4a5402a3c6c',
    base: '1695990190064-e8ca2ca16af6',
    lips: '1631214499500-2e34edcaccfe',
    wash: '1567721971759-12402aedabf0',
    treat: '1763986668655-413d55a24f6a',
    protect: '1775127741091-cb7c89cedc78',
    tileFoundation: '1713207524097-596f3c17afc3',
    tileLips: '1626895872564-b691b6877b83',
    tileSkincare: '1583209814683-c023dd293cc6',
    tileMen: '1607613992484-4df4d97b48fe',
  };

  /* The routine, in the order it's applied. `from` lists the products a step may pick from. */
  const ROUTINES = {
    makeup: [
      { key: 'prep', title: 'Prep', line: 'Skin that takes make-up well', photo: 'prep', cat: 'skincare' },
      { key: 'base', title: 'Base', line: 'A foundation that disappears into your skin', photo: 'base', cat: 'foundation' },
      { key: 'lips', title: 'Lips', line: 'The colour that finishes the look', photo: 'lips', cat: 'lips' },
    ],
    men: [
      { key: 'wash', title: 'Wash', line: 'Start clean, every morning', photo: 'wash', cat: 'men', from: ['men-3in1-wash', 'men-charcoal-scrub'] },
      { key: 'treat', title: 'Treat', line: 'One step aimed at your concern', photo: 'treat', cat: 'skincare' },
      { key: 'protect', title: 'Protect', line: 'Moisture and shine control that lasts', photo: 'protect', cat: 'men', from: ['men-daily-hydrator', 'men-matte-control', 'men-eye-roll-on'] },
    ],
  };
  const TILES = {
    foundation: { title: 'Find your foundation', line: "Skin type, finish and tone. We'll pick the shade, too.", photo: 'tileFoundation' },
    lips: { title: 'Find your lip colour', line: 'Finish and colour family, matched to your style.', photo: 'tileLips' },
    skincare: { title: 'Build your skincare', line: 'Your skin type and concern, one step at a time.', photo: 'tileSkincare' },
    men: { title: "Men's grooming, simplified", line: 'Two steps or a full routine. Your call.', photo: 'tileMen' },
  };

  let idx = null, advanceKey = null, finishing = false, finishTimer = null;
  const profileId = () => State.isIncognito() + '|' + State.isOnboarded();
  let lastProfile = profileId();
  const ctx = () => ({ a: State.getAnswers(), log: State.getLog(), show: State.getShowAll() });
  const whyOf = (p, a) => {
    const out = Match.reasons(p, a).filter(r => r.ok).map(r => r.label);
    if (a.style && (p.tags.style || []).includes(a.style)) out.push(`your ${Q('style').answers.find(x => x.key === a.style).title.toLowerCase()} make-up style`);
    return out;
  };

  /* ---------- hero ---------- */
  function setHeroPhoto(a) {
    const img = $('[data-hero-img]');
    const men = a.shopFor === 'men' && !State.getShowAll();
    const id = men ? PHOTO.heroMen : PHOTO.heroMakeup;
    $('.h-hero').style.setProperty('--hero-ground', men ? '#8d9483' : '#b98d9b'); // sampled from each photo's backdrop
    $('.h-hero').classList.toggle('is-personal', State.isOnboarded());
    img.classList.toggle('is-mirrored', !men);
    const src = IMG(id, 2000);
    if (img.dataset.id === id) return;
    img.dataset.id = id;
    img.src = src;
    img.srcset = `${IMG(id, 800)} 800w, ${IMG(id, 1400)} 1400w, ${src} 2000w`;
    img.sizes = '100vw';
  }

  function swap(html, after) {
    const panel = $('[data-panel]');
    panel.classList.remove('is-in'); void panel.offsetWidth;
    panel.innerHTML = html;
    panel.classList.add('is-in');
    if (after) after(panel);
  }

  function renderOnboarding() {
    const { a } = ctx();
    const qs = Profile.onboardingQuestions(a);
    if (advanceKey !== null) {
      const from = qs.findIndex(q => q.key === advanceKey);
      idx = qs.findIndex((q, i) => i > from && !a[q.key]);
      advanceKey = null;
      if (idx === -1) return finish();
    }
    if (idx === null) { idx = qs.findIndex(q => !a[q.key]); if (idx === -1) return finish(); }
    if (idx >= qs.length) return finish();
    const q = qs[idx];
    swap(`<h1 class="display panel__title"><span>Let's find</span> <b>your KIKO</b></h1>
      <p class="panel__lede">${qs.length === 3 ? 'Three' : 'Four'} quick taps and the whole store rearranges around you.</p>
      <div class="panel__progress" role="list">${qs.map((x, i) => `<button type="button" role="listitem" class="${a[x.key] ? 'is-done' : ''}" data-go="${i}" aria-label="Question ${i + 1}: ${esc(x.short)}${a[x.key] ? ', answered' : ''}"${i === idx ? ' aria-current="step"' : ''}></button>`).join('')}</div>
      <div data-q></div>`, panel => {
      panel.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { idx = +b.dataset.go; renderOnboarding(); }));
      Question.render(panel.querySelector('[data-q]'), q, a[q.key], v => { advanceKey = q.key; State.setAnswer(q.key, v, 'onboarding'); },
        { variant: 'panel', onSkip: () => {
          const next = qs.findIndex((x, i) => i > idx && !a[x.key]);
          if (next === -1) finish(); else { idx = next; renderOnboarding(); }
        } });
    });
  }

  function finish() {
    if (finishing) return;
    finishing = true;
    swap(`<div class="panel__ready" role="status"><h1 class="display panel__title"><span>Your store</span> <b>is ready.</b></h1>
      <p class="panel__lede">Everything below is picked for you now.</p></div>`);
    const forProfile = profileId();
    finishTimer = setTimeout(() => {
      finishing = false; idx = null;
      if (profileId() === forProfile) State.setOnboarded(true);
    }, reduce ? 0 : 1400);
  }

  function renderPersonal() {
    const { a, log, show } = ctx();
    const d = Profile.discover(a, log, show);
    const next = Profile.nextQuestion(a, d && d.cat);
    const p = d && d.product;
    const why = p ? whyOf(p, a) : [];
    const cat = p && CATALOG.categories.find(c => c.key === p.category);
    swap(`<h1 class="display panel__title"><span>Picked for</span> <b>you</b></h1>
      ${p ? `<a class="pick" href="pdp.html?id=${encodeURIComponent(p.id)}">
        <span class="pick__art">${Ui.packshot(p, Match.suggestShade(p, a))}</span>
        <span class="pick__tx"><b>${esc(p.name)}</b>
        ${why.length ? `<span class="pick__why">Because you said: ${esc(why.slice(0, 3).join(', ').toLowerCase())}</span>` : ''}
        <span class="pick__price">${Ui.price(p.price)}</span></span></a>` : ''}
      <div class="panel__next" data-q></div>
      <button class="link-btn panel__edit" data-open="profile">Your profile</button>`, panel => {
      const slot = panel.querySelector('[data-q]');
      if (next) Question.render(slot, next, null, v => State.setAnswer(next.key, v, 'home'), { variant: 'panel', sub: 'Help us pick better' });
      else slot.innerHTML = `<p class="panel__lede">That's all we need to ask. We'll keep learning as you shop.</p>`;
    });
  }

  /* ---------- routine ---------- */
  function routineFor(a) {
    return a.shopFor === 'men' && !State.getShowAll() ? ROUTINES.men : ROUTINES.makeup;
  }

  function renderRoutine() {
    const { a, show } = ctx();
    const steps = routineFor(a).map(step => {
      let pool = Profile.visibleIn(step.cat, a, show).products;
      if (step.from) pool = pool.filter(p => step.from.includes(p.id));
      const ranked = Match.rank(pool, a, step.cat);
      return { step, pick: ranked[0], alts: ranked.slice(1, 3) };
    }).filter(s => s.pick);

    const t = k => a[k] && Q(k).answers.find(x => x.key === a[k]).title.toLowerCase();
    const said = [a.skinType && `${t('skinType')} skin`, a.concern && Match.reasons({ category: 'skincare', tags: {}, shades: [] }, { concern: a.concern })[0].label.toLowerCase(), a.style && `a ${t('style')} look`].filter(Boolean);
    const phrase = said.length > 1 ? said.slice(0, -1).join(', ') + ' and ' + said[said.length - 1] : said[0];
    $('[data-routine-sub]').innerHTML = said.length
      ? `Picked for <b>${esc(phrase)}</b>. Every answer you give re-picks these.`
      : 'Our bestsellers in the order you apply them. Answer a question above and they become yours.';

    $('[data-routine]').innerHTML = steps.map(({ step, pick, alts }, i) => {
      const why = whyOf(pick, a);
      const shade = Match.suggestShade(pick, a);
      return `<li class="step${i % 2 ? ' step--flip' : ''}">
        <figure class="step__photo">
          <img src="${IMG(PHOTO[step.photo], 1200)}" srcset="${IMG(PHOTO[step.photo], 700)} 700w, ${IMG(PHOTO[step.photo], 1200)} 1200w" sizes="(min-width: 900px) 55vw, 100vw" alt="" loading="lazy">
          <figcaption class="step__name"><span class="step__n">${i + 1}</span>${esc(step.title)}</figcaption>
          <a class="step__pack" href="pdp.html?id=${encodeURIComponent(pick.id)}" aria-label="${esc(pick.name)}">${Ui.packshot(pick, shade)}</a>
        </figure>
        <div class="step__body">
          <p class="step__line">${esc(step.line)}</p>
          <h3 class="step__title"><a href="pdp.html?id=${encodeURIComponent(pick.id)}">${esc(pick.name)}</a></h3>
          <p class="step__why">${why.length
            ? `<b>Why it's yours:</b> ${esc(why.join(', ').toLowerCase())}.${shade && a.depth ? ` Shade ${esc(shade.code)} ${esc(shade.name)} for your tone.` : ''}`
            : `<b>Popular pick.</b> ${esc(pick.blurb)}`}</p>
          ${pick.category === 'lips' ? `<p class="step__dots" aria-label="${pick.shades.length} shades">${pick.shades.map(x => `<i style="background:${x.hex}" title="${esc(x.name)}"></i>`).join('')}</p>` : ''}
          <p class="step__meta"><span class="step__price">${Ui.price(pick.price)}</span><span>${pick.rating.toFixed(1)} rating · ${pick.reviewCount.toLocaleString('en')} reviews</span></p>
          <div class="step__cta">
            <button class="pill pill--dark" data-add="${esc(pick.id)}" data-shade="${esc((shade || pick.shades[0]).code)}">Add to bag</button>
            <a class="pill" href="pdp.html?id=${encodeURIComponent(pick.id)}">View</a>
          </div>
          ${alts.length ? `<div class="step__alts"><span>Also matches you</span><div class="alts">${alts.map(x => `<a class="alt" href="pdp.html?id=${encodeURIComponent(x.id)}"><span class="alt__art">${Ui.packshot(x, Match.suggestShade(x, a))}</span><span class="alt__name">${esc(x.name)}</span><span class="alt__price">${Ui.price(x.price)}</span></a>`).join('')}</div></div>` : ''}
        </div>
      </li>`;
    }).join('');
  }

  /* ---------- how can we help ---------- */
  function renderHelp() {
    const { a, show } = ctx();
    const cats = Profile.navCategories(a, show);
    $('[data-help]').style.setProperty('--n', cats.length); // the grid fills its row however many paths are shown
    $('[data-help]').innerHTML = cats.map(c => {
      const t = TILES[c.key];
      const keys = Match.keysFor(c.key);
      const done = keys.filter(k => a[k]).length;
      const s = Match.summary(Profile.visibleIn(c.key, a, show).products, a, c.key);
      const status = done
        ? `${done} of ${keys.length} answered · <b>${s.count} great match${s.count === 1 ? '' : 'es'}</b>`
        : `${keys.length} quick question${keys.length === 1 ? '' : 's'}`;
      return `<article class="tile">
        <a class="tile__photo" href="plp.html?cat=${c.key}" tabindex="-1" aria-hidden="true"><img src="${IMG(PHOTO[t.photo], 900)}" alt="" loading="lazy"></a>
        <h3 class="tile__title">${esc(t.title)}</h3>
        <p class="tile__line">${esc(t.line)}</p>
        <p class="tile__status">${status}</p>
        <a class="pill pill--block" href="plp.html?cat=${c.key}">${done ? 'See your matches' : 'Start'}</a>
      </article>`;
    }).join('');
  }

  /* ---------- shade match teaser ---------- */
  function renderMatch() {
    const { a, show } = ctx();
    const top = Profile.bestVisible(a, 'foundation', show);
    $('[data-match]').hidden = !top;
    if (!top) return;
    // Same "buyers like you" group as the product page: depth + undertone, falling back to depth when too few.
    const s = ShadeMatch.stats(top, a, (Match.suggestShade(top, a) || {}).code);
    const tone = s.forLike ? s.keys.map(k => Q(k).answers.find(x => x.key === a[k]).title.toLowerCase()).join(', ') : '';
    // Report on the whole group: how many found a just-right shade, and which shade most of them chose.
    const n = s.rs.length, right = s.rs.filter(r => r.match === 'just_right').length;
    const most = s.rows[0] && s.rows[0].s;
    $('[data-match-panel]').innerHTML = `<h2 id="match-title" class="display"><span>Shade match from</span> <b>buyers like you</b></h2>
      <p class="match__lede">${s.forLike
        ? `After buying ${esc(top.name)}, buyers told us how their shade matched.`
        : `Tell us your skin tone and see how each shade matched people like you, before you buy.`}</p>
      ${s.forLike && n && most ? `<p class="match__stat"><span class="match__sw" style="background:${most.hex}"></span>
        <span><b>${right} of ${n}</b> buyers with ${esc(tone)} skin found a shade that was just right. Most chose ${esc(most.code)} ${esc(most.name)}.</span></p>` : ''}
      <a class="pill" href="pdp.html?id=${encodeURIComponent(top.id)}">${s.forLike ? 'See your shade' : 'Find your shade'}</a>
      <p class="match__note">Powered by Poltio · Reviews and products in this demo are invented.</p>`;
  }
  const Q = k => CATALOG.questions.find(q => q.key === k);

  function renderShowAll() {
    const el = $('[data-home-showall]');
    const { a, show } = ctx();
    el.hidden = !(show && a.shopFor && a.shopFor !== 'everything');
    if (!el.hidden) el.innerHTML = `<span>Showing <b>everything</b> · your profile is set to ${esc(Profile.label(a))}</span><button class="pill" data-showall-off>Back to my picks</button>`;
  }

  function renderAll() {
    const { a } = ctx();
    setHeroPhoto(a);
    renderShowAll();
    if (State.isOnboarded()) renderPersonal(); else renderOnboarding();
    renderRoutine(); renderHelp(); renderMatch();
  }

  document.addEventListener('click', e => {
    if (e.target.closest('[data-showall-off]')) State.setShowAll(false);
    const add = e.target.closest('[data-add]');
    if (add) {
      const p = byId(add.dataset.add);
      const a = State.getAnswers();
      const sugg = Match.suggestShade(p, a);
      State.logEvent({ type: 'add', id: p.id, shade: add.dataset.shade, suggested: !!(sugg && sugg.code === add.dataset.shade), tier: Match.tier(p, a), from: 'home' });
      State.addToCart(p.id, add.dataset.shade);
      Ui.toast(`Added · ${esc(p.name)} <a href="cart.html">View bag</a>`);
    }
  });
  State.onChange(() => {
    if (profileId() !== lastProfile) {
      lastProfile = profileId();
      clearTimeout(finishTimer); finishing = false; idx = null; advanceKey = null;
    }
    if (!Object.keys(State.getAnswers()).length) idx = null;
    if (!finishing) renderAll();
  });
  renderAll();
})();
