/**
 * Feature detect and conditionally load polyfills for outdated browsers
 */
(function () {
    function loadScript(src) {
        var firstScript = document.querySelector('script');
        var newScript = document.createElement('script');

        newScript.src = src;
        newScript.defer = true;

        if (firstScript) {
            // insert new script after first script tag
            firstScript
                .parentNode
                .insertBefore(newScript, firstScript.nextSibling);
        }
    }

    /**
     * Check to see if the browser fully supports IntersectionObserver
     * @returns {boolean} - Whether or not the browser fully supports IntersectionObserver
     */
    function supportsIntersectionObserver() {
        if (!('IntersectionObserver' in window) ||
            !('IntersectionObserverEntry' in window) ||
            !('intersectionRatio' in window.IntersectionObserverEntry.prototype) ||
            !('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
            return false;
        }

        return true;
    }

    /**
     * Check to see if the browser supports sticky position value
     * @returns {boolean} - Whether or not the browser supports the sticky position
     */
    function supportsPositionSticky() {
        var prop = 'position:';
        var value = 'sticky';
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

        var el = document.createElement('a');
        var mStyle = el.style;
        mStyle.cssText = prop + prefixes.join(value + ';' + prop).slice(0, - prop.length);

        return mStyle.position.indexOf(value) !== -1;
    };

    if (!supportsPositionSticky()) {
        loadScript(window.__staticPath__ + 'js/lib/stickyfill.min.js');
    }

    if (!supportsIntersectionObserver()) {
        loadScript(window.__staticPath__ + 'js/lib/intersection-observer.min.js');
    }
})();
