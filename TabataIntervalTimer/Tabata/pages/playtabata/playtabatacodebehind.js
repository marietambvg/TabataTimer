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
                   // currentTabata.workleft = currentTabata.work;
                }
            }, 1000);
        }

    }


    WinJS.Utilities.markSupportedForProcessing(startTimer);

    WinJS.Namespace.define("PlayTabataCodeBehind", {

        startTimer: startTimer

    })
})();