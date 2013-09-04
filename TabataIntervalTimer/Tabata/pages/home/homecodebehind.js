/// <reference path="playtabatacodebehind.js" />
(function () {
    
    var goToHomePage = function (invokeEvent) {

        WinJS.Navigation.navigate("/pages/home/home.html", {
            indexInTabataList: invokeEvent.detail.itemIndex
        });
    }

    WinJS.Utilities.markSupportedForProcessing(goToHomePage);

    WinJS.Namespace.define("HomeCodeBehind", {
        callLoadTabatas: function () {
            ViewModels.loadTabatas();
        },
       
        goToHomePage: goToHomePage
    })
})();