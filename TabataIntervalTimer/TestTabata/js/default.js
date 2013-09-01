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
            var currentTabata = Data.getBasicTabata();
            tabataTemplate.render(currentTabata, document.body);

            var intervalID = 0;

            var startButton = document.getElementById("start");

            startButton.addEventListener("click", function () {
                var tabatasCounter = currentTabata.tabatas;

                tabatasCycle().then(function () {
                    currentTabata.tabatas = tabatasCounter;
                });
            });

            function tabatasCycle() {
                var complete, error;
                var promise = new WinJS.Promise(function (c, e) {
                    complete = c;
                    error = e;
                });
                var intervals = currentTabata.intervals;
                var prepareTime = currentTabata.prepare;

                function recursiveCall() {
                    intervalsCycle().then(function () {
                        currentTabata.prepare = prepareTime;
                        currentTabata.intervals = intervals;
                        currentTabata.tabatas -= 1;
                        if (currentTabata.tabatas <= 0) {
                            complete();
                        }
                        else {
                            recursiveCall();
                        }
                    });
                }
                recursiveCall();

                return promise;
            }

            function intervalsCycle() {
                var complete, error;
                var promise = new WinJS.Promise(function (c, e) {
                    complete = c;
                    error = e;
                });

                prepareCount().then(function () {
                    recursiveCycle();
                });

                function recursiveCycle() {
                    workRestCycle().then(function () {
                        currentTabata.intervals -= 1;
                        if (currentTabata.intervals <= 0) {
                            complete();
                        }
                        else {
                            recursiveCycle();
                        }
                    });
                };

                return promise;
            };

            function workRestCycle() {
                return new WinJS.Promise(function (complete, error) {

                    workingCount().then(function () {
                        currentTabata.workleft = currentTabata.work;
                        restingCount().then(function () {
                            currentTabata.restleft = currentTabata.rest;
                            complete();
                        });
                    });
                });
            }

            function prepareCount() {
                return new WinJS.Promise(function (complete, error) {
                    intervalID = setInterval(function () {
                        currentTabata.prepare -= 1;

                        if (currentTabata.prepare <= 0) {
                            clearInterval(intervalID);
                            complete();
                        }
                    }, 1000);
                });
            };

            function workingCount() {
                return new WinJS.Promise(function (complete, error) {
                    intervalID = setInterval(function () {
                        currentTabata.workleft -= 1;

                        if (currentTabata.workleft <= 0) {
                            clearInterval(intervalID);
                            complete();
                        }
                    }, 1000);
                });
            }

            function restingCount() {
                return new WinJS.Promise(function (complete, error) {
                    intervalID = setInterval(function () {
                        currentTabata.restleft -= 1;

                        if (currentTabata.restleft <= 0) {
                            clearInterval(intervalID);
                            complete();
                        }
                    }, 1000);
                });
            }

            //var tabata = new ObservableTabata({
            //    name: currentTabata.name,
            //    intervals: currentTabata.intervals,
            //    rest: currentTabata.rest,
            //    restleft: currentTabata.rest,
            //    work: currentTabata.work,
            //    workleft: currentTabata.work,
            //    prepare: currentTabata.prepare
            //});

        })
    }
    app.start();
})();
