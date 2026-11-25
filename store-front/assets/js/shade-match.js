/* Reverse Fit for foundation: how each shade matched for buyers like you. */
(function (root) {
  const esc = s => root.Ui.esc(s);
  const MATCH = { too_light: 'Too light', just_right: 'Just right', too_dark: 'Too dark' };
  const COMMENTS = {
    just_right: ['Disappears into my skin, perfect match.', 'Exactly my shade, no orange cast at all.', 'Matched my neck in daylight, finally!', 'Bought it blind and it was spot on.'],
    too_light: ['A touch too light for me, I went one shade deeper.', 'Looked a bit ashy on me by midday.', 'Slightly pale, works in winter though.'],
    too_dark: ['Oxidised a little darker than I hoped.', 'A bit too warm and deep, I size down a shade now.', 'Nice formula but one shade too dark.'],
  };
  const MIN = 5;
  const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);
  const title = (key, v) => {
    const q = root.CATALOG.questions.find(x => x.key === key);
    const a = q && q.answers.find(x => x.key === v);
    return a ? a.title : v;
  };

  /* Pure numbers behind the widget. Card and rows always come from the same set of buyers (rs). */
  function stats(p, a, selCode) {
    const all = root.CATALOG.fitReviews[p.id] || [];
    const like = { depth: a.depth, undertone: a.undertone !== 'not_sure' ? a.undertone : undefined };
    // Narrowest "people like you" set with enough reviews: depth+undertone, then depth only, then everyone.
    let keys = Object.keys(like).filter(k => like[k]);
    const asked = keys.length;
    let rs = all;
    while (keys.length) {
      const f = all.filter(r => keys.every(k => r[k] === like[k]));
      if (f.length >= MIN) { rs = f; break; }
      keys = keys.includes('undertone') ? keys.filter(k => k !== 'undertone') : [];
    }
    const sugg = root.Match.suggestShade(p, a);
    const rows = p.shades.map(s => {
      const inS = rs.filter(r => r.shade === s.code);
      return { s, n: inS.length, jr: pct(inS.filter(r => r.match === 'just_right').length, inS.length) };
    }).filter(x => x.n).sort((x, y) => y.n - x.n);
    const solid = rows.filter(x => x.n >= 3);
    const prefer = x => (sugg && x.s.code === sugg.code ? 1 : 0);
    const best = (solid.length ? solid : rows).slice().sort((x, y) => y.jr - x.jr || prefer(y) - prefer(x) || y.n - x.n)[0];

    const sel = p.shades.find(s => s.code === selCode) || (best && best.s) || p.shades[0];
    let selRs = rs.filter(r => r.shade === sel.code);
    if (!selRs.length) selRs = all.filter(r => r.shade === sel.code); // nobody like you bought it: show everyone
    const counts = ['too_light', 'just_right', 'too_dark'].map(k => selRs.filter(r => r.match === k).length);
    return { all, rs, keys, asked, forLike: keys.length > 0, rows, best, sel, selRs, counts, jr: pct(counts[1], selRs.length) };
  }

  /* render(container, product, answers, { shade, onPickShade }) */
  function render(el, p, a, opts = {}) {
    if ((root.CATALOG.fitReviews[p.id] || []).length < 10) { el.innerHTML = ''; return; }
    const s = stats(p, a, opts.shade && opts.shade.code);
    const { all, rs, keys, forLike, rows, best, sel, selRs, counts, jr } = s;
    const who = forLike ? keys.map(k => title(k, a[k])).join(' · ') : '';
    const lean = selRs.length ? (counts[2] - counts[0]) / selRs.length : 0; // -1..1, +: runs dark
    const verdict = !selRs.length ? 'No reviews for this shade yet' : jr >= 75 ? 'True to shade' : lean > 0 ? 'Often too dark' : 'Often too light';

    const reviews = rs.slice(0, 4).map((r, i) => {
      const c = COMMENTS[r.match]; const text = c[(i + r.shade.length) % c.length];
      return `<article class="sm-rev"><div class="sm-rev__top"><span class="sm-tag ${r.match === 'just_right' ? 'is-ok' : ''}">${r.match === 'just_right' ? '✓' : '✕'} ${MATCH[r.match]}</span><span class="sm-rev__shade"><i style="background:${p.shades.find(x => x.code === r.shade).hex}"></i>Bought ${esc(r.shade)}</span></div>
        <p>${esc(text)}</p><div class="sm-rev__who">${esc(title('skinType', r.skinType))} skin · ${esc(title('depth', r.depth))} · ${esc(title('undertone', r.undertone))} undertone · ✓ Verified purchase</div></article>`;
    }).join('');

    el.innerHTML = `<section class="sm" aria-labelledby="sm-title">
      <div class="sm__head"><h2 id="sm-title">Shade match</h2>
        <p class="sm__sub">${forLike ? `From <b>${rs.length} buyers like you</b> (${esc(who)})` : `From <b>${all.length} buyers</b>${s.asked ? ' · not enough reviews from people exactly like you yet' : ''}`}, collected after purchase</p></div>
      <div class="sm__grid">
        <div class="sm__card">
          <div class="eyebrow">Shade ${esc(sel.code)} · ${esc(sel.name)}${forLike && selRs !== all ? ' · buyers like you' : ''}</div>
          <p class="sm__verdict">${verdict} <span class="sm-tag is-ok">${jr}% just right</span></p>
          <div class="sm__gauge" aria-hidden="true"><div class="sm__track"></div><div class="sm__dot" style="left:${50 + lean * 45}%"></div>
            <div class="sm__labels"><span>Too light</span><span>Just right</span><span>Too dark</span></div></div>
          <div class="sm__dist">${['too_light', 'just_right', 'too_dark'].map((k, i) => `<div><b>${pct(counts[i], selRs.length)}%</b>${MATCH[k]}</div>`).join('')}</div>
        </div>
        <div class="sm__card">
          <h3>${forLike ? 'Shades people like you bought' : 'Shades people bought'}</h3>
          ${rows.slice(0, 5).map(x => `<div class="sm-row ${x === best ? 'is-best' : ''}">
            <span class="sm-row__sw"><i style="background:${x.s.hex}"></i>${esc(x.s.code)}</span>
            <span class="sm-row__bar"><i style="width:${pct(x.n, rows[0].n)}%"></i></span>
            <small>${x.jr}% just right</small>
            ${x === best && x.s.code !== sel.code ? `<button class="link-btn" data-pick="${esc(x.s.code)}">Use it</button>` : x === best ? '<span class="sm-row__ck">✓ Picked</span>' : '<span></span>'}
          </div>`).join('')}
        </div>
      </div>
      <div class="sm__list"><h3>What they said</h3>${reviews}</div>
      <p class="sm__foot">Reviews come from verified buyers after delivery. Skin details are self-reported. Powered by Poltio.</p>
    </section>`;
    el.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => opts.onPickShade && opts.onPickShade(b.dataset.pick)));
  }

  const ShadeMatch = { stats, render };
  if (typeof module !== 'undefined' && module.exports) module.exports = ShadeMatch;
  else root.ShadeMatch = ShadeMatch;
})(typeof window !== 'undefined' ? window : globalThis);
