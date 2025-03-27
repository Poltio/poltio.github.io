(function() {
  // console.log('sw-load v5');
  if ('serviceWorker' in navigator) {
    var pattern = /fanplayr.+sw-load\.js/i;
    var els = document.getElementsByTagName('script');
    for (var i = 0, len = els.length; i < len; i++) {
      var el = els[i];
      var path = el.dataset.path;
      if (path && pattern.test(el.src)) {
        var cacheBust = new Date().toISOString().substr(0, 10);
        var url = path + '?_=' + cacheBust;
        // console.log('sw-load path', path, url);
        navigator.serviceWorker.register(url, { scope: '/' }).then(function (reg) {
          window.fanplayrServiceWorker = true;
          // console.log('registered service worker:', url, 'at', reg.scope);
        }).catch(function (ex) {
          console.log('failed to register service worker', ex);
        });
        break;
      }
    }
  }
}());
