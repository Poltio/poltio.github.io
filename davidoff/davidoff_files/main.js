// Global Variables
var $body          = $('body'),
    $window        = $(window),
    $htmlbody      = $('html, body'),
    $nav           = $('nav'),
    $content       = $('#content, .container'),
    $winWidth      = getWindowWidth(),
    $winHeight     = getWindowHeight(),
    $videoWidth,
    $videoHeight,
    oroSwiper,
    productSwiper,
    heritageMobileSwiper = null,
    heritageSwiper = null,
    min_w = 768, // minimum video width allowed
    seeds_min_w = 1400,
    vid_w_orig,  // original video dimensions
    vid_h_orig,
    seeds_vid_w_orig,  // original video dimensions
    seeds_vid_h_orig,
    leaves_vid_w_orig,  // original video dimensions
    leaves_vid_h_orig;


    function getWindowWidth() {
        $winWidth   = $window.width();
        return $winWidth;
    }

    function getWindowHeight() {
        $winHeight  = $window.height();

        return $winHeight;
    }

    function getVideoWidth($video) {
        $width = $video.videoWidth;

        return $width;
    }

    function getVideoHeight($video) {
        $height = $video.videoHeight;

        return $height;
    }

    function getScaleRatio($width) {
        var $ratio;
        switch(true){
            case $width >= 0 && $width < 480:
                $ratio = 0.20;
                break;
            case $width >= 480 && $width < 768:
                $ratio = 0.40;
                break;
            case $width >= 768 && $width < 1024:
                $ratio = 0.50;
                break;
            case $width >= 1024 && $width < 1150:
                $ratio = 0.62;
                break;
            default:
                $ratio = 0.69;
        }
        return $ratio;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    }

    function addSourceToVideo(element, src, type) {
        var source = document.createElement('source');

        source.src = src;
        source.type = type;

        element[0].appendChild(source);
    }

    function resizeToCover() {
        var $body = ('body');
        var $videoWrapper = $('.image-hero .video-wrapper');
        var $heroWrapper = $('.image-hero');
        var $heroVideo = $('.image-hero .video-wrapper video');
        var $heroContentContainer = $('.hero-content-container');

        $videoWrapper.width($window.width());
        $videoWrapper.height($heroWrapper.height());

        // use largest scale factor of horizontal/vertical
        var scale_h = $window.width() / vid_w_orig;
        var scale_v = $heroWrapper.height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // don't allow scaled width < minimum video width
        if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

        // now scale the video
        $heroVideo.width(scale * vid_w_orig);
        $heroVideo.height(scale * vid_h_orig);

        // and center it by scrolling the video viewport
        $videoWrapper.scrollLeft(($heroVideo.width() - $window.width()) / 2);
        $videoWrapper.scrollTop(($heroVideo.height() - $heroWrapper.height()) / 2);

        if (!$videoWrapper.hasClass('visible')) {
            $heroVideo.parent().addClass('visible');
            $heroContentContainer.removeClass('filter');
        }
    }

    function craftsResizeToCover() {
        var $body = ('body');
        var $videoWrapper = $('#seeds .video-wrapper .video');
        var $heroWrapper = $('#seeds .video-wrapper');
        var $heroVideo = $('#seeds .video-wrapper .video video');

        $videoWrapper.width($window.width());
        $videoWrapper.height($heroWrapper.height());

        // use largest scale factor of horizontal/vertical
        var scale_h = $window.width() / seeds_vid_w_orig;
        var scale_v = $heroWrapper.height() / seeds_vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // don't allow scaled width < minimum video width
        if (scale * seeds_vid_w_orig < seeds_min_w) {scale = seeds_min_w / seeds_vid_w_orig;};

        // now scale the video
        $heroVideo.width(scale * seeds_vid_w_orig);
        $heroVideo.height(scale * seeds_vid_h_orig);

        // and center it by scrolling the video viewport
        $videoWrapper.scrollLeft(($heroVideo.width() - $window.width()) / 2);
        $videoWrapper.scrollTop(($heroVideo.height() - $heroWrapper.height()) / 2);

        if (!$videoWrapper.hasClass('visible')) {$heroVideo.parent().addClass('visible');}
    }

    function leavesResizeToCover() {
        var $body = ('body');
        var $videoWrapper = $('#leaves-video .video-wrapper .video');
        var $heroWrapper = $('#leaves-video .video-wrapper');
        var $heroVideo = $('#leaves-video .video-wrapper .video video');

        $videoWrapper.width($window.width());
        $videoWrapper.height($heroWrapper.height());

        // use largest scale factor of horizontal/vertical
        var scale_h = $window.width() / seeds_vid_w_orig;
        var scale_v = $heroWrapper.height() / seeds_vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // don't allow scaled width < minimum video width
        if (scale * seeds_vid_w_orig < seeds_min_w) {scale = seeds_min_w / seeds_vid_w_orig;};

        // now scale the video
        $heroVideo.width(scale * seeds_vid_w_orig);
        $heroVideo.height(scale * seeds_vid_h_orig);

        // and center it by scrolling the video viewport
        $videoWrapper.scrollLeft(($heroVideo.width() - $window.width()) / 2);
        $videoWrapper.scrollTop(($heroVideo.height() - $heroWrapper.height()) / 2);

        if (!$videoWrapper.hasClass('visible')) {$heroVideo.parent().addClass('visible');}
    }

    $.fn.exists = function () {
        return this.length !== 0;
    }

$(function(){
    BrowserDetect.init();
    tracking.init();
    menu.close();
    menu.toggle();
    homepage.init();
    age.init();
    whereToBuy.init();
    cigars.init();
    crafts.init();
    products.init();
    contact.init();
    insta.init();
    if ($('body').hasClass('beautiful-time')) {beautifulTime.init();}
    if ($('body').hasClass('oro-blanco') || $('body').hasClass('escurio')) {oroBlanco.init();}
    if ($('body').hasClass('shareyourdream_2') || $('body').hasClass('yamasa')) {oroBlanco.animations();}
    events.init();
    modal.init();
    scroll.init();
    shortlist.init();
    sdl.init();
    account.init();
    $('#email-link').click();

    // $('input, textarea, select').placeholder();
    $('body').addClass('closed');

    //On Page Load
    if( $winWidth < 768 ){
        common.mobileStuff();
        if ($('body').hasClass('heritage')) {heritage.mobileInit();}
    }
    else if( $winWidth >= 768 ) {
        common.desktopStuff();
        if ($('body').hasClass('heritage')) {heritage.init();}
    }

    if ($('body').hasClass('where-to-buy')) {
        var gmapSearchCookie = getCookie("gmap_last_post");
        if (gmapSearchCookie != "") {whereToBuy.showMarkers();}
        else {whereToBuy.loadNearestStores();}
    }

    if (!Modernizr.touch) {products.zoom();}

    // Window Resize Functions
    function resizePage() {

        var winWidth    = getWindowWidth(),
            winHeight   = getWindowHeight(),
            $body       = $('body');


        //Hero Video Resizing
        if ($body.hasClass('cigars')) {resizeToCover();}

        if ($body.hasClass('craftsmanship')) {
            craftsResizeToCover();
            leavesResizeToCover();
        }

        //menu.close();
        if( winWidth < 768 ){
            var $swiperContainer = $('.swiper-container-mobile');
            common.mobileStuff();
            if ($body.hasClass('heritage')) {
                if (heritageMobileSwiper == null) {heritage.mobileInit();} else {
                    // Resize current slide
                    $swiperContainer.height($('.swiper-container-mobile .swiper-slide-active').height());
                }
            }
        }
        else if( winWidth >= 768 ) {
            common.desktopStuff();
            if ($body.hasClass('heritage')) {
                if (heritageSwiper == null) {heritage.desktopInit();}
                else {heritage.reInit();}
            }
        }

        //common.verticalAlign($('.wrapper .image'));

        common.verticalAlign($('.image-container .image-wrapper'));

    }

    $window.resize( $.debounce( 400, resizePage ) );//.trigger("resize");
    //$window.resize(function () {resizeToCover();});
});

var common = {
    verticalAlign : function(e) {
        return e.each(function(i){
            var ah = $(this).height();
            var ph = $(this).parent().height();
            var mh = Math.ceil((ph-ah) / 2);
            $(this).css('margin-top', mh);
        });
    },

    mobileStuff : function() {
        var $body = $('body');

        $('#header').addClass('mobile');

        if ($body.hasClass('cigars') && $body.hasClass('all')) {
            $('.secondary-nav').find('.secondary-nav-wrapper').removeClass('show').addClass('hide');
            $('#the-filters').find('.table-wrapper').removeClass('show').addClass('hide');
        }

        if ($body.hasClass('cigars') || $body.hasClass('cigar-accessories') || $body.hasClass('pipes')) {
            $('.secondary-nav').find('.secondary-nav-wrapper').removeClass('hide').addClass('show');
            $('#the-filters').find('.table-wrapper').removeClass('hide').addClass('show');
        }

        if ($body.hasClass('cigar-accessories') || $body.hasClass('pipes')) {products.showAll();}
    },

    desktopStuff : function() {
        var $body = $('body');

        $('#header').removeClass('mobile');

        if ($body.hasClass('cigars') || $body.hasClass('cigar-accessories') || $body.hasClass('pipes')) {
            $('.secondary-nav').find('.secondary-nav-wrapper').removeClass('hide').addClass('show');
            $('#the-filters').find('.table-wrapper').removeClass('hide').addClass('show');
        }
    },

    popup : function(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 3) - (h / 3)) + dualScreenTop;

        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {newWindow.focus();}
    },

    getURL : function() {

        var parts = window.location.search.substr(1);//.split("&");

        if (parts) {
            setTimeout(function() {jump(String(parts));}, 100);
        }
    }
};

var scroll = {

    init : function(){scroll.down();},

    down : function(){
        $('a.down, .submenu a, footer a.scroll').on('click', function(e){
            var $this   = $(this);
                anchor  = $this.data('to');

            // Scroll Body or Modal
            if ( $this.parents('.modal').length == 1 ){
                $this.parents('.modal').mCustomScrollbar("scrollTo",'a[data-id="'+anchor+'"]', { scrollInertia: 800 });
            }
            else {
                $htmlbody.animate({
                    scrollTop: $('a[data-id="'+anchor+'"]').offset().top
                }, 1000);
                window.location.hash = anchor;
            }

            e.preventDefault();
        });
    }
};

var menu = {

    close : function(){
        var $body = $('body');

        $body.removeClass('open').addClass('closed');
    },

    toggle : function(){
        // Toggle Container
        $('#mobile-nav').on('click', function(){

            var width = $(window).width(),
                $body = $('body');

            // Open Mobile Menu
            if ( $body.hasClass('closed') ){
                $body.removeClass('closed').addClass('open');
                //$content.css({ 'width' : width });
            }
            // Close Mobile Menu
            //else {menu.close();}
        });

        // Close Menu on Page Wrapper
        $('.page-wrapper').on('click', function(){
            var $body = $('body');

            if( $body.hasClass('open') ){menu.close();}
        });
        
        // Close Menu on Close Button
    $('#nav-close .close').on('click', function(){
      var $body = $('body');
      if( $body.hasClass('open') ){menu.close();}
    });
    },

    // Change to sticky nav
    scroll : function(){

        var scrolled    = $(document).scrollTop(),
            winWidth    = $window.width();

        if(  winWidth > 768 ){                                  /* If this is wider than tablet */
            if(  scrolled > 290  ){$nav.addClass('fixed');}   /* AND scrolled past the menu */
            else {$nav.removeClass('fixed');}                 /* Put it back! */
        }
        else {$nav.removeClass('fixed');}                    /* Make sure there is no fixed class */

    }

};

var age = {

    init : function(){
        age.autoshift();
        age.format();
        age.verify();
        age.events();
    },

    events : function() {

        var $selector = $('#lang-list a');

        $selector.on('click', function(e) {

            var $this = $(this);

            age.goToURL($this.attr('data-url'));

            e.preventDefault();

        });

    },

    goToURL : function(url) {

        // window.location.href = url;
        window.location.href = url + window.location.pathname;

    },

    autoshift : function(){
        var $input = $('.input-field input');

        $input.on('keyup', function(){
            var $this = $(this);

            if (($this.hasClass('day') && this.value.match(/^0[1-9]|[12]\d|3[01]$/)) || ($this.hasClass('month') && this.value.match(/^0[1-9]|1[0-2]$/))) {
                if ($this.parent().next().find('input').length) {$this.parent().next().find('input').focus();}
            }
        });
    },

    format : function(){
        var $input = $('input.verify');

        $input.focusout(function() {
            var $this = $(this);

            if (($this.hasClass('month') || $this.hasClass('day')) && this.value.match(/^[0-9]{1}$/)) {
                $this.val('0' + $this.val());
            }
        });
    },

    verify : function(event){
        var $input = $('#age-gate-form');
        $input.submit(function(event, explicitSubmit){
            // Old submit
            
            var $this = $(this);
            var $valid = false;
            var $form = $('#age-form');
            var $values = {};
            var $legalAge = 21;

            var $age = $('.agegate__input', $form).val();

            if ($age >= $legalAge) {
                $valid = true;
            }
            else {
                $form.find('.agegate__error').addClass('st-visible');
                $form.addClass('play-wobble-animation').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
                    var $this = $(this);
                    $this.removeClass('play-wobble-animation');
                });
            }
            return $valid;
            
            /*
            var $this = $(this);
            var $form = $('#age-form');
            $valid = $("#above21").val();
            if ($valid == 1) {
                $valid = true;
            }
            else {
                $form.find('.agegate__error').addClass('st-visible');
                $form.addClass('play-wobble-animation').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
                    var $this = $(this);
                    $this.removeClass('play-wobble-animation');
                });
                $valid = false;
            }
            return $valid;
            */
        });
    }
};

var whereToBuy = {

    $template: '',

    $close: '',

    init : function(){
        var $input = $('#where-to-buy-form input'),
            $closeOverlay;

        //load the card template to a variable
        $.ajax({
            type:'post',
            url:"/where-to-buy/template",
            success:function(response){
                $template = response;
            }
        });

        if (!Modernizr.touch) {$('.phone-link').addClass('hide');}

        $input.on( "focusin", function(){
            var $type = 'in';
            whereToBuy.transition($type);
        });

        $input.on( "blur", function(){
            var $type = 'out';
            whereToBuy.transition($type);
        });
    },

    transition : function(event) {
        var $form = $('#where-to-buy-form'),
            $list = $('.list');

        switch(event) {
            case 'in':
                $form.addClass('nudge').find('input').addClass('nudge').siblings('.location').addClass('nudge');
                $list.find('.cover').addClass('nudge');
                $form.find('input').attr("placeholder","Where are you?");
                break;
            case 'out':
                $form.removeClass('nudge').find('input').removeClass('nudge').siblings('.location').removeClass('nudge');
                $list.find('.cover').removeClass('nudge');
                $form.find('input').attr("placeholder","Stores Near You");
                break;
        }
    },

    loadNearestStores : function() {
        var id     = 'map2';
        var url    = '/where-to-buy/init';
        var geo    = window[id+'_GeoMarker'];
        var map    = window[id+'_map'];
        var loaded = false;

        google.maps.event.addListenerOnce(geo, "position_changed", function() {
            if(!loaded) {
                var pos = this.getPosition();

                $.get(url, {
                    location: pos.lat()+','+pos.lng()
                }, function(data) {
                    $('.results').html(data);
                    map2_markers.shift();
                    whereToBuy.showMarkers();

                    if (!Modernizr.touch) {$('.phone-link').addClass('hide');}
                });


                loaded = true;
            }
        });
    },

    showMarkers : function() {

        $('.show-marker').on('click', function(e){

            var $entry_id = $(this).attr('data-entry-id');

            if ($winWidth < 768) {whereToBuy.showMarkersMobile($entry_id);}
            else {whereToBuy.showMarkersDesktop($(this));}
        });
    },

    showMarkersMobile : function($id) {
        var $feedURL = '/where-to-buy/feed',
            $data = {entry_id: $id};

        $.ajax({
            type: 'get',
            data: $data,
            url: $feedURL,
            success: function(response) {whereToBuy.showMobilePopup(response);}
        });



    },

    showMobilePopup : function(data) {

        var $data = JSON.parse(data),
            $overlayContainer = $('#wtb-overlay'),
            $whereToBuyList = $('#where-to-buy');

            document.cookie="location-scroll=" + document.body.scrollTop;

        $overlayContainer.html('');

        //append the card html template
        $overlayContainer.append($template);

        //Close overlay functionality
        $closeOverlay = $('#wtb-overlay a.back');

        $closeOverlay.on('click', function(e) {
            e.preventDefault();
            $(this).parent().removeClass('active');
            $whereToBuyList.addClass('active');
            window.scrollTo(0,getCookie('location-scroll'));
        });

        //stores html selectors
        var $type = $overlayContainer.find('.type'),
            $hero = $overlayContainer.find('.hero'),
            $name = $overlayContainer.find('.title'),
            $number = $overlayContainer.find('.number'),
            $address = $overlayContainer.find('.address'),
            $country = $overlayContainer.find('.country'),
            $tel = $overlayContainer.find('.tel'),
            $directions = $overlayContainer.find('.directions'),
            $image = ($data[0].image_location.length > 0) ? $data[0].image_location : '/images/site/locations-default.jpg';

        //update template with feed text
        $hero.attr('style', 'background-image:url(' + $image + ')');
        $type.text($data[0].type).addClass($data[0].type);
        $name.text($data[0].title);
        $number.text($data[0].phone_number);
        $tel.attr('href', 'tel:' + $data[0].phone_number);
        $directions.attr('href', 'http://maps.google.com/maps?q=' + $data[0].geo_lat + ',' + $data[0].geo_long);
        $address.html($data[0].location_street + '<br />' + $data[0].location_city + ', '
            + $data[0].location_state + ' ' + $data[0].location_postcode);
        $country.text($data[0].location_country);

        $whereToBuyList.removeClass('active');
        $overlayContainer.addClass('active');

        $('html, body').animate({
            scrollTop: $(".page-wrapper").offset().top - 76
        },0);

    },

    showMarkersDesktop : function($this) {

        var $t = $this;
        var id = $t.data('id');
        var index = $t.data('index');
        var zoom = $t.data('zoom');

        $.each(map2_markers, function(i, marker) {
            if(i == id) {
                $.each(map2_windows, function(x, window) {window.close();});

                if(zoom) {map2_map.setZoom(zoom);}

                map2_windows[i].open(map2_map, marker);
            }
        });

        //e.preventDefault();
    }


};

