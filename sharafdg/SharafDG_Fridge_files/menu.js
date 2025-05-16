/*
// Some things I question:
// 1. why use <a> tags at all in the submenu?
*/

(function($) {

  'use strict';

  // original hover method
  var oldHover = $.fn.hover,

  // enhanced hover method
  newHover = function(handlerIn, handlerOut, delay) {

    return this.each(function() {

      var timeout,

      handler = function(el, fn, e) {
        if (timeout) {
          timeout = window.clearTimeout(timeout); // also set timeout to undefined
        } else {
          timeout = window.setTimeout(function() {
            timeout = undefined;
            fn.call(el, e);
          }, delay);
        }
      };

      $(this).on('mouseenter mouseleave', function(e) {
        handler(this, e.type === 'mouseenter' ? handlerIn : handlerOut, e);
      });

    });

  };

  // call either original hover method or new hover method depending on
  // whether a delay argurment was passed, can take one or two handlers
  $.fn.hover = function(/* arguments */) {

    var args = Array.prototype.slice.call(arguments);

    if (args.length === 3 && typeof args[2] === 'number') {
      return newHover.apply(this, args);
    } else if (args.length === 2 && typeof args[1] === 'number') {
      return newHover.call(this, args[0], args[0], args[1]);
    }
    return oldHover.apply(this, args);

  };

})(window.jQuery);

function bind_navigation_menu() {

$('.navigation-submenu').menuAim({
  activate: function(row){
    $(row).addClass("navigation-submenu__item--active");
  },
  deactivate: function(row){
    $(row).removeClass("navigation-submenu__item--active");
  }
});


// (function(exports, window, $) {
//     var MENU_CLOSE_DELAY = 100;
    
//     var NavigationMenu = function(el) {
//       var _this = this;
  
//       this.el = $(el);
//       this.activeMenu = null;
//       this.activeSubmenu = null;
      
//       // remember the open menu and submenu when hovering outside of the entire menu
//       this.timer = null;
//       this.menuActiveAtTimerStart = null;
      
//       // add menuAim to the menu
     
      
//       // Add menuAim to the submenu's
//       $('.navigation-submenu')
//         .each(function() {
//           $(this).menuAim({
//             activate: $.proxy(_this.openSubmenu, _this),
//           });
//         });
//     }
      
//     NavigationMenu.prototype.openMenu = function(row) {
//       var $row = $(row);
//       this.activeMenu = row;
  
//       if (this.timer && this.menuActiveAtTimerStart && this.menuActiveAtTimerStart !== this.activeMenu) {
//         this.closeMenu(this.menuActiveAtTimerStart, true);
//         this.menuActiveAtTimerStart = null;
//       }
//       this.cancelCloseMenuTimer();

  
//       $row.addClass('navigation-menu__item--active');
  
//       if (!this.hasOpenSubmenu()) {
//           this.activeSubmenu = $row.find('.navigation-submenu .navigation-submenu__item')[0];
//           this.openSubmenu(this.activeSubmenu);        
//       }
//     }
    
//     NavigationMenu.prototype.hasOpenSubmenu = function() {
//       return $(this.activeMenu).find('.navigation-submenu__item--active').length;
//     }
  
//     NavigationMenu.prototype.closeMenu = function(row, force) {
//       if (force || row !== this.menuActiveAtTimerStart) {
//         $(row).removeClass('navigation-menu__item--active');
//         $('.searcharea-overlay').addClass('hidden');
//         this.closeSubmenu(this.activeSubmenu, force);
//       }
//     };
  
//     NavigationMenu.prototype.openSubmenu = function(row) {    
//       this.closeSubmenu(this.activeSubmenu);
//       this.activeSubmenu = row;
      
      
//       this.setMenuHeight();
//     };
  
//     NavigationMenu.prototype.closeSubmenu = function(row) {    
//         $(row).removeClass("navigation-submenu__item--active");  
//     };
    
//     NavigationMenu.prototype.setMenuHeight = function() {
     
//     };
    
//     NavigationMenu.prototype.startCloseMenuTimer = function() {
//       var _this = this;
      
//       this.menuActiveAtTimerStart = this.activeMenu;
      
//       this.timer = window.setTimeout(function() {
//         _this.closeMenu(_this.menuActiveAtTimerStart, true);
//           _this.menuActiveAtTimerStart = null; 
//       }, MENU_CLOSE_DELAY);
      
//       // close the menu
//       return true;
//     };
    
//     NavigationMenu.prototype.cancelCloseMenuTimer = function() {
//       window.clearTimeout(this.timer);
//     };
  
//     exports.NavigationMenu = NavigationMenu;
//   })(window, window, jQuery);
  
//   $(function() {
//         new NavigationMenu('.navigation-menu__item-content');  
//   });


    var menu = $('.navigation-menu__item');


    menu.hover(function(e) {
      $('.searcharea-overlay').removeClass('hidden');
      menu.addClass(" navigation-menu__item--active");
     
    }, function() {
      $('.searcharea-overlay').addClass('hidden');
      menu.removeClass("navigation-menu__item--active"); 
      
    }, 200);

    var topmenu = $('.sdg_top__menu');


    topmenu
        .each(function() {
          var _that = $(this);
          _that.hover(function(e) {
            if(_that.find('.top-menu__content').length >0){
              $('.searcharea-overlay').removeClass('hidden');
              _that.addClass("navigation-menu__item--active");
            }
          }, function() {
            if(_that.find('.top-menu__content').length >0){
            $('.searcharea-overlay').addClass('hidden');
            _that.removeClass("navigation-menu__item--active"); 
            }
          }, 200);
        });
      }


$(document).ready(function(){
  if($(".navbar.partial").length == 0){
    bind_navigation_menu()
  } else {
    $(".navbar.partial .sdg_top__menu,.navbar.partial .navigation-menu__item").hover(function(){
      if($(".navbar.partial").hasClass("hover")){
        return
      } else {
        $(".navbar.partial").addClass("hover")
      }
      var menuUrl = wpJson + 'wp-api-menus/v3/menu-slug/desktop-menu?v=1';
      if (typeof icl_vars != 'undefined') {
        if (icl_vars.current_language == 'ar') {
          menuUrl = '/ar/wp-json/wp-api-menus/v3/menu-slug/desktop-menu?v=1';
        }
      }
      $.ajax({
        type: 'GET',
        url: menuUrl,
        success: function(response) {
          if (response) {
            $(".navbar").remove()
            $(".site-header.main-header").append(response)
            bind_navigation_menu()
          }
        }
      })
    })
  }
})
  
     
