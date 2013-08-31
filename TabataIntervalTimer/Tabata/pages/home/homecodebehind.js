(function () {

    var startTimer = function (tabataTemplate,contentHolder,startButton) {
        
            var basicTabata = Data.getBasicTabata();
            tabataTemplate.render(basicTabata, contentHolder);

            var intervals = basicTabata.intervals;

            var workingTime = basicTabata.work;
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
                    basicTabata.workleft -= 1;

                    if (counter >= workingTime) {
                        clearInterval(intervalID);
                        basicTabata.workleft = basicTabata.work;
                    }
                }, 1000);
            }
    
        }
        

    WinJS.Utilities.markSupportedForProcessing(startTimer);

    WinJS.Namespace.define("HomeCodeBehind",{

        startTimer:startTimer

    })
})();