(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.td = {
    attach: function (context, settings) {
      // Check if TD is configured.
      if (drupalSettings.td_js_sdk_write_key) {
        // Initiate TD cookies on every page load.
        // Get cookie consent values.
        var targetCookieArr = [];
        var functionalCookieArr = [];
        var consentCookie = Cookies.get("OptanonConsent");

        // Onetrust cookie.
        if (consentCookie !== undefined) {
          consentCookieArr = consentCookie.split('&');
          $.each(consentCookieArr, (index, item) => {
            itemArr = item.split('=');
            if (itemArr[0] == 'groups') {
              itemCatArr = itemArr[1].split(',');

              // Tergeting cookie.
              if (itemCatArr[3] !== undefined) {
                targetCookieArr = itemCatArr[3].split(':');
              }
              // Functional Cookie
              if (itemCatArr[2] !== undefined) {
                functionalCookieArr = itemCatArr[2].split(':');
              }
            }
          });
        }

        // Configure an instance for your database.
        var td = new Treasure({
          host: drupalSettings.td_js_sdk_domain,
          writeKey: drupalSettings.td_js_sdk_write_key,
          database: drupalSettings.td_js_sdk_db,
          useServerSideCookie: true
        });

        // Check functional & Targeting cookie consent.
        if (functionalCookieArr[0] == 3 && functionalCookieArr[1] == 1) {
          // Set TD signed mode.
          td.setSignedMode();
          // Set _td_domain_<domain> cookie.
          td.fetchServerCookie();
        }
        else if (targetCookieArr[0] == 4 && targetCookieArr[1] == 1) {
          // Set TD signed mode.
          td.setSignedMode();
          // Remove _td_domain_<domain> cookie.
          removeTdDomainCookie();
        }
        else {
          // Set TD anonymous mode.
          td.setAnonymousMode();
          // Remove _td_domain_<domain> cookie.
          removeTdDomainCookie();
        }
      }

      function removeTdDomainCookie() {
        // Remove _td_domain_<domain> cookie.
        hostName = window.location.hostname;
        domain = hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
        document.cookie = '_td_domain_' + domain + '=; domain=.' + domain + '; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }

      $('.webform-submission-subscribe-newsletter-form #edit-actions-submit').click(function (e) {
        // To prevent second submission.
        if (this.beenSubmitted) {
          return false;
        }
        else {
          this.beenSubmitted = true;
          // This delay is for to complete the validation.
          setTimeout(function () {
            if ($('.webform-submission-subscribe-newsletter-form').find(".error").length > 0) {
              // Enable the button if there is any error.
              $('.webform-submission-subscribe-newsletter-form #edit-actions-submit').prop('disabled', false);
              return false;
            }
            // Send data.
            sendDataToTD('webform-submission-subscribe-newsletter-form');
          }, 1000);
        }
      });

      $('.webform-submission-my-preferences-form #edit-actions-submit').click(function (e) {
        // To prevent second submission.
        if (this.beenSubmitted) {
          return false;
        }
        else {
          this.beenSubmitted = true;
          // This delay is for to complete the validation.
          setTimeout(function () {
            if ($('.webform-submission-my-preferences-form').find(".error").length > 0) {
              // Enable the button if there is any error.
              $('.webform-submission-my-preferences-form #edit-actions-submit').prop('disabled', false);
              return false;
            }
            // Send data.
            sendDataToTD('webform-submission-my-preferences-form');
          }, 1000);
        }
      });

      function sendDataToTD(formClass) {
        // Check CDP and Region.
        if (drupalSettings.cdp == 'new_aic_cdp' && drupalSettings.region == 'EM_EANZ') {
          // Check if TD is configured.
          if (drupalSettings.td_js_sdk_write_key) {
            // Configure an instance for your database
            var td = new Treasure({
              host: drupalSettings.td_js_sdk_domain,
              writeKey: drupalSettings.td_js_sdk_write_key,
              database: drupalSettings.td_js_sdk_db,
              useServerSideCookie: true
            });

            // Field mapping.
            var field_mapping = drupalSettings.newsletter_form_field_mapping;

            // Create an Object.
            const data = {};

            // Add fields based on mapping.
            if (drupalSettings.preferences == 1) {
              for (var key in field_mapping) {
                var type = $('.webform-submission-my-preferences-form').find('[name^=' + field_mapping[key] + ']').attr("type");
                var val = [];
                if (type == 'checkbox' || type == 'radio') {
                  if (type == 'checkbox') {
                    $('.webform-submission-my-preferences-form').find('[name^=' + field_mapping[key] + ']:checked').each(function (i) {
                      val[i] = $(this).val();
                    });
                    if (val.length > 1) {
                      data[key] = val.join(" | ");
                    }
                    else {
                      data[key] = val;
                    }
                  }
                  else {
                    data[key] = $('.webform-submission-my-preferences-form').find('[name^=' + field_mapping[key] + ']:checked').val();
                  }
                }
                else {
                  data[key] = $('.webform-submission-my-preferences-form').find('[name=' + field_mapping[key] + ']').val();
                }
              }
              data['email'] = drupalSettings.email;
            }
            else {
              for (var key in field_mapping) {
                var type = $('.webform-submission-subscribe-newsletter-form').find('[name^=' + field_mapping[key] + ']').attr("type");
                var val = [];
                if (type == 'checkbox' || type == 'radio') {
                  if (type == 'checkbox') {
                    $('.webform-submission-subscribe-newsletter-form').find('[name^=' + field_mapping[key] + ']:checked').each(function (i) {
                      val[i] = $(this).val();
                    });
                    if (val.length > 1) {
                      data[key] = val.join(" | ");
                    }
                    else {
                      data[key] = val[0];
                    }
                  }
                  else {
                    data[key] = $('.webform-submission-subscribe-newsletter-form').find('[name^=' + field_mapping[key] + ']:checked').val();
                  }
                }
                else {
                  data[key] = $('.webform-submission-subscribe-newsletter-form').find('[name=' + field_mapping[key] + ']').val();
                }
              }

              // Opt In data.
              data['opt_in_marketing'] = true;
              data['opt_in_newsletters_date'] = $.now();
              // Set page url.
              data['td_url'] = window.location.href;
            }

            // Set Brand, Region and Market.
            data['brand'] = drupalSettings.brand;
            data['region'] = drupalSettings.region;
            data['market'] = drupalSettings.market;
            data['locale'] = drupalSettings.locale;

            // Get cookie consent values.
            var targetCookieArr = [];
            var functionalCookieArr = [];
            var consentCookie = Cookies.get("OptanonConsent");

            // Onetrust cookie.
            if (consentCookie !== undefined) {
              consentCookieArr = consentCookie.split('&');
              $.each(consentCookieArr, (index, item) => {
                itemArr = item.split('=');
                if (itemArr[0] == 'groups') {
                  itemCatArr = itemArr[1].split(',');

                  // Tergeting cookie.
                  if (itemCatArr[3] !== undefined) {
                    targetCookieArr = itemCatArr[3].split(':');
                  }
                  // Functional Cookie.
                  if (itemCatArr[2] !== undefined) {
                    functionalCookieArr = itemCatArr[2].split(':');
                  }
                }
              });
            }

            // Check functional & Targeting cookie consent.
            if (functionalCookieArr[0] == 3 && functionalCookieArr[1] == 1) {
              // Set TD signed mode.
              td.setSignedMode();
              // Set domain cookie.
              td.fetchServerCookie();

              // Get td client id.
              var tdClientId = Cookies.get("_td");
              data['td_client_id'] = tdClientId;

              // Set global id.
              td.set("$global", "td_global_id", "td_global_id");
            }
            else if (targetCookieArr[0] == 4 && targetCookieArr[1] == 1) {
              // Set TD signed mode.
              td.setSignedMode();
              // Remove _td_domain_<domain> cookie.
              removeTdDomainCookie();

              // Get td client id.
              var tdClientId = Cookies.get("_td");
              data['td_client_id'] = tdClientId;

              // Set global id.
              td.set("$global", "td_global_id", "td_global_id");
            }
            else {
              // Set TD anonymous mode.
              td.setAnonymousMode();
              // Remove _td_domain_<domain> cookie.
              removeTdDomainCookie();
            }

            // Send data.
            td.addRecord(drupalSettings.td_js_sdk_table, data);
          }
          else {
            // Log error.
            console.log('No TD configuration.');
          }
        }

        // Add little delay to form submit.
        setTimeout(function () {
          // Submit the form.
          $('.' + formClass).submit();
        }, 1000);
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
