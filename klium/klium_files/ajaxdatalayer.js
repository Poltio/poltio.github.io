/**
 * NOTICE OF LICENSE
 *
 * This source file is subject to a commercial license from SAS Comptoir du Code
 * Use, copy, modification or distribution of this source file without written
 * license agreement from the SAS Comptoir du Code is strictly forbidden.
 * In order to obtain a license, please contact us: contact@comptoirducode.com
 *
 * @package   cdc_googletagmanager
 * @author    Vincent - Comptoir du Code
 * @copyright Copyright(c) 2015-2023 SAS Comptoir du Code
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 *
 * Project Name : Google Tag Manager Enhanced Ecommerce (UA) Tracking
 * Created By  : Comptoir du Code
 * Created On  : 2016-06-02
 * Support : https://addons.prestashop.com/contact-community.php?id_product=23806
 */

// CDC GTM Datalayer actions
var cdcGtm = {
	clearDatalayer : function() {
		if (typeof dataLayer === 'undefined') {
			dataLayer = [];
		}
		dataLayer.push({ ecommerce: null });
	},

	addToCart : function(product_id, attribute_id, qtity, addedFromProductPage, callerElement) {
		if(product_id) {
			cdcGtm.pushProductToDatalayer('cart-add', product_id, attribute_id, qtity);
		}
	},

	removeFromCart : function(product_id, attribute_id, qtity) {
		if(product_id) {
			cdcGtm.pushProductToDatalayer('cart-remove', product_id, attribute_id, qtity);
		}
	},

	productClick : function(product_id, attribute_id) {
		if(product_id) {
			cdcGtm.pushProductToDatalayer('product-click', product_id, attribute_id);
		}
	},

	/**
	 * Get product from ajax and push it to datalayer
	 * @param action
	 * @param product_id
	 * @param attribute_id
	 * @param qtity
	 */
	pushProductToDatalayer : function(action, product_id, attribute_id, qtity) {

		// convert from NaN to default value
		attribute_id = attribute_id || 0;
		qtity = qtity || 1;

		// get product async
		var cdcgtmreq = new XMLHttpRequest();
		cdcgtmreq.onreadystatechange = function() {
			if (cdcgtmreq.readyState == 4) { /* use 4 instead of XMLHttpRequest.DONE for browser compatibility */
				if (cdcgtmreq.status == 200) {
					var datalayerJs = cdcgtmreq.responseText;
					try {
						let datalayerCartAction = JSON.parse(datalayerJs);
						// debug log - data pushed to datalayer
						// console.log(JSON.stringify(datalayerCartAction, undefined, 4));
						cdcGtm.clearDatalayer();
						dataLayer.push(datalayerCartAction);
					} catch(e) {
						console.log("[CDCGTM] error while parsing json");
					}
				}
			}
		};
		if(typeof ajaxGetProductUrl !== 'undefined' && ajaxGetProductUrl) {
			cdcgtmreq.open("GET", ajaxGetProductUrl + "?action=" + action + "&id=" + product_id + "&id_attribute=" + attribute_id + "&qtity=" + qtity, true);
			cdcgtmreq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			cdcgtmreq.send();
		} else {
			console.error("[CDCGTM] ajaxGetProductUrl not defined, cannot send action " + action);
		}
	},

	/**
	 * Use the current datalayer, add data to it
	 * then push it to GTM datalayer
	 * @param data
	 */
	/*pushDataToCurrentDatalayer : function(data) {
		try {
			dataLayer = dataLayer || [];
			let baseDatalayer = cdcDatalayer || {}
			let mergedDatalayer = {...baseDatalayer, ...data}
			dataLayer.push(mergedDatalayer);
		} catch(e) {
			console.log("[CDCGTM][pushDataToCurrentDatalayer] ERROR ");
		}
	},*/

	handleValidateShippingStep : function($submitBtn, event, shippingName, doNotPreventClick) {
		if(!$submitBtn.hasClass('clicked')) {
			if(typeof doNotPreventClick === 'undefined' || !doNotPreventClick) {
				event.preventDefault();
			}

			// push infos to datalayer
			try {
				dataLayer = dataLayer || [];
				let cloneDatalayer = JSON.parse(JSON.stringify(cdcDatalayer))
				cloneDatalayer.event = 'trytagging_add_shipping_info';
				cloneDatalayer.ecommerce.shipping_tier = shippingName;
				cdcGtm.clearDatalayer();
				dataLayer.push(cloneDatalayer);
			} catch (e) {
				console.error(e);
			}

			// exec button action after waiting to send the datalayer
			if(typeof doNotPreventClick === 'undefined' || !doNotPreventClick) {
				setTimeout(function () {
					$submitBtn.addClass('clicked');
					$submitBtn.click();
				}, 500);
			}
		}
	},

	handleValidatePayementStep : function(paymentName) {
		// push infos to datalayer
		try {
			dataLayer = dataLayer || [];
			let cloneDatalayer = JSON.parse(JSON.stringify(cdcDatalayer))
			cloneDatalayer.event = 'trytagging_add_payment_info';
			cloneDatalayer.ecommerce.payment_type = paymentName;
			cdcGtm.clearDatalayer();
			dataLayer.push(cloneDatalayer);
		} catch (e) {
			console.error(e);
		}
	}


}

