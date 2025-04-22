(function($) {
  Drupal.behaviors.tablesawTable = {
    attach: function(context, settings) {
      $('.tablesaw-wrapper table', context).once('tablesaw-init').each(function() {
        $(this).addClass('tablesaw tablesaw-stack')
          .attr('data-tablesaw-mode', 'stack');
      });
      setTimeout(Tablesaw.init, 0);
    }
  };
})(jQuery);

var acc = document.getElementsByClassName("site-studio-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function (event) {
    this.classList.toggle("active");
    var panel = event.target.closest('thead').nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "table";
    } else {
      panel.style.display = "none";
    }
  });
}

