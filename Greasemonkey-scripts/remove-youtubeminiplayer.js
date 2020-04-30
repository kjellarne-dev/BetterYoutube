// ==UserScript==
// @name     _Remove Youtube Miniplayer
// @include  https://www.youtube.com/*
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
//- The @grant directive is needed to restore the proper sandbox.

/*--- Use the jQuery contains selector to find content to remove.
    Beware that not all whitespace is as it appears.
*/

/*
	Remove miniplayer HTML code
*/

var miniplayer = document.getElementsByClassName('miniplayer style-scope ytd-miniplayer')[0].parentElement;

if (miniplayer) {
  miniplayer.parentNode.removeChild(miniplayer);
}
