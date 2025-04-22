/**
 * @file
 * Attaches language switcher if there is English only.
 */

 (function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.sbd_language_switch = {
      attach: function (context, settings) {
        var country_default = drupalSettings.sbd_language_switch.default_country.toUpperCase();
        var lang_default = drupalSettings.sbd_language_switch.default_lang.toUpperCase();
        var all_location_page_link = drupalSettings.sbd_language_switch.all_location_page_option;
        var isCoreMds2024 = drupalSettings.isCoreMds2024;
        if (drupalSettings.sbd_language_switch.is_in_language_enabled != undefined) {
          var is_in_language_enabled = drupalSettings.sbd_language_switch.is_in_language_enabled;
          var in_language_support_text = drupalSettings.sbd_language_switch.in_language_support_text;
          var in_language_support_target = drupalSettings.sbd_language_switch.in_language_support_target;
          var in_language_support_link = drupalSettings.sbd_language_switch.in_language_support_link;
          var in_language_support_icon = drupalSettings.sbd_language_switch.in_language_support_icon;
        } else {
          var is_in_language_enabled = 0;
        }
        if (is_in_language_enabled == 0) {
          if(!$('div#block-languageswitcher').length) {
              var htmlx = '<div class="language-switcher-language-url settings-tray-editable" id="block-languageswitcher" data-drupal-settingstray="editable">';
              if (isCoreMds2024) {
                htmlx += '<nav id="langnav" role="navigation" aria-label="Language menu">';
              }
              else {
                htmlx += '<nav id="lnav" role="navigation" aria-label="Language menu">';
              }
              htmlx += '<ul class="lang-nav">';
              if (!isCoreMds2024) {
                if (all_location_page_link) {
                  var firstChar = all_location_page_link.substr(0, 1);
                  if (firstChar == '/') {
                    htmlx += '<li><a href="' + all_location_page_link + '"><span> ' + country_default + ' | ' + lang_default + ' </span></a></li>';
                  }
                  else {
                    htmlx += '<li><a href="/' + all_location_page_link + '"><span> ' + country_default + ' | ' + lang_default + ' </span></a></li>';
                  }
                }
                else {
                  htmlx += '<li><span> ' + country_default + ' | ' + lang_default + ' </span></li>';
                }
              }
              else {
                htmlx += '<li class="single-lang"><a href="' + all_location_page_link + '"><span class="globe-icon"></span><span class="mobile">' + country_default + ' | ' + lang_default + '</span></a></li>';
              }
              htmlx += '</ul></nav></div>';
              $( ".language-switcher div.coh-block" ).append( '' );
              $( ".language-switcher div.coh-block" ).append( htmlx );
          }
        } else {
          if (!$('div#block-languageswitcher').length) {
            var htmlx = '<div class="language-switcher-language-url settings-tray-editable" id="block-languageswitcher" data-drupal-settingstray="editable">';
            if (isCoreMds2024) {
              htmlx += '<nav id="langnav" role="navigation" aria-label="Language menu">';
            }
            else {
              htmlx += '<nav id="lnav" role="navigation" aria-label="Language menu">';
            }
            if (!isCoreMds2024) {
              htmlx += '<ul class="lang-nav"><li>';
            } else {
              htmlx += '<ul class="lang-nav">';
            }
            if (!isCoreMds2024) {
              if (all_location_page_link) {
                var firstChar = all_location_page_link.substr(0, 1);
                if (firstChar == '/') {
                  htmlx += '<a href="' + all_location_page_link + '"><span> ' + country_default + ' | ' + lang_default + ' </span></a>';
                  htmlx += '<button id="lang-nav-dropdown-button" class="coh-menu-item-button js-coh-menu-item-button mobile-submenu-toggle" type="button" aria-label="Open language switcher" aria-haspopup="true" aria-expanded="false"></button>';
                }
                else {
                  htmlx += '<a href="/' + all_location_page_link + '"><span> ' + country_default + ' | ' + lang_default + ' </span></a>';
                  htmlx += '<button id="lang-nav-dropdown-button" class="coh-menu-item-button js-coh-menu-item-button mobile-submenu-toggle" type="button" aria-label="Open language switcher" aria-haspopup="true" aria-expanded="false"></button>';
                }
              }
              else {
                htmlx += '<span> ' + country_default + ' | ' + lang_default + ' </span>';
                htmlx += '<button id="lang-nav-dropdown-button" class="coh-menu-item-button js-coh-menu-item-button mobile-submenu-toggle" type="button" aria-label="Open language switcher" aria-haspopup="true" aria-expanded="false"></button>';
              }
              // htmlx += '<a href="' + all_location_page_link + '"><span class="globe-icon"></span><span class="mobile">' + country_default + ' | ' + lang_default + '</span></a>';
            }
            else {
              htmlx += '<li class="single-lang"><a href="' + all_location_page_link + '"><span class="globe-icon"></span><span class="mobile">' + country_default + ' | ' + lang_default + '</span></a>';
            }
            htmlx += '<ul>';
            if (all_location_page_link) {
              htmlx += '<li class="all-location"><a href="' + all_location_page_link + '"><span class="">' + Drupal.t('View all Locations') + '</span></a></li>';
            }
            htmlx += '<li class="in-language-menu"><a href="' + in_language_support_link + '" ' + in_language_support_target + '><span class="mobile">' + Drupal.t(in_language_support_text) + '</span><i class="material-symbols-outlined" aria-hidden="true"> ' + in_language_support_icon + ' </i></a></li></ul>';
            if (!isCoreMds2024) {
              htmlx += '</li></ul></li></ul></nav></div>';
            } else {
              htmlx += '</li></ul></nav></div>';
            }
            
            $(".language-switcher div.coh-block").append('');
            $(".language-switcher div.coh-block").append(htmlx);
          }
        }

        //language selector
        $('#lnav', context).once('lnav-init').each(function () {
          var $this = $(this);
          
            function handleLangNavToggle() {
              var touchHandled = false;
              var windowWidth = $(window).width();
              
              if (windowWidth <= 1024) {
                $this.removeClass('open').find('ul ul').css('visibility', 'hidden');

                $('#lang-nav-dropdown-button').on('click touchstart', function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Toggle open class on the #lnav when #lang-nav-dropdown-button is clicked/tapped
                  if (!$this.hasClass('open')) {
                    $this.addClass('open').find('ul').css('visibility', 'visible');
                  } else {
                    $this.removeClass('open').find('ul ul').css('visibility', 'hidden');
                  }
          
                  // Prevent multiple event triggers after the touchstart or click
                  touchHandled = true;
                });
          
                // Prevent click event from triggering if touchstart was already handled
                $('#lang-nav-dropdown-button').on('click', function(e) {
                  if (touchHandled) {
                    e.preventDefault();
                    touchHandled = false;
                  }
                });
              } else {
                // Remove any event listeners if window width is greater than 1024px
                $('#lang-nav-dropdown-button').off('click touchstart');
              }
            }
          
            // Call the function on page load
            if (!isCoreMds2024) {
              handleLangNavToggle();
            }
          
            // Listen for window resize events and call the function again
            let resizeTimeout;

            $(window).resize(function() {
              if (!isCoreMds2024) {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function() {
                  handleLangNavToggle();
                }, 200);
              }
            });

          // Desktop-specific functionality (width >= 1024px)
          $(this).on('mouseenter mouseleave focusin focusout', function (e) {
            var windowWidth = $(window).width();

            if (windowWidth >= 1024) {
              $this.removeClass('open').find('ul ul').css('visibility', 'hidden');

              if ((!$this.hasClass('open') && e.type === 'mouseenter') || (!$this.hasClass('open') && e.type === 'focusin')) {
                $this
                  .addClass('open')
                  .find('ul').css('visibility', 'visible');;
              } else {
                if (e.type === 'mouseleave') {
                  $this
                    .removeClass('open')
                    .find('ul ul').css('visibility', 'hidden');;
                }

                if (e.type === 'focusout' && !$this.find(e.relatedTarget).length) {
                  $this
                    .removeClass('open')
                    .find('ul ul').css('visibility', 'hidden');;
                }
              }
            }
          });
        });

        $("[id ^= 'edit-duplo-language-permission']").click(function(){
          if ($(this).attr('value') == 'authenticated' && $(this).is(':checked')) {
            $(this).parent().siblings().find('input:checkbox').not("input:not([value='anonymous']").prop('checked', true);
          } else if ($(this).attr('value') == 'authenticated' && (!$(this).is(':checked'))) {
            $(this).parent().siblings().find('input:checkbox').not("input:not([value='anonymous']").prop('checked', false);
          }
        });

        // Clear time value if date is blank value.
        $("#edit-publish-on-0-value-date").change(function(){
          var pickDate = $(this).val();
          if(!pickDate) {
            $("#edit-publish-on-0-value-time").val('');
          }
        });

        $("#edit-unpublish-on-0-value-date").change(function(){
          var pickDate = $(this).val();
          if(!pickDate) {
            $("#edit-unpublish-on-0-value-time").val('');
          }
        });
      }
    }
  })(jQuery, Drupal, drupalSettings);
