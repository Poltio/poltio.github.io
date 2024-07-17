var SharafEPP={init_epp_actions:function(){this.EppModal()
this.EPPPlanClick()
this.mobileEPP()},mobileEPP:function(){$("#page").on("click",".epp-tooltip-wrap",function(){$(".epp-canvas .offer-collapse__content").addClass("active")})
$("#page").on("click",".epp-canvas .btn-close",function(){$(".epp-canvas .offer-collapse__content").removeClass("active")})},bank_click:function(){$(".bank-list li").off("click.bank-list").on("click.bank-list",function(e){$(".bank .bank-block").hide()
$(".bank-block."+$(this).attr("data-bank")).show()
$(".bank-list li").removeClass("active")
$(this).addClass("active")
if(typeof enable_ga4!='undefined'&&typeof SharafDGGA4!='undefined'){var bank_name=$(this).attr("data-label")
var dataLayerObj={event:'easy_payment_plan_view',client_platform:SharafDGGA4.getClientPlatform(),bank_name:bank_name,eventCallback:function(){dataLayer.push({client_platform:undefined,bank_name:undefined,product_name:undefined,product_sku:undefined});},}
if(typeof sdg_current_product!='undefined'){dataLayerObj.product_name=sdg_current_product.item_name
dataLayerObj.product_sku=sdg_current_product.item_id}
dataLayer.push(dataLayerObj);SharafDGGA4.sendToNative(dataLayerObj)}})
$(".bank-list li").first().click()},get_epp_modal:function(){$.ajax({type:'POST',data:{},url:"/?wc-ajax=epp_modal",success:function(res){$("#EppModal").addClass("loaded").find(".modal-body").html(res)
SharafEPP.bank_click()}})},EppModal:function(){if($("#EppModal").length>0){if(DEVICE==="Desktop"){SharafEPP.eppModal=new bootstrap.Modal("#EppModal",{});$("#page").off("click.epp").on("click.epp",".show-epp",function(){SharafEPP.eppModal.show($(this));if(typeof enable_ga4!='undefined'&&typeof SharafDGGA4!='undefined'){var dataLayerObj={event:'easy_payment_plan_click',client_platform:SharafDGGA4.getClientPlatform(),eventCallback:function(){dataLayer.push({client_platform:undefined,bank_name:undefined,product_name:undefined,product_sku:undefined});},}
if(typeof sdg_current_product!='undefined'){dataLayerObj.product_name=sdg_current_product.item_name
dataLayerObj.product_sku=sdg_current_product.item_id}
dataLayer.push(dataLayerObj);}
if(!$("#EppModal").is(".loaded")){SharafEPP.get_epp_modal()}
SharafEPP.bank_click()});$("#EppModal").on("click",".close",function(){SharafEPP.eppModal.hide();});}else{$("#content").off("click.epp").on("click.epp",".show-epp",function(event){if(!$("#EppModal").is(".loaded")){SharafEPP.get_epp_modal()}
$("body").css("overflow","hidden");$("#EppModal").css({display:"block"}).addClass("show");if(typeof enable_ga4!='undefined'&&typeof SharafDGGA4!='undefined'){var dataLayerObj={event:'easy_payment_plan_click',client_platform:SharafDGGA4.getClientPlatform(),eventCallback:function(){dataLayer.push({client_platform:undefined,bank_name:undefined,product_name:undefined,product_sku:undefined});},}
if(typeof sdg_current_product!='undefined'){dataLayerObj.product_name=sdg_current_product.item_name
dataLayerObj.product_sku=sdg_current_product.item_id}
dataLayer.push(dataLayerObj);SharafDGGA4.sendToNative(dataLayerObj)}
SharafEPP.bank_click()});$("#EppModal").on("click",".close",function(){$("body").css("overflow","");$("#EppModal").css({display:"none"}).removeClass("show");});}}},EPPSlider:function(){if(DEVICE==="Desktop"){var prevArrow='<span class="sh-arrow left"><svg class="icon icon-leftarrow"><use xlink:href="#LeftArrow"></use></svg></span>';var nextArrow='<span class="sh-arrow right"><svg class="icon icon-rightarrow"><use xlink:href="#RightArrow"></use></svg></span>';if(rtl){var nextArrow='<span class="sh-arrow left"><svg class="icon icon-leftarrow"><use xlink:href="#LeftArrow"></use></svg></span>';var prevArrow='<span class="sh-arrow right"><svg class="icon icon-rightarrow"><use xlink:href="#RightArrow"></use></svg></span>';}
var slider=$("#epp-plans-wrap")
if(slider.hasClass("slick-initialized")){slider.slick("destroy")}
slider.slick({infinite:false,slidesToShow:3,slidesToScroll:1,rtl:rtl,adaptiveHeight:false,nextArrow:nextArrow,prevArrow:prevArrow,})}},EPPPlanClick:function(){$('body').on('change','[name="epp-plan"]',function(){var fee=$(this).data("fee")
var term=$(this).data("term")
var per=$(this).data("per")
if(per){$(".epp-text .p-month").text(per)
$(".epp-text .n-month").text(term)
$(".epp-text .n-currency").text(sdgCurrency)
$(".epp-text .e-fee").text(fee)
$(".epp-text").show()}else{$(".epp-text").hide()}})}}
$(document).ready(function(){SharafEPP.init_epp_actions()})