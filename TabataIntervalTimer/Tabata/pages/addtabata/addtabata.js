﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var app = WinJS.Application;
    WinJS.UI.Pages.define("/pages/addtabata/addtabata.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        processed: function (element, options) {
            
            if (app.sessionState.tabata) {
                document.getElementById("tabata-name-input").value = app.sessionState.tabata.name;
                document.getElementById("wo-intervals").value = app.sessionState.tabata.intervals;
                document.getElementById("wo-rest").value = app.sessionState.tabata.rest;
                document.getElementById("wo-work").value = app.sessionState.tabata.work;
                document.getElementById("wo-prepare").value = app.sessionState.tabata.prepare;
            }
        },

        ready: function (element, options) {
            
        },

        checkpoint: function () {
            var tabata = {};
            tabata.name = document.getElementById("tabata-name-input").value;
            tabata.intervals = document.getElementById("wo-intervals").value;
            tabata.rest = document.getElementById("wo-rest").value;
            tabata.work = document.getElementById("wo-work").value;
            tabata.prepare = document.getElementById("wo-prepare").value;
            app.sessionState.tabata = tabata;

            
        }
        
            
    });
})();
