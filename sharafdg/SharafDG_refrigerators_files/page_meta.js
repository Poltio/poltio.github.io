SharafDGPageMeta={
    getClientPlatform: function () {
        if (typeof (appType) !== 'undefined' && appType) {
          return appType;
        }
        return 'desktop';
      },
    setPageLevelMeta: function () {
        if(typeof(window.dataLayer) === 'undefined'){
            window.dataLayer = [];
        }
        var dataLayer = window.dataLayer || [];
        var page_category = [];
        var pageLevelMeta = {
        'language': typeof (icl_lang) !== 'undefined' && icl_lang == 'ar' ? 'AR' : 'EN',
        'Country': typeof (baseCountry) !== 'undefined' && baseCountry ? baseCountry : '',
        'login_status': typeof (isUserLoggedIn) !== 'undefined' && isUserLoggedIn ? "Logged In" : "Not Logged In",
        'page_type': this.getPageType(),
        'client_platform': SharafDGPageMeta.getClientPlatform(),
        }
        if (typeof (sdgCurrentUser) !== 'undefined' && typeof (sdgCurrentUser.id) !== 'undefined' && sdgCurrentUser.id) {
        pageLevelMeta.user_ID = sdgCurrentUser.id;
        if (typeof (dgMemberUser) !== 'undefined') {
            pageLevelMeta.dg_member = dgMemberUser ? 'yes' : 'no';
        }
        }
        if (typeof (catName) !== 'undefined' && catName) {
        page_category = catName.split(' > ').reverse();
        if (typeof (page_category[0]) !== 'undefined' && page_category[0]) {
            pageLevelMeta.page_category = page_category[0].trim();
            pageLevelMeta.page_category_leaf = page_category[0].trim();
        }
        if (typeof (page_category[1]) !== 'undefined' && page_category[1]) {
            pageLevelMeta.page_category2 = page_category[1].trim();
        }
        if (typeof (page_category[2]) !== 'undefined' && page_category[2]) {
            pageLevelMeta.page_category3 = page_category[2].trim();
        }
        if (typeof (page_category[3]) !== 'undefined' && page_category[3]) {
            pageLevelMeta.page_category4 = page_category[3].trim();
        }
        if (typeof (page_category[4]) !== 'undefined' && page_category[4]) {
            pageLevelMeta.page_category5 = page_category[4].trim();
        }
        }
        
        dataLayer.push(pageLevelMeta);
        if(SharafDGPageMeta.getClientPlatform() !== 'mobile' && SharafDGPageMeta.getClientPlatform() !== 'desktop'){
            pageLevelMeta.event = 'screen_view';
            SharafDGPageMeta.sendToNative(pageLevelMeta);
          }   
    },
    sendToNative: function(obj){
        var app_obj = {
          event: obj.event,
          params: SharafDGPageMeta.extend(obj)
        }
        if(app_obj.params.event)
          delete app_obj.params.event;
        if(app_obj.params.client_platform)
        delete app_obj.params.client_platform;
        if(app_obj.params['gtm.uniqueEventId'])
        delete app_obj.params['gtm.uniqueEventId'];
        window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.logAnalyticsEvent && window.webkit.messageHandlers.logAnalyticsEvent.postMessage(JSON.stringify(app_obj))
        typeof android != "undefined" && android.logAnalyticsEvent && android.logAnalyticsEvent(JSON.stringify(app_obj))
        if((window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.logAnalyticsEvent) || (typeof android != "undefined" && android.logAnalyticsEvent)){
            console.log("Pushing to Native from App");
            console.log(app_obj);
        }
      },
     extend: function(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    },
    getPageType: function () {
        var currentPath = location.pathname;
        if (currentPath.indexOf("/c/") >= 0) {
        return "Category page";
        } else if (currentPath.indexOf("/brand/") >= 0 || currentPath.indexOf("/brands/") >= 0) {
        return "Brand Page";
        } else if (currentPath.indexOf("/t/") >= 0) {
        return "Tag Page";
        } else if (currentPath.indexOf("/product/") >= 0) {
        return "Product Page";
        } else if ((currentPath === "/" || currentPath === "/ar/") && location.search.indexOf("?q=") >= 0) {
        return "Search Page";
        } else if ((currentPath === "/" || currentPath === "/ar/") && location.search.indexOf("post_type=product") >= 0) {
        return "Search Page";
        } else if ((currentPath === "/" || currentPath === "/ar/") && location.search.indexOf("?q=") < 0) {
        return "Home Page";
        } else if (typeof searchQuery !== "undefined") {
        return "Custom Search Page";
        } else if (currentPath.indexOf("/cart/") >= 0) {
        return "Cart Page";
        } else if (currentPath.indexOf("/checkout/") >= 0) {
        return "Checkout Page";
        } else if (currentPath.indexOf("/lost-password/") >= 0) {
        return "Forgot Password Page";
        } else if (currentPath.indexOf("show-reset-form=true") >= 0) {
        return "Reset Password Page";
        } else if (currentPath.indexOf("/recharge/") >= 0) {
        return "Recharge Page";
        } else if (currentPath.indexOf("/daily-deals/") >= 0) {
        return "Daily deals Page";
        } else if (currentPath.indexOf("/store/") >= 0) {
        return "Seller Page";
        } else if (pageTemplate == 'template-static.php') {
        return "Static Page";
        } else if (currentPath.indexOf("?action=register") >= 0 && typeof (isUserLoggedIn) === 'undefined') {
        return "Register Page";
        } else if (currentPath.indexOf("/my-account/") >= 0 && typeof (isUserLoggedIn) === 'undefined') {
        return "Login Page";
        } else if (currentPath.indexOf("/blog/") >= 0 && typeof(post_type) !== 'undefined' && post_type == 'blog') {
        return "Blog Detail Page";
        } else if (currentPath.indexOf("/blog/") >= 0) {
        return "Blog Listing Page";
        } else if (currentPath.indexOf("/my-account/") >= 0) {
        return "Account Page";
        } else {
        return "Landing Page";
        }
        
    },
}

SharafDGPageMeta.setPageLevelMeta();

(function ($) {
    jQuery(document).on('pjax:complete', function () {
        SharafDGPageMeta.setPageLevelMeta();     
    });
})(jQuery);