/* CART : ADD / REMOVE PRODUCT ****************************************************************************************/

// Prestashop 1.5 || 1.6
if(typeof(ajaxCart) != 'undefined') {
	// override ajaxCart.add function
	var ajaxCartAddFunc = ajaxCart.add;
	ajaxCart.add = function(idProduct, idCombination, addedFromProductPage, callerElement, quantity, wishlist) {
		ajaxCartAddFunc(idProduct, idCombination, addedFromProductPage, callerElement, quantity, wishlist);
		cdcGtm.addToCart(idProduct, idCombination, quantity, addedFromProductPage, callerElement);
	}

	// override ajax.remove function
	var ajaxCartRemoveFunc = ajaxCart.remove;
	ajaxCart.remove = function(idProduct, idCombination, customizationId, idAddressDelivery) {
		ajaxCartRemoveFunc(idProduct, idCombination, customizationId, idAddressDelivery);
		cdcGtm.removeFromCart(idProduct, idCombination);
	}
}

// Prestashop >= 1.7
else if(typeof(prestashop) != 'undefined') {
	$(document).ready(function () {

		// Prestashop ajax cart
		prestashop.on(
			'updateCart',
			function (event) {
				let requestData = {};

				if (event && event.reason) {
					requestData = {
						id_product_attribute: event.reason.idProductAttribute,
						id_product: event.reason.idProduct,
						action: event.reason.linkAction
					};

					let quantity = 1;
					if(event.resp && event.resp.quantity) {
						quantity = event.resp.quantity;
					}

					if(requestData.action == 'add-to-cart') {
						cdcGtm.addToCart(requestData.id_product, requestData.id_product_attribute, quantity, null, null);
					} else if(requestData.action == 'delete-from-cart') {
						cdcGtm.removeFromCart(requestData.id_product, requestData.id_product_attribute, quantity);
					}
				}
			}
		);

		// cart creativeelements
		document.addEventListener(
			'awp-add-to-cart',
			function (event) {
				cdcGtm.addToCart(event.detail.productId, event.detail.id_product_attribute, event.detail.quantity, true, 'awp-add-to-cart');
			}
		);
	});
}

// override deleteProductFromSummary (checkout page)
var deleteProductFromSummary = (function(id) {
	var original_deleteProductFromSummary = deleteProductFromSummary;
	return function(id) {
		var productId = 0;
		var productAttributeId = 0;
		var ids = 0;
		ids = id.split('_');
		productId = parseInt(ids[0]);
		if (typeof(ids[1]) !== 'undefined') {
			productAttributeId = parseInt(ids[1]);
		}

		var cart_qtity = parseInt($('input[name=quantity_' + id + ']').val());

		cdcGtm.removeFromCart(productId, productAttributeId, cart_qtity);
		original_deleteProductFromSummary(id);
	}
})();

