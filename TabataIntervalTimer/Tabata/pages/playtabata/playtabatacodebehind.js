(function () {

    var startTimer = function (currentTabata, startButton) {
       
        var workTime = currentTabata.work;

        var intervalID = 0;

        startButton.addEventListener("click", function () {
            innerCycle();
        });
        

        function innerCycle() {
            var counter = 0;
            intervalID = setInterval(function () {

                counter++;
               currentTabata.workleft -= 1;

                if (counter >= workTime) {
                    clearInterval(intervalID);
                }
            }, 1000);
        }

    }

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
        playTabata:playTabata

    })
})();