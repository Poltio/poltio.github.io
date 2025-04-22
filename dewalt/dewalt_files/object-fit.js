/**
 * @file
 * object-fit.js
 */

(function ($) {
  Drupal.behaviors.objectFitPolyfillInitialization = {
    attach: function (context, settings) {
      if (/Trident.*rv:/.test(navigator.userAgent)) {
        $(function () {
          objectFitImages();
        });
      }
    }
  };
})(jQuery);