var products = {

    pinHref : 'http://pinterest.com/pin/create/button/?url={url}&media={image}',

    init : function(){

        var $body = $('body'),
            $icon = $('a.icon');

        //products.matchSize();
        if ($body.hasClass('cigar-accessories') || $body.hasClass('pipes')) {products.swiperInit();}

        if ($body.hasClass('cigars')) {

            var $image = $body.hasClass('oro-blanco') ?  $('.blanco.panel-1 img') : $('.image-wrapper img');
            var $updatedPinHref = products.pinHref.replace('{image}', $image.attr('src')).replace('{url}', document.URL);
            $('a.pin').attr('href', $updatedPinHref);
        }

        //products.zoom();
        products.loadHeroVideo();
        products.clickableFilterFeeds();



        $icon.on({
            mouseenter: function(){
                products.socialIcons($(this), 'add');
            },
            mouseleave: function(){
                products.socialIcons($(this), 'remove');
            },
            click: function(e){

                var $this = $(this);

                if ($this.hasClass('external')) {
                    common.popup($this.attr('href'), $this.find('.text').html(), 580, 470);
                    e.preventDefault();
                }
            }
        });

        //common.verticalAlign($('.wrapper .image'));
        common.verticalAlign($('.image-container .image-wrapper'));
    },

    clickableFilterFeeds : function() {
        var $body = $('body');

        if ($body.hasClass('cigars')) {
            var $wrapper = $('#filter-by-feed .wrapper');

            $wrapper.on('click', function() {
                var $url = $(this).data('url');

                window.location.href = $url;
            });
        }
    },

    matchSize : function(){
        var $infoHeight = $('#product #info').outerHeight(true),
            $visual = $('#product #visual');

            $visual.css({'height': $infoHeight + 'px'});
    },

    swiperInit : function() {
        //Swiper Init
        productSwiper = $('#visual .swiper-container').swiper({
            mode:'horizontal',
            noSwiping: true,
            loop: true,
            calculateHeight:true,
            pagination: '.pagination'
            //cssWidthAndHeight: true
          });

        if ($('.swiper-slide').length > 0) {
            if (productSwiper.slides.length <= 3) {
                $('.arrow-right').hide();
                $('.pagination-container').hide();
            }
        }

        //Mobile Arrow Init
        $('.arrow-right').on('click', function(e){
            e.preventDefault();
            productSwiper.swipeNext();
            var $data = productSwiper.activeSlide().data('group'),
                $materials = productSwiper.activeSlide().data('materials'),
                $finish = productSwiper.activeSlide().data('finish'),
                $fittings = productSwiper.activeSlide().data('fittings');
                $image = productSwiper.activeSlide().data('image');
            products.updateGroupText($data, $materials, $finish, $fittings, $image);
        });

        products.switchSlide();
        products.switchGroup();

        //Thumb, Slide, Swatch Init
        var $firstGroupName = $('.thumb div:first-of-type').data('group'),
            $firstGroupFinish = $('.thumb div:first-of-type').data('finish'),
            $firstGroupMaterials = $('.thumb div:first-of-type').data('materials'),
            $firstGroupFittings = $('.thumb div:first-of-type').data('fittings'),
            $firstGroupImage = $('.thumb div:first-of-type').data('image');
        products.updateGroupText($firstGroupName, $firstGroupMaterials, $firstGroupFinish, $firstGroupFittings, $firstGroupImage);
        $('.swiper-slide').filter(function () { return ($(this).data('group') != $firstGroupName) }).addClass('remove');
        $('.swiper-slide').filter(function () { return ($(this).data('group') == $firstGroupName) }).removeClass('remove');
        $('.thumb div').filter(function () { return ($(this).data('group') != $firstGroupName) }).addClass('remove');
        $('.thumb div').filter(function () { return ($(this).data('group') == $firstGroupName) }).removeClass('remove');
        $(".thumb div:first-of-type").addClass('active');
        $('.swatch:first-of-type').addClass('active').siblings().removeClass('active');

        // Hide thumbs if less than 2 for each finish
        var thumb = $('.thumb'),
            thumbs = thumb.find('> *');
        thumbs.each(function(i, e){
            var thumbData = $(e).data('finish'),
                thumbValue = $('.thumb [data-finish="' + thumbData + '"]');
            if(thumbValue.length < 2){thumbValue.hide();}
        });

    },

    updateGroupText : function($data, $materials, $finish, $fittings, $image){
        //If productSwiper Exists
        if (typeof productSwiper.activeSlide != 'undefined') {

            var $updatedPinHref = products.pinHref.replace('{image}', $image);
            $('a.pin').attr('href', $updatedPinHref);

            var $mobileStyle = $('#visual .style');
            $mobileStyle.text($data);

            var $desktopStyle = $('.variations .value');
            $desktopStyle.text($data);

            var $materialsStyle = $('.materials .value');
            var $showMaterialsStyle = ($materials) ? $materialsStyle.text($materials) : $materialsStyle.parent().addClass('hide');

            var $finishStyle = $('.finish .value');
            var $showFinishStyle = ($finish) ? $finishStyle.text($finish) : $finishStyle.parent().addClass('hide');

            var $fittingsStyle = $('.fittings .value');
            var $showFittingsStyle = ($fittings) ? $fittingsStyle.text($fittings) : $fittingsStyle.parent().addClass('hide');
        }
    },

    switchSlide : function(){
        $(".thumb div").on('click', function(){
            if (!$(this).hasClass('active')) {
                productSwiper.swipeTo($(this).index(), 500);
                $(this).addClass('active').siblings().removeClass('active');
            }
        });
    },

    switchGroup : function(){
        $("#info .swatch").on('click', function(){
            var $data = $(this).data('group'),
                $materials = $(this).data('materials'),
                $finish = $(this).data('finish'),
                $fittings = $(this).data('fittings'),
                $image = $(this).data('image');

            products.updateGroupText($data, $materials, $finish, $fittings, $image);

            //Slides
            $('.swiper-slide').filter(function () { return ($(this).data('group') != $data) }).addClass('remove');
            $('.swiper-slide').filter(function () { return ($(this).data('group') == $data) }).removeClass('remove');

            //Thumbs
            $('.thumb div').filter(function () { return ($(this).data('group') != $data) }).addClass('remove');
            var $currentSlideIndex = $('.thumb div').filter(function () { return ($(this).data('group') == $data) }).removeClass('remove').index();
            $('.thumb div').filter(function () { return ($(this).data('group') == $data) }).first().addClass('active').siblings().removeClass('active');

            //Swatch
            $(this).addClass('active').siblings().removeClass('active');

            //Actions
            productSwiper.swipeTo($currentSlideIndex, 500);
        });
    },

    showAll : function(){
        $('.swiper-slide').removeClass('remove');
        productSwiper.swipeTo(0, 500);

        var $data = productSwiper.activeSlide().data('group'),
            $materials = productSwiper.activeSlide().data('materials'),
            $finish = productSwiper.activeSlide().data('finish'),
            $fittings = productSwiper.activeSlide().data('fittings');
            $image = productSwiper.activeSlide().data('image');
        products.updateGroupText($data, $materials, $finish, $fittings, $image);
        //$('#visual .style').text(productSwiper.activeSlide().data('group'));
    },

    zoom : function(){
        var $body = $('body');

        if ($body.hasClass('cigar-accessories') || $body.hasClass('pipes')) {
            $('.swiper-slide').zoom({url: $(this).data('zoom'), duration: 300, magnify: 0.7 });
        }
    },

    loadHeroVideo : function() {
        var $videoWrapper = $('.image-hero .video-wrapper'),
            $video = $('.image-hero .video-wrapper video'),
            $heroContentContainer = $('.hero-content-container');

        if (!Modernizr.touch) {
            //$heroContentContainer.addClass('filter');
            var $mp4Source = $videoWrapper.data('mp-source'),
                $webmSource = $videoWrapper.data('webm-source');

            if (Modernizr.video) {
                if (Modernizr.video.webm) {
                    if ($webmSource) {
                        addSourceToVideo($video, $webmSource, 'video/webm');
                    }
                } else if (Modernizr.video.h264){
                    if ($mp4Source){
                        addSourceToVideo($video, $mp4Source, 'video/mp4');
                    }
                }
                if ($mp4Source && $webmSource) {
                    $video.get(0).play();
                    //$videoWrapper.addClass('visible');
                    products.videoCover();
                }
            }
        }
        else {
            $videoWrapper.remove();
            $heroContentContainer.removeClass('filter');
        }
    },

    videoCover : function() {
        var $heroVideo = $('.image-hero .video-wrapper video');
        // Load handling
        $heroVideo[0].addEventListener('durationchange', function() {
            vid_w_orig = $heroVideo.width();
            vid_h_orig = $heroVideo.height();
            // vidRef.play();
            //jqWin.trigger('resize');
            //jqParent.removeClass('intro');
            //$('.the-reasons .prpl-bgv').removeClass('intro');
            //console.info('loaded metadata');
            $window.trigger('resize');
        }, false);

        //$('#debug').append("<p>DOM loaded</p>");
    },

    socialIcons : function($icon, $type) {

        if ($type = 'add' && !$icon.hasClass('hover')) {$icon.addClass('hover');}
        else if ($type = 'remove' && $icon.hasClass('hover')) {$icon.removeClass('hover');}
    }
};

var cigars = {
    init : function(){
        cigars.filterAccordian();
        cigars.infoBox();
        cigars.lineHover();
        cigars.flyout();
        //cigars.rangeSlider();
    },

    lineHover : function(){
        var $filterByContainer = $('.info');

        $filterByContainer.hover(function(){$(this).addClass('visible');}, function(){$(this).removeClass('visible');}
        );
    },

    filterAccordian : function(){
        var $filterBy = $('.instructions-mobile'),
            $filters   = $('.section-header');

        $filterBy.click(function() {
            var $this = $(this),
                $filterByContainer = $('.secondary-nav-wrapper');

            if ($this.siblings($filterByContainer).hasClass('show')) {
                $this.siblings($filterByContainer).removeClass('show').addClass('hide');
                $(this).find('.abs-right').removeClass('rotate');
            }
            else {
                $this.siblings($filterByContainer).removeClass('hide').addClass('show');
                $(this).find('.abs-right').addClass('rotate');
            }
        });

        $filters.click(function() {
            var $this = $(this),
                $filterContainer = $('.table-wrapper');

            if(!($('body').hasClass('account') )){
                if ($this.siblings($filterContainer).hasClass('show')) {
                    $this.siblings($filterContainer).removeClass('show').addClass('hide');
                    $(this).find('.abs-right').removeClass('rotate');
                }
                else {
                    $this.siblings($filterContainer).removeClass('hide').addClass('show');
                    $(this).find('.abs-right').addClass('rotate');
                }
            }
        });
    },

    flyout : function(){
        var $filters = $('.filters');

        $filters.click(function() {
            var $data = $(this).data('type'),
                $flyout = $('.filter-flyout');

            $flyout.find('.group').each(function() {$(this).removeClass('opacity');});
            $flyout.find("[data-type='" + $data + "']").addClass('opacity');
        });

        /*$flyout.click(function(){
            if ($flyout.hasClass('fly')) {$(this).removeClass('fly');}
            else {$(this).addClass('fly');}
        });*/
    },

    infoBox : function(){
        var $item = $('a.item');

        $item.hover(
            function() {
                if (!$(this).hasClass('out')) {$(this).addClass('out');}
            }, function() {
                if ($(this).hasClass('out')) {$(this).removeClass('out');}
            }
        );
    },

    rangeSlider : function() {
        $('#timeSlider').noUiSlider({
            start: [ 4000, 8000 ],
            orientation: 'vertical',
            range: {
                'min': [  2000 ],
                'max': [ 10000 ]
            }
        });
    },

    submit : function(){
        $("#ajaxform").submit(function(e) {
            var postData = $(this).serializeArray();
            var formURL = "filter-submit.html";
            $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data, textStatus, jqXHR)
                {
                    //data: return data from server
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                    //if fails
                }
            });
            e.preventDefault(); //STOP default action
            e.unbind(); //unbind. to stop multiple form submit.
        });
        $("#ajaxform").submit(); //Submit  the FORM
    }
};

