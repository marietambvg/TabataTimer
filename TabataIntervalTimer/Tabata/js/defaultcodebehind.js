(function () {

    var goToAddTabata = function () {
        WinJS.Navigation.navigate("/pages/addtabata/addtabata.html");
    }

WinJS.Utilities.markSupportedForProcessing(goToAddTabata);

    WinJS.Namespace.define("DefaultCodeBehind", {
        goToAddTabata: goToAddTabata,
    });
})()