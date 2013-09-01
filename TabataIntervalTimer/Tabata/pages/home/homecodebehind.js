(function () {

    var goToTabataDetailsPage = function (invokeEvent) {
        WinJS.Navigation.navigate("/pages/playtabata/playtabata.html", {
            indexInTabataList: invokeEvent.detail.itemIndex
        });
    }

    WinJS.Utilities.markSupportedForProcessing(goToTabataDetailsPage);

    WinJS.Namespace.define("HomeCodeBehind", {
        callLoadTabatas: function () {
            ViewModels.loadTabatas();
        },

        goToTabataDetailsPage: goToTabataDetailsPage
    })
})();