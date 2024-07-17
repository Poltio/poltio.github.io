SharafDGGA4Impressions={get_main_impression_list:function(content){window.search_product_list=content.data;var urlParams=new URLSearchParams(window.location.search);var pageQuery=urlParams.get('page_number');if(pageQuery){var currentListCount=content.hitsPerPage*(pageQuery-1)}else{var currentListCount=0}
var impressions=content.data.map(function(i,index){var item={'item_name':i.post_title,'item_id':i.main_sku,'item_brand':SharafDGGA4.enhanced_ecommerce_combine_list(i.taxonomies?i.taxonomies.product_brand:[],"|"),'currency':GACurrency,'index':currentListCount+index+1,'item_list_name':"search",'price':i.price,'quantity':1,'seller_name':i.seller_name,'product_promo':i.promo_id,'product_source':i.is_paid?'onlinesales':appType,'express_delivery':i.is_express?"yes":"no"}
if(i.seller_name!='Sharaf DG'&&typeof(i.external_id)!=='undefined'&&i.external_id){item.listing_id=i.external_id;}
if(i.discount_val){item.discount=i.discount_val}
SharafDGGA4.categoryData(i.product_category,item)
return item});return impressions},track_impressions:function(items,list_name,item_list_id,module_name){console.log(items)
dataLayer.push({ecommerce:null});var ecommerce={items:SharafDGGA4.removeEmptyValues(items)}
if(list_name){ecommerce.item_list_name=list_name
ecommerce.item_list_id=list_name}
if(item_list_id){ecommerce.item_list_id=item_list_id}
var dataLayerObj={event:'view_item_list',client_platform:SharafDGGA4.getClientPlatform(),ecommerce:ecommerce}
if(module_name){dataLayerObj.module_name=module_name;}
dataLayer.push(dataLayerObj);SharafDGGA4.sendToNative(dataLayerObj)}};(function($){$(document).on("populateResult",function(e,content){var impressions=SharafDGGA4Impressions.get_main_impression_list(content)
var list_name=SharafDGGA4.getPageType()
SharafDGGA4Impressions.track_impressions(impressions,list_name,"search","search");});$(document).on("appendSearchResults",function(e,content){var impressions=SharafDGGA4Impressions.get_main_impression_list(content)
var list_name=SharafDGGA4.getPageType()
SharafDGGA4Impressions.track_impressions(impressions,list_name,"search","search");});})(jQuery)