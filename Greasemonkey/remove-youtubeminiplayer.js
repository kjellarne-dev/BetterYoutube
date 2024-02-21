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
	Source: https://github.com/Kjellarne6/BetterYoutube
*/

var miniplayer = document.getElementsByClassName('miniplayer style-scope ytd-miniplayer')[0].parentElement;

if (miniplayer) {
  miniplayer.parentNode.removeChild(miniplayer);
}



// Update 2024-02-22 - I assume this script isn't working anymore. Haven't tested in several years