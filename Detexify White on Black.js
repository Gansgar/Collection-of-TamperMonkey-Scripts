// ==UserScript==
// @name         Detexify White on Black
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://detexify.kirelabs.org/*
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