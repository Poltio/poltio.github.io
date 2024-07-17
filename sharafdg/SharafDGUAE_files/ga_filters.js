SharafDGGA4Filters={init:function(){this.populateResult()
this.productSort()
this.groupFilterCleared()
this.singleFilterCleared()
this.allFilterCleared()},populateResult:function(){$(document).on("populateResult",function(e){setTimeout(function(){if(!$("#facets").data("set_ec_hooks")){SharafDGGA4Filters.sliderTracking()
SharafDGGA4Filters.starTracking()
SharafDGGA4Filters.checkboxTracking()
SharafDGGA4Filters.categoryTracking()
$("#facets").data("set_ec_hooks",true);}});});},allFilterCleared:function(){$(document).on("all_facet_cleared",function(){var filters=$(document).data("filters");var key_to_keep=''
if(typeof cat_name!='undefined'){key_to_keep="Category"}else if(typeof brand_name!='undefined'){key_to_keep="Brand"}else if(typeof tag_name!='undefined'){key_to_keep="Tag"}
if(!key_to_keep){$(document).data("filters",{});}else{Object.keys(filters).map(function(key){if(key!=key_to_keep){delete filters[key]}else{if(key_to_keep=='Category'){filters[key]=catName}
else if(key_to_keep=='Brand'){filters[key]=brandName}
else if(key_to_keep=='Tag'){filters[key]=tagName}}})
$(document).data("filters",filters)}})},groupFilterCleared:function(){$(document).on("group_filter_cleared",function(e,filter_name){const currentFilters=$(document).data("filters");filter_name=SharafDGGA4.encodeValue(filter_name)
SharafDGGA4.products_filter_event('off',filter_name,currentFilters[filter_name],'');})},singleFilterCleared:function(){$(document).on("single_filter_cleared",function(e,data){var filter_name=data.name
var $this=$(".filter-type [data-facet='"+filter_name+"']").first()
var current_filter_by=$(".cat-name .cat-value",$this.closest(".filter-section")).text().trim();current_filter_by=SharafDGGA4.encodeValue(current_filter_by)
var filter_value=data.value
var selectedValue=''
if($this.closest(".filter-type").is(".checkbox-factet")){$(".facet",$this.closest(".filter-section")).each(function(i,e){if($("input",e)[0].checked&&$("input",e)[0].value!=filter_value){selectedValue+=SharafDGGA4.encodeValue($("input",e).val())+"/";}});var updated_filters=selectedValue.substr(0,selectedValue.length-1);}else{var updated_filters=''}
filter_value=SharafDGGA4.encodeValue(filter_value)
SharafDGGA4.products_filter_event('off',current_filter_by,filter_value,updated_filters);})},productSort:function(){$(document).on("products_sort_init",function(e){$(".sort-wrp select").on("change",function(e){var value=$(".sort-wrp select").find(":selected")[0].label
SharafDGGA4.products_sort_event(value);});});},sliderTracking:function(){$(".filter-type .slider").each(function(i,e){var current_filter_by=$(".cat-name .cat-value",$(e).closest(".filter-section")).text().trim();current_filter_by=SharafDGGA4.encodeValue(current_filter_by)
e.noUiSlider.on("change",function(e){var current_filter_value=SharafDGGA4.encodeValue(e[0])+"/"+SharafDGGA4.encodeValue(e[1]);SharafDGGA4.products_filter_event("on",current_filter_by,current_filter_value,current_filter_value);});});},starTracking:function(){$("#facets .star-facet").click(function(e){e.preventDefault();var current_filter_by=$(".cat-name .cat-value",$(this).closest(".filter-section")).text().trim();current_filter_by=SharafDGGA4.encodeValue(current_filter_by)
var current_filter_value=$(this).data("min")+"/"+$(this).data("max")
SharafDGGA4.products_filter_event("on",current_filter_by,current_filter_value,current_filter_value);});},checkboxTracking:function(){$("#facets .filter-type .facet input").change(function(e){var current_filter_by_target=$(e.target);var current_filter_by=current_filter_by_target.data('facet');current_filter_by=current_filter_by.split(".")
current_filter_by=current_filter_by[current_filter_by.length-1];if(!current_filter_by&&current_filter_by.length==0){current_filter_by=$(".cat-name .cat-value",$(this).closest(".filter-section")).text().trim();}
current_filter_by=SharafDGGA4.encodeValue(current_filter_by)
var selectedValue="";var current_filter_value=e.target.value;if(SharafDGGA4.tryParseJSON(current_filter_value)){current_filter_value=JSON.parse(current_filter_value);current_filter_value=Object.keys(current_filter_value);current_filter_value=current_filter_value[0];}
current_filter_value=SharafDGGA4.encodeValue(current_filter_value)
var changeType=$(this)[0].checked?"on":"off";$(".facet",$(this).closest(".filter-section")).each(function(i,e){if($("input",e)[0].checked){var current_filter_value=$("input",e).val();if(SharafDGGA4.tryParseJSON(current_filter_value)){var current_value=JSON.parse($("input",e).val());current_value=Object.keys(current_value);current_filter_value=current_value[0];}
selectedValue+=SharafDGGA4.encodeValue(current_filter_value)+"/";}});var updated_filters=selectedValue.substr(0,selectedValue.length-1);SharafDGGA4.products_filter_event(changeType,current_filter_by,current_filter_value,updated_filters);});},categoryTracking:function(){$("#facets .filter-type a[data-attribute]").click(function(e){var current_filter_by=$(".filter-name .cat-name .cat-value",$(this).closest(".filter-accordion").closest(".filter-section")).text().trim();current_filter_by=SharafDGGA4.encodeValue(current_filter_by)
var current_filter_value=$(this).attr("data-value");current_filter_value=SharafDGGA4.encodeValue(current_filter_value)
SharafDGGA4.products_filter_event("on",current_filter_by,current_filter_value,current_filter_value);});}};(function($){$(document).ready(function(){SharafDGGA4Filters.init();})})(jQuery);