var crafts = {
    init : function(){
        if (!Modernizr.touch) {crafts.heroScroll();}
        crafts.animations();
        crafts.plant();
        if ($('body').hasClass('craftsmanship')) {
            crafts.swiper();
            if (!$('body').hasClass('ie9')) {crafts.hitArea();}
        }
        crafts.seedsLoadVideo();
        crafts.leavesLoadVideo();
        if ($('body').hasClass('craftsmanship')) {crafts.parallax();}
    },

    heroScroll : function() {
        $("#craftsmanship-hero .cta").click(function() {
            $('html, body').animate({
                scrollTop: $("#journey-start").offset().top
            }, 1000);
        });
    },

    animations : function() {
        var $types = $('#types'),
            $cigar = $('#final-product'),
            $body = $('body'),
            $seedsVideo = $('#seeds-video');
            //$leavesVideo = $('#leaves-video');

        if(!$seedsVideo.length == 0){
        }

        /*
        $('#seeds').waypoint(function() {$('.seeds-info').toggleClass('in');}, { offset: 150, triggerOnce: true });
        

        $('#types').waypoint(function() {$('.third').toggleClass('in');}, { offset: 600, triggerOnce: true });

        $('#final-product').waypoint(function() {$('#final-product').toggleClass('in');}, { offset: 600, triggerOnce: true });
        */

        /*$seedsVideo.waypoint(function() {$seedsVideo.play();}, {
                offset: 200,
                triggerOnce: true
            });

        $leavesVideo.waypoint(function() {$leavesVideo.play();}, {
                offset: 200,
                triggerOnce: true
            });*/
    },

    plant : function(){
        var $plant = $('.row');

        $plant.hover(function(){$(this).toggleClass('hover');});
    },

    swiper : function(){
        var mySwiper = $('#crafts-slider .swiper-container').swiper({
            //Your options here:
            mode:'horizontal',
            noSwiping: true,
            speed: 1000, //Set animation duration to 500ms
            autoplay: 77000,
            loop: true,
            keyboardControl: true,
            calculateHeight:true,
            slidesPerView: 'auto',
            pagination: '.pagination',
            paginationClickable: true
            //etc..
          });

        $('.hit-area').on('click', function(e){
            e.preventDefault()
            mySwiper.swipeNext()
            //mySwiper.swipeTo(mySwiper.activeIndex + 1)
          });
    },

    hitArea : function() {
        var $hitArea = $('.hit-area'),
            $wrapper = $('.swiper-wrapper');

        var $xPos,
            $currentxPos,
            $clicked,
            $hover;

        $wrapper.css('-webkit-transition',"1s");
        $wrapper.css('-moz-transition',"1s");
        $wrapper.css('-o-transition',"1s");
        $wrapper.css('transition',"1s");

        $hitArea.on({
            mouseenter: function(){
                if(typeof $wrapper.css('transform') != 'undefined') {
                    $xPos = $wrapper.css('transform');
                }
                else if(typeof $wrapper.css('-webkit-transform') != 'undefined') {
                    $xPos = $wrapper.css('-webkit-transform');
                }
                else if(typeof $wrapper.css('-moz-transform') != 'undefined') {
                    $xPos = $wrapper.css('-moz-transform');
                }
                else if(typeof $wrapper.css('-ms-transform') != 'undefined') {
                    $xPos = $wrapper.css('-ms-transform');
                }
                else if(typeof $wrapper.css('-o-transform') != 'undefined') {
                    $xPos = $wrapper.css('-o-transform');
                }
                $xPos = $xPos.split(", ");
                $xPos = $xPos[4],
                $currentxPos = parseInt($xPos)-150;
                $hover = true;

                $wrapper.css("-webkit-transform","translate3d(" + $currentxPos + "px, 0px, 0px)");
                $wrapper.css("-moz-transform","translate3d(" + $currentxPos + "px, 0px, 0px)");
                $wrapper.css("-ms-transform","translate3d(" + $currentxPos + "px, 0px, 0px)");
                $wrapper.css("-o-transform","translate3d(" + $currentxPos + "px, 0px, 0px)");
                $wrapper.css("transform","translate3d(" + $currentxPos + "px, 0px, 0px)");

            },
            mouseleave: function(){
                if (!$clicked && $hover) {
                    $wrapper.css("-webkit-transform","translate3d(" + (parseInt($currentxPos)+150) + "px, 0px, 0px)");
                    $wrapper.css("-moz-transform","translate3d(" + (parseInt($currentxPos)+150) + "px, 0px, 0px)");
                    $wrapper.css("-ms-transform","translate3d(" + (parseInt($currentxPos)+150) + "px, 0px, 0px)");
                    $wrapper.css("-o-transform","translate3d(" + (parseInt($currentxPos)+150) + "px, 0px, 0px)");
                    $wrapper.css("transform","translate3d(" + (parseInt($currentxPos)+150) + "px, 0px, 0px)");
                }
                else {
                    $clicked = false;
                    $hover = true;
                }

            },
            mousedown: function(){
                if (!$clicked) {
                    $clicked = true;
                }

            }
        });

    },

    parallax : function(){
        var $el = $('#fields .fields-container'),
            $speed = 0.07;

        $el.css('-webkit-transform', 'translate3d(0, 0, 0)');
        $el.css('-moz-transform', 'translate3d(0, 0, 0)');
        $el.css('-o-transform', 'translate3d(0, 0, 0)');
        $el.css('-ms-transform', 'translate3d(0, 0, 0)');
        $el.css('transform', 'translate3d(0, 0, 0)');

        $(window).on('scroll', function () {
            var scroll = $(document).scrollTop();
            $el.css('-webkit-transform', 'translate3d(0, ' + -(scroll * $speed)+ 'px, 0)');
            $el.css('-moz-transform', 'translate3d(0, ' + -(scroll * $speed)+ 'px, 0)');
            $el.css('-o-transform', 'translate3d(0, ' + -(scroll * $speed)+ 'px, 0)');
            $el.css('-ms-transform', 'translate3d(0, ' + -(scroll * $speed)+ 'px, 0)');
            $el.css('transform', 'translate3d(0, ' + -(scroll * $speed)+ 'px, 0)');
        });
    },

    seedsLoadVideo : function() {
        var $videoWrapper = $('#seeds .video-wrapper .video'),
            $video = $('#seeds .video-wrapper .video video');

        if (!Modernizr.touch) {

            var $mp4Source = $videoWrapper.data('mp-source'),
                $webmSource = $videoWrapper.data('webm-source');

            if (Modernizr.video) {
                if (Modernizr.video.webm) {
                    if ($webmSource) {
                        addSourceToVideo($video, $webmSource, 'video/webm');
                    }
                } else if (Modernizr.video.h264){
                    if ($mp4Source){
                        addSourceToVideo($video, $mp4Source, 'video/mp4');
                    }
                }
                if ($mp4Source && $webmSource) {
                    $video.get(0).play();
                    //$videoWrapper.addClass('visible');
                    crafts.seedsVideoCover();
                }
            }
        }
        else {$videoWrapper.remove();}
    },

    seedsVideoCover : function() {
        var $heroVideo = $('#seeds .video-wrapper .video video');
        // Load handling
        $heroVideo[0].addEventListener('durationchange', function() {
            seeds_vid_w_orig = $heroVideo.width();
            seeds_vid_h_orig = $heroVideo.height();
            // vidRef.play();
            //jqWin.trigger('resize');
            //jqParent.removeClass('intro');
            //$('.the-reasons .prpl-bgv').removeClass('intro');
            //console.info('loaded metadata');
            $window.trigger('resize');
        }, false);

        //$('#debug').append("<p>DOM loaded</p>");
    },

    leavesLoadVideo : function() {
        var $videoWrapper = $('#leaves-video .video-wrapper .video'),
            $video = $('#leaves-video .video-wrapper .video video');

        if (!Modernizr.touch) {

            var $mp4Source = $videoWrapper.data('mp-source'),
                $webmSource = $videoWrapper.data('webm-source');

            if (Modernizr.video) {
                if (Modernizr.video.webm) {
                    if ($webmSource) {
                        addSourceToVideo($video, $webmSource, 'video/webm');
                    }
                } else if (Modernizr.video.h264){
                    if ($mp4Source){
                        addSourceToVideo($video, $mp4Source, 'video/mp4');
                    }
                }
                if ($mp4Source && $webmSource) {
                    $video.get(0).play();
                    //$videoWrapper.addClass('visible');
                    crafts.seedsVideoCover();
                }
            }
        }
        else {$videoWrapper.remove();}
    },

    leavesVideoCover : function() {
        var $heroVideo = $('#leaves-video .video-wrapper .video video');
        // Load handling
        $heroVideo[0].addEventListener('durationchange', function() {
            leaves_vid_w_orig = $heroVideo.width();
            leaves_vid_h_orig = $heroVideo.height();
            // vidRef.play();
            //jqWin.trigger('resize');
            //jqParent.removeClass('intro');
            //$('.the-reasons .prpl-bgv').removeClass('intro');
            //console.info('loaded metadata');
            $window.trigger('resize');
        }, false);

        //$('#debug').append("<p>DOM loaded</p>");
    }
};

var heritage = {
    init : function() {
        var $videoWrapper = $('.swiper-slide .video-wrapper .video-content'),
            $video = $('.swiper-slide .video-wrapper .video-content video'),
            $totalSlides = $('.swiper-slide').length;

        if (!Modernizr.touch) {
            $videoWrapper.each( function( index ) {
                var $videoWrapper = $(this),
                    $video = $(this).find('video');


                    var $mp4Source = $videoWrapper.data('mp-source'),
                        $webmSource = $videoWrapper.data('webm-source');

                    if (Modernizr.video) {
                        if (Modernizr.video.webm) {
                            if ($webmSource) {
                                addSourceToVideo($video, $webmSource, 'video/webm');
                            }
                        } else if (Modernizr.video.h264){
                            if ($mp4Source){
                                addSourceToVideo($video, $mp4Source, 'video/mp4');
                            }
                        }
                    }
            });

            heritage.desktopInit();
        }
        else {
            var $videoWrapper = $('.swiper-slide .video-wrapper .video-content'),
                $video = $('.swiper-slide .video-wrapper .video-content video'),
                $winWidth = getWindowWidth(),
                $scaleRatio = getScaleRatio($winWidth);

            $video.remove();
            heritage.setScale(1150, 864, $scaleRatio);
            setTimeout(function(){heritage.swiperInit();},2000);

        }


    },

    desktopInit : function(){
        $("#heritagePage .swiper-slide:nth-child(2) video").on("loadedmetadata", function () {
            var $winWidth = getWindowWidth(),
                $scaleRatio = getScaleRatio($winWidth);

            $videoWidth = getVideoWidth(this);
            $videoHeight = getVideoHeight(this);

            heritage.setScale($videoHeight, $videoWidth, $scaleRatio);

            setTimeout(function(){heritage.swiperInit();},2000);
        });
    },

    mobileInit : function() {
        //$('.swiper-container-mobile').css('height', '511px');

        heritageMobileSwiper = $('#heritagePage .swiper-container-mobile').swiper({
            mode:'horizontal',
            keyboardControl: true,
            //centeredSlides: true,
            slidesPerView: 1,
            watchActiveIndex: true,
            //cssWidthAndHeight: true,
            speed: 600,
            pagination: '.pagination',
            paginationClickable: true,
            //calculateHeight: true

            onSlideChangeStart : function(swiper, direction) {

                var $swiperSlideHeight = $('.swiper-container-mobile .swiper-slide-active').height(),
                    $swiperContainer = $('.swiper-container-mobile'),
                    $copy = $('.swiper-container-mobile .copy-wrapper');

                $swiperContainer.height($('.swiper-container-mobile .swiper-slide-active').height());
                $copy.removeClass('active');

            },
            onSlideChangeEnd : function(swiper, direction) {

                var $copy = $('.swiper-container-mobile .swiper-slide-active .copy-wrapper');

                $copy.addClass('active');

                $('html, body').animate({
                    scrollTop: $("#heritagePage").offset().top - 76
                },500);

            }
        });

        setTimeout(function(){
            var $swiperSlideHeightInit = $('.swiper-container-mobile .swiper-slide-active').height(),
                $swiperContainerInit = $('.swiper-container-mobile'),
                $heritage = $('#heritagePage');

            $('.swiper-container-mobile').addClass('active');
            $swiperContainerInit.height($swiperSlideHeightInit);
            $heritage.addClass('active');

        },500);


        $('.button').on('click', function(e){
            e.preventDefault();
            //heritageSwiper.swipeNext();
            heritageMobileSwiper.swipeTo(heritageMobileSwiper.activeIndex+1);
         });

        $('.controls .play-next').on('click', function(e){
            e.preventDefault();
            heritageMobileSwiper.swipeTo(heritageMobileSwiper.activeIndex+1);
         });

        $('.controls .play-prev').on('click', function(e){
            e.preventDefault();
            heritageMobileSwiper.swipeTo(heritageMobileSwiper.activeIndex-1);
         });
    },

    reInit : function(){
            var $winWidth = getWindowWidth(),
                $scaleRatio = getScaleRatio($winWidth),
                $container = $('.swiper-container'),
                $message = $('.optimize');

            $container.addClass('opacity');
            setTimeout(function(){$message.addClass('opacity');},100);
            if (!Modernizr.touch) {
            heritage.setScale($videoHeight, $videoWidth, $scaleRatio);
            }
            else {
                heritage.setScale(1150, 864, $scaleRatio);
            }
            heritageSwiper.swipeTo(0);

            setTimeout(function(){
                heritageSwiper.reInit();
                $message.removeClass('opacity');
                $container.removeClass('opacity');
            },2000);
    },

    setScale : function($videoHeight, $videoWidth, $scaleRatio) {
        $('.swiper-container').css('height', ($videoHeight * $scaleRatio) + 10 + 'px');
        $('.swiper-slide').css('height', $videoHeight * $scaleRatio + 'px');
        $('.swiper-slide').css('width', $videoWidth * $scaleRatio + 'px');
        if (Modernizr.touch) {
            var $winWidth = getWindowWidth();

            if ($winWidth >= 1024) {
                $('.swiper-container').css('height', ($videoHeight * $scaleRatio) - 190 + 'px');
                $('.swiper-slide').css('height', ($videoHeight * $scaleRatio) - 200 + 'px');
                $('.swiper-slide .video-content').css('height', ($videoHeight * $scaleRatio) - 220 + 'px');
                $('.swiper-slide .video-content').css('width', ($videoWidth * $scaleRatio) - 20 + 'px');
            }
            else {
                $('.swiper-container').css('height', ($videoHeight * $scaleRatio) - 130 + 'px');
                $('.swiper-slide').css('height', ($videoHeight * $scaleRatio) - 140 + 'px');
                $('.swiper-slide .video-content').css('height', ($videoHeight * $scaleRatio) - 160 + 'px');
                $('.swiper-slide .video-content').css('width', ($videoWidth * $scaleRatio) - 20 + 'px');
            }
        }


    },

    swiperInit : function(){
        //Swiper Init
        heritageSwiper = $('#heritagePage .swiper-container').swiper({
            mode:'horizontal',
            noSwiping: true,
            keyboardControl: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            watchActiveIndex: true,
            cssWidthAndHeight: true,
            speed: 600,

            onSlideChangeEnd : function(swiper, direction) {
                var $activeSlide = $('.swiper-slide-active'),
                    $otherSlides = $('.swiper-slide'),
                    $otherInfoBoxes = $('.swiper-slide .info-box'),
                    $video = $('.swiper-slide-active video'),
                    $otherVideos = $('.swiper-slide video'),
                    $leftArrow = $('.left-arrow');

                if (!Modernizr.touch) {
                    heritage.resetVideo($otherVideos);
                    if ($video) {heritage.playVideo($video);}
                }
                $otherSlides.find('.info-box').removeClass('visible');
                $otherSlides.find('.arrow-down').removeClass('visible');
                $activeSlide.find('.info-box').addClass('visible');
                $activeSlide.find('.arrow-down').addClass('visible');
                heritage.infoBoxReset($otherInfoBoxes);

                if (heritageSwiper.activeIndex == 1) {$leftArrow.addClass('visible');}
            },

            onSlideChangeStart : function(swiper, direction) {
                var $zino = $('.zino'),
                    $slides = $('.swiper-slide'),
                    $video = $('.swiper-slide video'),
                    $leftArrow = $('.left-arrow');

                if (!Modernizr.touch) {heritage.pauseVideo($video);}

                if ($leftArrow.hasClass('visible')) {$leftArrow.removeClass('visible');}

                if (heritageSwiper.activeIndex == 0) {
                    $zino.removeClass('out');
                    $slides.removeClass('start');
                }
                else {
                    $zino.addClass('out');
                    $slides.addClass('start');
                }
            }
        });

        $('.button').on('click', function(e){
            e.preventDefault();
            //heritageSwiper.swipeNext();
            heritageSwiper.swipeTo(heritageSwiper.activeIndex+1);
         });

        $('.hit-area-next').on('click', function(e){
            e.preventDefault();
            //heritageSwiper.swipeNext();
            heritageSwiper.swipeTo(heritageSwiper.activeIndex+1);
         });

        $('.hit-area-previous').on('click', function(e){
            e.preventDefault();
            //heritageSwiper.swipePrev();
            heritageSwiper.swipeTo(heritageSwiper.activeIndex-1);
         });

        //$('.hit-area-previous').css('cursor','url(/images/site/cursor_arrow_left.png),auto');
        //$('.hit-area-next').css('cursor','url(/images/site/cursor_arrow_right.png),auto');

        var $activeSlide = $('.swiper-slide-active'),
            $infoBox = $('.info-box'),
            $video = $('video'),
            $x = null,
            $buttonOff = false,
            $position = null;

        //heritage.pauseVideo($video);
        heritage.infoBoxReset($infoBox);

        $activeSlide.find('.info-box').addClass('visible');
        $activeSlide.find('.arrow-down').addClass('visible');

        //heritage.infoBoxHint();
        $infoBox.on({
            mouseenter: function(){
                var $this = $(this),
                    $bottom = $this.css('bottom'),
                    $arrow = $('.arrow-icon');

                $position = $bottom;

                if ($bottom != '0px') {
                    $x = true,
                    //$position = $bottom;

                    $this.css('bottom', (parseInt($bottom) + 30) + 'px');
                }
            },
            mouseleave: function(){
                var $this = $(this),
                    $bottom = $this.css('bottom');

                if ($x && $bottom != '0px' && $buttonOff == false) {
                    $this.css('bottom', $position);
                    $x = null;
                }
            },
            click: function(){
                var $this = $(this),
                    $bottom = $this.css('bottom'),
                    $arrow = $('.arrow-icon');

                $buttonOff = true;

                if ($bottom != '0px') {
                    $this.css('bottom', 0 + 'px');
                    $this.parent().find('.arrow-icon').addClass('rotate');
                    setTimeout( function() {
                        $buttonOff = false;
                    }, 1000);
                }
                else {
                    heritage.infoBoxReset($this);
                    $this.parent().find('.arrow-icon').removeClass('rotate');
                    setTimeout( function() {
                        $buttonOff = false;
                    }, 1000);
                }
            }
        });
    },

    infoBoxHint : function() {
        var $infoBox = $('.info-box'),
            $x = null,
            $position = null;

        $infoBox.hover(function(){
            var $this = $(this),
                $bottom = $this.css('bottom'),
                $arrow = $('.arrow-icon');


            if ($bottom != '0px') {
                $x = true,
                $position = $bottom;

                $this.css('bottom', (parseInt($bottom) + 30) + 'px');
            }
        }, function() {
            var $this = $(this),
                $bottom = $this.css('bottom');
            if ($x && $bottom != '0px' && $position != $bottom) {
                $this.css('bottom', (parseInt($bottom) - 30) + 'px');
                $x = null;
            }
        });
    },

    infoBoxReset : function($element){
        $element.each( function( index ) {
            var $height = $(this).find('.copy-wrapper').height(),
                $bottom = $(this).css('bottom');

            $(this).css('bottom', -($height+15) + 'px');
        });
    },

    pauseVideo : function($video) {
        if (!Modernizr.touch) {
            $video.each( function( index ) {$(this).get(0).pause();});
        }
    },

    playVideo : function($video) {
        if (!Modernizr.touch) {
            if (heritageSwiper.activeIndex != 0 && heritageSwiper.activeIndex != 11) {$video.get(0).play();}
        }
    },

    resetVideo : function($video) {
        if (!Modernizr.touch) {
            $video.each( function( index ) {
                if (!$(this).hasClass('swiper-slide-active')) {
                    $(this).get(0).currentTime = 0;
                }
            });
        }
    }
};

