(function () {
  Shell.mount({ page: 'home' });
  const P = CATALOG.products;
  const $ = s => document.querySelector(s);
  const { esc } = Ui;
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const catOf = k => CATALOG.categories.find(c => c.key === k);

  let idx = null;          // onboarding: current question index
  let advanceKey = null;   // onboarding: the key just answered (move past it on change)
  let finishing = false;   // onboarding: showing "Your store is ready"
  let slide = 0;           // personalized hero: current slide, kept across re-renders
  let finishTimer = null;
  const profileId = () => State.isIncognito() + '|' + State.isOnboarded();
  let lastProfile = profileId();

  const ctx = () => ({ a: State.getAnswers(), log: State.getLog(), show: State.getShowAll() });

  /* ---------- onboarding hero (first visit) ---------- */
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

    const hero = $('[data-hero]');
    hero.innerHTML = `<div class="hero__copy">
        <p class="eyebrow hero__eyebrow">Welcome to KIKO</p>
        <h1 class="hero__title">Let's get to know you.</h1>
        <p class="hero__lede">${qs.length === 3 ? 'Three' : 'Four'} quick taps and the whole store rearranges around you.</p>
      </div>
      <div class="hero__card">
        <div class="hero__progress">${qs.map((q, i) => `<button type="button" class="${a[q.key] ? 'is-done' : ''} ${i === idx ? 'is-current' : ''}" data-go="${i}" aria-label="Question ${i + 1}: ${esc(q.short)}${a[q.key] ? ', answered' : ''}"${i === idx ? ' aria-current="step"' : ''}></button>`).join('')}</div>
        <div data-hero-q></div>
      </div>`;
    hero.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { idx = +b.dataset.go; renderOnboarding(); }));
    const q = qs[idx];
    Question.render(hero.querySelector('[data-hero-q]'), q, a[q.key], v => {
      advanceKey = q.key;
      State.setAnswer(q.key, v, 'onboarding');
    }, { variant: 'hero', step: `Question ${idx + 1} of ${qs.length}`, onSkip: () => {
      const next = qs.findIndex((x, i) => i > idx && !a[x.key]); // skip past already-answered questions too
      if (next === -1) finish(); else { idx = next; renderOnboarding(); }
    } });
  }

  function finish() {
    if (finishing) return;
    finishing = true;
    const card = $('[data-hero] .hero__card') || $('[data-hero]');
    card.innerHTML = `<div class="hero__ready" role="status"><span class="hero__tick">✓</span><h3>Your store is ready.</h3><p>Everything you see now is picked for you.</p></div>`;
    const forProfile = profileId();
    finishTimer = setTimeout(() => {
      finishing = false; idx = null;
      if (profileId() === forProfile) State.setOnboarded(true); // don't mark a profile switched to meanwhile
    }, reduce ? 0 : 1200);
  }

  /* ---------- personalized hero (every later visit) ---------- */
  function renderPersonal() {
    const { a, log, show } = ctx();
    const d = Profile.discover(a, log, show);
    const picks = Profile.picks(a, log, show);
    const next = Profile.nextQuestion(a, d && d.cat);
    const about = Profile.onboardingQuestions(a).filter(q => a[q.key]).map(q => q.answers.find(x => x.key === a[q.key]).title).slice(0, 3);

    const slides = [];
    if (d) {
      const c = catOf(d.cat);
      const why = Match.reasons(d.product, a).filter(r => r.ok).map(r => r.label).slice(0, 3).join(' · ');
      slides.push(`<div class="slide slide--discover">
        <a class="slide__art" href="pdp.html?id=${encodeURIComponent(d.product.id)}">${Ui.packshot(d.product, Match.suggestShade(d.product, a))}</a>
        <div class="slide__copy">
          <p class="eyebrow">Discover · new for you in ${esc(c.plural)}</p>
          <h3>${esc(d.product.name)}</h3>
          ${why ? `<p class="slide__why">${esc(why)}</p>` : ''}
          <p class="slide__price">${Ui.price(d.product.price)} ${Ui.stars(d.product)}</p>
          <div class="slide__cta"><a class="btn btn--accent" href="plp.html?cat=${d.cat}">Discover ${esc(c.plural)}</a><a class="link-btn" href="pdp.html?id=${encodeURIComponent(d.product.id)}">View product</a></div>
        </div></div>`);
    }
    slides.push(`<div class="slide slide--picks"><p class="eyebrow">Your picks</p><h3>Top match in every category</h3>
      <div class="picks">${picks.map(p => Ui.card(p, a)).join('')}</div></div>`);
    slides.push(`<div class="slide slide--ask" data-ask-slot></div>`);

    $('[data-hero]').innerHTML = `<div class="hero__copy">
        <p class="eyebrow hero__eyebrow">Your store</p>
        <h1 class="hero__title">Welcome back.</h1>
        ${about.length ? `<div class="hero__about">${about.map(t => `<span class="chip chip--light">${esc(t)}</span>`).join('')}</div>` : ''}
        <button class="link-btn hero__edit" data-open="profile">Edit profile ›</button>
      </div>
      <div class="hero__card hero__card--slides">
        <div class="slides" data-slides tabindex="0" role="region" aria-roledescription="carousel" aria-label="Picked for you">${slides.join('')}</div>
        <div class="slides__dots">${slides.map((_, i) => `<button type="button" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}</div>
      </div>`;

    const ask = $('[data-ask-slot]');
    if (next) {
      Question.render(ask, next, null, v => State.setAnswer(next.key, v, 'home'), { variant: 'card', step: 'Keep teaching us' });
    } else {
      ask.innerHTML = `<p class="eyebrow">Keep teaching us</p><h3>That's all we need to ask.</h3><p class="q__sub">We'll keep learning as you shop: every filter and search adds to your profile.</p><button class="link-btn" data-open="profile">Edit profile ›</button>`;
    }

    const track = $('[data-slides]');
    const dots = [...document.querySelectorAll('[data-dot]')];
    slide = Math.min(slide, slides.length - 1);
    const mark = () => dots.forEach((b, i) => { b.classList.toggle('is-on', i === slide); b.setAttribute('aria-pressed', i === slide); });
    track.scrollLeft = track.clientWidth * slide;
    mark();
    track.addEventListener('scroll', () => { slide = Math.round(track.scrollLeft / track.clientWidth); mark(); }, { passive: true });
    dots.forEach(b => b.addEventListener('click', () => { slide = +b.dataset.dot; track.scrollTo({ left: track.clientWidth * slide, behavior: reduce ? 'auto' : 'smooth' }); mark(); }));
  }

  /* ---------- below the hero ---------- */
  function renderRails() {
    const { a, show } = ctx();
    $('[data-rails]').innerHTML = Profile.navCategories(a, show).map(c => {
      const list = Match.rank(Profile.visibleIn(c.key, a, show).products, a, c.key).slice(0, 8);
      const personal = Match.keysFor(c.key).some(k => a[k]);
      return `<section class="wrap section"><div class="section__head">
          <div><h2>${personal ? `Matched for you in ${esc(c.plural)}` : `Popular in ${esc(c.plural)}`}</h2></div>
          <a class="link-btn" href="plp.html?cat=${c.key}">See all</a></div>
        <div class="rail">${list.map(p => Ui.card(p, a)).join('')}</div></section>`;
    }).join('');
  }

  function renderCats() {
    const { a, show } = ctx();
    $('[data-cats]').innerHTML = Profile.navCategories(a, show).map(c => {
      const top = Profile.bestVisible(a, c.key, show);
      return `<a class="cat-tile" href="plp.html?cat=${c.key}"><span class="cat-tile__art">${top ? Ui.packshot(top, Match.suggestShade(top, a)) : ''}</span><b>${esc(c.plural)}</b></a>`;
    }).join('');
  }

  function renderEditorial() {
    const { a, show } = ctx();
    const top = Profile.bestVisible(a, 'foundation', show);
    $('[data-editorial-wrap]').hidden = !top;
    if (!top) return;
    $('[data-editorial]').href = 'pdp.html?id=' + encodeURIComponent(top.id);
    $('[data-editorial-art]').innerHTML = Ui.packshot(top, Match.suggestShade(top, a));
  }

  /* "Show everything" is on: say so on home too, with the way back. */
  function renderShowAll() {
    const el = $('[data-home-showall]');
    const { a, show } = ctx();
    el.hidden = !(show && a.shopFor && a.shopFor !== 'everything');
    if (!el.hidden) el.innerHTML = `<span>Showing <b>everything</b> · your profile is set to ${esc(Profile.label(a))}</span><button class="btn btn--ghost" data-showall-off>Back to my picks</button>`;
  }

  function renderAll() {
    renderShowAll();
    if (State.isOnboarded()) renderPersonal(); else renderOnboarding();
    renderRails(); renderCats(); renderEditorial();
  }
  document.addEventListener('click', e => { if (e.target.closest('[data-showall-off]')) State.setShowAll(false); });
  State.onChange(() => {
    if (profileId() !== lastProfile) { // incognito toggled, reset, or onboarding just finished: start that profile fresh
      lastProfile = profileId();
      clearTimeout(finishTimer); finishing = false; idx = null; advanceKey = null; slide = 0;
    }
    if (!Object.keys(State.getAnswers()).length) idx = null; // profile emptied (Start over): back to question 1
    if (!finishing) renderAll();
  });
  renderAll();
})();
