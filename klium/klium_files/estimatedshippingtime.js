/**
 * 2019 4webs
 *
 * DEVELOPED By 4webs.es Prestashop Platinum Partner
 *
 * @author    4webs
 * @copyright 4webs 2019
 * @license   4webs
 * @version 1.1.3
 * @category front_office_features
 */

$(document).ready(function () {

    //estcalc();
    $('.banner-cutoff').text(prestashop.modules.estimatedshippingtime.klium_cutoff);

});

function recalcajax() {
    $.ajax({
        type: 'POST',
        url: estimatedshippingtime_url,
        data: {
            action: 'recalcEst',
            ajax: true
        },
        dataType: 'json',
        success: function (json) {
            if (json.result) {
                $('#est-container-parent').html(json.fetch);
            } 
        },
        complete: function (json) {
            estcalc();
        }
    });
}

function estcalc() {
    var est_type = $('#est-container').data('mode');
    $('#est-container ul li.est_carrier_item').each(function (counter) {
        var est_fecha = $('#est_final_date' + counter).data('finaldate');
        estcountme('', est_fecha, counter, est_type);
        counter = counter + 1;
    });
}

function estcountme(countdown, datecount, counter, est_type) {
    var est_end = new Date(datecount);
    
    var est_second = 1000;
    var est_minute = est_second * 60;
    var est_hour = est_minute * 60;
    var est_day = est_hour * 24;
    var est_timer;

    function estshowRemaining() {
        var est_now = new Date();
        var est_distance = est_end - est_now;
        
        if (est_distance < 0) {

            clearInterval(est_timer);
            if (est_type == 'countdown') {
                $("#est_countdown" + counter).text("");
            }

            recalcajax();
        }

        
            var est_days = Math.floor(est_distance / est_day);
            var est_hours = Math.floor((est_distance % est_day) / est_hour);
            var est_minutes = Math.floor((est_distance % est_hour) / est_minute);
            var est_seconds = Math.floor((est_distance % est_minute) / est_second);
            
            
            
            if(est_hours == 0 && est_minutes == 0 && est_seconds == 0){
                clearInterval(est_timer);
                if (est_type == 'countdown') {
                    $("#est_countdown" + counter).text("");
                }
                recalcajax();
            }

        if (est_type == 'countdown') {
            $("#est_countdown" + counter).text(est_hours + 'h ' + est_minutes + 'm ' + est_seconds + 's');
        }
    }

    est_timer = setInterval(estshowRemaining, 1000);
}


