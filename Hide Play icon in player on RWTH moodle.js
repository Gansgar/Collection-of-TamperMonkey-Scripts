// ==UserScript==
// @name         Hide Play icon in player on RWTH moodle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://engage.streaming.rwth-aachen.de/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
.play-icon {
  display: none !important;
}`);
})();

