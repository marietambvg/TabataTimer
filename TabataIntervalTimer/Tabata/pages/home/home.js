(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {
            
        },

        ready: function (element, options) {
            // TODO: Initialize the page here.
            var getTabataTemplate = WinJS.Utilities.id("tabata-template-container").get(0);
            var tabataTemplate = getTabataTemplate.winControl;
            var contentHolder = WinJS.Utilities.id("content").get(0);
            var startButton = WinJS.Utilities.id("start").get(0);
            HomeCodeBehind.startTimer(tabataTemplate, contentHolder, startButton);
        }
    });
})();