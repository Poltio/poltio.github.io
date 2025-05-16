jQuery(document).ready( function($) {

    $('#page').on('click.addon', '.sdg_addon_container',function(){
        if(typeof $(this).siblings('.sdg_radio_addon') != 'undefined' && $(this).siblings('.sdg_radio_addon').length > 0) {

            $radio_element = $(this).siblings('.sdg_radio_addon')
            $this = $(this)

            if ($this.attr('opened')) {
                $radio_element.slideUp()
                $this.removeAttr('opened');
                $this.find('.addon_down_img').removeClass('hide')
                $this.find('.addon_up_img').addClass('hide')
            } else {
                $radio_element.slideDown()
                $this.attr('opened', 'opened');
                $this.find('.addon_down_img').addClass('hide')
                $this.find('.addon_up_img').removeClass('hide')
            }
            
        }
    })

})