var homepage = {
    init : function() {
        var $processVideo = $('#process .video-wrapper');
        homepage.news();
        homepage.heritage();
        homepage.process();
        homepage.perfectMatch();
        homepage.heroVideo();
        homepage.getFeatured();

        if (Modernizr.touch) {$processVideo.remove();}

    },

    getFeatured : function() {
        $.ajax({
            type:'post',
            dataType: 'json',
            url: '/json/homepage_featured',
            success:function(response){homepage.displayFeatured(response);}
        });
    },

    displayFeatured : function($response) {

        var pathArray = window.location.href.split( '/' );
        var protocol = pathArray[0];
        var host = pathArray[2];
        var i = 0;

        $.each($response, function(index,obj) {

                var type,
                    date,
                    teaser;

                switch(obj.channel_id) {
                    case 9:
                        type = 'events';
                        break;
                    case 16:
                        type = 'beautiful-time';
                        break;
                }

                if (type == 'events') {
                    date = moment(obj.event_date*1000).format('MMMM Do YYYY');
                    teaser = obj.event_body;
                    teaser = teaser.replace(/(<([^>]+)>)/ig,"");
                } else {
                    date = moment(obj.entry_date).format('MMMM Do YYYY');
                    teaser = obj.beautiful_time_teaser;
                    teaser = teaser.replace(/(<([^>]+)>)/ig,"");
                }

                var url = protocol + '//' + host + '/' + type + '/' + obj.url_title;
                var background_image = (type == 'events') ? obj.image_event : obj.beautiful_time_background_image;
                var element = $('.homepage-featured').eq(i);

                element.attr('href', url);
                element.find('h3').text(date);
                element.find('h2').text(obj.title);
                element.find('p').text(homepage.truncate(teaser, 200));
                element.css('background-image', 'url(' + background_image + ')');

                i++;
        });


    },

    truncate : function (str, limit) {
        var bits,
            i;

        bits = str.split('');
        if (bits.length > limit) {
            for (i = bits.length - 1; i > -1; --i) {
                if (i > limit) {
                    bits.length = i;
                }
                else if (' ' === bits[i]) {
                    bits.length = i;
                    break;
                }
            }
            bits.push('...');
        }

        return bits.join('');

    },

    news : function() {
        var $adventure = $('.news .image-container');

        $adventure.on({
            mouseenter: function() {

                var $title = $(this).find('.title'),
                $containerHeight = $(this).height(),
                $titleHeight = $title.height();
                $title.css('bottom', $containerHeight - $titleHeight + 'px');
                $width = getWindowWidth();

                if ($width >= 768) {
                    $title.addClass('nudge');
                    $(this).find('h3').addClass('nudge');
                    $(this).find('.content').addClass('nudge');
                    $(this).find('.overlay').addClass('dim');
                }

            },
            mouseleave: function() {

                var $title = $(this).find('.title'),
                $containerHeight = $(this).height(),
                $titleHeight = $title.height();
                $title.css('bottom', '20px');
                $width = getWindowWidth();

                if ($width >= 768) {
                    $title.removeClass('nudge');
                    $(this).find('h3').removeClass('nudge');
                    $(this).find('.content').removeClass('nudge');
                    $(this).find('.overlay').removeClass('dim');
                }
            }
        });
    },

    heritage : function() {
        $('.heritage-cta').each(function () {
            console.log(this);
            $(this).hover(
                function(){
                    $width = getWindowWidth();

                    if ($width >= 480) {
                        $(this).find('.title').removeClass("slideUpOut").removeClass("slideDownIn"); //clear out mobile classes
                        $(this).find('.content').removeClass("slideUpIn").removeClass("slideDownOut"); //clear out mobile classes
                        $(this).find('.title h2').fadeTo(300,1).addClass("color")
                        $(this).find('.content').fadeTo(300,1).addClass("nudgeIn").removeClass("nudgeOut");
                    }
                    else {
                        $(this).find('.title').removeClass("nudgeUp").removeClass("nudgeDown"); //clear out desktop classes
                        $(this).find('.content').removeClass("nudgeIn").removeClass("nudgeOut"); //clear out desktop classes
                        $(this).find('.title').fadeTo(300,0).addClass("slideUpOut").removeClass("slideDownIn");
                        $(this).find('.content').fadeTo(300,1).addClass("slideUpIn").removeClass("slideDownOut");
                    }
                    if (Modernizr.touch) {
                        $(this).find('.article-sub-header').css("display", "none");
                    }
                    $(this).find('.info').fadeTo(400,1);
                    $(this).addClass("color")
                }, function (){
                    $width = getWindowWidth();

                    if ($width >= 480) {
                        $(this).find('.title h2').fadeTo(300,1).removeClass("color");
                        $(this).find('.content').fadeTo(300,0).addClass("nudgeOut").removeClass("nudgeIn");
                    }
                    else {
                        $(this).find('.title').fadeTo(300,1).addClass("slideDownIn").removeClass("slideUpOut");
                        $(this).find('.content').fadeTo(300,0).addClass("slideDownOut").removeClass("slideUpIn");
                    }
                    if (Modernizr.touch) {
                        $(this).find('.article-sub-header').css("display", "block");
                    }
                    $(this).find('.info').fadeTo(400,0);
                    $(this).removeClass("color");
                }
            );
        });
    },

    process : function() {
        var $process = $('#process-cta');

        if (!Modernizr.touch) {
            $(this).find('.article-sub-header').css("display", "none");
        }

        $process.hover(function(){
            if (!$(this).hasClass('hover')) {$(this).addClass('hover');}
            if (Modernizr.touch) {
                $(this).find('.article-sub-header').css("display", "none");
            }
        }, function() {
            if ($(this).hasClass('hover')) {$(this).removeClass('hover');}
            if (Modernizr.touch) {
                $(this).find('.article-sub-header').css("display", "block");
            }
        });
    },

    perfectMatch : function() {
        var $perfectMatch = $('#perfect-match-cta');

        if (!Modernizr.touch) {
            $(this).find('.article-sub-header').css("display", "none");
        }

        $perfectMatch.hover(function(){
            if (!$(this).hasClass('hover')) {$(this).addClass('hover');}
            if (Modernizr.touch) {
                $(this).find('.article-sub-header').css("display", "none");
            }
        }, function() {
            if ($(this).hasClass('hover')) {$(this).removeClass('hover');}
            if (Modernizr.touch) {
                $(this).find('.article-sub-header').css("display", "block");
            }
        });
    },

    heroVideo : function() {
        var $videoButton = $('.play-video-button'),
            $closeButton = $('.close-video'),
            $videoWrapper = $('#hero .video-wrapper'),
            $video = $('#hero .video-wrapper video'),
            $mp4Source = $videoWrapper.data('mp-source'),
            $webmSource = $videoWrapper.data('webm-source'),
            $videoPlaceholder = $('#hero-cta .video-placeholder');

        if (Modernizr.video) {
            if (Modernizr.video.webm) {
                if ($webmSource) {
                    addSourceToVideo($video, $webmSource, 'video/webm');
                }
            } else if (Modernizr.video.h264){
                if ($mp4Source) {
                    addSourceToVideo($video, $mp4Source, 'video/mp4');
                }
            }
        }

        $videoButton.on('click touchend', function(e){
            e.preventDefault();

            if (Modernizr.video) {
                if ($mp4Source && $webmSource) {
                    var $winWidth = getWindowWidth();

                    if (!Modernizr.touch) {
                        $video.attr("controls", true);
                    }
                    $video.get(0).play();
                    $videoPlaceholder.hide();
                    $videoWrapper.show();
                    $videoWrapper.addClass('visible');
                }

                if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                    $video[0].addEventListener('timeupdate', function() {
                        if (Modernizr.touch && $winWidth <= 640) {
                            $videoWrapper.hide();
                            $videoPlaceholder.show();
                            $videoWrapper.removeClass('visible');
                        }
                    }, false);
                }

            }
         });

        $closeButton.on('click', function(){homepage.closeVideo();});
    },

    closeVideo : function() {
        var $videoWrapper = $('#hero .video-wrapper'),
            $video = $('#hero .video-wrapper video'),
            $videoPlaceholder = $('#hero-cta .video-placeholder');

        if ($videoWrapper.hasClass('visible')) {
            $video.get(0).pause();
            $video.get(0).currentTime = 0;
            $videoWrapper.removeClass('visible');
            $videoWrapper.hide();
            $videoPlaceholder.show();
        }
    }

};

var contact = {
    init : function() {
        var $honeyPot = $('.last-name'),
            $loading = $('.loading');

        $honeyPot.hide();
        $loading.hide();
        contact.submit();
        contact.ctaHover();
    },

    ctaHover : function() {
        var $cta = $('a.cta');

        $cta.hover(function() {

            if (!$(this).find('.cta-hover').hasClass('hover')) {$(this).find('.cta-hover').addClass('hover');}
        }, function() {
            if ($(this).find('.cta-hover').hasClass('hover')) {$(this).find('.cta-hover').removeClass('hover');}
        });
    },

    submit : function() {
        $("#contactForm").submit(function(e) {
            var postData = $(this).serializeArray(),
                formURL = '/contact/send',
                $loading = $('.loading');
                $(".captcha-error").remove();

            $.ajax({
                type: "POST",
                url: "/contact/send",
                async: false,
                data: postData,
                beforeSend: function(xhr, options){
                    contact.clearError();

                    var $name = postData[1]['value'],
                        $email = postData[4]['value'],
                        $message = postData[5]['value'];
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    /*if ($(this).find('input[name="email"]') == '') {xhr.abort();}*/
                    
                    var captchaResponse;
                    var captchaData = grecaptcha.getResponse();
                    // Check captcha response
                    $.ajax({
                      type: "GET",
                      url: "/contact/captcha",
                      data: { response : captchaData},
                      async: false,
                      success: function(data){
                      captchaResponse = data;
                      }
                    });
                    console.log(captchaResponse);
                    
                    if(captchaResponse != 1)
                    {
                        //console.log("Check captcha");

                        $checkCaptcha = $("<div class=\"captcha-error\">").text("Please check the captcha box to proceed");
                        $("input[name=submit]").parent().prepend($checkCaptcha);

                        return false;
                    }
                    else if ($name == '') {
                        contact.error('name');
                        return false;
                    }
                    else if ($email == '' || !re.test($email)) {
                        contact.error('email');
                        return false;
                    }
                    else if ($message == '') {
                        contact.error('message');
                        return false;
                    }
                    else {$loading.show();}
                },
                success: function() {contact.confirmation();}
            });
            return false;
            e.preventDefault(); //STOP default action
            e.unbind(); //unbind. to stop multiple form submit.
        });
    },

    confirmation : function() {self.location="/contact/thank-you";},

    error : function(e) {
        if (e == "message") {
            var $input = $('#contactForm textarea[name="' + e + '"]');
        }
        else {
            var $input = $('#contactForm input[name="' + e + '"]');
        }
        $input.addClass('error');
    },

    clearError : function() {
        var $name = $('#contactForm input[name="name"]'),
            $email = $('#contactForm input[name="email"]'),
            $message = $('#contactForm textarea[name="message"]');

            if ($name.hasClass('error')) {$name.removeClass('error');}
            if ($email.hasClass('error')) {$email.removeClass('error');}
            if ($message.hasClass('error')) {$message.removeClass('error');}
    }
};

var insta = {
    init : function() {insta.click();},

    click : function(){
        //Hide/show
         $('.nav-link').click(function(){
            var type = $(this).attr('data-type');
            //build class name from type
            $('article').addClass('hidden');
            $('#'+type).removeClass('hidden');

            return false;
         })

         //Approve the post
         $('.approve').change(function(){
            var type = $(this).attr('data-type'),
                checked = $(this).prop('checked'),
                id = $(this).val();
                hash = $(this).next().val();

            //Set checked value
            checked = (checked == true || checked == 'true') ? 1 : 0;


            $.ajax({
                type:'POST',
                url: '/insta/approve',
                data: {
                    'type': type,
                    'id' : id,
                    'approve': checked,
                    'XID': hash
                },
                success: function(data){}});

        });
    }
};

var beautifulTime = {
    init : function() {
        if($('body').hasClass('beautiful-time')){
            var $buttons = $('.buttons a');

            $buttons.addClass('visible');

            beautifulTime.layout();
            beautifulTime.hideTeaser();
            beautifulTime.ctaHover();
            beautifulTime.buttonHover();
        }
    },

    layout : function() {

        var $lastItem = $(".group a.item:last-of-type"),
            $lastClass = $lastItem.exists() ? $lastItem.attr('class').replace("item ", "").replace(" break", "") : '',
            $beforeLastItem = $(".group a.item:nth-last-of-type(2)"),
            $beforeLastClass = $beforeLastItem.exists() ? $beforeLastItem.attr('class').replace("item ", "").replace(" break", "") : '';

        if ($lastClass == 'half' && $beforeLastClass != 'half') {
            $lastItem.attr('class', 'item whole');
        }

        if ($lastClass == 'single' && $beforeLastClass == 'whole') {
            $lastItem.attr('class', 'item whole');
        }

        if ($lastClass == 'single' && $beforeLastClass == 'single' && !$lastItem.hasClass('break')) {
            $lastItem.attr('class', 'item half break');
            $beforeLastItem.attr('class', 'item half');
        }



    },

    hideTeaser : function() {
        var $teaser = $('a.item');

        $teaser.each(function() {
            var $height = $(this).find('.teaser').height();
            $(this).find('.content-wrapper').css({bottom: (-$height + 20) + 'px'});
        });

    },

    ctaHover : function() {
        var $buttons = $('.buttons a');

        $buttons.hover(function(){
            $hover = $(this).find('.hover');
            if (!$hover.hasClass('visible')) {$hover.addClass('visible');}
        }, function(){
            $hover = $(this).find('.hover');
            if ($hover.hasClass('visible')) {$hover.removeClass('visible');}
        });
    },

    buttonHover : function() {
        var $buttons = $('a.item');

        $buttons.hover(function(){
            $hover = $(this).find('.hover'),
            $teaser = $(this).find('.teaser'),
            $height = $teaser.height();

            if (!$hover.hasClass('visible')) {
                $hover.addClass('visible');
                $(this).find('.content-wrapper').css({bottom: '30px'});
                $teaser.addClass('visible');
            }
        }, function(){
            $hover = $(this).find('.hover'),
            $teaser = $(this).find('.teaser'),
            $height = $teaser.height();

            if ($hover.hasClass('visible')) {
                $hover.removeClass('visible');
                $(this).find('.content-wrapper').css({bottom: (-$height + 20) + 'px'});
                $teaser.removeClass('visible');
            }
        });
    }
};

