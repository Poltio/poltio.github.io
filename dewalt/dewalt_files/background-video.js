(function ($, Drupal, once) {
  Drupal.behaviors.backgroundVideo = {
    attach: function (context, settings) {

      const videoPlayButton = once('coh-js-video-init', context.querySelectorAll('.coh-style-page-hero .background-video-control-button'));
      const pageHeaderVideoPlayButton = once('coh-js-video-init', context.querySelectorAll('.page-header-component .background-video-control-button'));
      const html5video = !!document.createElement('video').canPlayType;
      const motionQuery = matchMedia('(prefers-reduced-motion)');
      const heroComponent = document.querySelectorAll('.coh-style-page-hero');
      const pageHeaderComponent = document.querySelectorAll('.page-header-component');
      const videos = document.querySelectorAll('.page-hero-background-video');
      
      // Animated GIF play control
      const gifDetailsPanels = document.querySelectorAll('.gif-details');

      const prefersReducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      if (!prefersReducedMotionQuery.matches) {
        //   User does not have reduced motion set, enable the gifs by default
        gifDetailsPanels.forEach(function(element) {
          element.setAttribute('open', '');

          if(element.hasAttribute('open', '')) {
            setTimeout(function () {
              element.removeAttribute("open");
            }, 20000);
          }
        });
      }

      // Adds event listener to summary click so GIF can be paused after 20 seconds
      gifDetailsPanels.forEach(function(element) {
        const gifDetails = element.querySelector('summary');

        gifDetails.addEventListener('click', function() {
          setTimeout(function () {
            if(element.hasAttribute("open", '')) {
              setTimeout(function () {
                element.removeAttribute("open");
              }, 20000);
            }
          }, 100);
          
        });
      });
      
      // for (let i = 0; i < gifDetailsPanels.length; i++) {        
      //   if(gifDetailsPanels[i].hasAttribute("open", ''))
      //   setTimeout(function () {
      //     gifDetailsPanels[i].removeAttribute("open");
      //   }, 20000);
      // }

      // Checks for prefers reduced motion and pauses video if needed
      function reducedMotionCheck(videoPlayer, element) {
        if (motionQuery.matches) {
          videoPlayer.pause();
          videoPlayer.classList.add('video-paused');
          element.classList.remove('video-pause');
          element.classList.add('video-play');
          element.setAttribute('alt', 'Play background video');
          videoPlayer.setAttribute('autoplay', 'false');
        } if (!motionQuery.matches) {
          videoPlayer.classList.add('video-playing');
        }
      }

      // Set fallback image to display if video is not supported
      heroComponent.forEach(function (element) {
        const bynderBackgroundImage = element.querySelector('.bynder-media-container');
        if (!html5video) {
          bynderBackgroundImage.style.display = 'block';
        }
      });

      // Set fallback image to display if video is not supported
      pageHeaderComponent.forEach(function (element) {
        const bynderBackgroundImage = element.querySelector('.bynder-media-container');
        if (!html5video) {
          bynderBackgroundImage.style.display = 'block';
        }
      });

      // Find all videos for each play button and play/pause in page header component
      pageHeaderVideoPlayButton.forEach(function (element) {
        const videoPlayer = element.parentElement.nextElementSibling.querySelector('.page-header-component video');
        backgroundVideo(element, videoPlayer);
      });

      // Find all videos for each play button and play/pause in page hero component
      videoPlayButton.forEach(function (element) {
        const videoPlayer = element.parentElement.nextElementSibling.querySelector('.page-hero-background-video video');
        backgroundVideo(element, videoPlayer);
      });

      function backgroundVideo(element, videoPlayer) {

        // Check if video is playing
        const isVideoPlaying = videoPlayer => !!(videoPlayer.currentTime > 0 && !videoPlayer.paused && !videoPlayer.ended && videoPlayer.readyState > 2);

        // If video is playing, pause after 20 seconds
        if (isVideoPlaying) {
          setTimeout(function () {
            videoPlayer.pause();
            videoPlayer.classList.remove('video-playing');
            videoPlayer.classList.add('video-paused');
            element.classList.remove('video-pause');
            element.classList.add('video-play');
            element.setAttribute('alt', 'Play background video');
          }, 20000);
        }


        // Checks for reduced motion first
        reducedMotionCheck(videoPlayer, element);

        // Removes video if not supported 
        if (!html5video) {
          videoPlayer.removeAttribute('src');
          videoPlayer.style.display = 'none';
        }

        // play or pause video on button click
        element.addEventListener('click', function (event) {
          event.preventDefault();
          if (videoPlayer.paused === true) {
            videoPlayer.play();
            videoPlayer.classList.remove('video-paused');
            videoPlayer.classList.add('video-playing');
            element.classList.remove('video-play');
            element.classList.add('video-pause');
            element.setAttribute('alt', 'Pause background video');
            setTimeout(function () {
              videoPlayer.pause();
              videoPlayer.classList.remove('video-playing');
              videoPlayer.classList.add('video-paused');
              element.classList.remove('video-pause');
              element.classList.add('video-play');
              element.setAttribute('alt', 'Play background video');
            }, 20000);
          } else {
            videoPlayer.pause();
            videoPlayer.classList.remove('video-playing');
            videoPlayer.classList.add('video-paused');
            element.classList.remove('video-pause');
            element.classList.add('video-play');
            element.setAttribute('alt', 'Play background video');
            videoPlayer.setAttribute('autoplay', 'false');
          }
        });
      }

    }
  };
})(jQuery, Drupal, once);