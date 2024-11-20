/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Add the Spectrum Spinner (cssload-loader) once the spinner container is ready
 * @param {Object} mutation - the mutation event
 * @returns {void}
 */
function addSpinner(mutation) {
    if (
        mutation.target.id === 'app' &&
        $('.spinner-container').length &&
        $('#cssload-loader').length === 0
    ) {
        const loader = `
            <div data-v-779876b9="" id="cssload-loader">
                <ul data-v-779876b9="">
                <li data-v-779876b9=""></li>
                <li data-v-779876b9=""></li>
                <li data-v-779876b9=""></li>
                <li data-v-779876b9=""></li>
                <li data-v-779876b9=""></li>
                <li data-v-779876b9=""></li>
                </ul>
            </div>
        `;
        $('.spinner-container').append(loader);
    }

    // no need to remove the spinner since it is removed by customizer.min.js
}

const customizations = {
    addSpinner: addSpinner,
};

/**
 * Add the Spectrum Spinner once the spinner container is ready
 * @param {HTMLElement} targetNode - node that will be observed and customized
 * @param {Array} selectedCustomizations - customizations to be executed
 * @returns {void}
 */
function customize(targetNode, selectedCustomizations) {
    // Select the node that will be observed for mutations
    if (!targetNode) {
        return;
    }

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (const mutation of mutationsList) {
            for (const selectedCustomization of selectedCustomizations) {
                customizations[selectedCustomization](mutation);
            }
        }
    };

    // Create an observer instance linked to the callback function
    const modalObserver = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    modalObserver.observe(targetNode, config);
}

/**
 * Sets the target to customize and the selected customizations
 * @param {Array} selectedCustomizations - customizations to be executed
 * @returns {void}
 */
function customizeModal(selectedCustomizations) {
    const personalizeModal = document.querySelector(
        '.modal-pdp-personalization__configurator.in'
    );
    customize(personalizeModal, selectedCustomizations);
}