var events = {
    init : function() {events.hoverColor();},

    hoverColor : function() {
        var $article = $('#all-events article');

        $article.hover(function(){
            if (!$(this).hasClass('hover')) {$(this).addClass('hover');}
        }, function() {
            if ($(this).hasClass('hover')) {$(this).removeClass('hover');}
        });
    }
};

var modal = {

    init : function(){
        modal.clicks();
        modal.close();
    },

    close : function(){

        var $modal = $('.modal');

        // Stop the modal from closing in window click
        $modal.on('click', function(e){e.stopPropagation();});
        $('.close, .modal-container').on('click', function(){
            $('.modal-container').fadeOut(350);
            setTimeout(function(){$('.modal-container').remove();}, 350);
        });

    },

    open : function(element, modalURL){
        var $body = $('body');
        $.ajax({
            url: modalURL,
            context: document.body
        }).done(function( html ){
            if(!$(".modal-container").size())
            {
                $body.prepend( html );

                var $element    = $(element),
                    $modal      = $(element + ' .modal'),
                    winHeight   = $window.height(),
                    modalHeight = winHeight - 120;
                    modalTop    = ( winHeight - modalHeight )/2;

                // Set Modal Height
                if ( winHeight > 760 ){
                    $modal.css({'maxHeight' : modalHeight, 'marginTop' : modalTop });
                }
                else {
                    $modal.height(winHeight).css({ 'marginTop' : 0 });
                }

                // Show Modal
                $element.fadeIn(350);
                setTimeout(function(){$element.addClass('scaleOut');}, 50)

                setTimeout(function(){
                    $modal.mCustomScrollbar({
                        scrollInertia: 0
                    });
                }, 150);

                // Initialize Modal Things
                scroll.down();
                //form.init();
                modal.close();
            }
        });

    },

    clicks : function(){

        // Close modal with escape key
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {$('.close').trigger('click')} // esc
        });

        // Media Login Modal
        $('#footer-nav a.media').on('click', function(e){

            var $this = $(this),
                modalURL = $this.data('location');
            modal.open('.media-modal', modalURL);
            e.preventDefault();

        });

        // MISC Content
        $('body').on('click', '.popout', function(e){

                var $this = $(this),
                    modalURL = $this.attr('href');


                modal.open('.page', modalURL);
                e.preventDefault();
        });

    }

};

var shortlist = {
    init : function() {
        var $startingPos = 0,
            $loading = $('.shortlist-form-loading'),
            $prevBtn = $('#controls-shortlist .previous'),
            $nextBtn = $('#controls-shortlist .next'),
            $size = $(".pagination-wrapper .pagination-slide").length,
            $controls = $('#controls-shortlist'),
            $wrapperWidth = ($size * 237) + 237;

        $loading.hide();
        shortlist.button();
        shortlist.submit();

        $('.pagination-wrapper').css("width", $wrapperWidth + "px");
        $('.pagination-wrapper').css("-webkit-transform","translate(" + $startingPos + "px, 0px)");
        $('.pagination-wrapper').css("-moz-transform","translate(" + $startingPos + "px, 0px)");
        $('.pagination-wrapper').css("-ms-transform","translate(" + $startingPos + "px, 0px)");
        $('.pagination-wrapper').css("-o-transform","translate(" + $startingPos + "px, 0px)");
        $('.pagination-wrapper').css("transform","translate(" + $startingPos + "px, 0px)");
        $('.pagination-wrapper').attr("data-translateX", $startingPos);
        $('.pagination-wrapper').attr("data-index", "1");
        $prevBtn.addClass('fade');

        if ($size==0) {$controls.hide();}

        //If only one slide exists
        if ($size == 1) {$nextBtn.addClass('fade');}

        var $wrapper = $('.pagination-wrapper'),
            $index = $wrapper.attr("data-index");

        shortlist.updateNumbers($index);
        shortlist.swipe($size);
    },

    button : function() {
        // Shortlist animations
        var shortlistStatus = 0;

        $("#quick-links-list li:first-child, #close-shortlist").click(function(e){
            var $winWidth = getWindowWidth();

            if ($winWidth >= 768) {
                e.preventDefault();
                if (shortlistStatus == 0){
                    $('#shortlist').slideDown(400, function() {
                        //animation complete
                        shortlistStatus = 1;
                    });
                    $('#quick-links-list li:nth-child(2)').fadeTo(200,0, function() {
                        //animation complete
                        $('#quick-links-list li:nth-child(2)').css("visibility","hidden");
                    });
                    $('#quick-links-list li:nth-child(3)').fadeTo(200,0, function() {
                        //animation complete
                        $('#quick-links-list li:nth-child(3)').css("visibility","hidden");
                    });
                    $('#pagination-wrapper article').fadeTo(600,1);
                    $('#close-shortlist').delay(200).css("visibility","visible").fadeTo(300,1);
                }
                else {
                    $('#shortlist').slideUp(400, function() {
                        //animation complete
                        shortlistStatus = 0;
                    });
                    $('#close-shortlist').fadeTo(200,0, function() {
                        //animation complete
                        $('#close-shortlist').css("visibility","hidden");
                    });
                    $('#pagination-wrapper article').fadeTo(600,0);
                    $('#quick-links-list li:nth-child(2)').delay(300).css("visibility","visible").fadeTo(300,1);
                    $('#quick-links-list li:nth-child(3)').delay(300).css("visibility","visible").fadeTo(300,1);
                }
            }
        });
    },

    swipe : function($size) {
        var $next = $('.next a'),
            $previous = $('.previous a'),
            $send = $('.send-shortlist'),
            $review = $('.review-shortlist'),
            $wrapper = $('.pagination-wrapper');

            $next.on('click', function() {
                var $pos = $wrapper.attr("data-translateX"),
                    $index = $wrapper.attr("data-index"),
                    $scrollTo = parseInt($pos) - 237;

                if ($index != $size ) {
                    shortlist.swipeTo($scrollTo, parseInt($index)+1, $size);
                    shortlist.updateControls($scrollTo, parseInt($index)+1, $size);
                    shortlist.updateNumbers(parseInt($index)+1);
                }

            });

            $previous.on('click', function() {
                var $pos = $wrapper.attr("data-translateX"),
                    $index = $wrapper.attr("data-index"),
                    $scrollTo = parseInt($pos) + 237;

                if ($index != 1) {
                    shortlist.swipeTo($scrollTo, parseInt($index)-1, $size);
                    shortlist.updateControls($scrollTo, parseInt($index)-1, $size);
                    shortlist.updateNumbers(parseInt($index)-1);
                }
            });

            $send.on('click', function() {
                var $scrollTo = -($size * 237),
                    $controls = $('#controls-shortlist'),
                    $sendControls = $('.send-shortlist'),
                    $share = $('#share-shortlist');

                shortlist.swipeTo($scrollTo, "send", $size);
                $controls.hide();
                $sendControls.hide();
                $share.hide();
            });

            $review.on('click', function() {
                var $scrollTo = 0,
                    $index = 1,
                    $controls = $('#controls-shortlist'),
                    $sendControls = $('.send-shortlist'),
                    $share = $('#share-shortlist'),
                    $thanks = $('.shortlist-form-confirmation'),
                    $form = $('.shortlist-form-container'),
                    $prevBtn = $('#controls-shortlist .previous'),
                    $nextBtn = $('#controls-shortlist .next');

                shortlist.swipeTo($scrollTo, $index, $size);
                shortlist.updateNumbers($index);
                shortlist.updateControls($scrollTo, $index, $size);
                $controls.show();
                if ($size == 1) {
                    $prevBtn.addClass('fade');
                    $nextBtn.addClass('fade');
                }
                $sendControls.show();
                $share.show();
                $form.addClass('block').addClass('visible');
                $thanks.removeClass('visible').removeClass('block');
            });

    },

    swipeTo : function(pos, index, size) {
        var $wrapper = $('.pagination-wrapper');

        //Move Pagination Wrapper w/ vendor prefixes
        $wrapper.css("-webkit-transform","translate(" + pos + "px, 0px)");
        $wrapper.css("-moz-transform","translate(" + pos + "px, 0px)");
        $wrapper.css("-ms-transform","translate(" + pos + "px, 0px)");
        $wrapper.css("-o-transform","translate(" + pos + "px, 0px)");
        $wrapper.css("transform","translate(" + pos + "px, 0px)");

        //Update data attribute translateX and index
        $('.pagination-wrapper').attr("data-translateX", pos);
        $('.pagination-wrapper').attr("data-index", index);
    },

    updateControls : function(pos, index, size) {
        var $prevBtn = $('#controls-shortlist .previous'),
            $nextBtn = $('#controls-shortlist .next');

        if ($prevBtn.is(':hidden')) {$prevBtn.show();}
        if ($nextBtn.is(':hidden')) {$nextBtn.show();}

        //Previous Button Styling
        if ((parseInt(index) == 1) && (!$prevBtn.hasClass('fade'))) {$prevBtn.addClass('fade');}
        else {$prevBtn.removeClass('fade');}

        //Next Button Styling
        if ((parseInt(index) == size) && (!$nextBtn.hasClass('fade'))) {$nextBtn.addClass('fade');}
        else {$nextBtn.removeClass('fade');}
    },

    updateNumbers : function(index) {
        var $size = $(".pagination-wrapper article").length,
            $currentFirstItem = $('.current-first-item'),
            $currentLastItem = $('.current-last-item'),
            $currentFirstItemIndex = index,
            $currentLastItemIndex = (parseInt($size)-1) % 3 == 0 ? (parseInt($size)-1) / 3 : Math.floor((parseInt($size)-1) / 3) + 1;

            /*$currentFirstItemIndex = (index * 3) - 2;


        if ($currentLastItemIndex > $size) {
            $currentLastItemIndex = $size;
        }
        if ($size == "2") {
            $currentLastItemIndex = 1;
        }
        if ($size == "3") {
            $currentLastItemIndex = 2;
        }*/
        $currentFirstItem.text($currentFirstItemIndex);
        $currentLastItem.text($currentLastItemIndex);
    },

    submit : function() {
        $("#shortlistForm").submit(function(e) {
            var postData = $(this).serializeArray(),
                formURL = '/shortlist/send';
                $loading = $('.shortlist-form-loading');


            $.ajax({
                type: "POST",
                url: "/shortlist/send",
                data: postData,
                beforeSend: function(xhr, options){
                    //contact.clearError();

                    var $email = postData[0]['value'];
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    /*if ($(this).find('input[name="email"]') == '') {xhr.abort();}*/
                    if ($email == '' || !re.test($email)) {
                        //contact.error('email');
                        return false;
                    }
                    else {$loading.show();}
                },
                success: function() {shortlist.confirmation();}
            });
            return false;
            e.preventDefault(); //STOP default action
            e.unbind(); //unbind. to stop multiple form submit.
        });
    },

    confirmation : function() {
        var $thanks = $('.shortlist-form-confirmation'),
            $form = $('.shortlist-form-container'),
            $loading = $('.shortlist-form-loading');

        $loading.hide();
        $form.removeClass('visible').removeClass('block');
        $thanks.addClass('block').addClass('visible');
    }
};

function myFunction() {$('#mc-embedded-subscribe').click();}
var sdl = {
    init : function() {
        sdl.click();
        // sdl.country();
    },

    country : function() {
        /*$.get("http://ipinfo.io", function (response) {$("#default_location").val(response.country);}, "jsonp");*/

        $.getJSON("http://ip-api.com/json/?callback=?", function(data) {$("#default_location").val(data.countryCode);});
    },
    click : function(){
        //Hide/show
        $('#mc-embedded-subscribe').click(function(){
            if($('#b_934faa95c169fc7a36fd867de_d420817aac').val() != ""){

            }else{
                var email = $('#mc-embedded-subscribe-form').find('input[name="email"]').val();
                if(sdl.validateEmail(email)){
                    sdl.country();
                    $('#b_934faa95c169fc7a36fd867de_d420817aac').remove()
                    var that = $( '#mc-embedded-subscribe-form' ).serialize();

                    $('#loading').css("display","block");
                    $.ajax({
                        url: "http://166.78.26.89:8081/profile/signup?"+that,
                        dataType: "json",
                        success: function(json){
                            if (json.status) {

                                if (json.action=='resendEmail') {self.location="/preferences/email?seed="+json.seed+"&email="+email;} else if
                                    (json.action=='createPassword') {self.location="/preferences/index.html?email="+email;} else if
                                    (json.action=='emailSend') {
                                        // var seed = json.seed;
                                    self.location="/preferences/check-email";
                                }

                            } else {
                                if (json.error=='login') {
                                    // self.location="/preferences/member/login";
                                    self.location="/account/login";
                                } else {
                                    $('#loading').css("display","none");
                                    alert('your sign up failed, try again');
                                }
                            }
                        }

                    });
                }else{
                    alert('Please enter a valid email address');
                }

            }

        })

        // Login page account create submit
         $('#signup #login-subscribe-form').submit(function(e){
            e.preventDefault();
            var email = $('#signup #login-subscribe-form').find('input[name="email"]').val();
            if(sdl.validateEmail(email)){
                $('#signup-loading').css("display","block");
                sdl.country();
                var that = $( '#signup #login-subscribe-form' ).serialize();

                $.ajax({
                    url: "http://166.78.26.89:8081/profile/signup?brand=davidoff&country=US&email="+encodeURIComponent(email),
                    dataType: "json",
                    success: function(json){
                        if (json.status) {

                            if (json.action=='resendEmail') {self.location="/preferences/email?seed="+json.seed+"&email="+encodeURIComponent(email);} else if
                                (json.action=='createPassword') {self.location="/preferences/index.html?email="+encodeURIComponent(email);} else if
                                (json.action=='emailSend') {
                                    // var seed = json.seed;
                                self.location="/preferences/check-email";
                            }

                        } else {
                            if (json.error=='login') {
                                // self.location="/preferences/member/login";
                                self.location="/account/login";
                            } else {
                                $('#loading').css("display","none");
                                alert('your sign up failed, try again');
                            }
                        }
                    }

                });
            }else{
                alert('Please enter a valid email address');
            }
         })

    },
    validateEmail : function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

};

