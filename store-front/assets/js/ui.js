/* Small shared render helpers: prices, packshots, product cards, toast. */
(function (root) {
  const fmt = new Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' });
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const price = n => fmt.format(n);
  const byId = id => root.CATALOG.products.find(p => p.id === id);

  const ICON = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg>',
    mask: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style="display:inline-block;vertical-align:-3px"><path d="M3 10c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v1.5c0 2.5-2 4.5-4.5 4.5-1.6 0-2.9-.9-3.6-2.2L12 12.5l-.9 1.3c-.7 1.3-2 2.2-3.6 2.2C5 16 3 14 3 11.5V10Zm4.5 1.2a1.6 1.6 0 1 0 0 .1Zm9 0a1.6 1.6 0 1 0 0 .1Z"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>',
  };

  /* Drawn packshot so the demo needs no photos. Liquid/pan takes the shade colour. */
  function packshot(p, shade) {
    const hex = (shade && shade.hex) || (p.shades[Math.floor(p.shades.length / 2)] || {}).hex || '#e8c09c';
    const label = '<text x="50" y="__Y__" text-anchor="middle" font-family="Helvetica Neue, Arial" font-weight="800" font-size="9" letter-spacing="1.6" fill="#111">KIKO</text>';
    if (p.category === 'powder') {
      return `<svg viewBox="0 0 100 100" role="img" aria-label="${esc(p.name)}"><ellipse cx="50" cy="82" rx="34" ry="5" fill="rgba(0,0,0,.08)"/><circle cx="50" cy="52" r="32" fill="#111"/><circle cx="50" cy="52" r="25" fill="${hex}"/><circle cx="42" cy="44" r="8" fill="rgba(255,255,255,.35)"/>${label.replace('__Y__', '91')}</svg>`;
    }
    if (p.category === 'primer') {
      return `<svg viewBox="0 0 100 140" role="img" aria-label="${esc(p.name)}"><ellipse cx="50" cy="132" rx="22" ry="4" fill="rgba(0,0,0,.08)"/><rect x="38" y="104" width="24" height="26" rx="3" fill="#111"/><path d="M30 12h40l-4 92H34z" fill="#f7f1ee" stroke="#ddd"/><rect x="30" y="8" width="40" height="6" rx="1" fill="#e6007e"/>${label.replace('__Y__', '62')}</svg>`;
    }
    if (p.category === 'spray') {
      return `<svg viewBox="0 0 100 140" role="img" aria-label="${esc(p.name)}"><ellipse cx="50" cy="132" rx="22" ry="4" fill="rgba(0,0,0,.08)"/><rect x="42" y="6" width="16" height="18" rx="3" fill="#111"/><rect x="32" y="24" width="36" height="106" rx="8" fill="#fbe9f2" stroke="#efc9dc"/>${label.replace('__Y__', '82')}</svg>`;
    }
    return `<svg viewBox="0 0 100 140" role="img" aria-label="${esc(p.name)}${shade ? ', shade ' + esc(shade.code) : ''}">
      <ellipse cx="50" cy="133" rx="28" ry="4" fill="rgba(0,0,0,.08)"/>
      <rect x="38" y="6" width="24" height="30" rx="2" fill="#111"/>
      <rect x="44" y="36" width="12" height="8" fill="#222"/>
      <rect x="24" y="44" width="52" height="86" rx="6" fill="rgba(255,255,255,.75)" stroke="#d9d4d2"/>
      <rect x="28" y="62" width="44" height="64" rx="4" fill="${hex}"/>
      <rect x="30" y="64" width="8" height="58" rx="3" fill="rgba(255,255,255,.35)"/>
      ${label.replace('__Y__', '57')}
    </svg>`;
  }

  function stars(p) {
    return `<span class="stars"><b>★ ${p.rating.toFixed(1)}</b> (${p.reviewCount.toLocaleString('en')})</span>`;
  }

  function swatches(p, max = 6) {
    if (!p.shades[0] || !p.shades[0].depth) return '';
    const show = p.shades.filter((s, i) => i % 3 === 1).slice(0, max);
    return `<span class="swatches" aria-label="${p.shades.length} shades">${show.map(s => `<i style="background:${s.hex}"></i>`).join('')}<span>${p.shades.length} shades</span></span>`;
  }

  /* Product card. tier: 'great'|'good'|null. */
  function card(p, answers) {
    const M = root.Match;
    const tier = M.tier(p, answers);
    const shade = M.suggestShade(p, answers);
    const ok = M.reasons(p, answers).filter(r => r.ok).map(r => r.label);
    const tierLabel = tier === 'great' ? 'Great match' : tier === 'good' ? 'Good match' : '';
    return `<a class="card" href="pdp.html?id=${encodeURIComponent(p.id)}">
      <div class="card__media">${tierLabel ? `<span class="card__tier card__tier--${tier}">${tierLabel}</span>` : ''}${packshot(p, shade)}</div>
      <div class="card__body">
        <div class="card__name">${esc(p.name)}</div>
        ${ok.length ? `<div class="card__why">${esc(ok.slice(0, 3).join(' · '))}</div>` : ''}
        ${swatches(p)}
        <div class="card__meta"><span class="card__price">${price(p.price)}</span>${stars(p)}</div>
      </div>
    </a>`;
  }

  let toastTimer;
  function toast(html) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.innerHTML = html;
    document.body.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.remove(), 3500);
  }

  root.Ui = { esc, price, byId, ICON, packshot, stars, swatches, card, toast };
})(window);
