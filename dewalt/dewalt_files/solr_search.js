/**
 * @file
 * Expands the behaviour of the search.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';
  var recentSearchVisibility = drupalSettings.sbd_acquia_solr_search.recent_search_visibility;
  var languageId = drupalSettings.sbd_acquia_solr_search.language_id;

  // Cache DOM elements
  const mainSearchField = $('#edit-search');
  const quickLinksMenu = $('#quick_links_menu');
  const recentSearchMenu = $('#recent_search');
  const featuredCategories = $('#featured-categories-outer-div');
  const featuredProducts = $('#featured-products-outer-div');
  const featuredSystem = $('#featured-system-outer');
  const featuredArticles = $('#featured-articles-wrapper');
  const featuredWrapper = $('.featured-search-wrapper');
  const mainSearchIcon = document.querySelectorAll(".edit-search-icon");

  Drupal.behaviors.quicklinks = {
    attach: function (context) {
      // Check if id exists.
      if ($('#edit-search').length) {
        // Remove search form attribute.
        mainSearchField.removeAttr("data-msg-maxlength");
        mainSearchField.removeAttr("maxlength");
        var val = $('#edit-search').val();
        $("#edit-search").val($("<div>").html(val).text());
      }

      // Trigger search icon for MDS 2024 package.
      if (drupalSettings.isCoreMds2024) {
        var featuredSytemNav = featuredSystem.find('.navbar-nav').length;
        mainSearchIcon.forEach((icon) => {
          $(icon).once().on("click", () => {
            setTimeout(function () {
              if (!$('.header-main').hasClass('search-visible')) {
                $('.header-main-search').focusout();
                $('body').removeClass('search-active');
              }
              else {
                $('#block-exposedformacquia-search-solrpage').show();
                mainSearchField.focus();
              }
            }, 10);

            $('body').removeClass('mobile-nav-open');

            // Show the cursor after the text in the search text box.
            var inputField = $('.form-type-search-api-autocomplete .form-autocomplete')[0];
            if(inputField) {
              inputField.selectionStart = inputField.selectionEnd = inputField.value.length;
              inputField.focus();
            }
          });
        });

        $("#edit-search").autocomplete({
          position: { my: "right+24 top", at: "right bottom" }
        });

        if (mainSearchField.val() && mainSearchField.val().length > 0) {
          $('.header-main-search form .form-actions').addClass('enabled');
        }
        var search_title = $(".header-main-search a").attr("title");
        $(".header-main-search a").attr("title", Drupal.t(search_title));
      }

      // On focus expand the quick links div by removing class.
      mainSearchField.once().focus(function (e) {
        if (drupalSettings.isCoreMds2024) {
          var searchKey = localStorage.getItem('searchKey');
        }
        $(this).parents().addClass('is-active');
        var x = $(this).parents().position();
        var formHeight = $(this).parents('form').height();
        var formWidth = $(this).parents('form').width();
        var quickLinkPos = x.top + formHeight + 10;
        $(".search-close-button").show();
        $('body').addClass('search-active');
        if (!drupalSettings.isCoreMds2024) {

          quickLinksMenu.css('top', quickLinkPos);
          quickLinksMenu.css('position', 'absolute');
          quickLinksMenu.css('width', formWidth);
        }
        if (!mainSearchField.val()) {
          quickLinksMenu.removeClass('hidden');
          featuredCategories.removeClass('hidden');
          featuredProducts.removeClass('hidden');
          featuredArticles.removeClass('hidden');
          if (!drupalSettings.isCoreMds2024) {
            featuredSystem.removeClass('hidden');
          }
          else if (drupalSettings.isCoreMds2024 && featuredSytemNav) {
            featuredSystem.removeClass('hidden');
          }
          featuredWrapper.removeClass('hidden');
          if (searchKey != null && searchKey.length != 0) {
            recentSearchMenu.removeClass('hidden');
          }
        }
      });

      $('.header-main-search').once().focusout(function (e) {
        setTimeout(function () {
          if (!$('.header-main-search').find(':focus').length) {
            quickLinksMenu.addClass('hidden');
            featuredCategories.addClass('hidden');
            featuredProducts.addClass('hidden');
            featuredSystem.addClass('hidden');
            featuredWrapper.addClass('hidden');
            if (searchKey != null && searchKey.length != 0) {
              recentSearchMenu.addClass('hidden');
            }
            $('body').removeClass('search-active');

            $('.search-close-button').each(function () {
              $(this).parents().removeClass('is-active');
              $(this).hide();
            });
            if (drupalSettings.isCoreMds2024) {
              $('#block-exposedformacquia-search-solrpage').hide();
              $('.header-main').removeClass('search-visible');
            }
          }
        }, 10);
      });

      // Close button feature
      $(".search-close-button").once().on((drupalSettings.isCoreMds2024 ? 'mousedown' : 'click'), function(e){
        $('#edit-search').attr('value', '');
        if (!drupalSettings.isCoreMds2024) {
          $(this).parents().removeClass('is-active');
          $(this).hide();
          quickLinksMenu.addClass('hidden');
          featuredCategories.addClass('hidden');
          featuredProducts.addClass('hidden');
          featuredSystem.addClass('hidden');
          featuredWrapper.addClass('hidden');
          if (searchKey != null && searchKey.length != 0) {
            recentSearchMenu.addClass('hidden');
          }
          $('body').removeClass('search-active');
        }
        else if (drupalSettings.isCoreMds2024) {
          setTimeout(function () {
            quickLinksMenu.removeClass('hidden');
            featuredCategories.removeClass('hidden');
            featuredProducts.removeClass('hidden');
            featuredArticles.removeClass('hidden');
            if (featuredSytemNav) {
              featuredSystem.removeClass('hidden');
            }
            featuredWrapper.removeClass('hidden');
            if (searchKey != null && searchKey.length != 0) {
              recentSearchMenu.removeClass('hidden');
            }
            mainSearchField.focus();
          }, 10);
        }
      });

      // On Keyup the quick links should be hidden.
      mainSearchField.keyup(function (e) {
        if (drupalSettings.isCoreMds2024) {
          var searchKey = localStorage.getItem('searchKey');
          const searchInput = $('.header-main-search form .form-actions');
          if (mainSearchField.val().length > 0) {
            searchInput.addClass('enabled');
          }
          else {
            searchInput.removeClass('enabled');
          }
        }
        // Remove whitespace.
        var searchInput = $.trim(mainSearchField.val());
        // Quick links hide and show.
        if (mainSearchField.val().length > 0) {
          if (!quickLinksMenu.hasClass("hidden")) {
            quickLinksMenu.addClass('hidden');
          }
          if (!featuredCategories.hasClass("hidden")) {
            featuredCategories.addClass('hidden');
          }
          if (!featuredProducts.hasClass("hidden")) {
            featuredProducts.addClass('hidden');
          }
          if (!featuredSystem.hasClass("hidden")) {
            featuredSystem.addClass('hidden');
          }
          if (!featuredWrapper.hasClass("hidden")) {
            featuredWrapper.addClass('hidden');
          }
          if (searchKey != null && searchKey.length != 0) {
            if (!recentSearchMenu.hasClass("hidden")) {
              recentSearchMenu.addClass('hidden');
            }
          }
        }
        else if (mainSearchField.val().length === 0) {
          quickLinksMenu.removeClass('hidden');
          featuredCategories.removeClass('hidden');
          featuredProducts.removeClass('hidden');
          if (!drupalSettings.isCoreMds2024) {
            featuredSystem.removeClass('hidden');
          }
          else if (drupalSettings.isCoreMds2024 && featuredSytemNav) {
            featuredSystem.removeClass('hidden');
          }
          featuredWrapper.removeClass('hidden');
          if (searchKey != null && searchKey.length != 0) {
            recentSearchMenu.removeClass('hidden');
          }
        }
      });
      // Core 2024 package support for search result page.
      if (drupalSettings.isCoreMds2024) {
        // Handled filters header if there is no search result for Article and Pages tab.
        var productGridWrapper = $('.product-grid-wrapper-header');
        if (productGridWrapper.length > 0 && !productGridWrapper.children().length) {
          productGridWrapper.css('border', 'unset');
        }

        // Handled filters header if there is no search result for Products tab.
        if ($('body.path-search #product-filters .facet-').children().hasClass('facet-empty')) {
          $('.mobile-filters-header,.mobile-filters-toggle').hide();
          $('.product-grid-wrapper-header').css('border', 'unset');
        }
      }
    }
  };
  $(document).on('cv-jquery-validate-options-update', function (event, options) {
    options.errorElement = 'strong';
    options.errorPlacement = function (error, element) {
      if (element[0].type == 'radio') {
        error.appendTo(element.parent().parent().parent());
      } else {
        error.appendTo(element.parent());
      }
    };
  });

  // Add custom class for specific auto suggestion li element like Suggested Products or Articles.
  // MutationObserver supports all modern browser.
  const domObserver = new MutationObserver(() => {
    var getDivClass = $(".sbd-autocomplete-suggestion");
    if (getDivClass[0]) {
      getDivClass.parent().parent().addClass('unique-li-heading');
    }
    var getSkuClass = $(".suggested-sku");
    if (getSkuClass[0]) {
      getSkuClass.parent().parent().addClass('suggested-sku-li');
      $(".suggested-sku").each(function() {
        var url = $(this).attr('data-url');
        $(this).parent().attr("href", url);
      });
    }
    // Show recent search html below search text box if it's available.
    if (searchKey != null && searchKey.length != 0) {
      if ($('.search-api-autocomplete-search li.ui-menu-item').length > 0) {
        var recentSearchDiv = buildRecentSearchSuggestion();
        $(".search-api-autocomplete-search li.ui-menu-item:first-child").once().after(recentSearchDiv);
      }
    }

    $('.search-api-autocomplete-suggestion').each(function(){
      var attr = $(this).attr('data-url');
      if (typeof attr !== 'undefined' && attr !== false) {
        $(this).parent().attr("href", attr);
      }
    });

  });

  domObserver.observe(document, { childList: true, subtree: true });


  // Check recent search value present in localstorage.
  var searchKey = localStorage.getItem('searchKey');
  if (searchKey != null && searchKey.length != 0) {
    buildRecentSearch();
  }

  $("[id^=edit-submit-acquia-search-solr]").click(function (e) {
    var searchVal = $('#edit-search').val().trim();
    if (searchVal != '') {
      var escapedInputText = Drupal.checkPlain(searchVal);
      $('#edit-search').val(escapedInputText);
    } else {
      e.preventDefault();
    }
  });

  // Add recent search values to localstorage on form subnit.
  $("#views-exposed-form-acquia-search-solr-page").once().submit(function (e) {
    var searchVal = $('#edit-search').val().trim().toLowerCase();
    if (!searchVal || searchVal == '') {
      // For blank searh add space in value.
      $('#edit-search').val(" ");
    }
    if (searchVal.charAt(0) == '-') {
      // Remove 1st char if hypen.
      var cleanSearchVal = searchVal.replace(/^-/, '');
      $('#edit-search').val(cleanSearchVal);
    }
    if (searchVal != '') {
      var searchKey = localStorage.getItem('searchKey');
      if (searchKey != null && searchKey.length != 0) {
        var value = JSON.parse(searchKey);
        if ($.inArray(searchVal, value) === -1) {
          value.unshift(searchVal);
          value = value.slice(0, 3);
          localStorage.setItem('searchKey', JSON.stringify(value));
        }
      }
      else {
        var myarray = [];
        myarray.push(searchVal);
        localStorage.setItem('searchKey', JSON.stringify(myarray));
      }
    }
  });

  // On click of recent search values do form submit.
  $('body').on('click', '.recSearKey', function (e) {
    if (drupalSettings.isCoreMds2024) {
      e.preventDefault();
      $('#edit-search').focus();
    }
    var text = $(this).text().trim();
    $('#edit-search').val(text);
    $('#views-exposed-form-acquia-search-solr-page').submit();
  });

  // Show recent search below search text box on focusout.
  function buildRecentSearch() {
    var searchKey = localStorage.getItem('searchKey');
    var value = JSON.parse(searchKey);
    var htmlText = '';
    if (recentSearchVisibility == 2) {
      htmlText += `<span class="quick-links-h4">` + (drupalSettings.isCoreMds2024 ?  Drupal.t("Recent Searches") : Drupal.t("My Recent Searches")) + `</span>`;
    }
    else {
      htmlText += `<span class="quick-links-h4">` + Drupal.t("Recent Searches") + `</span>`;
    }
    if (typeof value !== 'undefined' && value.length > 0 && recentSearchVisibility == 2) {
      htmlText += `<span class="recent-search-delete">
        <button class="recent-delete-btn delete-btn-submit" type="button">` + Drupal.t("Clear All") + `</button>
      </span>`;
    }

    if (drupalSettings.isCoreMds2024 && recentSearchVisibility == 2) {
      htmlText += `<ul class="navbar-nav custom-menu-quick-links-on-search clear-enabled">`;
    }
    else {
      htmlText += `<ul class="navbar-nav custom-menu-quick-links-on-search">`;
    }

    if (typeof value !== 'undefined' && value.length > 0) {
      // the array is defined and has at least one element
      $.each(value, function (index, data) {
        htmlText += `<li class="nav-item custom-menu-quick-links-on-search">
        <a href="javascript:void(0);" class="recSearKey" rel="noopener">` + data + `</a>`;
        if (recentSearchVisibility == 2) {
          htmlText += `<a href="javascript:void(0);" class="recSearchClear" rel="noopener" fromFunc="buildRecent" dataVal="` + data + `"></a>`;
        }
        htmlText += `</li>`;
      });
    }
    // else {
    //   if (recentSearchVisibility == 2) {
    //     htmlText += `<li class="nav-item custom-menu-quick-links-on-search">` + Drupal.t("There is no search history") + `</li>`;
    //   }
    // }
    htmlText += '</ul>';
    if (drupalSettings.isCoreMds2024) {
      $('#edit-search').focus();
      if (!value.length > 0 && recentSearchVisibility == 2) {
        htmlText = '';
        $('#recent_search').addClass('hidden');
        localStorage.removeItem('searchKey')
      }
    }
    $("#recent_search").html('');
    $("#recent_search").append(htmlText);
  }

  // Show recent search below search text box in auto suggestion popup.
  function buildRecentSearchSuggestion() {
    var htmlText = '';
    var searchKey = localStorage.getItem('searchKey');
    if (searchKey != null && searchKey.length != 0 && !drupalSettings.isCoreMds2024) {
      var value = JSON.parse(searchKey);
      htmlText += `<li class="unique-li-heading ui-menu-item">
        <a tabindex="-1" class="ui-menu-item-wrapper">
        <div class= "search-api-autocomplete-suggestion recent-search-div">`;
      if (recentSearchVisibility == 2) {
        htmlText += `<span>` + Drupal.t("My Recent Searches") + `</span>`;
      }
      else {
        htmlText += `<span>` + Drupal.t("Recent Searches") + `</span>`;
      }
      htmlText += `</div></a></li>`;
      if (typeof value !== 'undefined' && value.length > 0 && recentSearchVisibility == 2) {
        htmlText += `<li class="ui-menu-item recent-search-delete"><span>
          <button class="recent-delete-btn delete-btn-submit" type="button">` + Drupal.t("Clear All") + `</button>
        </span></li>`;
      }
      if (typeof value !== 'undefined' && value.length > 0) {
        $.each(value, function (index, data) {
          htmlText += `<li class="ui-menu-item recent-search-item">
            <a href="javascript:void(0);" class="recSearKey ui-menu-item-wrapper" tabindex="-1">
            <div class="search-api-autocomplete-suggestion">
              <span>` + data + `</span>
            </div>
            </a>`;
          if (recentSearchVisibility == 2) {
            htmlText += `<a href="javascript:void(0);" class="recSearchClear ui-menu-item-wrapper" fromFunc="recentSearchSuggestion" dataVal="` + data + `" tabindex="-2"></a>`;
          }
          htmlText += `</li>`;
        });
      }
      else {
        if (recentSearchVisibility == 2) {
          jQuery('.recent-search-div').parent().parent().hide();
          //htmlText += `<li class="ui-menu-item">` + Drupal.t("There is no search history") + `</li>`;
        }
      }

    }
    return htmlText;
  }

  // Delete all recent searches.
  $('body').on((drupalSettings.isCoreMds2024 ? 'mousedown' : 'click'), '.delete-btn-submit', function (e) {
    if (drupalSettings.isCoreMds2024) {
      e.preventDefault();
    }
    var searchKey = localStorage.getItem('searchKey');
    var value = JSON.parse(searchKey);
    value.splice(0, searchKey.length);
    localStorage.setItem('searchKey', JSON.stringify(value));
    if ($('.search-api-autocomplete-search li.recent-search-item').length > 0) {
      var htmlText = buildRecentSearchSuggestion();
      $(".search-api-autocomplete-search li.ui-menu-item").slice(1,3).remove();
      $(".search-api-autocomplete-search li.recent-search-item").remove();
      $(htmlText).once().insertAfter(".search-api-autocomplete-search li.ui-menu-item:first-child");
    }
    buildRecentSearch();
  });

  // Delete single recent search.
  $('body').on((drupalSettings.isCoreMds2024 ? 'mousedown' : 'click'), '.recSearchClear', function (e) {
    if (drupalSettings.isCoreMds2024) {
      e.preventDefault();
    }
    var text = $(this).attr("dataVal");
    var fromFunc = $(this).attr("fromFunc");
    var searchKey = localStorage.getItem('searchKey');
    var value = JSON.parse(searchKey);
    const index = value.indexOf(text);
    if (index > -1) {
      value.splice(index, 1);
      localStorage.setItem('searchKey', JSON.stringify(value));
    }
    if (fromFunc == "recentSearchSuggestion") {
      var liElement = $(this).closest("li");
      liElement.remove();
      if ($('.search-api-autocomplete-search li.recent-search-item').length == 0) {
        var htmlText = buildRecentSearchSuggestion();
        $(".search-api-autocomplete-search li.ui-menu-item").slice(1, 3).remove();
        $(htmlText).once().insertAfter(".search-api-autocomplete-search li.ui-menu-item:first-child");
      }
    }
    buildRecentSearch();
  });

  $('body').on('keydown', function (e) {
    var key = e.which;
    var searchUrl = '';
    if (key == '91' || key == '17') {
      e.preventDefault();
      $('.ui-menu-item-wrapper').on('click', function (event) {
        if (!$(this).hasClass('recSearKey')) {
          event.stopImmediatePropagation();
          var url = $(this).attr('href');
          $(this).attr('href', "javascript:void(0)");
          $(this).attr('href', url);
        }
      });
      $('.recSearKey').on('click', function (event) {
        event.stopImmediatePropagation();
        var text = $(this).text().trim();
          if (languageId != '') {
            searchUrl = '/' + languageId + '/searchlanding?search=' + text;
          }
          else {
            searchUrl = '/searchlanding?search=' + text;
          }
          window.open(searchUrl);
      });
    }
  });

})(jQuery, Drupal, drupalSettings);
