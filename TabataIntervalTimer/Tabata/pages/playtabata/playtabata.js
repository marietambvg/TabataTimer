// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/playtabata/playtabata.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            WinJS.Binding.optimizeBindingReferences = true;
            WinJS.Binding.processAll(element,
                ViewModels.tabatas.getAt(options.indexInTabataList)).then(function () {

                    var currentTabata = ViewModels.tabatas.getAt(options.indexInTabataList);
                    var getTabataTemplate = WinJS.Utilities.id("tabata-template-container").get(0);
                    var tabataTemplate = getTabataTemplate.winControl;
                    var contentHolder = WinJS.Utilities.id("tabata-play-content").get(0);
                    var startButton = WinJS.Utilities.id("start").get(0);

                    var ObservableTabata = WinJS.Binding.define(currentTabata);

                    var tabata = new ObservableTabata({
                        name: currentTabata.name,
                        intervals: currentTabata.intervals,
                        rest: currentTabata.rest,
                        restleft: currentTabata.rest,
                        work: currentTabata.work,
                        workleft: currentTabata.work,
                        prepare: currentTabata.prepare
                    });

                    WinJS.Utilities.markSupportedForProcessing(ObservableTabata);
                    tabataTemplate.render(tabata, contentHolder);

                    PlayTabataCodeBehind.startTimer(tabata, startButton);
                })
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
