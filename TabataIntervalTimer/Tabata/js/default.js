// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var nav = WinJS.Navigation;

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
               
            } else {
                
            }

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
                nav.tabata = app.sessionState.tabata;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state,nav.tabata);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));
        }
    });

    nav.addEventListener("navigated", function (eventObject) {
        var url = eventObject.detail.location;
        var host = document.getElementById("contenthost");
        // Call unload method on current scenario, if there is one
        host.winControl && host.winControl.unload && host.winControl.unload();
        WinJS.Utilities.empty(host);
        eventObject.detail.setPromise(WinJS.UI.Pages.render(url, host, eventObject.detail.state).then(function () {
            WinJS.Application.sessionState.lastUrl = url;
        }));
    });

    app.oncheckpoint = function (args) {
       
        //var host = document.getElementById("contenthost");
        //host.winControl && host.winControl.checkpoint && host.winControl.checkpoint();
        app.sessionState.history = nav.history;
        app.sessionState.tabata = nav.tabata;
    };

    app.start();
})();
