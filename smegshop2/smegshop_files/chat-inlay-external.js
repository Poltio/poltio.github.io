/**
 * October 2020, NOJ
 * 
 * To help pre-populate Chat Inlay form fields (first name, last name, email) on the Customer Portal and non-Customer Portal sites. 
 * All the script does is set the "launch-form-fields" attribute on the <inlay-oracle-chat-embedded> DOM node - this needs to happen before the OIT loader script is loaded and executed
 * 
 * N.B. ES5 syntax is mainly used for Internet Explorer compatibility.
 */
const prePopulateChatInlay = (function () {

  "use strict";

  const getChatInlayNode = function (chatInlayNodeID) {
    return document.getElementById(chatInlayNodeID);
  };

  const truncateUrl = function (currentUrl) {
    const currentUrlTruncated = currentUrl.substring(0, 255);
    return currentUrlTruncated;
  };

  const setChatInlayLaunchFormFields = function (currentUrl) {
    return [{
      "name": "FIRST_NAME",
      "required": false
    }, {
      "name": "c$customer_model_num",
      "label": "Model Number",
      "required": false
    }, {
      "name": "EMAIL",
      "required": "false",
      "value": "web-chat@dummycontact.com.invalid",
      // "value": "3782516444@dummycontact.com",
      "hidden": "true"
    }, {
      "name": "c$chat_request_origin_url",
      "required": "false",
      "value": currentUrl,
      "hidden": "true"
    }];
  };

  const setLaunchFormFieldsAttribute = function (chatInlayNode, launchFormFields) {
    const launchFormFieldsAttribute = "launch-form-fields";
    chatInlayNode.setAttribute(launchFormFieldsAttribute, JSON.stringify(launchFormFields));
  };

  const prePopulateChatInlay = function () {
    const chatInlayNodeID = "inlay-oracle-chat-embedded";
    const chatInlayNode = getChatInlayNode(chatInlayNodeID);
    const currentUrl = String(window.location);

    if (chatInlayNode != null) {
      const currentUrlTruncated = truncateUrl(currentUrl);
      const launchFormFields = setChatInlayLaunchFormFields(currentUrlTruncated);
      setLaunchFormFieldsAttribute(chatInlayNode, launchFormFields);
    }
  };

  return prePopulateChatInlay;
})();

const showChatInlay = function () {
  if (window.oit && window.oit.inlayIsLoaded) {
    waitForChatInlay()
  } else {
    document.addEventListener('oit-loaded', waitForChatInlay)
  };
};

const waitForChatInlay = function () {
  if (oit.inlayIsLoaded('chatInlay')) {
    prePopulateChatInlay()
  } else {
    document.addEventListener('inlay-oracle-chat-embedded-loaded', prePopulateChatInlay())
  };
}

showChatInlay();