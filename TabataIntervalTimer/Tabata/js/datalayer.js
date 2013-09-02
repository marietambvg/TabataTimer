/// <reference path="../roamingdata.js" />
(function () {

    var tabatas = [
        new Models.TabataModel("standard tabata", 8, 10, 20, 10),
        new Models.TabataModel("tabata triple", 12, 10, 20, 10),
        new Models.TabataModel("tabata half", 4, 10, 20, 10),
        new Models.TabataModel("ironman half", 4, 10, 50, 10),
        new Models.TabataModel("ironman triple", 12, 10, 50, 10),

    ];

    var updateRoamingStore = function () {
        RoamingCodeBehind.storeData(tabatas);
    }


    var getUpdatedTabatas = function () {


        var roamingData = RoamingCodeBehind.getRoamingData();
        if (roamingData) {
            tabatas = [];
            var currentModel;
            for (var i = 0; i < roamingData.size; i++) {
                var name = roamingData["workout" + i].name;
                var intervals = roamingData["workout" + i].intervals;
                var rest = roamingData["workout" + i].rest;
                var work = roamingData["workout" + i].work;
                var prepare = roamingData["workout" + i].prepare;
                currentModel = new Models.TabataModel(name, intervals, rest, work, prepare);
                tabatas.push(currentModel);
            }
            return tabatas;
        }
        else getTabatas;

    }


    var getTabatas = function () {
        return tabatas;
    }



    var getBasicTabata = function () {
        return new Models.TabataModel("standard", 8, 10, 20, 10)
    }

    var getTabata = function (name, intervals, rest, work, prepare) {
        return new Models.TabataModel(name, intervals, rest, work, prepare)
    }

    var addTabata = function (tabataModel) {
        // if(tabata
        tabatas.push(tabataModel);
        updateRoamingStore();
    }

    WinJS.Namespace.define("Data", {
        getTabatas: getUpdatedTabatas,
        getUpdatedTabatas: getUpdatedTabatas,
        addTabata: addTabata,
        getBasicTabata: getBasicTabata,
        getTabata: getTabata
    });
})()