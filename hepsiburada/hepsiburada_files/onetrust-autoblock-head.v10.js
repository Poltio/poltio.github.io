(function () {
  var consentGroups = ['C0001', 'C0002', 'C0003', 'C0004'];

  var loadScript = function (scriptObject, callback) {
      var script = document.createElement('script');
      script.setAttribute('src', scriptObject.src);
      script.setAttribute('type', 'text/javascript');

      if (scriptObject.dataDomainScript) {
          script.setAttribute('data-domain-script', scriptObject.dataDomainScript);
      }
      if (scriptObject.charset) {
          script.setAttribute('charset', scriptObject.charset);
      }
      if (scriptObject.async) {
          script.setAttribute('async', scriptObject.async);
      }

      script.onload = function () {
          if (callback) {
              callback();
          }
      }
      document.getElementsByTagName('head')[0].appendChild(script);
  }

  var loadOneTrust = function (isOnetrustWithTest) {
      var suffix = isOnetrustWithTest ? '-test' : ''

      var scripts = {
          OtAutoBlock: {
              src: 'https://images.hepsiburada.net/assets/tools/onetrust/autoblock.min.js',
          },
          otSDKStub: {
              src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
              dataDomainScript: '12ea12c3-cd68-46b7-92ef-47befb06ea84' + suffix,
              charset: 'UTF-8',
              async: 'true',
          }
      };

      loadScript(scripts.OtAutoBlock, function () {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(function () {
            loadScript(scripts.otSDKStub, function () {
              function OptanonWrapper() {
              }
            })
          })
        } else {
          loadScript(scripts.otSDKStub, function () {
            function OptanonWrapper() {
            }
          })
        }
      });
  }

  var readCookie = function(name) {
      let nameEq = name + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEq) === 0) {
          let value = c.substring(nameEq.length, c.length);
          return decodeURIComponent(value);
        }
      }
      return null;
    }

    var parseJwt = function (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
  }


  var triggerUserEventListers = function () {
      window.addEventListener('OTConsentApplied', data => {
          if(!window.hepsiBus){
              console.error('window.hepsiBus didn\'t found');
              return;
          }

          var rawActiveGroups = window.OnetrustActiveGroups;
          var activeGroups = [];
          var passiveGroups = [];
          for(var i = 0; i< consentGroups.length; i++){
              var activeGroup = consentGroups[i];
              if(rawActiveGroups.indexOf(activeGroup) > -1){
                  activeGroups.push(activeGroup);
              }
              else{
                  passiveGroups.push(activeGroup);
              }

          }

          window.hepsiBus.track('UserCookieSelectionChanged', {
              clientType: 'navigation.sendBeacon',
              page_type: window.hepsiBus.parsers.getPageType(),
              page_value: window.hepsiBus.parsers.getPageValue(),
              rawActiveGroups: rawActiveGroups,
              activeGroups: activeGroups,
              passiveGroups: passiveGroups,
          })

          location.reload()
      });
  }

  return function () {
      var mobileIphone = 'BF448871-DB72-4CD7-A0E0-1F82BF410370'
      var mobileAndroid = '8093F525-1BAC-49C0-8FB7-C9F7B2DA04CF'
      var mobileIpad = '8B497575-C938-4807-8060-130380F67F7C'
      var legacyMobileApp = 'A0A16B0C-9FCE-48BB-8881-4AC263A938F3'

      var appKey = readCookie('AppKey') && parseJwt(readCookie('AppKey'))

      var hasAppKey = appKey === mobileIpad || appKey === mobileIphone || appKey === legacyMobileApp ||  appKey === mobileAndroid

      var isDisabledWithQueryParam = window.location.href.indexOf('onetrustdisabled') >= 0
      var isOnetrustWithTest = window.location.href.indexOf('onetrustwithtest') >= 0

      var isMobileAppQuery = window.location.href.indexOf('forMobileApp') > -1
      var isIOSWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)
      var isAndroidWebview = typeof window.Android !== 'undefined'
      var isAppWebview = isIOSWebview || isAndroidWebview || isMobileAppQuery || hasAppKey

      var isOneTrustExist = Boolean(window.OneTrust);

      if (isDisabledWithQueryParam || isAppWebview || isOneTrustExist) {
          return null;
      }

      loadOneTrust(isOnetrustWithTest);
      triggerUserEventListers();
  }();
})();
