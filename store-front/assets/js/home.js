(function () {
  Shell.mount({ page: 'home' });
  const Q = CATALOG.questions;
  const P = CATALOG.products;
  const $ = s => document.querySelector(s);
  let idx = firstOpen(0);
  let lastCount = null;
  let advanceFrom = null;

  function firstOpen(from) {
    const a = State.getAnswers();
    for (let i = from; i < Q.length; i++) if (!a[Q[i].key]) return i;
    return Q.length; // done
  }

  function renderHero() {
    const a = State.getAnswers();
    $('[data-dots]').innerHTML = Q.map((q, i) =>
      `<button type="button" class="${a[q.key] ? 'is-done' : ''} ${i === idx ? 'is-current' : ''}" data-go="${i}" aria-label="Question ${i + 1}: ${Ui.esc(q.short)}"></button>`).join('');
    $('[data-dots]').querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { idx = +b.dataset.go; renderHero(); }));

    const slot = $('[data-hero-q]');
    if (idx >= Q.length) {
      const chips = Match.reasons(P[0], a).map(r => `<span class="chip">${Ui.esc(r.label)}</span>`).join('');
      slot.innerHTML = `<div class="hero__done"><div class="eyebrow">Your foundation profile</div><h3>${chips ? 'The store is now tuned to you.' : 'Browse freely, or tell us a little about your skin.'}</h3>
        <div class="hero__chips">${chips}</div>
        <button class="link-btn" data-restart>${chips ? 'Edit answers' : 'Start the questions'}</button></div>`;
      slot.querySelector('[data-restart]').addEventListener('click', () => { idx = 0; renderHero(); });
    } else {
      Question.render(slot, Q[idx], a[Q[idx].key], v => {
        advanceFrom = idx; // onChange moves to the next open question and re-renders
        State.setAnswer(Q[idx].key, v, 'home');
      }, { variant: 'hero', step: `Question ${idx + 1} of ${Q.length}`, onSkip: () => { idx = idx + 1; renderHero(); } });
    }

    const s = Match.summary(P, a);
    const cta = $('[data-hero-cta]');
    cta.hidden = Object.keys(a).length === 0;
    if (!cta.hidden) {
      const pop = lastCount !== null && lastCount !== s.count ? ' class="count-pop"' : '';
      cta.innerHTML = s.count
        ? `<span class="count"><b${pop}>${s.count}</b> great match${s.count === 1 ? '' : 'es'} of ${s.total} foundations</span><a class="btn btn--accent" href="plp.html">See your matches →</a>`
        : `<span class="count">No perfect match yet</span><a class="btn btn--accent" href="plp.html">See closest matches →</a>`;
    }
    lastCount = s.count;
  }

  function renderRail() {
    const a = State.getAnswers();
    const any = Object.keys(a).length > 0;
    const list = (any ? Match.rank(P, a) : P.filter(p => p.category === 'foundation').sort((x, y) => y.rating - x.rating)).slice(0, 8);
    $('[data-rail-title]').textContent = any ? 'Matched for you' : 'Bestsellers';
    $('[data-rail-sub]').textContent = any ? 'Based on: ' + Match.reasons(P[0], a).map(r => r.label).join(' · ') : '';
    $('[data-rail]').innerHTML = list.map(p => Ui.card(p, a)).join('');
  }

  function renderFinish() {
    const q = Q.find(x => x.key === 'finish');
    const cur = State.getAnswers().finish;
    $('[data-finish]').innerHTML = q.answers.map(x =>
      `<button type="button" class="finish-tile" data-finish-key="${x.key}" aria-pressed="${cur === x.key}"><span style="background:${x.visual}"></span><span><b>${x.title}</b><small>${x.hint}</small></span></button>`).join('');
    $('[data-finish]').querySelectorAll('[data-finish-key]').forEach(b => b.addEventListener('click', () => {
      State.setAnswer('finish', b.dataset.finishKey, 'home');
      location.href = 'plp.html';
    }));
  }

  function renderEditorial() {
    const a = State.getAnswers();
    const top = Match.rank(P, a)[0];
    $('[data-editorial]').href = 'pdp.html?id=' + encodeURIComponent(top.id);
    $('[data-editorial-art]').innerHTML = Ui.packshot(top, Match.suggestShade(top, a));
  }

  function renderAll() { renderHero(); renderRail(); renderFinish(); renderEditorial(); }
  // Any change (hero, profile sheet, clear) re-renders everything, so the hero never shows a stale count.
  State.onChange(() => {
    if (advanceFrom !== null) {
      idx = firstOpen(advanceFrom + 1);
      if (idx >= Q.length) idx = firstOpen(0);
      advanceFrom = null;
    }
    if (!Object.keys(State.getAnswers()).length) idx = 0; // e.g. incognito on: start the questions over
    renderAll();
  });
  renderAll();
})();
