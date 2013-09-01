/// <reference path="../../js/defaultcodebehind.js" />
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
        var tabataTemplate; 
        var contentHolder; 
        var startButton;
       
        var getTabataTemplate = document.getElementById("tabata-template-container");
            tabataTemplate = getTabataTemplate.winControl;
            contentHolder = WinJS.Utilities.id("tabata-play-content").get(0);
            startButton = WinJS.Utilities.id("start").get(0);
        

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

    var playCustomTabata = function () {

            var tabataNameInput = document.getElementById("tabata-name-input");
            var tabataName = tabataNameInput.value;

            var tabataIntervalsInput = document.getElementById("wo-intervals");
            var tabataIntervals = tabataIntervalsInput.value;

            var tabataRestInput = document.getElementById("wo-rest");
            var tabataRest = tabataRestInput.value;

            var tabataWorkInput = document.getElementById("wo-work");
            var tabataWork = tabataWorkInput.value;

            var tabataPrepareInput = document.getElementById("wo-prepare");
            var tabataPrepare = tabataPrepareInput.value;

            var customTabata = Data.getCustomTabata(tabataName, tabataIntervals, tabataRest, tabataWork, tabataPrepare);

            WinJS.Binding.optimizeBindingReferences = true;
           
            WinJS.Binding.processAll().then(function(){
            playTabata(customTabata);
            })
        }
    
    WinJS.Utilities.markSupportedForProcessing(playCustomTabata);
    WinJS.Utilities.markSupportedForProcessing(playTabata);
    WinJS.Utilities.markSupportedForProcessing(startTimer);
  

    WinJS.Namespace.define("PlayTabataCodeBehind", {

        startTimer: startTimer,
        playTabata: playTabata,
        playCustomTabata:playCustomTabata

    })
})();