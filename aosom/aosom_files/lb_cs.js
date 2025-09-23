/* eslint-disable */
(function () {
    "use strict";
    var lb_cs = function (licenseId) {
        var _licenseId = licenseId;

        // -------------------------------------
        // License check
        // -------------------------------------

        if (typeof _licenseId == "undefined" || _licenseId == "") {
            throw "[LegalBlink Cookie solution error] license id not specified";
        }

        // -------------------------------------
        // Variables
        // -------------------------------------

        var configEndpoint = "https://app.legalblink.it/api/cookie-solutions";


        var LB_CONSENT_COOKIE_KEY = "lb_csc";

        var isConsentModalAttached = false;
        var isCoookieConsentAccepted = false;

        var consentModal = null;
        var settingsContainer = null;

        var currentUUID = "";

        var CONSENT_MODE_BLACKLIST = ["61def5c67f4e720029044dcc"]

        var CONSENT_MODE_URL_PASSTHROUGH_BLACKLIST = ["647701ae5c5fc3001c5d26a2", "673f70a3fcd01d001aa6d1df"]
        // Array of booleans to keep track of enabled/disabled preferences
        var toggleStates = [];

        var getBrowserLanguage = function () {
            var browserLang = navigator.language || navigator.userLanguage;

            if (licenseId === '624d968f1964060029996d0f' || licenseId === "6343c98d193998001a43235b") {
                return "it";
            }

            if (browserLang.indexOf("it") > -1) {
                return "it";
            }

            if (browserLang.indexOf("es") > -1) {
                return "es";
            }

            if (browserLang.indexOf("fr") > -1) {
                return "fr";
            }

            if (browserLang.indexOf("de") > -1) {
                return "de";
            }

            return "en";
        };

        var defaultConfig = {
            lang: getBrowserLanguage(),
            autorun: true, // run as soon as loaded
            delay: 0, // default milliseconds delay
            cookieExpiration: 182, // default: 6 months (in days)
        };

        var lbConfigScript = document.createElement("script");

        // -------------------------------------
        // DOM elements
        // -------------------------------------

        var domHTML = document.documentElement;
        var domHead = document.getElementsByTagName("head")[0];
        var mainContainer = null;

        // -------------------------------------
        // Helpers
        // -------------------------------------

        var executeXMLHttpRequest = function (
            method,
            url,
            options = {},
            successCallback,
            errorCallback
        ) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    successCallback(this.responseText);
                } else if (this.readyState == 4 && this.status >= 400) {
                    errorCallback({
                        status: this.status,
                        error: this.statusText,
                    });
                }
            };

            xhr.open(method, url);

            if (options && options.headers) {
                for (var header in options.headers) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }

            const body =
                (options && options.body && JSON.stringify(options.body)) ||
                null;

            xhr.send(body);
        };

        /**
         * Check if html element has classname
         * @param {HTMLElement} el
         * @param {String} className
         */
        var HTMLElementHasClass = function (el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            }
            return !!el.className.match(
                new RegExp("(\\s|^)" + className + "(\\s|$)")
            );
        };

        /**
         * Append class to specified dom element
         * @param {Object} elem
         * @param {string} className
         */
        var addClassToHTMLElement = function (elem, className) {
            if (elem.classList) elem.classList.add(className);
            else {
                if (!HTMLElementHasClass(elem, className))
                    elem.className += " " + className;
            }
        };

        var removeClassFromHTMLElement = function (element, className) {
            element.classList
                ? element.classList.remove(className)
                : (element.className = element.className.replace(
                    new RegExp("(\\s|^)" + className + "(\\s|$)"),
                    " "
                ));
        };

        /**
         * Add event listener to dom object (cross browser function)
         * @param {Object} elem
         * @param {string} event //event type
         * @param {Object } fn
         * @param {boolean} passive
         */
        var addEventToHTMLElement = function (
            elem,
            event,
            fn,
            passive,
            count_value
        ) {
            var passive = passive || false,
                _fn =
                    typeof count_value !== "number"
                        ? fn
                        : function () {
                            fn(count_value);
                        };

            if (elem.addEventListener) {
                passive
                    ? elem.addEventListener(event, _fn, { passive: true })
                    : elem.addEventListener(event, _fn, false);
            } else {
                /**
                 * For old browser, convert "click" to onclick
                 * since they're not always supported
                 */
                if (event == "click") {
                    event = "onclick";
                }
                elem.attachEvent(event, _fn);
            }
        };

        /**
         * Get cookie value by name,
         * returns cookie value if found, otherwise empty string: ""
         * @param {string} a
         */
        var getCookie = function (a) {
            return (a = document.cookie.match(
                "(^|;)\\s*" + a + "\\s*=\\s*([^;]+)"
            ))
                ? a.pop()
                : "";
        };

        /**
         * Delete cookie by name
         * @param {string} name
         */
        var eraseCookie = function (name) {
            document.cookie =
                name +
                "=; Path=/; Domain=" +
                window.location.hostname +
                "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            document.cookie =
                name +
                "=; Path=/; Domain=." +
                window.location.hostname +
                "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        };

        var getCookieLocalDomain = function (hostname) {
            const parts = hostname.split(".");

            let cookieDomain = "";

            switch (parts.length) {
                case 2:
                    cookieDomain = "." + parts[0] + "." + parts[1];
                    break;
                case 3:
                    cookieDomain = "." + parts[1] + "." + parts[2];
                    break;
                case 4:
                    cookieDomain =
                        "." + parts[1] + "." + parts[2] + "." + parts[3];
                    break;
                default:
                    cookieDomain = hostname;
                    break;
            }

            return cookieDomain;
        };

        /**
         * Set cookie, specifying name, value and expiration time
         * @param {string} name
         * @param {string} value
         * @param {number} days
         * @param {number} hours
         * @param {number} minutes
         */
        var setCookie = function (name, value, days) {
            var expires = "";

            var date = new Date();
            date.setTime(date.getTime() + 1000 * (days * 24 * 60 * 60));
            expires = "; expires=" + date.toUTCString();

            /**
             * Set secure cookie if https found
             */
            if (location.protocol === "https:") {
                document.cookie =
                    name +
                    "=" +
                    (value || "") +
                    expires +
                    "; path=/; domain=" +
                    getCookieLocalDomain(location.hostname) +
                    "; samesite=none; secure";
            } else {
                document.cookie =
                    name +
                    "=" +
                    (value || "") +
                    expires +
                    "; path=/; samesite=lax;";
            }
        };

        /**
         * Get all prop. keys defined inside object
         * @param {Object} obj
         */
        var getKeys = function (obj) {
            if (typeof obj === "object") {
                var keys = [],
                    i = 0;
                for (keys[i++] in obj) {
                }
                return keys;
            }
        };

        /**
         * Get current client - browser language
         * Used when 'auto_language' config property is set to 'true' (boolean)
         */
        var getBrowserLang = function () {
            var browserLang = navigator.language || navigator.browserLanguage;
            browserLang.length > 2 &&
                (browserLang = browserLang[0] + browserLang[1]);
            return browserLang.toLowerCase();
        };

        var getValidatedLanguage = function (lang, all_languages) {
            if (all_languages.hasOwnProperty(lang)) {
                return lang;
            } else if (getKeys(all_languages).length > 0) {
                if (all_languages.hasOwnProperty(defaultConfig.lang)) {
                    return defaultConfig.lang;
                } else {
                    return getKeys(all_languages)[0];
                }
            }
        };

        /**
         * Returns true if value is found inside array
         * @param {Array} arr
         * @param {Object} value
         */
        var arrayContains = function (arr, value) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                if (arr[i] == value) return true;
            }
            return false;
        };

        var getLegalBlinkUniqueId = function () {
            var dt = new Date().getTime();
            var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (c) {
                    var r = (dt + Math.random() * 16) % 16 | 0;
                    dt = Math.floor(dt / 16);
                    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
                }
            );
            currentUUID = uuid;
            return uuid;
        };

        // -------------------------------------

        var setCookieTracking = function (action, cookie_content) {
            if (lbCookieConfig.hasTracking) {
                const body = {
                    license: _licenseId,
                    action: action,
                    host: window.location.host,
                    consent: cookie_content,
                };

                const headers = {
                    "Content-Type": "application/json",
                };

                executeXMLHttpRequest(
                    "POST",
                    lbCookieConfig.trackingURL,
                    {
                        headers,
                        body,
                    },
                    function () { }
                );
            }
        };

        var setConfig = function (config) {
            if (typeof config["cookieExpiration"] === "number") {
                defaultConfig.cookieExpiration = config["cookieExpiration"];
            }

            if (typeof config["autorun"] === "boolean") {
                defaultConfig.autorun = config["autorun"];
            }

            if (config["autoLanguage"]) {
                defaultConfig.lang = getValidatedLanguage(
                    getBrowserLanguage(),
                    config.languages
                );
            } else {
                if (typeof config["lang"] === "string") {
                    defaultConfig.lang = getValidatedLanguage(
                        getBrowserLanguage(),
                        config.languages
                    );
                }
            }
        };

        var loadCSS = function (callback) {
            if (
                lbCookieConfig["cssAutoload"] &&
                !document.getElementById("lb_theme_style")
            ) {
                // Create style tag
                var style = document.createElement("style");

                // ad an id so that in SPA apps (react-like) the style doesn't get loaded multiple times when plugin is called
                style.id = "lb_theme_style";

                executeXMLHttpRequest(
                    "GET",
                    lbCookieConfig.bannerCSSTheme,
                    null,
                    function (response) {
                        // Necessary for <IE9
                        style.setAttribute("type", "text/css");

                        if (style.styleSheet) {
                            // if <IE9
                            style.styleSheet.cssText = response;
                        } else {
                            // all other browsers
                            style.appendChild(
                                document.createTextNode(response)
                            );
                        }

                        // Append css text content
                        domHead.appendChild(style);

                        // Give enough time to the css to load (so that initial animations dont get skipped)
                        setTimeout(function () {
                            callback();
                        }, 30);
                    }
                );
            }
        };

        var showSettingsModal = function (delay) {
            setTimeout(
                function () {
                    addClassToHTMLElement(domHTML, "lb-show-cookie-settings");
                },
                delay > 0 ? delay : 0
            );
        };

        var hideSettingsModal = function () {
            removeClassFromHTMLElement(domHTML, "lb-show-cookie-settings");
        };

        var fireEvent = function (eventName, payload) {
            var event;
            if (document.createEvent) {
                event = new CustomEvent(eventName, {
                    bubbles: true,
                    cancelable: true,
                    detail: payload,
                });

                window.dispatchEvent(event);
            } else {
                event = document.createEventObject();
                event.eventName = eventName;
                event.eventType = eventName;
                event.detail = payload;
                window.fireEvent(event.eventType, event);
            }

            // GTM Integration - fire gooogle tag manager events if available
            if (typeof dataLayer !== "undefined") {
                if (dataLayer) {
                    dataLayer.push({
                        event: eventName,
                    });
                }
            }
        };

        var fireConsentEvents = function (userConsent) {
            fireEvent("legalblinkconsentgiven", userConsent.level);

            if (userConsent.level.indexOf("necessary_cookies") != -1) {
                fireEvent(
                    "legalblink_necessary_consentgiven",
                    userConsent.level
                );
            }

            if (userConsent.level.indexOf("third_party_adv_cookies") != -1) {
                fireEvent("legalblink_adv_consentgiven", userConsent.level);
            }

            if (userConsent.level.indexOf("third_party_stats_cookies") != -1) {
                fireEvent("legalblink_stats_consentgiven", userConsent.level);
            }

            if (
                userConsent.level.indexOf("first_party_tracking_cookies") != -1
            ) {
                fireEvent(
                    "legalblink_fptracking_consentgiven",
                    userConsent.level
                );
            }
        };



        var initConsentMode = function () {
            console.log("lb - init consent mode")
            if (typeof gtag === "undefined" && typeof window.dataLayer === "undefined") {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }

                window.gtag = gtag
            }

            if (typeof gtag === "undefined") {


                function gtag() { dataLayer.push(arguments); }

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied',
                    'personalization_storage': 'granted',
                    'functionality_storage': 'granted',
                    'security_storage': 'granted'
                    // 'wait_for_update': 2000
                });


                if (!CONSENT_MODE_URL_PASSTHROUGH_BLACKLIST.includes(licenseId)) {
                    gtag('set', 'url_passthrough', true);
                }


                gtag('set', 'ads_data_redaction', true);

                return
            }

            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'granted',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
                // 'wait_for_update': 2000
            });

            if (!CONSENT_MODE_URL_PASSTHROUGH_BLACKLIST.includes(licenseId)) {
                gtag('set', 'url_passthrough', true);
            }

            gtag('set', 'ads_data_redaction', true);


        }

        var setGoogleConsentMode = function (userConsent) {
            if (typeof gtag === "undefined" && typeof window.dataLayer === "undefined") {
                return;
            }


            var gcm = {
                ad_storage: "denied",
                analytics_storage: "denied",
            };

            if (userConsent.level.indexOf("third_party_adv_cookies") != -1) {
                gcm.ad_storage = "granted";
            }

            if (userConsent.level.indexOf("third_party_stats_cookies") != -1) {
                gcm.analytics_storage = "granted";
            }

            if (typeof gtag === "undefined") {
                function gtag() { dataLayer.push(arguments); }

                gtag("consent", "update", {
                    ad_storage: gcm.ad_storage,
                    analytics_storage: gcm.analytics_storage,
                    ad_user_data: gcm.ad_storage,
                    ad_personalization: gcm.ad_storage,
                    'personalization_storage': 'granted',
                    'functionality_storage': 'granted',
                    'security_storage': 'granted'
                });

                return
            }


            gtag("consent", "update", {
                ad_storage: gcm.ad_storage,
                analytics_storage: gcm.analytics_storage,
                ad_user_data: gcm.ad_storage,
                ad_personalization: gcm.ad_storage,
                'personalization_storage': 'granted',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
            });
        };

        var fireLegalBlinkPushStateEvent = function (userConsent) {
            let variables = {
                necessaryConsent: true,
                advConsent: false,
                statsConsent: false,
                pfTrackingConsent: false,
            };

            if (userConsent.level.indexOf("necessary_cookies") != -1) {
                variables = {
                    ...variables,
                    necessaryConsent: true,
                };
            }

            if (userConsent.level.indexOf("third_party_adv_cookies") != -1) {
                variables = {
                    ...variables,
                    advConsent: true,
                };
            }

            if (userConsent.level.indexOf("third_party_stats_cookies") != -1) {
                variables = {
                    ...variables,
                    statsConsent: true,
                };
            }

            if (
                userConsent.level.indexOf("first_party_tracking_cookies") != -1
            ) {
                variables = {
                    ...variables,
                    pfTrackingConsent: true,
                };
            }

            console.log("lb hc e: ", variables);

            // GTM Integration - fire gooogle tag manager event if available
            if (typeof dataLayer !== "undefined") {
                if (dataLayer) {
                    dataLayer.push({
                        event: "legalblink_history_change",
                        ...variables,
                    });
                }
            }
        };

        var setNavigationHistoryChangeListener = function (consent) {
            // popstate listener
            window.addEventListener("popstate", function () {
                fireConsentEvents(consent);
            });

            // pushstate listener
            var pushState = history.pushState;
            history.pushState = function () {
                pushState.apply(history, arguments);

                fireLegalBlinkPushStateEvent(consent);
            };
        };

        var handleConsent = function (userConsent) {



            if (lbCookieConfig && lbCookieConfig.banner && lbCookieConfig.banner.consentModeEnabled) {


                setGoogleConsentMode(userConsent);
            }

            fireConsentEvents(userConsent);
            fireLegalBlinkPushStateEvent(userConsent);

            setNavigationHistoryChangeListener(userConsent);
        };

        /**
         * Save cookie preferences
         * accept_type = 0: accept necessary only
         * accept_type = 1: accept all
         * accept_type = -1: accept selection
         */
        var saveCookiePreferences = function (accept_type) {
            // Get all cookiepreferences values saved in cookieconsent settings modal
            var category_toggles = document.querySelectorAll(".c_toggle");

            var c_cookie_level = "",
                changedSettings = false;

            // If there are opt in/out toggles ...
            if (typeof category_toggles.length === "number") {
                switch (accept_type) {
                    case -1: {
                        //accept current selection
                        for (var i = 0; i < category_toggles.length; i++) {
                            if (category_toggles[i].checked) {
                                c_cookie_level +=
                                    '"' + category_toggles[i].value + '",';

                                if (!toggleStates[i]) {
                                    changedSettings = true;
                                    toggleStates[i] = true;
                                }
                            } else {
                                if (toggleStates[i]) {
                                    changedSettings = true;
                                    toggleStates[i] = false;
                                }
                            }
                        }
                        break;
                    }

                    case 0: {
                        // disable all except necessary
                        for (var i = 0; i < category_toggles.length; i++) {
                            if (category_toggles[i].readOnly) {
                                c_cookie_level +=
                                    '"' + category_toggles[i].value + '",';
                                toggleStates[i] = true;
                            } else {
                                category_toggles[i].checked = false;
                                if (toggleStates[i]) {
                                    changedSettings = true;
                                    toggleStates[i] = false;
                                }
                            }
                        }
                        break;
                    }

                    case 1: {
                        // enable all
                        for (var i = 0; i < category_toggles.length; i++) {
                            category_toggles[i].checked = true;
                            c_cookie_level +=
                                '"' + category_toggles[i].value + '",';
                            if (!toggleStates[i]) {
                                changedSettings = true;
                            }
                            toggleStates[i] = true;
                        }

                        break;
                    }
                }
                // remove last ',' character
                c_cookie_level = c_cookie_level.slice(0, -1);
                /**
                 * If autoclear_cookies==true -> delete all cookies which are unused (based on selected preferences)
                 */
                if (
                    lbCookieConfig["autoclearCookies"] &&
                    isCoookieConsentAccepted
                ) {
                    // Get array of all blocks defined inside settings
                    var blocks =
                        lbCookieConfig.banner.languages[defaultConfig.lang][
                        "settings"
                        ]["blocks"];
                    // Get number of blocks
                    var len = blocks.length;
                    // For each block
                    var count = -1;
                    for (var jk = 0; jk < len; jk++) {
                        // Save current block (local scope & less accesses -> ~faster value retrieval)
                        var curr_block = blocks[jk];
                        // If current block has a toggle for opt in/out
                        if (curr_block.hasOwnProperty("toggle")) {
                            // if current block has a cookie table with toggle off => delete cookies
                            if (
                                !toggleStates[++count] &&
                                curr_block.hasOwnProperty("cookies")
                            ) {
                                var ckey = getKeys(
                                    lbCookieConfig.banner.languages[
                                    defaultConfig.lang
                                    ]["settings"]["cookies_headers"][0]
                                )[0];
                                // Get number of cookies defined in cookies
                                var clen = curr_block["cookies"].length;
                                // Delete each cookie defined in ccb_cookies of current block
                                for (var hk = 0; hk < clen; hk++) {
                                    // Get current row of table (corresponds to all cookie params)
                                    var curr_row = curr_block["cookies"][hk];
                                    // If cookie exists -> delete it
                                    if (getCookie(curr_row[ckey]) != "") {
                                        eraseCookie(curr_row[ckey]);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Cookie string too long on mobile devices
            // var cookie_content =
            //     '{"level": [' +
            //     c_cookie_level +
            //     '], "version": "' +
            //     lbCookieConfig.version +
            //     '", "date": "' +
            //     new Date() +
            //     '", "uuid": "' +
            //     getLegalBlinkUniqueId() +
            //     '"}'

            var cookie_content =
                '{"level": [' +
                c_cookie_level +
                '], "version": "' +
                lbCookieConfig.version +
                '"}';

            // save cookie with preferences 'level' (only if never accepted or settings were updated)
            if (!isCoookieConsentAccepted || changedSettings) {
                setCookie(
                    LB_CONSENT_COOKIE_KEY,
                    cookie_content,
                    defaultConfig.cookieExpiration,
                    0,
                    0
                );
            }

            var consentJSON = JSON.parse(cookie_content);

            if (
                typeof lbCookieConfig["onAccept"] === "function" &&
                !isCoookieConsentAccepted
            ) {
                isCoookieConsentAccepted = true;

                setCookieTracking("accepted", consentJSON);
                handleConsent(consentJSON);
                return lbCookieConfig["onAccept"](consentJSON);
            }
            // fire onChange only if settings were changed
            if (
                typeof lbCookieConfig["onChange"] === "function" &&
                changedSettings
            ) {
                setCookieTracking("changed", consentJSON);
                handleConsent(consentJSON);
                lbCookieConfig["onChange"](consentJSON);
            }
        };

        var createCookieConsentHTML = function () {
            // Create main container which holds both consent modal & settings modal
            mainContainer = document.createElement("div");
            mainContainer.setAttribute("c_data", "c_cookie_main");

            // Fix layout flash
            mainContainer.style.position = "fixed";
            mainContainer.style.zIndex = "1000000";
            mainContainer.innerHTML =
                '<!--[if lt IE 9 ]><div id="cc_div" class="ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div"></div><!--<![endif]-->';

            var allModalsContainer = mainContainer.children[0];

            var neverAccepted = !isConsentModalAttached;

            console.log("neverAccepted: ", neverAccepted)

            // If never_accepted => create consent-modal
            if (!neverAccepted) {
                consentModal = document.createElement("div");
                var consent_modal_inner = document.createElement("div");
                var consent_title = document.createElement("p");
                var consent_text = document.createElement("p");
                var consent_tcf_text = document.createElement("p");
                var consent_buttons = document.createElement("div");
                var consent_primary_btn = document.createElement("button");
                var consent_secondary_btn = document.createElement("button");
                var consent_tertiary_btn = document.createElement("button");
                var close_btn = document.createElement("button");

                addEventToHTMLElement(close_btn, "click", function () {
                    hideConsentModal();
                    saveCookiePreferences(-1);
                });

                // Set for each of them, their default configured ids
                consentModal.id = "cm";

                if (lbCookieConfig.banner && lbCookieConfig.banner.style && lbCookieConfig.banner.style.mobilePosition && lbCookieConfig.banner.style.mobilePosition === "center") {
                    consentModal.className = "mb-center";
                }


                consent_modal_inner.id = "cm_inner";
                consent_title.id = "cm_title";
                consent_text.id = "cm_text";
                consent_tcf_text.id = "cm_tcf_text";

                consent_buttons.id = "cm_btns";
                consent_primary_btn.id = "cm_primary_btn";
                consent_secondary_btn.id = "cm_secondary_btn";
                consent_primary_btn.setAttribute("type", "button");
                consent_primary_btn.className = "c_button";
                consent_secondary_btn.className = "c_link";
                // consentModal.style.visibility = "hidden";
                consent_secondary_btn.setAttribute("type", "button");

                consent_tertiary_btn.id = "cm_tertiary_btn";
                consent_tertiary_btn.setAttribute("type", "button");
                consent_tertiary_btn.className = "c_link";

                close_btn.innerHTML = "x";
                close_btn.setAttribute("type", "button");
                close_btn.id = "cm_close_btn";
                close_btn.innerHTML = "x";

                // Get current lang
                const lang = defaultConfig.lang;

                // Set modal main texts
                consent_title.innerHTML = lbCookieConfig.active != false ?
                    lbCookieConfig.banner.languages[lang].title : "Il servizio di banner cookie associato a questo sito non è attivo. Pertanto, alcune funzionalità del sito potrebbero essere limitate o non disponibili. Si invia a contattare il titolare del presente sito web per chiarimenti.";


                consent_text.innerHTML =
                    lbCookieConfig.banner.languages[lang].description;


                const vendorsLink = document.createElement("a");
                vendorsLink.href = "#";
                vendorsLink.innerHTML = "We and 945 selected third parties"
                vendorsLink.style.textDecoration = "underline";

                addEventToHTMLElement(vendorsLink, "click", function (event) {
                    event?.preventDefault?.()

                    fireEvent("openTcfModalVendors");
                })

                consent_tcf_text.innerHTML = ` process your personal data, such as your IP address, using technologies such as cookies, to store and access information on your device. This is for the purpose of serving personalized ads and content, evaluating advertising and content, analyzing users, and product development. You can choose who uses your data and for what purposes. <br/>
                <strong>With your consent we may also collect:</strong><br />
                - Precise geolocation data, and identification through device scanning;<br />
                - Personalised advertising and content, advertising and content measurement, audience research and services development.<br />
                - Personalised advertising based on your profile. Your activity on this service can be used to build or improve a profile about you for personalised advertising. <br />
                <br />
                Learn more about how your personal information is processed and set your preferences in the details section. You can change or withdraw your consent at any time from the <strong>Ads preferences link</strong>.<br/>
                Open the advertising <span style='text-decoration:underline;' href='#'>preferences panel</span>`
                consent_tcf_text.style.marginTop = "5px";
                consent_tcf_text.style.cursor = "pointer";

                consent_tcf_text.prepend(vendorsLink);

                consent_primary_btn.innerHTML =
                    lbCookieConfig.banner.languages[lang].primaryBtn;
                consent_secondary_btn.innerHTML =
                    lbCookieConfig.banner.languages[lang].secondaryBtn;

                consent_tertiary_btn.innerHTML =
                    lbCookieConfig.banner.languages[lang].tertiaryBtn;

                addEventToHTMLElement(consent_tcf_text, "click", function (event) {
                    event?.preventDefault?.()

                    fireEvent("openTcfModal");
                })

                addEventToHTMLElement(consent_tcf_text, "click", function (event) {
                    event?.preventDefault?.()

                    fireEvent("openTcfModal");
                })

                if (
                    lbCookieConfig.banner.languages[lang]["primaryBtnRole"] ==
                    "accept_all"
                ) {
                    addEventToHTMLElement(
                        consent_primary_btn,
                        "click",
                        function () {
                            hideConsentModal();
                            saveCookiePreferences(1); // 1 => accept all
                        }
                    );
                } else {
                    addEventToHTMLElement(
                        consent_primary_btn,
                        "click",
                        function () {
                            hideConsentModal();
                            saveCookiePreferences(-1); // -1 => accept current selection
                        }
                    );
                }

                if (
                    lbCookieConfig.banner.languages[lang]["tertiaryBtnRole"] ==
                    "reject_all"
                ) {
                    addEventToHTMLElement(
                        consent_tertiary_btn,
                        "click",
                        function () {
                            hideConsentModal();
                            saveCookiePreferences(0); // 0 => reject all means accept necessary only
                        }
                    );
                }

                // close btn into consent_modal;
                if (
                    lbCookieConfig &&
                    lbCookieConfig.banner &&
                    lbCookieConfig.banner.showCloseBtn
                ) {
                    consent_modal_inner.appendChild(close_btn);
                }

                // insert title into consent_modal
                consent_modal_inner.appendChild(consent_title);

                if (lbCookieConfig.active != false) {
                    // insert description into consent_modal
                    consent_modal_inner.appendChild(consent_text);
                }


                if (lbCookieConfig &&
                    lbCookieConfig.banner && lbCookieConfig.banner.tcfEnabled) {
                    consentModal.style.width = "100vw";
                    consentModal.style.maxWidth = "100vw";

                    consent_text.appendChild(consent_tcf_text);
                }



                // insert buttons into consent_buttons

                // reject all btn into consent_modal;
                if (
                    lbCookieConfig &&
                    lbCookieConfig.banner &&
                    lbCookieConfig.banner.showRejectAllBtn
                ) {
                    consent_buttons.appendChild(consent_tertiary_btn);
                }

                consent_buttons.appendChild(consent_secondary_btn);
                consent_buttons.appendChild(consent_primary_btn);

                if (lbCookieConfig.active != false) {
                    // insert btn_container into consent_modal
                    consent_modal_inner.appendChild(consent_buttons);
                }

                if (
                    lbCookieConfig.banner.languages[lang].secondaryBtnRole ==
                    "accept_necessary"
                ) {
                    addEventToHTMLElement(
                        consent_secondary_btn,
                        "click",
                        function () {
                            hideConsentModal();
                            saveCookiePreferences(0); // 0 => accept necesssary only
                        }
                    );
                } else {

                    if (lbCookieConfig &&
                        lbCookieConfig.banner && lbCookieConfig.banner.tcfEnabled) {
                        addEventToHTMLElement(
                            consent_secondary_btn,
                            "click",
                            function (event) {
                                event?.preventDefault?.()

                                fireEvent("openTcfModal");
                            }
                        );
                    }
                    else {
                        addEventToHTMLElement(
                            consent_secondary_btn,
                            "click",
                            function () {
                                showSettingsModal(0);
                            }
                        );
                    }

                }

                // Override styles based on config
                consentModal.style.color =
                    lbCookieConfig.banner.style.textColor;
                consentModal.style.backgroundColor =
                    lbCookieConfig.banner.style.backgroundColor;
                consent_primary_btn.style.background =
                    lbCookieConfig.banner.style.primaryColor;

                consent_primary_btn.style.color =
                    lbCookieConfig.banner.style.textOnPrimaryColor;
                consent_secondary_btn.style.background =
                    lbCookieConfig.banner.style.secondaryColor;
                consent_secondary_btn.style.color =
                    lbCookieConfig.banner.style.textOnSecondaryColor;

                close_btn.style.background =
                    lbCookieConfig.banner.style.secondaryColor;
                close_btn.style.color =
                    lbCookieConfig.banner.style.textOnSecondaryColor;
                // End style override

                // Append consent modal to dom
                consentModal.appendChild(consent_modal_inner);
                allModalsContainer.appendChild(consentModal);
            }

            /**
             * Create all consent_modal elems
             */
            settingsContainer = document.createElement("div");
            var settings_container_valign = document.createElement("div");
            var settings = document.createElement("div");
            var settings_container_inner = document.createElement("div");
            var settings_inner = document.createElement("div");
            var settings_title = document.createElement("p");
            var settings_header = document.createElement("div");
            var settings_close_btn = document.createElement("button");
            var settings_blocks = document.createElement("div");
            settings_close_btn.setAttribute("type", "button");

            /**
             * Set for each of them, their default configured ids
             */
            settingsContainer.id = "cs_cont";
            settings_container_valign.id = "cs_valign";
            settings_container_inner.id = "cs_cont_inner";
            settings.id = "cs";
            settings_title.id = "cs_title";
            settings_inner.id = "cs_inner";
            settings_header.id = "cs_header";
            settings_blocks.id = "cs_blocks";
            settings_close_btn.id = "cs_settings_close_btn";
            settings_close_btn.innerHTML = "x";
            settings_close_btn.className = "c_button";

            addEventToHTMLElement(settings_close_btn, "click", function () {
                hideSettingsModal();
            });

            // Set cc settings modal title
            settings_title.innerHTML =
                lbCookieConfig.banner.languages[defaultConfig.lang]["settings"][
                "title"
                ];

            // -------------------------------------
            // Render blocks
            // -------------------------------------

            var blocks =
                lbCookieConfig.banner.languages[defaultConfig.lang]["settings"][
                "blocks"
                ];

            // Get number of blocks with cs_lang as language
            var n_blocks = blocks.length;

            var count_toggles = 0;
            var div_btns = [];

            for (var i = 0; i < n_blocks; ++i) {
                if (blocks[i]["toggle"]["visible"]) {
                    // Create title
                    var block_section = document.createElement("div");
                    var block_title_container = document.createElement("div");
                    var block_table_container = document.createElement("div");
                    var block_title = document.createElement("p");
                    var block_desc = document.createElement("div");
                    block_section.className = "cs_block";
                    block_title.className = "b_title";
                    block_title_container.className = "title";
                    block_table_container.className = "desc";
                    block_desc.className = "p";

                    // set title and description for each block
                    block_title.innerHTML = blocks[i]["title"];
                    block_desc.innerHTML = blocks[i]["description"];

                    block_title_container.appendChild(block_title);

                    // create toggle if specified (opt in/out)
                    if (typeof blocks[i]["toggle"] !== "undefined") {
                        var block_switch_label =
                            document.createElement("label");
                        var block_switch = document.createElement("input");
                        var block_switch_span = document.createElement("span");

                        block_switch_label.className = "c_b_toggle";
                        block_switch.className = "c_toggle";
                        block_switch.setAttribute("aria-label", "toggle");
                        block_switch_span.className = "sc_toggle";

                        block_switch.setAttribute("type", "checkbox");
                        block_switch.value = blocks[i]["toggle"].value;
                        block_switch.setAttribute(
                            "aria-label",
                            blocks[i]["toggle"].value
                        );

                        // if cookie is set, get current saved preferences from cookie
                        if (neverAccepted) {
                            if (
                                arrayContains(
                                    JSON.parse(getCookie(LB_CONSENT_COOKIE_KEY))
                                        .level,
                                    blocks[i]["toggle"].value
                                )
                            ) {
                                block_switch.checked = true;
                                toggleStates.push(true);
                            } else {
                                toggleStates.push(false);
                            }
                        } else if (blocks[i]["toggle"]["enabled"]) {
                            block_switch.checked = true;
                        }

                        if (blocks[i]["toggle"]["readonly"]) {
                            block_switch.disabled = "disabled";
                            block_switch.readOnly = true;
                            addClassToHTMLElement(
                                block_switch_span,
                                "sc_readonly"
                            );
                        }

                        block_switch_label.appendChild(block_switch);
                        block_switch_label.appendChild(block_switch_span);

                        block_title_container.appendChild(block_switch_label);

                        addClassToHTMLElement(
                            block_table_container,
                            "accordion"
                        );
                        addClassToHTMLElement(
                            block_title_container,
                            "block_button"
                        );
                        addClassToHTMLElement(block_section, "block__expand");
                        div_btns.push(block_title_container);

                        addEventToHTMLElement(
                            div_btns[count_toggles],
                            "click",
                            function (_index) {
                                if (
                                    !HTMLElementHasClass(
                                        div_btns[_index].parentNode,
                                        "_active"
                                    )
                                ) {
                                    addClassToHTMLElement(
                                        div_btns[_index].parentNode,
                                        "_active"
                                    );
                                } else {
                                    removeClassFromHTMLElement(
                                        div_btns[_index].parentNode,
                                        "_active"
                                    );
                                }
                            },
                            false,
                            count_toggles
                        );

                        count_toggles++;
                    }

                    block_section.appendChild(block_title_container);
                    block_table_container.appendChild(block_desc);

                    // if cookie table found, generate table for this block
                    if (
                        typeof blocks[i]["cookies"] !== "undefined" &&
                        blocks[i]["cookies"].length > 0
                    ) {
                        // generate cookie-table for this block
                        var block_table = document.createElement("table");

                        // create table header
                        var thead = document.createElement("thead");
                        var tr_tmp = document.createElement("tr");
                        var all_table_headers =
                            lbCookieConfig.banner.languages[defaultConfig.lang][
                            "settings"
                            ]["cookies_headers"];

                        /**
                         * Use custom table headers
                         */
                        for (var p = 0; p < all_table_headers.length; ++p) {
                            // create new header
                            var th1 = document.createElement("th");

                            // get custom header content
                            var new_column_key = getKeys(
                                all_table_headers[p]
                            )[0];
                            var new_column_content =
                                all_table_headers[p][new_column_key];

                            th1.innerHTML = new_column_content;
                            tr_tmp.appendChild(th1);
                        }

                        thead.appendChild(tr_tmp);
                        block_table.appendChild(thead);

                        var tbody = document.createElement("tbody");

                        for (var n = 0; n < blocks[i]["cookies"].length; n++) {
                            var tr = document.createElement("tr");

                            for (var g = 0; g < all_table_headers.length; ++g) {
                                var td_tmp = document.createElement("td");

                                // get custom header content
                                var new_column_key = getKeys(
                                    all_table_headers[g]
                                )[0];
                                var new_column_content =
                                    blocks[i]["cookies"][n][new_column_key];

                                td_tmp.innerHTML = new_column_content;
                                td_tmp.setAttribute(
                                    "data-column",
                                    all_table_headers[g][new_column_key]
                                );

                                tr.appendChild(td_tmp);
                            }

                            tbody.appendChild(tr);
                        }

                        block_table.appendChild(tbody);

                        //block_section.appendChild(block_table);
                        block_table_container.appendChild(block_table);
                    }

                    block_section.appendChild(block_table_container);

                    // append block inside settings dom
                    settings_blocks.appendChild(block_section);
                }
            }

            // Create settings buttons
            var settings_buttons = document.createElement("div");
            var settings_save_btn = document.createElement("button");
            var settings_accept_all_btn = document.createElement("button");

            settings_buttons.id = "cs_buttons";
            settings_save_btn.id = "cs_save__btn";
            settings_accept_all_btn.id = "cs_acceptall_btn";
            settings_save_btn.setAttribute("type", "button");
            settings_accept_all_btn.setAttribute("type", "button");
            settings_save_btn.className = "c_button";
            settings_accept_all_btn.className = "c_button";
            settings_save_btn.innerHTML =
                lbCookieConfig.banner.languages[defaultConfig.lang]["settings"][
                "buttons"
                ]["save"];
            settings_accept_all_btn.innerHTML =
                lbCookieConfig.banner.languages[defaultConfig.lang]["settings"][
                "buttons"
                ]["acceptAll"];

            settings_buttons.appendChild(settings_accept_all_btn);
            settings_buttons.appendChild(settings_save_btn);

            // Add save preferences button onClick event
            // Hide both settings modal and consent modal
            addEventToHTMLElement(settings_save_btn, "click", function () {
                hideSettingsModal();
                hideConsentModal();
                saveCookiePreferences(-1);
            });

            addEventToHTMLElement(
                settings_accept_all_btn,
                "click",
                function () {
                    hideSettingsModal();
                    hideConsentModal();
                    saveCookiePreferences(1);
                }
            );

            settings_header.appendChild(settings_title);
            settings_header.appendChild(settings_close_btn);
            settings_inner.appendChild(settings_header);
            settings_inner.appendChild(settings_blocks);
            settings_inner.appendChild(settings_buttons);
            settings_container_inner.appendChild(settings_inner);
            settings.appendChild(settings_container_inner);
            settings_container_valign.appendChild(settings);
            settingsContainer.appendChild(settings_container_valign);
            settingsContainer.style.visibility = "hidden";

            allModalsContainer.appendChild(settingsContainer);

            // Append modal container to the DOM
            document.body.appendChild(mainContainer);
        };

        var addCookieSettingsButtonListener = function () {
            var all_links = document.querySelectorAll(
                'a[data-lb="c-settings"], button[data-lb="c-settings"], .lb-cs-settings-link'
            );
            for (var x = 0; x < all_links.length; x++) {
                addEventToHTMLElement(all_links[x], "click", function (event) {
                    event.preventDefault
                        ? event.preventDefault()
                        : (event.returnValue = false);
                    showSettingsModal(0);
                });
            }
        };

        var showConsentModal = function (delay) {
            if (isConsentModalAttached) {
                setTimeout(
                    function () {
                        addClassToHTMLElement(
                            domHTML,
                            "lb-show-cookie-consent"
                        );
                    },
                    delay > 0 ? delay : 0
                );
            }
        };

        var hideConsentModal = function () {
            if (isConsentModalAttached) {
                removeClassFromHTMLElement(domHTML, "lb-show-cookie-consent");
            }
        };

        /**
         * Check if cookie banner  is alredy attached to dom
         * If not, create one, configure it and attach it to body
         */
        var runCookieSolution = function (config) {
            if (!mainContainer) {
                setConfig(config);

                // Get cookie value
                var cookieVal = getCookie(LB_CONSENT_COOKIE_KEY);

                if (cookieVal != "") {
                    var parsedCookie = JSON.parse(cookieVal);
                    if (
                        parseFloat(parsedCookie.version) <
                        parseFloat(lbCookieConfig.version)
                    ) {
                        cookieVal = "";
                    }
                }

                // If cookie is empty => create consent modal
                isConsentModalAttached = cookieVal == "";

                loadCSS(function () {
                    // Generate cookie-settings dom (& consent modal)
                    createCookieConsentHTML();

                    if (lbCookieConfig.active != false) {
                        addCookieSettingsButtonListener();
                    }

                    // Add class to enable animations
                    setTimeout(function () {
                        addClassToHTMLElement(mainContainer, "c--anim");
                    }, 100);

                    if (!cookieVal && defaultConfig.autorun) {
                        showConsentModal(
                            lbCookieConfig["delay"] > 30
                                ? lbCookieConfig["delay"]
                                : 30
                        );
                    }
                    // if cookie accepted => fire once onAccept method (if defined)
                    if (
                        cookieVal &&
                        typeof lbCookieConfig["onAccept"] === "function" &&
                        !isCoookieConsentAccepted
                    ) {
                        isCoookieConsentAccepted = true;

                        // give page time to load all scripts
                        setTimeout(function () {
                            var prevConsent = JSON.parse(cookieVal);
                            handleConsent(prevConsent);
                        }, 300);
                        lbCookieConfig["onAccept"](
                            JSON.parse(cookieVal || "{}")
                        );
                    }
                });
            } else {
            }
        };

        var initAndRunCookieSolution = function () {
            lbConfigScript.id = "lbConfig";

            var url =
                configEndpoint +
                "?license=" +
                licenseId +
                "&lang=" +
                defaultConfig.lang;

            // download cookie configuration and make it accessibile (into a script tag)
            executeXMLHttpRequest(
                "GET",
                url,
                null,
                function (response) {
                    // response set lbCookieConfig object and put into script tag

                    // Necessary for <IE9
                    lbConfigScript.setAttribute(
                        "type",
                        "application/javascript"
                    );

                    lbConfigScript.appendChild(
                        document.createTextNode(response)
                    );

                    // Append css text content
                    domHead.appendChild(lbConfigScript);

                    // Give enough time to the css to load (so that initial animations dont get skipped)
                    setTimeout(function () {

                        runCookieSolution(lbCookieConfig)
                    }, 100);
                },
                function (error) {
                    console.error("[LegalBlink Error]", error);
                }
            );


            window.addEventListener("lbCloseBanner", () => {
                hideConsentModal();
                saveCookiePreferences(1);
            })
        };

        // -------------------------------------
        // Prototype
        // -------------------------------------

        lb_cs.executeScripts = function (type) {
            var inputs = document.querySelectorAll("." + type);

            Array.prototype.forEach.call(inputs, function (el) {
                var newElement = document.createElement("script");

                Array.from(el.attributes).forEach((attr) =>
                    newElement.setAttribute(attr.name, attr.value)
                );

                newElement.setAttribute("type", "text/javascript");

                newElement.innerHTML = el.innerHTML;

                el.parentNode.appendChild(newElement);
                el.parentNode.removeChild(el);
            });
        };

        // -------------------------------------
        // init and run
        // -------------------------------------

        if (!CONSENT_MODE_BLACKLIST.includes(licenseId)) {
            initConsentMode()
        }

        initAndRunCookieSolution();
    };

    /**
     * Make CookieConsent object accessible globally
     */
    if (typeof window["lb_cs"] !== "function") {
        window["lb_cs"] = lb_cs;
    }
})();
// auto execute function - give scope to function
