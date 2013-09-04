/// <reference path="../pages/home/playtabatacodebehind.js" />
(function () {

    var goToAddTabata = function () {
        PlayTabataCodeBehind.stopWorkout();
        WinJS.Navigation.navigate("/pages/addtabata/addtabata.html");
    }

WinJS.Utilities.markSupportedForProcessing(goToAddTabata);

    WinJS.Namespace.define("DefaultCodeBehind", {
        goToAddTabata: goToAddTabata,
    });
})()