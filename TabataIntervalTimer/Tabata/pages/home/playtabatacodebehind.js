(function () {


    var startTimer = function (currentTabata, startButton) {

        var tabatasCounterElement = document.getElementById("tabatas-count");
        var tabatasCounter = 1;
        tabatasCounterElement.innerHTML = tabatasCounter;

        var intervalID = 0;
        startButton.addEventListener("click", function () {
            tabatasCycle().then(function () {
                tabatasCounter = 1;
                tabatasCounterElement.innerHTML = tabatasCounter;
            });
        });

        var canvas;
        var ctx;
        var restSound = new Audio("/sounds/ring.mp3");
        restSound.loop = false;
        var workSound = new Audio("/sounds/wakeup.mp3");
        workSound.loop = false;
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        //counter state visibility settings
        var prepareWrap = document.getElementById("prepare-wrap");
        var workWrap = document.getElementById("work-wrap");
        var restWrap = document.getElementById("rest-wrap");

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
                    //change counter state visibility
                    prepareWrap.style.visibility = "visible";

                    currentTabata.prepare = prepareTime;
                    currentTabata.intervals = intervals;
                    tabatasCounter -= 1;
                    tabatasCounterElement.innerHTML = tabatasCounter;
                    if (tabatasCounter <= 0) {
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
                //change counter state visibility
                prepareWrap.style.visibility = "hidden";

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
                //change counter state visibility
                workWrap.style.visibility = "visible";

                workingCount().then(function () {
                    //change counter state visibility
                    workWrap.style.visibility = "hidden";

                    currentTabata.workleft = currentTabata.work;
                    //play rest sound
                    restSound.play();
                    //change counter state visibility
                    restWrap.style.visibility = "visible";

                    restingCount().then(function () {
                        //change counter state visibility
                        restWrap.style.visibility = "hidden";

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
                //play work sound
                workSound.play();
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
            //play rest sound
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
    };

    var playTabata = function (currentTabata) {

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

        startTimer(tabata, startButton);

    }


    WinJS.Utilities.markSupportedForProcessing(startTimer);

    WinJS.Namespace.define("PlayTabataCodeBehind", {

        startTimer: startTimer,
        playTabata: playTabata,


    })
})();