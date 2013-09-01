(function () {

    var startTimer = function (currentTabata, tabataTemplate, contentHolder, startButton) {

        //var basicTabata = Data.getBasicTabata();
        tabataTemplate.render(currentTabata, contentHolder);

        var intervals = currentTabata.intervals;

        var workingTime = currentTabata.work;
        var intervalID = 0;


        startButton.addEventListener("click", function () {
            innerCycle();
        });

        // startButton.click();
        //for (var i = 0; i < intervals - 1; i++) {
        //    clickButton();
        //}

        //function clickButton() {
        //    setTimeout(function () {
        //        startButton.click()
        //    }, 6000);
        //}


        function innerCycle() {
            var counter = 0;
            intervalID = setInterval(function () {

                counter++;
                currentTabata.workleft -= 1;

                if (counter >= workingTime) {
                    clearInterval(intervalID);
                    currentTabata.workleft = currentTabata.work;
                }
            }, 1000);
        }

    }


    WinJS.Utilities.markSupportedForProcessing(startTimer);

    WinJS.Namespace.define("PlayTabataCodeBehind", {

        startTimer: startTimer

    })
})();