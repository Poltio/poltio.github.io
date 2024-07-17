(function($){function getParsedQueryparams(queryString){var rand=Math.floor(Math.random()*1000000000);let re=/(.*)\[([^\]]*)=([^\[]*)\](.*)/;var completed=false;while(!completed){let replaced=queryString.replace(re,"$1[$2"+rand+"$3]$4");if(queryString.length==replaced.length){completed=true;}
queryString=replaced;}
var vars={};if(typeof cat_name!=="undefined"&&cat_name){var cat_name_split=cat_name.split(":")
vars[cat_name_split[0]]=cat_name_split[1].replaceAll('"','')}
if(typeof brand_name!=="undefined"&&brand_name){var brand_name_split=brand_name.split(":")
vars["dFR[taxonomies.attr.Brand][0]"]=brand_name_split[1].replaceAll('"','')}
if(typeof tag_name!=="undefined"&&tag_name){var tag_name_split=tag_name.split(":")
vars["dFR[tags.title]"]=tag_name_split[1].replaceAll('"','')}
if(typeof sellerCode!=="undefined"&&sellerCode){vars["seller_code"]=sellerCode}
var parts=queryString.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[decodeURIComponent(key.replace(rand,"="))]=decodeURIComponent(value);});return vars;}
function buildAlgoliaFilters(filtersArray){var filters=[];var foundAttrs={};var categories={};var brand={};var tag={};Object.keys(filtersArray).map(function(key){if(key.indexOf("[taxonomies.product_cat]")!==-1){categories[filtersArray[key].replaceAll('&amp;','&')]=true;}else if(key.indexOf("taxonomies.taxonomies_hierarchical")!==-1){var cats=filtersArray[key].split(">");cats.map(function(cat){categories[cat.trim().replaceAll('&amp;','&')]=true;});}else if(key.indexOf("[taxonomies.attr.")!==-1){var taxonomyAttr=key.match(/\[taxonomies\.attr\.([^\]]+)\]/);if(taxonomyAttr[1]){if(foundAttrs[taxonomyAttr[1]]){foundAttrs[taxonomyAttr[1]]=foundAttrs[taxonomyAttr[1]]+
" OR "+
taxonomyAttr[1]+
":'"+
filtersArray[key]+
"'";}else{foundAttrs[taxonomyAttr[1]]=taxonomyAttr[1]+":'"+filtersArray[key]+"'";}}}else if(key.indexOf("[taxonomies_ar.attr.")!==-1){var taxonomyAttr=key.match(/\[taxonomies_ar\.attr\.([^\]]+)\]/);if(taxonomyAttr[1]){var val=filtersArray[key];try{val=JSON.parse(val);val=Object.keys(val)[0];if(foundAttrs[taxonomyAttr[1]]){foundAttrs[taxonomyAttr[1]]=foundAttrs[taxonomyAttr[1]]+
" OR "+
taxonomyAttr[1]+
":'"+
val+
"'";}else{foundAttrs[taxonomyAttr[1]]=taxonomyAttr[1]+":'"+val+"'";}}catch(e){}}}else if(key.indexOf("[tags.title]")!==-1){if(foundAttrs.tag){foundAttrs.tag=foundAttrs.tag+" OR tag:'"+filtersArray[key]+"'";}else{foundAttrs.tag="tag:'"+filtersArray[key]+"'";}}else if(key.indexOf("[price]")!==-1){if(foundAttrs.price){if(key.indexOf("[price][<=]")!=-1){foundAttrs.price.lessThan=filtersArray[key];}else{foundAttrs.price.greaterThan=filtersArray[key];}}else{if(key.indexOf("[price][<=]")!=-1){foundAttrs.price={lessThan:filtersArray[key]};}else{foundAttrs.price={greaterThan:filtersArray[key]};}}}else if(key.indexOf("[rating_reviews.rating]")!==-1){if(foundAttrs.rating){if(key.indexOf("[rating_reviews.rating][<=]")!=-1){foundAttrs.rating.lessThan=filtersArray[key];}else{foundAttrs.rating.greaterThan=filtersArray[key];}}else{if(key.indexOf("[rating_reviews.rating][<=]")!=-1){foundAttrs.rating={lessThan:filtersArray[key]};}else{foundAttrs.rating={greaterThan:filtersArray[key]};}}}
else if(key.indexOf("seller_code")!==-1){foundAttrs.seller_code="seller:'"+filtersArray[key]+"'";}
else{}});if(foundAttrs.price){if(foundAttrs.price.lessThan&&foundAttrs.price.greaterThan){foundAttrs.price="price:"+
parseInt(foundAttrs.price.greaterThan)+
" TO "+
parseInt(foundAttrs.price.lessThan);}else{delete foundAttrs.price;}}
if(foundAttrs.rating){if(foundAttrs.rating.lessThan&&foundAttrs.rating.greaterThan){foundAttrs.rating="rating:"+
parseInt(foundAttrs.rating.greaterThan)+
" TO "+
parseInt(foundAttrs.rating.lessThan);}else{delete foundAttrs.rating;}}
if(Object.keys(categories).length>0){var catString="";Object.keys(categories).map(function(cat){catString+="category:'"+cat+"' OR ";});catString=catString.substr(0,catString.length-4);filters.push(catString);}
Object.keys(foundAttrs).map(function(attr){filters.push(foundAttrs[attr]);});return filters;}
function trigger_filter_click(isViewEvent){var derived_algolia_index_name=get_algolia_index_name()
if(typeof algoliaUserToken!=="undefined"&&derived_algolia_index_name){setTimeout(function(){var filters=buildAlgoliaFilters(getParsedQueryparams(window.location.href));if(filters.length===0){return}
var eventType="clickedFilters"
var eventName="filter_click"
if(isViewEvent===true){eventType="viewedFilters"
eventName="archive_page_view"}
aa(eventType,{userToken:algoliaUserToken,index:derived_algolia_index_name,eventName:eventName,filters:filters,});try{if(DEVICE==='Desktop'){Sharaf.Utility.setWithExpiry("storedFilters",filters,7*24*60*60*1000)}else{SharafUtility.setWithExpiry("storedFilters",filters,7*24*60*60*1000)}}catch(e){}},200);}}
function algolia_filter_tracking_mobile_v2(){$("#facets").on('change',function(e){trigger_filter_click(false);});$("#facets").on("click",'[data-attribute]',function(e){trigger_filter_click(false);});}
function algolia_filter_tracking_mobile(){$("#facets .filter-list input").change(function(e){trigger_filter_click(false);});$(".filter-list [data-attribute]").click(function(e){trigger_filter_click(false);});}
function algolia_filter_tracking_desktop(){$(".filter-type .slider").each(function(i,e){e.noUiSlider.on("change",function(e){trigger_filter_click(false);});});$("#facets .star-facet").click(function(e){trigger_filter_click(false);});$("#facets .filter-type .facet input").change(function(e){trigger_filter_click(false);});$("#facets .filter-type a[data-attribute]").click(function(e){trigger_filter_click(false);});}
$(document).on("algoliaUserTokenSet",function(){if(jQuery.isReady){if(typeof is_taxonamy_page!=="undefined"||typeof sellerCode!=="undefined"){trigger_filter_click(true)}}
else{$(document).ready(function(){if(typeof is_taxonamy_page!=="undefined"||typeof sellerCode!=="undefined"){trigger_filter_click(true)}})}})
$(document).ready(function(){$(document).on("populateResult",function(e){if(DEVICE==="Desktop"){setTimeout(function(){if(!$("#facets").data("set_hooks")){algolia_filter_tracking_desktop();$(document).off("clearFilter.algolia").on("clearFilter.algolia",function(){trigger_filter_click(false);})
$("#facets").data("set_hooks",true);}});}else{setTimeout(function(){if(!$("#facets").data("set_hooks")){if(typeof THEMEVERSION!=='undefined'&&THEMEVERSION==2){algolia_filter_tracking_mobile_v2();}else{algolia_filter_tracking_mobile();}
$(document).off("clearFilter.algolia").on("clearFilter.algolia",function(){trigger_filter_click(false);})
$("#facets").data("set_hooks",true);}});}});});})(jQuery);