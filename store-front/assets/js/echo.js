/* Poltio Echo: a personal verdict on this product, written from the shopper's answers.
   In the demo the "LLM" text is templated and streamed in. */
(function (root) {
  const { esc } = root.Ui;
  const HIDE_KEY = 'kikoDemo.echoHidden';
  const VERDICT = {
    great: ['ok', 'Great fit for you'],
    good: ['warn', 'Fits, with a trade-off'],
    other: ['bad', 'Might not suit you'],
  };
  const list = arr => arr.length < 2 ? arr.join('') : arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
  const title = (key, value) => {
    const q = root.CATALOG.questions.find(x => x.key === key);
    const a = q && q.answers.find(x => x.key === value);
    return a ? a.title : value;
  };
  const lc = s => s.toLowerCase();

  function hidden() { try { return sessionStorage.getItem(HIDE_KEY) === '1'; } catch (e) { return false; } }
  function setHidden(v) { try { v ? sessionStorage.setItem(HIDE_KEY, '1') : sessionStorage.removeItem(HIDE_KEY); } catch (e) {} }

  /* One check row per answered question: [state, label, value text]. */
  function checks(p, a, shade) {
    return root.Match.reasons(p, a).map(r => {
      const t = p.tags;
      let value;
      if (r.key === 'skinType') value = 'Made for ' + list(t.skinType.map(x => lc(title('skinType', x)))) + ' skin';
      if (r.key === 'finish') value = list(t.finish.map(x => title('finish', x))) + ' finish';
      if (r.key === 'coverage') value = list(t.coverage.map(x => title('coverage', x))) + ' coverage';
      if (r.key === 'depth') value = r.ok ? `${p.shades.filter(s => s.depth === a.depth).length} shades for ${lc(title('depth', a.depth))} skin` : `Closest shade: ${shade ? shade.code + ' ' + shade.name : '—'}`;
      if (r.key === 'undertone') value = a.undertone === 'not_sure' ? 'Shown with every undertone' : r.ok ? `${title('undertone', a.undertone)} shades available` : `No ${lc(title('undertone', a.undertone))} shades`;
      if (r.key === 'concern') value = 'Targets ' + list((t.concern || []).map(x => lc(title('concern', x))));
      if (value === undefined) value = list((t[r.key] || []).map(x => title(r.key, x))); // lipFinish, shadeFamily, step, routine
      return [r.ok ? 'ok' : 'bad', root.CATALOG.questions.find(q => q.key === r.key).short, value];
    });
  }

  function why(p, a, key) {
    const t = p.tags;
    if (key === 'skinType') return `it's designed for ${list(t.skinType.map(x => lc(title('skinType', x))))} skin, so on ${lc(title('skinType', a.skinType))} skin ${a.skinType === 'dry' ? 'it may cling to dry patches' : a.skinType === 'oily' ? 'it may look shiny by the afternoon' : 'it may not feel quite balanced'}`;
    if (key === 'finish') return `it gives a ${lc(list(t.finish.map(x => title('finish', x))))} finish rather than the ${lc(title('finish', a.finish))} look you asked for`;
    if (key === 'coverage') return `its coverage is ${lc(list(t.coverage.map(x => title('coverage', x))))}, not the ${lc(title('coverage', a.coverage))} coverage you wanted`;
    if (key === 'depth') return `the shade range doesn't include ${lc(title('depth', a.depth))} shades`;
    if (key === 'undertone') return `there are no ${lc(title('undertone', a.undertone))}-undertone shades`;
    if (key === 'concern') return `it targets ${lc(list((t.concern || []).map(x => title('concern', x))))} rather than ${lc(title('concern', a.concern))}`;
    const q = root.CATALOG.questions.find(x => x.key === key);
    return `it's ${lc(list((t[key] || []).map(x => title(key, x))))} rather than the ${lc(title(key, a[key]))} ${lc(q.short)} you asked for`;
  }

  function message(p, a, tier, shade, alt) {
    const rs = root.Match.reasons(p, a);
    const ok = rs.filter(r => r.ok).map(r => lc(r.label));
    const bad = rs.filter(r => !r.ok);
    const shadeLine = shade && a.depth ? ` We'd start with shade <strong>${esc(shade.code)} ${esc(shade.name)}</strong>.` : '';
    if (tier === 'great') {
      return `<strong>This is a great fit for you.</strong> ${esc(p.name)} ticks every box you told us about: ${esc(list(ok))}.${shadeLine}`;
    }
    if (tier === 'good') {
      return `<strong>It fits, with one trade-off.</strong> You get ${esc(list(ok))}, but ${esc(why(p, a, bad[0].key))}.${shadeLine}`;
    }
    return `<strong>This one probably isn't for you.</strong> ${esc(why(p, a, bad[0].key)[0].toUpperCase() + why(p, a, bad[0].key).slice(1))}${bad[1] ? `, and ${esc(why(p, a, bad[1].key))}` : ''}.${alt ? ' Our pick below is a closer match.' : ''}`;
  }

  let timer;
  function stream(el, html) {
    clearInterval(timer);
    const reduce = root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.innerHTML = html; return; }
    const plain = html.replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
    let i = 0;
    el.classList.add('typing');
    timer = setInterval(() => {
      i += 3;
      if (i >= plain.length) { clearInterval(timer); el.innerHTML = html; el.classList.remove('typing'); return; }
      el.textContent = plain.slice(0, i);
    }, 16);
  }

  const MARK = '<span class="echo-mark"><span class="echo-dot" aria-hidden="true"></span>Echo <small>by Poltio</small></span>';

  /* render(container, product, answers, { shade, onEditAnswers }) */
  function render(el, p, a, opts = {}) {
    if (hidden()) {
      el.innerHTML = `<button class="link-btn echo-restore" type="button">Show Echo's take on this product</button>`;
      el.querySelector('button').addEventListener('click', () => { setHidden(false); render(el, p, a, opts); });
      return;
    }
    const keys = root.Match.keysFor(p.category);
    const answered = keys.some(k => a[k]);
    if (!answered) {
      el.innerHTML = `<div class="echo echo--invite"><div class="echo__hd">${MARK}</div>
        <div class="echo__bd"><p class="echo__msg">Is this ${p.category === 'foundation' ? 'the right foundation' : 'right'} for you? Answer one question and Echo will tell you.</p><div data-echo-q></div></div></div>`;
      const q = root.CATALOG.questions.find(x => x.key === keys[0]);
      root.Question.render(el.querySelector('[data-echo-q]'), q, null, v => root.State.setAnswer(q.key, v, 'pdp'), { variant: 'inline' });
      return;
    }
    const tier = root.Match.tier(p, a);
    const [cls, label] = VERDICT[tier];
    const shade = opts.shade || root.Match.suggestShade(p, a);
    const top = root.Profile.bestVisible(a, p.category, root.State.getShowAll()); // never suggest a hidden product
    const alt = top && top.id !== p.id && root.Match.score(top, a) > root.Match.score(p, a) ? top : null;
    const icon = { ok: '✓', bad: '✕' };
    el.innerHTML = `<div class="echo">
      <div class="echo__hd">${MARK}<span class="verdict v-${cls}">${label}</span></div>
      <div class="echo__bd">
        <p class="echo__msg" data-msg aria-live="polite"></p>
        <div class="echo__checks">${checks(p, a, shade).map(c => `<div class="echo__check"><span class="ic ic--${c[0]}" aria-label="${c[0] === 'ok' ? 'Matches' : 'Does not match'}">${icon[c[0]]}</span><span>${esc(c[1])}</span><span class="val">${esc(c[2])}</span></div>`).join('')}</div>
        ${alt ? `<a class="echo__alt" href="pdp.html?id=${encodeURIComponent(alt.id)}"><span class="echo__alt-img">${root.Ui.packshot(alt, root.Match.suggestShade(alt, a))}</span><span class="echo__alt-tx"><small>Our pick for you</small><b>${esc(alt.name)}</b><span>${root.Ui.price(alt.price)} · ${root.Match.tier(alt, a) === 'great' ? 'Great match' : 'Closer match'}</span></span><span class="echo__alt-go">See it →</span></a>` : ''}
      </div>
      <div class="echo__ft"><button class="link-btn" type="button" data-open="profile">Edit my answers</button><button class="link-btn muted" type="button" data-hide>Hide for this visit</button></div>
    </div>`;
    stream(el.querySelector('[data-msg]'), message(p, a, tier, shade, alt));
    el.querySelector('[data-hide]').addEventListener('click', () => { setHidden(true); render(el, p, a, opts); });
  }

  root.Echo = { render };
})(window);