var account = {
    $requestUrl: "http://166.78.26.89:8081/",
    $cigarList: {},
    $brand: "davidoff",
    $brandDisplay: "Davidoff",
    $email: "",
    $lineList: [],
    $profile: {},
    $statesList: {},
    $storesList: {},
    $davidoffCountries: [],


    init : function() {
        if($('body').hasClass('account')){
            account.$email = $('#member_email').val();
            // $("input.phone").intlTelInput({
            //  utilsScript: "/includes/intl-tel-input/lib/libphonenumber/build/utils.js"
            // });

            if(account.$email && (account.$email != "undefined")){
                account.getStoreData();
                account.getCigars();
                account.populateCountryList();
                account.getFullStateList(1);
                account.getUserData();
                account.switchListener();
            }

            account.pages();
            account.revealForm();
            account.hideForm();
            account.stepSelect();
            account.submit();

        }
    },
    getCigars : function() {
        $.ajax({
            url: account.$requestUrl + "product?brand=" + account.$brand,
            dataType: "json",
            success: function(json){
                if (json.status) {

                    account.$cigarList = json.cigars;
                    account.buildLineList();

                } else {}}

        });


    },
    buildLineList : function() {
        $.each(account.$cigarList, function(key, obj) {
            if($.inArray(obj.line, account.$lineList) == -1){account.$lineList.push(obj.line);}
        });
        account.$lineList.sort();
        account.buildListSelectFor(".line-select-box", 0);

    },
    buildListSelectFor : function(identifier, clear) {
        if(clear){
            var html = "";
            html += "<option value=\"unknown\" disabled=\"\" selected=\"\">Please Select Line</option>\n";
            html += "<option value=\"\" disabled=\"\">  ---------  </option>\n";
        }else{
            var html = $(identifier).html();
        }
        $.each(account.$lineList, function(i, value) {
            html += "<option value=\"" + value + "\">" + value + "</option>\n";
        });
        $(identifier).html(html);
    },
    buildSkuSelectFor : function(lineID, skuID, show) {
        var html = "",
            line = $(lineID).val(),
            skuList = []
            html = "";

            html += "<option value=\"unknown\" disabled=\"\" selected=\"\">Please Select Cigar</option>\n";
            html += "<option value=\"\" disabled=\"\">  ---------  </option>\n";

        // Get Cigars in the line
        $.each(account.$cigarList, function(i, obj) {
            if(obj.line.toLowerCase() == line.toLowerCase()){
                skuList.push({ "id" : obj.id, "name" : obj.name });

            }
        });

        // Sort the list of Cigars
        skuList.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        // Build the Sku select list
        $.each(skuList, function(i, obj) {
            html += "<option value=\"" + obj.id + "\">" + obj.name + "</option>\n";
        });
        $(skuID).html(html);

        if(show){
            account.showField(skuID + "_select");
        }

    },
    getUserData : function() {
        $('.loading .message').text('One moment while we retrieve your information...');
        $('#loading_display').css("display","block");

        $.ajax({
          url: account.$requestUrl + 'profile/view?brand=' + account.$brand + '&email=' + encodeURIComponent(account.$email),
          dataType: 'json',
          success:function(data){
            if(data.status){
                account.$profile = data.profile;
                account.populateUserFields();
            }else{
                if (data.error = "Could not find the recipient in SDL") {
                    $('.loading .message').html('Error: Unable to locate user. <br>Back to the <a href="/">homepage</a>');
                }else{
                    $('.loading .message').html('An error occured. Please try again later.');
                };
            }
          },
          error:function(request, status, message){
                $('.loading .message').html('An error occured: ' + message);
          }
        });
    },
    getStoreData : function() {
        $.ajax({
          url: account.$requestUrl + 'store?brand=' + account.$brand,
          dataType: 'json',
          success:function(data){
            if(data.status){
                account.$storesList = data.stores;
                account.buildPreferredCountrySelector();
            }else{}}
        });
    },
    populateUserFields : function(data) {

        // Personal Info
        if(account.$profile.title){
            $('#titleLink').empty().text("Title: "+account.$profile.title);
            if($.inArray(account.$profile.title, ['Mr.', 'Miss', 'Mrs.', 'Dr.']) != -1) {
                $("input[name='title'][value='" + account.$profile.title + "']").prop('checked', true);
            }else{
                $("input[name='title'][value='other']").prop('checked', true);
                $("#title_input_other").val(account.$profile.title);
                account.showField('.title_other');
            }
        }else{$('#titleLink').empty().text("Title");}


        if(account.$profile.firstName){
            $('#firstName').val(account.$profile.firstName);
            $('#firstNameLink').empty().text("First Name: "+account.$profile.firstName);
        }else{
            $('#firstNameLink').empty().text("First Name");
        }

        if(account.$profile.lastName){
            $('#lastName').val(account.$profile.lastName);
            $('#lastNameLink').empty().text("Last Name: "+account.$profile.lastName);
        }else{
            $('#lastNameLink').empty().text("Last Name");
        }

        if(account.$profile.gender){
            $('#genderLink').empty().text("Gender: "+account.$profile.gender);
            $('#gender').val(account.$profile.gender);
        }else{$('#genderLink').empty().text("Gender");}

        // Birth Day
        if(account.$profile.dob){
            var birthDayString = account.$profile.dob.split(' ');
            var dateArray = birthDayString[0].split('/');

            var birthDate = dateArray[0],
                birthMonth= dateArray[1],
                birthYear = dateArray[2];

            $('#birthMonth').val(birthMonth);
            $('#birthDate').val(birthDate);
            $('#birthYear').val(birthYear);
        }

        if(birthMonth && birthDate && birthYear){
            $('#birthDayLink').empty().text("Birthday: "+birthMonth + "-" + birthDate + "-" + birthYear);
        }else{$('#birthDayLink').empty().text("Birthday");}

        // Mailing
        if(account.$profile.addressLine1){
            $('#street').val(account.$profile.addressLine1);
            $('#streetLink').empty().text("Address: "+account.$profile.addressLine1);
        }

        if(account.$profile.addressLine2){
            $('#street2').val(account.$profile.addressLine2);
            $('#street2Link').empty().text("Address 2: "+account.$profile.addressLine2);
        }

        if(account.$profile.city){
            $('#city').val(account.$profile.city);
            $('#cityLink').empty().text("City: "+account.$profile.city);
        }

        if(account.$profile.state && account.$profile.country.isocode == "US"){
            $('#state').val(account.$profile.state.statecode);
            $('#stateLink').empty().text("State: "+account.$profile.state.state);
        }else{account.hideField('#stateLink');}

        $('#zip').val(account.$profile.zip);
        $('#zipLink').empty().text("Zip/Postal Code: "+account.$profile.zip);

        if(account.$profile.country){
            $('#country').val(account.$profile.country.isocode);
            $('#countryLink').empty().text("Country: "+account.$profile.country.country);
        }

        // Phone
        if(account.$profile.mobile){
                $('#mobilePhone').val(account.$profile.mobile);
                $('#mobileLink').empty().text("Telephone (with country code): "+account.$profile.mobile);
        }

        // Messaging Opt In/Out
        if(account.$profile.optinToEmail){
            $('#emailSwitchLink').empty().text("E-mail Updates: On");
            $('#email-switch').prop('checked', true);
        }else{
            $('#emailSwitchLink').empty().text("E-mail Updates: Off");
            $('#email-switch').prop('checked', false);
        }

        if(account.$profile.optinToMail){
            $('#mailSwitchLink').empty().text("Print Mail Updates: On");
            $('#mail-switch').prop('checked', true);
        }else{
            $('#mailSwitchLink').empty().text("Print Mail Updates: Off");
            $('#mail-switch').prop('checked', false);
        }

        if(account.$profile.optinToSMS){
            $('#smsSwitchLink').empty().text("SMS Text Updates: On");
            $('#sms-switch').prop('checked', true);
        }else{
            $('#smsSwitchLink').empty().text("SMS Text Updates: Off");
            $('#sms-switch').prop('checked', false);
        }

        // Preferred Cigars
        if(account.$profile.cigar1){
            $('#line-select-link1').empty().text("Line: "+account.$profile.cigar1.line);
            $('#line1').val(account.$profile.cigar1.line);
            account.buildSkuSelectFor('#line1', '#sku1', 0);
            $('#sku-select-link1').empty().text("Cigar: "+account.$profile.cigar1.name);
            $('#sku1').val(account.$profile.cigar1.id);
        }else{
            $('#line-select-link1').empty().text("No Line Selection");
            $('#sku-select-link1').empty().text("No Cigar Slection");
        }

        if(account.$profile.cigar2){
            $('#line-select-link2').empty().text("Line: "+account.$profile.cigar2.line);
            $('#line2').val(account.$profile.cigar2.line);
            account.buildSkuSelectFor('#line2', '#sku2', 0);
            $('#sku-select-link2').empty().text("Cigar: "+account.$profile.cigar2.name);
            $('#sku2').val(account.$profile.cigar2.id);
        }else{
            $('#line-select-link2').empty().text("No Line Selection");
            $('#sku-select-link2').empty().text("No Cigar Slection");
        }

        if(account.$profile.cigar3){
            $('#line-select-link3').empty().text("Line: "+account.$profile.cigar3.line);
            $('#line3').val(account.$profile.cigar3.line);
            account.buildSkuSelectFor('#line3', '#sku3', 0);
            $('#sku-select-link3').empty().text("Cigar: "+account.$profile.cigar3.name);
            $('#sku3').val(account.$profile.cigar3.id);
        }else{
            $('#line-select-link3').empty().text("No Line Selection");
            $('#sku-select-link3').empty().text("No Cigar Slection");
        }


        account.showField('#sku-select-link1');
        $('#sku1').show();
        $('#sku1_select').addClass('form');

        account.showField('#sku-select-link2');
        $('#sku2').show();
        $('#sku2_select').addClass('form');

        account.showField('#sku-select-link3');
        $('#sku3').show();
        $('#sku3_select').addClass('form');


        if(account.$profile.store){
            // Preferred Store
            $('#preferred-country-select-link').empty().text("Country: "+account.$profile.store.country);
            $('#preferred-country').val(account.$profile.store.country);

            if(account.$profile.store.country == "United States"){
                account.buildPreferredStateSelector('#preferred-state');
                $('#preferred-state-select-link').empty().text("State: "+account.$profile.store.state);
                $('#preferred-state').val(account.$profile.store.state);
            }else{
                account.clearPreferredStateList();
                account.hideField('#preferred-state-select-link');
            }

            account.buildPreferredCitySelector('#preferred-city');
            $('#preferred-city-select-link').empty().text("City: "+account.$profile.store.city);
            $('#preferred-city').val(account.$profile.store.city);

            account.buildPreferredStoreSelector('#preferred-store');
            $('#preferred-store-select-link').empty().text("Store: "+account.$profile.store.name);
            $('#preferred-store').val(account.$profile.store.id);
        }else{
            $('#preferred-country-select-link').empty().text("No Country Selection");
            $('#preferred-state-select-link').empty().text("No State Selection");
            $('#preferred-city-select-link').empty().text("No City Selection");
            $('#preferred-store-select-link').empty().text("No Store Selection");
        }


        account.smsSwitchCheck();
        account.mailSwitchCheck();
        $('#loading_display').css("display","none");


    },
    switchListener : function() {
        $('#mobilePhone').on("keyup", function(){account.smsSwitchCheck();});
        $('#mobilePhone').on("blur", function(){account.smsSwitchCheck();});
        $('#country').on("change", function(){account.mailSwitchCheck();});
        $('#city').on("keyup", function(){account.mailSwitchCheck();});
        $('#city').on("blur", function(){account.mailSwitchCheck();});
        $('#zip').on("keyup", function(){account.mailSwitchCheck();});
        $('#zip').on("blur", function(){account.mailSwitchCheck();});
        $('#firstName').on("blur", function(){account.mailSwitchCheck();});
        $('#lastName').on("blur", function(){account.mailSwitchCheck();});


    },
    smsSwitchCheck : function() {
        if($('#mobilePhone').val().length > 3){
            $("#sms-switch").removeAttr("disabled");
                if(account.$profile.optinToSMS){
                    $('#smsSwitchLink').empty().text("SMS Text Updates: On");
                    $('#sms-switch').prop('checked', true);
                }else{
                    $('#smsSwitchLink').empty().text("SMS Text Updates: Off");
                    $('#sms-switch').prop('checked', false);
                }
        }else{
            $('#smsSwitchLink').empty().text("SMS Text Updates: Off");
            $('#sms-switch').prop('checked', false);
            $("#sms-switch").attr("disabled", true);
        }

        // if((typeof($('#mobilePhone').intlTelInput('isValidNumber')) == "boolean") && ($('#mobilePhone').intlTelInput('isValidNumber') == true )){
        //  $('#smsSwitchLink').empty().text("SMS Text Updates: On");
        //     $("#sms-switch").removeAttr("disabled");
        //      if(account.$profile.optinToSMS){
        //          $('#smsSwitchLink').empty().text("SMS Text Updates: On");
        //          $('#sms-switch').prop('checked', true);
        //      }else{
        //          $('#smsSwitchLink').empty().text("SMS Text Updates: Off");
        //          $('#sms-switch').prop('checked', false);
        //      }
        // }else if((typeof($('#mobilePhone').intlTelInput('isValidNumber')) == "object") && ($('#mobilePhone').val().length > 5 )){
        //  $('#smsSwitchLink').empty().text("SMS Text Updates: On");
        //     $("#sms-switch").removeAttr("disabled");
        //      if(account.$profile.optinToSMS){
        //          $('#smsSwitchLink').empty().text("SMS Text Updates: On");
        //          $('#sms-switch').prop('checked', true);
        //      }else{
        //          $('#smsSwitchLink').empty().text("SMS Text Updates: Off");
        //          $('#sms-switch').prop('checked', false);
        //      }

        // }else{
        //  $('#smsSwitchLink').empty().text("SMS Text Updates: Off");
        //  $('#sms-switch').prop('checked', false);
        //  $("#sms-switch").attr("disabled", true);
        // }
    },
    mailSwitchCheck : function() {
        if(($('#country').val() != "") && ($('#city').val() != "") && ($('#zip').val() != "") && ($('#firstName').val() != "") && ($('#lastName').val() != "") ){
            $('#mailSwitchLink').empty().text("Print Mail Updates: On");
            $("#mail-switch").removeAttr("disabled");
                if(account.$profile.optinToMail){
                    $('#mailSwitchLink').empty().text("Print Mail Updates: On");
                    $('#mail-switch').prop('checked', true);
                }else{
                    $('#mailSwitchLink').empty().text("Print Mail Updates: Off");
                    $('#mail-switch').prop('checked', false);
                }
        }else{
            $('#mailSwitchLink').empty().text("Print Mail Updates: Off");
            $('#mail-switch').prop('checked', false);
            $("#mail-switch").attr("disabled", true);
        }

    },
    attemptPhoneFix : function(number, country, rawIdentifier) {
        var countryData = $.fn.intlTelInput.getCountryData();
        var result = $.grep(countryData, function(e){ return e.iso2 == country; });
        if (result) {
            result = result[0];
            $(rawIdentifier).intlTelInput('setNumber', result.dialCode + number + "");
            if($(rawIdentifier).intlTelInput("isValidNumber")){
                return (result.dialCode + number + "");
            }else{
                $(rawIdentifier).intlTelInput('setNumber', result.dialCode + account.trimLeading0(number) + "");
                if($(rawIdentifier).intlTelInput("isValidNumber")){
                    return (result.dialCode + account.trimLeading0(number) + "");
                }
            }
        }else{
            return false;
        };
    },
    trimLeading0 : function(s) {
        if(s.substr(0,1) == "0"){
            s = s.substr(1,9999);
        }
        return s;
    },
    getFullStateList : function(populate) {
        $.getJSON(account.$requestUrl + 'state', function(json, textStatus) {
        }).done(function(json, textStatus){

            // loop through and grab the message from each commit
                account.$statesList = json.states;
                if(populate){account.populateFullStateList();}
        }).fail(function(){});},
    populateFullStateList : function() {
        for (var key in account.$statesList) {
            var state = account.$statesList[key].state,
                statecode = account.$statesList[key].statecode,
                option = "<option value='"+ statecode +"'>" + state + "</option>";
            $('#state').append(option);

            if(account.$profile.state != null){$('#state').val(account.$profile.state.statecode);}
        }
    },
    populateCountryList : function() {
        $.getJSON(account.$requestUrl + 'country?brand=davidoff', function(json, textStatus) {
        }).done(function(json, textStatus){

            // loop through and grab the message from each commit
            var items = [],
                elems = json.countries;

            for (var key in elems) {
                var country = elems[key].country,
                    isocode = elems[key].isocode,
                    option = "<option value='" + isocode + "'>" + country + "</option>";
                $('#country').append(option);
            }
            // $('#country option').each(function(key, value){
            //  var country = $(value).text().toLowerCase();
            //      country = country.replace(" ","-");
            //  if("united-states" == country){
            //      var $this = $(this);
            //      $this.attr("selected",true);
            //  }
            // });
            var statefieldSelect = $('#state option').html();
            $('#country').on("change", function(){
                var country = $('#country option:selected').text().toLowerCase();
                    country = country.replace(" ","-");

                // Conditionally update phone field
                // account.setPhoneCountry("#mobilePhone", $(this).val().toLowerCase());

                if("united-states" !== country){
                    $('#state').attr('disabled',true);
                    $('#state').find('option').remove();
                    account.hideField('#stateSelect');
                } else{
                    $('#state').attr('disabled',false);
                    // $('#state').empty().append(statefieldSelect);
                    $('#state').empty();
                    account.populateFullStateList();
                    account.showField('#stateSelect');
                }
            });


        }).fail(function(){});},
    buildPreferredCountrySelector : function() {
        var html = "",
            countries = [];

        html += "<option value=\"unknown\" disabled=\"\" selected=\"\">Please Select Country</option>\n";
        html += "<option value=\"\" disabled=\"\">  ---------  </option>\n";

        // Build the Country list
        $.each(account.$storesList, function(i, obj) {
            if($.inArray(obj.country, countries) == -1){countries.push(obj.country);}
        });

        // Sort the list of Countries
        countries.sort();

        // Build the select list
        $.each(countries, function(i, value) {
                account.$davidoffCountries.push(value);
                html += "<option value=\"" + value + "\">" + value + "</option>\n";
        });
        $("#preferred-country").html(html);

    },
    buildPreferredStateSelector : function() {
        var html = ""
            states = [];

        html += "<option value=\"unknown\" disabled=\"\" selected=\"\">Please Select State</option>\n";
        html += "<option value=\"\" disabled=\"\">  ---------  </option>\n";

        $.each(account.$storesList, function(i, value) {
            if(value.country == "United States"){
                if($.inArray(value.state, states) == -1 && value.state != ""){states.push(value.state);}
            }
        });

        // Sort the list of States
        states.sort();

        // Build the select list
        $.each(states, function(i, value) {
                html += "<option value=\"" + value + "\">" + value + "</option>\n";
        });
        $("#preferred-state").html(html);

    },
    buildPreferredCitySelector : function() {
        var html = "",
            cities = [];

        html += "<option value=\"unknown\" disabled=\"\" selected=\"\">Please Select City</option>\n";
        html += "<option value=\"\" disabled=\"\">  ---------  </option>\n";

        if($('#preferred-country').val() == "United States"){
            $.each(account.$storesList, function(i, value) {
                if(value.state == $('#preferred-state').val()){
                    if($.inArray(value.city, cities) == -1 && value.city != ""){cities.push(value.city);}
                }
            });
        }else{
            $.each(account.$storesList, function(i, value) {
                if(value.country == $('#preferred-country').val()){
                    if($.inArray(value.city, cities) == -1 && value.city != ""){cities.push(value.city);}
                }
            });
        }


        // Sort the list of Cities
        cities.sort();

        // Build the select list
        $.each(cities, function(i, value) {
            html += "<option value=\"" + value + "\">" + value + "</option>\n";
        });
        $("#preferred-city").html(html);

    },
    buildPreferredStoreSelector : function() {
        var html = "",
            stores = [],
            storesCheck = [];

        html += "<option value=\"unknown\" disabled=\"\" selected=\"\">Please Select Store</option>\n";
        html += "<option value=\"\" disabled=\"\">  ---------  </option>\n";

        $.each(account.$storesList, function(i, value) {
            if(value.city == $('#preferred-city').val()){
                if($.inArray(value.name, storesCheck) == -1 && value.name != ""){
                    storesCheck.push(value.name);
                    stores.push({ "id" : value.id, "name" : value.name });
                }
            }
        });

        // Sort the list of Stores
        stores.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        // Build the select list
        $.each(stores, function(i, value) {
            html += "<option value=\"" + value.id + "\">" + value.name + "</option>\n";
        });

        $("#preferred-store").html(html);

    },
    clearPreferredStateList : function() {$('#preferred-state').empty();},
    clearPreferredCityList : function() {$('#preferred-city').empty();},
    clearPreferredStoreList : function() {$('#preferred-store').empty();},
    pages : function() {
        $('.paginate a').on('click', function(e){
            e.preventDefault();
            var $link = $(this);
            $('.page-links a').removeClass('active');
            $link.addClass('active');

            $('#content .profile-section').removeClass('active');
            $('#'+$link.data('name')).addClass('active');
        });
    },
    revealForm : function() {
        $('#user-form .reveal-form').on('click', function(e){
            e.preventDefault();
            $('#user-form .reveal-form').hide();
            $('#user-form .pre-reveal-form').hide();
            // $('#user-form .form').show();
            $('#user-form .form').show().animate(
                                    {"opacity": "1"},
                                    "fast");
            if(account.$profile.country.isocode != "US"){account.hideField('#stateSelect');}
            if(account.$profile.store && (account.$profile.store.country != "United States")){account.hideField('#preferred-state_select');}
        });
        $('#title_radios input').on('click', function (e){
            e.preventDefault;
            if($('#title_radio_other').is(':checked')){account.showField('.title_other');}else{account.hideField('.title_other');}
        })

    },
    stepSelect : function() {
        $('.line-select-box').on('change', function(){
            var $this = $(this),
                id = $this.attr('id');

            account.buildSkuSelectFor("#" + id, "#" + id.replace('line', 'sku'), 1);
        });

        $('#preferred-country').on('change', function(){
            var $this = $(this);

            // Clear children
            account.clearPreferredStateList();
            account.clearPreferredCityList();
            account.clearPreferredStoreList();

            // Rebuild immediate child
            if($this.val() != "United States"){
                account.hideField("#preferred-state_select");
                account.buildPreferredCitySelector();
            }else{
                account.buildPreferredStateSelector();
                account.showField('#preferred-state_select');
            }
        });

        $('#preferred-state').on('change', function(){
            var $this = $(this);

            // Clear children
            account.clearPreferredCityList();
            account.clearPreferredStoreList();

            // Rebuild immediate child
            account.buildPreferredCitySelector();
        });

        $('#preferred-city').on('change', function(){
            // Clear child
            account.clearPreferredStoreList();

            // Rebuild immediate child
            account.buildPreferredStoreSelector();
        });
    },
    setPhoneCountry : function(identifier, value) {
        var $field = $(identifier),
            knownCountryIso = $.grep($.fn.intlTelInput.getCountryData(), function(e){ return e.iso2 == value; });

        if($field.val() == "" && knownCountryIso.length > 0){
            $(identifier).intlTelInput({
                utilsScript: "/includes/intl-tel-input/lib/libphonenumber/build/utils.js"
            });
            $field.intlTelInput("selectCountry", value);
        }else if($field.val() == "" && knownCountryIso.length == 0){$(identifier).intlTelInput("destroy");}
    },
    hideForm : function() {
        $('#user-form #cancel').on('click', function(e){
            e.preventDefault();
            $('#user-form .reveal-form').show();
            $('#user-form .pre-reveal-form').show();
            $('#user-form .form').hide();
            account.populateUserFields();

            if(account.$profile.country.isocode != "US"){account.hideField('#stateLink');}
            if(account.$profile.store && account.$profile.store.country != "United States"){account.hideField('#preferred-state-select-link');}

            $('#form-errors').css("display","none");

            $('.page-links a').removeClass('active');
            $('*[data-name="personal"]').addClass('active');

            $('#content .profile-section').removeClass('active');
            $('#personal').addClass('active');

            $('#current-password').val('');
            $('#new-password').val('');
            $('#new-password-confirm').val('');

            $('html, body').animate({scrollTop : 0},300);

        });
    },
    showField : function(identifier) {
        $(identifier).show("fast").animate(
                            {"opacity": "1"},
                            "fast");
    },
    hideField : function(identifier) {
        $(identifier).animate(
                            {"opacity": "0"},
                            "fast").hide("fast");
    },
    submit : function() {
        $("#user-form").on('submit', function(e){
            e.preventDefault();

            var newData = {};
            // Personal Info

            if($('input:radio[name=title]:checked').val() == "other"){
                newData.title = $('#title_input_other').val();
            }else{
                newData.title = $('input:radio[name=title]:checked').val();
            }
            var that = $('#user-form').serialize();
            newData.brand = account.$brand;
            newData.name = $('#firstName').val();
            newData.last_name = $('#lastName').val();
            newData.gender = $('#gender').val();
            newData.email = $('#member_email').val();

            // Birth Day
            newData.month = $('#birthMonth').val();
            newData.day = $('#birthDate').val();
            newData.year = $('#birthYear').val();

            // Mailing
            newData.address = $('#street').val();
            newData.address2 = $('#street2').val();
            newData.city = $('#city').val();
            newData.state = $('#state').val();
            newData.zip = $('#zip').val();
            newData.country = $('#country').val();
            if ($('#mobilePhone').val()) {
                newData.mobile = $('#mobilePhone').val();
            };
            newData.optintoemail = $('#email-switch').is(':checked');
            newData.optintomail = $('#mail-switch').is(':checked');
            newData.optintosms = $('#sms-switch').is(':checked');

            // Preferred Cigars
            newData.brand1 = account.$brandDisplay;
            newData.brand2 = account.$brandDisplay;
            newData.brand3 = account.$brandDisplay;
            newData.line1 = $('#line1').val();
            newData.line2 = $('#line2').val();
            newData.line3 = $('#line3').val();
            newData.cigar1 = $('#sku1').val();
            newData.cigar2 = $('#sku2').val();
            newData.cigar3 = $('#sku3').val();

            // Preferred Store
            newData.store_country = $('#preferred-country').val();
            newData.store_state = $('#preferred-state').val();
            newData.store_city = $('#preferred-city').val();
            newData.store_id = $('#preferred-store').val();

            // Password Stuff
            newData.id = $('#member_id').val();
            newData.oldPass = $('#current-password').val();
            newData.newPass = $('#new-password').val();
            newData.newPassConfirm = $('#new-password-confirm').val();

            // ------------------
            // Validation Section
            // ------------------
            var ok = true;
            var errorMessage = "<p>Errors:</p><ul>";
            var age = 18;

            var firstName = $('#firstName');
            if(firstName.val() == ""){
                errorMessage += "<li>Please enter your First Name.</li>";
                firstName.css({'borderColor': "#E34234"});
                ok = false;
            }

            var lastName = $('#lastName');
            if(lastName.val() == ""){
                errorMessage += "<li>Please enter your Last Name.</li>";
                lastName.css({'borderColor': "#E34234"});
                ok = false;
            }

            var year = $('#birthYear');
            var month = $('#birthMonth');
            var day = $('#birthDate');
            if((year.val() == "") || (month.val() == "") || (day.val() == "")){
                errorMessage += "<li>Please enter your Complete Birthday.</li>";
                year.css({'borderColor': "#E34234"});
                month.css({'borderColor': "#E34234"});
                day.css({'borderColor': "#E34234"});
                ok = false;
            }

            var birthdate = new Date(year.val(), month.val(), day.val(), 0, 0, 0, 0);
            if(account.getAge(birthdate) < age){
                errorMessage += "<li>You need to be at least 18 to continue.</li>";
                year.css({'borderColor': "#E34234"});
                month.css({'borderColor': "#E34234"});
                day.css({'borderColor': "#E34234"});
                ok = false;

            }

            var zip = $('#zip');
            if(zip.val() == ""){
                errorMessage += "<li>Please enter a valid Zip Code</li>";
                zip.css({'borderColor': "#E34234"});
                ok = false;
            }

            var mobilePhone = $('#mobilePhone');
            if(!(mobilePhone.val().length > 3 || mobilePhone.val().length == 0)){
                errorMessage += "<li>Please enter a valid phone number.</li>";
                mobilePhone.css({'borderColor': "#E34234"});
                ok = false;
            }



            if(newData.newPass != "" || newData.newPassConfirm != "" || newData.oldPass != ""){
                if(newData.newPass != newData.newPassConfirm){
                    ok = false;
                    errorMessage += '<li>Password confirmation does not match new password</li>';
                }
                if(newData.newPass.length < 5){
                    ok = false;
                    errorMessage += '<li>Password must contain at least 5 characters</li>';
                }

                if(ok){
                    $('.loading .message').text('One moment while we update your information...')
                    $('#loading_display').css("display","block");
                    account.submitPasswordUpdate(newData);
                }else{
                    $('#form-errors').css("display","block");
                    errorMessage += "</ul>";
                    $('#form-errors').html(errorMessage);
                        $('html, body').animate({
                            scrollTop: $("#content").offset().top
                        }, 500);
                }
            }else{
                if(ok){
                    $('.loading .message').text('One moment while we update your information...')
                    $('#loading_display').css("display","block");
                    account.submitUserData(newData)
                }else{
                    $('#form-errors').css("display","block");
                    errorMessage += "</ul>";
                    $('#form-errors').html(errorMessage);
                        $('html, body').animate({
                            scrollTop: $("#content").offset().top
                        }, 500);
                }
            }


        })
    },
    submitUserData : function(newData) {
        var request = "";
        $.each(newData, function(key, value){
            request += key + "=" + encodeURIComponent(value) + "&";
        });
            request = account.$requestUrl + "profile/save?" + request;
        $.ajax({
            url: request,
            dataType: "json",
            success: function(json){
                if (json.status) {self.location="/account/thank-you";} else {$('#loading_display').css("display","none");}
            }
        });


    },
    submitPasswordUpdate : function(newData) {
        $.ajax({
            url: "/account/reset",
            data: { "id": newData.id, "oldPass": newData.oldPass, "newPass": newData.newPass },
            success: function(response){

                if(response == 1){account.submitUserData(newData);}else{
                    $('#loading_display').css("display","none");
                    $('#form-errors').css("display","block");
                    $('#form-errors').text("Error: Please check your password and try again.");
                }

            },
            error: function(response){
                $('#loading_display').css("display","none");
                $('#form-errors').css("display","block");
                $('#form-errors').text(response);

            }
        })
    },
    getAge : function(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;}
        return age;
    }


};

