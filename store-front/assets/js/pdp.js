(function () {
  const id = new URLSearchParams(location.search).get('id');
  const p = id && CATALOG.products.find(x => x.id === id);
  if (!p) { location.replace('plp.html'); return; }

  Shell.mount({ page: 'pdp' });
  const $ = s => document.querySelector(s);
  const { esc } = Ui;
  const Q = CATALOG.questions;
  const isFoundation = p.category === 'foundation';
  let picked = null; // shade the shopper chose by hand; otherwise follow the suggestion

  document.title = p.name + ' · KIKO Milano Austria';
  $('[data-crumb]').textContent = p.name;
  $('[data-name]').textContent = p.name;
  $('[data-stars]').innerHTML = Ui.stars(p);
  $('[data-price]').textContent = Ui.price(p.price);
  $('[data-buy-price]').textContent = Ui.price(p.price);
  $('[data-blurb]').textContent = p.blurb;
  if (!isFoundation) {
    const kind = p.category === 'primer' ? 'Primer' : p.category === 'powder' ? 'Setting powder' : 'Setting spray';
    $('.pdp__info .eyebrow').textContent = kind;
    $('.crumbs a[href="plp.html"]').textContent = 'Face';
  }

  const title = (k, v) => (Q.find(q => q.key === k).answers.find(x => x.key === v) || {}).title;

  function currentShade(a) {
    if (picked) return p.shades.find(s => s.code === picked);
    return Match.suggestShade(p, a) || p.shades[Math.floor(p.shades.length / 2)];
  }

  function renderShades(a) {
    const shade = currentShade(a);
    $('[data-hero]').innerHTML = Ui.packshot(p, shade);
    $('[data-shade-name]').textContent = shade.code === 'U' ? 'Universal' : `${shade.code} ${shade.name}`;
    const sugg = Match.suggestShade(p, a);
    const exact = sugg && sugg.depth === a.depth;
    $('[data-shade-note]').innerHTML = isFoundation && sugg && sugg.code === shade.code
      ? `★ ${exact ? 'Suggested for' : 'Closest to'} ${esc(title('depth', a.depth))}${a.undertone && a.undertone !== 'not_sure' ? ' · ' + esc(title('undertone', a.undertone)) : ''}` : '';
    const depthSlot = $('[data-depth-q]');
    if (isFoundation && !a.depth) {
      Question.render(depthSlot, Q.find(q => q.key === 'depth'), null, v => State.setAnswer('depth', v, 'pdp'),
        { variant: 'inline', sub: "Tell us your skin tone and we'll pick the shade for you." });
    } else depthSlot.innerHTML = '';
    if (!isFoundation) { document.querySelector('.shades').hidden = true; return; }
    $('[data-shades]').innerHTML = p.shades.map(s =>
      `<button type="button" role="radio" aria-checked="${s.code === shade.code}" class="sw${sugg && s.code === sugg.code ? ' is-sugg' : ''}" data-shade="${s.code}" style="--c:${s.hex}" title="${esc(s.code + ' ' + s.name)}"><span class="visually-hidden">${esc(s.code + ' ' + s.name)}</span></button>`).join('');
  }

  function renderEcho(a) {
    if (!isFoundation) { $('[data-echo]').innerHTML = ''; return; }
    Echo.render($('[data-echo]'), p, a, { shade: currentShade(a) });
  }

  function renderShadeMatch(a) {
    if (!isFoundation) return;
    ShadeMatch.render($('[data-shade-match]'), p, a, { shade: currentShade(a), onPickShade: code => { picked = code; renderAll(); } });
  }

  function renderPairs(a) {
    const st = a.skinType || 'normal';
    const ids = (CATALOG.pairsWith[st] || []).filter(x => x !== p.id);
    $('[data-pairs-wrap]').hidden = !ids.length;
    $('[data-pairs-sub]').textContent = a.skinType ? `Picked for ${title('skinType', st).toLowerCase()} skin` : 'Most bought together';
    $('[data-pairs]').innerHTML = ids.map(i => Ui.card(Ui.byId(i), {})).join('');
  }

  function renderHowTo(a) {
    const st = a.skinType || 'normal';
    $('[data-howto]').innerHTML = `<div class="howto__card"><p class="eyebrow">How to apply</p>
      <h2>${a.skinType ? `For ${esc(title('skinType', st).toLowerCase())} skin` : 'Our advisors suggest'}</h2><p>${esc(p.howTo[st])}</p></div>`;
  }

  function renderAll() {
    const a = State.getAnswers();
    renderShades(a); renderEcho(a); renderShadeMatch(a); renderPairs(a); renderHowTo(a);
  }

  document.addEventListener('click', e => {
    const sw = e.target.closest('[data-shade]');
    if (sw) { picked = sw.dataset.shade; renderAll(); }
    if (e.target.closest('[data-add]')) {
      const a = State.getAnswers();
      const shade = currentShade(a);
      const sugg = Match.suggestShade(p, a);
      State.logEvent({ type: 'add', id: p.id, shade: shade.code, suggested: !!(sugg && sugg.code === shade.code), tier: Match.tier(p, a), from: 'pdp' });
      State.addToCart(p.id, shade.code);
      Ui.toast(`Added · ${shade.code === 'U' ? esc(p.name) : 'Shade ' + esc(shade.code)} <a href="cart.html">View bag</a>`);
    }
  });
  State.onChange(renderAll);
  renderAll();
})();