module.exports = {
    customizeModal: customizeModal
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 @class app.product
 */
(function (app, $) {
	var $cache;
	var entryflag = true;
	var is360ImgsCashed = false;
	var cachedSwatchColor = {};
	var isRotating = false;
	var _i = 0;
	var _x = 0;
	var _isApplePay = false;
	/*************** app.product private vars and functions ***************/

	/**
	 * @private
	 * @function
	 * @description Loads product's navigation on the product detail page
	 */




	function loadProductNavigation() {
		var pidInput = $cache.pdpForm.find("input[name='pid']").last();
		var navContainer = $("#product-nav-container");
		// if no hash exists, or no pid exists, or nav container does not exist, return
		if (window.location.hash.length <= 1 || pidInput.length===0 || navContainer.length===0) {
			return;
		}

		var pid = pidInput.val();
		var hashParams = window.location.hash.substr(1);
		if (hashParams.indexOf("pid="+pid) < 0) {
			hashParams+="&pid="+pid;
		}

		var url = app.urls.productNav+(app.urls.productNav.indexOf("?") < 0 ? "?" : "&")+hashParams;
		app.ajax.load({url:url, target: navContainer});
	}

	/**
	 * @private
	 * @function
	 * @description Creates product recommendation carousel
	 */
	function loadRecommendations() {
		/* var carousel = $("#carousel-recomendations");
		if(!carousel || carousel.length === 0 || carousel.children().length === 0) {
			return;
		}

		carousel.jcarousel(app.components.carouselSettings); */

	}

	/**
	 * @function
	 * @description Sets the main image attributes and the href for the surrounding <a> tag
	 * @param {Object} atts Simple object with url, alt, title and hires properties
	 */
	function setMainImage(atts) {
		var imgZoom = $cache.pdpMain.find("a.main-image");
		var mainVideo = $cache.pdpMain.find(".main-video");
		if (imgZoom.length>0 && atts.hires && atts.hires!='' && atts.hires!='null') {
			imgZoom.attr("href", atts.hires);
		}

		imgZoom.find("img.primary-image").attr({
			"src" : atts.url,
			"alt" : atts.alt,
			"title" : atts.title
		});

		mainVideo.remove();
		if(atts.url.indexOf("_360_") == -1){
			imgZoom.show();
			var $imgContainer = $cache.pdpMain.find(".product-primary-image");
			$imgContainer.find('.main-360').hide();
		}else{
			imgZoom.hide();
			setMain360Image(atts);
		}
	}

	function setMain360Image(atts){
		var $imgContainer = $cache.pdpMain.find(".product-primary-image"),
		$imgZoom = $imgContainer.find(".main-image");


		if($imgContainer.find('.main-360').length === 0){
			$imgContainer.append($('<div />', {
				"class" : "main-360"
			}).append($('<img/>',{
				"loading": "lazy",
				"src": atts.url,
				"class" : "img-responsive",
				"alt": "360 product image"
			})).append($('<div />',{
				"class" : "rotating-icon"
			})).append($('<div />',{
				"class" : "rotationButtons"
			}))
			);
		}else{
			$imgContainer.find('.main-360').show();
		}
		$(".rotating-icon").html('<div class="spinner1" ><div class="curve_top_left"></div><div class="curve_bottom_right"></div><div class="curve_top_right"></div><div class="curve_bottom_left"></div><div class="center_circle"></div></div>');
		$('.rotationButtons').html('<button id="rotateLeft" style="margin-right: 10px;"><i class="icon-angle-left"></i></button><button id="autorotate" style="margin-right: 10px;"><i class="icon-degrees"></i></button><button id="rotateRight"><i class="icon-angle-right"></i></button>');
		$('.rotationButtons').css("text-align","center");
		cache360Images(atts);
	}
	function cache360Images(atts){
		let selectedSwatchColor = $("#product-content .product-variations").data("current").color.value;
		_i = 0;
		if(cachedSwatchColor[selectedSwatchColor] === undefined){
			cachedSwatchColor[selectedSwatchColor] = [];
			var list = [];
			var list1 = [];
		    var src = atts.url;
			var ext = src.split('.').pop();
			var newSrc = src.substring(0,src.lastIndexOf(".")-2);
		    for (var i = 0; i < 36; i++) {
		        var img = new Image();
		        img.onload = function() {
		            var index = list.indexOf(this);
		            if (index !== -1) {
		                list.splice(index, 1);
		            }
		            var index1 = list1.indexOf(this);
		            $(".rotating-icon").css("background-color","rgba(255,255,255,.5)");
		            ;
		            $(".rotating-icon").css("width","100%");
		            $(".spinner1").css("display","block");
		           if(list.length <= 10){
		        	   $(".rotating-icon").css("background-color","transparent");

			            $(".rotating-icon").css("width","100%");
			            $(".spinner1").css("display","none");
		           }
		           cachedSwatchColor[selectedSwatchColor].push(index1);
		           cachedSwatchColor[selectedSwatchColor].sort(function(a, b){return a-b});
		        }
		        list.push(img);
		        list1.push(img);
		        img.src = newSrc + pad(i, 2) +"."+ ext;
		        $(img).css("display","none");
		       $(img).appendTo($("body"));

		    }

			var interval = setInterval(function () {
	    	   $(".rotating-icon").css("background-color","transparent");

	           $(".rotating-icon").css("width","100%");
	           $(".spinner1").css("display","none");
	           clearInterval(interval);
			},10000);

		    is360ImgsCashed = true;

		}else{
			$(".rotating-icon").css("background-color","transparent");

			$(".rotating-icon").css("width","100%");
			$(".spinner1").css("display","none");

		}


	}
	function pad(number, length) {
		number = number % 36;
	    var str = '' + number;
	    while (str.length < length) {
	        str = '0' + str;
	    }
	    return str;
	}
	/**
	 * @function
	 * @description Sets the main image  to a video
	 * @param {Object} atts Simple object with url and source properties
	 */
	function setMainVideo(atts) {
		var $imgContainer = $cache.pdpMain.find(".product-primary-image"),
			$imgZoom = $imgContainer.find(".main-image"),
			$video;

		//append sibling video div if it doesn't exist
		if($imgContainer.find('.main-video').length === 0){
			$imgContainer.append($('<div />', {
				"class" : "main-video embed-responsive embed-responsive-16by9"
			}));
		}

		if(atts.source === 'youtube'){
			$video = $("<iframe />", {
				"src" : atts.url,
				"allowfullscreen" : "true",
				"class" :  "embed-responsive-item"
			});

			$cache.pdpMain.find('.main-video').html($video).show();
		}

		$imgZoom.hide();
	}
	/**
	 * @function
	 * @description helper function for swapping main image on swatch hover
	 * @param {Element} element DOM element with custom data-lgimg attribute
	 */
	function swapImage(element) {
		var lgImg = $(element).data("lgimg");
        if (lgImg) {
			var newImg = $.extend({}, lgImg);
			var imgZoom = $cache.pdpMain.find("a.main-image");
			var mainImage = imgZoom.find("img.primary-image");
			// store current image info
			lgImg.hires = imgZoom.attr("href");
			lgImg.url = mainImage.attr("src");
			lgImg.alt = mainImage.attr("alt");
			lgImg.title = mainImage.attr("title");
			// reset element's lgimg data attribute
			$(element).data(lgImg);
			// set the main image
			setMainImage(newImg);
        }
	}


	/**
	 * @function
	 * @description Enables the zoom viewer on the product detail page
	 */
	function loadZoom() {
		if(app.quickView.isActive() || !app.zoomViewerEnabled || !app.isDesktopBreakpoint()) { return; }

		//zoom properties
		var options = {
			zoomType: 'standard',
			alwaysOn : 0, // setting to 1 will load load high res images on page load
			zoomWidth : 600,
			zoomHeight : 500,
			position:'right',
			preloadImages: 0, // setting to 1 will load load high res images on page load
			xOffset: "105%",
			yOffset: 0,
			showEffect : 'show',
			hideEffect: 'hide'
		};

		// Added to prevent empty hires zoom feature (if images don't exist)
		var mainImage = $cache.pdpMain.find("a.main-image");
		var hiresImageSrc = mainImage.attr("href");
		if( hiresImageSrc && hiresImageSrc != '' && hiresImageSrc.indexOf('noimagelarge')<0 ) {
			mainImage.removeData("jqzoom").jqzoom(options);
		}
	}
	/**
	 * @function
	 * @description replaces the images in the image container. for example when a different color was clicked.
	 */
	function replaceImages() {
		var newImages = $("#update-images");
		var imageContainer = $cache.pdpMain.find("div.product-image-container");

		if (imageContainer.length) {
			imageContainer.html(newImages.html());
			newImages.remove();
			setMainImageLink();
			loadZoom();
		}
	}
	/**
	 * @function
	 * @description Adds css class (image-zoom) to the main product image in order to activate the zoom viewer on the product detail page.
	 */
	function setMainImageLink() {

		if (app.quickView.isActive() || app.isMobileUserAgent() || !app.isDesktopBreakpoint()) {
			$cache.pdpMain.find("a.main-image").removeAttr("href");
		}
		else {
			$cache.pdpMain.find("a.main-image").addClass("image-zoom");
		}
	}
	/**
	 * @function
	 * @description Removes css class (image-zoom) from the main product image in order to deactivate the zoom viewer on the product detail page.
	 */
	function removeImageZoom() {
		$cache.pdpMain.find("a.main-image").removeClass("image-zoom");
	}
	function klarnaLoad() {
		window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
		window.KlarnaOnsiteService.push({eventName: 'refresh-placements'});
	}
	/**
	 * @private
	 * @function
	 * @description Initializes the DOM of the product detail page (images, reviews, recommendation and product-navigation).
	 */
	function initializeDom() {

		if(typeof($("#linkedProducts.accessoryProducts")) != 'undefined'){
			if($("#linkedProducts.accessoryProducts").children().length > 2){
				$(".scroll_control.accessoryProducts").show();
			}else{
				$(".scroll_control.accessoryProducts").hide();
			}
		}
		if(typeof($("#linkedProducts.relatedProducts")) != 'undefined'){
			if($("#linkedProducts.relatedProducts").children().length > 2){
				$(".scroll_control.relatedProducts").show();
			}else{
				$(".scroll_control.relatedProducts").hide();
			}
		}

		$('#scrollLeft_related').click(function() {
			  event.preventDefault();
			  $(this).parent().siblings(".tiles-container").animate({
			    scrollLeft: "-=200px"
			  }, "slow");
			});

		 $('#scrollRight_related').click(function() {
		  event.preventDefault();
		  $(this).parent().siblings(".tiles-container").animate({
		    scrollLeft: "+=200px"
		  }, "slow");
		});
		 $('#scrollLeft_accessary').click(function() {
			  event.preventDefault();
			  $(this).parent().siblings(".tiles-container").animate({
			    scrollLeft: "-=200px"
			  }, "slow");
			});

		 $('#scrollRight_accessary').click(function() {
		  event.preventDefault();
		  $(this).parent().siblings(".tiles-container").animate({
		    scrollLeft: "+=200px"
		  }, "slow");
		});

		if($('#pwrwritediv').length > 0) {
			var options = $.extend(true, {}, app.dialog.settings, {
				autoOpen : true,
				height : 750,
				width : 650,
				dialogClass : 'writereview',
				title : 'Product Review',
				resizable : false
			});

			app.dialog.create({
				target : app.ui.reviewsContainer,
				options : options
			});
		}

		loadRecommendations($cache.container);
		loadProductNavigation();
		setMainImageLink();

		if ($cache.productSetList.length>0) {
			var unavailable = $cache.productSetList.find("form").find("button.add-to-cart[disabled]");
			if (unavailable.length > 0) {
				$cache.addAllToCart.attr("disabled", "disabled");
				$cache.addToCart.attr("disabled", "disabled"); // this may be a bundle

			}
		}

		app.tooltips.init();
		klarnaLoad();
	}
	/**
	 * @private
	 * @function
	 * @description Initializes the cache on the product detail page.
	 */
	function initializeCache($qvCache) {
		$cache = {};
		$cache.productId = $("#pid");
		$cache.pdpMain = $qvCache || $('.product-detail');//$("#pdpMain");
		$cache.productContent = $cache.pdpMain.find("#product-content");
		$cache.thumbnails = $cache.pdpMain.find("#thumbnails");
		$cache.bonusProductGrid = $(".bonusproductgrid");
		$cache.imageContainer = $cache.pdpMain.find(".product-primary-image");
		$cache.productSetList = $("#product-set-list");
		$cache.addToCart = $cache.pdpMain.find("#add-to-cart");
		$cache.addAllToCart = $cache.pdpMain.find("#add-all-to-cart");

		$cache.detailContent = $cache.pdpMain.find("div.detail-content");
		$cache.pdpForm = $cache.pdpMain.find("form.pdpForm");
		$cache.swatches = $cache.pdpMain.find("ul.swatches");
		$cache.mainImageAnchor = $cache.imageZoom = $cache.imageContainer.find("a.main-image");
		$cache.mainImage = $cache.mainImageAnchor.find("img.primary-image");
	}


	/**
	 * @private
	 * @function
	 * @description This function is written to display promotion end date as a timer
	 */
	function updateDateVar(){
		var austDay = new Date();
		if( $('.promo-date').length != 0){
			var testData = JSON.parse( $('.promo-date').text() );
			austDay = new Date(parseInt(testData.timerYear), parseInt(testData.timerMonth), parseInt(testData.timerDate), parseInt(testData.timerHour), parseInt(testData.timerMin), parseInt(testData.timerSec));
			var austDayVar =  new Date(austDay);
			var nowTime = new Date();
			var nowTimeGmt = new Date(nowTime.valueOf() + nowTime.getTimezoneOffset() * 60000);
			var seconds = (austDayVar - nowTimeGmt)/1000;
			seconds = Math.floor(seconds);
			var minutes = seconds/60;
				seconds = seconds%60;
			 	minutes = Math.floor(minutes);
			var hours = minutes/60;
				minutes = minutes%60;
			 	hours = Math.floor(hours);
			var days = hours / 24;
				hours = hours%24;
				days = Math.floor(days);

				 $("#daysVar").text(days);
				 $("#hoursVar").text(hours);
				 $("#minutesVar").text(minutes);
				 $("#secondsVar").text(seconds);
				 if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
					 $("#defaultCountdown").css("display","none");
				 }
				 else{
					 setTimeout(updateDateVar, 1000);
				 }
		}
	}

	/**
	 * @private
	 * @function
	 * @description Triggers events when moving in/out of breakpoints.
	 */
	/* function initializeBreakpointListener() {
		enquire.register(app.storefront.inflections.enquire.md, {
			match: function() {
			},
			unmatch: function() {

			}
		});
	} */

	/**
	 * @private
	 * @function
	 * @description Initializes events on the product detail page for the following elements:<br/>
	 * <p>availability message</p>
	 * <p>add to cart functionality</p>
	 * <p>images and swatches</p>
	 * <p>variation selection</p>
	 * <p>option selection</p>
	 * <p>send to friend functionality</p>
	 */
	function initializeEvents() {
		$(document).on('click','#rotateRight',function(){
			if (isRotating) {
				clearInterval(intervall);
				$("#autorotate").find("i").attr("class","icon-degrees");
				  isRotating = false;
			}
			var maxTime = 500;
			var time = 0;
			var interval = setInterval(function () {

				var src = $(".main-360 img")[0].src;
				var ext = src.split('.').pop();
				var newSrc = src.substring(0,src.lastIndexOf(".")-2);
				let right= false;
				let selectedSwatchColor = $("#product-content .product-variations").data("current").color.value;

				var imageNumber = src.substring(src.lastIndexOf(".")-2,src.lastIndexOf("."));

				_i--;
				if(_i == -1){
					_i = 35;
				}

				right = true;


				while(cachedSwatchColor[selectedSwatchColor].indexOf(_i) == -1){
					if(right){

						_i--;
						if(_i == -1){
							_i = 35;
						}

					}
				}
				$("#360rotaterange").prop("value",_i+1);
				$($(".main-360 img")[0]).attr("src",newSrc + pad(_i, 2) +"."+ ext);
				if (time > maxTime) {
				  clearInterval(interval);
				  return;
				}
				time += 100;

			}, 150);
		})
		var intervall;
		$(document).on('click','#autorotate',function(){
			if (isRotating) {
				clearInterval(intervall);
				$("#autorotate").find("i").attr("class","icon-degrees");
				  isRotating = false;
				  return;
			}


				  intervall = setInterval(function () {
					$("#autorotate").find("i").attr("class","icon-pause2");
					isRotating = true;
					var src = $(".main-360 img")[0].src;
					var ext = src.split('.').pop();
					var newSrc = src.substring(0,src.lastIndexOf(".")-2);
					let right= false;
					let selectedSwatchColor = $("#product-content .product-variations").data("current").color.value;

					var imageNumber = src.substring(src.lastIndexOf(".")-2,src.lastIndexOf("."));

					_i--;
					if(_i == -1){
						_i = 35;
					}

					right = true;


					while(cachedSwatchColor[selectedSwatchColor].indexOf(_i) == -1){
						if(right){

							_i--;
							if(_i == -1){
								_i = 35;
							}

						}
					}
					$("#360rotaterange").prop("value",_i+1);
					$($(".main-360 img")[0]).attr("src",newSrc + pad(_i, 2) +"."+ ext);



				}, 150);





		})
		$(document).on('click','#rotateLeft',function(){
			if (isRotating) {
				clearInterval(intervall);
				$("#autorotate").find("i").attr("class","icon-degrees");
				  isRotating = false;
			}
			var maxTime = 500;
			var time = 0;
			var interval = setInterval(function () {

				var src = $(".main-360 img")[0].src;
				var ext = src.split('.').pop();
				var newSrc = src.substring(0,src.lastIndexOf(".")-2);
				let right= false;
				let selectedSwatchColor = $("#product-content .product-variations").data("current").color.value;

				var imageNumber = src.substring(src.lastIndexOf(".")-2,src.lastIndexOf("."));

				_i++;
				if(_i == 36){
					_i = 0;
				}

				right = false;


				while(cachedSwatchColor[selectedSwatchColor].indexOf(_i) == -1){
					if(!right){

						_i++;
						if(_i == 36){
							_i = 0;
						}

					}
				}
				$("#360rotaterange").prop("value",_i+1);
				$($(".main-360 img")[0]).attr("src",newSrc + pad(_i, 2) +"."+ ext);
				if (time > maxTime) {
				  clearInterval(interval);
				  return;
				}
				time += 100;

			}, 150);
		})

		$(document).on("click",".personalized-custom__recipe__image a", function(){
			var recipe = $(this).data('recipe');
			var customPid = $(this).attr('data-pid');
			$(".js-specs-sku-id").text(customPid);
			var container = document.getElementsByClassName('personalization-media-item');
			for(var i =0; i < container.length; i++) {
				if (`media-${recipe}` === container[i].id && container[i].attributes['style'].value === 'display: flex;'){
					container[i].attributes['style'].value = 'display: flex;'
				}
			}
			var productInventory = app.product.spectrumGetPriceAndInventory($(this).data("pid"));
			productInventory = JSON.parse(productInventory)[$(this).data("pid")].availableCount; 
			if(!$(".add-to-cart.btn.btn-lg.btn-primary").hasClass("d-none")) {
				$(".add-to-cart.btn.btn-lg.btn-primary").addClass("d-none");
				$("#pz-add-to-cart").removeClass("d-block");
				$("#pz-add-to-cart").addClass("d-block");
			}
			if($("#pz-add-to-cart").is(':disabled')){
				$("#pz-add-to-cart .wrapper span").html($("#pz-add-to-cart").val());
				$("#pz-add-to-cart").prop('disabled', false)
			}
			if(productInventory == "0"){
				$("#pz-add-to-cart .wrapper span").html($("#pz-add-to-cart").data("soldout"));
				$("#pz-add-to-cart").prop('disabled', true);
			}else {
				$("#pz-add-to-cart .wrapper span").html($("#pz-add-to-cart").data("addtocart"));
				$("#pz-add-to-cart").prop('disabled', false);
			}
			$('.pz-add-to-cart-error').addClass('d-none');
		})

		$(document).on("mousedown",".rotating-icon", function(){
			$(this).addClass('grabbing');
			var interval;

			$(this).mousemove(function(e){

				var src = $(".main-360 img")[0].src;
				var ext = src.split('.').pop();
				var newSrc = src.substring(0,src.lastIndexOf(".")-2);
				let right= false;
				let selectedSwatchColor = $("#product-content .product-variations").data("current").color.value;

				var imageNumber = src.substring(src.lastIndexOf(".")-2,src.lastIndexOf("."));

					if(e.pageX - 12 > _x){

						_i--;
						if(_i == -1){
							_i = 35;
						}
						_x = e.pageX + 12;
						right = true;

					}else if(e.pageX + 12 < _x){
						_i++;
						if(_i == 36){
							_i = 0;
						}
						_x = e.pageX - 12;

						right = false;
					}
					while(cachedSwatchColor[selectedSwatchColor].indexOf(_i) == -1){

						if(!right){

							_i++;
							if(_i == 36){
								_i = 0;
							}

						}
						else if(right){

							_i--;
							if(_i == -1){
								_i = 35;
							}

						}

					}

					$("#360rotaterange").prop("value",_i+1);
					$($(".main-360 img")[0]).attr("src",newSrc + pad(_i, 2) +"."+ ext);

					//$(this).addClass('grabbing');

			})
			$(this).mouseup(function(){
				$(this).unbind('mousemove');
				$(this).removeClass('grabbing');


			})
			$(this).mouseout(function(){
				$(this).unbind('mousemove');
				$(this).removeClass('grabbing');

			})

			rotatingWithMouse();

		});
		app.product.initAddThis();
		if(app.enabledStorePickup){app.storeinventory.buildStoreList($cache.productContent.find('.product-number span').html());}
		// add or update shopping cart line item
		app.product.initAddToCart();
		initializePromoTimer();
		$cache.pdpMain.on("change keyup", "form.pdpForm input[name='Quantity']", function (e) {
			var availabilityContainer = $cache.pdpMain.find("div.availability");

			var val = e.target.value;
		    var max = 1000;
		    var maxLength = max.toString().length-1;
		    var newVal = val < max ? val : parseInt(val.toString().substring(0, maxLength));
			$(this).val(newVal);

			var isIncrease = true;
			if(parseInt($(this).val()) < parseInt($(this).attr("data-preval"))){
				isIncrease = false;
			}
			var productLimit = parseInt($(this).attr("data-productlimit"));
			if($(this).val() != "" && $(this).val() != "0" && parseInt($(this).val()) != parseInt($(this).attr("data-preval"))){
				quantityUpdateGTM(isIncrease);
				$(this).attr("data-preval",$(this).val());
			}
			var selectedQuantity=parseInt($(this).attr("data-preval"));
			var availableQuantity=parseInt($(this).attr("data-available"));
			var isPZView = $('.personalized-custom-content.active').length;
			var customPid;
			if(isPZView){
				customPid = $(".personalized-custom__recipe__image a.selected").attr('data-pid');
				if(!customPid && typeof window.spectrumLoadProducts != 'undefined' && window.spectrumLoadProducts[0]){
					customPid = window.spectrumLoadProducts[0];
				}
				if(!customPid){
					return;
				}
			}
			app.product.getAvailability(
				isPZView ? customPid : $("#pid").val(),
				$(this).val(),
				function (data) {
					if (!data) {
						$cache.addToCart.removeAttr("disabled");
						availabilityContainer.find(".availability-qty-available").html();
						availabilityContainer.find(".availability-msg").show();
						return;
					}else{
						var avMsg = null;
						var avRoot = availabilityContainer.find(".availability-msg").html('');

						// Look through levels ... if msg is not empty, then create span el
						if( data.levels.IN_STOCK> 0 ) {
							avMsg = avRoot.find(".in-stock-msg");
							if (avMsg.length===0) {
								avMsg = $("<p/>").addClass("in-stock-msg").appendTo(avRoot);
							}
							if( data.levels.PREORDER==0 && data.levels.BACKORDER==0 && data.levels.NOT_AVAILABLE==0 ) {
								// Just in stock
								avMsg.text(app.resources.IN_STOCK);
							} else {
								// In stock with conditions ...
								avMsg.text(data.inStockMsg);
							}
						}
						if( data.levels.PREORDER> 0 ) {
							avMsg = avRoot.find(".preorder-msg");
							if (avMsg.length===0) {
								avMsg = $("<p/>").addClass("preorder-msg").appendTo(avRoot);
							}
							if( data.levels.IN_STOCK==0 && data.levels.BACKORDER==0 && data.levels.NOT_AVAILABLE==0 ) {
								// Just in stock
								avMsg.text(app.resources.PREORDER);
							} else {
								avMsg.text(data.preOrderMsg);
							}
						}
						if( data.levels.BACKORDER> 0 ) {
							avMsg = avRoot.find(".backorder-msg");
							if (avMsg.length===0) {
								avMsg = $("<p/>").addClass("backorder-msg").appendTo(avRoot);
							}
							if( data.levels.IN_STOCK==0 && data.levels.PREORDER==0 && data.levels.NOT_AVAILABLE==0 ) {
								// Just in stock
								avMsg.text(app.resources.BACKORDER);
							} else {
								avMsg.text(data.backOrderMsg);
							}
						}
						if( data.inStockDate != '' ) {
							avMsg = avRoot.find(".in-stock-date-msg");
							if (avMsg.length===0) {
								avMsg = $("<p/>").addClass("in-stock-date-msg").appendTo(avRoot);
							}
							avMsg.text(String.format(app.resources.IN_STOCK_DATE,data.inStockDate));
						}
						if( data.levels.NOT_AVAILABLE> 0 ) {
							avMsg = avRoot.find(".not-available-msg");
							if (avMsg.length===0) {
								avMsg = $("<p/>").addClass("not-available-msg").appendTo(avRoot);
							}
							if( data.levels.PREORDER==0 && data.levels.BACKORDER==0 && data.levels.IN_STOCK==0 ) {
								avMsg.text(app.resources.NOT_AVAILABLE);
							} else {
								avMsg.text(app.resources.REMAIN_NOT_AVAILABLE);
							}
						}

						if(app.constants.IS_BR && productLimit < selectedQuantity && selectedQuantity <= availableQuantity){
							avMsg = avRoot.find(".in-stock-date-msg");
							if (avMsg.length===0) {
								avMsg = $("<p/>").addClass("not-available-msg").appendTo(avRoot);
							}
							avMsg.html(app.resources.PRODUCTLIMIT_EXTEND);
						}
						if(isPZView){
							$('#pdpMain .availability-predictiveShip, #pdpMain .stock-messaging').show();
						}
						return;
					}
					$cache.addToCart.attr("disabled", "disabled");
					availabilityContainer.find(".availability-msg").hide();
					var avQtyMsg = availabilityContainer.find(".availability-qty-available");
					if (avQtyMsg.length===0) {
						avQtyMsg = $("<span/>").addClass("availability-qty-available").appendTo(availabilityContainer);
					}
					avQtyMsg.text(data.inStockMsg).show();

					var avQtyMsg = availabilityContainer.find(".availability-qty-available");
					if (avQtyMsg.length===0) {
						avQtyMsg = $("<span/>").addClass("availability-qty-available").appendTo(availabilityContainer);
					}
					avQtyMsg.text(data.backorderMsg).show();
				});

		});

		// Add to Wishlist and Add to Gift Registry links behaviors
		$cache.pdpMain.on("click", "a.wl-action", function (e) {
			e.preventDefault();

			var data = app.util.getQueryStringParams($("form.pdpForm").serialize());
			if (data.cartAction) {
				delete data.cartAction;
			}
			var url = app.util.appendParamsToUrl(this.href, data);
			url = this.protocol + "//" + this.hostname + ((url.charAt(0)==="/") ? url : ("/"+url));
			window.location.href = url;
		});

		$cache.pdpMain.on("hover", "ul.swatches a.swatchanchor", function () {
			swapImage(this);
		});
		// productthumbnail.onclick()
		$cache.pdpMain.on("click", "img.productthumbnail", function () {
			var flag = 0;
			var lgImg = $(this).data("lgimg");

			// switch indicator
			$cache.pdpMain.find("div.product-thumbnails div.selected").removeClass("selected");
			$(this).closest(".thumb").addClass("selected");

			setMainImage(lgImg);
			// load zoom if not quick view
			if( lgImg.hires != '' && lgImg.hires.indexOf('noimagelarge')<0 ){
				setMainImageLink();
				loadZoom();
			} else {
				removeImageZoom();
			}
			if(flag == 0){
				gtmProductThumbClick();
				flag++;
				setTimeout(function(){ flag = 0; }, 1000);
			}
		});
		app.product.currentlyPlayedVideo;
		var player;
		$cache.pdpMain.on("click",".productmain-video-link",function(){
			var videoUrl =  $(this).attr("data-url") + "&autoplay=1&showinfo=0";
			var videoid =  $(this).attr("data-id");
			$(this).html("<div id='player-"+videoid+"'></div>").show();
			if(player)player.stopVideo();
			onYouTubeIframeAPIReady(videoid);
			$(this).find("span").remove();

		});


	      function onYouTubeIframeAPIReady(videoid) {
	        player = new YT.Player('player-'+videoid, {
	          height: '390',
	          width: '640',
	          videoId: videoid,
	          events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	          }
	        });

	      }


	      function onPlayerReady(event) {
	        event.target.playVideo();
	      }


	      var videoInterval;
	      function onPlayerStateChange(event) {
	        if (event.data == YT.PlayerState.PLAYING) {
	        	gtmPdpVideoplayed();
	        	var playerDuration = player.getDuration();
	        	var timeStamp = parseInt(playerDuration/4);
	        	var i = 0;
	        	videoInterval = setInterval(function(){
	        		timeStamp = parseInt(playerDuration/4);
	        		if(i == 0){
	        			gtmPdpVideoInteraction("watched 25%");
	        		}else if(i == 1){
	        			gtmPdpVideoInteraction("watched 50%");
	        		}else if(i == 2){
	        			gtmPdpVideoInteraction("watched 75%");
	        		}

	        		i++;
	        	},parseInt(timeStamp * 1000));
	        }else if(event.data == YT.PlayerState.PAUSED) {
	        	clearInterval(videoInterval);
	        	stopVideo();
	        }else if(event.data == YT.PlayerState.ENDED){
	        	clearInterval(videoInterval);
	        	gtmPdpVideoInteraction("watched 100%");
	        }

	      }
	      function stopVideo() {
	        player.stopVideo();
	      }
		$cache.pdpMain.on("click",".video-thumb",function(){
			// switch indicator
			$(".product-thumbnails").find("img.current-thumbnail").removeClass("current-thumbnail");
			$(".product-thumbnails").find(".current-thumbnail-parent").removeClass("current-thumbnail-parent");
			$(this).find("img").addClass("current-thumbnail");
			$(this).find("img").parent().addClass("current-thumbnail-parent");
			var dataId = $(this).data("id");
			var currentSelect = $(".video-carousel").find("[data-id='" + dataId + "']");
			var ariaIdforSlide = "";
			for(var i=0;i<currentSelect.length;i++){
				if($(currentSelect[i]).attr("aria-describedby") !== undefined){
					ariaIdforSlide = $(currentSelect[i]).attr("aria-describedby");
				}
			}
			ariaIdforSlide = ariaIdforSlide.replace('-control','');
			if(ariaIdforSlide != ""){
				var dta = $(".video-carousel").find("[id='" + ariaIdforSlide + "']");
				$(dta).click();
			}
			$("#video_containor_pdp").find(".slick-dots li")[$(this).closest(".slick-slide").data("slick-index")].click();
			productVideoThumbClick();
		});
		// dropdown variations
		$cache.pdpMain.on("change", ".product-options select", function (e) {
			var salesPrice = $cache.pdpMain.find("div.product-add-to-cart .price-sales");

			var selectedItem = $(this).children().filter(":selected").first();
			var combinedPrice = selectedItem.data("combined");
			salesPrice.text(combinedPrice);
		});

		// prevent default behavior of thumbnail link and add this Button
		$cache.pdpMain.on("click", ".thumbnail-link, .addthis_toolbox a", false);
		$cache.pdpMain.on("click", ".unselectable a", false);

		// handle drop down variation attribute value selection event
		$cache.pdpMain.on("change", ".variation-select", function(e){
			if ($(this).val().length===0) {return;}
			var qty = $cache.pdpForm.find("input[name='Quantity']").first().val(),
				listid = $cache.pdpForm.find("input[name='productlistid']").first().val(),
				productSet = $(this).closest('.subProduct'),
				params = {
					Quantity : isNaN(qty) ? "1" : qty,
					format : "ajax"
				};
			if( listid ) params.productlistid = listid;
			var target = (productSet.length > 0 && productSet.children.length > 0) ? productSet : $cache.productContent;
			var url = app.util.appendParamsToUrl($(this).val(), params);
			app.progress.show($cache.pdpMain);

			var hasSwapImage = $(this).find("option:selected").attr("data-lgimg") !== null;

			app.ajax.load({
				url: url,
				callback : function (data) {
					target.html(data);
					app.product.initAddThis();
					app.product.initAddToCart();
					initializePromoTimer();
					klarnaLoad();
					if (hasSwapImage) {
						replaceImages();
					}
					$("#update-images").remove();
					app.tooltips.init();
					if (global.load['slick-pdpImages-custom']) {
						global.load['slick-pdpImages-custom']();
					}
				}
			});
		});

		// swatch anchor onclick()
		$cache.pdpMain.on("click", "div.product-detail a[href].swatchanchor", function (e) {
			e.preventDefault();

			var el = $(this);
			var parentLi = el.parents('li');
			if( parentLi.hasClass('unselectable') || parentLi.hasClass('selected')) return;

			var hasSwapImage = (el.attr("data-lgimg") !== null);

			var anchor = el,
				qty = $cache.pdpForm.find("input[name='Quantity']").first().val(),
				listid = $cache.pdpForm.find("input[name='productlistid']").first().val(),
				productSet = $(anchor).closest('.subProduct'),
				params = {
					Quantity : isNaN(qty) ? "1" : qty,
					t : $.now()
				};
			if( listid ) params.productlistid = listid;

			var target = (productSet.length > 0 && productSet.children.length > 0) ? productSet : $cache.productContent;
			var url = app.util.appendParamsToUrl(this.href, params);
			app.progress.show($cache.pdpMain);

			app.ajax.load({
				url: url,
				callback : function (data) {
					target.html(data);
					app.product.initAddThis();
					app.product.initAddToCart();
					initializePromoTimer();
					klarnaLoad();
					if(app.enabledStorePickup){app.storeinventory.buildStoreList($cache.productContent.find('.product-number span').html());}
					if (hasSwapImage) {
						replaceImages();
					}
					app.tooltips.init();
					if (window.EXT_GLOBAL_SWITCH) {
						window.extendPDP();
					}
					if (global.load['slick-pdpImages-custom']) {
						global.load['slick-pdpImages-custom']();
					}
					if (global.load['slick-pdp-slider']) {
						global.load['slick-pdp-slider']();
					}
					if (global.load['slick-pdp-slider-jb']) {
						global.load['slick-pdp-slider-jb']();
					}
					if (window.getSapTime) {
						window.getSapTime();
					}

					window.app.product.loadRecipesFromCookie();
					$('body').trigger('extend:watchExtendProtection');
					setTimeout(function(){
						gtmPdpSwatchChanged();
					},1000);
					if($('.product-price').text().trim() != ''){
						$('.price-text-container').html($('.price-text-container_hidden').html());
						$('.price-mrp-text-container').html($('.price-mrp-text-container_hidden').html());
					}
					$(".product-price .suggested-price-label").text($(".footer_strikethrough_price_label").text().trim());
					if (global.load['slick-pdpImages-custom']) {
						global.load['slick-pdpImages-custom']();
					}
				}
	//		debugger;   $cache.productContent.find('.product-number span[itemprop="productID"]').text();

			});

			var lgimg = el.data("lgimg");

			var productIdVar = lgimg.skuID;
            var params1 = {
	                    cid : productIdVar+"_HA-US_EN_US_SLOT"
            };
            var url1 = app.util.appendParamsToUrl(app.urls.getpdpcontentforha, params1);

            app.ajax.load({
                url: url1,
                callback : function (data) {
                		if(data.indexOf("error-page-message") == -1) $(".content-asset-pdp").html(data);
                		else $(".content-asset-pdp").html("");
                    }
            });
		});

		$(document).on("click",".fixed-footer .buttonContainor button",function(){
			if($(this).hasClass("btn-disabled"))return;
			$("#add-to-cart").trigger("click");
		});

		jQuery(document).on('ready', function () {

			try{
				if (window.ApplePaySession) {
					var merchantIdentifier = 'merchant.com.harman.applepay.test';
					var promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
					promise.then(function (canMakePayments) {

						_isApplePay = true;
						$("#pdpMain").addClass("applePayActive");
						$(".back-to-top").addClass("applepay");

					}).catch(function(e){
						console.error(e);
					});

				}

			} catch(e) {
				console.log(e);
			}

		});


		$cache.productSetList.off('click').on("click", "div.product-set-item li a[href].swatchanchor, div.product-set-item li a[href].js-swatch-anchor", function (e) {
			e.preventDefault();
			// get the querystring from the anchor element
			var params = app.util.getQueryStringParams(this.search);
			var psItem = $(this).closest(".product-set-item");

			// set quantity to value from form
			var qty = psItem.find("form").find("input[name='Quantity']").first().val();
			params.Quantity = isNaN(qty) ? "1" : qty;
			params.formatAjax = true;
			var url = app.urls.getSetItem + "?" + $.param(params);

			// get container
			var ic = $(this).closest(".product-set-item");
			ic.load(url, function () {
				app.progress.hide();
				if ($cache.productSetList.find("button.add-to-cart[disabled]").length>0) {
					$cache.addAllToCart.attr("disabled","disabled");
					$cache.addToCart.attr("disabled","disabled"); // this may be a bundle
				}
				else {
					$cache.addAllToCart.removeAttr("disabled");
					$cache.addToCart.removeAttr("disabled"); // this may be a bundle
				}

				ic.find('.add-to-cart').unbind('click').on('click', setAddToCartHandler);
				app.tooltips.init();
				initSwatchesPS();
				updateProductSetPrice();
			});
		});

		$cache.addAllToCart.on("click", function (e) {
			e.preventDefault();
			var psForms = $cache.productSetList.find("form").toArray(),
				miniCartHtml = "",
				addProductUrl = app.util.ajaxUrl(app.urls.addProduct);

			// add items to cart
			function addItems() {
				var form = $(psForms.shift());
				var itemid = form.find("input[name='pid']").val();

				$.ajax({
					dataType : "html",
					url: addProductUrl,
					data: form.serialize()
				})
				.done(function (response) {
					// success
					miniCartHtml = response;
				})
				.fail(function (xhr, textStatus) {
					// failed
					var msg = app.resources.ADD_TO_CART_FAIL;
					$.validator.format(msg, itemid);
					if(textStatus === "parsererror") {
						msg+="\n"+app.resources.BAD_RESPONSE;
					} else {
						msg+="\n"+app.resources.SERVER_CONNECTION_ERROR;
					}
					window.alert(msg);
				})
				.always(function () {
					if (psForms.length > 0) {
						addItems();
					}
					else {
						app.quickView.close(form.closest('.modal'));
						app.minicart.show(miniCartHtml);
						app.util.scrollBrowser(0);
					}
				});
			}
			addItems();
			return false;
		});
		app.sendToFriend.initializeDialog($cache.pdpMain, "a.send-to-friend");

		$cache.pdpMain.find("button.add-to-cart[disabled]").attr('title', $cache.pdpMain.find(".availability-msg").html() );

		if($('.personalized-option').length) {
			$cache.pdpMain.on("mousedown", ".c-modal.modal--add-to-cart-modal", function(e){
				//Event to prevent focus shift in personalization configurator add-to-cart popup
				e.preventDefault();
			});
			$cache.pdpMain.on("click","li.personalized-option-original",function(e){
				e.preventDefault();
				const variantSelected = $('button.color-attribute').filter('.selected').length > 1;
				$(this).addClass('active');
				if(typeof $cache.personalizedPriceContent != 'undefined' && $cache.personalizedPriceContent.length && typeof $cache.productPriceContent != 'undefined' && $cache.productPriceContent.length){
					$(".product-price").hide();
					$cache.productPriceContent.insertAfter(".product-price");
					$(".product-price.personalization-price").remove();
					//$cache.productPriceContent.addClass("product-price");
					$cache.productPriceContent.show();

				}
				$('.personalized-content .personalized-original-content').addClass('active');
				$('#pdpMain .personalized-content .personalized-custom-content').removeClass('active');
				$('#pdpMain .personalized-option .personalized-option-original').addClass('active');
				$('#pdpMain .personalized-option .personalized-option-custom').removeClass('active');
				$('#pdpMain .personalization-media').addClass('hidden');
				$('#pdpMain .product-media').removeClass('hidden');
				$('#pdpMain .availability-predictiveShip, .ship-estimates-data').show();
				$('#pdpMain .whybuy.pdp-personalize').hide();
				$('#pdpMain .whybuy').not('.pdp-personalize').show();
				$('#pdpMain .promotion.promotion_custom').css('visibility','hidden');
				$('#pdpMain .promotion.promotion-regular').css('visibility','visible');
				if (variantSelected) {
					$('#pdpMain #pz-add-to-cart').hide();
					$('#pdpMain #add-to-cart').show();
				}
				$('#pdpMain .quantity-personalize').hide();
				$('#pdpMain .personalize-social-share').addClass('hidden');
				$(".pz-add-to-cart-error").addClass('hide');
				//update product purchase Limits
				if(app.preferences.productPurchaseLimitEnabled && window.innerWidth > 600){
					try{
						var qtyInput = $('.product-add-to-cart .inventory input#Quantity');
						if(qtyInput.length){
							if($(".product-limit").length){
								qtyInput.attr("data-available",$(".product-limit").attr("data-available"));
								var newLimit = parseInt($(".product-limit").attr("data-product-limit"));
								var availabilityLimit = parseInt(qtyInput.attr("data-available"));
								var combinedLimit=Math.min(newLimit,availabilityLimit);
								qtyInput.attr("data-product-limit",newLimit);
								if(qtyInput.val()>combinedLimit){
									qtyInput.val(combinedLimit);
									if(combinedLimit>0){
										qtyInput.attr("data-preval",combinedLimit);
									}
								}
								$(".product-limit-pz").hide();
								$(".product-limit").show();
							}
							qtyInput.trigger('change');
						}
					}
					catch(e){
						console.log("PZ qty Limit error", e);
					}
				}
				if(window.app.preferences.currentLocale=='pt_BR'){
					$("form.pdpForm .Installments").show();
					$("form.pdpForm .Installments.custom").hide();
					$("form.pdpForm .boleto-msg").show();
					$("form.pdpForm .boleto-msg.custom").hide();
				}
				$(this).blur();
				if($('.extend-container').length){
					if (window.extendPDP) {
						window.extendPDP();
					}
				}
				var isPZView = $('.personalized-option-custom.active').length;
                var pid = $('input#pid').val();
                if (!isPZView && pid && $(".product-number [itemProp='productID']").length) {
                    $(".product-number [itemProp='productID']").text(pid);
                }
				$(".slick-pdpImages-custom.slick-initialized:visible").slick("refresh");
				$('.js_v_slick_jb.slick-initialized:visible').slick('refresh');

			});
			$(window).resize(function(){
				createRecipeSlider();
			});
			function createRecipeSlider() {
				// TODO: fix this function
				// There are styling and initialization conflicts which prevent the slider from working properly either in desktop or mobile
				// Working assumption is the .slick-slider class is too general and being styled in pdp-v2.scss and _product.scss
				// See commit 3d1ffbdfaa7197c83f73f178c12f659fd9e0bd57 for details on what was removed from pdp-v2
				return;
			}
			$cache.pdpMain.on("click","li.personalized-option-custom",function(e){
				//$('#nav-tabContent').on("click",".personalized-option-custom a",function(e){
				e.preventDefault();
				//$(this).addClass('active');
				if(typeof $cache.personalizedPriceContent == 'undefined' && typeof $cache.productPriceContent == 'undefined'){
					$cache.personalizedPriceContent = $(".product-price").clone();
					$cache.productPriceContent=$(".product-price").clone();
					$cache.personalizedPriceContent.addClass("personalization-price").removeClass("product-price");
					var selectedsku = $(".personalized-custom__recipe__image a.selected").attr('data-pid') ? $(".personalized-custom__recipe__image a.selected").attr('data-pid') : window.spectrumLoadProducts[0];
					app.product.spectrumGetPriceAndInventory([selectedsku],{},function(response){
						$(".product-price").hide();
						var salePrice = response[selectedsku].salePrice;
						var listPrice = response[selectedsku].listPrice;
						$cache.personalizedPriceContent.find(".price-sales,.price").text(salePrice);
						$cache.personalizedPriceContent.find(".price-standard").text(listPrice);
						if(typeof response[selectedsku].onSale != 'undefined'){
							if(response[selectedsku].onSale == ""){
								$cache.personalizedPriceContent.find(".price-off-option").text("").hide();
								if(salePrice == listPrice){
									$cache.personalizedPriceContent.find(".price-strikethrough").text("");
								}
								else {
									$cache.personalizedPriceContent.find(".price-strikethrough").text(listPrice);
								}
								$cache.personalizedPriceContent.find(".originalPrice").text("");

							} else {
								if($cache.personalizedPriceContent.find(".price-discount-container .price-off-option").length==0) {
                                    var discountHtml=`<span class="price-standard price-strikethrough"></span>
                                                    <span class="price-off-option"></span>`;
									$cache.personalizedPriceContent.find(".price-discount-container").empty().append(discountHtml);
                                    $cache.personalizedPriceContent.find(".price-discount-container .price-standard").text(listPrice);
                                    $cache.personalizedPriceContent.find(".price-discount-container .price-off-option").text(response[selectedsku].onSale).show();
                                } else {
                                    $cache.personalizedPriceContent.find(".price-discount-container .price-off-option").text(response[selectedsku].onSale);
                                }
							}
						} else {
							salePrice = salePrice.replace(/[^0-9.-]+/g,"");
							listPrice = listPrice.replace(/[^0-9.-]+/g,"");
							if($cache.personalizedPriceContent.find(".price-off-option").length) {
								var replaceValue;
								if($cache.personalizedPriceContent.find(".price-off-option").attr('data-method')=='percent'){
									replaceValue = 100*(1-parseFloat(salePrice)/parseFloat(listPrice)).toFixed(2);
								} else if($cache.personalizedPriceContent.find(".price-off-option").attr('data-method')=='value'){
									replaceValue=(parseFloat(listPrice)-parseFloat(salePrice)).toFixed(2);
								}
								if(typeof replaceValue != 'undefined' & replaceValue != 0){
									var discountText = $cache.personalizedPriceContent.find(".price-off-option").text();
									var pzDiscountText = discountText.replace($cache.personalizedPriceContent.find(".price-off-option").attr('data-value'),replaceValue);
									$cache.personalizedPriceContent.find(".price-off-option").text(pzDiscountText);
								} else {
									$cache.personalizedPriceContent.find(".price-off-option").hide();
								}
							}
						}
						$cache.personalizedPriceContent.insertAfter(".product-price");
						$(".product-price").remove();
						$cache.personalizedPriceContent.addClass("product-price").addClass("personalization-price");
						if(window.app.preferences.currentLocale=='pt_BR'){

							if($("form.pdpForm .Installments.custom").length==0){
								var customInstallment = $("form.pdpForm .Installments").clone();
								customInstallment.addClass("custom").insertAfter($("form.pdpForm .Installments")).hide();
							}
							if($("form.pdpForm .boleto-msg.custom").length==0){
								var customBoleto = $("form.pdpForm .boleto-msg").clone();
								customBoleto.addClass("custom").insertAfter($("form.pdpForm .boleto-msg")).hide();
							}
							if(response[selectedsku].installmentData){
								$("form.pdpForm .Installments.custom").find(".promotion-callout p").text(response[selectedsku].installmentData);
								if($('.personalized-custom-content.active').length){
									$("form.pdpForm .Installments").hide();
									$("form.pdpForm .Installments.custom").show();
								}
							}
							if(response[selectedsku].boletoPrice){
								$("form.pdpForm .boleto-msg.custom").html(response[selectedsku].boletoPrice);
								if($('.personalized-custom-content.active').length){
									$("form.pdpForm .boleto-msg").hide();
									$("form.pdpForm .boleto-msg.custom").show();
								}
							}
						}
					});
				} else {
					$(".product-price").hide();
					$cache.personalizedPriceContent.insertAfter(".product-price");
					$(".product-price:not(.personalization-price)").remove();
					//$cache.personalizedPriceContent.addClass("product-price").addClass("personalization-price");
					$cache.personalizedPriceContent.show();
				}
				//update product purchase Limits
				if(app.preferences.productPurchaseLimitEnabled && window.innerWidth > 600){
					try {
						var qtyInput = $('.product-add-to-cart .inventory input#Quantity');
						var skuLimitSpanPz = $(".product-limit-pz");
						var skuLimitSpan = $(".product-limit");
						if(qtyInput.length && $(".product-limit-pz").length){
							qtyInput.attr("data-available",skuLimitSpanPz.attr("data-available"));
							if( skuLimitSpanPz.attr("data-product-limit")==999){
								qtyInput.attr("data-product-limit",999);
								skuLimitSpan.hide();
								skuLimitSpanPz.hide();
							} else {
								var newLimit = skuLimitSpanPz.attr("data-product-limit");
								var availabilityLimit = parseInt(qtyInput.attr("data-available"));
								var combinedLimit=Math.min(newLimit,availabilityLimit);
								qtyInput.attr("data-product-limit",newLimit);
								if(qtyInput.val()>combinedLimit){
									qtyInput.val(combinedLimit);
									if(combinedLimit>0){
										qtyInput.attr("data-preval",combinedLimit);
									}
								}
								var pzLimitText = skuLimitSpanPz.attr('data-limit-text').replace('null',skuLimitSpanPz.attr("data-product-limit"));
								skuLimitSpanPz.text(pzLimitText);
								skuLimitSpan.hide();
								skuLimitSpanPz.show();
							}
							qtyInput.trigger('change');
						} else {
							skuLimitSpan.hide();
						}
					}
					catch(e){
						console.log("PZ qty Limit error", e);
					}
				}
				$('#pdpMain .personalized-content .personalized-custom-content').addClass('active');
				$('#pdpMain .personalized-content .personalized-original-content').removeClass('active');
				$('#pdpMain .personalized-option .personalized-option-original').removeClass('active');
				$('#pdpMain .personalized-option .personalized-option-custom').addClass('active');
				$('#pdpMain .personalization-media').removeClass('hidden');
				$('#pdpMain .product-media').addClass('hidden');
				$('#pdpMain .availability-predictiveShip, .ship-estimates-data, #pdpMain .stock-messaging').hide();
				$('#pdpMain .whybuy').not('.pdp-personalize').hide();
				$('#pdpMain .whybuy.pdp-personalize').show();
				$('#pdpMain .promotion.promotion_custom').css('visibility','visible');
				$('#pdpMain .promotion.promotion-regular').css('visibility','hidden');
				$('#pdpMain #add-to-cart').hide();
				$('#pdpMain #pz-add-to-cart').show().removeClass('hidden');
				$('#pdpMain .quantity-personalize').show();
				$('#pdpMain .personalize-social-share').removeClass('hidden');
				$(this).blur();
				createRecipeSlider();
				checkCustomExtendOffer();
				var isPZView = $('.personalized-option-custom.active').length;
                var customPid = $(".personalized-custom__recipe__image a.selected").attr('data-pid');
				$(".js-specs-sku-id").text(customPid);
                if (isPZView && customPid && $(".product-number [itemProp='productID']").length) {
                    $(".product-number [itemProp='productID']").text(customPid);
                }
				if($('.personalized-custom-content.active').length && window.app.preferences.currentLocale=='pt_BR'){
					$("form.pdpForm .Installments").hide();
					$("form.pdpForm .Installments.custom").show();
					$("form.pdpForm .boleto-msg").hide();
					$("form.pdpForm .boleto-msg.custom").show();
				}
			});
			$cache.pdpMain.on("click",".personalize-social-share .jbl-custom-buttons--share-icons-copy", function(e){
				e.preventDefault();
				if(!$("#pdpMain .personalized-custom__recipe__image a.selected").length){
					return;
				}
				var currentUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
				var spectrumShareUrl = "".concat(currentUrl, "?iscstm_redesign=true&viewRecipeId=").concat($("#pdpMain .personalized-custom__recipe__image a.selected").data("recipe")+"&sku=").concat($("#pdpMain .personalized-custom__recipe__image a.selected").data("pid"));
				if(navigator.clipboard){
					navigator.clipboard.writeText(spectrumShareUrl);
				} else {
                    var copyTextArea = document.createElement("textarea");
                    copyTextArea.value = spectrumShareUrl;
                    document.body.appendChild(copyTextArea);
                    copyTextArea.style.position = "fixed";
                    copyTextArea.style.top = -100;
                    copyTextArea.style.left = 0;
                    copyTextArea.focus();
                    copyTextArea.select();
                    document.execCommand("copy");
                    document.body.removeChild(copyTextArea);
				};
			});
			$cache.pdpMain.on("click",".personalized-original-content .personalized-custom__inspiration a, .personalized-custom-content .personalized-custom__inspiration a",function(e){
				//e.preventDefault();
				app.product.openDefaultPersonalizationModal($(this).attr('data-recipe'));
			});

			$cache.pdpMain.on("click",".customize-link-mobile",function(e){
				e.preventDefault();
				$("#pdpMain .personalized-custom-content .customizeLink").trigger("click");
			});

			$cache.pdpMain.on("click",".personalized-custom-content .customizeLink",function(e){
				e.preventDefault();
				app.product.openDefaultPersonalizationModal($(this).attr('data-currentrecipe'));

			});
			$cache.pdpMain.on("click", "#pz-add-to-cart-none", function(e) {
				e.preventDefault();
				if($(".personalized-custom__recipe .personalized-custom__recipe__image a.selected").length){
					$(".pz-add-to-cart-error").addClass('hide');
					app.product.customAddToCart(this);
				} else {
					$(".pz-add-to-cart-error").removeClass('hide');
				}
			});
			$cache.recipeImageGrid = $(".js-pdp-v2 .personalization-media-item.default-sku-image").clone();
			$cache.pdpMain.on("click",".personalized-custom__recipe__image a", function(e){
			//$('#nav-tabContent').on("click",".personalized-custom__recipe__image a", function(e){
				e.preventDefault();
				$(".pz-add-to-cart-error").addClass('hide');
				$('#pdpMain .personalized-custom-content .customizeLink, #pdpMain #pz-add-to-cart').attr("data-currentRecipe", $(this).data("recipe"));
				$cache.pdpMain.find(".personalized-custom__recipe__image a").removeClass('selected');
				$(this).addClass('selected');
				if($('.personalize-social-share').length){
					var jblEmailSubject= encodeURIComponent(app.resources.PZ_EMAIL_SUB.replace('location.host',location.host));
					var jblShareText= encodeURIComponent(app.resources.PZ_SHARE_TEXT);
					var currentUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
					var spectrumShareUrl = encodeURIComponent("".concat(currentUrl, "?iscstm_redesign=true&viewRecipeId=").concat($(this).data("recipe")+"&sku=").concat($("#pdpMain .personalized-custom__recipe__image a.selected").data("pid")));
					if($('.jbl-custom-buttons--share-icons-facebook').length){
						$('#pdpMain .personalize-social-share .jbl-custom-buttons--share-icons-facebook').get(0).href="https://www.facebook.com/sharer/sharer.php?u=".concat(spectrumShareUrl, "&t=").concat(jblShareText, "&ret=login");
					}
					if($('.jbl-custom-buttons--share-icons-twitter').length){
						$('#pdpMain .personalize-social-share .jbl-custom-buttons--share-icons-twitter').get(0).href="https://twitter.com/share?url=".concat(spectrumShareUrl,"&text=").concat(jblShareText);
					}
					if($('.jbl-custom-buttons--share-icons-email').length){
						$('#pdpMain .personalize-social-share .jbl-custom-buttons--share-icons-email').get(0).href="mailto:?subject=".concat(jblEmailSubject, "&body=").concat(spectrumShareUrl, "  : ").concat(jblShareText);
					}	
				}
				checkCustomExtendOffer();
				if(!$('#media-'+ $(this).attr("data-recipe")).length) {
					//append images to product media
					var recipeImageGrid = $cache.recipeImageGrid.clone()
					recipeImageGrid.css("display","flex");
					var selectedRecipeId = $(this).attr("data-recipe");
					recipeImageGrid.get(0).id='media-'+ $(this).attr("data-recipe");
					recipeImageGrid.attr('data-recipe-grid', $(this).attr("data-recipe"));
					recipeImageGrid.removeClass('default-sku-image');
					var pzMedia = $(".personalization-media");
					$cache.pdpMain.AllRecipesLoaded =false;
					var imageCount = recipeImageGrid.find('img').length;
					var imagesLoaded = 0;
					recipeImageGrid.find('img').each(function(index){
						var imgsrc = this.getAttribute('data-src');
						imgsrc= imgsrc.replace('recipeId',selectedRecipeId);
						this.src=imgsrc;
						this.onload = function(){
							imagesLoaded++;
							if(imagesLoaded == imageCount){
								$cache.pdpMain.AllRecipesLoaded = true;
								createRecipeSlider();
							}
						}
					});
					$(".personalization-media-item").hide();
					//Nota: cambiar despues de resolver ".personalization-media
					var heroGallery = $('.hero-gallery.-main');

					if (heroGallery.length && heroGallery.siblings('.personalization-media-item').length) {
							recipeImageGrid.insertAfter(heroGallery);
					} else {
						pzMedia.append(recipeImageGrid);
					}
				} else {
					$(".personalization-media-item").hide();
					$(`[data-recipe-grid='${$(this).attr("data-recipe")}']`).css("display","flex");
					$('#pdpMain .personalization-media').find('.personalization-media-item.slick-initialized:visible').slick('refresh');
				}
				var isPZView = $('.personalized-option-custom.active').length;
                if (isPZView && $(".product-number [itemProp='productID']").length) {
                    $(".product-number [itemProp='productID']").text($(this).attr('data-pid'));
                }
				//update product purchase limits for Pdp-v2 recipes
				if(app.preferences.productPurchaseLimitEnabled){
					if($(".product-limit").length && typeof $(this).attr('data-pid') != 'undefined' && $(this).attr('data-pid') != ""){
						app.product.spectrumGetPriceAndInventory([$(this).attr("data-pid")],{},function(response){
							try {
								if(typeof response.success != 'undefined' && !response.success){
									return;
								}
								var qtyInput = $('.product-add-to-cart .inventory input#Quantity');
								if(qtyInput.length  && window.innerWidth > 600){
									var skuLimitSpan = $(".product-limit");
									var skuLimitSpanPz = $(".product-limit-pz");
									var isPZView = $('.personalized-custom-content.active').length;
									if(!skuLimitSpanPz.length){
										skuLimitSpanPz = skuLimitSpan.clone();
										skuLimitSpanPz.removeClass("product-limit").addClass("product-limit-pz").hide();
										skuLimitSpan.after(skuLimitSpanPz);
									}
									if(typeof response[$(this).attr('data-pid')].availableCount != "undefined"){
										var availableCount = response[$(this).attr('data-pid')].availableCount;
										if(isPZView){
											qtyInput.attr("data-available", availableCount);
										}
										skuLimitSpanPz.attr("data-available",availableCount);
										if(typeof skuLimitSpan.attr("data-available") == 'undefined' || skuLimitSpan.attr("data-available")==""){
											skuLimitSpan.attr("data-available",qtyInput.attr("data-available"));
										}
									}
									if(response[$(this).attr('data-pid')].limit != null){
										var skuLimit = parseInt(response[$(this).attr('data-pid')].limit);
										var pzLimitText = skuLimitSpan.attr('data-limit-text').replace('null',skuLimit);
										skuLimitSpanPz.text(pzLimitText);
										skuLimitSpanPz.attr("data-product-limit",skuLimit);
										if(isPZView){
											skuLimitSpan.hide();
											var availabilityLimit = parseInt(qtyInput.attr("data-available"));
											var combinedLimit=Math.min(skuLimit,availabilityLimit);
											qtyInput.attr("data-product-limit", skuLimit);
											if(qtyInput.val()>combinedLimit){
												qtyInput.val(combinedLimit);
												if(combinedLimit>0){
													qtyInput.attr("data-preval",combinedLimit);
												}
											}
											skuLimitSpanPz.show();
											qtyInput.trigger('change');
										}
									} else {
										if(isPZView){
											skuLimitSpan.hide();
											qtyInput.attr("data-product-limit", 999);
											skuLimitSpanPz.attr("data-product-limit",999);
											skuLimitSpanPz.hide();
											qtyInput.trigger('change');
										} else {
											skuLimitSpan.show();
											skuLimitSpanPz.attr("data-product-limit",999);
											skuLimitSpanPz.hide();
										}
									}

								}
								var salePrice = response[$(this).attr('data-pid')].salePrice;
								var listPrice = response[$(this).attr('data-pid')].listPrice;
								$(".personalization-price.product-price").find(".price-sales,.price").text(salePrice);
								$(".personalization-price.product-price").find(".price-standard").text(listPrice);
								if(typeof response[$(this).attr('data-pid')].onSale != 'undefined'){
									if(response[$(this).attr('data-pid')].onSale == ""){
										$(".personalization-price.product-price").find(".price-off-option").text("").hide();
										if(salePrice == listPrice){
											$(".personalization-price.product-price").find(".price-strikethrough").text("");
										}
										else {
											$(".personalization-price.product-price").find(".price-strikethrough").text(listPrice);
										}
										$(".personalization-price.product-price").find(".originalPrice").text("");
										$(".personalization-price .price-discount-container").empty();
									} else {
										if($(".personalization-price .price-discount-container").find(".price-off-option").length==0) {
											var discountHtml=`<span class="price-standard price-strikethrough"></span>
															<span class="price-off-option"></span>`;
											$(".personalization-price .price-discount-container").empty().append(discountHtml);
											$(".personalization-price .price-discount-container").find(".price-standard").text(listPrice);
											$(".personalization-price .price-discount-container").show().find(".price-off-option").text(response[$(this).attr('data-pid')].onSale).show();
										} else {
											$(".personalization-price .price-discount-container").find(".price-standard").text(listPrice);
											$(".personalization-price .price-discount-container").show().find(".price-off-option").text(response[$(this).attr('data-pid')].onSale).show();
										}
										$(".personalization-price .price-discount-container").find(".price-off-option").text(response[$(this).attr('data-pid')].onSale);
									}
								}
								if(window.app.preferences.currentLocale=='pt_BR'){

									if($("form.pdpForm .Installments.custom").length==0){
										var customInstallment = $("form.pdpForm .Installments").clone();
										customInstallment.addClass("custom").insertAfter($("form.pdpForm .Installments")).hide();
									}
									if($("form.pdpForm .boleto-msg.custom").length==0){
										var customBoleto = $("form.pdpForm .boleto-msg").clone();
										customBoleto.addClass("custom").insertAfter($("form.pdpForm .boleto-msg")).hide();
									}
									if(response[$(this).attr('data-pid')].installmentData){
										$("form.pdpForm .Installments.custom").find(".promotion-callout p").text(response[$(this).attr('data-pid')].installmentData);
										if($('.personalized-custom-content.active').length){
											$("form.pdpForm .Installments").hide();
											$("form.pdpForm .Installments.custom").show();
										}
									}
									if(response[$(this).attr('data-pid')].boletoPrice){
										$("form.pdpForm .boleto-msg.custom").html(response[$(this).attr('data-pid')].boletoPrice);
										if($('.personalized-custom-content.active').length){
											$("form.pdpForm .boleto-msg").hide();
											$("form.pdpForm .boleto-msg.custom").show();
										}
									}
								}
							}
							catch(e){
								console.log("PZ qty Limit error", e);
							}
						}.bind(this));
					}
				}
			});
			$cache.pdpMain.on("click",".personalized-custom__recipe__add a, .personalization-design-link a, .personalized-original-content .customizeLink", function(e){
				e.preventDefault();
				$(this).parents('.personalized-custom__recipe').find(".personalized-custom__recipe__image a").removeClass('selected');
				app.product.openDefaultPersonalizationModal("");
			});
			$cache.pdpMain.on('click',".jbl-custom__integration-buttons--add-to-cart",function(e){
				e.preventDefault();
			});
			$cache.pdpMain.on('click',".modal--add-to-cart-modal-cta button",function(e){
				e.preventDefault();
				$(this).parents('.modal-pdp-personalization__configurator').modal('hide').data('bs.modal', null);
				delete window.recipeId;
				$('#pdpMain .personalized-custom-content .customizeLink, #pdpMain #pz-add-to-cart').attr("data-currentRecipe","");
			});
		}

		initSwatchesPS();
		$('body').trigger('extend:watchExtendProtection');
		$cache.pdpMain.on("change","#extend-checkbox input",function(){
			if(this.checked){
				$('#extend-offer').removeClass('hide');
			} else {
				$('#extend-offer').addClass('hide');
			}
		});
		function initSwatchesPS(){
			/* lazyload swatch images */
			$swatchesPS = $(".js-swatches");
			setTimeout(function(){
				$swatchesPS.find('li > a').each(function(){
					$data = JSON.parse($(this).attr('data-lgimg'));
					$(this).append('<img loading="lazy" src="' + $data.hires + '" style="display: none"/>');
				});
			}, 1000);

			$swatchesPS.find('li > a').off('mouseover').on('mouseover', function(e){
				e.preventDefault();
				$data = JSON.parse($(this).attr('data-lgimg'));

				$img = $(this).closest('.product-set-item').find('.dynamic-thumbnail-image > a > img');
				$img.attr('data-original-imgurl', $img.attr('src'));
				$img.attr('src', $data.hires);
			}).off('mouseleave').on('mouseleave', function(e){
				$img = $(this).closest('.product-set-item').find('.dynamic-thumbnail-image > a > img');
				if ($img.attr('data-original-imgurl')) {
					$img.attr('src', $img.attr('data-original-imgurl'));
				}
			});
		}
		function updateProductSetPrice() {
			var $prodSetPrice = $('.js-prodset-price');
			var $prodSetPriceStrikeThrough = $('.js-prodset-price-strikethrough');

			if ($prodSetPrice.length) {
				// check for promo price if item is not part of promotion
				var $priceRules = $('.price-rule[data-notpartofpromotion="true"]');

				var $items = $('.product-set-item');
				var $prices = $('#product-set-list span[itemprop="price"]');
				var $sumPrices = 0;
				$prices.each(function(e) {
					$sumPrices += parseFloat($(this).text());
				});
				if ($items.length > 0 && $prices.length == $items.length) {
					$prodSetPrice.removeClass('hidden');
				} else {
					$prodSetPrice.addClass('hidden');
				}
				if ($priceRules && $priceRules.length) {
					if ($prodSetPriceStrikeThrough && $prodSetPriceStrikeThrough.length) {
						$prodSetPriceStrikeThrough.addClass('hidden');
					}
					$prodSetPrice.text($prodSetPrice.text().replace(new RegExp(window.app.preferences.pdpPriceReplaceRegexp, 'g'), $sumPrices.toLocaleString(window.app.preferences.currentLocale.replace('_', ('-')), { minimumFractionDigits: 2 })));
				} else {
					var $salePrice = null;
					var $strikeThrough = null;
					var $promoPrice = parseFloat($('.price-rule').attr('data-promo-price'));

					if ($sumPrices > $promoPrice) {
						$salePrice = $('.price-rule').attr('data-promo-price').toLocaleString(window.app.preferences.currentLocale.replace('_', ('-')), { minimumFractionDigits: 2 });
						$strikeThrough = $sumPrices.toLocaleString(window.app.preferences.currentLocale.replace('_', ('-')), { minimumFractionDigits: 2 });
					} else {
						$salePrice = $sumPrices.toLocaleString(window.app.preferences.currentLocale.replace('_', ('-')), { minimumFractionDigits: 2 });
						$strikeThrough = $('.price-rule').attr('data-promo-price').toLocaleString(window.app.preferences.currentLocale.replace('_', ('-')), { minimumFractionDigits: 2 });
					}

					if (!$prodSetPriceStrikeThrough || $prodSetPriceStrikeThrough.length == 0) {
						$prodSetPriceStrikeThrough = $('<span class="price-standard price-strikethrough js-prodset-price-strikethrough hidden">' + $prodSetPrice.text().replace(new RegExp(window.app.preferences.pdpPriceReplaceRegexp, 'g'), $strikeThrough) + '</span>');
						$('.js-bundle-price').append($prodSetPriceStrikeThrough);
					} else {
						$prodSetPriceStrikeThrough.addClass('hidden');
					}

					$prodSetPrice.text($prodSetPrice.text().replace(new RegExp(window.app.preferences.pdpPriceReplaceRegexp, 'g'), $salePrice));
					$prodSetPriceStrikeThrough.text($prodSetPriceStrikeThrough.text().replace(new RegExp(window.app.preferences.pdpPriceReplaceRegexp, 'g'), $strikeThrough));

					if ($sumPrices > $promoPrice) {
						$prodSetPriceStrikeThrough.removeClass('hidden');
					}
				}
			}
		}
	}
	/**
	 * @private
	 * @function
	 * @description Event handler to handle the add to cart event
	 */
	function initializePromoTimer(){
		var austDay = new Date();
		if( $('#product-content').find('.promo-date').length != 0){
			var testData = JSON.parse( $('.promo-date').text() );
			austDay = new Date(parseInt(testData.timerYear), parseInt(testData.timerMonth), parseInt(testData.timerDate), parseInt(testData.timerHour), parseInt(testData.timerMin), parseInt(testData.timerSec));
			var austDayVar =  new Date(austDay);
			window.setTimeout(updateDateVar(),1000);
		}
	}

	function initMobilePromoTimer() {
		var interval = setInterval(function(){
			var $timerHolder = $('.js-promo-timer');
			if ($timerHolder.length) {
				$timerHolder.each(function() {
					$this = $(this);
					var $timer = null;
					try{
						var data = JSON.parse($this.attr('data-timer'));
						if ( data != null && Object.keys(data).length){
							$timer = new Date(parseInt(data.timerYear), parseInt(data.timerMonth), parseInt(data.timerDate), parseInt(data.timerHour), parseInt(data.timerMin), parseInt(data.timerSec));
						}
					} catch (e){
						consloe.log('Error while parsing JSON timer. Error: ' + e);
						$timer = new Date();
					}
					if($timer != null){
						var nowTime = new Date();
						var $current = new Date(nowTime.valueOf() + nowTime.getTimezoneOffset() * 60000);
						var $diff = $timer.getTime() - $current;

						if ( $diff > 0) {
							var days = Math.floor($diff / (1000 * 60 * 60 * 24));
							var hours = Math.floor(($diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
							var minutes = Math.floor(($diff % (1000 * 60 * 60)) / (1000 * 60));
							var seconds = Math.floor(($diff % (1000 * 60)) / 1000);

							$this.find('.js-promo-days').text(days);
							$this.find('.js-promo-hours').text(hours);
							$this.find('.js-promo-minutes').text(minutes);
							$this.find('.js-promo-seconds').text(seconds);

						} else {
							$this.css({ display: 'none' });
						}
					}
				});
			}
		}, 1000);
	}

	function initProp65(){
		if (window.ApplePaySession) {
			$(".prop_65_messaging").show();
		}else if(window.PaymentRequest) {
			// PaymentRequest API is not available - forwarding to legacy form based experience.
			   var samsung_marchant_name=  $('#samsung_merchant_name_minicart').val();
	        var samsung_productId=  $('#samsung_productId_minicart').val();
	        var samsung_supportedMethods=  $('#samsung_supportedMethods_minicart').val();

	        var supportedInstruments = [{
	             supportedMethods: [ samsung_supportedMethods ], // 'https://spay.samsung.com'
	             data: {
	             "version": "1",
	             "productId": samsung_productId, //Service id from partner portal
	             "allowedCardNetworks": ['mastercard','visa','amex'],
	             "merchantName": samsung_marchant_name, //Merchant name in partner portal
	             },
	             "isRecurring": false,
	             "billingAddressRequired": true,
	             "paymentProtocol": "PROTOCOL_3DS"
	             }];
	             var details = {
		                displayItems: [],
		                total: {
		                label: 'Total due',
		                amount: { currency: 'USD', value : '0.00' }
	               }
	             };
	             var options = {
	                        requestShipping: true,
	                        requestPayerEmail: true,
	                        requestPayerPhone: true,
	                        requestPayerName: true
	             };
	                        // Initialization
	            console.log("samsung pay button Initialization minicart:");
              //TO DO for samsung payment remove the comments
	            //var request = new PaymentRequest(supportedInstruments, details, options);

	            /*if (request.canMakePayment) {
	                request.canMakePayment().then(function(result) {
	             	   console.log("samsung pay button :"+result);
	             	   	  if (result) {
	                 	    $("#checkout-samsungpay-button-minicart").show();
	                 	    var caMessage = $(".prop_65_messaging");
	                 	    caMessage.show();
	             	   		}
	             	});
	             } else {
	          	   console.log( "This browser does not support ");
	             }*/
		}

	}
	function checkCustomExtendOffer() {
		if($('.extend-container').length){
			//Render extend tiles for customizable product
			var cookiesRecipes =[];
			cookiesRecipes = app.product.getCookiesReceipes("",window.spectrumMasterProduct[0]);
			var data;
			var recipeId= $(".personalized-custom__recipe .personalized-custom__recipe__image a.selected").attr("data-recipe");
			cookiesRecipes.forEach(function(item){
				var rawData = JSON.parse(item);
				if(recipeId==rawData.recipeId){
					data=rawData;
				}
			});
			var checkYourDesignActive = $('#pdpMain .personalized-custom-content .personalized-custom__recipe__image a.selected').length || $('#pdpMain .personalize-wrapper .personalized-custom-content.-active').length;
			if(typeof data != 'undefined' && typeof data.pid != 'undefined' && data.pid !="" && checkYourDesignActive){
				$('.product-add-to-cart input[name="extendCustomPid"]').val(data.pid);
				window.spectrumExtendPDP();
			}
		}
	}

	function setAddToCartHandler(e) {
		e.preventDefault();
		var form = $(this).closest("form");
		var qty = form.find("input[name='Quantity']");
		var pid=form.find("input[name='pid']");
		var isSubItem = $(this).hasClass("sub-product-item");


		var cartRedirect = $("#pdp-redirect-modal");
		if(cartRedirect!=null && cartRedirect.length >0){
			//e.preventDefault();
			$("#pdp-redirect-modal").modal('show');
		}

		if(qty.length === 0 || isNaN(qty.val()) || parseInt(qty.val(), 10) === 0) {
			qty.val("1");
		}

		if(!$.isEmptyObject(window.localStorage)){
			localStorage.setItem('AssistedSalesFormID', form.attr('id'));
		}
		if ($('.pt_product-details #extend-offer').length) {
			extendAddToCart(form);
			return;
		}
		var data = form.serialize();

		app.cart.update(data, function (response) {
			if (typeof (response) == 'object' && response.hasOwnProperty('success')) {
				let $warning = $('#' + response.showAddToCartModalMessage);
				let modal = $warning.modal({
					show: true,
					backdrop: 'static',
					keyboard: false
				});
			} else {
				let hiddenForceInput = form.find('#hiddenForceAddToCart');
				if (hiddenForceInput.length) {
					hiddenForceInput.remove();
				}
			}

			var uuid = form.find("input[name='uuid']");
			if (uuid.length > 0 && uuid.val().length > 0) {
				app.cart.refresh();
			}
			else {
				if (!isSubItem) {
					app.quickView.close(form.closest('.modal'));
				}

				// check SAP inventory availability
				var availabilityContainer = $cache.pdpMain.find("div.availability");
				var $container = availabilityContainer.find(".value");

				//var avRoot = availabilityContainer.find(".availability-msg");
				var showMiniCart = app.sap.checkAvailability(response, $container),
					$errorMsg = $(".minicart-error_msg");

				if ($errorMsg.length && $.trim($errorMsg.html())) {
					app.dialog.show({message: $errorMsg.html(), title: app.resources.SPAREPART_ERROR_TITLE});
				} else {
					//show the mini cart unless SAP availability is out of stock
					if (showMiniCart) {
						app.minicart.show(response);
					} else {
						var $button = $cache.pdpMain.find("#add-to-cart");
						$button.blur();
						$button.addClass("btn-disabled");
						$button.text(app.resources.SOLD_OUT);
						app.minicart.init();
					}
				}
			}
		});
	}

	function extendAddToCart(form) {
	    var EXT_PDP_UPSELL_SWITCH = window.EXT_PDP_UPSELL_SWITCH || undefined;
	    var extendComponent = window.Extend.buttons.instance('#extend-offer');

	    if (!extendComponent) {
	        addItemToCartHandler(form);
	        return;
	    }

	    var extendPlan = extendComponent.length ? extendComponent.getPlanSelection() : "";

	    if (extendPlan) {
	        form.append('<input class="extend-form-data" type="hidden" name="extendPlanId" value="' + extendPlan.planId + '" />');
	        form.append('<input class="extend-form-data" type="hidden" name="extendPrice" value="' + extendPlan.price + '" />');
	        form.append('<input class="extend-form-data" type="hidden" name="extendTerm" value="' + extendPlan.term + '" />');
	        addItemToCartHandler(form);
	        $('.extend-form-data').remove();
	    } else if (EXT_PDP_UPSELL_SWITCH) {
	        window.Extend.modal.open({
	            referenceId: $('.product-number span span').text().trim(),
	            onClose: function (plan) {
	                if (plan) {
	                    form.append('<input type="hidden" name="extendPlanId" value="' + plan.planId + '" />');
	                    form.append('<input type="hidden" name="extendPrice" value="' + plan.price + '" />');
	                    form.append('<input type="hidden" name="extendTerm" value="' + plan.term + '" />');
	                }
	                addItemToCartHandler(form);
	                $('.extend-form-data').remove();
	            }
	        });
	    }
	}
	function extendSpectrumAddToCart(data, extendComponent, callback) {
		var EXT_PDP_UPSELL_SWITCH = window.EXT_PDP_UPSELL_SWITCH || undefined;

	    var extendPlan = extendComponent.length ? extendComponent.getPlanSelection() : "";

	    if (extendPlan) {
			data.extendPlanId = extendPlan.planId;
			data.extendPrice = extendPlan.price;
			data.extendTerm = extendPlan.term;
			callback(data);
	    } else if (EXT_PDP_UPSELL_SWITCH) {
	        window.Extend.modal.open({
	            referenceId: $('.product-add-to-cart input[name="extendCustomPid"]').val(),
	            onClose: function (plan) {
	                if (plan) {
						data.extendPlanId = plan.planId;
						data.extendPrice = plan.price;
						data.extendTerm = plan.term;
					}
					callback(data);
	            }
	        });
	    }
	}

	// prevents creating request when user clicks enter on input in PDP form and adds products to cart
	$('.pdpForm').on('keypress', function (e) {
		if (e.which == 13) {
			var triggerBtn = $('.pdpForm .add-to-cart');
			var pzButton = $('.pdpForm .pz-add-to-cart');

			if (pzButton.length && !pzButton.hasClass('hidden') && pzButton.css('display') != 'none') {
				triggerBtn = pzButton;
			}

			triggerBtn.click();
			return false;
		}
	});

	function addItemToCartHandler(form) {
		var isSubItem = $(this).hasClass("sub-product-item");
		var data = form.serialize();
		app.cart.update(data, function (response) {
			if (typeof (response) == 'object' && response.hasOwnProperty('success')) {
				let $warning = $('#' + response.showAddToCartModalMessage);
				let modal = $warning.modal({
					show: true,
					backdrop: 'static',
					keyboard: false
				});
			} else {
				let hiddenForceInput = form.find('#hiddenForceAddToCart');
				if (hiddenForceInput.length) {
					hiddenForceInput.remove();
				}
			}

			var uuid = form.find("input[name='uuid']");
			if (uuid.length > 0 && uuid.val().length > 0) {
				app.cart.refresh();
			} else {
				// check SAP inventory availability
				var availabilityContainer = $cache.pdpMain.find("div.availability");
				var $container = availabilityContainer.find(".value");

				//var avRoot = availabilityContainer.find(".availability-msg");
				var showMiniCart = app.sap.checkAvailability(response, $container);

				//show the mini cart unless SAP availability is out of stock
				if(showMiniCart){
					app.minicart.show(response);
				} else {
					var $button = $cache.pdpMain.find("#add-to-cart");
					$button.blur();
					$button.addClass("btn-disabled");
					$button.text(app.resources.SOLD_OUT);
					app.minicart.init();
				}

				if (!isSubItem && showMiniCart) {
					app.quickView.close(form.closest('.modal'));
					if($(".modal-backdrop").length > 1)$($(".modal-backdrop")[0]).remove();
				}
			}
			initializeFixedPDPHeader();
		});
	}

	/*************** app.product public object ***************/
	app.product = {
		init : function ($qvCache) {
			initializeCache($qvCache);
			initializeDom();
			initializeEvents();
			// initProp65();
			// initializeBreakpointListener();
			loadZoom();
			this.initPDPRecommSlider();

			if(app.enabledStorePickup){
				app.storeinventory.init();
			}
			initMobilePromoTimer();
		},
		readReviews : function(){
			// $('.product-tabs').tabs('select','#tab4');
			$('body').scrollTop($('#tab4').offset().top);
		},
		preloadPDPImages : function(){
			var params = {
					Quantity : "1"
				};
			var swatches = $('ul.swatches li')
			for(var i=0; i < swatches.length; i++){
				if($(swatches[i]).hasClass('selected')){
					i++;
				}
				if($(swatches[i]).children('a').length > 0){
					if($(swatches[i]).children('a').data('lgimg')) {
						var url = $(swatches[i]).children('a').data('lgimg').url;
						var _alt = $(swatches[i]).children('a').data('lgimg').alt;
					}
				}

				$('<img loading="lazy" alt="'+_alt+'" style="display:none" src="'+url+'"/>').appendTo(swatches[i]);

			}

		},

		spectrumGetSiteIdentifier : function () {
			return 'JB';
		},

		spectrumGetPriceAndInventory : function (skus, options,callback) {
			//var sku1={price: "$99.99",inStock: true};
			//var sku2={price: "$126.99",inStock: true};
			//var productInventoryData = {sku1,sku2};
			//below two line to be remove
			//var skus =["JBLCLIP2BLKAM","V700NXTWHT","AKGN20LTBLK"];

			skus.toString();
			//var params = {type: "POST", dataType: "json", data: JSON.stringify(sku1)};
			var JSONObject=null;

			 $.ajax({
				url: app.util.appendParamsToUrl(app.urls.getProductInventoryPrice,{skus:skus.toString()}),
				async: false,
				success : function (data) {
					console.log(JSON.stringify(data));
					JSONObject=data;

					if(callback){
						callback(data);
					}
				}
			});

			return JSON.stringify(JSONObject);
		},
		customAddToCart : function($this){
			var cookiesRecipes =[];
			cookiesRecipes = app.product.getCookiesReceipes("",window.spectrumMasterProduct[0]);
			var data;
			var recipeId= $($this).attr('data-currentrecipe');
			cookiesRecipes.forEach(function(item){
				var rawData = JSON.parse(item);
				if(recipeId==rawData.recipeId){
					data=rawData;
				}
			})
			if(typeof data!='undefined'){
				data.pid=data.pid.replace("V2","");
				//data.Quantity = $('.product-add-to-cart #Quantity').val();
				data.Quantity = $('#quantity').val();
				function callback(data){
					app.cart.updateCustomProduct(data, function (response) {
						app.minicart.show(response);
					});
				}

				//Check and add Extend Warranty if it exists

				var extendComponent = false;
				if( window.EXT_GLOBAL_SWITCH && window.EXT_PDP_SWITCH) {
					extendComponent = window.Extend.buttons.instance('#extend-offer');
				}
				if (!extendComponent) {
					callback(data);
				} else {
					extendSpectrumAddToCart(data, extendComponent, callback);
				}
			}

		},

		appendCustomRecipeArray: function(customRecipes){
			$(".personalized-custom__recipe__image").remove();
			var imageDiv = document.createElement('div');
			imageDiv.className = "personalized-custom__recipe__image";
			var imageAnchor = document.createElement('a');
			imageAnchor.href = "#";
			var imageTag = document.createElement('img');
			var imageAlt= $(".personalized-custom__recipe__add").attr("data-alt");
			var imageTitle= $(".personalized-custom__recipe__add").attr("data-title");
			var imageSrc=  $(".personalized-custom__recipe__add").attr("data-src") ? $(".personalized-custom__recipe__add").attr("data-src") : "";
			if(customRecipes.length){
				customRecipes.forEach(function(data,index) {
          var jData = JSON.parse(data).imageUrl;
					var recipeId= JSON.parse(data).recipeId;
					var customPid = JSON.parse(data).pid;
					var recipeImageTag = imageTag.cloneNode();
					recipeImageTag.alt = imageAlt+" "+index;
					recipeImageTag.title = imageTitle+" "+index;
					recipeImageTag.src = imageSrc ? imageSrc.replace("recipeId",recipeId) : jData;
					var recipeImageAnchor = imageAnchor.cloneNode();
					recipeImageAnchor.setAttribute("data-recipe",recipeId);
					recipeImageAnchor.setAttribute("data-pid",customPid);
					recipeImageAnchor.append(recipeImageTag);
					var recipeImageDiv = imageDiv.cloneNode();
					recipeImageDiv.append(recipeImageAnchor);
					$(".personalized-custom__recipe").append(recipeImageDiv);
					if(index==customRecipes.length-1){
						$('.personalized-custom__recipe__image a[data-recipe='+recipeId+']').click();
					}
				});
			}
		},

		/**
		 * @function
		 * @description Spectrum custom product add to cart
		 */
		spectrumAddToCart : function(e,sku, newRecipeId, oldRecipeId, quantity, imageUrl, options) {
			e.preventDefault();
			var data = {
					  "pid": sku,
					  "recipeId": newRecipeId,
					  "oldRecipeId": oldRecipeId,
					  "Quantity": quantity,
					  "imageUrl":imageUrl,
					  "options": options,
					  "uuid":"",
					  "cartAction":"update"
					}
			console.log("pid :"+data.pid +" recipeId :"+data.recipeId);
			var personalizeRedesign = window.app.preferences.personalizeRedesign;
			var productInventory = app.product.spectrumGetPriceAndInventory(sku);
			productInventory = JSON.parse(productInventory)[sku].availableCount; 
			if(!$(".add-to-cart.btn.btn-lg.btn-primary").hasClass("d-none")) {
				$(".add-to-cart.btn.btn-lg.btn-primary").addClass("d-none");
				$("#pz-add-to-cart").removeClass("d-block");
				$("#pz-add-to-cart").addClass("d-block");
			}
			if(productInventory == "0"){
				$("#pz-add-to-cart .wrapper span").html($("#pz-add-to-cart").data("soldout"));
				$("#pz-add-to-cart").prop('disabled', true);
			}else {
				$("#pz-add-to-cart .wrapper span").html($("#pz-add-to-cart").data("addtocart"));
				$("#pz-add-to-cart").prop('disabled', false);
			}
			if(!personalizeRedesign){
				app.cart.updateCustomProduct(data, function (response) {
					app.minicart.show(response);
				});
			} else {
				//var recipeArray = ["YZWV6R32", "VYKJFZ8G", "TC5A2UHD", "2BDKYNBK"];
				//recipeArray.push(newRecipeId)
				var cookiesRecipes =[];
				cookiesRecipes = app.product.getCookiesReceipes(JSON.stringify(data), window.spectrumMasterProduct[0]);
				if(cookiesRecipes.length){
					$(".personalized-custom__blank").hide();
					$(".personalized-custom__recipe").show();
				} else {
					$(".personalized-custom__recipe").hide();
					$(".personalized-custom__blank").show();
				}
				app.product.appendCustomRecipeArray(cookiesRecipes);
				$(".incomingRecipeId").addClass("recipe-"+newRecipeId).removeClass("incomingRecipeId");
				$('#pdpMain .personalized-custom-content .customizeLink, #pdpMain #pz-add-to-cart').attr("data-currentRecipe",newRecipeId);
				$('.personalized-option-custom').click();
				$("#pdpMain .personalized-custom__recipe__image a[data-recipe="+newRecipeId+"]"+"").click();
			}
			$('#exampleModal').removeClass('show');
			$('.modal-backdrop').removeClass('d-none');
			$('#exampleModal').addClass('d-none');
			$('.modal-backdrop').addClass('d-none');
			$('#exampleModal').removeClass('d-block');
			$('body').removeClass('modal-open');
			$("#pdpMain > .modal.clone").remove();
			$('.incomingRecipeId').remove()
			$('#app').attr("id","spectrum-customizer");

			// Hardcoded removal of the .modal-backdrop. 
			// .modal-backdrop should be removed automatically as in SG implementation,
			// but this custom Spectrum implementation in SFRA
			// is already too complex to identify why two modals are created with two backdrops
			// and why these backdrops are not being removed automatically.
			// Here any .modal-backdrop is removed so other modals don't display them
			$('.modal-backdrop').remove();

			// if personalize action comes from PLP Tile button, redirect to PDP
			if($(".dynamic-update-product-container .customizeButton_container .plpcustomizeBtn, .product-tile .plpcustomizeBtn").length && window.spectrumRedirectUrl){
				var spectrumRedirectUrl = "".concat(window.spectrumRedirectUrl.split("?")[0], "?iscstm_redesign=true&viewRecipeId=").concat(newRecipeId).concat('&sku=',sku);
				window.location=spectrumRedirectUrl;
			}
		},

		loadRecipesFromCookie: function() {
			//Load user recipes from cookies
			if(window.app.preferences.personalizeRedesign && $('.personalized-option').length && typeof window.spectrumMasterProduct != 'undefined' && window.spectrumMasterProduct[0]){
				var cookiesRecipes =[];
				cookiesRecipes = app.product.getCookiesReceipes("",window.spectrumMasterProduct[0]);
				if(cookiesRecipes.length){
					$(".personalized-custom__blank").hide();
					app.product.appendCustomRecipeArray(cookiesRecipes);
				} else {
					$(".personalized-custom__recipe").hide();
				}
			}
		},

		getCookiesReceipes: function (newRecipeId,sku) {


			var cookieName = "receipeCookies"+sku;
			var cookieValue =null;
			var recipeArrayNew =[];
			var recipeLength = window.app.preferences.customRecipeLength;

			if(document.cookie){
				 var allCookieArray = document.cookie.split(';');
				  for(var i=0; i<allCookieArray.length; i++) {
					  var temp = allCookieArray[i].trim();
					  if (temp.indexOf(cookieName)==0){
							 cookieValue = allCookieArray[i].substr(allCookieArray[i].indexOf('=')+1);
					  }
				  }
			}
			if(cookieValue && cookieValue!=null) {
				var allRecepieValueArray =('},'+cookieValue+',{').split('},{');
				allRecepieValueArray.shift();
				allRecepieValueArray.pop();
				for(var i=0; i<allRecepieValueArray.length; i++) {
				   allRecepieValueArray[i] = '{'+allRecepieValueArray[i]+'}';
					recipeArrayNew.push(allRecepieValueArray[i]);
				}
			}

			//Create the Array
			if(newRecipeId!=""){
				recipeArrayNew.push(newRecipeId);
			    if(recipeArrayNew && recipeArrayNew != null && recipeArrayNew.length > 0){
					if(recipeArrayNew.length > recipeLength) {
						for(var i=recipeLength; i < recipeArrayNew.length; i++) {
							recipeArrayNew.shift();
						}
					}
				}
				console.log("recipeArrayNew :"+recipeArrayNew );
				$.removeCookie(cookieName, { path: '/' });
				document.cookie =cookieName+"="+ recipeArrayNew+';path=/;max-age='+60*24*60*60+';';
			}
			return recipeArrayNew;

		},

		openDefaultPersonalizationModal : function(itemid) {

			var $modalFrame = $('#pdpMain .modal-pdp-personalization .modal.clone').hide();
			var $modalCustom;
			if(typeof itemid== 'undefined' || itemid==""){
				var skuClass= "sku-"+window.spectrumLoadProducts[0];
				if(!$('#pdpMain').find('.'+skuClass).length){
					delete window.recipeId;
					var $skuModal = $modalFrame.clone().addClass("incomingRecipeId");
					$skuModal.find('.modal-content').attr('id', 'spectrum-customizer');
					$("#pdpMain").append($skuModal);
					var $modalCustom=$skuModal;
				} else {
					$modalCustom=$('#pdpMain').find('.'+skuClass).addClass("incomingRecipeId").removeClass(skuClass);
				}
			} else {
				var recipeClass = "recipe-"+itemid;
				if(!$('#pdpMain').find('.'+recipeClass).length){
					window.recipeId=[itemid];
					var $recipeModal = $modalFrame.clone().addClass("incomingRecipeId");
					$recipeModal.find('.modal-content').attr('id', 'spectrum-customizer');
					$("#pdpMain").append($recipeModal);
					var $modalCustom=$recipeModal;
				} else {
					$modalCustom=$('#pdpMain').find('.'+recipeClass).addClass("incomingRecipeId").removeClass(recipeClass);
				}
			}
			$modalCustom.addClass('modal-pdp-personalization__configurator');

			$modalCustom.removeData('bs.modal');
			//create a fresh modal
			$modalCustom.modal({
				show: true
			});
			var isIosSafari = /(iPad|iPhone|iPod)/g.test(navigator.platform) && (navigator.userAgent.indexOf('Safari') !== -1);
			if(isIosSafari){
				$('body').addClass("personalization-modal-open");
			}
			$modalCustom.on('loaded.bs.modal', function() {
				$modalCustom.off('loaded.bs.modal');
			});
			$modalCustom.on('hidden.bs.modal', function() {
				$(".add-to-cart-container").removeClass("pz-customizer-on");
				if(isIosSafari){
					$('body').removeClass("personalization-modal-open");
				}
				$modalCustom.off('hidden.bs.modal');
				var customizerScriptSrc = document.getElementById("spectrum-customizer-script").src;
				if(!customizerScriptSrc) {
					customizerScriptSrc = $('#spectrum-customizer-script').attr('data-src');
				}
				if(customizerScriptSrc){
					$.getScript(customizerScriptSrc);
				}
			});
			$(".add-to-cart-container").addClass("pz-customizer-on");
		},

		/**
		 * @function
		 * @description Loads a product into a given container div
		 * @param {Object} options An object with the following properties:</br>
		 * <p>containerId - id of the container div, if empty then global app.containerId is used</p>
		 * <p>source - source string e.g. search, cart etc.</p>
		 * <p>label - label for the add to cart button, default is Add to Cart</p>
		 * <p>url - url to get the product</p>
		 * <p>id - id of the product to get, is optional only used when url is empty</p>
		 */
		get : function (options) {
			var target = options.target || app.quickView.init();
			var source = options.source || "";
			var productListID = options.productlistid || "";

			var productUrl = options.url || app.util.appendParamToURL(app.urls.getProductUrl, "pid", options.id);
			if(source.length > 0) {
				productUrl = app.util.appendParamToURL(productUrl, "source", source);
			}
			if(productListID.length > 0) {
				productUrl = app.util.appendParamToURL(productUrl, "productlistid", productListID);
			}

			// show small loading image
			//app.progress.show(app.ui.primary);
			app.ajax.load({
				target : target,
				url : productUrl,
				data : options.data || "",
				// replace with callback passed in by options
				callback : options.callback || app.product.init
			});
		},
		/**
		 * @function
		 * @description Gets the availability to given product and quantity
		 */
		getAvailability : function (pid, quantity, callback) {
			app.ajax.getJson({
				url: app.util.appendParamsToUrl(app.urls.getAvailability, {pid:pid, Quantity:quantity}),
				callback: callback
			});
		},
		/**
		 * @function
		 * @description Initializes the 'AddThis'-functionality for the social sharing plugin
		 */
		initAddThis : function () {
			var addThisServices = ["compact","facebook","myspace","google","twitter"],
				addThisToolbox = $(".addthis_toolbox"),
				addThisLinks="";

			var i,len=addThisServices.length;
			for (i=0;i<len;i++) {
				if (addThisToolbox.find(".addthis_button_"+addThisServices[i]).length==0) {
					addThisLinks += '<a class="addthis_button_'+addThisServices[i]+'"></a>';
				}
			}
			if (addThisLinks.length===0) { return; }

			addThisToolbox.html(addThisLinks);
			try{
				addthis.toolbox(".addthis_toolbox");
			} catch(e) {
				return;
			}
		},
		/**
		 * @function
		 * @description Binds the click event to a given target for the add-to-cart handling
		 * @param {Element} target The target on which an add to cart event-handler will be set
		 */
		initAddToCart : function (target) {
			if (target) {
				target.on("click", ".add-to-cart", setAddToCartHandler);
			}
			else {
				$(".add-to-cart").on("click", setAddToCartHandler);
			}
		},
		/**
		 * @function
		 * @description binds carusel on PDP.
		 */
		initPDPRecommSlider: function() {
			var initialized = false;
			$('#pdp_youmayLike > div').bind('DOMSubtreeModified', function(e) {
				var $carousel = $('.js-recomm-slider');
				if($carousel.length === 0) return;

				$carousel.each(function(){
					if(!initialized){
						if( !$(this).hasClass('slick-initialized') ){
							var options = JSON.parse($(this).attr('data-carousel') ? $(this).attr('data-carousel') : {});

					      	if (typeof options === 'object') {
					      		initialized = true;
					      		$(this).slick(options);
							}
						}
					}
				});
			});
		}
	};

	function initSwatches() {
		$swatches = $('.js-swatch');
		$addToCart = $('.add-to-cart');

		if (!$swatches.length) {
			return;
		}
		setTimeout(function(){
			$swatches.each(function(){
				$this = $(this);

				$currentSwatch = $this.closest('li');

				if($currentSwatch.hasClass('selected')){

					$product = $currentSwatch.closest('.js-product');
					$productIndex = $('.js-product').index($product);

					fixBVlinks($currentSwatch.find('.js-product-variant-data'), $productIndex);

				}

				$this.closest('li').append('<img loading="lazy" src="' + $(this).prev().attr('data-thumb') + '" style="display:none;">')
			});
		}, 1000);

		$swatches.off('mouseover.jsswatches').on('mouseover.jsswatches', function(){
			$this = $(this);

			$swatchData = $this.prev();
			$product = $this.closest('.js-product');
			$image = $product.find('.thumb-link > img');
			$image.attr('src', $swatchData.data('thumb'));
			$addToCart = $product.find('.add-to-cart');

			handlePrices($product, $swatchData);
			handleAddToCart($addToCart, $swatchData);

		}).off('mouseleave.jsswatches').on('mouseleave.jsswatches', function(){
			$this = $(this);

			$swatchData = $this.prev();
			$product = $this.closest('.js-product');
			$addToCart = $product.find('.add-to-cart');

			$selectedSwatchData = $product.find('li.swatch.selected > .js-product-variant-data');

			$image = $product.find('.thumb-link > img');
			$image.attr('src', $selectedSwatchData.attr('data-thumb'));

			handlePrices($product, $selectedSwatchData);
			handleAddToCart($addToCart, $selectedSwatchData);

		}).on('click.jsswatches', function(e) {
			e.preventDefault();

			$this = $(this);

			$swatchData = $this.prev();
			$product = $this.closest('.js-product');
			$addToCart = $product.find('.add-to-cart');
			$thumbLink = $product.find('.thumb-link');
			$image = $product.find('.thumb-link > img');
			$selectedSwatch = $this.closest('li').siblings('.selected');
			$productIndex = $('.js-product').index($product);

			$thumbLink.attr('href', $swatchData.attr('data-product-url'));
			$selectedSwatch.removeClass('selected');

			$this.closest('li.swatch').addClass('selected');
			$addToCart.attr('data-product-id', $swatchData.attr('data-product-id'));
			$product.attr('data-product-id', $swatchData.attr('data-product-id'));
			$image.attr('src', $swatchData.data('thumb'));

			handleHistoryState($selectedSwatch.find('.js-product-variant-data'), $swatchData);
			handlePrices($product, $swatchData);
			fixBVlinks($swatchData, $productIndex);

			handleAddToCart($addToCart, $swatchData);
		});

		if(window.app && window.app.page.ns == 'compare'){
			$addToCart.off('click').on('click', function(e){
				e.preventDefault();

				var data = {
					cartAction : "add",
					pid : $(this).closest('.js-product').attr('data-product-id'),
					Quantity : 1
				};
				console.log(data);
				if (localStorage.getItem('AssistedSalesCompareProductID') && localStorage.getItem('AssistedSalesCompareProductID') == data.pid) {
					data['force'] = true;
				}

				app.cart.add(data, function (response) {
					if (typeof (response) == 'object' && response.hasOwnProperty('success')) {
						let $warning = $('#' + response.showAddToCartModalMessage);
						let modal = $warning.modal({
							show: true,
							backdrop: 'static',
							keyboard: false
						});
						localStorage.setItem('AssistedSalesCompareProductID', data.pid);
					} else {
						localStorage.removeItem('AssistedSalesCompareProductID');
					}

					$button = $(this);
					if($button.hasClass('btn-disabled')) {
						return;
					}
					$button.addClass('btn-disabled');
					// check SAP inventory availability
					var $container = $button.parents('.product-tile').find('.availability'),
						showMiniCart = app.sap.checkAvailability(response, $container),
						$cart = $(".fluid-templates-CartTemplate"),
						$checkout = $(".fluid-checkout"),
						$errorMsg = $(".minicart-error_msg"),
						hasError = $errorMsg.length && $.trim($errorMsg.html());

					if (hasError) {
						app.dialog.show({
							message: '<h3 class="underlined">' + app.resources.SPAREPART_ERROR_TITLE + '</h3>' + $errorMsg.html(),
							buttons:[{
								label: app.resources.HIDE_MSG,
								cssClass: 'btn-default dialogify-close'
							}],
						});
					} else {

						//show the mini cart unless SAP availability is out of stock
						if (showMiniCart && !hasError) {
							if ($cart.length > 0 || $checkout.length > 0) {
								app.page.refresh();
							} else {
								app.minicart.show(response);
							}
						} else {
							$button.blur();
							$button.attr('disabled', true);
							$button.text(app.resources.SOLD_OUT);
							app.minicart.init();
						}
					}
				});
			});
		}
	}

	function handlePrices(product, swatchData){
		var $enableSavePercent = swatchData.attr('data-enable-save-percent-option');

		var $curSales = product.find('.product-sales-price');
		var $curStandard = product.find('.product-standard-price');
		var $curSave = product.find('.price-standard-save-percent');

		var $newSales = swatchData.attr('data-sales-price');
		var $newStandard = swatchData.attr('data-standard-price');
		var $newSave = swatchData.attr('data-percent-off') != null ? Math.floor(swatchData.attr('data-percent-off')) : 0;

		if($curSales.length && $curStandard.length && $curSave.length){
			if($newSales == $newStandard) {
				$curSales.text($newSales);
				$curStandard.remove();
				$curSave.remove();
			} else {
				$curSales.text($newSales);
				$curStandard.text($newStandard);
				$curSave.text( app.resources.SAVE + ' ' + $newSave + '%' );
			}
		} else if( $curSales.length && $curStandard.length == 0 && $curSave.length == 0){
			if ( $newSales == $newStandard ){
				$curSales.text($newSales);
			} else {
				$curSales.text($newSales);
				$curStandard = $('<span class="product-standard-price price-strikethrough" title="Regular Price">' + $newStandard + '</span>').insertAfter($curSales.parent());
				if(	$enableSavePercent == "true" ){
					$('<span class="price-off-option price-standard-save-percent">' + app.resources.SAVE + ' ' + $newSave + '%</span>').insertAfter($curStandard);
				}
			}
		}
	}

	function fixBVlinks(swatchData, productIndex){
		$url = swatchData.attr('data-product-url') + '#cust_reviews';
		$bvLinks = $('.product-rating').find('a');
		$bvCurrent = $($bvLinks[productIndex]);
		$bvCurrent.attr('href', $url);
	}

	function handleHistoryState(oldSwatch, newSwatch){
		let searchParams = window.location.search;
		let path = window.location.pathname;

		let replacedParam = searchParams.replace(oldSwatch.attr('data-product-id'), newSwatch.attr('data-product-id'));

		history.pushState({}, 'Changing product id in url', path + replacedParam);
	}

	function handleAddToCart(btnAddToCart, swatchData){
		var available = swatchData.attr('data-availability');
		if (available === "true") {
			btnAddToCart.removeAttr('disabled');
			btnAddToCart.attr({
				title: app.resources.ADD_TO_CART,
				value: app.resources.ADD_TO_CART
			});

			btnAddToCart.html('<i class="icon-cart"></i>'+ app.resources.ADD_TO_CART);
		} else {
			btnAddToCart.attr({
				disabled: 'disabled',
				title: app.resources.SOLD_OUT,
				value: app.resources.SOLD_OUT
			});
			btnAddToCart.html(app.resources.SOLD_OUT);
		}
	}

	jQuery(document).on('ready', function () {
		initSwatches();

		try{
			if (window.ApplePaySession) {
				var merchantIdentifier = 'merchant.com.harman.applepay.test';
				var promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
				promise.then(function (canMakePayments) {
					$(".applepay_tc").show();
					_isApplePay = true;


				}).catch(function(e){
					console.error(e);
				});

			}

		} catch(e) {
			console.log(e);
		}
		//Load user recipes from cookies
		app.product.loadRecipesFromCookie();
		//load spectrum popup if querystring param is available
		var querystring = new URLSearchParams(window.location.search);
		if(querystring.get("iscstm_redesign")=="true"){
			$("#pdpMain .personalized-option-custom a").click();
			$('#pdpMain .personalize-social-share').removeClass('hidden');
			if(querystring.get("viewRecipeId")!=null) {
				var cookiesRecipes =[];
				cookiesRecipes = app.product.getCookiesReceipes("",window.spectrumMasterProduct[0]);
				var isRecipeInCookie=false;
				var recipeId= querystring.get("viewRecipeId");
				var sku = querystring.get("sku");
				if(cookiesRecipes.length){
					cookiesRecipes.forEach(function(item){
						var rawData = JSON.parse(item);
						if(recipeId==rawData.recipeId){
							if(!isRecipeInCookie) {
								$("#pdpMain .personalized-custom__recipe__image a[data-recipe="+recipeId+"]").click();
								isRecipeInCookie=true;
							}
						}
					});
				}
				if(!isRecipeInCookie && sku){
					//app.product.openDefaultPersonalizationModal(recipeId);
					var data = {
						"pid": sku ? sku : window.spectrumLoadProducts[0],
						"recipeId": recipeId,
						"oldRecipeId": null,
						"Quantity": 1,
						"imageUrl": $(".personalized-custom__recipe__add").attr("data-src").replace("recipeId",recipeId),
						"options": [],
						"uuid":"",
						"cartAction":"update"
					  }
					  console.log(data)
					var cookiesRecipes =[];
					if(querystring.get("sku")){
						cookiesRecipes = app.product.getCookiesReceipes(JSON.stringify(data), window.spectrumMasterProduct[0]);
					} else {
						cookiesRecipes = app.product.getCookiesReceipes("", window.spectrumMasterProduct[0]);
					}
					if(cookiesRecipes.length){
                        $(".personalized-custom__blank").hide();
                        $(".personalized-custom__recipe").show();
                    } else {
                        $(".personalized-custom__recipe").hide();
                        $(".personalized-custom__blank").show();
                    }
					app.product.appendCustomRecipeArray(cookiesRecipes);
					if($(".personalized-custom__recipe__image a[data-recipe='"+recipeId+"']").length){
						$(".personalized-custom__recipe__image a[data-recipe='"+recipeId+"']").click();
					}
				}

			}
		}
	});
}(window.app = window.app || {}, jQuery));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * @class app.bonusProductsView
 */
(function (app, $) {
	var $cache = {};
	var selectedList = [];
	var maxItems = 1;
	var bliUUID = "";
	/**
	 * @private
	 * @function
	 * description Gets a list of bonus products related to a promoted product
	 */
	function getBonusProducts() {
		var o = {};
		o.bonusproducts = [];

		var i, len;
		for (i=0, len=selectedList.length;i<len;i++) {
			var p = { pid : selectedList[i].pid,	qty : selectedList[i].qty, options : {} };
			var a, alen, bp=selectedList[i];
			for (a=0,alen=bp.options.length;a<alen;a++) {
				var opt = bp.options[a];
				p.options = {optionName:opt.name,optionValue:opt.value};
			}
			o.bonusproducts.push({product:p});
		}
		return o;
	}
	/**
	 * @private
	 * @function
	 * @description Updates the summary page with the selected bonus product
	 */
	function updateSummary() {
		if (selectedList.length===0) {
			$cache.bonusProductList.find("li.selected-bonus-item").remove();
		}
		else {
			var ulList = $cache.bonusProductList.find("ul.selected-bonus-items").first();
			var itemTemplate = ulList.children(".selected-item-template").first();
			var i, len;
			for (i=0, len=selectedList.length;i<len;i++) {
				var item = selectedList[i];
				var li = itemTemplate.clone().removeClass("selected-item-template").addClass("selected-bonus-item");
				li.data("uuid", item.uuid).data("pid", item.pid);
				li.find(".item-name").html(item.name);
				li.find(".item-qty").html(item.qty);
				var ulAtts = li.find(".item-attributes");
				var attTemplate = ulAtts.children().first().clone();
				ulAtts.empty();
				var att;
				for (att in item.attributes) {
					var attLi = attTemplate.clone();
					attLi.addClass(att);
					attLi.children(".display-name").html(item.attributes[att].displayName);
					attLi.children(".display-value").html(item.attributes[att].displayValue);
					attLi.appendTo(ulAtts);
				}
				li.appendTo(ulList);
			}
			ulList.children(".selected-bonus-item").show();
		}

		// get remaining item count
		var remain = maxItems - selectedList.length;
		$cache.bonusProductList.find(".bonus-items-available").text(remain);
		if (remain <= 0) {
			$cache.bonusProductList.find("button.button-select-bonus").attr("disabled", "disabled");
		}
		else {
			$cache.bonusProductList.find("button.button-select-bonus").removeAttr("disabled");
		}
	}
	/********* public app.bonusProductsView object *********/
	app.bonusProductsView = {
		/**
		 * @function
		 * @description Initializes the bonus product dialog
		 */		
		init : function () {
			$cache = {
				bonusProduct : $("#bonus-product-dialog"),
				resultArea : $("#product-result-area")
			};
		},
		/**
		 * @function
		 * @description Opens the bonus product quick view dialog
		 */		
		show : function (url) {
			// add element to cache if it does not already exist
			if(!$cache.bonusProduct) {
				app.bonusProductsView.init();
			}

			// create the dialog
			$cache.bonusProduct = app.dialog.create({
				target : $cache.bonusProduct,
				options : {
					width: 795,
					dialogClass : 'quickview',
					title : app.resources.BONUS_PRODUCTS
				}
			});

			// load the products then show
			app.ajax.load({
				target : $cache.bonusProduct,
				url : url,
				callback : function () {
					$cache.bonusProduct.dialog('open');
					app.bonusProductsView.initializeGrid();
				}
			});

		},
		/**
		 * @function
		 * @description Closes the bonus product quick view dialog
		 */
		close : function () {
			$cache.bonusProduct.dialog('close');
		},
		/**
		 * @function
		 * @description Loads the list of bonus products into quick view dialog
		 */		
		loadBonusOption : function () {
			$cache.bonusDiscountContainer = $(".bonus-discount-container");
			if ($cache.bonusDiscountContainer.length===0) { return; }

			app.dialog.create({
				target : $cache.bonusDiscountContainer,
				options : {
					height : 'auto',
					width : 350,
					dialogClass : 'quickview',
					title : app.resources.BONUS_PRODUCT
				}
			});
			$cache.bonusDiscountContainer.dialog('open');

			// add event handlers
			$cache.bonusDiscountContainer.on("click", ".select-bonus-btn", function (e) {
				e.preventDefault();
				var uuid = $cache.bonusDiscountContainer.data("lineitemid");
				var url = app.util.appendParamsToUrl(app.urls.getBonusProducts,
													 {
														bonusDiscountLineItemUUID : uuid,
														source : "bonus"
													 });

				$cache.bonusDiscountContainer.dialog('close');
				app.bonusProductsView.show(url);
			}).on("click", ".no-bonus-btn", function (e) {
				$cache.bonusDiscountContainer.dialog('close');
			});
		},

		/**
		 * @function
		 * @description 
		 */		
		initializeGrid : function () {
			$cache.bonusProductList = $("#bonus-product-list"),
				bliData = $cache.bonusProductList.data("line-item-detail");

			maxItems = bliData.maxItems;
			bliUUID = bliData.uuid;

			if (bliData.itemCount>=maxItems) {
				$cache.bonusProductList.find("button.button-select-bonus").attr("disabled", "disabled");
			}

			var cartItems = $cache.bonusProductList.find(".selected-bonus-item");

			cartItems.each(function() {
				var ci = $(this);

				var product = {
					uuid : ci.data("uuid"),
					pid : ci.data("pid"),
					qty : ci.find(".item-qty").text(),
					name : ci.find(".item-name").html(),
					attributes: {}
				};
				var attributes = ci.find("ul.item-attributes li");
				attributes.each(function(){
					var li = $(this);
					product.attributes[li.data("attributeId")] = {
						displayName:li.children(".display-name").html(),
						displayValue:li.children(".display-value").html()
					};
				});
				selectedList.push(product);
			});


			$cache.bonusProductList.on("click", "div.bonus-product-item a[href].swatchanchor", function (e) {
				e.preventDefault();

				var anchor = $(this),
					bpItem = anchor.closest(".bonus-product-item"),
					bpForm = bpItem.find("form.bonus-product-form"),
					qty = bpForm.find("input[name='Quantity']").first().val(),
					params = {
						Quantity : isNaN(qty) ? "1" : qty,
						format : "ajax",
						source : "bonus",
						bonusDiscountLineItemUUID : bliUUID
					};

				var url = app.util.appendParamsToUrl(this.href, params);

				app.progress.show(bpItem);
				app.ajax.load({
					url: url,
					callback : function (data) {
						bpItem.html(data);
					}
				});
			})
			.on("click", "button.button-select-bonus", function (e) {
				e.preventDefault();
				if (selectedList.length>=maxItems) {
					$cache.bonusProductList.find("button.button-select-bonus").attr("disabled", "disabled");
					$cache.bonusProductList.find("bonus-items-available").text("0");
					return;
				}

				var form = $(this).closest("form.bonus-product-form"),
					detail = $(this).closest(".product-detail");
					uuid = form.find("input[name='productUUID']").val(),
					qtyVal = form.find("input[name='Quantity']").val(),
					qty = isNaN(qtyVal) ? 1 : (+qtyVal);

				var product = {
					uuid : uuid,
					pid : form.find("input[name='pid']").val(),
					qty : qty,
					name : detail.find(".product-name").text(),
					attributes : detail.find(".product-variations").data("current"),
					options : []
				};

				var optionSelects = form.find("select.product-option");

				optionSelects.each(function (idx) {
					product.options.push({
						name : this.name,
						value : $(this).val(),
						display : $(this).children(":selected").first().html()
					});
				});
				selectedList.push(product);
				updateSummary();
			})
			.on("click", ".remove-link", function(e){
				e.preventDefault();
				var container = $(this).closest("li.selected-bonus-item");
				if (!container.data("uuid")) { return; }

				var uuid = container.data("uuid");
				var i, len = selectedList.length;
				for(i=0;i<len;i++) {
					if (selectedList[i].uuid===uuid) {
						selectedList.splice(i,1);
						break;
					}
				}
				updateSummary();
			})
			.on("click", ".add-to-cart-bonus", function (e) {
				e.preventDefault();
				var url = app.util.appendParamsToUrl(app.urls.addBonusProduct, {bonusDiscountLineItemUUID:bliUUID});
				var bonusProducts = getBonusProducts();
				// make the server call
				$.ajax({
					type : "POST",
					dataType : "json",
					cache	: false,
					contentType : "application/json",
					url : url,
					data : JSON.stringify(bonusProducts)
				})
				.done(function (response) {
					// success
					app.page.refresh();
				})
				.fail(function (xhr, textStatus) {
					// failed
					if(textStatus === "parsererror") {
						window.alert(app.resources.BAD_RESPONSE);
					} else {
						window.alert(app.resources.SERVER_CONNECTION_ERROR);
					}
				})
				.always(function () {
					$cache.bonusProduct.dialog("close");
				});
			});
		}
	};

}(window.app = window.app || {}, jQuery));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * @class app.util
 */
(function (app, $) {

	// sub namespace app.util.* contains utility functions
	app.util = {
		/**
		 * @function
		 * @description trims a prefix from a given string, this can be used to trim
		 * a certain prefix from DOM element IDs for further processing on the ID
		 */
		trimPrefix : function (str, prefix) {
			return str.substring(prefix.length);
		},

		/**
		 * @function
		 * @description
		 */
		setDialogify : function (e) {
			e.preventDefault();
			var actionSource = $(this),
				dlgAction = $(actionSource).data("dlg-action") || {}, // url, target, isForm
				dlgOptions = $.extend({}, app.dialog.settings, $(actionSource).data("dlg-options") || {});

			dlgOptions.title = dlgOptions.title || $(actionSource).attr("title") || "";

			var url = dlgAction.url // url from data
					  || (dlgAction.isForm ? $(actionSource).closest("form").attr("action") : null) // or url from form action if isForm=true
					  || $(actionSource).attr("href"); // or url from href

			if (!url) { return; }

			var form = jQuery(this).parents('form');
			var method = form.attr("method")||"POST";

			// if this is a content link, update url from Page-Show to Page-Include
			if ($(this).hasClass("attributecontentlink")) {
				var uri = app.util.getUri(url);
				url = app.urls.pageInclude+uri.query;
			}
			if (method && method.toUpperCase() == "POST")
			{
		         var postData = form.serialize() + "&"+ jQuery(this).attr("name") + "=submit";
		    }
			else
			{
		         if (url.indexOf('?') == -1 )
		         {
		          url+='?';
		         }
		         else
		         {
		          url += '&'
		         }
		         url += form.serialize();
		         url = app.util.appendParamToURL(url, jQuery(this).attr('name'), "submit");
			}

			var dlg = app.dialog.create({target:dlgAction.target, options : dlgOptions});

			app.ajax.load({
				url:$(actionSource).attr("href") || $(actionSource).closest("form").attr("action"),
				target:dlg, callback: function () {
					dlg.dialog("open");	// open after load to ensure dialog is centered
					app.validator.init(); // re-init validator
				},
				data : !$(actionSource).attr("href") ? postData : null

			});
		},
		/**
		 * @function
		 * @description Appends a character to the left side of a numeric string (normally ' ')
		 * @param {String} str the original string
		 * @param {String} padChar the character which will be appended to the original string
		 * @param {Number} len the length of the end string
		 */
		padLeft : function (str, padChar, len) {
			var digs = len || 10;
			var s = str.toString();
			var dif = digs - s.length;
			while(dif > 0) {
				s = padChar + s;
				dif--;
			}
			return s;
		},

		/**
		 * @function
		 * @description appends the parameter with the given name and value to the given url and returns the changed url
		 * @param {String} url the url to which the parameter will be added
		 * @param {String} name the name of the parameter
		 * @param {String} value the value of the parameter
		 */
		appendParamToURL : function (url, name, value) {
			var c = "?";
			if(url.indexOf(c) !== -1) {
				c = "&";
			}
			return url + c + name + "=" + encodeURIComponent(value);
		},
		/**
		 * @function
		 * @description
		 * @param {String}
		 * @param {String}
		 */
		elementInViewport: function (el, offsetToTop) {
			var top = el.offsetTop,
				left = el.offsetLeft,
				width = el.offsetWidth,
				height = el.offsetHeight;

			while (el.offsetParent) {
				el = el.offsetParent;
				top += el.offsetTop;
				left += el.offsetLeft;
			}

			if (typeof(offsetToTop) != 'undefined') {
				top -= offsetToTop;
			}
		
			
			if ( window.pageXOffset != null) {

				return (
						top < (window.pageYOffset + window.innerHeight) &&
						left < (window.pageXOffset + window.innerWidth) &&
						(top + height) > window.pageYOffset &&
						(left + width) > window.pageXOffset
				);
				
			}

			if (document.compatMode == "CSS1Compat") {
				return (
					top < (window.document.documentElement.scrollTop + window.document.documentElement.clientHeight) &&
					left < (window.document.documentElement.scrollLeft + window.document.documentElement.clientWidth) &&
					(top + height) > window.document.documentElement.scrollTop &&
					(left + width) > window.document.documentElement.scrollLeft
			);
			
			}
		},
		/**
		 * @function
		 * @description appends the parameters to the given url and returns the changed url
		 * @param {String} url the url to which the parameters will be added
		 * @param {String} params a JSON string with the parameters
		 */
		appendParamsToUrl : function (url, params) {
			var uri = app.util.getUri(url),
				includeHash = arguments.length < 3 ? false : arguments[2];

			var qsParams = $.extend(uri.queryParams, params);
			var result = uri.path+"?"+$.param(qsParams);
			if (includeHash) {
				result+=uri.hash;
			}
			if (result.indexOf("http")<0 && result.charAt(0)!=="/") {
				result="/"+result;
			}

			return result;
		},
		/**
		 * @function
		 * @description removes the parameter with the given name from the given url and returns the changed url
		 * @param {String} url the url from which the parameter will be removed
		 * @param {String} name the name of the parameter
		 */
		removeParamFromURL : function (url, parameter) {
			var urlparts = url.split('?');

			if(urlparts.length >= 2) {
				var urlBase = urlparts.shift();
				var queryString = urlparts.join("?");

				var prefix = encodeURIComponent(parameter) + '=';
				var pars = queryString.split(/[&;]/g);
				var i=pars.length;
				while(0 > i--) {
					if(pars[i].lastIndexOf(prefix, 0) !== -1) {
						pars.splice(i, 1);
					}
				}
				url = urlBase + '?' + pars.join('&');
			}
			return url;
		},

		/**
		 * @function
		 * @description Returns the static url for a specific relative path
		 * @param {String} path the relative path
		 */
		staticUrl : function (path) {
			if(!path || $.trim(path).length === 0) {
				return app.urls.staticPath;
			}

			return app.urls.staticPath + (path.charAt(0) === "/" ? path.substr(1) : path );
		},
		/**
		 * @function
		 * @description Appends the parameter 'format=ajax' to a given path
		 * @param {String} path the relative path
		 */
		ajaxUrl : function (path) {
			return app.util.appendParamToURL(path, "format", "ajax");
		},

		/**
		 * @function
		 * @description
		 * @param {String} url
		 */
		toAbsoluteUrl : function (url) {
			if (url.indexOf("http")!==0 && url.charAt(0)!=="/") {
				url = "/"+url;
			}
			return url;
		},
		/**
		 * @function
		 * @description Loads css dynamically from given urls
		 * @param {Array} urls Array of urls from which css will be dynamically loaded.
		 */
		loadDynamicCss : function (urls) {
			var i, len=urls.length;
			for(i=0; i < len; i++) {
				app.util.loadedCssFiles.push(app.util.loadCssFile(urls[i]));
			}
		},

		/**
		 * @function
		 * @description Loads css file dynamically from given url
		 * @param {String} url The url from which css file will be dynamically loaded.
		 */
		loadCssFile : function (url) {
			return $("<link/>").appendTo($("head")).attr({
				type : "text/css",
				rel : "stylesheet"
			}).attr("href", url); // for i.e. <9, href must be added after link has been appended to head
		},
		// array to keep track of the dynamically loaded CSS files
		loadedCssFiles : [],

		/**
		 * @function
		 * @description Removes all css files which were dynamically loaded
		 */
		clearDynamicCss : function () {
			var i = app.util.loadedCssFiles.length;
			while(0 > i--) {
				$(app.util.loadedCssFiles[i]).remove();
			}
			app.util.loadedCssFiles = [];
		},
		/**
		 * @function
		 * @description Extracts all parameters from a given query string into an object
		 * @param {String} qs The query string from which the parameters will be extracted
		 */
		getQueryStringParams : function (qs) {
			if(!qs || qs.length === 0) { return {}; }

			var params = {}, unescapedQS = unescape(qs);
			// Use the String::replace method to iterate over each
			// name-value pair in the string.
			unescapedQS.replace( new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
						function ( $0, $1, $2, $3 ) {	params[ $1 ] = $3; }
			);
			return params;
		},
		/**
		 * @function
		 * @description Returns an URI-Object from a given element with the following properties:<br/>
		 * <p>protocol</p>
		 * <p>host</p>
		 * <p>hostname</p>
		 * <p>port</p>
		 * <p>path</p>
		 * <p>query</p>
		 * <p>queryParams</p>
		 * <p>hash</p>
		 * <p>url</p>
		 * <p>urlWithQuery</p>
		 * @param {Object} o The HTML-Element
		 */
		getUri : function (o) {
			var a;
			if (o.tagName && $(o).attr("href")) {
				a = o;
			}
			else if (typeof o === "string") {
				a = document.createElement("a");
				a.href = o;
			}
			else {
				return null;
			}

			return {
				protocol : a.protocol, //http:
				host : a.host, //www.myexample.com
				hostname : a.hostname, //www.myexample.com'
				port : a.port, //:80
				path : a.pathname, // /sub1/sub2
				query : a.search, // ?param1=val1&param2=val2
				queryParams : a.search.length > 1 ? app.util.getQueryStringParams(a.search.substr(1)) : {},
				hash : a.hash, // #OU812,5150
				url : a.protocol+ "//" + a.host + a.pathname,
				urlWithQuery : a.protocol+ "//" + a.host + a.port + a.pathname + a.search
			};
		},
		/**
		 * @function
		 * @description Appends a form-element with given arguments to a body-element and submits it
		 * @param {Object} args The arguments which will be attached to the form-element:<br/>
		 * <p>url</p>
		 * <p>fields - an Object containing the query-string parameters</p>
		 */
		postForm : function (args) {
			var form = $("<form>").attr({action:args.url,method:"post"}).appendTo("body");
			var p;
			for (p in args.fields) {
				$("<input>").attr({name:p,value:args.fields[p]}).appendTo(form);
			}
			form.submit();
		},
		/**
		 * @function
		 * @description  Returns a JSON-Structure of a specific key-value pair from a given resource bundle
		 * @param {String} key The key in a given Resource bundle
		 * @param {String} bundleName The resource bundle name
		 * @param {Object} A callback function to be called
		 */
		getMessage : function (key, bundleName, callback) {
			if (!callback || !key || key.length===0) {
				return;
			}
			var params = {key:key};
			if (bundleName && bundleName.length===0) {
				params.bn = bundleName;
			}
			var url = app.util.appendParamsToUrl(app.urls.appResources, params);
			$.getJSON(url, callback);
		},
		/**
		 * @function
		 * @description Updates the states options to a given country
		 * @param {String} countrySelect The selected country
		 */
		updateStateOptions : function(countrySelect) {
			var country = $(countrySelect);
			if (country.length===0 || !app.countries[country.val()]) {
				 return;
			}
			var form = country.closest("form");
			var stateField = country.data("stateField") ? country.data("stateField") : form.find("select[name$='_state']");
			if (stateField.length===0) {
				return;
			}

			var form = country.closest("form"),
				c = app.countries[country.val()],
				arrHtml = [],
				labelSpan = form.find("label[for='"+stateField[0].id+"'] span").not(".required-indicator");

			// set the label text
			labelSpan.html(c.label);

			var s;
			for (s in c.regions) {
				arrHtml.push('<option value="'+s+'">'+c.regions[s]+'</option>');
			}
			// clone the empty option item and add to stateSelect
			var o1 = stateField.children().first().clone();
			stateField.html(arrHtml.join("")).removeAttr("disabled").children().first().before(o1);
			stateField[0].selectedIndex=0;
		},
		/**
		 * @function
		 * @description Updates the number of the remaining character
		 * based on the character limit in a text area
		 */
		limitCharacters : function () {
			$('form').find('textarea[data-character-limit]').each(function(){
				var characterLimit = $(this).data("character-limit");
				var charCountHtml = String.format(app.resources.CHAR_LIMIT_MSG,
										'<span class="char-remain-count">'+characterLimit+'</span>',
										'<span class="char-allowed-count">'+characterLimit+'</span>');
				var charCountContainer = $(this).next('div.char-count');
				if (charCountContainer.length===0) {
					charCountContainer = $('<div class="char-count"/>').insertAfter($(this));
				}
				charCountContainer.html(charCountHtml);
				// trigger the keydown event so that any existing character data is calculated
				$(this).change();
			});
		},
		/**
		 * @function
		 * @description Binds the onclick-event to a delete button on a given container,
		 * which opens a confirmation box with a given message
		 * @param {String} container The name of element to which the function will be bind
		 * @param {String} message The message the will be shown upon a click
		 */
		setDeleteConfirmation : function(container, message) {
			$(container).on("click", ".delete", function(e){
				return confirm(message);
			});
		},
		/**
		 * @function
		 * @description Scrolls a browser window to a given x point
		 * @param {String} The x coordinate
		 */
		scrollBrowser : function (xLocation) {
			$('html, body').animate({ scrollTop: xLocation }, 500);
		}

	};
}(window.app = window.app || {}, jQuery));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * @class app.cart
 */
(function (app, $) {
	var $cache = {};
	/**
	 * @private
	 * @function
	 * @description Updates the cart with new data
	 * @param {Object} postdata An Object representing the the new or uptodate data
	 * @param {Object} A callback function to be called 
	 */
	function updateCart(postdata, callback) {
		var url = app.util.ajaxUrl(app.urls.addProduct);
		$.post(url, postdata, callback || app.cart.refresh);
	}
	
	function updateCustomProduct(postdata, callback) {
		var url = app.util.ajaxUrl(app.urls.addCustomProduct);
		$.post(url, postdata, callback || app.cart.refresh);
		
	}
	
	/**
	 * @private
	 * @function
	 * @description Cache initialization of the cart page 
	 */
	function initializeCache() {
		$cache = {
			cartTable : $("#cart-table"),
			itemsForm : $("#cart-items-form"),
			addCoupon : $("#add-coupon"),
			couponCode : $("form input[name$='_couponCode']")
		};
	}
	/**
	 * @private
	 * @function
	 * @description Binds events to the cart page (edit item's details, bonus item's actions, coupon code entry ) 
	 */
	function initializeEvents() {
		$cache.cartTable.on("click", ".item-edit-details a", function (e) {
			e.preventDefault();
			app.quickView.show({
				url : e.target.href,
				source : "cart"
			});
		})
		.on("click", ".bonus-item-actions a", function (e) {
			e.preventDefault();
			app.bonusProductsView.show(this.href);
		});

		// override enter key for coupon code entry
		$cache.couponCode.on("keydown", function (e) {
			if (e.which === 13 && $(this).val().length===0) { return false; }
		});
	}
	/******* app.cart public object ********/
	app.cart = {
		/**
		 * @function
		 * @description Adds new item to the cart
		 * @param {Object} postdata An Object representing the the new or uptodate data
		 * @param {Object} A callback function to be called 
		 */	
		add : function (postdata, callback) {
			updateCart(postdata, callback);
		},
		/**
		 * @function
		 * @description Hook for removing item from the cart 
		 * 
		 */		
		remove : function () {
			return;
		},
		/**
		 * @function
		 * @description Updates the cart with new data
		 * @param {Object} postdata An Object representing the the new or uptodate data
		 * @param {Object} A callback function to be called 
		 */		
		update : function (postdata, callback) {
			updateCart(postdata, callback);
		},
		
		/**
		 * @function
		 * @description Updates the cart with new data
		 * @param {Object} postdata An Object representing the the new or uptodate data
		 * @param {Object} A callback function to be called 
		 */		
		updateCustomProduct : function (postdata, callback) {
			updateCustomProduct(postdata, callback);
		},
		
		/**
		 * @function
		 * @description Refreshes the cart without posting
		 */		
		refresh : function () {
			// refresh without posting
			app.page.refresh();
		},
		/**
		 * @function
		 * @description Initializes the functionality on the cart
		 */		
		init : function () {
			// edit shopping cart line item
			initializeCache();
			initializeEvents();
		}
	};

}(window.app = window.app || {}, jQuery));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * @class app.minicart
 */
(function (app, $) {
	// sub name space app.minicart.* provides functionality around the mini cart

	var $cache = {},
		initialized = false;

	var timer = {
		id : null,
		clear : function () {
			if(timer.id) {
				window.clearTimeout(timer.id);
				delete timer.id;
			}
		},
		start : function (duration) {
			timer.id = setTimeout(app.minicart.close, duration);
		}
	};
	/******* app.minicart public object ********/
	app.minicart = {
		url : "", // during page loading, the Demandware URL is stored here

		/**
		 * @function
		 * @description Cache initializations and event binding to the mimcart
		 */ 
		init : function () {
			$cache.minicart = $("#mini-cart");
			$cache.mcTotal = $cache.minicart.find(".mini-cart-total");
			$cache.mcContent = $cache.minicart.find(".mini-cart-content");
			$cache.mcClose = $cache.minicart.find(".mini-cart-close");
			$cache.mcProductList = $cache.minicart.find(".mini-cart-products");
			$cache.mcProducts = $cache.mcProductList.children(".mini-cart-product");

			var collapsed = $cache.mcProductList.children().not(":first").addClass("collapsed");


			// bind hover event to the cart total link at the top right corner
			$cache.minicart.on("mouseenter", ".mini-cart-total", function () {
				if($cache.mcContent.not(":visible")) {
					app.minicart.slide();
				}
			})
			.on("mouseenter", ".mini-cart-content", function (e) {
				timer.clear();
			})
			.on("mouseleave", ".mini-cart-content", function (e) {
				timer.clear();
				timer.start(30);
			})
			.on("click", ".mini-cart-close", app.minicart.close);

			$cache.mcProducts.append('<div class="mini-cart-toggler">&nbsp;</div>');

			//$cache.mcProductList.toggledList({toggleClass : "collapsed", triggerSelector:".mini-cart-toggler", eventName:"click"});

			initialized = true;
		}, 
		/**
		 * @function
		 * @description Shows the given content in the mini cart
		 * @param {String} A HTML string with the content which will be shown
		 */
		show : function (html) {
			//$cache.minicart.html(html);
			app.util.scrollBrowser(0);
			app.minicart.init();
			app.minicart.slide();
			app.bonusProductsView.loadBonusOption();
		},
		/**
		 * @function
		 * @description Slides down and show the contents of the mini cart
		 */ 
		slide : function () {
			if(!initialized) {
				app.minicart.init();
			}

			if(app.minicart.suppressSlideDown && app.minicart.suppressSlideDown()) {
				return;
			}

			timer.clear();

			// show the item
			$cache.mcContent.slideDown('slow');

			// after a time out automatically close it
			timer.start(6000);
		},
		/**
		 * @function
		 * @description Closes the mini cart with given delay
		 * @param {Number} delay The delay in milliseconds
		 */ 
		close : function (delay) {
			timer.clear();
			$cache.mcContent.slideUp();
		},
		/**
		 * @function
		 * @description Hook which can be replaced by individual pages/page types (e.g. cart)
		 */
			suppressSlideDown : function () {
			return false;
		}
	};
}(window.app = window.app || {}, jQuery));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable no-console */

function getPriceForExtend() {
    //adding this duplicate function here to avoid requiring large js file
    var price;
    var isPZView = $('.personalized-option-custom.active').length;
    if (isPZView) {
        price = $(".prices .pz-price .sales [content]").attr('content');
        if (!price) {
            price = $(".prices .pz-price .list [content]").attr('content');
        }
    } else {
        price = $(".prices .price .sales [content]").attr('content');
        if (!price) {
            price = $(".prices .price .list [content]").attr('content');
        }
    }
    price = Math.round(parseFloat(price) * 100);
    return price;
}
function extendInit() {
    var EXT_STORE_ID = window.EXT_STORE_ID || undefined;
    var EXT_ENVIRONMENT = window.EXT_ENVIRONMENT || undefined;
    if (!EXT_STORE_ID) {
        console.log('Extend: storeId missing from storefront.');
        return;
    }

    if (Extend) {
        Extend.config({ storeId: EXT_STORE_ID, environment:EXT_ENVIRONMENT });
    }
    
    disableLinkForExtendInMiniCart();
}

function disableLinkForExtendInMiniCart () {
    $('.cart-info a[data-is-extend-product="true"]').removeAttr('href');
    $('body').on('click', '.cart-info a[data-is-extend-product="true"]', function (e) {
        e.preventDefault();
    });
}
function spectrumExtendPDP() {
    if ($('#extend-offer').length) {
        var Extend = window.Extend || undefined;
        if (Extend) {
            var productId = $('.product-add-to-cart input[name="extendCustomPid"]').val();
            if(!productId){
                productId = $(".personalized-custom__recipe .personalized-custom__recipe__image a.selected").data('pid');
            }
            var price = getPriceForExtend();
            var extendComponent = Extend.buttons.instance('#extend-offer');
            if (extendComponent) {
                extendComponent.setActiveProduct({
                    referenceId: productId,
                    price: price
                });
            } else {
                window.Extend.buttons.render('#extend-offer', {
                    referenceId: productId,
                    price: price
                });
            }
            $('body').trigger('extend:watchExtendProtection');
        }
    }
}
function extendPDP() {
    if ($('#extend-offer').length) {
        var Extend = window.Extend || undefined;
        if (Extend) {
            var productId = $('.product-detail').data('pid');
            var price = getPriceForExtend();
            var extendComponent = Extend.buttons.instance('#extend-offer');
            if (extendComponent) {
                extendComponent.setActiveProduct({
                    referenceId: productId,
                    price: price
                });
            } else {
                window.Extend.buttons.render('#extend-offer', {
                    referenceId: productId,
                    price: price
                });
            }
        }
    }
}

function upsellModal(uuid) {
    $('body').on('click', '[data-pliuuid=' + uuid + '].extend-upsell-btn', function (e) {
        e.preventDefault();

        var form = {
            pid: $(this).data('pid'),
            quantity: $(this).parents('.cart-row').children('.item-quantity').find('.input-text').val(),
            options: [],
            pliUUID: $(this).data('pliuuid')
        };

        window.Extend.modal.open({
            referenceId: $(this).data('pid'),
            onClose: function (plan) {
                if (plan) {
                    form.extendPlanId = plan.planId;
                    form.extendPrice = plan.price;
                    form.extendTerm = plan.term;

                    $.ajax({
                        url: window.EXT_CART_ADDTOCART,
                        method: 'POST',
                        data: form,
                        success: function () {
                            location.reload();
                        },
                        error: function () {
                        }
                    });
                }
            }
        });
    });
}

function addExtendUpsellBtn(uuid, pid, qty) {
    $('.cart-items-table [data-uuid="' + uuid + '"].cart-item-row .cart-item-description').append('<div class="extend-upsell-style" id="extend-offer-'+uuid+'"></div>')
    	/** initialize offer */
    	window.Extend.buttons.renderSimpleOffer('#extend-offer-'+uuid, {
    		 referenceId: pid,
    		 onAddToCart:
    		   function(plan) {
    			if (plan) {
    				var form = {};
    				form.extendPlanId = plan.plan.planId;
    				form.extendPrice = plan.plan.price;
    				form.extendTerm = plan.plan.term;
    				form.pid = pid;
    				form.pliUUID = uuid;
    				form.quantity = qty;
    				$.ajax({
    					url: window.EXT_CART_ADDTOCART,
    					method: 'POST',
    					data: form,
    					success: function () {
    						location.reload();
    					},
    					error: function () { 
    					}
    				});
    			}
    		}
    	});
}

function renderUpsellBtns() {
    $('.cart-items-table .cart-item-body .cart-item-row').each(function (index, product) {
        var uuid = $(product).attr('data-uuid') || undefined;

        $.ajax({
            url: window.EXT_CART_UPSELL + '?uuid=' + uuid,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data.isEligible) {
                    addExtendUpsellBtn(uuid,data.pid,data.qty);
                }
            },
            error: function () { }
        });
    });
}

