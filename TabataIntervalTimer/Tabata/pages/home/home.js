﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {
            HomeCodeBehind.callLoadTabatas();
        },

        ready: function (element, options) {
            var pageholder = document.getElementById("create-tabata-pageholder");
            WinJS.UI.Pages.render("/pages/addtabata/addtabata.html", pageholder)
            // TODO: Initialize the page here.
        }
    });
})();