var oroBlanco = {

    init : function() {

        var $hero = $('.blanco.hero .cover');

        oroBlanco.swiper();
        oroBlanco.animations();
        oroBlanco.events();

        this.formPanel = $(".blanco.form .page-panel");
        this.name = 'oro-blanco';

        $hero.addClass('animate');

        //IE <=9 select arrow fallback styling
        //firefox select arrow override is broken in current build - use fallback
        if ((BrowserDetect.browser == 'Explorer' && BrowserDetect.version <= 9) || (BrowserDetect.browser == 'Firefox')) {
            var $ffSelect = $('.blanco.form select');
            $ffSelect.css('background-image', 'none');
        }
    },

    events : function() {

        var arrowLeft = $('.controls.arrow-left'),
            arrowRight = $('.controls.arrow-right'),
            fieldInput = $('#request-form input'),
            fieldSelect = $('#request-form select'),
            arrows = $('#oro-blanco-arrow-left, #oro-blanco-arrow-right, #oro-blanco-arrow-down');

        $("#request-form").submit(function(e) {
            var postData = $(this).serializeArray();

            oroBlanco.processData(postData);

            return false;

            e.preventDefault(); //STOP default action
            e.unbind(); //unbind. to stop multiple form submit.
        });

        arrows.on({
            mouseenter: function(){$(this).find('.arrow').addClass('hover');},
            mouseleave: function(){$(this).find('.arrow').removeClass('hover');},
            click: function(e){
                e.preventDefault();

                switch(this.id) {
                    case 'oro-blanco-arrow-right':
                        oroSwiper.swipeNext();
                        break;
                    case 'oro-blanco-arrow-left':
                        oroSwiper.swipePrev();
                        break;
                    case 'oro-blanco-arrow-down':
                        oroBlanco.scrollToSection(oroBlanco.formPanel);
                        break;
                }

            }
        });

        fieldInput.on('keyup', function(){

            var $this = $(this);
            oroBlanco.clearError($this);

        });

        fieldSelect.on('change', function(){

            var $this = $(this);
            oroBlanco.clearError($this);

        });

    },

    processData : function(postData) {
        var formURL = '?ACT=48', //Prpl_oro_blanco module action url
            $spinner = $('.blanco .spinner');

        $.ajax({
            type: "POST",
            url: formURL,
            data: postData,
            beforeSend: function(xhr, options){

                var errors = false,
                    $submit = $('.blanco .row.submit');

                oroBlanco.clearError('all');

                //Validate fields
                $.each(postData, function(index, field) {

                    if (_.isEmpty(field.value)) {

                        if (field.name != 'phone' && field.name != 'state' && field.name != 'last-name') { //Phone is optional // 'last-name' is spam prevention

                            oroBlanco.error(field.name);
                            errors = true;

                        }
                    }

                    if (field.name == 'email' && !oroBlanco.validateEmail(field.value)) {

                        oroBlanco.error(field.name);
                        errors = true;

                    }

                });

                if (errors) { // stop submission process and display error fields
                    return false;
                }

                $submit.addClass('no-show');
                $spinner.removeClass('no-show');

            },
            success: function() {
                $spinner.addClass('no-show');
                oroBlanco.confirmation();
            }
        });

    },

    pagination : function(index) {

        var arrowLeft = $('.controls.arrow-left'),
            arrowRight = $('.controls.arrow-right');

        arrowRight.find('.arrow').removeClass('opate');
        arrowLeft.find('.arrow').removeClass('opate');

        if (index >= oroSwiper.slides.length - 1 ) {arrowRight.find('.arrow').addClass('opate');}

        if (index <= 0 ) {arrowLeft.find('.arrow').addClass('opate');}

    },

    confirmation : function() {

        var $form = $('.blanco.form');

        $form.addClass('success');

        oroBlanco.scrollToSection(oroBlanco.formPanel);

        oroBlanco.thankYouPage();

    },

    error : function(e) {
        var $input = (e == 'country' || e == 'state') ? $('#request-form select[name="' + e + '"]') : $('#request-form input[name="' + e + '"]'),
            $errorMessage = $('.blanco .error-message-wrapper');
        $input.addClass('error');
        $errorMessage.removeClass('no-show');
    },

    clearError : function(e) {
        var $field = (e == 'all') ? $('#request-form input, #request-form select') : $(e);
        $field.removeClass('error');
    },

    validateEmail : function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    thankYouPage : function() {

        $form = $('.blanco #request-form');

        $.ajax({
            url: "/special-product/thank-you#oro-blanco",
            success: function(response){

                $form.append(response);

                var $thankYou = $('.blanco.form .thank-you');

                setTimeout(function() {$thankYou.addClass('success');}, 700);

            }
        })


    },

    swiper : function() {

        //Swiper Init
        oroSwiper = $('.blanco.slider .swiper-container').swiper({
            mode:'horizontal',
            noSwiping: true,
            loop: false,
            calculateHeight:true,
            speed:1000,
            onSlideChangeEnd : function() {oroBlanco.pagination(oroSwiper.activeIndex);}
          });

        oroBlanco.pagination(oroSwiper.activeIndex);

    },

    animations : function() {
        $('.blanco .page-panel.animate, .blanco.slider .swiper-container').waypoint(function() {
            $(this).toggleClass('in');
            $(this).css("-webkit-transform","translate3d(0px, 0px, 0px)");
            $(this).css("-moz-transform","translate3d(0px, 0px, 0px)");
            $(this).css("-ms-transform","translate3d(0px, 0px, 0px)");
            $(this).css("-o-transform","translate3d(0px, 0px, 0px)");
            $(this).css("transform","translate3d(0px, 0px, 0px)");
        }, { offset: '75%', triggerOnce: true });
    },

    scrollToSection : function(section) {
        $('html, body').animate({
            scrollTop: section.offset().top-140
        }, 1000);
    }

};

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {return;}

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
    ]

};

