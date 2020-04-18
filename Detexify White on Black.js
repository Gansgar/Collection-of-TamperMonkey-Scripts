// ==UserScript==
// @name         Detexify White on Black
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script inverts the SVG drawing space and the images, to force white on black for all elements. Those parts were left out by the chrome dark mode.
// @author       You
// @match        *://detexify.kirelabs.org/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
svg, img[class^='symbol'], img[class*=' symbol'] {
  filter: invert(1);
}`);
    // Your code here...
})();
