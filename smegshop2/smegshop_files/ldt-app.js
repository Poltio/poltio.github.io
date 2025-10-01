(()=>{/*!********************************!*\
  !*** ./src/scripts/ldt-app.js ***!
  \********************************/document.addEventListener("DOMContentLoaded",function(){(()=>{new MutationObserver(()=>{const button=document.querySelector(".ldt-cp-fixed-button-trigger");button&&!button.dataset.touchListenerAdded&&window.matchMedia("(pointer: coarse)").matches&&(button.addEventListener("touchend",function(event){event.preventDefault(),button.click()}),button.dataset.touchListenerAdded="true")}).observe(document.body,{childList:!0,subtree:!0})})()})})();
//# sourceMappingURL=/cdn/shop/t/5/assets/ldt-app.js.map?v=162990956379191410401747726822
