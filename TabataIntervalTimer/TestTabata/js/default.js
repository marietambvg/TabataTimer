// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        WinJS.UI.processAll().then(function () {
            var tabataTemplate = document.getElementById("tabata-template-container").winControl;
            var basicTabata = Data.getTabata(8, 10, 20, 10);
            tabataTemplate.render(basicTabata, document.body);
            // computerTemplate.render(secondComputerObservable, document.body);
            var counter = 0;
            var intervalID;

            intervalID=setInterval(function () {
                //make this is the first thing you do in the set interval function
                counter++;
                basicTabata.work -= 1;
                //do you code for setInterval() and clearInterval under normal conditions here...
                //okay, if we have tried for 5 minutes (30 x 10 seconds ), then lets stop trying because we did not reach the clearInterval under number means           
                //make this the last check in your set interval function            
                if (counter >= 20) {
                    clearInterval(intervalID);
                }
                //end setInterval            
            }, 1000);

            //setInterval(function () {
            //       
            //    }, 1000,20)
        })}

            app.start();
    })();
