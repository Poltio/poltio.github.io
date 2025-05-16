algolia_defer_till_jQuery(function ($) {

  if(typeof THEMEVERSION !=='undefined' && THEMEVERSION == 2){
    $("#content").on("click",".addtocart_wrap.inside_thumbnail ", function () {
      window.AddToCartClickedOnListItem = $(".add_to_cart_button",this).attr("data-objectid")
    })
  } else {
    $("#page").on("click",".addtocart_wrap.inside_thumbnail ", function () {
      window.AddToCartClickedOnListItem = $(".add_to_cart_button",this).attr("data-objectid")
    })
  }

  $( document.body ).on( 'added_to_cart', function(event) {
    $this = $(event.target)
    if(window.AddToCartClickedOnListItem !== $this.attr("data-objectid")){
      return
    }
    var price = $this.attr("data-price")
    if ($this.closest(".inside_thumbnail").length !== 0) {
      var objectID = $this.attr("data-objectid")
    }
    else if (typeof product_sku !== "undefined") {
      if (DEVICE === 'Desktop') {
        var objectID = Sharaf.Utility.getWithExpiry("objectID_for_" + product_sku)
      } else {
        var objectID = SharafUtility.getWithExpiry("objectID_for_" + product_sku)
      }
    }
    var derived_algolia_index_name = get_algolia_index_name()
    if (objectID && derived_algolia_index_name) {

      var storedQueryID = DEVICE === 'Mobile' ? SharafUtility.getWithExpiry("storedQueryID") : Sharaf.Utility.getWithExpiry("storedQueryID")

      var eventData = {
        eventType: "conversion",
        eventName: "Product Added to Cart",
        index: derived_algolia_index_name,
        objectIDs: [objectID],
        eventSubtype: 'addToCart', //addToCart purchase
        currency : sdg_text_to_currency(sdgCurrency),
        objectData: [
          {
            price: price
          }
        ]
      }

      if (storedQueryID) {
        eventData.queryID = storedQueryID
      }
      if(typeof(AlgoliaAnalytics) !== 'undefined'){
        AlgoliaAnalytics.default.sendEvents([eventData])
      }
     
    }

  })

});
