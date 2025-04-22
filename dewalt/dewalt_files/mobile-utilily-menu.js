/**
 * @file
 * Mobile utility menu behaviour.
 */
(function ($, Drupal) {

  Drupal.behaviors.sbdmobileutilitymenu = {
    attach: function (context, settings) {
      // Find a Retailer menu & Language menu.
      const utilityMenu = $('.header-nav-utility .utility-menu');
      const langMenu = $(".language-switcher nav");
      // Mobile menu variable.
      const mobileNav = $('.header-nav .header-nav-primary > ul > li.has-children');
      const menuItem = $('.header-nav-utility .accessiblity-menu, .header-nav-utility .utility-menu, .header-nav-utility .language-switcher .nav-multiple-lang, .header-nav-utility .user-account, .header-nav-primary .level-1-menu-item');
      $('.header-nav-primary > ul > li.has-children > .sub-menu').hide();

      langMenu.unbind().on('click', function(e) {
        e.stopPropagation();
        $(this).find('.lang-nav > li').children('ul').slideToggle();
        $(this).toggleClass('open');
        return false;
      });

      // Hide if menus are empty.
      if (utilityMenu.find('.menu').length == 0) {
        utilityMenu.hide();
      }
      if ($('.header-nav-utility .user-account .dropdown-content .menu li').length == 0) {
        $('.header-nav-utility .user-account').hide();
      }
      if ($('.mobile-user-account-dropdown .dropdown-content .menu li').length == 0) {
        $('.mobile-user-account').hide();
      }

      utilityMenu.unbind().on('click', function(e) {
        e.stopPropagation();
        $(this).children('ul').slideToggle();
        $(this).toggleClass('open');
        return false;
      });

      langMenu.find('.lang-nav a').on('click', function(e) {
        e.stopPropagation();
      });

      utilityMenu.find('.menu a').on('click', function(e) {
        e.stopPropagation();
      });

      // Add add to body while hover on menu.
      menuItem.on('mouseover', function() {
        $('body').addClass('menu-active');
      });
      menuItem.on('mouseout', function() {
        $('body').removeClass('menu-active');
      });

      $(document).once().on('click', function() {
        utilityMenu.removeClass('open');
        langMenu.removeClass('open');
        utilityMenu.children('ul').css({
          'display' : '',
        });
        langMenu.find('.lang-nav > li').children('ul').css({
          'display' : '',
        });
      });

      // Account menu.
      $('html').once().click(function (e) {
        if ($(e.target).hasClass('mobile-user-account') && $('.mobile-user-account-dropdown').hasClass('open')) {
          $('body').addClass('account-menu-active');
          $('body').removeClass('mobile-nav-open');
        }
        else {
          $('body').removeClass('account-menu-active');
        }

        if (!$('body').hasClass('mobile-nav-open')) {
          $('.header-nav').removeClass('submenu-open');
          if ($(e.target).hasClass('mobile-menu-trigger')) {
            $('.header-nav-primary > ul > li.has-children > .sub-menu > ul > li > .sub-menu').hide();
            mobileNav.removeClass('open-mobile');
          }
        }
        else {
          setMenuTop();
        }
      });

      // Mobile menu functionality.
      mobileNav.unbind('click').on('click', function(e) {
        e.stopPropagation();
        $(this).children().next().slideToggle();
        if ($(this).hasClass('open-mobile')) {
          $(this).removeClass('open-mobile');
        }
        else {
          $(this).addClass('open-mobile');
        }
      });

      $('.level-1-menu-item .level-1-sub-menu, .header-nav .header-nav-primary > ul > li > a').unbind('click').on('click', function(e) {
        e.stopPropagation();
      });

      // For featured products in navigation.
      if ($('.sub-menu-cta .menu-featured-products, .featured-search-wrapper .featured-products-block').length > 0) {
        $('.sub-menu-cta .menu-featured-products .menu-products, .featured-search-wrapper .featured-products-block .coh-style-product-tile').once().each(function() {
          const status = $(this).find('.product-status');
          if (status.length) {
            $(this).find('.product-status, .product-sku').wrapAll('<div class="status-sku"></div>');
            $(this).find('.status-sku, .product-title').wrapAll('<div class="product-details"></div>');
          }
          else {
            $(this).find('.product-sku, .product-title').wrapAll('<div class="product-details"></div>');
          }
        });
      }

      // Set top and height of mobile menu if announcement banner is rendering in page.
      function setMenuTop () {
        if ($('#block-views-block-announcements-block-1 .announcement-banner-wrapper').length) {
          const nav = $('.coh-style-header .header-nav');
          if ($(window).width() < 1023) {
            const topWhenBanner = $('#block-views-block-announcements-block-1').height() + 48;
            nav.css({
              'top': topWhenBanner,
            });
            if ($('body').hasClass('mobile-nav-open')) {
              nav.css('height', `calc(100% - ${topWhenBanner}px)`);
            }
            else {
              nav.css('height', '');
            }
          }
          else if ($(window).width() > 1023) {
            nav.css({
              'top': '',
              'height': ''
            });
          }
        }
      }

      // Add/remove classes in desktop & mobile.
      function desktopMobileFunc () {
        if ($(window).width() < 1023) {
          $('.header-nav-primary > ul > li.has-children > .sub-menu').css({
            'display' : '',
          });
          if (mobileNav.hasClass('open-mobile')) {
            mobileNav.removeClass('open-mobile');
          }
        }
        else if ($(window).width() > 1023) {
          $('body').removeClass('mobile-nav-open');
          utilityMenu.removeClass('open');
          langMenu.removeClass('open');
          utilityMenu.children('ul').css({
            'display' : '',
          });
          langMenu.find('.lang-nav > li').children('ul').css({
            'display' : '',
          });
          $(function() {
            utilityMenu.mouseenter(function() {
              $('body').addClass('menu-active');
            }).mouseleave(function () {
              $('body').removeClass('menu-active');
            });
            langMenu.mouseenter(function() {
              $('body').addClass('menu-active');
            }).mouseleave(function () {
              $('body').removeClass('menu-active');
            });
          });
          mobileNav.unbind('click');
          langMenu.unbind();
          utilityMenu.unbind();
        }
      }

      setMenuTop();
      desktopMobileFunc();

      $(window).on('resize', function() {
        setMenuTop();
        desktopMobileFunc();
      });
    }
  };

})(jQuery, Drupal);
