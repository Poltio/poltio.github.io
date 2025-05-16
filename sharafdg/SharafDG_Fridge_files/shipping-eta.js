var cookiestore = {
    s: document.cookie,
    type: 'cookie',
    set: function (name, value, expires, path, secure) {
      if (value !== undefined && typeof(value) === "object") var valueToUse = JSON.stringify(value);
      else var valueToUse = encodeURIComponent(value);
      document.cookie = name + "=" + valueToUse +
        (expires ? ("; expires=" + new Date(expires).toUTCString()) : '') +
        "; path=" + (path || '/') +
        (secure ? "; secure" : '');
    },
    get: function (name) {
      var cookies = this.getAllRawOrProcessed(false);
      if (cookies.hasOwnProperty(name)) return this.processValue(cookies[name]);
      else return undefined;
    },
    getAllRawOrProcessed: function(process) {
        //process - process value or return raw value
        var cookies = document.cookie.split('; '), s = {};
        if (cookies.length === 1 && cookies[0] === '') return s;
        for (var i = 0 ; i < cookies.length; i++) {
          var cookie = cookies[i].split('=');
          if (process) s[cookie[0]] = this.processValue(cookie[1]);
          else s[cookie[0]] = cookie[1];
        }
        return s;
    },
    processValue: function(value) {
      if (value.substring(0, 1) == "{") {
        try { return JSON.parse(value);}
        catch(e) {return value;}
      }
      if (value == "undefined") return undefined;
      return decodeURIComponent(value);
    }
  };
  

