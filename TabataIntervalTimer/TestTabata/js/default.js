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
            var basicTabata = Data.getBasicTabata();
            tabataTemplate.render(basicTabata, document.body);

            var intervals = basicTabata.intervals;

            var workingTime = basicTabata.work;
            var intervalID = 0;

            var startButton = document.getElementById("start");

            startButton.addEventListener("click", function () {
                cycleIntervals();
            });

            //startButton.click();
            //for (var i = 0; i < intervals - 1; i++) {
            //    //WinJS.UI.S
            //    clickButton();
            //}

            var cycles = 0;
            function cycleIntervals() {
                innerCycle().then(function () {
                    cycles++;
                    if (cycles < intervals) {
                        cycleIntervals();
                    }
                });
            }

            //function clickButton() {
            //    setTimeout(function () {
            //        startButton.click()
            //    }, 21000);
            //}


            function innerCycle() {
                return new WinJS.Promise(function () {
                    var counter = 0;
                    intervalID = setInterval(function () {

                        counter++;
                        basicTabata.workleft -= 1;

                        if (counter >= workingTime) {
                            clearInterval(intervalID);
                            basicTabata.workleft = 20;
                        }
                        //end setInterval            
                    }, 1000);
                })
            }
        })
    }
    app.start();
})();
