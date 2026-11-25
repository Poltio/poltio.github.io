/* What the profile does to the store: visibility, nav, engagement, and what the hero shows. Pure. */
(function (root) {
  const C = () => root.CATALOG;
  const M = () => root.Match;
  const SHOW = { men: ['men', 'unisex'], makeup: ['women', 'unisex'] };
  const NAV = { men: ['men', 'skincare'], makeup: ['foundation', 'lips', 'skincare'] };

  function visible(p, a, showAll) {
    const rule = !showAll && a && SHOW[a.shopFor];
    return rule ? rule.includes(p.audience) : true;
  }

  function navCategories(a, showAll) {
    const cats = C().categories;
    const order = !showAll && a && NAV[a.shopFor];
    return order ? order.map(k => cats.find(c => c.key === k)) : cats.slice();
  }

  function visibleIn(catKey, a, showAll) {
    const all = C().products.filter(p => p.category === catKey);
    const products = all.filter(p => visible(p, a, showAll));
    return { products, hiddenByProfile: !showAll && products.length < all.length };
  }

  function label(a) {
    return a && a.shopFor === 'men' ? "men's grooming" : a && a.shopFor === 'makeup' ? 'make-up & skincare' : 'everything';
  }

  const own = catKey => (C().categories.find(c => c.key === catKey) || { questions: [] }).questions;

  function engaged(catKey, a, log) {
    return own(catKey).some(k => a && a[k]) || (log || []).some(e => e.type === 'visit' && e.cat === catKey);
  }

  function best(catKey, a, showAll) {
    return M().rank(visibleIn(catKey, a, showAll).products, a, catKey)[0] || null;
  }

  const boost = (p, a) => (a && a.style && (p.tags.style || []).includes(a.style) ? 1 : 0);
  const better = a => (x, y) => M().score(y, a) - M().score(x, a) || boost(y, a) - boost(x, a) || y.rating - x.rating;

  /* Lead slide: best product in a visible category the shopper hasn't engaged with yet. */
  function discover(a, log, showAll) {
    const nav = navCategories(a, showAll);
    const fresh = nav.filter(c => !engaged(c.key, a, log));
    if (fresh.length) {
      // Between categories, make-up style leads (raw scores favour categories with more applicable questions).
      const byStyle = (x, y) => boost(y, a) - boost(x, a) || better(a)(x, y);
      const tops = fresh.map(c => best(c.key, a, showAll)).filter(Boolean).sort(byStyle);
      return tops[0] ? { cat: tops[0].category, product: tops[0] } : null;
    }
    const viewed = new Set((log || []).filter(e => e.type === 'visit' && e.id).map(e => e.id));
    const pool = nav.flatMap(c => visibleIn(c.key, a, showAll).products).filter(p => !viewed.has(p.id)).sort(better(a));
    return pool[0] ? { cat: pool[0].category, product: pool[0] } : null;
  }

  /* Top match in every visible category, engaged categories first. */
  function picks(a, log, showAll) {
    const nav = navCategories(a, showAll);
    const ordered = [...nav.filter(c => engaged(c.key, a, log)), ...nav.filter(c => !engaged(c.key, a, log))];
    return ordered.map(c => best(c.key, a, showAll)).filter(Boolean);
  }

  function onboardingQuestions(a) {
    return C().questions.filter(q => q.scope === 'store' && !(q.key === 'style' && a && a.shopFor === 'men'));
  }

  /* Next most useful unanswered question: onboarding first, then the hinted category, then the rest of the nav. */
  function nextQuestion(a, catHint) {
    const order = [...onboardingQuestions(a).map(q => q.key), ...own(catHint), ...navCategories(a, false).flatMap(c => own(c.key))];
    const key = order.find(k => !(a && a[k]));
    return key ? C().questions.find(q => q.key === key) : null;
  }

  const bestVisible = (a, catKey, showAll) => best(catKey, a, showAll);
  const Profile = { visible, navCategories, visibleIn, label, engaged, discover, picks, bestVisible, onboardingQuestions, nextQuestion };
  if (typeof module !== 'undefined' && module.exports) module.exports = Profile;
  else root.Profile = Profile;
})(typeof window !== 'undefined' ? window : globalThis);
