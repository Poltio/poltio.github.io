/**
 * @file
 * Attaches navigation menu.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.sbd_navigation = {
    attach: function (context, settings) {
      var isCoreMds2024 = drupalSettings.isCoreMds2024;

      //language selector
      $('#lnav', context).once('lnav-init').each(function () {
        var $this = $(this);

        // Define the function that handles the toggle functionality
        function handleLangNavToggle() {
            // Only apply mobile functionality if the window width is <= 1024px
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

      //mobile user menu
      $('.mobile-user-account-dropdown', context).once('mobile-user-account-dropdown-init').each(function () {
        var $this = $(this);

        $('html').click(function (e) {
          if (!$(e.target).hasClass('mobile-user-account') && $this.hasClass('open')) {
            $this.removeClass('open');
          }
        });
      });

      //code to add focus back to clicked button after modal close.
      var previousElement = null;
      $(".coh-style-button-action[data-modal-open]").on("click", function() {
        previousElement = $(this);
      });
      $('.coh-modal-close-button').on("click", function () {
        $(previousElement).focus();
      });

      //user menu
      $('.usr-dropdown', context).once('usr-dropdown-init').each(function () {
        $(this).on('mouseenter mouseleave focusin focusout', function (e) {
          var $this = $(this);
          if ($(window).width() >= 1024) {
            if ((!$this.hasClass('open') && e.type === 'mouseenter') || (!$this.hasClass('open') && e.type === 'focusin')) {
              $this
                .addClass('open')
                .find('#user-nav-menu').show();
            } else {
              if (e.type === 'mouseleave') {
                $this
                  .removeClass('open')
                  .find('#user-nav-menu').hide();
              }

              if (e.type === 'focusout' && !$this.find(e.relatedTarget).length) {
                $this
                  .removeClass('open')
                  .find('#user-nav-menu').hide();
              }
            }
          }
        });
      });

      //header nav
      $('.header-nav', context).once('header-nav-init').each(function () {
        var $this = $(this);

        $this.find('.coh-menu-list-item.has-children > a').click(function () {
          if ($(window).width() < 1024) {
            $this.animate({scrollTop: 0}, 300);
          }
        });
      });

      //primary navigation
      $('.header-nav-primary', context).once('header-nav-primary-init').each(function () {
        var $this = $(this);

        if (settings.isCoreMds2024) {
          var level_3_ordered_list = $this.find('li.level-2-menu-item .level-2-sub-menu ul.coh-unordered-list');
          level_3_ordered_list.each(function(index){
            // Wrap second column of L3 in ul.
            var upperRangeMenu = $(this).children("li.level-3-upper-range-items");
            if(upperRangeMenu.length>0) {
              var ulelement = '<ul class="coh-menu-list-container coh-unordered-list divided-section-level-2">';
              $(upperRangeMenu).each(function() {
                ulelement+= this.outerHTML;
              });
              ulelement+= '</ul>';
              $(ulelement).insertAfter($(this));
            }

            // Wrap third column of L3 in ul.
            var upperRangeL3 = $(this).children("li.level-4-upper-range-items");
            if (upperRangeL3.length > 0) {
              var ulelementL3 = '<ul class="coh-menu-list-container coh-unordered-list divided-section-level-3">';
              $(upperRangeL3).each(function() {
                ulelementL3+= this.outerHTML;
              });
              ulelementL3+= '</ul>';
              $(ulelementL3).insertAfter($(this).siblings('.divided-section-level-2'));
            }
          });
        }

        // Make no-link spans with children focusable
        $this.find('li.has-children span').attr('tabIndex', 0).removeAttr('role');

        // Setting aria-controls and aria-labels on all submenu toggle buttons
        $('li.has-children').each(function(){
          var linkText = $(this).find('> a, > span').text().trim();
          $(this).find('button.mobile-submenu-toggle').attr('aria-controls', linkText).attr('aria-label', 'Toggle submenu for link ' + linkText);
        });

        //open sub menu
        function openSubMenu($this) {
          $this.addClass('open');

          if ($this.hasClass('level-1-menu-item')) {
            $this
              .attr('data-menu-levels-shown', 1)
              .children('.sub-menu').stop(true, true).slideDown(200);
          } else {
            var levelsToShow = $this.hasClass('level-3-menu-item') ? 3 : 2;
            if ($this.hasClass('level-2-menu-item') && $this.find('.level-3-sub-menu.open').length) {
              levelsToShow = 3;
            }

            // When L3 menu is divided into three columns.
            if (settings.isCoreMds2024 && $this.find('.sub-menu-inner .coh-unordered-list.divided-section-level-3').length) {
              levelsToShow = 4;
            }
            // When L3 menu is divided into two columns.
            else if (settings.isCoreMds2024 && $this.find('.sub-menu-inner .coh-unordered-list.divided-section-level-2').length) {
              levelsToShow = 3;
            }

            $this.parents('.level-1-menu-item').attr('data-menu-levels-shown', levelsToShow);


            $this.children('.sub-menu').addClass('open');

            var has_cta;
            if ($this.hasClass('level-3-menu-item')) {
              has_cta = $this.parents('.level-2-menu-item').find('.sub-menu-cta').length;
            } else {
              has_cta = $this.find('.sub-menu-cta').length;
            }

            $this.parents('.level-1-menu-item').attr('data-has-cta', Boolean(has_cta));
          }
        }

        //close sub menu
        function closeSubMenu($this) {
          $this.removeClass('open');

          if ($this.hasClass('level-1-menu-item')) {
            $this
              .attr('data-menu-levels-shown', 0)
              .children('.sub-menu').stop(true, true).hide();
          } else {
            var levelsToShow = $this.hasClass('level-3-menu-item') ? 2 : 1;
            $this
              .parents('.level-1-menu-item').attr('data-menu-levels-shown', levelsToShow);

            $this.children('.sub-menu').removeClass('open');
          }
        }

        $(window).on('load resize', function () {
          if ($(window).width() >= 1023) {
            $('.header-nav-primary .level-1-sub-menu').hide();
          } else {
            $('.header-nav-primary .level-1-sub-menu').show();
            $('.header-nav-primary .sub-menu').css({height: ''});
          }
        });

        //bind hover or focus
        $this.find('.coh-menu-list-item.has-children').each(function () {
          var $this = $(this);

          $this.on('click', function (e) {
            if ($(window).width() < 1024) {
              if ($(".level-2-menu-item").hasClass('is-expanded')) {
                $(".header-nav").addClass("submenu-open");
              } else {
                $(".header-nav").removeClass("submenu-open");
              }
            }
          });

          $this.on('mouseenter mouseleave focusin focusout', function (e) {
            var $this = $(this);

            if ($(window).width() >= 1023) {
              //match height of sub menus
              if (($this.hasClass('level-1-menu-item') && e.type === 'mouseenter') || ($this.hasClass('level-1-menu-item') && e.type === 'focusin')) {
                if (!$this.hasClass('open')) {
                  var matchHeight = 0;

                  $this.find('.level-1-sub-menu').show();

                  $this.find('.sub-menu').each(function () {
                    var $this = $(this);
                    var previousCss = $this.attr('style');
                    var height;

                    if (!settings.isCoreMds2024) {
                      $this.css({position: 'static', visibility: 'hidden', display: 'block', height: 'auto', minHeight: 0});
                    }
                    height = $this.outerHeight();
                    matchHeight = height > matchHeight ? height : matchHeight;
                    $this.attr('style', previousCss ? previousCss : '');
                  });

                  $this.find('.level-1-sub-menu').hide();

                  $this.find('.sub-menu').each(function () {
                    $(this).css('height', matchHeight);
                  });
                }
              }

              //open or close sub menus
              if ((!$this.hasClass('open') && e.type === 'mouseenter') || (!$this.hasClass('open') && e.type === 'focusin')) {
                openSubMenu($this);
              } else {
                if (e.type === 'mouseleave' && !$('.sub-menu-cta:hover').length) {
                  closeSubMenu($this);
                }

                if (e.type === 'focusout' && !$this.find(e.relatedTarget).length) {
                  closeSubMenu($this);
                }
              }
            }
          });
        });
      });
      $('main', context).once('mei_library_turn').each(function () {
        var closeElem = document.getElementById('externalRedirectionPopup').querySelectorAll('.coh-modal-close-button');
        document.getElementById("externalPopupRedirectionGoback")
          .addEventListener("click", (event) => {
            closeElem[0].click();
          });
        document.getElementById("externalPopupRedirectionContinue")
          .addEventListener("click", (event) => {
            closeElem[0].click();
          });

        var elements = document.getElementsByClassName("js-coh-menu-item-link");
        for (let i = 0; i < elements.length; i++) {
          var redflag = checkingExternalPopup(elements[i]);
          if (redflag == true) {
            elements[i].setAttribute('data-modal-open', "externalRedirectionPopup");
            var url = elements[i].getAttribute("href");
            elements[i].setAttribute('website-link', url);
            elements[i].removeAttribute('href');
            elements[i].style.cursor='pointer';
            elements[i].addEventListener("click", (event) => {
              openExternalPopup(elements[i].getAttribute("website-link"));
            });
            elements[i].addEventListener("keydown", (event) => {
              if (event.keyCode === 13) {
                elements[i].setAttribute('href', "javascript:void(0)");
                openExternalPopup(elements[i].getAttribute("website-link"));
              }
            });
          }
        }
        function checkingExternalPopup(elem) {
          var extAttr = elem.parentElement.getAttribute("data-link-external");
          var popAttr = elem.parentElement.getAttribute("data-popup-enabled");
          if (popAttr == '1' && extAttr == '1') {
            return true;
          }
          else {
            return false;
          }
        }
        function openExternalPopup(exref) {
          document.getElementById("externalPopupRedirectionContinue").setAttribute('href', exref);
        }
      });
    }
  };
})(jQuery);