$(document).ready(function () {
    window.spectrumExtendPDP  = ()=>{  spectrumExtendPDP()}
    extendInit();
    extendPDP();
    window.extendPDP  = extendPDP;
    if ($('.cart-list').length) { renderUpsellBtns(); }
    $('body').trigger('spectrum:extendcomplete');
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * @class app.storefront
 *
 * This class will set up an functionality that is needed across the store front
 *
 * Currently this class only handles the GeoIP notification and redirect
 * If more functionality is added, it would make sense to namespace the GeoIP logic within this class
 */

 (function (app, $) {
	var $cache = {};
	app.storefront = {
		inflections: {
			'screen-xs': 0,
			'screen-sm': 600,
			'screen-md': 1100,
			enquire: {
				'xs': 'screen and (min-width:0px) and (max-width:599px)',
				'sm': 'screen and (min-width:600px) and (max-width:1099px)',
				'md': 'screen and (min-width:1100px)'
			}
		},
		init : function () {
			//Global footer JS;
			//TODO - possibly move to proper JS file
			enquire.register(app.storefront.inflections.enquire.xs, {
				match: function() {
					$('#footer span[data-toggle="collapse"]').each(function () {
						$(this).addClass("collapsed");
					});
					$('#footer div.collapse').each(function () {
						$(this).collapse('hide');
					});
				},
				unmatch: function() {
					$('#footer div.collapse').each(function () {
						$(this).collapse('show');
					});
				}
			});

		}
	};
}(window.app = window.app || {}, jQuery));

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
@class app.tooltip
*/
(function (app, $) {
	var $cache = {};
	app.tooltips = {
		/**
		 * @function
		 * @description Initializes the tooltip-content and layout
		 */
		init : function () {
			var selector = '[data-toggle=\'tooltip\']';

			// Bootstrap tooltips
			$(selector).tooltip({
				html: true
			});
			
		}
	};

}(window.app = window.app || {}, jQuery));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * @class app.product.compare
 */
(function (app, $) {
	var $cache = {},
		_currentCategory = "",
		_isClearing = false,
		MAX_ACTIVE = 6,
		CI_PREFIX = "ci-";

	/**
	 * @private
	 * @function
	 * @description Verifies the number of elements in the compare container and updates it with sequential classes for ui targeting
	 */
	function refreshContainer() {
		if (_isClearing) { return; }

		var ac = $cache.compareContainer.find(".active").length;

		if (ac < 2) {
			$cache.compareButton.attr("disabled", "disabled");
		}
		else {
			$cache.compareButton.removeAttr("disabled");
		}

		// update list with sequential classes for ui targeting
		var compareItems = $cache.compareContainer.find('.compare-item');
		for( i=0; i < compareItems.length; i++ ){
			compareItems.removeClass('compare-item-' + i);
			$(compareItems[i]).addClass('compare-item-' + i);
		}

		$cache.compareContainer.toggle(ac > 0);

	}
	/**
	 * @private
	 * @function
	 * @description Adds an item to the compare container and refreshes it
	 */
	function addToList(data) {
		// get the first compare-item not currently active
		var item = $cache.compareContainer.find(".compare-item").not(".active").first();
		var tile = $("#"+data.uuid);
		if (item.length===0) {
			if(tile.length > 0) {
				tile.find(".compare-check")[0].checked = false;
			}
			window.alert(app.resources.COMPARE_ADD_FAIL)
			return;
		} // safety only

		// if already added somehow, return
		if ($("#"+CI_PREFIX+data.uuid).length > 0) {
			return;
		}
		// set as active item
		item.addClass("active")
			.attr("id", CI_PREFIX+data.uuid)
			.data("itemid", data.itemid);

		// replace the item image
		var itemImg = item.children("img.compareproduct").first();
		itemImg.attr({src : $(data.img).attr("src"), alt : $(data.img).attr("alt")});

		// refresh container state
		refreshContainer();

		if (tile.length===0) { return; }

		// ensure that the associated checkbox is checked
		tile.find(".compare-check")[0].checked = true;
	}
	/**
	 * @private
	 * @function
	 * description Removes an item from the compare container and refreshes it
	 */
	function removeFromList(uuid) {
		var item = $("#"+CI_PREFIX+uuid);
		if (item.length===0) { return; }

		// replace the item image
		var itemImg = item.children("img.compareproduct").first();
		itemImg.attr({src : app.urls.compareEmptyImage, alt : app.resources.EMPTY_IMG_ALT});

		// remove class, data and id from item
		item.removeClass("active")
			.removeAttr("id")
			.removeAttr("data-itemid")
			.data("itemid", "");

		// use clone to prevent image flash when removing item from list
		var cloneItem = item.clone();
		item.remove();
		cloneItem.appendTo($cache.comparePanel);
		refreshContainer();
		// ensure that the associated checkbox is not checked
		var tile = $("#"+uuid);
		if (tile.length === 0 ) { return; }

		tile.find(".compare-check")[0].checked = false;
	}
	/**
	 * @private
	 * @function
	 * description Initializes the cache of compare container
	 */
	function initializeCache() {
		$cache = {
			primaryContent : $("#primary"),
			compareContainer : $("#compare-items"),
			compareButton : $("#compare-items-button"),
			clearButton : $("#clear-compared-items"),
			comparePanel : $("#compare-items-panel")
		};
	}
	/**
	 * @private
	 * @function
	 * @description Initializes the DOM-Object of the compare container
	 */
	function initializeDom() {
		_currentCategory = $cache.compareContainer.data("category") || "";
		var active = $cache.compareContainer.find(".compare-item").filter(".active");
		active.each(function () {
			var uuid = this.id.substr(CI_PREFIX.length);
			var tile = $("#"+uuid);
			if (tile.length === 0 ) { return; }

			tile.find(".compare-check")[0].checked = true;
		});
		// set container state
		refreshContainer();
	}
	/**
	 * @private
	 * @function
	 * @description Initializes the events on the compare container
	 */
	function initializeEvents() {
		// add event to buttons to remove products
		$cache.primaryContent.on("click", ".compare-item-remove", function (e, async) {
			var item = $(this).closest(".compare-item");
			var uuid = item[0].id.substr(CI_PREFIX.length);
			var tile = $("#"+uuid);
			var args = {
				itemid : item.data("itemid"),
				uuid : uuid,
				cb :  tile.length===0 ? null : tile.find(".compare-check"),
				async : async
			};
			app.product.compare.removeProduct(args);
			refreshContainer();
		});

		// Button to go to compare page
		$cache.primaryContent.on("click", "#compare-items-button", function () {
			window.location.href = app.util.appendParamToURL(app.urls.compareShow, "category", _currentCategory);
		});

		// Button to clear all compared items
		$cache.primaryContent.on("click", "#clear-compared-items", function () {
			_isClearing = true;
			$cache.compareContainer.hide()
								   .find(".active .compare-item-remove")
								   .trigger("click", [false]);
			_isClearing = false;

		});
	}

	/*************** app.product.compare public object ***************/
	app.product.compare = {
		/**
		 * @function
		 * @description Cache, events and initialization
		 */
		init : function () {
			initializeCache();
			initializeDom();
			initializeEvents();
		},
		initCache : initializeCache,
		/**
		 * @function
		 * @description Adds product to the compare table
		 */
		addProduct : function (args) {
			var items = $cache.compareContainer.find(".compare-item");
			var cb = $(args.cb);
			var ac = items.filter(".active").length;
			if(ac===MAX_ACTIVE) {
				if(!window.confirm(app.resources.COMPARE_CONFIRMATION)) {
					cb[0].checked = false;
					return;
				}

				// remove product using id
				var item = items.first();

				// safety check only. should never occur.
				if (item[0].id.indexOf(CI_PREFIX)!==0) {
					cb[0].checked = false;
					window.alert(app.resources.COMPARE_ADD_FAIL);
					return;
				}
				var uuid = item[0].id.substr(CI_PREFIX.length);
				app.product.compare.removeProduct({
					itemid: item.data("itemid"),
					uuid: uuid,
					cb: $("#"+uuid).find(".compare-check"),
					ajaxCall: false
				});
			}

			app.ajax.getJson({
				url : app.urls.compareAdd,
				data : { 'pid' : args.itemid, 'category' : _currentCategory },
				callback : function (response) {
					if (!response || !response.success) {
						// response failed. uncheck the checkbox return
						cb[0].checked = false;
						window.alert(app.resources.COMPARE_ADD_FAIL);
						return;
					}

					// item successfully stored in session, now add to list...
					addToList(args);
				}
			});
		},
		/**
		 * @function
		 * @description Removes product from the compare table
		 */
		removeProduct : function (args) {
			if (!args.itemid) { return; }
			var cb = args.cb ? $(args.cb) : null;
			var ajaxCall = args.ajaxCall ? $(args.ajaxCall) : true;
			if(ajaxCall) {
				app.ajax.getJson({
					url : app.urls.compareRemove,
					data : { 'pid' : args.itemid, 'category' : _currentCategory },
					callback : function (response) {
						if (!response || !response.success) {
							// response failed. uncheck the checkbox return
							if (cb && cb.length > 0) { cb[0].checked = true; }
							window.alert(app.resources.COMPARE_REMOVE_FAIL);
							return;
						}

						// item successfully removed session, now remove from to list...
						removeFromList(args.uuid);
					}
				});
			} else {
				app.ajax.getJson({
					url : app.urls.compareRemove,
			        async: false,
					data : { 'pid' : args.itemid, 'category' : _currentCategory },
					callback : function (response) {
						if (!response || !response.success) {
							// response failed. uncheck the checkbox return
							if (cb && cb.length > 0) { cb[0].checked = true; }
							window.alert(app.resources.COMPARE_REMOVE_FAIL);
							return;
						}

						// item successfully removed session, now remove from to list...
						removeFromList(args.uuid);
					}
				});
			}
				
		}
	};

}(window.app = window.app || {}, jQuery));

/**
 * @class app.compare
 */
(function (app, $) {
	var $cache = {};
	/**
	 * @private
	 * @function
	 * @description Initializes the cache on the compare table
	 */
	function initializeCache() {
		$cache = {
			compareTable : $("#compare-table"),
			categoryList : $("#compare-category-list")
		};
	}
	/**
	 * @private
	 * @function
	 * @description Initializes the DOM on the product tile
	 */
	function initializeDom() {
		app.product.tile.init();
	}
	/**
	 * @private
	 * @function
	 * @description Binds the click events to the remove-link and quick-view button
	 */
	function initializeEvents() {
		$cache.compareTable.on("click", ".remove-link", function (e) {
			e.preventDefault();
			app.ajax.getJson({
				url : this.href,
				callback : function (response) {
					app.page.refresh();
				}
			});
		})
		.on("click", ".open-quick-view", function (e) {
			e.preventDefault();
			var form = $(this).closest("form");
			app.quickView.show({
				url:form.attr("action"),
				source:"quickview",
				data:form.serialize()
			});
		});

		$cache.categoryList.on("change", function () {
			$(this).closest("form").submit();
		});
	}

	/*************** app.compare public object ***************/
	app.compare = {
		/**
		 * @function
		 * @description Initializing of Cache, DOM and events
		 */
		init : function () {
			initializeCache();
			initializeDom();
			initializeEvents();
			app.product.initAddToCart();
		}
	};


}(window.app = window.app || {}, jQuery));

/**
 * @class app.sendToFriend
 */
(function (app, $) {
	var $cache = {},
		initialized=false;
	/**
	 * @private
	 * @function
	 * @description Initializes the events (preview, send, edit, cancel and close) on the send to friend form
	 */
	function initializeEvents() {
		app.util.limitCharacters();
		if (initialized) {return; }
		$cache.dialog.on("click", ".preview-button, .send-button, .edit-button", function (e) {
			e.preventDefault();
			$cache.form.validate();
			if (!$cache.form.valid()) {
				return false;
			}
			var requestType = $cache.form.find("#request-type");
			if (requestType.length>0) {
				requestType.remove();
			}
			$("<input/>").attr({id:"request-type", type:"hidden", name:$(this).attr("name"), value:$(this).attr("value")}).appendTo($cache.form);
			var data = $cache.form.serialize();
			app.ajax.load({url:$cache.form.attr("action"),
				   data: data,
				   target: $cache.dialog,
				   callback: function() {
						app.validator.init();
						app.util.limitCharacters();
						$cache.form = $("#send-to-friend-form");
						$(".ui-dialog-content").dialog("option", "position", "center");
				   }
			});
		})
		.on("click", ".cancel-button, .close-button", function (e) {
			e.preventDefault();
			$cache.dialog.dialog("close");
		});
		initialized=true;
	}

	/*************** app.sendToFriend public object ***************/
	app.sendToFriend = {
		init : function () {
			$cache = {
				form: $("#send-to-friend-form"),
				dialog: $("#send-to-friend-dialog"),
				pdpForm: $("form.pdpForm")
			};
			initializeEvents();
		},

		/**
		 * @function
		 * @description
		 */
		initializeDialog : function (eventDelegate, eventTarget) {
			$(eventDelegate).on("click", eventTarget, function (e) {
				e.preventDefault();
				var dlg = app.dialog.create({target:$("#send-to-friend-dialog"), options:{
					width:800,
					height:'auto',
					title:this.title,
					open:function() {
						app.sendToFriend.init();
						app.validator.init();
					}
				}});

				var data = app.util.getQueryStringParams($("form.pdpForm").serialize());
				if (data.cartAction) {
					delete data.cartAction;
				}
				var url = app.util.appendParamsToUrl(this.href, data);
				url = this.protocol + "//" + this.hostname + ((url.charAt(0)==="/") ? url : ("/"+url));
				app.ajax.load({
					url:app.util.ajaxUrl(url),
					target:dlg,
					callback: function () {
						dlg.dialog("open");	 // open after load to ensure dialog is centered
					}
				});
			});
		}
	};
	
}(window.app = window.app || {}, jQuery));


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * @class app.quickview
 */
(function (app, $) {
	var $cache = {};
	/**
	 * @function
	 * @description Binds a 'click'-event to the quick view button
	 */
	function bindQvButton() {
		$cache.qvButton.one("click", function (e) {
			e.preventDefault();
			app.quickView.show({
				url : $(this).attr("href"),
				source : "quickview"
			});
		});
	}

	/******* app.quickView public object ********/
	app.quickView = {
		/**
		 * @function
		 * @description
		 */
		initializeButton : function (container, target) {
			// quick view button
			$(container).on("mouseenter", target, function (e) {
				if(!$cache.qvButton) {
					$cache.qvButton = $("<a id='quickviewbutton'/>");
				}
				bindQvButton();

				var link = $(this).children("a:first");
				$cache.qvButton.attr({
					"href" : link.attr("href"),
					"title" : link.attr("title")
				}).appendTo($(this));
			});
		},
		init : function () {
			if(app.quickView.exists()) {
				return $cache.quickView;
			}

			$cache.quickView = $("<div/>").attr("id", "#QuickViewDialog").appendTo(document.body);
			return $cache.quickView;
		},
		
		initializeQuickViewNav : function(qvUrl) {
			
			//from the url of the product in the quickview
			qvUrlTail = qvUrl.substring(qvUrl.indexOf('?'));
			qvUrlPidParam = qvUrlTail.substring(0,qvUrlTail.indexOf('&'));
			qvUrl = qvUrl.substring(0, qvUrl.indexOf('?'));
			
			if(qvUrlPidParam.indexOf('pid') > 0){
				//if storefront urls are turned off
				//append the pid to the url
				qvUrl = qvUrl+qvUrlPidParam;
			}
			
			this.searchesultsContainer = $('#search-result-items').parent();
			this.productLinks = this.searchesultsContainer.find('.thumb-link');

			this.btnNext = $('.quickview-next');
			this.btnPrev = $('.quickview-prev');

			this.btnNext.click(this.navigateQuickview.bind(this));
			this.btnPrev.click(this.navigateQuickview.bind(this));

			var productLinksUrl = "";
			for ( var i = 0; i < this.productLinks.length; i++) {

				productLinksUrlTail = this.productLinks[i].href.substring(this.productLinks[i].href.indexOf('?'));
				productLinksUrlPidParam = productLinksUrlTail.substring(0,qvUrlTail.indexOf('&'));
				if(productLinksUrlPidParam.indexOf('pid') > 0){
					//append the pid to the url
					//if storefront urls are turned off
					productLinksUrl = this.productLinks[i].href.substring(0, this.productLinks[i].href.indexOf('?'));
					productLinksUrl = productLinksUrl+productLinksUrlPidParam;
				
				}else{
					productLinksUrl = this.productLinks[i].href.substring(0, this.productLinks[i].href.indexOf('?'));
				}
			
				if(productLinksUrl == ""){
					productLinksUrl = this.productLinks[i].href;
				}
				
				if (qvUrl == productLinksUrl) {
					this.productLinkIndex = i;
				}
			}

			if (this.productLinkIndex == this.productLinks.length - 1) {
				this.btnNext.hide();
			}

			if (this.productLinkIndex == 0) {
				this.btnPrev.hide();
			}

			//hide the buttons on the compare page
			if($('.compareremovecell').length > 0){
				this.btnNext.hide();
				this.btnPrev.hide();
			}
			
		},

		navigateQuickview : function(event) {
			var button = $(event.currentTarget);

			if (button.hasClass('quickview-next')) {
				this.productLinkIndex++;
			} else {
				this.productLinkIndex--;
			}

			app.quickView.show({
				url : this.productLinks[this.productLinkIndex].href,
				source : 'quickview'
			});

			event.preventDefault();
		},
		
		// show quick view dialog and send request to the server to get the product
		// options.source - source of the dialog i.e. search/cart
		// options.url - product url
		/**
		 * @function
		 * @description
		 */
		show : function (options) {
			options.target = app.quickView.init();
			options.callback = function () {
				app.product.init();
				app.dialog.create({
					target : $cache.quickView,
					options : {
						height : 'auto',
						width : 920,
						dialogClass : 'quickview',
						title : 'Product Quickview',
						resizable : false,
						position : 'center',
						open : function () {
							app.progress.hide();
						}
					}
				});
				$cache.quickView.dialog('open');
				
				app.quickView.initializeQuickViewNav(this.url);
			};
			app.product.get(options);

			return $cache.quickView;
		},
		// close the quick view dialog
		close : function () {
			if($cache.quickView) {
				$cache.quickView.dialog('close').empty();
				return $cache.quickView;
			}
		},
		exists : function () {
			return $cache.quickView && ($cache.quickView.length > 0);
		},
		isActive : function () {
			return $cache.quickView && ($cache.quickView.length > 0) && ($cache.quickView.children.length > 0);
		},
		container : $cache.quickView
	};
	
}(window.app = window.app || {}, jQuery));


/***/ }),
/* 12 */
/***/ (function(module, exports) {

//TODO - move to a better spot. Currently placed in this file as it lives in the same place
// in the original app.js
(function(app){

	function isMobile() {
		var mobileAgentHash = ["mobile","tablet","phone","ipad","ipod","android","blackberry","windows ce","opera mini","palm"];
		var	idx = 0;
		var isMobile = false;
		var userAgent = (navigator.userAgent).toLowerCase();

		while (mobileAgentHash[idx] && !isMobile) {
			isMobile = (userAgent.indexOf(mobileAgentHash[idx]) >= 0);
			idx++;
		}
		return isMobile;
	}

	app.isMobileUserAgent = function()
	{
		return isMobile();
	};

	app.zoomViewerEnabled = function()
	{
		return (!isMobile());
	};

	app.isDesktopBreakpoint = function()
	{
		if (window.matchMedia(app.storefront.inflections.enquire.md).matches) {
			return true; /* desktop */
		}
		else {
			return false; /* mobile or tablet */
		}

	};

}(window.app = window.app || {}));

//String.trim() for IE8
if (typeof(String.prototype.trim) === 'undefined') {
	String.prototype.trim = function() {
	    return this.replace(/^\s+|\s+$/g, '');
	};
}

// jquery extensions
(function ($) {
	// params
	// toggleClass - required
	// triggerSelector - optional. the selector for the element that triggers the event handler. defaults to the child elements of the list.
	// eventName - optional. defaults to 'click'
	$.fn.toggledList = function (options) {
		if (!options.toggleClass) { return this; }

		var list = this;
		function handleToggle(e) {
			e.preventDefault();
			var classTarget = options.triggerSelector ? $(this).parent() : $(this);
			classTarget.toggleClass(options.toggleClass);
			// execute callback if exists
			if (options.callback) { options.callback(); }
		}

		return list.on(options.eventName || "click", options.triggerSelector || list.children(), handleToggle);
	};

	$.fn.syncHeight = function () {
		function sortHeight(a, b) {
			return $(a).height() - $(b).height();
		}

		var arr = $.makeArray(this);
		arr.sort(sortHeight);
		return this.height($(arr[arr.length-1]).height());
	};
}(jQuery));

//general extension functions
(function () {
	String.format = function() {
		var s = arguments[0];
		var i,len=arguments.length - 1;
		for (i = 0; i < len; i++) {
			var reg = new RegExp("\\{" + i + "\\}", "gm");
			s = s.replace(reg, arguments[i + 1]);
		}
		return s;
	};
})();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop d-none ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*jshint eqnull:true */
/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function (key, value, options) {

		// key and at least value given, set cookie...
		if (value !== undefined && !/Object/.test(Object.prototype.toString.call(value))) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=/'  : '; path=/',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}

		return null;
	};

	$.cookie.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key, options) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/**
  PDP v2 js
  @author Niels Doe <n.doe@connectingthedots.nl>
**/

const personalizeModalObserver = __webpack_require__(1);

// Create header promo swiper on window load / #topstrip #evergreen #pencil
$(window).on('load',function(){
    if($('header .topstrip-evergreen >.content-asset').length && !$('header .topstrip-evergreen >.content-asset.slick-initialized').length) {
        $('header .topstrip-evergreen >.content-asset').slick({
            dots: false
        });

        if (!$('header .topstrip-evergreen .js-promo-close').length) {
            $('header .topstrip-evergreen').append('<span class="js-promo-close"></span>');
        }

        $(document).on('click','header .topstrip-evergreen .js-promo-close', function(){
            $('header .topstrip-evergreen').slideUp(160);
        });

    }
});

//var pdpV2 = true; // Disable before going live
if (typeof pdpV2 !== 'undefined' && pdpV2) {
    var windowWidth,
        headerHeight,
        navbarHeight,
        galleryHeight,
        mainWidth = 0,
        scrollOffset,
        scrollTop = 0,
        $navbar,
        smallScreens = 1023,
        ctdDebug = false,
        fireLazyOn = "load",
        isTouchDevice = false,
        initLoad = true,
        mbElementInitLoad = $('.mb-wrapper').length ? true : false,
        originalWindowWidth;

    /**
        Trigger events
    **/

    var devLazyLoadEnabled = $('.pdp-sections.-lazy-load').hasClass('should-load');

    !devLazyLoadEnabled ? window.scrollTo(0,0) : null;

    $('html').addClass('-is-pdp');
    $('body').css('margin-top',0);

    // Quantum PDP
    if ($('h1[data-productname*=Quantum]').length) {
        $('html').addClass('-is-quantum-pdp -darkmode');
    }

    $(document).on('ready',function(){
        originalWindowWidth = $(window).width();
        $(document).trigger('resize');
        $(document).trigger('pdpReady');
    });

    /*  ====================
        Vertebrae functions
    ======================== */

    function heroGalleryAfterChange() {
        $('.hero-gallery').on('afterChange', '.hero-slider.slick-slider', function(slick){
            var contextClass;
            if(windowWidth > smallScreens) {
                contextClass = '.hero-gallery.-main';
            } else {
                contextClass = '.hero-gallery.-side';
            }
            if ($(contextClass + ' .hero-slider.slick-slider .slick-active').hasClass('vert3d-slide')) {
                if(!$(contextClass + ' .hero-slider.slick-slider .vert3d-slide iframe').length || $(contextClass + ' .hero-slider.slick-slider .vert3d-slide iframe').contents().find("body").contents().length == 0) {
                    shouldLoadPlayer = true;
                    loadVert3d();
                    $('.hero-gallery .hero-slider.slick-slider .vert3d-slide').removeClass('-initial');
                }
            }
        });
    }

    $(window).on('resize',function(event){
        if(typeof event != 'undefined' && event.detail == 'resizeAR'){
            return;
        }
        windowWidth = $(window).width();
        headerHeight = $('body>header').height();
        if(originalWindowWidth != $(window).width() || initLoad) {
            initLoad = false;
            originalWindowWidth = $(window).width();
            if (mbElementInitLoad) {
                mbElementInitLoad = false;
                return false;
            }
            $(document).trigger('pdpResize');
        }
    });

    /**
        Events functions
    **/
    $(document).keydown(function(e) {
        if(e.keyCode == 37) { // left
            if($('.hero-gallery.-main').hasClass('in-view')) {
                $('.hero-gallery.-main .slick-slider').slick('slickPrev');
            }
        } else if(e.keyCode == 39) { // right
            if($('.hero-gallery.-main').hasClass('in-view')) {
                $('.hero-gallery.-main .slick-slider').slick('slickNext');
            }
        } else if(e.keyCode == 27) { // Escape
            if($('.hero-gallery.-main').hasClass('-is-expanded')) {
                closeExpandedGallery();
            }
        }
    });

    $(document).on('pdpReady',function(){
        if (ctdDebug) { console.log('pdpReady'); }

        $('html').addClass('pdpReady');

        //navbarHeight = $('.pdp-top-bar.-v2').length ? navbarHeight = $('.pdp-top-bar.-v2').height() : $('.pdp-navbar.-v2').height();
        !devLazyLoadEnabled ? $('html').scrollTop(0) : null;

        // Create back-to-top button
        $('.pdp-wrapper').append('<div class="js-scroll -back-to-top" data-section="top"></div>');

        // Load Vertebrae AR
        loadAxisButton();

        // Decrease unwanted whitespace
        $('.pdp-wrapper .sidebar .product-info > *').each(function(){
            if ($(this).outerHeight() < 1 && !$(this).hasClass('klarna') && !$(this).hasClass('pricing')){
                $(this).addClass('-redundant-space');//.hide();
            }
        });

        //Move ZIP out of 'Whybuy
        if($('.sidebar #zip-product-widg').length){
            $('.sidebar #zip-product-widg').appendTo('.pdp-wrapper .sidebar .product-info');
        }

        // Load Reviews to get summary
        loadReviews();

        $('.hero-gallery .hero-slider.slick-slider').on('afterChange', function(slick){
            if ($('.hero-gallery .hero-slider.slick-slider .slick-active').hasClass('-is-360')) {
                // 360 stuff
                // Disable swipe on slider
                $('.hero-gallery .hero-slider.slick-slider').addClass('-has-360-active');
                // Disable click on slide

            } else {
                $('.hero-gallery .hero-slider.slick-slider').removeClass('-has-360-active');
            }
        });

        if (fireLazyOn == "ready" && !devLazyLoadEnabled) {
            setTimeout(function(){ $(document).trigger('pdpLazyReady'); }, 400);
        }

        combineBoleto();

    });

    function loadReviews(create) {
        if($('.pdp-reviews [data-tab="reviews"]').length) {
            $('.pdp-reviews [data-tab="reviews"] h3').click().parent().removeClass('-active');
        }

        if (create) {
            setTimeout(function() {
                createSummary();
            }, 4000);
        }
    }

    $(document).on('pdpLazyReady',function(){
        if (ctdDebug) { console.log('pdpLazyReady'); }

        $('html').addClass('pdpLazyReady');
        window.scrollTo(0,0);

        !devLazyLoadEnabled ? $(window).scroll() : null;

        // Lazy load images
        $('.pdp-wrapper img[data-src]:not(.personalization-media__image)').each(function(){
            var src = $(this).attr('data-src');
            $(this).attr('src',src);
        });

        $('.-lazy-load').removeAttr('data-state');

        // Create Accessories swiper
        if($('section[data-section=accessories] .tiles-container').length && !$('section[data-section=accessories] .slick-initialized').length) {

            if ($('section[data-section=accessories] .grid-tile').length == 1){
                $('section[data-section=accessories] .grid-tile').parent().addClass('-single');
            }

            $('section[data-section=accessories] .tiles-container').slick({
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1400,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                    breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                    breakpoint: 1032,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                    breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 1.5
                        }
                    }
                ]
            });
        }


        // Destroy previous slick action (former PDP)
        if($('section[data-section=ymal] .slick-initialized').length) {
            $('section[data-section=ymal] .slick-initialized').slick('unslick');
        }

        // Create YMAL swiper
        if($('section[data-section=ymal] .tiles-container').length && !$('section[data-section=ymal] .slick-initialized').length) {

            $('section[data-section=ymal] .tiles-container .grid-tile').each(function(){
                $(this).removeClass('slick-slide');
                $(this).wrapAll('<div class="slick-slide"></div>');
            })

            if ($('section[data-section=ymal] .grid-tile').length == 1){
                $('section[data-section=ymal] .grid-tile').parent().addClass('-single');
            }

            $('section[data-section=ymal] .tiles-container').slick({
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1400,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                    breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                    breakpoint: 1032,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                    breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 1.5
                        }
                    }
                ]
            });
        }

        // Create Features swiper
        if($('section[data-section=features] .feature-slider').length && !$('section[data-section=features] .feature-slider .slick-initialized').length) {
            $('section[data-section=features] .feature-slider').slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                    },
                    {
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 2
                    }
                    },
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                        slidesToShow: 1
                        }
                    }
                ]
            });
        }

        if($('section[data-section=ymal] .tiles-container .slick-initialized').length) {
            $('section[data-section=ymal] .slick-slider')[0].slick.refresh();
        }

        if ($('.hero-gallery.-main .slick-dots img[src*="_360"]').length) {
            $('.hero-gallery.-main .slick-dots img[src*="_360"]').parent().addClass('-is-360');
        }

    });

    function createSummary() {
        if(!$('.pdp-reviews .initial-content > *').length && $('.pdp-wrapper .pdp-reviews [data-bv-ready="true"]').length) {
            $('#BVRRSearchContainer .bv-content-product-stats').clone().wrapAll('<div class="bv-content-product-stats"></div>').appendTo('.pdp-reviews .initial-content');

            $('.pdp-wrapper .sidebar .bv_stars_component_container').clone().wrapAll('<div class="bv_stars_component_container"></div>').prependTo('.pdp-reviews .initial-content');

            $('.pdp-reviews [data-tab="reviews"] .bv-write-review').clone().appendTo('.pdp-reviews .initial-content');
        }
    }

    $(document).on('pdpResize',function(){
        if (ctdDebug) { console.log('pdpResize'); }

        var gallerySide = $('.hero-gallery.-side');
        var selectedMedia = null;

        gallerySide.length ? selectedMedia =  gallerySide.siblings('.personalization-media-item[style*="display: flex"]') : null;

        // loadVert3d();

        // Set scroll offset
        //$('html').css('scroll-padding-top',headerHeight);

        // Set root variable
        document.documentElement.style.setProperty('--headerHeight', headerHeight + 'px');

        resizeFeatureHeadline();

        // 360 imagery in gallery
        if ($('.hero-gallery.-main .hero-slider > div > img[data-src*="_360"]').length) {
            $('.hero-gallery.-main .hero-slider > div > img[data-src*="_360"]').parent().addClass('-is-360');
            $('.hero-gallery.-main .hero-slider .-is-360:first').addClass('-has-360');
            $('.hero-gallery.-main .hero-slider .-is-360:not(:first) img').each(function(){
                $(this).attr('data-src-360',$(this).attr('data-src')).removeAttr('data-src').removeAttr('src');
                $(this).appendTo('.hero-gallery.-main .hero-slider .-is-360:first');
            });
            $('.hero-gallery.-main .hero-slider .-is-360:not(:first)').remove();
        }

        if (windowWidth > smallScreens) {
            navbarHeight = $('.pdp-navbar.-v2').height();
            scrollOffset = (navbarHeight + headerHeight - 48);
            mainWidth = $('.pdp-sections').outerWidth();
            galleryHeight = $('.hero-gallery.-main').outerHeight();

            // Create dynamic bars
            !$('.pdp-sections.-lazy-load').hasClass('should-load') ? createDesktopNavbar() : null;

            $navbar = $('.pdp-navbar.-v2');

            if (ctdDebug) { console.log('large screen'); }

            if (window.app.preferences.personalizeRedesign &&
                window.spectrumMasterProduct &&
                window.spectrumMasterProduct[0] &&
                app.product.getCookiesReceipes("", window.spectrumMasterProduct[0]).length) {
                $('.personalized-option-custom').click();
            }
            if (selectedMedia) {
                if (selectedMedia.length) {

                    var personalizationMedia = $('.pdp-wrapper .main .personalization-media');

                    personalizationMedia.append(gallerySide.siblings('.personalization-media-item').clone());
                    personalizationMedia.find('#' + selectedMedia.attr('id')).css('display', 'flex');
                    gallerySide.siblings('.personalization-media-item').remove();
                }
            }

            // Create gallery swiper
            if(!$('.hero-gallery.-main .slick-initialized').length) {
                if($('.hero-gallery.-side .slick-initialized').length) {
                    $('.hero-gallery.-side .hero-slider').slick('unslick');
                }

                $('.hero-gallery.-main .hero-slider').slick({
                    dots: true,
                    infinite: false,
                    customPaging: function(slick,index) {
                        var targetImage = slick.$slides.eq(index).find('img').attr('data-src');
                        return '<img loading="lazy" src="' + targetImage + '" alt="Gallery Image ' + index + '"/>';
                    }
                });

            }

            // Destroy Features-LS swiper
            if($('section[data-section=features] .expanded-features').length && $('section[data-section=features] .expanded-features.slick-initialized').length) {
                $('section[data-section=features] .expanded-features').slick('unslick');
            }

            $('.pdp-wrapper.-v2 .sidebar>.inside').removeClass('-at-bottom');


        } else {

            navbarHeight = $('.pdp-top-bar.-v2').height();
            scrollOffset = $('.pdp-top-bar').outerHeight() + 32;
            galleryHeight = $('.hero-gallery.-side').outerHeight();

            // Duplicate main gallery into side gallery
            if(!$('.hero-gallery.-side .hero-slider').length) {
                if($('.hero-gallery.-main .slick-initialized').length) {
                    $('.hero-gallery.-main .hero-slider').slick('unslick');
                }

                $('.hero-gallery.-main .hero-slider').clone().appendTo('.hero-gallery.-side');

                $('.hero-gallery.-side .hero-slider').slick({
                    dots: true,
                    lazyLoad: 'ondemand'
                });

            } else if (!$('.hero-gallery.-side .slick-initialized').length) {
                $('.hero-gallery.-side .hero-slider').slick({
                    dots: true,
                    lazyLoad: 'ondemand'
                });
            }

            // Duplicate video button into side gallery
            if(!$('.hero-gallery.-side .video-button').length && $('.hero-gallery.-main .video-button').length ) {
                $('.hero-gallery.-main .video-button').clone().appendTo('.hero-gallery.-side');
            }

            // Duplicate AR button into side gallery
            if(!$('.hero-gallery.-side .js-vertAr').length && $('.hero-gallery.-main .js-vertAr').length ) {
                $('.hero-gallery.-main .js-vertAr').clone().appendTo('.hero-gallery.-side');
            }

            // Duplicate EOL into side gallery
            if(!$('.hero-gallery.-side .eol').length && $('.hero-gallery.-main .eol').length ) {
                $('.hero-gallery.-main .eol').clone().appendTo('.hero-gallery.-side');
            }

            // Duplicate labels into side gallery
            if(!$('.hero-gallery.-side .labels').length && $('.pdp-wrapper .main > .labels').length ) {
                $('.pdp-wrapper .main > .labels').clone().appendTo('.hero-gallery.-side');
            }
            if(!$('.hero-gallery.-side .pdp-badges').length && $('.pdp-wrapper .main > .pdp-badges').length ) {
                $('.pdp-wrapper .main > .pdp-badges').clone().appendTo('.hero-gallery.-side');
            }

            // Duplicate PZ into side gallery
            if($('.pdp-wrapper .main .personalization-media-item').length) {
                gallerySide.siblings('.personalization-media-item').remove();
                $('.pdp-wrapper .main .personalization-media-item').clone().insertAfter('.hero-gallery.-side');
                $('.pdp-wrapper .main .personalization-media').children().remove();
            }

            // Create Features-LS swiper
            if($('section[data-section=features] .expanded-features').length && !$('section[data-section=features] .expanded-features.slick-initialized').length) {
                $('section[data-section=features] .expanded-features').slick({
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                });
            }

            if (ctdDebug) { console.log('small screen'); }
            if (ctdDebug) { console.log(navbarHeight); }
            if (ctdDebug) { console.log(scrollOffset); }

            // Make sidebar un-sticky
            $('.pdp-wrapper.-v2 .sidebar>.inside').removeAttr('style');

            // Create dynamic bars
            // createMobileTopBar();
            // createMobileBottomBar();

        }

        if($('.sidebar .product-price').length){
            //if($('.sidebar .pricing .Installments').length){
            //    $('.sidebar .main-info').css('min-height',$('.sidebar .product-price').outerHeight() - 8);
            //} else {
                $('.sidebar .main-info').css('min-height',$('.sidebar .product-info .pricing .product-price').outerHeight() - 8);
            //}
        }

        $('.hero-gallery').off('afterChange');
        heroGalleryAfterChange();

    });

    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        checkActiveNavItem();

        // Dock Desktop navbar
        if ($('.pdp-navbar.-v2').length) {
            dockElement($('.pdp-navbar.-v2'), $('.pdp-sections'), scrollTop, scrollOffset);
        }

        // Dock sidebar
        if ($('.pdp-wrapper.-v2 .sidebar>.inside').length && !$('.-lazy-load[data-state]').length) {
            dockElement($('.pdp-wrapper.-v2 .sidebar>.inside'), $('.pdp-wrapper.-v2 .sidebar'), scrollTop, 0);
        }

        // Close expanded gallery
        if ($('.pdp-wrapper.-has-expanded-gallery').length) {
            if (scrollTop > parseInt($('.pdp-wrapper').attr('current-scroll')) + 100 ) {
                closeExpandedGallery();
            }
        }

        // Show/hide back to top
        if ($('.js-scroll.-back-to-top').length) {
            if (scrollTop > 150 ) {
                $('.js-scroll.-back-to-top').addClass('-active');
            } else {
                $('.js-scroll.-back-to-top').removeClass('-active');
            }
        }



    });

    /**
        Named Functions
    **/

    function combineBoleto(){
        if ($('.sidebar .Installments').length && $('.sidebar .boleto-msg').length && !$('.sidebar .boleto').length) {
            $('.sidebar .Installments').next('.boleto-msg').andSelf().wrapAll('<div class="boleto" />');
        }
    }

    function preloadZoomedSrcs(elements){
        // Deprecated
        if (elements == 'all') {
            if (windowWidth > smallScreens && $('.hero-gallery.-main .hero-slider img[data-zoom]').length){

                $('.hero-gallery.-main .hero-slider div:not(.slick-cloned) img[data-zoom]:first').each(function(){
                    if (!$('.hero-gallery.-main .loupe-hidden img[data-src="' + $(this).attr('data-src') + '"]').length) {
                        $(this).clone().appendTo('.hero-gallery.-main').attr('src',$(this).attr('data-zoom')).wrapAll('<div class="loupe-hidden" />');
                    }
                });
            }
        } else {

            $('.hero-gallery.-main .hero-slider .slick-active img:first').clone().appendTo('.hero-gallery.-main').attr('src',$('.hero-gallery.-main .hero-slider .slick-active img:first').attr('data-zoom')).wrapAll('<div class="loupe-hidden" />');

        }
    }

    function loadVert3d(){
        var isPZView = $('.personalized-option-custom.active').length;

        if (!isPZView && shouldLoadPlayer && typeof vert3d !== 'undefined' && vert3d) {
            removeAxisPlayers();
            var contextClass;
            if(windowWidth > smallScreens) {
                contextClass = '.hero-gallery.-main';
            } else {
                contextClass = '.hero-gallery.-side';
            }
            $AXIS("loadAxisPlayer", {
                productId: sku,//Or Other SKU
                container: contextClass + " .hero-slider.slick-slider .vert3d",
            });
            loadAxisButton();
        }
    }

    function resizeFeatureHeadline(){
        // Resize Feature headlines
        if ($('section[data-section=features] .feature-slider').length) {
            var featureHeadlineHeight = 0;
            $('section[data-section=features] .feature-slider h3').each(function(){
                if ( $(this).outerHeight() > featureHeadlineHeight ) {
                    featureHeadlineHeight = $(this).height();
                    $('section[data-section=features] .feature-slider h3').css('min-height',featureHeadlineHeight);
                }
            });
        }
    }

    function dockElement($el, $wrapper, scrollTop, scrollOffset){
        if (scrollTop > ($wrapper.position().top + $wrapper.outerHeight()) - $el.outerHeight() + scrollOffset ) {
            if(!$el.hasClass('js-at-bottom')) {
                $el.addClass('js-at-bottom').removeClass('js-is-fixed');
            }
        } else if (scrollTop > ($wrapper.position().top) + scrollOffset){
            if(!$el.hasClass('js-is-fixed')) {
                $el.addClass('js-is-fixed').removeClass('js-at-bottom');
            }
        } else {
            if($el.hasClass('js-is-fixed')) {
                $el.removeClass('js-is-fixed').removeClass('js-at-bottom');
            }
        }
    }

    function createDesktopNavbar(){
        if (!$('.pdp-navbar.-v2').length) {
            $('<div class="pdp-navbar -v2"><ul class="inside"></ul></div>').prependTo('.pdp-wrapper .main .pdp-sections');
            var $navbarList = $('.pdp-navbar.-v2 ul');
            $('.pdp-wrapper.-v2 .main section[data-headline]').each(function(){
                var headline = $(this).attr('data-headline');
                    section = $(this).attr('data-section');
                    $navbarList.append('<li data-section="'+ section +'" class="js-scroll">' + headline + '</li>');
            });
        }
    }

    function updateTopBarPricing() {
        var mainPricing = $('.sidebar .pricing').clone();
        mainPricing.find('.product-price').removeClass('product-price');

        return mainPricing.html();
    }

    function createMobileTopBar(){
        if (!$('.pdp-top-bar.-v2').length) {
            var headline = $('.pdp-wrapper.-v2 .sidebar .headline').length ? $('.sidebar .headline').text() : '';
            var pricing = updateTopBarPricing();
            //var rating = $('.pdp-wrapper.-v2 .sidebar .bv_stars_component_container').length ? $('.sidebar .bv_stars_component_container').html() : '';
            $('<div class="pdp-top-bar -v2"><div class="info"><h2>' + headline + '</h2><div class="sub"><div class="pricing">' + pricing + '</div></div></div><select class="pdp-sections"></select></div>').prependTo('body');
            createTopBarSelect();
        }
    }

    function createTopBarSelect() {
        var $topBarSelect = $('.pdp-top-bar.-v2 select.pdp-sections');
        $('.pdp-wrapper.-v2 .main section[data-headline]').each(function(){
            var headline = $(this).attr('data-headline');
                section = $(this).attr('data-section');
                $topBarSelect.append('<option value="'+ section +'" data-section="'+ section +'" class="js-scroll">' + headline + '</option>');
        });
    }

    function createMobileBottomBar(){
        if (!$('.pdp-bottom-bar.-v2').length) {
            var $markedElements = '';
            if ($('.pdp-wrapper.-v2 .sidebar .-bottombar').length) {
                $('.pdp-wrapper.-v2 .sidebar .-bottombar').each(function(){
                    $markedElements = $markedElements + $(this).html();
                });
            }
            $('<div class="pdp-bottom-bar -v2 d-none"><div class="info">' + $markedElements + '</div><div class="js-scroll" data-section="top"></div></div>').insertAfter('.pdp-wrapper.-v2');
        }
    }

    function scrollTo(section){
        if ($('section[data-section="' + section + '"]').length) {
            if (ctdDebug) { console.log('scrolling to "' + section + '"'); }
            $('html, body').stop().animate({
                scrollTop: $('section[data-section="' + section + '"]').offset().top - scrollOffset
            }, 800);
        } else if (section == "top") {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 800);
        }
    }

    function checkActiveNavItem(){
        $('.pdp-wrapper section[data-section]').each(function(){
            var section = $(this).attr('data-section');
            if ($(window).scrollTop() > ($(this).offset().top - scrollOffset - 8)){
                if ($navbar) {
                    $navbar.find('li').removeClass('active');
                    $navbar.find('li[data-section="' + section + '"]').addClass('active').siblings().removeClass('active');
                }
                // if mobile nav
                if ($('.pdp-top-bar.-v2 select.pdp-sections').length) {
                    if ($('.pdp-top-bar.-v2 select.pdp-sections option[value="' + section + '"]').length) {
                        $('.pdp-top-bar.-v2 select.pdp-sections').val(section);
                    }
                }
            }
        });
    }

    function closeExpandedGallery(){
        $('.pdp-wrapper').removeClass('-has-expanded-gallery');
        $('.hero-gallery.-main').removeClass('-is-expanded').removeClass('-is-zoomed');
        $('html').removeClass('-zoomed-gallery-active');

        if ($('.pdp-wrapper .hero-gallery .loupe').length) {
            $('.pdp-wrapper .hero-gallery .loupe').attr('class','loupe-hidden').find('img').removeAttr('style');
        }

        $('.pdp-wrapper .hero-gallery.-main .slick-slider')[0].slick.refresh();

        if ($('.hero-gallery.-main .slick-dots img[src*="_360"]').length) {
            $('.hero-gallery.-main .slick-dots img[src*="_360"]').parent().addClass('-is-360');
        }

        loadVert3d(); // refresh 3d
    }

    function removeAxisPlayers() {
        if ($('.hero-gallery .inside .vert3d-slide').length) {
            var allPlayers = $AXIS.getPlayersByType('player');
            var allButtons = $AXIS.getPlayersByType('button');

            for (var i = 0; i < allPlayers.length; i++) {
                allPlayers[i].destroy();
            }

            for (var i = 0; i < allButtons.length; i++) {
                allButtons[i].destroy();
            }

            $('.hero-gallery .inside .vert3d-slide').addClass('-initial');
        }
    }

    function loadAxisButton() {
        if($('.pdp-wrapper .hero-gallery .js-vertAr').length) {
            $AXIS('loadAxisButton', {
                productId: sku,
                container:'.js-vertAr'
            });
        }
    }


    /**
        Click/change events
    **/

    $(document).on('click', '.modal-pdp-personalization__configurator .ha-close', function() {
        if(windowWidth > smallScreens) {
            contextClass = '.hero-gallery.-main';
        } else {
            contextClass = '.hero-gallery.-side';
        }
        $(contextClass + ' .hero-slider.slick-slider').trigger('afterChange');
        loadAxisButton();
    });

    $(document).on('click','.pdp-wrapper .js-gallery-expand,.pdp-wrapper .hero-gallery.-main .slick-slide, .pdp-wrapper .hero-gallery.-main .loupe',function(){

        setTimeout(function(){
            $('.pdp-wrapper .hero-gallery.-main .slick-slider')[0].slick.refresh();
        }, 20); // Fix devbox alignment issue
        setTimeout(function(){
            $('.pdp-wrapper .hero-gallery.-main .slick-slider')[0].slick.refresh();
        }, 130); // Fix devbox alignment issue

        if ($(this).closest('.hero-gallery').hasClass('-is-zoomed')) {
            /*  =======================
                Disable zoom function
                ======================= */
            $(this).closest('.hero-gallery').removeClass('-is-zoomed').closest('.pdp-wrapper').attr('current-scroll',scrollTop);
            $(this).closest('.hero-gallery').find('.loupe').attr('class','loupe-hidden').find('img').removeAttr('style');
            $('html').removeClass('-zoomed-gallery-active');

            $('.hero-gallery.-main .loupe').attr('class','loupe-hidden');

        } else if ($(this).closest('.hero-gallery').hasClass('-is-expanded')) {
            /*  =======================
                Enable zoom function
                ======================= */
            var zoomSrc = $('.hero-gallery.-main .slick-slide.slick-active img').attr('data-zoom');

            $(this).closest('.hero-gallery').addClass('-is-zoomed').closest('.pdp-wrapper').attr('current-scroll',scrollTop);

            // Check if zoom loupe already exists
            if ($('.pdp-wrapper .hero-gallery .loupe-hidden img[src="' + zoomSrc + '"]').length) {
                $('.pdp-wrapper .hero-gallery .loupe-hidden img[src="' + zoomSrc + '"]').parent().attr('class','loupe');
            } else {
                $('.hero-gallery.-main .slick-slide.slick-active img:first').loupe();
            }

            $('html').addClass('-zoomed-gallery-active');
        } else {
             /* =======================
                Expand the gallery
                ======================= */

            $(this).closest('.hero-gallery').addClass('-is-expanded').closest('.pdp-wrapper').addClass('-has-expanded-gallery').attr('current-scroll',scrollTop);

            loadVert3d(); // refresh 3d

            // Preload zoom src

            // Check if zoom loupe already exists
            if (!$('.pdp-wrapper .hero-gallery .loupe-hidden img[src="' + zoomSrc + '"]').length) {
                $('.hero-gallery.-main .slick-slide.slick-active img:first').loupe();
            }

            $('.hero-gallery.-main .loupe').attr('class','loupe-hidden');

        }

        $('.pdp-wrapper .hero-gallery.-main .slick-slider')[0].slick.refresh();

        setTimeout(function(){
            if ($('.hero-gallery.-main .slick-dots img[src*="_360"]').length) {
                $('.hero-gallery.-main .slick-dots img[src*="_360"]').parent().addClass('-is-360');
            }
        }, 130);

    });

    $(document).on('click', '.personalization-design-link, .personalized-custom__inspiration__image', function() {
        removeAxisPlayers();
        /*
        for unknown reasons, customizer.min.js is not adding the spinner automatically
        so we need to add it manually
        */
        personalizeModalObserver.customizeModal(['addSpinner']);
    });

    // Smoothing swatch changing
    $(document).on('click','.pdp-wrapper.-v2 .sidebar .swatches a',function(){
        removeAxisPlayers();

        // set height to gallery
        if (windowWidth > smallScreens) {
            $('.hero-gallery.-main').css('min-height',galleryHeight);
        } else {
            var personalizationMedia = $('.pdp-wrapper .main .personalization-media');
            var gallerySide = $('.hero-gallery.-side');

            personalizationMedia.append(gallerySide.siblings('.personalization-media-item').clone());
            gallerySide.siblings('.personalization-media-item').remove();
            gallerySide.css('min-height',galleryHeight);
        }

        // Set height to gallery elements
        if ($('.hero-slider.slick-initialized').length) {
            $('.hero-slider.slick-initialized').css('min-height',$('.hero-slider.slick-initialized').outerHeight());
            $('.hero-slider.slick-initialized .slick-dots').css('min-height',$('.hero-slider.slick-initialized .slick-dots').outerHeight());
        }

        // re-build buy buttons
        rebuildBottomBar(true);

        combineBoleto();

        setTimeout(function(){
            combineBoleto();
        }, 3000);


    });

    function rebuildBottomBar(dontStartTimer){
        if ($('.pdp-bottom-bar.-v2').length) {

            if ($('.pdp-bottom-bar.-v2 .cartButton_container').length) {
                $('.pdp-bottom-bar.-v2 .cartButton_container').addClass('-pending');
            }

            if (!dontStartTimer) {
                setTimeout(function(){
                    $('.pdp-bottom-bar.-v2').remove();
                    createMobileBottomBar();
                }, 3000);
            }

            /*if($('.sidebar .product-add-to-cart form').length) {
                $(document).on('DOMSubtreeModified', '.sidebar .product-add-to-cart form', function(e){
                    if (e.target.innerHTML.length > 0) {
                    // Content change handler
                    console.log('change 1');
                    }
                    console.log('change 2');
                });
            }*/
        }
    }

    // Gallery closing
    $(document).on('click','.js-gallery-expand-close',function(){
        closeExpandedGallery();
    });

    // Preload Zoom imagery for desktop on thumb click
    $(document).on('click','.hero-gallery.-main .slick-dots li', function(){
        if (windowWidth > smallScreens) {
            var zoomSrc = $('.hero-gallery.-main .slick-slide.slick-active img').attr('data-zoom');
            if (!$('.pdp-wrapper .hero-gallery .loupe-hidden img[src="' + zoomSrc + '"]').length) {
                //$('.hero-gallery.-main .slick-slide.slick-active img').clone().appendTo('.hero-gallery.-main').attr('src',zoomSrc).wrapAll('<div class="loupe-hidden" />');
                $('.hero-gallery.-main .slick-slide.slick-active img').loupe();
            }
        }
    });

    // .js-scroll handler
    $(document).on('click','.pdp-wrapper .js-scroll, .pdp-bottom-bar .js-scroll',function(){
        var section = $(this).attr('data-section');
        scrollTo(section);
    });

    $(document).on('click', '.bv_button_buttonFull ', function(){
        $('.pdp-reviews [data-tab="reviews"] h3').click();
        scrollTo('reviews');
    });

    // Add to cart quantity control
    $(document).on('click','.pdp-wrapper.-v2 >.sidebar .product-add-to-cart .inventory .spin .spinner>span',function(){
        var $input = $(this).closest('.spin').find('input'),
            val = $input.is('[data-preval]') ? parseInt($input.attr('data-preval')) : (parseInt($input.val()) - 1 ),
            min = 1,
            available = parseInt($input.attr('data-available'));
            max = parseInt($input.attr('data-product-limit'));

        if (available < max) {
            max = available;
        }

        if ($(this).hasClass('addqty')) {
            if (val < max) {
                val = val + 1;
            }
        } else if ($(this).hasClass('subqty')) {
            if (val > min) {
                val = val - 1;
            }
        }

        $input.val(val).attr('data-preval',val);
        return false;
    });

    // Mobile sub navigation
    $(document).on('change','.pdp-top-bar.-v2 select.pdp-sections',function(){
        var section = $(this).val();
        if (section == "hero-gallery") {
            section = "top";
        }
        if (ctdDebug) { console.log(section); }
        scrollTo(section);
    });

    // Klarna options
    $(document).on('click','.pdp-wrapper .js-klarna-interstitial',function(){
        $(this).next('iframe').show();
    });

    // SEO copy toggler
    $(document).on('click','.pdp-wrapper .pdp-seo .js-more',function(){
        $(this).next().show();
        $(this).remove();
    });

    // Accordion
    $(document).on('click','.pdp-wrapper .spec-accordion h3, .pdp-wrapper .pdp-accordion h3',function(){
        $(this).parent().toggleClass('-active');
    });

    // Tab navigation
    $(document).on('click','.pdp-wrapper .tab-navigation li , .customTab',function(){
        var tab = $(this).attr('data-tab');
        if($(this).hasClass('personalized-option-original')){
            $('.apple-btn-checkout').removeAttr('style');
            $('.applepay_tc').removeAttr('style');
            $('.pdp-image-carousel').removeClass('d-none');
            $('.hero-gallery').addClass('d-none');
            if($(".color-attribute.selected").length == 0){
                $($(".color-attribute.selectable")[0]).click();
            }
        }else {
            $('.apple-btn-checkout').attr('style', 'display: none !important');
            $('.applepay_tc').attr('style', 'display: none !important');
            $('.pdp-image-carousel').addClass('d-none');
            $('.hero-gallery').removeClass('d-none');
        }
        $(this).addClass('-active').siblings().removeClass('-active');
        $(this).closest('.tab-wrapper').find('.tab-content[data-tab="' + tab + '"]').addClass('-active').siblings('.tab-content').removeClass('-active');
        const isVariantSelected = $('button.color-attribute').filter('.selected').length > 0;
        const selectedRecipe = $('.personalized-custom__recipe a.selected').attr('data-recipe') || '';
        if (tab == "pz-original") {
            $('.pdp-badges').removeClass('d-none')
            $('.prices .pz-price').addClass('d-none');
            $('.prices .price').not('.pz-price').removeClass('d-none');
            $('.pz-quantity-selector-wrapper').addClass('d-none');
            $('.quantity-selector-wrapper').not('.pz-quantity-selector-wrapper').removeClass('d-none');
            $('.pz-product-availability').addClass('d-none');
            $('.product-availability').removeClass('d-none');
            $('.boleto-installment-msg:not(.boleto-custom)').removeClass('d-none');
            $('.boleto-installment-msg.boleto-custom').addClass('d-none');
            if (isVariantSelected) {
                $('.add-to-cart').removeClass('d-none');
                $('.add-to-cart').addClass('d-block');
                $('.pz-add-to-cart').removeClass('d-block');
                $('.pz-add-to-cart').addClass('d-none');
            }
            $('.pz-add-to-cart').attr('data-currentrecipe', '');
		    $('.pz-add-to-cart-error').addClass('d-none');
            $('.pdp-wrapper').removeClass('-is-pz-custom');
            rebuildBottomBar(); // re-build buy buttons
            if(windowWidth > smallScreens) {
                contextClass = '.hero-gallery.-main';
            } else {
                contextClass = '.hero-gallery.-side';
            }
            $(contextClass + ' .hero-slider.slick-slider').trigger('afterChange');
            loadAxisButton();
        	$('.pdp-image-carousel.slick-slider').slick('setPosition');
            window.dispatchEvent(new CustomEvent('resize', {
                detail: 'resizeAR'
            }));

        } else if (tab == "pz-custom") {
            $('.pdp-badges').addClass('d-none') // Prevents
            $('.prices .price').not('.pz-price').addClass('d-none');
            $('.prices .pz-price').removeClass('d-none');
            $('.quantity-selector-wrapper').not('.pz-quantity-selector-wrapper').addClass('d-none');
            $('.pz-quantity-selector-wrapper').removeClass('d-none');
            $('.product-availability').addClass('d-none');
            $('.pz-product-availability').removeClass('d-none');
            if (isVariantSelected) {
                $('.pz-add-to-cart').removeClass('d-none hidden');
                $('.pz-add-to-cart').addClass('d-block');
                $('.add-to-cart').removeClass('d-block');
                $('.add-to-cart').addClass('d-none');
            }
            $('.boleto-installment-msg:not(.boleto-custom)').addClass('d-none');
            $('.boleto-installment-msg.boleto-custom').removeClass('d-none');
            $('.pz-add-to-cart').attr('data-currentrecipe', selectedRecipe);
            if (selectedRecipe !== '') {
		        $('.pz-add-to-cart-error').addClass('d-none');
            }

        	if ($('.hero-gallery .inside .vert3d-slide').length) {
        		if($AXIS.getPlayersByType)removeAxisPlayers();
        	}
            $('.pdp-wrapper').addClass('-is-pz-custom');
            rebuildBottomBar(); // re-build buy buttons
        }

        if ($('.pdp-top-bar.-v2').length) {
            $('.pdp-top-bar.-v2 .pricing').html(updateTopBarPricing());
        }
    });

    // Re-route add-to-cart
    $(document).on('click','.pdp-bottom-bar .btn.add-to-cart, .pdp-bottom-bar .btn.pz-add-to-cart',function(){
        if ($('.pdp-wrapper').hasClass('-is-pz-custom')) {
            $('.pdp-wrapper .sidebar .cartButton_container .btn.pz-add-to-cart').click();
        } else {
            $('.pdp-wrapper .sidebar .cartButton_container .btn.add-to-cart').click();
        }
        return false;
    });

    // Re-route Apple pay

    // Simulate click (in order to pre-load) to the reviews section
    $(document).on('click','.pdp-wrapper .sidebar #ratings-summary, .pdp-top-bar .bv_stars_component_container', function(){
        $('.pdp-reviews [data-tab="reviews"]:not(.-active) h3').click();
        scrollTo('reviews');
    });

    // Add findstore retailer logo/URL pop-up
    $(document).on("click", "#find-dealer-v2", function (e) {
		e.preventDefault();
		//$("#find-dealer-modal-v2").modal("show");
		$("#find-dealer-modal-v2").appendTo("body").modal('show');
	});

    $(document).on('click','.pdp-wrapper .pdp-navbar li[data-section="reviews"]', function(){
        //if (!$('.pdp-wrapper .pdp-reviews [data-tab="reviews"] > div').length) {
            $('.pdp-reviews [data-tab="reviews"]:not(.-active) h3').click();
        //}
    });

    // Open reviews on click on summary
    $(document).on('click','.pdp-reviews .initial-content, .pdp-reviews .initial-content *', function(){
        $('.pdp-reviews [data-tab="reviews"]').addClass('-active');
        return false;
    });

    // Simulate write review click
    $(document).on('click','.pdp-reviews .initial-content .bv-write-review', function(){
        $('.pdp-reviews [data-tab="reviews"] .bv-write-review').click();
        return false;
    });

    // Tab toggler
    $(document).on('click','.pdp-wrapper .pdp-faqs .tabcontent', function(){
        $(this).find('.content').toggle();
        $(this).closest('.tabcontent').toggleClass('-active');
    });

    $(".header-personalized[data-toggle='collapse']").click(function() {
        this.classList.toggle("active");
    });

    // Video player
    $(document).on('click', '.pdp-wrapper ul.video-list li, .js-videos.-single:not(.-active)', function(){
        var video               = $(this).data('videoid'),
            $videoPlayer        = $('.pdp-wrapper section.videos .videowrapper'),
            $videoSection       = $('.pdp-wrapper section.videos');

        $(this).addClass('-active');

        // Show the player div
        $videoSection.show();
        if ($videoPlayer.hasClass('hidden')){
            $videoPlayer.removeClass('hidden');
        }

        // Remove thumbnails if only one video
        if ($(this).parent().hasClass('-single') && $(this).parent().hasClass('video-list')){
            $(this).parent().remove();
        }

        // Swap the video src
        $videoPlayer.find('iframe').attr("src","//www.youtube.com/embed/" + video + "?rel=0&amp;hd=1&amp;wmode=opaque&amp;theme=light&amp;iv_load_policy=3&amp;showinfo=0&amp;autohide=1&amp;fs=0&amp;autoplay=1");

        gtmPdpVideoplayed();

        // Scroll to the video player
        if ($(this).hasClass('.js-videos')) {
            scrollTo('videos');
            if (!$('.pdp-wrapper section.videos .js-close-video').length) {
                $('.pdp-wrapper section.videos').prepend('<div class="js-close-video" />');
            }
        } else {
            $('html, body').stop().animate({
                scrollTop: $videoPlayer.offset().top - scrollOffset
            }, 800);
        }

    });

    // Video player, multi-video
    $(document).on('click', '.js-videos:not(.-active)', function(){
        $videoSection        = $('.pdp-wrapper section.videos');

        // Show the player div
        $videoSection.show();

        $(this).addClass('-active');

        if (!$('.pdp-wrapper section.videos .js-close-video').length) {
            $('.pdp-wrapper section.videos').prepend('<div class="js-close-video" />');
        }

        // Scroll to the video player
        scrollTo('videos');
    });

    $(document).on('click', '.js-close-video', function(){
        $videoSection        = $('.pdp-wrapper section.videos');

        $(this).closest('.videos').find('iframe').attr('src','');

        // Hide the player div
        $videoSection.hide();

        $('.pdp-wrapper .js-videos').removeClass('-active');
    });

    // 'Extend' options
    $(document).on('change','#extend-product-protection',function(){
        if ($(this).is(':checked')) {
            $(this).parent().next().show();
        } else {
            $(this).parent().next().hide();
        }
    });


    /*  ====================
        In-View
    ======================== */
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll load', function() {
        $('.pdp-wrapper .pdp-sections section, .pdp-wrapper .expanded-feature, .hero-gallery.-main').each(function() {
            if ($(this).isInViewport()) {
                $(this).addClass('in-view').removeClass('not-in-view');
            } else {
                $(this).removeClass('in-view').addClass('not-in-view');
            }
        });
    });


    $(document).on('ready', function(){

        !devLazyLoadEnabled ? $('.sidebar .js-at-bottom').removeClass('js-at-bottom') : null;

        // Quantity min and max
        if ($('.pdp-wrapper.-v2 >.sidebar .product-add-to-cart .inventory .spin input[data-product-limit]')) {
            $('.pdp-wrapper.-v2 >.sidebar .product-add-to-cart .inventory .spin input[data-product-limit]').attr('max',$('.pdp-wrapper.-v2 >.sidebar .product-add-to-cart .inventory .spin input[data-product-limit]').attr('data-product-limit'));
        }

        // Set default #
        $('.pdp-wrapper.-v2 >.sidebar .product-add-to-cart .inventory .spin input').attr('data-preval',1);

        /*  ====================
            Device checkers
        ======================== */

        // Adding iOS <13 classes
        function iOSversion() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                // supports iOS 2.0 and later: <https://bit.ly/TJjs1V>
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            } else {
                return false;
            }
        }

        iOsVersion = iOSversion();

        if (iOsVersion[0] >= 5) {
            //alert('This is running iOS '+iOsVersion);
            $('html').addClass('iOS iOS-' + iOsVersion[0]);
        }

        if (iOsVersion[0] >= 12) {
            $('html').addClass('iOS-oldy');
        }

        function isTouchDevice() {
            if(window.matchMedia("(pointer: coarse)").matches) {
                return true;
            }
        }

        isTouchDevice = isTouchDevice();

        if (isTouchDevice) {
            $('html').addClass('isTouchDevice');
        }

        var CriOS = navigator.userAgent.indexOf('CriOS') >= 0;
        var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
        var is_chrome = !!window.chrome && !is_opera && !is_Edge;
        var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
        var is_firefox = typeof window.InstallTrigger !== 'undefined';
        var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (CriOS) {
            is_safari = false;
            is_chrome = true;
        }

        if (is_chrome) {
            $('html').addClass('isChrome');
        } else if (is_safari) {
            $('html').addClass('isSafari');
        }

        // Add Aria Labels
        if ($('.pdp-support #estimateFaqData').length) {
            $('.pdp-support #estimateFaqData').attr('aria-label','Enter a keyword');
        }


        /*  ====================
            360 imagery
        ======================== */

        if($('.hero-slider img[data-src*="360"]').length) {

            var m360IsDragging = false,
                m360IsDragable = false,
                currentMousePosX = 0;
                m360ImageNumber = 0;

            //if (windowWidth > smallScreens) {
            if (!isTouchDevice || windowWidth > smallScreens) {
                // Binding both mousedown and touchstart throws
                // an error for certain devices

                $(document).on('mousedown','.hero-slider.-has-360-active', function(e){
                    m360IsDragging = false;
                    m360IsDragable = true;
                    currentMousePosX = e.pageX;
                    console.log('mouseDown');
                });

                $(document).on('mousemove','.hero-slider.-has-360-active', function(e){
                    if (m360IsDragable) {
                        m360IsDragging = true;
                        var mouseMove = ((currentMousePosX - e.pageX) * -1);
                        var multiplier = windowWidth > smallScreens ? 4 : 2;

                        // If mousemove is positive, increase the number
                        if (mouseMove > 0) {
                            if (m360ImageNumber > (34 * multiplier)) {
                                m360ImageNumber = -1;
                            }
                            m360ImageNumber ++;
                        } else {
                            // If mousemove is negative, increase the number
                            if (m360ImageNumber < 1) {
                                m360ImageNumber = (36 * multiplier);
                            }
                            m360ImageNumber --;
                        }

                        var formattedNumber = ("0" + (Math.round(m360ImageNumber / multiplier))).slice(-2);

                        //console.log('move: ' + mouseMove + ' / ' + m360ImageNumber + ' / ' + formattedNumber);

                        var src = $(".hero-gallery .hero-slider .-has-360 img:first").attr('src');
                        var ext = src.split('.').pop();
                        var newSrc = src.substring(0,src.lastIndexOf(".")-2);
                        imageNumber = src.substring(src.lastIndexOf(".")-2,src.lastIndexOf("."));

                        // Swap src: dom lag
                        //$(".hero-gallery.-main .hero-slider .-has-360 img:first").attr('src',newSrc + formattedNumber + '.' + ext);

                        // Swap img
                        $('.hero-gallery .hero-slider.slick-initialized .-has-360 img[src*="360_' + formattedNumber + '"]').show().siblings().hide();
                    }
                });

                $(document).on('mouseup mouseout','.hero-slider.-has-360-active', function(){
                    m360IsDragging = false;
                    m360IsDragable = false;
                    console.log('mouseUp');
                });

            } else {

                $(document).on('touchstart','.hero-slider.-has-360-active', function(e){
                    m360IsDragging = false;
                    m360IsDragable = true;
                    currentMousePosX = e.originalEvent.touches[0].clientX;//e.pageX;
                });

                $(document).on('touchmove','.hero-slider.-has-360-active', function(e){
                    if (m360IsDragable) {
                        m360IsDragging = true;
                        var mouseMove = ((currentMousePosX - e.originalEvent.touches[0].clientX) * -1);
                        var multiplier = 1;

                        // If mousemove is positive ++ on image src, otherwise --
                        if (mouseMove > 0) {
                            if (m360ImageNumber > (34 * multiplier)) {
                                m360ImageNumber = -1;
                            }
                            m360ImageNumber ++;
                        } else {
                            if (m360ImageNumber < 1) {
                                m360ImageNumber = (36 * multiplier);
                            }
                            m360ImageNumber --;
                        }

                        var formattedNumber = ("0" + (Math.round(m360ImageNumber / multiplier))).slice(-2);

                        var src = $(".hero-gallery .hero-slider .-has-360 img:first").attr('src');
                        var ext = src.split('.').pop();
                        var newSrc = src.substring(0,src.lastIndexOf(".")-2);
                        imageNumber = src.substring(src.lastIndexOf(".")-2,src.lastIndexOf("."));

                        // Swap img
                        $('.hero-gallery .hero-slider.slick-initialized .-has-360 img[src*="360_' + formattedNumber + '"]').show().siblings().hide();
                    }
                });

                $(document).on('touchend','.hero-slider.-has-360-active', function(){
                    m360IsDragging = false;
                    m360IsDragable = false;
                });

                $(document).on('mouseup mouseout','.hero-slider.-has-360-active', function(){
                    m360IsDragging = false;
                    m360IsDragable = false;
                });

            }
        }

    });

    /**
     * loupe - an image magnifier for jQuery
     * (C) jdbartlett, MIT license
     * http://github.com/jdbartlett/loupe
     */
    (function ($) {
        $.fn.loupe = function (arg) {
            var options = $.extend({
                loupe: 'loupe',
                width: 300,
                height: 300
            }, arg || {});

            return this.length ? this.each(function () {
                var $this = $(this), $big, $loupe,
                    $small = $this.is('img') ? $this : $this.find('img:first'),
                    move, hide = function () { /*$loupe.hide();*/ },
                    time;

                if ($this.data('loupe') != null) {
                    return $this.data('loupe', arg);
                }

                move = function (e) {
                    var os = $small.offset(),
                        sW = $small.outerWidth(),
                        sH = $small.outerHeight(),
                        oW = options.width / 2,
                        oH = options.width / 2;

                    /*if (!$this.data('loupe') ||
                        e.pageX > sW + os.left + 10 || e.pageX < os.left - 10 ||
                        e.pageY > sH + os.top + 10 || e.pageY < os.top - 10) {
                        return hide();
                    } */

                    time = time ? clearTimeout(time) : 0;

                    $loupe.show().css({
                        left: e.pageX - oW,
                        top: e.pageY - oH
                    });
                    $big.css({
                        left: -(((e.pageX - os.left) / sW) * $big.width() - oW)|0,
                        top: -(((e.pageY - os.top) / sH) * $big.height() - oH)|0
                    });
                };

                $loupe = $('<div />')
                    .addClass(options.loupe)
                    .css({
                        width: options.width,
                        height: options.height,
                        position: 'absolute',
                        overflow: 'hidden'
                    })
                    .append($big = $('<img loading="lazy" />').attr('src', $this.attr($this.is('img') ? 'data-zoom' : 'href')).css('position', 'absolute'))
                    .mousemove(move)
                    //.hide()
                    .appendTo('.hero-gallery.-main');

                $this.data('loupe', true)
                    .mouseenter(move)
                    /*.mouseout(function () {
                        time = setTimeout(hide, 10);
                    });*/
            }) : this;
        };
    }(jQuery));

}

