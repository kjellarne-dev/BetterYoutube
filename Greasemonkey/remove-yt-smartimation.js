// ==UserScript==
// @name     Remove Youtume smartimation
// @version  1
// @grant    none
// @match    http://*.youtube.com/*
// @match    https://*.youtube.com/*
// ==/UserScript==

// Remove the Youtube subscribe and like button animations that glow whenever they are mentioned in a video

function removeYTSmartimation () {
    // Find the element to replace
    var elementToReplace = document.querySelector("yt-smartimation");
    // Create the replacement element
    var replacementElement = document.createElement("div");
  
    // Copy the child node into the replacementElement (otherwise the subscribe and like buttons disappear entirely)
    // For Youtube this was easy - the subscribe button is the last child element
    replacementElement.appendChild(elementToReplace.lastChild);
    // Insert the replacement element before the element that is being replaced
    elementToReplace.parentNode.insertBefore(replacementElement, elementToReplace);
    // Get rid of the element that is being replaced
    elementToReplace.parentNode.removeChild(elementToReplace);
  }
  
  // Run the function twice to remove the smartimation-element from both the subscribe button and the like button
  // Could probably select all elements that match and run it through a foreach loop, but fuck it, this works
  // I don't want to spend more time than necessary trying to fix Youtube
  
  var checkExist = setInterval(function() {
      if (document.querySelector("yt-smartimation")) {
          removeYTSmartimation();
          removeYTSmartimation();
          clearInterval(checkExist);
      }
  }, 100);
  
  // Checks every 100 ms if the yt-smartimation element has appeared on page
  // Youtube 2024 is a fucking slog
  // It is so slow that the subscribe button, like button, comments, recommended videos list etc don't load in until AFTER the "document finished loading" signal is triggered...