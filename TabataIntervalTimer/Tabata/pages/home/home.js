(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {
            HomeCodeBehind.callLoadTabatas();
        },

        ready: function (element, options) {
           
           var currentTabata;
           WinJS.Binding.optimizeBindingReferences = true;
           if (options) {
               WinJS.Binding.processAll(element,
                   ViewModels.tabatas.getAt(options.indexInTabataList)).then(function () {
                       currentTabata = ViewModels.tabatas.getAt(options.indexInTabataList);
                   })
           }
           else {
               currentTabata = ViewModels.getBasicTabata();
           }
           PlayTabataCodeBehind.playTabata(currentTabata);
        },

            
    });
})();