// ==UserScript==
// @name         Remove chuanqi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  从战旗中移除SB传奇
// @author       You
// @match        https://greasyfork.org/en/scripts/13404-ac-%E4%BB%8Egoogle-baidu-bing%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E4%B8%AD%E5%B1%8F%E8%94%BD%E5%8D%A1%E9%A5%AD%E6%95%99%E7%A8%8B
// @include /^https?\:\/\/www.zhanqi.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

})();

mo = new MutationObserver(function(allmutations) {
    $('li  span:contains("传奇")').closest('li').remove();
});
var targets = document.body;
mo.observe(targets, {'childList': true,'characterData':true,'subtree': true});