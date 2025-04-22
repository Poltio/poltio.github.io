(function($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.sbdCarousel = {
    attach: function(context, drupalSettings) {

      function updateCurrentSlides($page_indicator, num) {
        $page_indicator.find('.current').text(num);
      }

      $('.sbd-carousel-component', context).once('sbd-carousel-init').each(function () {
        var $this = $(this);
        var $page_indicator =  $this.find('.sbd-carousel-page-indicator');
        var $sbd_carousel =  $this.find('.sbd-carousel');
        var $sbd_slider =  $this.find('.sbd-slider');
        var $sbd_pdpSlider = $this.find('#product-slider');
        var $sbd_pdpThumbnailSlider =  $this.find('#thumbnail-slider');
        var $sbd_pdpThumbnailSliderMobile =  $this.find('#thumbnail-slider-mobile');
        // Override variable for CoreMDS2024.
        if (drupalSettings.isCoreMds2024) {
          var $sbd_pdpSlider = null;
          var $sbd_pdpThumbnailSlider = null;
          var $sbd_pdpThumbnailSliderMobile = null;
          var $sbd_pdpSlider = $this.find('.slider-main #block-duplo-pdp-slider');
          var $sbd_pdpThumbnailSlider = $this.find('.thumbnail-slider-desktop #block-duplo-pdp-slider-thumbnail');
          var $sbd_pdpThumbnailSliderMobile = $this.find('.thumbnail-slider-mobile #block-duplo-pdp-slider');
        }
        var numSlides = $sbd_carousel.data('slides-to-show');
        var numSliderSlides = $sbd_slider.data('slides-to-show');
        var currentSlides = 0;
        var $progressBar = $this.find('.progress');
        var $progressBarLabel = $this.find( '.slider__label' );

        // Sets PDP slider sync, the asNavFor feature is deprecated in Accessible Slick
        // so we're replicating the behavior here
        function setSlides(e, slider) {
          $(slider.$slides.find('.thumbnail-image').first()).each(function(index) {
            $(this).attr('aria-current', true);
          });

          $(slider.$slides.find('.thumbnail-image')).each(function(index) {
            $(this).on('click', function() {
              // Move aria-current="true" to this button
              $(slider.$slides.find('.thumbnail-image').removeAttr('aria-current'));
              $(this).attr('aria-current', true);

              // Change the main image to match this thumbnail button
              var index = $(this).closest('.slick-slide').data('slick-index');
              $('#product-slider').slick('slickGoTo', index);
              if(drupalSettings.isCoreMds2024) {
                $('.slider-main #block-duplo-pdp-slider').slick('slickGoTo', index);
              }
            });
          });

          if (drupalSettings.isCoreMds2024 && slider.$slides.length > 8) {
            var viewLessSelector = $('#block-duplo-pdp-slider-thumbnail .view-less');
            var viewMoreSelector = $('#block-duplo-pdp-slider-thumbnail .view-more-wrapper');
            var thumbnailSliderDesktop = $('.thumbnail-slider-desktop');

            if (slider.$slider.is('#block-duplo-pdp-slider-thumbnail')) {
              var thumbnailSlides = $('.slick-slide', thumbnailSliderDesktop).slice(8);
              thumbnailSlides.hide();

              viewMoreSelector.on('click', function() {
                $(this).hide();
                thumbnailSlides.show();
                viewLessSelector.show();
              });

              viewLessSelector.on('click', function() {
                $(this).hide();
                viewMoreSelector.show();
                thumbnailSlides.hide();
              });
            }
          }
        };

        // Change the main image whenever a thumbnail button is activated
        $sbd_pdpThumbnailSlider.on('init', setSlides);
        // Change the main image whenever a thumbnail button is activated
        $sbd_pdpThumbnailSliderMobile.on('init', setSlides);

        // Initialize Slick carousel
        $sbd_carousel.on('init', function(event, slick) {
          // Dynamically calculate current slides per carousel
          currentSlides = slick.$slides.filter('.slick-active').length;
          $page_indicator.find('.total').text(slick.slideCount);  // Update total slide count
          updateCurrentSlides($page_indicator, currentSlides);      // Update the current slide number
        });

        $sbd_carousel.on('afterChange', function(event, slick, currentSlide) {
          // Calculate the current slide based on slick's internal state
          currentSlides = currentSlide + slick.$slides.filter('.slick-active').length;
          updateCurrentSlides($page_indicator, currentSlides);

          var $firstCarouselItem = $(this).find(".slick-active").first().find("a").first();
          if ($firstCarouselItem.length) {
              $firstCarouselItem.trigger("focus");
          }
        });

        // Progress bar for SBD carousel in core_2_0
        $sbd_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          Drupal.behaviors.sbdCarousel.sliderProgressCal(slick, nextSlide, $progressBar, $progressBarLabel);
        });

        $sbd_carousel.on('init', function(event, slick) {
          Drupal.behaviors.sbdCarousel.sliderProgressCal(slick, 0, $progressBar, $progressBarLabel);
        });

        // SBD Carousel is used to render product tiles and other product carousels in various pages
        $sbd_carousel.slick({
          autoplay: false,
          infinite: false,
          slidesToShow: numSlides,
          slidesToScroll: 1,
          rtl: ($('html').attr('dir') === 'rtl' || $this.hasClass('rtl-test')),
          prevArrow: ($this.find('.slick-prev')),
          nextArrow: ($this.find('.slick-next')),
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: numSlides === 1 ? 1 : 3
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: numSlides === 1 ? 1 : 2
              }
            },
            {
              breakpoint: 728,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        // Keydown event for handling keyboard navigation (Enter/Space for prev/next)
        $(document).on("keydown", ".slick-prev, .slick-next", function (e) {
          if (e.key === "Enter" || e.key === "Space") {
              e.preventDefault(); 

              var $carouselWrapper = $(this).closest(".sbd-carousel-page-indicator").siblings(".sbd-carousel").first();
              
              // Determine the direction (previous or next)
              if ($(this).hasClass("slick-prev")) {
                  $carouselWrapper.slick("slickPrev");
              } else if ($(this).hasClass("slick-next")) {
                  $carouselWrapper.slick("slickNext");
              }
          }
        });
        
        // SBD Slider is used in hero slider sections
        $sbd_slider.slick({
          infinite: true,
          dots: true,
          speed: 800,
          slidesToShow: numSliderSlides,
          slidesToScroll: 1,
          rtl: ($('html').attr('dir') === 'rtl' || $this.hasClass('rtl-test')),
          pauseOnDotsHover: true,
          pauseOnHover: true,
          swipe: true,
          touchMove: true,
          autoplay: false,
          slidesToScroll: 1,
          useTransform: false,
          regionLabel: 'Hero Slider',
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: numSliderSlides === 1 ? 1 : 3
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: numSliderSlides === 1 ? 1 : 2
              }
            },
            {
              breakpoint: 728,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        // SBD PDP Slider is used in PDP pages to render product images in a gallery
        $sbd_pdpSlider.slick({
          regionLabel: 'Product Carousel',
          touchMove: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          draggable:true,
          swipe:true,
          fade:false,
          speed:300,
          cssEase:"ease",
          pauseOnHover:false,
          arrows:true,
          rows: 0,
          useTransform: true,
          matchHeights: {"target":"slide"},
          rtl: ($('html').attr('dir') === 'rtl' || $this.hasClass('rtl-test')),
          prevArrow:"<button aria-label=\"Previous\" type=\"button\" class=\"slick-prev\"></button>",
          nextArrow:"<button aria-label=\"Next\" type=\"button\" class=\"slick-next\"></button>",
          responsive: [
            {
              breakpoint: 728,
              settings: {
                arrows: false,
                dots: true,
                appendDots: drupalSettings.isCoreMds2024 ? ".slider-main #block-duplo-pdp-slider" : ".pdp-product-slider",
              }
            }
          ]
        });

        // SBD PDP Thumbnail Slider controls the navigation on PDP slider
        $sbd_pdpThumbnailSlider.slick({
          rows: 0,
          regionLabel: 'Product Thumbnail Carousel',
          slidesToShow: 99,
          slidesToScroll: 99,
          cssEase: "ease",
          draggable: false,
          rtl: ($('html').attr('dir') === 'rtl' || $this.hasClass('rtl-test')),
        });

        // SBD PDP Thumbnail Slider controls the navigation on PDP slider
        $sbd_pdpThumbnailSliderMobile.slick({
          rows: 0,
          regionLabel: 'Product Thumbnail Mobile Carousel',
          slidesToShow: drupalSettings.isCoreMds2024 ? 4.3 : 3,
          slidesToScroll: 1,
          draggable:true,
          swipe: true,
          speed:300,
          cssEase: "ease",
          infinite: false,
          rtl: ($('html').attr('dir') === 'rtl' || $this.hasClass('rtl-test')),
        });

        updateCurrentSlides($page_indicator, currentSlides);

        // Update the thumbnail slider when the user changes the main slider directly.
        $('#product-slider, .slider-main #block-duplo-pdp-slider').on('beforeChange', function(e, slider, currentSlide, nextSlide) {
          // Remove aria-current from the last selected thumbnail image button
          $('#thumbnail-slider .thumbnail-image[aria-current="true"]').removeAttr('aria-current');
          $('#thumbnail-slider-mobile .thumbnail-image[aria-current="true"]').removeAttr('aria-current');

          // Select the thumbnail image button that goes with this main image. Most importantly, this updates Slick's internal state to be consistent with the visual change.
          $('#thumbnail-slider').slick('slickGoTo', nextSlide);
          $('#thumbnail-slider-mobile').slick('slickGoTo', nextSlide);

          // Add aria-current="true" to the correct thumbnail image button to convey to screen readers that it's active.
          $('#thumbnail-slider .thumbnail-image').eq(nextSlide).attr('aria-current', true);
          $('#thumbnail-slider-mobile .thumbnail-image').eq(nextSlide).attr('aria-current', true);

          // Only trigger for core 2024
          if (drupalSettings.isCoreMds2024) {
            // Remove aria-current from the last selected thumbnail image button
            $('.thumbnail-slider-desktop .thumbnail-image[aria-current="true"]').removeAttr('aria-current');
            $('.thumbnail-slider-mobile .thumbnail-image[aria-current="true"]').removeAttr('aria-current');

            // Select the thumbnail image button that goes with this main image. Most importantly, this updates Slick's internal state to be consistent with the visual change.
            $('.thumbnail-slider-desktop #block-duplo-pdp-slider-thumbail').slick('slickGoTo', nextSlide);
            $('.thumbnail-slider-mobile #block-duplo-pdp-slider').slick('slickGoTo', nextSlide);

            // Add aria-current="true" to the correct thumbnail image button to convey to screen readers that it's active.
            $('.thumbnail-slider-desktop .thumbnail-image').eq(nextSlide).attr('aria-current', true);
            $('.thumbnail-slider-mobile .thumbnail-image').eq(nextSlide).attr('aria-current', true);

            var slides = slider.$slides;
            if (slides.length > 8) {
              var viewLessSelector = $('#block-duplo-pdp-slider-thumbnail .view-less');
              var viewMoreSelector = $('#block-duplo-pdp-slider-thumbnail .view-more-wrapper');
              var thumbnailSlides = $('.thumbnail-slider-desktop .slick-slide:gt(7)');
              if (nextSlide > 6) {
                thumbnailSlides.show();
                viewMoreSelector.hide();
                viewLessSelector.show();
              } else if (nextSlide < 7) {
                thumbnailSlides.hide();
                viewMoreSelector.show();
                viewLessSelector.hide();
              }
            }
          }
        });
        // Only trigger for core 2024
        if (drupalSettings.isCoreMds2024) {
          // Button title translateable.
          $('.sbd-carousel-page-indicator').each(function() {
            // Button title translateable.
            var title_next = $(this).find('.slick-next').attr('title');
            var title_previous = $(this).find('.slick-prev .slick-sr-only').text();
            $(this).find('.slick-next').attr('title', Drupal.t(title_next));
            $(this).find('.slick-prev').attr('title', title_previous);
          });
        }

        // Remove empty ID's from cloned slides
        const slickSlideClones = document.querySelectorAll('.slick-cloned');
        slickSlideClones.forEach(slickSlideClone => {
          slickSlideClone.removeAttribute('id');
        });

        // Set aria disabled on inactive carousel slides
        const slickSlides = document.querySelectorAll('.sbd-carousel .slick-slide');
        slickSlides.forEach(slickSlide => {
          if (slickSlide.classList.contains('slick-active')) {
            slickSlide.setAttribute('aria-disabled', false);
          } else {
            slickSlide.setAttribute('aria-disabled', true);
          }
        });

        // Temporarily removing this, it negatively affects all carousels including carousels in tabs
        // We Need a better solution
        // Customs slider logic to remove non existing product tiles
          // if ($('.custom-slider').find('.product-teaser-section').length > 0) {
      
          //   $('.custom-slider').each(function () {
          //     if ($(this).find('.product-teaser-section').length > 0) {
          //       var count = $(this).find('.product-teaser-section').length;
          //       var counter = 0;
          //       $this = $(this);
          //       $(this).find('.product-teaser-section').each(function () {
          //         if ($(this).children().length == 0) {
          //           $(this).closest('.slick-slide').remove();
          //           counter = counter + 1;
          //           $(this).closest('.sbd-carousel').addClass('hide-carousel');
          //         }
          //       });
      
          //       if ($this.find('.sbd-carousel .slick-track .slick-slide').length == 0) {
          //         console.log('length is 0');
          //         $this.closest('.sbd-carousel-component').hide();
          //       } else {
          //         if (count > counter) {
          //           var newCount = count - counter;
          //         }
          //         $(this).find('.sbd-carousel').attr('data-slides-to-show', newCount);
          //         $(this).parent().find('.top-header-container .total').text(newCount);
          //         if (newCount < 3) {
          //           $(this).parent().find('.top-header-container .current').text(newCount);
          //         }
          //         $(this).find(".sbd-carousel.slick-initialized").slick('reinit');
          //       }
          //     }
          //   });
          // }
          // if ($('.coh-style-grid-container').find('.product-teaser-section').length > 0) {
          //   $('.coh-style-grid-container').each(function () {
          //     if ($(this).find('.product-teaser-section').length > 0) {
          //       var count = $(this).find('.product-teaser-section').length;
          //       var counter = 0;
          //       $this = $(this);
          //       $($this).find('.product-teaser-section').each(function () {
          //         console.log($(this).parent);
          //         if ($(this).children().length == 0) {
          //           $(this).parent().remove();
          //           counter = counter + 1;
          //         }
          //       });
          //       if (count == counter) {
          //         $(this).remove();
          //       }
          //     }
          //   });
          // }
      });

      // Reinitialize slick on tab change, this solves an issue in which
      // the slider did not display properly when opening a new tab
      $('.coh-style-tab-items:not(.is-active) > a').once().on('click', function (e) {
        $(".sbd-carousel.slick-initialized").slick('reinit');
      });

      // Reinitialize slick on accordion for mobile
      $('.coh-style-accordion-items').once().on('click', function () {
        $('.sbd-carousel').slick('reinit');

        // add a opacity on accordion for gsap fadein sections.
        if (drupalSettings.isCoreMds2024) {
          $(".page-node-type-sku .gsap-fadein-section, .page-node-type-sku .gsap-fadein-section .fifty-fifty-component").css({
            "opacity": 1,
            "visibility" : "visible",
          });
        }
      });

      // Changing the aria label on sbd carousels as this cannot be the same for each element.
      // This is appending a number count at the end of the aria label.
      var count = 1;
      $('.sbd-carousel').each(function(){
        var label = this.ariaLabel;
        $(this).attr('aria-label', label + '-' + count++);
      });
  },
  sliderProgressCal: function (slick, nextSlide=0, $progressBar, $progressBarLabel){
    var slickIntCount = slick.$slider.find('.slick-active').length;
    var calc = ( (nextSlide + slickIntCount) / (slick.slideCount) ) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    $progressBarLabel.text( calc + '% completed' );
  }
}
})(jQuery, Drupal, drupalSettings);
