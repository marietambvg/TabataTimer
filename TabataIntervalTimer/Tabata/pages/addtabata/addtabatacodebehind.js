/// <reference path="../playtabata/playtabatacodebehind.js" />
(function () {
    var submitTabata = function () {
        var tabataNameInput = document.getElementById("tabata-name-input");
        var tabataName = tabataNameInput.value;

        var tabataIntervalsInput = document.getElementById("wo-intervals");
        var tabataIntervals = tabataIntervalsInput.value;

        var tabataRestInput = document.getElementById("wo-rest");
        var tabataRest = tabataRestInput.value;

        var tabataWorkInput = document.getElementById("wo-work");
        var tabataWork = tabataWorkInput.value;

        var tabataPrepareInput = document.getElementById("wo-prepare");
        var tabataPrepare = tabataPrepareInput.value;

        

        ViewModels.addTabata(tabataName, tabataIntervals, tabataRest, tabataWork,  tabataPrepare);
    }

    var renderCustomTabata = function () {
        var tabataNameInput = document.getElementById("tabata-name-input");
        var tabataName = tabataNameInput.value;

        var tabataIntervalsInput = document.getElementById("wo-intervals");
        var tabataIntervals = tabataIntervalsInput.value;

        var tabataRestInput = document.getElementById("wo-rest");
        var tabataRest = tabataRestInput.value;

        var tabataWorkInput = document.getElementById("wo-work");
        var tabataWork = tabataWorkInput.value;

        var tabataPrepareInput = document.getElementById("wo-prepare");
        var tabataPrepare = tabataPrepareInput.value;



        var customTabata = Data.getCustomTabata(tabataName, tabataIntervals, tabataRest, tabataWork, tabataPrepare);
        PlayTabataCodeBehind.playCustomTabata(customTabata);
    }

    WinJS.Utilities.markSupportedForProcessing(submitTabata);
    WinJS.Utilities.markSupportedForProcessing(renderCustomTabata);

    WinJS.Namespace.define("AddTabataCodeBehind", {
        submitTabata: submitTabata,
        renderCustomTabata:renderCustomTabata
    });
})()