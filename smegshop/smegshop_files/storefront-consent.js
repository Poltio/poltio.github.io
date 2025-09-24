"use strict";

(function () {

  function syncCheckoutAndStorefrontConsent() {
    //check if OT APIs are not loaded yet as it is critical to be able to still pass the consent to the SDK through window.OTExternalConsent
    const otAPILoaded = window.OneTrust && window.OneTrust.getGeolocationData;
    const checkoutConsentedDate = window.Shopify.customerPrivacy.getTrackingConsentMetafield("onetrust.datestamp");
    if (!otAPILoaded && checkoutConsentedDate) {
      const checkoutConsent = window.Shopify.customerPrivacy.getTrackingConsentMetafield("onetrust.groups");
      window.OTExternalConsent = {
        groups: checkoutConsent,
        consentedDate: checkoutConsentedDate
      };
      console.info('OneTrust SDK is not loaded and there is consent from checkout.');
    } else if (otAPILoaded && checkoutConsentedDate) {
      console.info('There is consent from checkout but the OneTrust SDK is already loaded.');
    }
  }

  function loadCustomerPrivacyAPI(callback, callSyncConsentOnLoad = false) {
    window.Shopify.loadFeatures(
      [
        {
          name: 'consent-tracking-api',
          version: '0.1',
        },
      ],
      error => {
        if (error) {
          console.error('Error while loading Customer Privacy API');
          return;
        }
        console.info('Customer Privacy API is loaded');
        callSyncConsentOnLoad && SyncConsentOnLoad();
        if(callback) {
          callback();
        }
      },
    );
  }

  loadCustomerPrivacyAPI(syncCheckoutAndStorefrontConsent, true);
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function getConsentMapping() {
    const scriptContainer = document.getElementById("onetrust-script");
    const consentMappingJson = scriptContainer.dataset.shopifyConsentMapping;
    if (!consentMappingJson) {
      console.log("Unable to locate consent mapping");
      return;
    }
    return JSON.parse(consentMappingJson);
  }

  function mapTrackingConsent(codes, consentMapping) {
    const mapping = {
      marketing: false,
      sale_of_data: false,
      analytics: false,
      preferences: false,
    };

    for (const property in consentMapping) {
      const mappingArray = consentMapping[property].filter((value) =>
        codes.includes(value),
      );
      if (
        consentMapping[property].length > 0 &&
        mappingArray.length === consentMapping[property].length
      ) {
        mapping[property] = true;
      }
    }
    return mapping;
  }

  window.addEventListener("consent.onetrust", (data) => {
    if (
      data && data.detail
    ) {
      syncConsentToShopify(data.detail);
    }
  });
  /**
   * This event listener is triggered when the OneTrust script and Customer Privacy API loaded and
   * the consent groups are available in the `dataLayer[OneTrustGroupsUpdated]` variable.
   * It checks if the user has NOT interacted with the consent banner
   * (i.e., `onetrust.datestamp` is null) and if so, it retrieves the consent
   * if dataLayer[OneTrustGroupsUpdated] is not set, then all tracking consent is set as false
   * It synchronizes the consent information with Shopify's Customer Privacy API.
   */
  function SyncConsentOnLoad() {
    window.addEventListener('OneTrustGroupsUpdated', (data) => {
      const checkoutConsentDate = window.Shopify.customerPrivacy.getTrackingConsentMetafield("onetrust.datestamp");
   
      if (!checkoutConsentDate) {
        syncConsentToShopify(data.detail);
      } 
    }, { once: true }); 
  }

  function syncConsentToShopify(detail) {
    const consentMapping = getConsentMapping();
    if (!consentMapping) {
      console.log(
        "Consent mapping is not defined. Unable to send consent to Shopify Privacy API"
      );
      return;
    }

    let consent;

    const params = new URLSearchParams(getCookie("OptanonConsent"));
    const groups = params.get("groups");
    const storefrontConsentDate = getCookie("OptanonAlertBoxClosed");

    try {
      consent = mapTrackingConsent(detail, consentMapping);
      if (groups) {
        consent.metafields = [
          { key: "onetrust.groups", value: groups },
          { key: "onetrust.datestamp", value: storefrontConsentDate },
        ];
      }
    } catch (error) {
      console.log(error);
      return;
    }

    if (window.Shopify.customerPrivacy) {
      updateCustomerPrivacyApiConsent(storefrontConsentDate, consent);
    } else {
      loadCustomerPrivacyAPI(() => {
        updateCustomerPrivacyApiConsent(storefrontConsentDate, consent);
      });
    }
  }

  function updateCustomerPrivacyApiConsent(storefrontConsentDate, consent) {
    const checkoutConsentDate = window.Shopify.customerPrivacy.getTrackingConsentMetafield('onetrust.datestamp');
    if(!checkoutConsentDate || storefrontConsentDate > checkoutConsentDate) {
      window.Shopify.customerPrivacy.setTrackingConsent(consent, () => {});
      return;
    }
  }
})();
