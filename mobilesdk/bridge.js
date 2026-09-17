/*
 * Poltio Mobile SDK test pages - native bridge helper.
 *
 * Each page sets window.poltioPageInfo before loading this file, e.g.
 *   window.poltioPageInfo = { screen: 'plp_phones', pageType: 'plp', category: 'phones' };
 *
 * On load the helper:
 *  - mirrors the info on <html data-poltio-screen="..." data-poltio-page-type="...">
 *  - posts a `poltio_page_view` message to whatever native bridge it can find
 *    (iOS WKWebView message handler, Android JS interface, React Native WebView)
 *  - keeps a small on-screen log so triggers can be checked without a debugger.
 *
 * Extra events can be sent by hand from the page or the console:
 *   PoltioMobile.send('add_to_cart', { productId: 'p-102' });
 */
(function (window, document) {
  var info = window.poltioPageInfo || {};
  var log = [];

  function meta(name) {
    var el = document.querySelector('meta[name="' + name + '"]');
    return el ? el.getAttribute('content') : null;
  }

  info.screen = info.screen || meta('poltio-screen') || 'unknown';
  info.pageType = info.pageType || meta('poltio-page-type') || 'unknown';
  info.url = window.location.href;

  document.documentElement.setAttribute('data-poltio-screen', info.screen);
  document.documentElement.setAttribute('data-poltio-page-type', info.pageType);

  function detectBridges() {
    var found = [];
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.poltio
    ) {
      found.push('ios');
    }
    if (
      window.PoltioBridge &&
      typeof window.PoltioBridge.postMessage === 'function'
    ) {
      found.push('android');
    }
    if (
      window.ReactNativeWebView &&
      typeof window.ReactNativeWebView.postMessage === 'function'
    ) {
      found.push('react-native');
    }
    return found;
  }

  function send(event, data) {
    var payload = {
      source: 'poltio-mobilesdk-test',
      event: event,
      screen: info.screen,
      pageType: info.pageType,
      url: info.url,
      data: data || {},
      ts: Date.now(),
    };
    var bridges = detectBridges();
    var json = JSON.stringify(payload);

    if (bridges.indexOf('ios') > -1) {
      window.webkit.messageHandlers.poltio.postMessage(payload);
    }
    if (bridges.indexOf('android') > -1) {
      window.PoltioBridge.postMessage(json);
    }
    if (bridges.indexOf('react-native') > -1) {
      window.ReactNativeWebView.postMessage(json);
    }
    try {
      window.parent.postMessage(payload, '*');
    } catch (e) {
      /* cross origin parent, ignore */
    }

    console.log(
      '[poltio-mobile]',
      event,
      payload,
      'bridges:',
      bridges.join(',') || 'none'
    );
    write(
      event + ' -> ' + (bridges.join(', ') || 'no native bridge'),
      JSON.stringify(data || {})
    );
    return payload;
  }

  function write(k, v) {
    log.push({ k: k, v: v, t: new Date().toLocaleTimeString() });
    render();
  }

  var panel;
  function render() {
    if (!panel) return;
    panel.innerHTML =
      '<h3>Poltio mobile debug</h3>' +
      '<div class="row"><span class="k">screen</span> ' +
      info.screen +
      '</div>' +
      '<div class="row"><span class="k">pageType</span> ' +
      info.pageType +
      '</div>' +
      '<div class="row"><span class="k">url</span> ' +
      info.url +
      '</div>' +
      '<div class="row"><span class="k">bridges</span> ' +
      (detectBridges().join(', ') || 'none detected') +
      '</div>' +
      '<div class="row"><span class="k">sdk</span> ' +
      (window.poltio && window.poltio.sdk_loaded
        ? 'loaded ' + (window.poltio.sdk_version || '')
        : 'not loaded yet') +
      '</div>' +
      log
        .map(function (l) {
          return (
            '<div class="row"><span class="k">' +
            l.t +
            '</span> ' +
            l.k +
            ' ' +
            l.v +
            '</div>'
          );
        })
        .join('');
  }

  function mountDebug() {
    var btn = document.createElement('button');
    btn.id = 'poltio-debug-toggle';
    btn.type = 'button';
    btn.textContent = 'debug';
    panel = document.createElement('div');
    panel.id = 'poltio-debug';
    panel.hidden = true;
    btn.addEventListener('click', function () {
      panel.hidden = !panel.hidden;
      render();
    });
    document.body.appendChild(btn);
    document.body.appendChild(panel);
    render();
  }

  function start() {
    mountDebug();
    send('page_view', info.extra || {});
    // The web SDK loads async; report once it is up so both sides can be compared.
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (window.poltio && window.poltio.sdk_loaded) {
        write('web sdk ready', window.poltio.sdk_version || '');
        clearInterval(timer);
      } else if (tries > 40) {
        clearInterval(timer);
      }
    }, 500);
  }

  window.PoltioMobile = { info: info, send: send, bridges: detectBridges };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})(window, document);
