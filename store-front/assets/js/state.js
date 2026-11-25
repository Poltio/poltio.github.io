/* Shopper state shared across pages: answers, bag, and a small journey log. */
(function (root) {
  const K = { answers: 'kikoDemo.answers', cart: 'kikoDemo.cart', log: 'kikoDemo.log' };
  let store, valid = {}, answers = {}, cart = [], log = [], subs = [];

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
  const isValid = (k, v) => !!(valid[k] && valid[k].includes(v));
  function save() {
    store.set(K.answers, JSON.stringify(answers));
    store.set(K.cart, JSON.stringify(cart));
    store.set(K.log, JSON.stringify(log));
    subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  }

  const State = {
    init({ storage, questions, productIds }) {
      let s = storage;
      if (s === undefined) { try { s = root.localStorage; } catch (e) { s = null; } }
      store = safeStorage(s);
      valid = Object.fromEntries((questions || []).map(q => [q.key, q.answers.map(a => a.key)]));
      const raw = read(K.answers, {});
      answers = {};
      if (raw && typeof raw === 'object') for (const k in raw) if (isValid(k, raw[k])) answers[k] = raw[k];
      const c = read(K.cart, []);
      // Drop lines from older builds (unknown product) and coerce qty, so the bag page never breaks.
      const known = productIds ? new Set(productIds) : null;
      cart = (Array.isArray(c) ? c : [])
        .map(x => x && { id: x.id, shade: x.shade, qty: Math.floor(Number(x.qty)) })
        .filter(x => x && x.id && x.qty > 0 && (!known || known.has(x.id)));
      const l = read(K.log, []);
      log = Array.isArray(l) ? l : [];
      subs = [];
    },
    getAnswers: () => ({ ...answers }),
    setAnswer(k, v, where) {
      if (!isValid(k, v)) return;
      answers[k] = v;
      log.push({ type: 'answer', key: k, value: v, where: where || 'unknown' });
      save();
    },
    clearAnswer(k) { if (k in answers) { delete answers[k]; save(); } },
    resetAll() { answers = {}; cart = []; log = []; save(); },
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