$(window).on('load',function(){
    if (typeof pdpV2 !== 'undefined' && pdpV2) {
        //setTimeout(function(){ $(document).trigger('pdpLazyReady'); }, 1000);
        if (fireLazyOn == "load" && !devLazyLoadEnabled) {
            $(document).trigger('pdpLazyReady');
        }

        !devLazyLoadEnabled ? $('.sidebar .js-at-bottom').removeClass('js-at-bottom') : null;

        resizeFeatureHeadline();

        $('.hero-gallery.-main .slick-slide.slick-active img').loupe();

        if ($('.pdp-top-bar.-v2').length && !$('.pdp-top-bar.-v2 .bv_stars_component_container').length) {
            var rating = $('.pdp-wrapper.-v2 .sidebar .bv_stars_component_container').length ? $('.sidebar .bv_stars_component_container').html() : '';
            $('<div class="bv_stars_component_container">' + rating + '</div>').appendTo('.pdp-top-bar .sub');
        }

        // Check if star rating is correctly cloned
        if (windowWidth < smallScreens) {
            if (!$('.pdp-top-bar.-v2 .bv_stars_component_container svg').length) {
                setTimeout(function(){
                    $rating = $('.pdp-wrapper.-v2 .sidebar .bv_stars_component_container').length ? $('.sidebar .bv_stars_component_container').html() : '';
                    $('.pdp-top-bar .sub').append('<div class="bv_stars_component_container">' + $rating + '</div>');
                }, 1200);
            }
        }

        // Check if single video elements are correct
        if ($('.pdp-wrapper section.videos .video-list').length && $('.pdp-wrapper section.videos .video-list li').length < 2) {
            $('.pdp-wrapper section.videos .video-list').hide();
        }

        // Preload 360 imagery
        if ($('.hero-slider img[data-src-360]').length) {
            $('.hero-slider img[data-src-360]').each(function(){
                var src = $(this).attr('data-src-360');
                $(this).attr('src',src);
            });
        }

        createSummary();

    }

});


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const personalizeModalObserver = __webpack_require__(1);

