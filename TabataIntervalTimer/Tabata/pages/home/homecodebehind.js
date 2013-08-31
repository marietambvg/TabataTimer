(function () {

    var goToComputerDetailsPage = function (invokeEvent) {
        WinJS.Navigation.navigate("/pages/computerdetails/computerdetails.html", {
            indexInComputersList: invokeEvent.detail.itemIndex
        });
    }

    var startTimer = function () {
        var tabataTemplate = document.getElementById("tabata-template-container").winControl;
        var basicTabata = Data.getBasicTabata();
        var contentHolder = document.getElementById("content");
        tabataTemplate.render(basicTabata, contentHolder);

        var intervals = basicTabata.intervals;

        var workingTime = basicTabata.work;
        var intervalID = 0;

        var startButton = document.getElementById("start");

        startButton.addEventListener("click", function () {
            innerCycle();
        });

        startButton.click();
        for (var i = 0; i < intervals - 1; i++) {
            //WinJS.UI.S
            clickButton();
        }

        function clickButton() {
            setTimeout(function () {
                startButton.click()
            }, 21000);
        }


        function innerCycle() {
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
        }


    
    }

    WinJS.Utilities.markSupportedForProcessing(goToComputerDetailsPage);

    WinJS.Namespace.define("HomeCodeBehind", {
        //callLoadComputers: function () {
        //    ViewModels.loadComputers();
        //},

        startTimer:startTimer,

        //goToComputerDetailsPage: goToComputerDetailsPage
    })
})();