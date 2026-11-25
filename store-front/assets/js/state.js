/* Shopper state shared across pages: answers, bag, and a small journey log. */
(function (root) {
  // Incognito keeps a separate, throwaway profile under its own keys; the real one is untouched.
  const MODE = 'kikoDemo.incognito';
  const keys = inc => {
    const p = inc ? 'kikoDemo.incog.' : 'kikoDemo.';
    return { answers: p + 'answers', cart: p + 'cart', log: p + 'log', onboarded: p + 'onboarded' };
  };
  let K = keys(false);
  const SHOW_ALL = 'kikoDemo.showAll';
  let store, session, onboarded = false, valid = {}, known = null, incognito = false, answers = {}, cart = [], log = [], subs = [];

  function safeStorage(s) {
    const mem = {};
    return {
      get(k) { try { const v = s && s.getItem(k); if (v != null) return v; } catch (e) {} return k in mem ? mem[k] : null; },
      set(k, v) { mem[k] = v; try { s && s.setItem(k, v); } catch (e) {} },
    };
  }
  function read(k, fallback) {
    try { const v = JSON.parse(store.get(k)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function load() {
    const raw = read(K.answers, {});
    answers = {};
    if (raw && typeof raw === 'object') for (const k in raw) if (isValid(k, raw[k])) answers[k] = raw[k];
    const c = read(K.cart, []);
    // Drop lines from older builds (unknown product) and coerce qty, so the bag page never breaks.
    cart = (Array.isArray(c) ? c : [])
      .map(x => x && { id: x.id, shade: x.shade, qty: Math.floor(Number(x.qty)) })
      .filter(x => x && x.id && x.qty > 0 && (!known || known.has(x.id)));
    const l = read(K.log, []);
    log = Array.isArray(l) ? l : [];
    onboarded = store.get(K.onboarded) === '1';
  }
  const isValid = (k, v) => !!(valid[k] && valid[k].includes(v));
  function save() {
    store.set(K.answers, JSON.stringify(answers));
    store.set(K.cart, JSON.stringify(cart));
    store.set(K.log, JSON.stringify(log));
    store.set(K.onboarded, onboarded ? '1' : '0');
    subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  }

  const State = {
    init({ storage, session: sess, questions, productIds }) {
      let s = storage;
      if (s === undefined) { try { s = root.localStorage; } catch (e) { s = null; } }
      if (sess === undefined) { try { sess = root.sessionStorage; } catch (e) { sess = null; } }
      store = safeStorage(s);
      session = safeStorage(sess);
      valid = Object.fromEntries((questions || []).map(q => [q.key, q.answers.map(a => a.key)]));
      known = productIds ? new Set(productIds) : null;
      incognito = store.get(MODE) === '1';
      K = keys(incognito);
      load();
      subs = [];
    },
    isIncognito: () => incognito,
    setIncognito(on) {
      on = !!on;
      if (on === incognito) return;
      const inc = keys(true);
      [inc.answers, inc.cart, inc.log, inc.onboarded].forEach(k => store.set(k, 'null')); // every incognito session starts fresh
      session.set(SHOW_ALL, '0');
      incognito = on;
      store.set(MODE, on ? '1' : '0');
      K = keys(on);
      load();
      subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
    },
    getAnswers: () => ({ ...answers }),
    setAnswer(k, v, where) {
      if (!isValid(k, v)) return;
      answers[k] = v;
      log.push({ type: 'answer', key: k, value: v, where: where || 'unknown' });
      save();
    },
    clearAnswer(k) { if (k in answers) { delete answers[k]; save(); } },
    resetAll() { answers = {}; cart = []; log = []; onboarded = false; session.set(SHOW_ALL, '0'); save(); },
    isOnboarded: () => onboarded,
    setOnboarded(v) { onboarded = !!v; save(); },
    getShowAll: () => session.get(SHOW_ALL) === '1',
    setShowAll(v) { session.set(SHOW_ALL, v ? '1' : '0'); subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } }); },
    applyUrlPreset(search) {
      const p = new URLSearchParams(search || '');
      let changed = false;
      for (const [k, v] of p) if (isValid(k, v)) { answers[k] = v; log.push({ type: 'answer', key: k, value: v, where: 'search' }); changed = true; }
      if (changed) save();
    },
    getCart: () => cart.map(x => ({ ...x })),
    addToCart(id, shade) {
      const line = cart.find(x => x.id === id && x.shade === shade);
      if (line) line.qty += 1; else cart.push({ id, shade, qty: 1 });
      save();
    },
    setQty(id, shade, qty) {
      cart = cart.map(x => (x.id === id && x.shade === shade ? { ...x, qty } : x)).filter(x => x.qty > 0);
      save();
    },
    removeFromCart(id, shade) { State.setQty(id, shade, 0); },
    logEvent(e) { log.push(e); save(); },
    getLog: () => log.slice(),
    onChange(fn) { subs.push(fn); },
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = State;
  else root.State = State;
})(typeof window !== 'undefined' ? window : globalThis);
