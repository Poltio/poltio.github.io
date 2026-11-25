/* Match scoring: how well a product fits the shopper's answers, per category. */
(function (root) {
  const DEPTH_ORDER = ['fair', 'light', 'medium', 'tan', 'deep'];
  const LABEL = {
    skinType: t => t + ' skin',
    finish: t => t + ' finish',
    coverage: t => t + ' coverage',
    depth: t => t + ' shades',
    undertone: t => t + ' undertone',
    concern: t => ({ Shine: 'Shine control', Dryness: 'Deep hydration', Dullness: 'Adds glow', Blemishes: 'Clears blemishes', Sensitivity: 'Gentle on sensitive skin' }[t] || t),
    lipFinish: t => t + ' finish',
    shadeFamily: t => t + ' shades',
    step: t => t,
    routine: t => t + ' routine',
  };
  const cat = () => root.CATALOG || {};

  /* Filter/score keys for a category: store-wide keys it applies, then its own. */
  function keysFor(catKey) {
    const c = (cat().categories || []).find(x => x.key === catKey);
    return c ? [...c.applies, ...c.questions] : [];
  }
  const answered = (p, a) => keysFor(p.category).filter(k => a && a[k]);

  function fits(p, key, value) {
    if (key === 'undertone') {
      if (value === 'not_sure') return true;
      return p.shades.some(s => s.undertone === value);
    }
    if (key === 'depth') return p.shades.some(s => s.depth === value);
    return ((p.tags || {})[key] || []).includes(value);
  }

  function score(p, a) {
    return answered(p, a).filter(k => fits(p, k, a[k])).length;
  }

  function tier(p, a) {
    const n = answered(p, a).length;
    if (!n) return 'other';
    const s = score(p, a);
    if (s === n) return 'great';
    if (n >= 2 && s === n - 1) return 'good'; // with 1 answer, "all but one" would be everything
    return 'other';
  }

  const styleBoost = (p, a) => (a && a.style && (p.tags.style || []).includes(a.style) ? 1 : 0);

  function rank(products, a, catKey = 'foundation') {
    return products
      .filter(p => p.category === catKey)
      .map(p => ({ p, s: score(p, a), b: styleBoost(p, a) }))
      .sort((x, y) => y.s - x.s || y.b - x.b || y.p.rating - x.p.rating)
      .map(x => x.p);
  }

  function summary(products, a, catKey = 'foundation') {
    const c = (cat().categories || []).find(x => x.key === catKey);
    const title = c ? c.plural : 'Foundations';
    const ranked = rank(products, a, catKey);
    const any = keysFor(catKey).some(k => a && a[k]);
    const matched = any ? ranked.filter(p => tier(p, a) !== 'other') : [];
    const others = ranked.filter(p => !matched.includes(p));
    // Count only great matches so the number shrinks with every answer; good ones are still listed.
    const count = any ? matched.filter(p => tier(p, a) === 'great').length : 0;
    let headline = title;
    if (any) headline = count ? 'Your matches' : 'Closest matches for you';
    return { matched, others, headline, count, total: ranked.length, title };
  }

  function suggestShade(p, a) {
    if (!a || !a.depth || !p.shades.length || !p.shades[0].depth) return null;
    const want = DEPTH_ORDER.indexOf(a.depth);
    const tone = a.undertone && a.undertone !== 'not_sure' ? a.undertone : 'neutral';
    let best = null, bestCost = Infinity;
    for (const s of p.shades) {
      const cost = Math.abs(DEPTH_ORDER.indexOf(s.depth) - want) * 10 + (s.undertone === tone ? 0 : 1);
      if (cost < bestCost) { best = s; bestCost = cost; }
    }
    return best;
  }

  function reasons(p, a, questions) {
    questions = questions || cat().questions || [];
    return answered(p, a).map(k => {
      const q = questions.find(x => x.key === k);
      const ans = q && q.answers.find(x => x.key === a[k]);
      const title = ans ? ans.title : a[k];
      const label = k === 'undertone' && a[k] === 'not_sure' ? 'Every undertone' : (LABEL[k] || (t => t))(title);
      return { key: k, label, ok: fits(p, k, a[k]) };
    });
  }

  const Match = { keysFor, fits, score, tier, rank, summary, suggestShade, reasons };
  if (typeof module !== 'undefined' && module.exports) module.exports = Match;
  else root.Match = Match;
})(typeof window !== 'undefined' ? window : globalThis);
