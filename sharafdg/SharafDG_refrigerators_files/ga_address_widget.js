const SharafGA_AddressWidget = {
    widgetOpenFromHeader : function(){
        $('.site-header .dropdown.header-states.hd').on('click', function(){
            dataLayer.push({
                event: 'open_deliver_to_widget_from_header',
                client_platform: SharafDGGA4.getClientPlatform(),
                eventCallback: function(){dataLayer.push({client_platform: undefined})}
            });
        })
    },
    loginToViewAddress : function(){
        $('#deliveryToModal .login_to_view_address').on('click', function(){
            dataLayer.push({
                event: 'cta_click',
                client_platform: SharafDGGA4.getClientPlatform(),
                click_text: 'Sign in to view your addresses',
                eventCallback: function(){dataLayer.push({client_platform: undefined, click_text: undefined})}
            });
        })
    },
    applyCustomAddress : function(){
        $('#deliveryToModal .area-select-apply').on('click', function(){
            if($('#deliveryToModal .header-state-search .aa-Input').length > 0 &&  $('#deliveryToModal .header-state-search .aa-Input').val() != '' && $('#deliveryToModal .header-area-search .aa-Input').val() != ''){
                dataLayer.push({
                    event: 'select_region',
                    client_platform: SharafDGGA4.getClientPlatform(),
                    city: $(this).find('.btn').data('city'),
                    province: $(this).find('.btn').data('state'),
                    eventCallback: function(){dataLayer.push({client_platform: undefined, city: undefined, province: undefined})}
                });
            }
        })
    },
    addAddress : function(){
        if(typeof isUserLoggedIn != 'undefined' && isUserLoggedIn){
            $('#deliveryToModal .add_address_widget').on('click', function(){
                dataLayer.push({
                    event: 'add_delivery_address',
                    client_platform: SharafDGGA4.getClientPlatform(),
                    eventCallback: function(){dataLayer.push({client_platform: undefined})}
            });          
            })
        }
    },
    switchDeliveryAddress : function(){
        $('#deliveryToModal .ui-address__list').on('click', function(){
            dataLayer.push({
                event: 'switch_delivery_address',
                client_platform: SharafDGGA4.getClientPlatform(),
                city: typeof($(this).data('city')) == 'undefined' ? '' : $(this).data('city'), 
                province: typeof($(this).data('state')) == 'undefined' ? '' : $(this).data('state'),
                eventCallback: function(){dataLayer.push({client_platform: undefined,city: undefined, province: undefined})}
            });
      
        })
    },
    widgetOpenFromPDP(){
        $('.product-cart__wrapper .dropdown.header-states').on('click', function(){
            dataLayer.push({
                event: 'open_deliver_to_widget_from_pdp',
                client_platform: SharafDGGA4.getClientPlatform(),
                eventCallback: function(){dataLayer.push({client_platform: undefined})}
            });
        })
    },
    bindAll : function(){
        this.widgetOpenFromHeader();
        this.loginToViewAddress();
        this.applyCustomAddress();
        this.addAddress();
        this.switchDeliveryAddress();
        this.widgetOpenFromPDP();
    }
};

jQuery(document).ready(function() {
    SharafGA_AddressWidget.bindAll();
});

jQuery(document).on('pjax:complete', function() {
    SharafGA_AddressWidget.widgetOpenFromPDP();
});