(function () {
  let svelteURL = "https://shopbox-widgets-storybook.pages.dev/sbmain.min.js";

  // Check if beta branch is needed
  if ([true, "true"].includes(localStorage.getItem("shopboxBeta"))) {
    console.log("running on shopbox beta");
    svelteURL = "https://main.shopbox-widgets-storybook.pages.dev/sbmain.js";
  }

  let existingScript = document.querySelector(`script[src="${svelteURL}"]`);
  if (existingScript) {
    existingScript.remove();
  }

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = svelteURL;

  document.getElementsByTagName("body")[0].appendChild(script);
})();
