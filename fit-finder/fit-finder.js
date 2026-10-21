// Shared by the fit finder demo pages: the three content ids, the result
// listener, the remembered size profile and the garment drawings.
(() => {
  const CONTENTS = {
    tops: '6f242720-bd30-4116-858f-5a13cdb6336b',
    pants: '1109e7d0-c2b0-4ce8-b8a3-824c813c8411',
    shirt: '64b377c3-8afb-435c-9f94-5bc8af1c4c47',
  };
  const LABELS = { tops: 'Tişört & Polo', pants: 'Pantolon', shirt: 'Gömlek' };
  const KEY = 'poltio-fit-finder-profile';

  // Result titles look like "Önerilen bedenin: M", "Önerilen bedenin: 32 / M"
  // or "Önerilen bedenin: M · Yaka 40-41".
  const parse = (title) => {
    const text = String(title || '').split(':').pop().trim();
    const [size, rest = ''] = text.split(/\s*[/·]\s*/);
    const collar = (rest.match(/Yaka\s*([\d-]+)/) || [])[1];
    return { size, alt: collar ? undefined : rest || undefined, collar };
  };

  // Every widget posts its engagement events to the parent page as
  // { gtmRelay: true, gtmData: { action, content_id, result_title, ... } }.
  // The SDK forwards them to dataLayer; the page can read them directly.
  const onRelay = (cb) =>
    window.addEventListener('message', (e) => {
      if (!/^https:\/\/(www\.)?poltio\.com$/.test(e.origin)) return;
      const d = e.data;
      if (d && d.gtmRelay && d.gtmData) cb(d.gtmData);
    });

  const kindOf = (contentId) =>
    Object.keys(CONTENTS).find((k) => CONTENTS[k] === contentId);

  const profile = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  };
  const remember = (fit) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...profile(), [fit.kind]: fit }));
    } catch (e) {}
  };
  const forget = () => {
    try {
      localStorage.removeItem(KEY);
    } catch (e) {}
  };

  const onResult = (cb) =>
    onRelay((data) => {
      const kind = kindOf(data.content_id);
      if (data.action !== 'result_view' || !kind) return;
      const fit = { kind, title: data.result_title, ...parse(data.result_title) };
      remember(fit);
      cb(fit, data);
    });

  // Header chips with every size found so far, on any of the demo pages.
  const showProfile = (el) => {
    const short = { tops: 'Üst', pants: 'Pantolon', shirt: 'Gömlek' };
    const draw = () => {
      const p = profile();
      el.innerHTML = Object.keys(short)
        .filter((k) => p[k])
        .map(
          (k) =>
            `<span class="rounded-full bg-sand px-2.5 py-1">${short[k]} <b class="font-semibold">${p[k].size}</b></span>`,
        )
        .join('');
    };
    draw();
    onResult(draw);
  };

  const toast = (html) => {
    let box = document.getElementById('ff-toast');
    if (!box) {
      box = document.createElement('div');
      box.id = 'ff-toast';
      box.className =
        'pointer-events-none fixed inset-x-4 top-4 mx-auto max-w-sm -translate-y-4 rounded-xl bg-ink px-4 py-3 text-sm text-white opacity-0 shadow-lg transition duration-300';
      // Above the SDK's own layer, so it shows while the quiz is still open.
      box.style.zIndex = '2147483647';
      document.body.appendChild(box);
    }
    box.innerHTML = html;
    box.style.cssText += ';opacity:1;transform:none';
    clearTimeout(box.timer);
    box.timer = setTimeout(() => (box.style.opacity = box.style.transform = ''), 3200);
  };

  // Flat drawings in the same style as the content's illustrations. Detail
  // lines use --ff-line, which light colours override with .ff-light.
  const line = 'var(--ff-line,rgba(255,255,255,.55))';
  const dot = (y) => `<circle cx="100" cy="${y}" r="2.5" style="fill:${line}"/>`;
  const body = {
    tshirt:
      'M72 28 44 38 14 66l20 26 18-12v96q0 4 4 4h88q4 0 4-4V80l18 12 20-26-30-28-28-10q-6 18-28 18t-28-18z',
    polo: 'M74 26 44 38 14 66l20 26 18-12v96q0 4 4 4h88q4 0 4-4V80l18 12 20-26-30-28-30-12z',
    shirt:
      'M74 24 46 34 34 52 18 158l22 4 14-74v92h92V88l14 74 22-4-16-106-12-18-28-10z',
    chino: 'M62 32 54 186h40l6-108 6 108h40l-8-154z',
  };
  const details = {
    tshirt: `<path d="M72 28q6 18 28 18t28-18" stroke-width="3"/><path d="M58 170h84" stroke-dasharray="4 4"/>`,
    polo: `<path d="M100 44v42" stroke-width="2.5"/>${dot(60)}${dot(74)}<path d="M76 26l24 16-10 14-20-20zM124 26l-24 16 10 14 20-20z" fill="currentColor"/><path d="M58 170h84" stroke-dasharray="4 4"/>`,
    shirt: `<path d="M76 24l24 16-12 16-20-24zM124 24l-24 16 12 16 20-24z" fill="currentColor"/><path d="M100 40v140"/>${[64, 90, 116, 142].map(dot).join('')}<rect x="114" y="74" width="20" height="22" rx="2"/><path d="M22 146l20 4M178 146l-20 4"/>`,
    chino: `<rect x="62" y="16" width="76" height="16" fill="currentColor"/><path d="M100 32v40M66 34q14 18 16-2M134 34q-14 18-16-2M60 176h32M108 176h32" /><path d="M76 16v16M124 16v16" stroke-width="3"/>`,
  };
  const sprite = Object.keys(body)
    .map(
      (k) =>
        `<symbol id="ff-${k}" viewBox="0 0 200 200"><path d="${body[k]}" fill="currentColor"/><g fill="none" style="stroke:${line}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${details[k]}</g></symbol>`,
    )
    .join('');
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<svg width="0" height="0" class="absolute" aria-hidden="true"><style>.ff-light{--ff-line:rgba(11,22,51,.28)}</style>${sprite}</svg>`,
  );

  const garment = (type, color, cls = '') =>
    `<svg viewBox="0 0 200 200" class="${cls}" style="color:${color}" aria-hidden="true"><use href="#ff-${type}"/></svg>`;

  window.FitFinder = {
    CONTENTS,
    LABELS,
    parse,
    onRelay,
    onResult,
    profile,
    forget,
    showProfile,
    toast,
    garment,
  };
})();
