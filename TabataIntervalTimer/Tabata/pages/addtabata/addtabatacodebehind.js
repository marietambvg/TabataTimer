(function () {
    var submitTabata = function () {
        var tabataNameInput = document.getElementById("tabata-name-input");
        var tabataName = tabataNameInput.value;

        ViewModels.addTabata(tabataName, 8,20,4,10);
    }

    WinJS.Utilities.markSupportedForProcessing(submitTabata);

    WinJS.Namespace.define("AddTabataCodeBehind", {
        submitTabata: submitTabata
    });
})()