SDGShippingETA = {
    wpJSONPrefix: typeof(icl_lang) !== "undefined" && icl_lang == 'ar' ? "/ar" : (typeof(baseCountry) !== 'undefined' && baseCountry === 'SA') ? "/en" : '',
    var:{
        latCookie: "sdg_shipping_lat",
        lngCookie: "sdg_shipping_lng",
        cityCookie: "$userCity",
        promptCookie: 'sdg_location_prompt',
        promptCount: 0,
        Areaindex: "",
        geolocationPosition:'',
    },
    get: {
        geolocation: function() {
            if (typeof(navigator) !== 'undefined' && navigator.geolocation) {
                var geoposOptions = {
                    enableHighAccuracy: false,
                    timeout: 15 * 60 * 1000,
                    maximumAge: 5 * 60 * 1000,
                };
                var prevLatitude = cookiestore.get(SDGShippingETA.var.latCookie);
                var prevLongitude = cookiestore.get(SDGShippingETA.var.lngCookie);
                if (typeof(prevLatitude) === 'undefined' && typeof(prevLongitude) === 'undefined') {
                    navigator.geolocation.getCurrentPosition(function(e) {
                        $('.location-error').addClass('d-none');
                        var latitude = e.coords.latitude;
                        var longitude = e.coords.longitude;

                    

                        if (typeof(prevLatitude) === 'undefined' && typeof(prevLongitude) === 'undefined') {
                            SDGShippingETA.var.geolocationPosition = e.coords,
                            SDGShippingETA.requestArea()
                        }

                        
                        if (typeof(prevLatitude) !== 'undefined' && typeof(prevLongitude) !== 'undefined') {
                            var toleranceDistance = 1; 
                            var calculatedDistance = SDGShippingETA.calculateDistance(prevLatitude, prevLongitude, latitude, longitude)
                            if(calculatedDistance > toleranceDistance){
                                SDGShippingETA.var.geolocationPosition = e.coords,
                                SDGShippingETA.requestArea()
                            }    
                        }
                        
                    }, function(error) {
                        $('.location-error').removeClass('d-none');
                        console.error(`Error getting location: ${error.message}`);
                    }, geoposOptions);
                } else {
                    $('.js-my-location-btn').removeClass('d-none');
                }
            } else {
                $('.location-error').removeClass('d-none');
                console.log("Geolocation is not supported by this browser.");
            }
            
        },
        NearLocationByLatLng: function(LatLng){
            SDGShippingETA.var.Areaindex.search('', {
                aroundLatLng: LatLng,
                filters:
                  "country_code:" +
                  baseCountry.toLowerCase() +
                  " AND active:true",    
            },function searchDone(err, content) {
                console.log(err);
                if(content.hits &&  content.hits[0]){
                    if(typeof(sdg_shipping_eta_config.is_city_enable) !== 'undefined' && sdg_shipping_eta_config.is_city_enable){
                        var data= {
                            state_code: content.hits[0].state_code,
                            city_code: content.hits[0].city_code
                        }
                    }
                    if(typeof(sdg_shipping_eta_config.is_area_enable) !== 'undefined' && sdg_shipping_eta_config.is_area_enable){
                        var data= {
                            state_code: content.hits[0].state_code,
                            city_code: content.hits[0].code
                        }
                    }
                    SDGShippingETA.set.cities(data);
                }
            });
        }  
    },
    set:{
        cities: function(data){
            $.ajax({
                url: SDGShippingETA.wpJSONPrefix + "/wp-json/sdg/api/v1/shipping_eta/selected_city",
                type: "POST",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-WP-Nonce", ms_script_nonce.nonce);
                },
                data:data,
                error: function (jqXHR, textStatus, errorThrown) {
                    if (typeof(jqXHR.responseJSON) !== 'undefined' && jqXHR.responseJSON && typeof(jqXHR.responseJSON.data) !== 'undefined' && typeof(jqXHR.responseJSON.message) !== 'undefined' && jqXHR.responseJSON.message) {
                        $('#deliveryToModal .modal-body .alert').remove();
                        $('#deliveryToModal .modal-body').prepend(`
                            <div class="alert alert-primary alert-dismissible fade show mt-0 mb-3" role="alert">
                                ${jqXHR.responseJSON.message}
                            </div>
                        `);
                    }
                    if (typeof(jqXHR.responseJSON) !== 'undefined' && jqXHR.responseJSON && typeof(jqXHR.responseJSON.data) !== 'undefined' && typeof(jqXHR.responseJSON.data.message) !== 'undefined' && jqXHR.responseJSON.data.message) {
                        $('#deliveryToModal .modal-body .alert').remove();
                        $('#deliveryToModal .modal-body').prepend(`
                            <div class="alert alert-primary alert-dismissible fade show mt-0 mb-3" role="alert">
                                ${jqXHR.responseJSON.data.message}
                            </div>
                        `);
                    }
                   
                    $('#deliveryToModal .area-select-apply .btn').removeClass("loading");
                    return;
                   // location.reload();
                },
                success: function (result) {
                    $('.modal-body .alert-primary').remove();
                    location.reload();
                },
            });
        },
    },
    bindAlgoliaIndex: function(){
        var algoliaAreaClient = algoliasearch(
            sdg_shipping_eta_config.algolia.appKey,
            sdg_shipping_eta_config.algolia.key
        );
       
        SDGShippingETA.var.Areaindex = algoliaAreaClient.initIndex(
            sdg_shipping_eta_config.algolia.index
        );
    },
    calculateDistance: function(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = (lat2 - lat1) * Math.PI / 180; // Convert degrees to radians
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        return distance;
    },
    requestArea: function() {
        var d = new Date(Date.now());
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        cookiestore.set(SDGShippingETA.var.latCookie, SDGShippingETA.var.geolocationPosition.latitude);
        cookiestore.set(SDGShippingETA.var.lngCookie, SDGShippingETA.var.geolocationPosition.longitude);
        var LatLng = SDGShippingETA.var.geolocationPosition.latitude + ',' + SDGShippingETA.var.geolocationPosition.longitude;
        SDGShippingETA.get.NearLocationByLatLng(LatLng);
    },
    bindAddressMore(){
        $('.address-more').click(function(){
            $(this).addClass('hide');
            $(".ui-address__list.hide").addClass("show");
            $(".ui-address__list").removeClass('hide');
        });
    },
    bindLocationUpdate(){
        if(DEVICE=='Desktop'){
            $('#deliveryToModal').on('hidden.bs.modal', function (e) {
                if($("#deliveryToModal .ui-address__list.selected").length == 0 && $('#deliveryToModal .modal-body .error-box').length !== 0){
                    $(".area-select-apply .btn").attr( 'data-city',$("#deliveryToModal").attr("data-city-code"));
                    $(".area-select-apply .btn").attr( 'data-state',$("#deliveryToModal").attr("data-state-code"));
                }
                $('#deliveryToModal .modal-body .error-box').remove();
            });
        }
        $('.area-select-apply .btn').on('click', function(){
            $(this).addClass("loading");
            if( !$('.header-state-search input').val() || !$('.header-area-search input').val()){
                $('.delivery_to_city--error').removeClass('d-none');
                $(this).removeClass("loading");
            }
            if($(this).attr('data-state') && $(this).attr('data-city')){
                var data= {
                    state_code: $(this).attr('data-state'),
                    city_code: $(this).attr('data-city'),
                }
                $(this).find('.spinner-border').removeClass('d-block');
                $('.delivery_to_city--error').addClass('d-none');
                $('.ui-address__list').removeClass('selected');
                SDGShippingETA.set.cities(data);
            } else {
                $('.delivery_to_city--error').removeClass('d-none');
                $(this).removeClass("loading");
            }
        });
    },
    bindMobileEvent: function(){
        if(DEVICE=='Mobile'){
            $(".delivery-location").click(function(){
                SDGShippingETA.bindWidgetInitialBehaviour();
                $("#deliveryToModal").css({ display: "block" }).addClass("show");
                $('.address-more').removeClass("hide");
                $(".ui-address__list.show").addClass("hide").removeClass("show");
            });
        }
        $("#deliveryToModal .close").click(function(){
           // $("#deliveryToModal").click()
            $('#deliveryToModal .modal-body .error-box').remove();
            $("#deliveryToModal").css({ display: "none" }).removeClass("show");
          
        });
    },
    init: function(){
        SDGShippingETA.onLoad();
        SDGShippingETA.bindMobileEvent();
        jQuery(document).on('pjax:complete', function () {
            SDGShippingETA.bindMobileEvent();
        });
        setTimeout(function() {
            $("body").on("click.delivery","#deliveryToModal",function(e){
                if(!$(".header-state-search")[0].contains(e.target)){ 
                    header_state_search.setIsOpen(false);
                    }
                    })
           $("body").on("click.delivery","#deliveryToModal",function(e){
                if(!$(".header-area-search")[0].contains(e.target)){ 
                    header_area_search.setIsOpen(false); 
                   }
                })
        },100);
    },
    bindAddressChange: function(){
        $('.ui-address__list').on('click', function(){
            var data= {
                state_code: $(this).attr('data-state'),
                city_code: $(this).attr('data-city'),
                address_index: $(this).attr('data-key')
            }
            $('.ui-address__list').removeClass('selected');
            $(this).addClass('selected');
            SDGShippingETA.set.cities(data);
        })
    },
    bindClearCookies: function(){
        var expirationDate = new Date(); // Current date and time
        expirationDate.setFullYear(expirationDate.getFullYear() - 1);
        cookiestore.set(SDGShippingETA.var.latCookie, SDGShippingETA.var.geolocationPosition.latitude,expirationDate);
        cookiestore.set(SDGShippingETA.var.lngCookie, SDGShippingETA.var.geolocationPosition.longitude,expirationDate);
    },
    bindWidgetInitialBehaviour: function(){
        if($("#deliveryToModal .ui-address__list.selected").length == 0 ){
            if(typeof(header_area_search) !== 'undefined' && typeof(header_area_search.setQuery) !== 'undefined'){
                header_state_search.setQuery( $("#deliveryToModal").attr("data-state-name"));
                header_area_search.setQuery($("#deliveryToModal").attr("data-city-name"));
            }
            $(".header-state-search input").val( $("#deliveryToModal").attr("data-state-name"));
            $(".header-area-search input").val( $("#deliveryToModal").attr("data-city-name"));
            $(".area-select-apply .btn").attr( 'data-city',$("#deliveryToModal").attr("data-city-code"));
            $(".area-select-apply .btn").attr( 'data-state',$("#deliveryToModal").attr("data-state-code"));
        }
        if($("#deliveryToModal").attr("data-state-name") && $("#deliveryToModal").attr("data-state-name") != $(".header-state-search input").val() && $("#deliveryToModal").attr("data-city-name") && $("#deliveryToModal").attr("data-city-name") != $(".header-state-search input").val()){
            $(".header-state-search input").val('');
            if(typeof(header_area_search) !== 'undefined' && typeof(header_area_search.setQuery) !== 'undefined'){
                header_area_search.setQuery("");
                header_area_search.setIsOpen(false);
            }
            if(typeof(header_state_search) !== 'undefined' && typeof(header_state_search.setQuery) !== 'undefined'){
                header_state_search.setQuery("");
                header_state_search.setIsOpen(false)
            }
            $(".header-area-search input").val('');
        }
        $('.address-more').removeClass("hide");
        $(".ui-address__list.show").addClass("hide").removeClass("show");
        $('.delivery_to_city--error').addClass('d-none');
    },
    bindDeliveryWidgetModal: function(){
        $('#deliveryToModal').on('show.bs.modal', function (e) {
            SDGShippingETA.bindWidgetInitialBehaviour();
        });
    },
    getAvailableShippingMethods: function(){
        $.ajax({
            url: SDGShippingETA.wpJSONPrefix + "/wp-json/sdg/api/v1/shipping/spec-order",
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-WP-Nonce", ms_script_nonce.nonce);
            },
            error: function (e) {
                console.log(e);
            },
            success: function (result) {
                console.log(result)
            },
        });
    },

    getZones: function(){
        if(!isUserLoggedIn){
            $.ajax({
                url: SDGShippingETA.wpJSONPrefix + "/wp-json/sdg/api/v1/shipping_eta/getzone",
                type: "GET",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-WP-Nonce", ms_script_nonce.nonce);
                },
                error: function (e) {
                    console.log(e);
                },
                success: function (result) {
                    console.log(result);
                    $('.delivered_location').html(result['state_name'] + ', ' + result['city_name']);
                },
            });
        }
        
    },
    onLoad: function() {
        if(sdg_shipping_eta_config.isAllowGeoLocation) {
            // Check if permission is already granted before requesting
            if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
                navigator.permissions.query({ name: 'geolocation' }).then(function(permissionStatus){
                    permissionStatus.onchange = function() {
                        if (permissionStatus.state === 'denied') {
                           // $('.js-my-location-btn').addClass('d-none');
                        }
                      }
                   
                    if (permissionStatus.state === 'granted') {
                        // Permission already granted, request location
                        
                        SDGShippingETA.get.geolocation();
                        SDGShippingETA.bindAlgoliaIndex();
                       // $('.js-my-location-btn').addClass('d-none');
                    } else if (permissionStatus.state === 'prompt') {
                        // Permission already granted, request location
                        SDGShippingETA.get.geolocation();
                        SDGShippingETA.bindAlgoliaIndex();
                    }  else if (permissionStatus.state === 'denied') {
                     //   $('.js-my-location-btn').removeClass('d-none');
                    } else {
                        $('.js-my-location-btn').addClass('d-none');
                        // Permission not granted, show button to request location
                    }
                });    
            } else {
                // Browser does not support navigator.permissions, request location directly
               // $('.js-my-location-btn').removeClass('d-none');
                 
            }
            
        } else {
            SDGShippingETA.bindClearCookies();
            $('.js-my-location-btn').addClass('d-none');
        }
        SDGShippingETA.bindAddressMore();
        SDGShippingETA.bindAddressChange();
        SDGShippingETA.bindLocationUpdate();
        SDGShippingETA.bindDeliveryWidgetModal();
        $('.js-my-location-btn').on('click', function(e){
            e.preventDefault();
            SDGShippingETA.bindClearCookies();
            // Request location when button is clicked
            SDGShippingETA.get.geolocation();
            SDGShippingETA.bindAlgoliaIndex();
          
        });
    },
};

jQuery(document).ready(function() {
    SDGShippingETA.init();
    SDGShippingETA.getZones();
});

$(window).bind('beforeunload', function(){
    $("#deliveryToModal .close").trigger("click");
});

 