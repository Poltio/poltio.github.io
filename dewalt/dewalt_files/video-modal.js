(function($) {
  Drupal.behaviors.videoModal = {
    attach: function(context, settings) {

      const videoLinkButton = document.querySelectorAll('.coh-link[data-modal-open]');
      const closeButton = document.getElementsByClassName('coh-modal-close-button');
      const modalOverlay = document.getElementsByClassName('coh-modal-overlay');

      // JavaScript Double-Click Avoidance
      // Find all the video call to actions on a page
      const videosCallToActionsOnPage = document.querySelectorAll('a.coh-style-play-video');
      const videosModalThumbnailOnPage = document.querySelectorAll('.coh-style-video a.coh-link.video-link[data-trigger="true"]');
      const videosInPlace = document.querySelectorAll('.coh-link.video-link.coh-interaction');

      // This targets videos opened via CTA click
      videosCallToActionsOnPage.forEach(function(element) {
          // Identify the modal this click wants to open
          const modalToOpen = element.dataset.modalOpen;
          // Attach an onClick event listener to each video CTA, when these CTAs are clicked
          // The code bellow will trigger
          element.addEventListener('click', async function(event) {

              // Select the modal that opens, the inner modal, the play button, and the video element
              const videoModalToIntervene = await document.querySelector(`div.coh-modal#${modalToOpen}`);
              const videoPlayButton = await videoModalToIntervene.querySelector(`.coh-modal a.video-link.coh-interaction`);
              const theActualVideoElement = await videoModalToIntervene.querySelector(`.coh-video-html5 video`);
              
              // Synthetically click on the video button!
              await videoPlayButton.click();

              // Sets timeout to allow the iframe videos to render in DOM
              setTimeout(() => {
                const youTubeVideo = videoModalToIntervene.querySelector('.coh-video-youtube_iframe iframe');
                const vimeoVideo = videoModalToIntervene.querySelector('.coh-video-vimeo_iframe iframe');
   
                // Checks for the type of video and plays
                if (theActualVideoElement) {
                  theActualVideoElement.play();
                } else if (youTubeVideo) {
                  youTubeVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                } else if (vimeoVideo) {
                  var player = new Vimeo.Player(vimeoVideo);
                  player.play();
                };
              }, "500");
              
          });
      });

      // This targets modal videos using a video thumbnail on page
      videosModalThumbnailOnPage.forEach(function(element) {
        // Identify the modal this click wants to open
        const modalToOpen = element.dataset.modalOpen;
        // Attach an onClick event listener to each video CTA, when these CTAs are clicked
        // The code bellow will trigger
        element.addEventListener('click', async function(event) {

            // Select the modal that opens, the inner modal, the play button, and the video element
            const videoModalToIntervene = await document.getElementById(`${modalToOpen}`);
            const theActualVideoElement = await videoModalToIntervene.querySelector(`.coh-video-html5 video`);

            // Sets timeout to allow the iframe videos to render in DOM
            setTimeout(() => {
              const youTubeVideo = videoModalToIntervene.querySelector('.coh-video-youtube_iframe iframe');
              const vimeoVideo = videoModalToIntervene.querySelector('.coh-video-vimeo_iframe iframe');
 
              // Checks for the type of video and plays
              if (theActualVideoElement) {
                theActualVideoElement.play();
              } else if (youTubeVideo) {
                youTubeVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
              } else if (vimeoVideo) {
                var player = new Vimeo.Player(vimeoVideo);
                player.play();
              };
            }, "500");
            
        });
      });

      // Pause page videos when opening a modal
      for (let i = 0; i < videoLinkButton.length; i++) {
        videoLinkButton[i].addEventListener('click', function() {

          var 
            videoElem = document.querySelectorAll('video'),
            youTubeVideo = document.querySelectorAll('.coh-video-youtube_iframe iframe'),
            vimeoVideo = document.querySelectorAll('.coh-video-vimeo_iframe iframe'),
            isVideoPlaying = videoElem => !!(videoElem.currentTime > 0 && !videoElem.paused && !vivideoElemdeo.ended && videoElem.readyState > 2);

          // Pause youtube videos on modal open
          if (isVideoPlaying && youTubeVideo) {
            for (let i = 0; i < youTubeVideo.length; i++) {
              youTubeVideo[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }
          }

          // Pause vimeo videos on modal open
          if (isVideoPlaying && vimeoVideo) {
            for (let i = 0; i < vimeoVideo.length; i++) {
              var iframeSrc = vimeoVideo[i].src;
              vimeoVideo[i].src = iframeSrc;
            }
          }
            
          // Pause videos on modal open
          for (let i = 0; i < videoElem.length; i++) {
            if (!videoElem[i].paused) {
              videoElem[i].pause();
            }
          }  
        });
      }

    }
  };
})(jQuery);