$(document).ready(function() {
    $('#exampleModal').on('click', '.close', ()=> {
      $('.modal-backdrop').addClass('d-none');
      $('.incomingRecipeId').remove()
      $('#app').attr("id","spectrum-customizer");
      $('.incomingRecipeId .close').click()
      $('#exampleModal').removeClass('d-block');

      // Hardcoded removal of the .modal-backdrop.
			// .modal-backdrop should be removed automatically as in SG implementation,
			// but this custom Spectrum implementation in SFRA
			// is already too complex to identify why two modals are created with two backdrops
			// and why just one backdrop is being removed automatically at this point.
			// Here any .modal-backdrop is removed so other modals don't display them
			$('.modal-backdrop').remove();
    })
    $(document).on("click", ".customizeLink, .personalized-custom__recipe__add", (e) =>{
        e.preventDefault();
        // Load the Flip5 BLK SKU
        $('.modal-backdrop').addClass('d-none');
        var $el = $(e.currentTarget);

        var setupModal = function () {
            $('#exampleModal').modal('show');
            $('#exampleModal').addClass('show');
            $('#exampleModal').removeClass('d-none');
            $('#exampleModal').css({ background: 'white' });
            var loader = `<div data-v-779876b9="" id="cssload-loader">
                <ul data-v-779876b9="">
                    <li data-v-779876b9=""></li>
                    <li data-v-779876b9=""></li>
                    <li data-v-779876b9=""></li>
                    <li data-v-779876b9=""></li>
                    <li data-v-779876b9=""></li>
                    <li data-v-779876b9=""></li>
                </ul>
            </div>`;
            $('.spinner-container').append(loader);
        };

        // if we are in PLP...
        if ($el.hasClass('plpcustomizeBtn')) {
            var customizableSku = $el.attr('data-skw');
            const masterPid = $el
                .closest('.product-tile')
                .attr('data-master-pid');
            window.spectrumLoadProducts = [customizableSku];
            window.spectrumMasterProduct = [masterPid];
            window.spectrumLoadProductData =
                window.spectrumLoadProductData || {};
            window.spectrumLoadProductData[customizableSku] = JSON.parse(
                $el.attr('data-skw-info')
            );
            window.spectrumRedirectUrl = $el.attr('href');

            if ($('#app').length === 0) {
                var customizerScriptSrc = document.getElementById(
                    'spectrum-customizer-script'
                ).src;
                $.getScript(customizerScriptSrc).done(setupModal);
            } else {
                setupModal();
            }
        } else {
          // if we are in PDP...
          /* 
          for unknown reasons, customizer.min.js is not adding the spinner automatically
          so we need to add it manually 
          */
          personalizeModalObserver.customizeModal(['addSpinner']);
        }

            var isIosSafari = /(iPad|iPhone|iPod)/g.test(navigator.platform) && (navigator.userAgent.indexOf('Safari') !== -1);
            if(isIosSafari){
              $('body').addClass("personalization-modal-open");

            }
          //   // window.spectrumLoadProducts = window.spectrumLoadProduct;
            //window.app = {};
            //window.app.product = {};
            __webpack_require__(6);
            __webpack_require__(5);
            __webpack_require__(4);
            __webpack_require__(3);
            __webpack_require__(2);
            __webpack_require__(7);
            $('#app').css({"z-index": "999","background": "white" , "background-color": "white"});
    });
        initSpetrum();
        __webpack_require__(6);
        __webpack_require__(5);
        __webpack_require__(4);
        __webpack_require__(3);
        __webpack_require__(2);
        __webpack_require__(12);
        //hidePersolizedButton();
        __webpack_require__(11);
        __webpack_require__(8);
        __webpack_require__(9);
        __webpack_require__(13);
        __webpack_require__(14);
        __webpack_require__(10);
        __webpack_require__(15);
        __webpack_require__(7);
		//Load user recipes from cookies
		app.product.loadRecipesFromCookie();
    app.product.init();
		//load spectrum popup if querystring param is available
    $('body').on('spectrum:extendcomplete', function () {
      var querystring = new URLSearchParams(window.location.search);
      if(querystring.get("iscstm_redesign")=="true"){
        $(".personalized-option-custom").click();
        $('.personalize-social-share').removeClass('hidden');
        if(querystring.get("viewRecipeId")!=null) {
          var cookiesRecipes =[];
          cookiesRecipes = app.product.getCookiesReceipes("",window.spectrumMasterProduct[0]);
          var isRecipeInCookie=false;
          var recipeId= querystring.get("viewRecipeId");
          if(cookiesRecipes.length){
            cookiesRecipes.forEach(function(item){
              var rawData = JSON.parse(item);
              if(recipeId==rawData.recipeId){
                if(!isRecipeInCookie) {
                  $(".personalized-custom__recipe__image a[data-recipe="+recipeId+"]").click();
                  isRecipeInCookie=true;
                }
              }
            });
            $(".personalized-option-custom").click()
          }
          var sku = querystring.get("sku");
          if(!isRecipeInCookie && sku){
            //app.product.openDefaultPersonalizationModal(recipeId);
            var data = {
              "pid": sku ? sku : window.spectrumLoadProducts[0],
              "recipeId": recipeId,
              "oldRecipeId": null,
              "Quantity": 1,
              "imageUrl": $(".personalized-custom__recipe__add").attr("data-src").replace("recipeId",recipeId),
              "options": [],
              "uuid":"",
              "cartAction":"update"
              }
            var cookiesRecipes =[];
            cookiesRecipes = app.product.getCookiesReceipes(JSON.stringify(data), window.spectrumMasterProduct[0]);
            if(cookiesRecipes.length){
                          //$(".personalized-custom__blank").hide();
                          //$(".personalized-custom__recipe").show();
                      } else {
                          //$(".personalized-custom__recipe").hide();
                          //$(".personalized-custom__blank").show();
                      }
            app.product.appendCustomRecipeArray(cookiesRecipes);
            $(".personalized-custom__recipe__image a[data-recipe='"+recipeId+"']").click();
            $(".personalized-option-custom").click();
            $(".personalized-custom__recipe").toggleClass("d-flex");
            $(".personalized-custom__blank").toggleClass("d-none");
          }
        }
      }
    });
    $('#nav-profile-tab').on('click', ()=> {
        $(".personalized-custom__blank").show();
    })
});

