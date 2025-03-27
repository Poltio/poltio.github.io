(() => {
  class EventManager {
    constructor() {
      this.events = new Map();
    }

    on(el, eventWithNamespace, handler) {
      const [eventName, namespace] = eventWithNamespace.split(".");
      if (!eventName) return;

      const fullEventName = namespace ? `${eventName}.${namespace}` : eventName;
      if (!this.events.has(el)) {
        this.events.set(el, new Map());
      }
      const eventMap = this.events.get(el);

      if (!eventMap.has(fullEventName)) {
        el.addEventListener(eventName, handler);
        eventMap.set(fullEventName, handler);
      }
    }

    off(el, eventWithNamespace) {
      if (!this.events.has(el)) return;
      const eventMap = this.events.get(el);

      const [eventName, namespace] = eventWithNamespace.split(".");

      if (namespace) {
        const fullEventName = `${eventName}.${namespace}`;
        if (eventMap.has(fullEventName)) {
          el.removeEventListener(eventName, eventMap.get(fullEventName));
          eventMap.delete(fullEventName);
        }
      } else {
        // Rimuove tutti gli eventi con quel nome (anche quelli con namespace)
        [...eventMap.keys()]
          .filter((key) => key.startsWith(`${eventName}.`))
          .forEach((key) => {
            el.removeEventListener(eventName, eventMap.get(key));
            eventMap.delete(key);
          });
      }

      if (eventMap.size === 0) {
        this.events.delete(el);
      }
    }
  }
  const isProd = window.location.href.includes("www.kikocosmetics.com");
  window.tsEventManager = window.tsEventManager || new EventManager();
  window.tsContext = window.tsContext || {
    chatPageTypes: [
      "editorial-customer-help-center",
      "account",
      "track-your-order",
      "login",
    ],
    eventMap: {
      "open-button": { event: "smart-tribune-open" },
      "close-button": { event: "smart-tribune-close" },
      "reset-button": { event: "smart-tribune-reset" },
      "fullscreen-button expand": {
        event: "smart-tribune-fullscreen",
        sm_action: "expand",
      },
      "fullscreen-button collapse": {
        event: "smart-tribune-fullscreen",
        sm_action: "collapse",
      },
    },
    lastUrl: location.href,
    logger: isProd ? () => void 0 : console.debug,
    observerInstance: void 0,
    relativeRestPath: isProd
      ? "/io/account-185-kiko-prod/botiahelpcenterpage/web"
      : "/io/account-185-kiko-preprod/botiamyaccountpage/web-temp",
  };

  const attachEvents = () => {
    const evtName = "ontouchstart" in window ? "touchstart.ts" : "mousedown.ts";
    window.tsEventManager.off(document, evtName);
    window.tsEventManager.on(document, evtName, eventsCallback);
  };

  const displayChat = (newValue = "") => {
    const chatElement = document.querySelector("#st-bot-root");
    chatElement && (chatElement.style.display = newValue);
  };

  const eventsCallback = (event) => {
    if (!Array.isArray(window.dataLayer)) return;

    const button = event.target.closest("button");
    const chatContainer = document.querySelector("#st-bot-root");
    if (!button || !chatContainer || !chatContainer.contains(button)) return;

    window.tsContext.logger("st-chat: button clicked", button.classList);

    for (const [classList, data] of Object.entries(window.tsContext.eventMap)) {
      const classes = classList.split(" ");
      if (classes.every((cls) => button.classList.contains(cls))) {
        window.dataLayer.push(data);
        window.tsContext.logger(
          "st-chat: last dataLayerEvent",
          window.dataLayer[window.dataLayer.length - 1]
        );
        break;
      }
    }
  };

  const getLoadEvent = () => {
    const loadEvent = (dataLayer || [])
      .slice()
      .reverse()
      .find((item) => item.event === "dl_update");
    window.tsContext.logger("st-chat: check", {
      loadEvent,
      dataLayer: JSON.parse(JSON.stringify(dataLayer)),
    });

    return loadEvent;
  };

  const init = () => {
    watchRouteChange();
    displayChat("none");
    attachEvents();
    loadChat();
  };

  const loadChat = () => {
    const loadEvent = getLoadEvent();
    const shouldHaveChat = window.tsContext.chatPageTypes.includes(
      (loadEvent || {}).page_type_section
    );
    if (shouldHaveChat) {
      displayChat();
      window.addEventListener("STBOTLoaded", (e) => {
        e.detail.init({
          kbId: 412,
          locale: "en_US",
          cookieOptin: !1,
          relativeRestPath: window.tsContext.relativeRestPath,
        });
      });
    }
  };

  const watchRouteChange = () => {
    if (window.tsContext.observerInstance) return;
    window.tsContext.lastUrl = location.pathname;
    const handleRouteChange = () => {
      if (window.tsContext.lastUrl !== location.pathname) {
        window.tsContext.logger(
          "st-chat: route change",
          `${window.tsContext.lastUrl} ==> ${location.pathname}`
        );
        window.tsContext.lastUrl = location.href;
        displayChat("none");
      }
    };

    // 🔹 Intercept pushState + replaceState (per SPA)
    const patchHistoryMethod = (method) => {
      const original = history[method];
      history[method] = function () {
        const result = original.apply(this, arguments);
        handleRouteChange();
        return result;
      };
    };

    patchHistoryMethod("pushState");
    patchHistoryMethod("replaceState");

    // 🔹 Intercept popstate
    window.addEventListener("popstate", handleRouteChange);

    // 🔹 Usae MutationObserver to get DOM changes (fallback)
    window.tsContext.observerInstance = new MutationObserver(handleRouteChange);
    window.tsContext.observerInstance.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 🧹 Cleanup on unload
    window.addEventListener("beforeunload", () => {
      window.tsContext.observerInstance.disconnect();
      window.tsContext.observerInstance = null;
      window.removeEventListener("popstate", handleRouteChange);
    });
  };

  // INIT

  init();
})();
