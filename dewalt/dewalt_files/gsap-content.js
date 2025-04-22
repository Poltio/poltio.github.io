(function ($) {
  // Initialize the flag to control animations
  let runAnimations = true;

  Drupal.behaviors.gsapContent = {
    attach: function (context, settings) {
      // Register Plugin
      if (gsap && gsap.registerPlugin && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      } else {
        console.error('GSAP or ScrollTrigger not available.');
      }

      // Removes gsap animation from carousels inside tab/accordion components
      const tabbedComponent = document.querySelectorAll('.coh-accordion-tabs-content');

      tabbedComponent.forEach((element) => {
        const tabCarouselItems = element.querySelectorAll('.gsap-carousel-item');
        tabCarouselItems.forEach((element) => {
          element.classList.remove("gsap-carousel-item");
        });
      });

      // Defines elements to be animated
      const elements = {
        featureBlockTextFirst: gsap.utils.toArray('.feature-block-component[data-content-order="text-first"]'),
        featureBlockImageFirst: gsap.utils.toArray('.feature-block-component[data-content-order="image-first"]'),
        pageHeaderComponent: gsap.utils.toArray('.page-header-component'),
        fiftyFiftyComponent: gsap.utils.toArray('.fifty-fifty-component'),
        listingComponent: gsap.utils.toArray('.listing-component:not([gsap-animation="disabled"]'),
        pageHeroComponent: gsap.utils.toArray('.page-hero-component'),
        pdpFadeInSection: gsap.utils.toArray('.gsap-fadein-section'),
        pdpGalleryFadeInContainer: gsap.utils.toArray('.gsap-fadein-sku-gallery-container'),
        carouselContainer: gsap.utils.toArray('.sbd-carousel'),
        carouselItem: gsap.utils.toArray('.gsap-carousel-item'),
        richTextFadeIn: gsap.utils.toArray('div:not(.coh-modal-inner):not(.coh-accordion-tabs-content) > .gsap-fadein-richtext:not([gsap-animation="disabled"])'),
        toolboxItem: gsap.utils.toArray('#block-mytoolbox .items-list-wrapper .items-list')
      };

      // Elements to reset on mobile or when reduced motion is enabled
      const elementsToSetOpacity = Object.values(elements).flat();

      // Running animations only if the viewport is below 1024px
      let isMobile = window.innerWidth <= 1024;
      let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Initial check for media query and reduced motion
      handleMediaQueryChange();

      // Add listener for future changes
      window.addEventListener('resize', () => {
        // Update isMobile on window resize
        isMobile = window.innerWidth <= 1024;
        handleMediaQueryChange();
      });

      // Add listener for reduce motion preference change
      window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener('change', (event) => {
        // Update reduceMotion on preference change
        reduceMotion = event.matches;
        handleMediaQueryChange();
      });

      // Handle page show event for browser back button
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
          // Page was loaded from the back/forward cache
          resetCarouselAnimations();
          handleMediaQueryChange();
        }
      });

      function handleMediaQueryChange() {
        if (!isMobile && !reduceMotion && runAnimations) {
          // Animations when text is displayed first
          elements.featureBlockTextFirst.forEach((element) => {
            animateFeatureBlock(element, 50, 0);
          });

          // Animations when image is displayed first
          elements.featureBlockImageFirst.forEach((element) => {
            animateFeatureBlock(element, -50, 0);
          });

          // Fades In Page Headers
          fadeInElements(elements.pageHeaderComponent);

          // Fades In 50/50 Component
          fadeInElements(elements.fiftyFiftyComponent);

          // Fades In Listing Component
          fadeInElements(elements.listingComponent);

          // Fades In Hero Component
          fadeInElements(elements.pageHeroComponent);

          // Fade in PDP template sections
          fadeInElements(elements.pdpFadeInSection);

          // Fade in PDP product gallery
          fadeInElements(elements.pdpGalleryFadeInContainer);

          // Fade in Rich Text component
          fadeInElements(elements.richTextFadeIn);

          // Carousel item fade in
          ScrollTrigger.batch(":not(.pdp-ajax-carousel-container) .gsap-carousel-item", {
            batchMax: 3,
            invalidateOnRefresh: true,
            onEnter: batch => gsap.to(batch, { opacity: 1, duration: 1, stagger: { each: 0.2 }, overwrite: true })
          });

          // Toolbox item fade in
          fadeInElements(elements.toolboxItem, 75);

          // Find a retailer item fade in
          //fadeInElements(elements.retailerLocations, 75, '.lsp__location-result-set-wrapper');

        } else {
          // Set runAnimations to false to prevent animations
          runAnimations = false;

          // Clear any existing animations or triggers
          gsap.globalTimeline.clear();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());

          // Reset opacity and visibility for elements
          elementsToSetOpacity.forEach((element) => {
            if (element) {
              gsap.set(element, { opacity: 1, visibility: 'visible' });
            }
          });

          // Reset initial styles for featureBlockTextFirst
          resetFeatureBlockStyles(elements.featureBlockTextFirst);

          // Reset initial styles for featureBlockImageFirst
          resetFeatureBlockStyles(elements.featureBlockImageFirst);
        }
      }

      function fadeInElements(elements, start = "20% 75%", scroller = null) {
        elements.forEach((element) => {
          if (element) {
            const tl = gsap.timeline({
              onComplete: function () {
                // Removes class to prevent rich text from animating after opening/closing tab component
                element.classList.remove("gsap-fadein-richtext");
                element.classList.remove("gsap-fadein-sku-gallery-container");
              },
            });
            tl.fromTo(element, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });

            ScrollTrigger.create({
              trigger: element,
              animation: tl,
              toggleActions: 'play none none none',
              start: start,
              scroller: scroller
            });
          }
        });
      }

      function animateFeatureBlock(element, xValue, yValue) {
        const
          contentBox = element.querySelector('.content-box'),
          mediaContainer = element.querySelector('.media-container'),
          buttons = element.querySelectorAll('.reusable-button-set .coh-buttons a'),
          textButton = element.querySelector('.reusable-button-set .coh-text-button'),
          tl = gsap.timeline();

          if (mediaContainer) {
            tl.fromTo(mediaContainer, { autoAlpha: 0, x: xValue }, { duration: 1, autoAlpha: 1, x: 0 });
          }
          
          if (contentBox) {
            tl.fromTo(contentBox, { autoAlpha: 0, x: -xValue }, { duration: 1, autoAlpha: 1, x: 0 }, '<.25');
          }
          
          if (buttons) {
            tl.fromTo(buttons, { autoAlpha: 0, y: 30 }, { duration: 1, autoAlpha: 1, y: 0, stagger: { amount: .25, grid: 'auto' } }, '<.25');
          }
          
          if (textButton) {
              tl.fromTo(textButton, { autoAlpha: 0, y: 20 }, { duration: 1, autoAlpha: 1, y: 0 }, '<.25');
          }
          
          ScrollTrigger.create({
              trigger: element,
              animation: tl,
              toggleActions: 'play none none none',
              start: "20% 75%"
          });
      }

      function resetFeatureBlockStyles(elements) {
        elements.forEach((element) => {
          const
            contentBox = element.querySelector('.content-box'),
            mediaContainer = element.querySelector('.media-container'),
            buttons = element.querySelectorAll('.reusable-button-set .coh-buttons a'),
            textButton = element.querySelector('.reusable-button-set .coh-text-button');

          if (contentBox && mediaContainer && buttons && textButton) {
            gsap.set(mediaContainer, { autoAlpha: 1, x: 0 });
            gsap.set(contentBox, { autoAlpha: 1, x: 0 });
            gsap.set(buttons, { autoAlpha: 1, y: 0 });
            gsap.set(textButton, { autoAlpha: 1, y: 0 });
          }
        });
      }

      // Function to reset carousel animations
      function resetCarouselAnimations() {
        // Clear existing ScrollTriggers for carousel items
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger.classList.contains('gsap-carousel-item')) {
            trigger.kill();
          }
        });

        // Reset GSAP animations for carousel items
        gsap.set('.gsap-carousel-item', { opacity: 0 });
      }
    }
  };
})(jQuery);
