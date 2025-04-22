(function($, Drupal) {
  // Get session data if available.
  var dismissed = sessionStorage.getItem('sbd_announcement');
  if (!dismissed) {
    dismissed = [];
  }

  Drupal.behaviors.sbdAnnouncements = {
    attach: function(context, settings) {
      $('.announcement-banner-wrapper', context).once('sbd-announcement')
        .each(function() {
          var $wrapper = $(this),
            $close = $wrapper.find('button.banner-close-btn'),
            nid = parseInt($wrapper.attr('data-nid'));

          // Update session storage when close button is clicked.
          $close.click(function() {
            dismissed.push(nid);
            sessionStorage.setItem('sbd_announcement', dismissed);
          });

          // Announcements are hidden by default and shown if not dismissed.
          if (dismissed.indexOf(nid) === -1) {
            $wrapper.show();
          }
        });
    }
  };
})(jQuery, Drupal);
