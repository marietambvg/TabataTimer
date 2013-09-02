﻿
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

        ViewModels.addTabata(tabataName, tabataIntervals, tabataRest, tabataWork, tabataPrepare);
        HomeCodeBehind.callLoadTabatas();
        WinJS.Navigation.navigate("/pages/home/home.html");
    }

    //var onChangeInputs = function () {

    //    document.getElementById("wo-work").addEventListener('change', changeValue, false);

    //    function changeValue() {
    //        document.getElementById("wo-work-value").value = document.getElementById("wo-work").value;
    //    }
    //}

    WinJS.Utilities.markSupportedForProcessing(submitTabata);
    WinJS.Namespace.define("AddTabataCodeBehind", {
        submitTabata: submitTabata,
        //onChangeInputs: onChangeInputs
    });
})()