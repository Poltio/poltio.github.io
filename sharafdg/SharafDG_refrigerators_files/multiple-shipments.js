var multiple_shipments = {
    addSelectedShippingMethod : function() {
        const selections = $('.review-and-shipping .delivery-options input[type=radio]')
        if(typeof selections != 'undefined' && selections){

            const filtered_selections = selections.filter(function() {
                return $(this).prop('checked') === true;
            });

            filtered_selections.each(function(){
                const delivery_date_object = $(this).closest('.review-section').find('.delivery-date strong');
                const delivery_option_remaining_time_object = $(this).closest('.review-section').find('.delivery-date .fastest-method-timer');
                const delivery_option_remaining_time = $(this).data("remainingtime");

                if(typeof delivery_option_remaining_time != 'undefined' && delivery_option_remaining_time){
                    if(typeof delivery_option_remaining_time_object != "undefined"){
                        if(typeof current_locale_shipping != 'undefined' && current_locale_shipping == 'ar'){
                            delivery_option_remaining_time_object.html(delivery_option_remaining_time)
                        } else {
                            delivery_option_remaining_time_object.html(delivery_option_remaining_time)
                        }
                    }
                }

                if(typeof delivery_date_object != "undefined"){
                    if(typeof current_locale_shipping != 'undefined' && current_locale_shipping == 'ar'){
                        delivery_date_object.html("موعد التوصل " + $(this).next().text())
                    } else {
                        delivery_date_object.html("Arriving " + $(this).next().text())
                    }
                }
                
            })
        }
    }
    
}


jQuery(document).on(('updated_checkout') , function() {
    multiple_shipments.addSelectedShippingMethod();
    const delivery_inputs = $('.delivery-options input.delivery-option')
    if(typeof delivery_inputs != 'undefined'){
        delivery_inputs.on('change', function(){
            multiple_shipments.addSelectedShippingMethod();
        })
    }
});

jQuery(document).ready(function(){
    multiple_shipments.addSelectedShippingMethod();
});
