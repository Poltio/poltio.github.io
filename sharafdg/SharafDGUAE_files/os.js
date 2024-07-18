var SDG_OS={get_single_banner:function(current_el){var post_data={"pt":current_el.data('page_type'),"au":current_el.data('ad_unit'),"cli_ubid":os_unique_user_id}
if(current_el.data('keywords')){post_data['f.keyword']=current_el.data('keywords')}
if(current_el.data('category')){var level=1;current_el.data('category').split(">").map(function(c){post_data['f.category_l'+level]=c.trim()
level++})}
defer_till_function("_osFetchBrandAds",100,post_data,productsResponse=>{var banner=productsResponse.ads[0]
if(banner){if(DEVICE=='Desktop'){if(typeof icl_lang!=="undefined"&&icl_lang==='ar'){var src=banner.elements.image_link_arabic
var url=banner.elements.destination_url_arabic}else{var src=banner.elements.image_link_english
var url=banner.elements.destination_url_english}}else{if(typeof icl_lang!=="undefined"&&icl_lang==='ar'){var src=banner.elements.mobile_image_arabic
var url=banner.elements.destination_url_arabic}else{var src=banner.elements.mobile_image_english
var url=banner.elements.destination_url_english}}
src=src.replace("prodonlinesalesai.blob.core.windows.net","assets.sdgcdn.com"),current_el.html('<a href="'+url+'"><img src="'+src+'" /></a>')
current_el.css("height","auto")
current_el.addClass("fetched")
current_el.attr("data-uclid",banner.uclid)
SDG_OS.checkInViewPort()}else{current_el.remove()
$(document).trigger('scroll')}},err=>{current_el.remove()
$(document).trigger('scroll')})},checkInViewPort:function(){$(".sdg_os_banner_ad").each(function(i,e){var el=$(e)
if(!el.data("impression")&&el.data("uclid")){if(SDG_OS.home_js().sdg_inViewport(e)){el.data("impression","1")
defer_till_function("_osAdImpression",100,{"uclids":[el.data("uclid")]})}}})},home_js:function(){return DEVICE=="Desktop"?sharaf:mobileSharafHome},checkProductInViewPort:function(e){$(".product-link.os").each(function(i,e){var el=$(e)
if(!el.data("impression")&&el.data("uclid")){if(SDG_OS.home_js().sdg_inViewport(e)){el.data("impression","1")
defer_till_function("_osAdImpression",100,{"uclids":[el.data("uclid")]})}}})},link_click:function(){$(".product-carousel,.product-recommend").off("click.os_product_link").on("click.os_product_link",".os.product-link",function(e){var uclid=$(this).closest(".slide").data("uclid")
_osAdClick({"uclids":[uclid]})})}}
function init_os_actions(){var os_checkInViewPort=DGP_Utils.throttle(SDG_OS.checkInViewPort,200)
$(document).off("scroll.os_checkInViewPort").on("scroll.os_checkInViewPort",os_checkInViewPort)
$(".banner-slider").off("click.os_banner_slider").on("click.os_banner_slider",".os-banner-ad a",function(){var uclid=$(this).closest(".os-banner-ad").data("uclid")
_osAdClick({"uclids":[uclid]})})
$("#page").off("click.sdg_os_banner_ad").on("click.sdg_os_banner_ad",".sdg_os_banner_ad a",function(){var uclid=$(this).closest(".sdg_os_banner_ad").data("uclid")
_osAdClick({"uclids":[uclid]})})
$(document).on('populateResult',function(e,content){var sdg_os_product_count=$(".product-link.os").length
var sdg_os_product_impression=0
var os_checkProductInViewPort_func=function(e){$(".product-link.os").each(function(i,e){var el=$(e)
if(!el.data("impression")&&el.data("uclid")){if(SDG_OS.home_js().sdg_inViewport(e)){el.data("impression","1")
defer_till_function("_osAdImpression",100,{"uclids":[el.data("uclid")]})
sdg_os_product_impression++;if(sdg_os_product_impression==sdg_os_product_count){$(document).off("scroll.os_checkProductInViewPort")}}}})}
var os_checkProductInViewPort=DGP_Utils.throttle(os_checkProductInViewPort_func,200)
setTimeout(function(){os_checkProductInViewPort_func()},0)
$(document).off("scroll.os_checkProductInViewPort").on("scroll.os_checkProductInViewPort",os_checkProductInViewPort)
$("#hits.product-items").off("click.os_product_link").on("click.os_product_link",".os.product-link",function(e){var uclid=$(this).data("uclid")
_osAdClick({"uclids":[uclid]})})})
SDG_OS.link_click()
$(".sdg_os_banner_ad_fetch").each(function(i,e){var current_el=$(e)
SDG_OS.get_single_banner(current_el)})
function os_lazy_fetch_func(e){$(".os_menu_wrap").not(".fetched").each(function(i,el){if(SDG_OS.home_js().sdg_lazy_ready(el)){$(el).addClass("fetched")
fetch_os_menu_component(el)}})}
var os_lazy_fetch=DGP_Utils.throttle(os_lazy_fetch_func,200)
os_lazy_fetch_func()
$(document).off("scroll.os_lazy_fetch").on("scroll.os_lazy_fetch",os_lazy_fetch)
function fetch_os_menu_component(el){if(typeof(os_adserver)!=='undefined'){var el=$(el)
var data_os_page_type=el.data("os-page-type")
var data_os_category=el.data("os-category")
var rand=Math.floor(Math.random()*10000000)+1;var url=os_adserver+'/bsda?client_id='+os_client_id+'&rn='+rand+'&pt='+data_os_page_type+"&cli_ubid="+(typeof os_unique_user_id!=="undefined"?os_unique_user_id:'')
$(".sdg_os_banner_ad",el).each(function(i,banner_ad){url+='&au[]='+$(banner_ad).data("os-ad-unit")})
if(data_os_category){var level=1;data_os_category.split(">").map(function(c){url+='&f.category_l'+level+'='+encodeURIComponent(c.trim())
level++})}
$.ajax({type:"GET",url:url,timeout:2000,success:function(response){if(response.ads&&response.ads.length>0){if(DEVICE=='Desktop'){if(typeof icl_lang!=="undefined"&&icl_lang==='ar'){var src="image_link_arabic"
var url="destination_url_arabic"}else{var src="image_link_english"
var url="destination_url_english"}}else{if(typeof icl_lang!=="undefined"&&icl_lang==='ar'){var src="mobile_image_arabic"
var url="destination_url_arabic"}else{var src="mobile_image_english"
var url="destination_url_english"}}
response.ads.map(function(ad){var ad_el=$("[data-os-ad-unit='"+ad.au+"']",el)
var promotion_id=""
var promotion_name=""
var creative_name=""
var creative_slot=""
if(ad.elements['promotion_id']){promotion_id=ad.elements['promotion_id']}
if(ad.elements['promotion_name']){promotion_name=ad.elements['promotion_name']}
if(ad.elements['creative_name']){creative_name=ad.elements['creative_name']}
if(ad.elements['creative_slot']){creative_slot=ad.elements['creative_slot']}
$("a",ad_el).attr("href",ad.elements[url])
$("a",ad_el).attr("data-promo_name",promotion_name)
$("a",ad_el).attr("data-promo_id",promotion_id)
$("a",ad_el).attr("data-creative_name",creative_name)
$("a",ad_el).attr("data-creative_slot",creative_slot)
if(typeof ENV!='undefined'&&ENV=='PROD'){var img_cdn=ad.elements[src].replace("prodonlinesalesai.blob.core.windows.net","assets.sdgcdn.com")}else{img_cdn=ad.elements[src]}
$("img",ad_el).on("load",function(){var img=$(this)
img.closest(".menu_template1_banner").addClass("done")})
$("img",ad_el).attr("src",img_cdn)
ad_el.attr("data-uclid",ad.uclid)
ad_el.next().remove()
ad_el.addClass("fetched")
SDG_OS.checkInViewPort()})}else{if(el.is(".no_default")){el.remove()
$(document).trigger('scroll')}}}})}}}
$(document).ready(function(){init_os_actions()})