var tracking = {
    init : function() {tracking.events();},

    events : function() {
        //Navigation
        $('#nav-list a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'top navigation', 'click', $name);
        });

        //Logo
        $('.header-sub-left a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'top navigation', 'click', $name);
        });

        //Toolbar
        $('#quick-links-list a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'top navigation', 'click', $name);
        });

        //Homepage
        $('#hero-cta .play-video-button').on('click', function() {
            ga('send', 'event', 'Video', 'click', 'Play');
        });

        $('#hero-cta .full-width-full-height').on('click', function() {
            ga('send', 'event', 'Hero', 'click', 'Question Mark');
        });

        $('#adventure .content a').on('click', function() {
            ga('send', 'event', 'homepage', 'click', 'Read more');
        });

        $('#heritage-cta a').on('click', function() {
            ga('send', 'event', 'homepage', 'click', 'Explore our heritage');
        });

        $('#process-cta a').on('click', function() {
            ga('send', 'event', 'homepage', 'click', 'Embrace our craftsmanship');
        });

        $('#perfect-match-cta a').on('click', function() {
            ga('send', 'event', 'homepage', 'click', 'Explore our cigars');
        });

        $('#accessories-cta a').on('click', function() {
            ga('send', 'event', 'homepage', 'click', 'Get the right tools');
        });

        //Footer
        $('#footer a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'bottom navigation', 'click', $name);
        });

        $('#legal a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'bottom navigation', 'click', $name);
        });

        $('#mc-embedded-subscribe').on('click', function() {
            ga('send', 'event', 'bottom navigation', 'click', 'Go');
        });

        //Beautiful Time
        $('#beautiful-time .story a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'top panel', 'click', $name);
        });

        $('#beautiful-time .buttons a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'CTA', 'click', $name);
        });

        //Filters
        $('.secondary-nav a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'Filter CTA', 'click', $name);
        });

        //Cigars
        $('#the-items a.all').on('click', function() {
            ga('send', 'event', 'CTA', 'click', 'Browse All Cigars');
        });

        $('body.line #filter-by-feed a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', $name + ' CTA', 'click', 'Explore Line');
        });

        $('#the-items a.item').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'Cigar', 'click', $name);
        });

        $('body.occasion #filter-by-feed a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'CTA', 'click', $name);
        });

        $('body.strength #filter-by-feed a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'CTA', 'click', $name);
        });

        $('body.aroma #filter-by-feed a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'CTA', 'click', $name);
        });

        //Accessories
        $('body.cigar-accessories #the-items a').on('click', function() {
            var $name = $(this).data('name'),
                $type = $(this).data('type');
            ga('send', 'event', $type, 'click', $name);
        });

        //Pipes
        $('body.pipes #the-items a').on('click', function() {
            var $name = $(this).data('name'),
                $type = $(this).data('type');
            ga('send', 'event', $type, 'click', $name);
        });

        //Events
        $('#all-events .sidebar a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'Event Categories', 'click', $name);
        });

        $( "#event-selector" ).change(function() {
            $name = $("#event-selector option:selected").data('name');
            ga('send', 'event', 'Event Categories', 'click', $name);
        });

        //Individual Pages
        $('#social-links .right a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'CTA', 'click', $name);
        });

        $('.cta-bar-mobile a.shortlist-mobile').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'CTA', 'click', $name);
        });

        $('#related .one a').on('click', function() {
            ga('send', 'event', 'You Might Like CTA', 'click', 'Left Item');
        });

        $('#related .two a').on('click', function() {
            ga('send', 'event', 'You Might Like CTA', 'click', 'Middle Item');
        });

        $('#related .three a').on('click', function() {
            ga('send', 'event', 'You Might Like CTA', 'click', 'Right Item');
        });


        //Product Social
        $('.button.facebook').on('click', function() {
            ga('send', 'event', 'Product Share CTA', 'click', 'Facebook');
        });

        $('.button.twitter').on('click', function() {
            ga('send', 'event', 'Product Share CTA', 'click', 'Twitter');
        });

        $('.button.pin').on('click', function() {
            ga('send', 'event', 'Product Share CTA', 'click', 'Pinterest');
        });

        $('.button.email').on('click', function() {
            ga('send', 'event', 'Product Share CTA', 'click', 'Email');
        });

        //Shortlist
        $('.send-shortlist a').on('click', function() {
            ga('send', 'event', 'Shortlist CTA', 'click', 'Send to Email');
        });

        $('#shortlistForm .submit input').on('click', function() {
            ga('send', 'event', 'Shortlist CTA', 'click', 'Submit');
        });

        $('#share-shortlist a').on('click', function() {
            var $name = $(this).data('name');
            ga('send', 'event', 'Shortlist CTA', 'click', $name);
        });

        //Oro Blanco
        $('.blanco .arow.right').on('click', function() {
            ga('send', 'event', 'Slider', 'Right', $name);
        });
        $('.blanco .arow.left').on('click', function() {
            ga('send', 'event', 'Slider', 'Left', $name);
        });

        //Shop/Find
        $('.js-trackProduct').on('click', function() {
            var action = $(this).attr('data-action'),
                label = $(this).attr('data-product');

            ga('send', 'event', 'Button Click', action, label);
        });
    }
};

/////////////////////////////////////////////////////////////////

// DOCUMENT REDAY //
$(document).ready(function(){

    $('.show-marker[data-entry-id=1514]').detach().insertAfter($('.Lounge'));


    //If device is not a touch device - hide "tap for more info"
    if (!Modernizr.touch) {$('.article-sub-header').hide();}

    $('#instagram-feed ul li').hover(function(){$(this).find('img').addClass('dim');}, function(){$(this).find('img').removeClass('dim');}
    );


    function close() {$body.removeClass('open').addClass('closed');}


    $('#mobile-nav').on('click', function(){
        if ($body.hasClass('closed')) {$body.removeClass('closed').addClass('open');}
        else {close();}
    });

    $('.page-wrapper, #header').on('click', function(){
        if( $body.hasClass('open') ){close();}
    });

    $('.js-more').on('click', function (e) {
        e.preventDefault();
        $($(this).attr('data-target')).slideToggle().toggleClass('open');

        if ($($(this).attr('data-target')).hasClass('open')) {$(this).text('close');} else {$(this).text('more');}
    });

    $('.hero-nic .btn-brown').on('click', function (e) {
        e.preventDefault();
        nic_overlay_show();
    })


    $('.js-overlay').each(function () {
        $(this).on('click', function(e) {
            e.preventDefault()
            esc_overlay_show(false);
        });
    });

    $('.js-overlay--yamasa').each(function () {
        $(this).on('click', function(e) {
            e.preventDefault()
            yamasa_overlay_show(false);
        });
    });

    if ($('body').hasClass('home')) {
        //xmas_overlay_show();
        if($.cookie('video_seen') != 'true') {
            //esc_overlay_show(true);
            //$.cookie('video_seen', 'true')
        }

        if($.cookie('xmas_seen') != 'true') {
            //xmas_overlay_show();
            //$.cookie('xmas_seen', 'true');
        }
    };

    /*cigar finder */
    $('.js-cigarfinder').on('click', function (e) {
        e.preventDefault();

        var value = $('.cigarfinder__select').val();

        if (value > 0) {
            $.ajax({
                url: '/cigars/finder/' + value,
                cache: false,
                success: function(result) {
                    $('.result').html(result);
                    $('.result').css('display', 'block');
                }
            })
        }
    });

    function nic_overlay_show () {
        var overlay = $('<div class="escurioOverlay"></div>').css({
            'background': 'rgba(0,0,0,0.9)',
            'position': 'fixed',
            'z-index': '9999',
            'top': '0',
            'right': '0',
            'left': '0',
            'bottom': '0',
            'display': 'none'
        }); 

        var close = $('<a href="#" class="overlay__close"><i class="icon icon-close_button-01"></i></a>').on('click', function (e) {
            
            $('.hero-nic--before').hide();
            $('.hero-nic--after').show();

            $('.hero-nic .btn-brown').off('click')

            $('.hero-nic .brown').on('click', function (e) {
                e.preventDefault();
                nic_overlay_show();
            });
            
            overlay.remove();
        }).appendTo(overlay);

        overlay.append($('#nicOverlay').html());

        var video = $('video', overlay).get(0);

        $('body').append(overlay);
        overlay.fadeIn();
        video.addEventListener('ended', function(e) {overlay.remove();}, false);
        video.play();

        function video_end () {
            $('.hero-nic--before').hide();
            $('.hero-nic--after').show();

            $('.hero-nic .btn-brown').off('click')

            $('.hero-nic .brown').on('click', function (e) {
                e.preventDefault();
                nic_overlay_show();
            });
            overlay.fadeOut();
            overlay.remove();
        }
    }

    function esc_overlay_show(link) {
        var overlay = $('<div class="escurioOverlay"></div>').css({
            'background': 'rgba(0,0,0,0.9)',
            'position': 'fixed',
            'z-index': '9999',
            'top': '0',
            'right': '0',
            'left': '0',
            'bottom': '0',
        });

        var close = $('<a href="#" class="overlay__close"><i class="icon icon-close_button-01"></i></a>').on('click', function (e) {overlay.remove();}).appendTo(overlay);

        if (link) {
            var link = '<a href="/cigars/escurio/" class="discover">Discover where escurio might take you <i class="icon icon-right-open-1"></i></a>';
        } else {
            var link = '';
        }

        var content = $(link + '<div class="iframeWrapper_wrapper"><div class="iframeWrapper"><iframe src="https://player.vimeo.com/video/131740111?autoplay=1&loop=1&title=0&byline=0&portrait=0"></iframe></div></div>').appendTo(overlay);

        $('body').append(overlay);
    }

    function yamasa_overlay_show() {
        var overlay = $('<div class="escurioOverlay"></div>').css({
            'background': 'rgba(0,0,0,0.9)',
            'position': 'fixed',
            'z-index': '9999',
            'top': '0',
            'right': '0',
            'left': '0',
            'bottom': '0',
        });

        var close = $('<a href="#" class="overlay__close"><i class="icon icon-close_button-01"></i></a>').on('click', function (e) {overlay.remove();}).appendTo(overlay);

        var content = $('<div class="iframeWrapper_wrapper"><div class="iframeWrapper"><iframe src="https://player.vimeo.com/video/173013902?autoplay=1&loop=1&title=0&byline=0&portrait=0"></iframe></div></div>').appendTo(overlay);

        $('body').append(overlay);
    }

    function xmas_overlay_show() {
        var overlay = $('<div class="xmasOverlay"></div>').css({
            'position': 'fixed',
            'z-index': '9999',
            'top': '0',
            'right': '0',
            'left': '0',
            'bottom': '0',
        });

        var close = $('<a href="#" class="overlay__close">Continue to davidoff.com</a><img src="/images/site/logo.png" alt="davidoff" class="logo"/>').on('click', function (e) {
            overlay.remove();
            $('body').css({
                'position': 'static'
            });
        }).appendTo(overlay);

        var content = '';

        content += '<h1 class="overlay__header">Holiday Season Gift Ideas</h1>';
        content += '<a href="/cigars/christmas" class="btn-gold">Learn More</a>';
        content += '<img src="/images/site/christmasOverlay_content.png" class="overlay__image" width="951" />'
        
        $(content).appendTo(overlay);
        $('body').append(overlay).css({
            'position': 'fixed'
        });
    }

    $('.js-cmsCarousel').each(function () {
        var carousel = $(this),
            timeout = carousel.attr('data-timeout') || 5000,
            itemCount = parseInt(carousel.attr('data-itemcount'), 10) || 3,
            autoplay = false,
            loop = true,
            animation = carousel.attr('data-animation') || false,
            nav = true,
            dots = true;

        if ($(this).attr('data-autoplay') === 'true') {
            autoplay = true;
        }

        if ($('.slide', this).length <= itemCount) {
            nav = false;
            loop = false;
        }

        if ($('.slide', this).length === 1) {
            nav = false;
            loop = false;
            dots = false;
        }

        $(this).owlCarousel({
            responsiveClass: true,
            loop: loop,
            navText: ['', ''],
            mouseDrag: false,
            touchDrag: true,
            nav: false,
            margin: 10,
            autoplay: autoplay,
            autoplayTimeout: timeout,
            autoplayHoverPause: autoplay,
            dots: dots, //needed for to.owl.carousel to work
            //dotsContainer: '.hero .dotContainer',
            animateOut: animation,
            slideBy: 'page',
            responsive: {
                0: {
                    items: 1,
                },
                786: {
                    items: itemCount,
                    dots: dots,
                },
                1160: {
                    items: itemCount,
                    dots: dots,
                    nav: false,
                },
                1250: {
                    items: itemCount,
                    dots: dots,
                    nav: nav,
                }
            },
            onInitialized: function () {
                var video = $('video', carousel);
                video.each(function () {$(this).get(0).play();});

                //if hero, clone dots and nav
                
                if (carousel.parents('.hero-cms').length > 0) {
                    var controls = $('.owl-nav', carousel).detach();

                    $('.cmsMediaWrapper', carousel).each(function () {
                        $(this).append(controls.clone(true, true));
                    });
                }
                
            }
        });
    });

    $('body').on('click', '.js-inlineExtVideo', function (e) {
        var link = $(this).attr('href'),
            link_element = $(this),
            iframe = $('<iframe src="' + link + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
            close = $('<a href="#" class="videoClose"><i class="icon-close-01"></i></a>');

        e.preventDefault();

        if ($(this).parents('.hero__image').length > 0) {$('body').addClass('st-heroVideo');}


        $(this).hide().after(iframe);

        close.on('click', function (e) {
            e.preventDefault();
            iframe.fadeOut().remove();
            link_element.show();
            $(this).remove();
            $('body').removeClass('st-heroVideo');
        });

        $(this).after(close);
    });

    var star = $('#star');

            $('.js-sparcle').each(function () {

                var sparcleElement = $(this);
                /*
                sparcleElement.on('click', function (e) {
                    var posX = $(this).position().left,
                        posY = $(this).position().top;
                    
                    var new_star = star.clone().css({'top': e.pageY - posY + 'px', 'left': e.pageX - posX + 'px'}).appendTo(sparcleElement);
                    
                    setTimeout(function () {new_star.remove();}, 2500);

                });
*/
                
                setInterval(function () {
                    var top = Math.floor((Math.random() * 100) + 1) + '%',
                        left = Math.floor((Math.random() * 100) + 1) + '%';

                    var new_star = star.clone().css({'top': top, 'left': left}).appendTo(sparcleElement);

                    setTimeout(function () {new_star.remove();}, 2000);

                }, 2500);
                
                
            });

});