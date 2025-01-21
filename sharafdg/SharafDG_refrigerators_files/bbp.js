$(document).ready(function () {

    $('body').on('change keyup', '.aps_card_number', function () {

        if($(this).val().length <16){
            return
        }

        var bin = $(this).length ? $(this).val().substr(0, 6) : "";
        var last4 = $(this).length ? $(this).val().substr(-4) : ""

        if (window.aps_bin === bin) {
            return
        }
        window.aps_bin = bin

        var binLength = bin.length;
        if (binLength >= 6 & binLength <= 16) {
            trigger_bin_check(bin, last4)
        }

    }).triggerHandler('change');

    // function check_terms_input(){
    //     if ($("#payment_method_aps_installment").prop("checked")) {
    //         $("#installment_term").prop("required",true)
    //     } else {
    //         $("#installment_term").prop("required",false)
    //     }
    // }

    // check_terms_input()

    // $('body').on('change', 'input[name=payment_method]:radio', function () {
    //     check_terms_input()
    // })

    $('body').on('change', 'input[name=payment_method]:radio', function () {
        window.aps_bin = undefined
        window.get_installment_bin = undefined
        $('.error-wrp').remove();
        if ($("#payment_method_aps_cc").prop("checked") || $("#payment_method_aps_installment").prop("checked")) {
            var selected_card = $("input[name='payment_method']:checked").parent().find(".aps_token_radio:checked")

            $( '#installment_plans .plans' ).html( '' );
            $( '#installment_plans .plan_info' ).html( '' );
            $( '#installment_plans .issuer_info' ).html( '' );
            $( '#aps_installment_confirmation_en' ).val( '' );
            $( '#aps_installment_confirmation_ar' ).val( '' );

            var selected_card = $("input[name='payment_method']:checked").parent().find(".aps_token_radio:checked")
            if (selected_card.is(".aps_token_card") || $("input[name='payment_method']:checked").parent().find(".aps_token_radio").length == 0 ) {
                $('#aps_instalment_form .aps_card_number').trigger("keyup")
            } else {
                if (selected_card.length) {
                    selected_card.closest(".aps-row").find(".aps_saved_card_cvv").trigger("keyup");
                }
            }

            if (selected_card.is(".aps_token_card") || $("input[name='payment_method']:checked").parent().find(".aps_token_radio").length == 0 ) {
                if ($("#payment_method_aps_cc").prop("checked")) {
                    var bin = $('.payment_method_aps_cc .aps_card_number').length ? $('.payment_method_aps_cc .aps_card_number').val().substr(0, 6) : "";
                    var last4 = $('.payment_method_aps_cc .aps_card_number').length ? $('.payment_method_aps_cc .aps_card_number').val().substr(-4) : ""
                } else {
                    var bin = $('.payment_method_aps_installment .aps_card_number').length ? $('.payment_method_aps_installment .aps_card_number').val().substr(0, 6) : "";
                    var last4 = $('.payment_method_aps_installment .aps_card_number').length ? $('.payment_method_aps_installment .aps_card_number').val().substr(-4) : "";
                    $('#aps_instalment_form .aps_card_number').trigger("keyup")

                }

                if(bin.length < 6){
                    bin = ''
                }
                //var binLength = bin.length;
                //if ((binLength >= 6 & binLength <= 16)) {
                    window.aps_bin = bin
                    trigger_bin_check(bin, last4)
                //}
            } else {
                saved_card_change()
            }
        }
    });

    $("#payment").on(
        'click',
        '.aps_token_radio',
        function (e) {

            $('.error-wrp').remove();
            window.aps_bin === undefined
          
            $(".payment_method_aps_installment .input-text,#installment_term").parent().parent().removeClass("touched")
            $( '.aps_plan_error' ).html( '' );

            $(".aps-col-sm-3").removeClass("field-error")
            if($(this).val()){
                var bin = $(this).data("masking-card") ? $(this).data("masking-card").toString() : '';
                var last4 = $(this).data("last4") ? $(this).data("last4").toString() : '';
            } else {
                var card_number = $(this).closest('.aps-row').find('.aps_card_number').val();
                if( card_number.length >= 16 ){
                    var bin = card_number.substring( 0,6 );
                    var last4 = card_number.substring( card_number.length - 4);
                } else {
                    var bin = ''
                    var last4 = ''
                }
            }
           

            if (window.aps_bin === bin) {
                return
            }
            window.aps_bin = bin

            trigger_bin_check(bin, last4)

        }
    );

    function saved_card_change() {
        var selected_card = $("input[name='payment_method']:checked").parent().find(".aps_token_radio:checked")
        if (selected_card.length) {
            var bin = selected_card.data("masking-card") ? selected_card.data("masking-card").toString() : '';
            var last4 = selected_card.data("last4") ? selected_card.data("last4").toString() : '';

            selected_card.closest(".aps-row").find(".aps_saved_card_cvv").trigger("keyup");

            if (window.aps_bin === bin) {
                return
            }
            window.aps_bin = bin

            trigger_bin_check(bin, last4)
        }
    }

    

    saved_card_change()

    function trigger_bin_check(bin, last4) {
        if (window.sdg_check_bin) {
            window.sdg_check_bin.abort()
        }

        // $('#cko-card-bin').val(bin);
        // $('#cko-card-last4').val(last4);
        window.sdg_check_bin = $.ajax({
            method: "POST",
            url: '/?wc-ajax=check_bin',
            data: { 'action': 'check_bin', 'bin': bin, 'last4': last4 }
        }).done(function (data) {

            data = JSON.parse(data);
            $(document.body).trigger('update_checkout', {
                update_shipping_method: false,
            });
        })
            .fail(function (data) {

                console.log(data)
            });
    }
});