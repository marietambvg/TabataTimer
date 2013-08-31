(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var tabataTemplate = document.getElementById("tabata-template-container").winControl;
            var basicTabata = Data.getTabata(8,10,20,10);
            tabataTemplate.render(basicTabata, document.body);
           // computerTemplate.render(secondComputerObservable, document.body);

            setInterval(function () {
                basicTabata.work -= 1;
            }, 1000);

           
            
        }
    });
})();
