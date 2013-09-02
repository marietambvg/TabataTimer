// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/playtabata/playtabata.html", {
        ready: function (element, options) {

            WinJS.Binding.optimizeBindingReferences = true;
            WinJS.Binding.processAll(element,
                ViewModels.tabatas.getAt(options.indexInTabataList)).then(function () {

                    var currentTabata = ViewModels.tabatas.getAt(options.indexInTabataList);
                    
                    PlayTabataCodeBehind.playTabata(currentTabata);
                })
        },

        unload: function () {
        },

        updateLayout: function (element, viewState, lastViewState) {
        }
    });
})();