// $(document).on('click','.dynamic-update-product-container .customizeButton_container .plpcustomizeBtn, .product-tile .plpcustomizeBtn',	function (e){
//   e.preventDefault();
//   console.log('triggered click on personalize')

//   var customizerScriptSrc = document.getElementById("spectrum-customizer-script").getAttribute('data-src');
//   if(customizerScriptSrc){
//     $.getScript(customizerScriptSrc);
//   }

//   // Only change the spectrum window info for the PLP!!!
//   if($(this).hasClass('plpcustomizeBtn')){
//     window.spectrumLoadProducts=[$(this).attr('data-skw')];
//     window.spectrumRedirectUrl=this.href;
//   }
//   $('#exampleModal').modal('toggle')
//   $('#exampleModal').addClass('show')
//   $('#exampleModal').removeClass('d-none');
//   $('.modal-backdrop').removeClass('d-none');

//     var loader =  `<div data-v-779876b9="" id="cssload-loader">
//     <ul data-v-779876b9="">
//       <li data-v-779876b9=""></li>
//       <li data-v-779876b9=""></li>
//       <li data-v-779876b9=""></li>
//       <li data-v-779876b9=""></li>
//       <li data-v-779876b9=""></li>
//       <li data-v-779876b9=""></li>
//     </ul>
//   </div>`;
//   $('.spinner-container').append(loader);

//   var isIosSafari = /(iPad|iPhone|iPod)/g.test(navigator.platform) && (navigator.userAgent.indexOf('Safari') !== -1);
//   if(isIosSafari){
//     $('body').addClass("personalization-modal-open");

//   }
// });


/*var hidden = false;
function hidePersolizedButton() {
	hidden = !hidden;
	if(hidden) {
		$('.list-unstyled').first().css('visibility', 'hidden')
	} else {
		$('.list-unstyled').first().css('visibility', 'visible')
	}
    $('.selectable').on('click', ()=> {
      $('.list-unstyled').first().toggle()
    })
}*/


/***/ })
/******/ ]);