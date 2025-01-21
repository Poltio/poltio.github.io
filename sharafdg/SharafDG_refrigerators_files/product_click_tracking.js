algolia_defer_till_jQuery(function ($) {
 
  $(document).on("querySuggestionResult",function(e,content){

    window.algoliaSuggestionClickListner = true

    // desktop
    $(document).off("querySuggestionClick")
    $(document).on("querySuggestionClick",function(e,data){
    
      if (content.queryID) {
        if(DEVICE === 'Desktop'){
          Sharaf.Utility.setWithExpiry("storedQueryID",content.queryID,604800000)
        } else {
          SharafUtility.setWithExpiry("storedQueryID",content.queryID,604800000)
        }
      }
      var suggestion_click_index = -1
      for(var i=0;i<content.hits.length;i++){
        if(content.hits[i].objectID == data.objectID){
          suggestion_click_index = i +1
          break
        }
      }
     sendClickEvent(data.objectID,suggestion_click_index,data.link,content.queryID,content.indexUsed, "suggestion")
    
    })

    // mobile
    $("html").off("click","#searchModal .query.product-suggest a")
    $("html").on("click","#searchModal .query.product-suggest a",function(e){
      e.preventDefault()
      
      if (content.queryID) {
        if(DEVICE === 'Desktop'){
          Sharaf.Utility.setWithExpiry("storedQueryID",content.queryID,604800000)
        } else {
          SharafUtility.setWithExpiry("storedQueryID",content.queryID,604800000)
        }
      }

      var a = $(e.currentTarget)
      var objectID = a.attr("data-objectid")
      var link = a.attr("href")

      var suggestion_click_index = -1
      for(var i=0;i<content.hits.length;i++){
        if(content.hits[i].objectID == objectID){
          suggestion_click_index = i +1
          break
        }
      }

     sendClickEvent(objectID,suggestion_click_index,link,content.queryID,content.indexUsed,"suggestion")

    })

  })


  $(document).on("populateResult", function (e, content) {
    if (content.queryID) {
      if(DEVICE === 'Desktop'){
        Sharaf.Utility.setWithExpiry("storedQueryID",content.queryID,604800000)
      } else {
        SharafUtility.setWithExpiry("storedQueryID",content.queryID,604800000)
      }
    }

    var product_click = function (e) {
      if($(e.target).closest(".addtocart_wrap").length){
        e.preventDefault()
        $(".add_to_cart_button",$(e.target).closest(".addtocart_wrap")).click()
        return false;
    }
      if(window.is_pjax_enabled === undefined){
        e.preventDefault();
      }
      var slide = $(this).closest(".slide");
      var link = $("a.product-link", slide).attr("href");
      
      var urlParams = new URLSearchParams(window.location.search);
      var pageQuery = urlParams.get('page_number');
      if(pageQuery){
        var index = ($(".product-items .slide:not(.paid_slide)").index(slide) + 1) + content.hitsPerPage * (pageQuery -1)
      } else {
        var index = $(".product-items .slide:not(.paid_slide)").index(slide) + 1;
      }

      var a = $('a',slide)

      var objectID = a.attr("data-objectid");
      var sku = a.attr("data-sku");

      if(DEVICE === 'Desktop'){
        Sharaf.Utility.setWithExpiry("objectID_for_" + sku, objectID,86400000)
      } else {
        SharafUtility.setWithExpiry("objectID_for_" + sku, objectID,86400000)
      }

      //var derived_algolia_index_name = get_algolia_index_name()

      sendClickEvent(objectID,index,link,content.queryID,content.indexUsed,"searchResult")
      
    }

    $("#hits.product-items").off("click.algolia", ".slide a:not(.paid)")
    $("#hits.product-items").on("click.algolia", ".slide a:not(.paid)", product_click);
  });


  function sendClickEvent(objectID,index,link,queryID,indexName,click_origin){
    
    if (typeof algoliaUserToken !== "undefined" && indexName) {
      if (queryID) {
        aa("clickedObjectIDsAfterSearch", {
          userToken: algoliaUserToken,
          index: indexName,
          eventName: "Product Click",
          objectIDs: [objectID],
          queryID: queryID,
          positions: [index],
        });
      } else {
        aa("clickedObjectIDs", {
          userToken: algoliaUserToken,
          index: indexName,
          eventName: "Product Click",
          objectIDs: [objectID],
        });
      }
    }
    setTimeout(function(){
      if(window.is_pjax_enabled === undefined || click_origin == 'suggestion'){
        window.location = link;
      }
    },0)
  }

});