// override downQuantity (checkout page)
var downQuantity = (function(id, qty) {
	var original_downQuantity = downQuantity;
	return function(id, qty) {
		var productId = 0;
		var productAttributeId = 0;
		var ids = 0;
		ids = id.split('_');
		productId = parseInt(ids[0]);
		if (typeof(ids[1]) !== 'undefined') {
			productAttributeId = parseInt(ids[1]);
		}

		// qty
		var val = $('input[name=quantity_' + id + ']').val();
		var newVal = val;
		if(typeof(qty) == 'undefined' || !qty)
		{
			new_qty = 1;
			newVal = val - 1;
		}
		else if (qty < 0)
			new_qty = -qty;

		// if qtity is > 0, decrease qtity, if qtity = 0, it will be handled by "deleteProductFromSummary"
		if(newVal > 0) {
			cdcGtm.removeFromCart(productId, productAttributeId, new_qty);
		}

		original_downQuantity(id, qty);
	}
})();

/* CART : CHOSE SHIPPING / PAYMENT ************************************************************************************/
$(document).ready(function () {

	if(typeof ajaxShippingEvent !== 'undefined' && ajaxShippingEvent) {
		// chose shipping - prestashop 1.7
		$('#checkout').on('click', '#checkout-delivery-step button[type=submit]', function (e) {
			let $submitBtn = $(this);

			// get shipping name
			let $selectedShipping = $submitBtn.closest('#checkout-delivery-step').find('.delivery-options input[type=radio]:checked').closest('.delivery-option');
			let shippingName = $selectedShipping.find('.carrier-name').text();

			cdcGtm.handleValidateShippingStep($submitBtn, e, shippingName);
		});


		// chose shipping - prestashop 1.6
		$('#order').on('click', 'button[name=processCarrier]', function(e) {
			let $submitBtn = $(this);

			// get shipping name
			let $selectedShipping = $submitBtn.closest('form[name=carrier_area]').find('.delivery_options input[type=radio]:checked').closest('.delivery_option');
			let shippingName = $selectedShipping.find('td:not(.delivery_option_radio):not(.delivery_option_logo):not(.delivery_option_price)').find('strong').text();
			cdcGtm.handleValidateShippingStep($submitBtn, e, shippingName);
		});
	}


	if(typeof ajaxPaymentEvent !== 'undefined' && ajaxPaymentEvent) {
		// chose payment - prestashop 1.7
		$('#checkout').on('change', '#checkout-payment-step input[type=radio][name=payment-option]', function (e) {
			// push infos to datalayer
			let paymentName = $(this).closest('.payment-option').find('label').text().trim();
			cdcGtm.handleValidatePayementStep(paymentName);
		});

		// chose payment - prestashop 1.6
		$('#order').on('click', '#HOOK_PAYMENT .payment_module a', function (e, cdcGtmTriggered) {
			let $submitBtn = $(this);
			e.preventDefault();

			// push infos to datalayer
			cdcGtm.handleValidatePayementStep($submitBtn.attr('title'));

			// redirect to payment after waiting to send the datalayer
			setTimeout(function () {
				window.location.href = $submitBtn.attr("href");
			}, 500);
		});
	}


});



/* PRODUCT CLICK ******************************************************************************************************/
$(document).ready(function () {

	// prestashop 1.7
	$('article[data-id-product]').find('a').on('click', function() {
		let $product = $(this).closest('article[data-id-product]');
		let idProduct = $product.data('id-product');
		let idProductAttribute = $product.data('id-product-attribute') | 0;
		cdcGtm.productClick(idProduct, idProductAttribute);
	});

	// prestashop 1.6
	$('.ajax_block_product').find('a.product-name,a.product_img_link,a.lnk_view,a.quick-view-mobile').on('click', function(e) {
		let $productInfos = $(this).closest('.ajax_block_product').find('.cdcgtm_product');
		let idProduct = $productInfos.data('id-product');
		let idProductAttribute = $productInfos.data('id-product-attribute') | 0;
		cdcGtm.productClick(idProduct, idProductAttribute);
	});
});