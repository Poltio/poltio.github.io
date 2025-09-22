(function(global, factory) {
  if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = factory()
  } else {
      if (typeof define === "function" && (define.amd || define.cmd)) {
          define(factory)
      } else {
          global.faq = factory()
      }
  }
}
)(typeof window !== "undefined" ? window : this, function() {
  var url = "";
  var root = "/faq";
  var getCookie = function(name) {
      var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      var arr = document.cookie.match(reg);
      return arr ? unescape(arr[2]) : null
  };
  var Faq = function() {
      var style = document.createElement("style");
      style.type = "text/css";
      var image = document.createElement("i");
      var html = document.createElement("div");
      var serviceButton = {}
      if (window.navigator.userAgent.indexOf("Mobile") > -1) {
          var css = ".svc-icon { display: inline-block; width: 50px; height: 50px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; background-color: #fff; box-shadow: 0 5px 10px rgba(153, 153, 153, 0.25); border-radius: 5px 0 0 5px; } .svc-icon:hover { background-color: #c90401; color: #ffffff; } .svc-icon:hover .faq-text { color: #fff; } .svc-icon .iconfont, .faq-icon .iconfont { font-size: 20px; } .faq-icon {        position: fixed;        right: 0;        bottom: 100px;        width: 50px;        height: 50px;        cursor: pointer;        border-radius: 5px;        background: #363636;        display: flex;        align-items: center;        justify-content: center;        flex-direction: column;        z-index: 999;    }    .faq-iconH5 {      width: 36px;      height: 36px;      border-radius: 50%;      background: #fff;    }     .faq-icon:hover {      background: #4F4F4F;    }    .faq-icon img {      width: 20px;      height: 20px;    }    #faq-iframe-close{      position: fixed;      right: 30px;      bottom: 516px;      cursor: pointer;      font-size: 0;      color: #000;      cursor: pointer;    }    .faq-text {      color: #363636;      font-size: 12px;      text-transform: capitalize;      margin-top: 3px;    }    #faq-iframe {        width: 80vh;        height: 80vh;        position: fixed;        z-index: 9999;        right: 10px;        bottom: 100px;        background: #f0f2f5;        border-radius: 20px;    }";
          style.innerHTML = css;
          document.head.append(style);
          html.className = "faq-icon faq-iconH5";
          image.className = 'anticon anticon-icon-service'
          image.innerHTML = `<svg fill="currentColor" aria-hidden="true" focusable="false" class="anticon-size-20"><use xlink:href="#icon-service"></use></svg>`
          html.append(image)
          document.body.append(html)
          serviceButton = document.querySelector(".faq-icon");
      } else {
          html.className = "svc-icon";
          image.className = 'anticon anticon-icon-service'
          image.innerHTML = `<svg fill="currentColor" aria-hidden="true" focusable="false" class="anticon-size-20"><use xlink:href="#icon-service"></use></svg>`
          html.append(image);
          if (window.siteId == 250) {
              var span = document.createElement("span");
              span.innerText = "Ajutor";
              span.className = "faq-text";
              html.append(span)
          }
          var cmRtEl = document.querySelector(".cm-right-float");
          if (cmRtEl) {
              document.querySelector('.cm-right-float .rt-service').append(html);
              document.querySelector('.cm-right-float .rt-service').classList.remove('hidden')
          }
          serviceButton = document.querySelector(".cm-right-float .rt-service");
      }
      serviceButton.addEventListener("click", function() {
          var isM2 = window._M2 ? true : false;
          var siteid = window.siteId || "";
          var siteConfig = window.siteConfig || {};
          var defaultLang = isM2 ? (window.aosomConfig ? window.aosomConfig.vLocale : window.$nuxt.$store.state.config.locale) : (siteConfig.defaultLang || "en");
          var lang = (localStorage.getItem("lang") == "undefined" || !localStorage.getItem("lang")) ? defaultLang : localStorage.getItem("lang");
          var token = isM2 ? getCookie("auth_token") : getCookie("Authorization_web");
          var sourceOrigin = window.location.origin;
          sourceOrigin = encodeURIComponent(sourceOrigin);
          var sourceUrl = window.location.href;
          sourceUrl = encodeURIComponent(sourceUrl);
          var src = url + root + "/index.html?siteid=" + siteid + "&&lang=" + lang + "&&token=" + (token || "") + "&&sourceUrl=" + sourceUrl + "&&sourceOrigin=" + sourceOrigin + "&&from=" + (isM2 ? "m2" : "") + "";
          if (window.navigator.userAgent.indexOf("Mobile") > -1) {
              window.open(src, "_self")
          } else {
              var faqIframe = document.getElementById("faq-iframe");
              var iframeClose = document.getElementById("faq-iframe-close");
              if (faqIframe) {
                  faqIframe.style.display = "block";
                  iframeClose.style.display = "block"
              } else {
                  var iframe = document.createElement("iframe");
                  iframe.frameBorder = 0;
                  iframe.id = "faq-iframe";
                  iframe.src = src;
                  document.body.append(iframe);
                  var cloese = document.createElement("div");
                  cloese.id = "faq-iframe-close";
                  cloese.innerHTML = "x";
                  var bottom = document.documentElement.clientHeight * 0.8 - 44;
                  cloese.style.bottom = bottom + "px";
                  document.body.append(cloese);
                  faqIframe = document.getElementById("faq-iframe");
                  iframeClose = document.getElementById("faq-iframe-close");
                  iframeClose.addEventListener("click", function() {
                      faqIframe.remove();
                      iframeClose.remove()
                  })
              }
          }
      })
  };
  setTimeout(function() {
      Faq()
  }, 1000);
  return Faq
});
