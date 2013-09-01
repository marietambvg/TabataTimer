(function () {

    var tabatas = [
            new Models.TabataModel("standard triple",12,10,20,10),
            new Models.TabataModel("standard half",4,10,20,10),
            new Models.TabataModel("ironman half",4,10,50,10),
            new Models.TabataModel("ironman triple", 12, 10, 50, 10),
            new Models.TabataModel("quick test", 2, 3, 3, 3),
    ]

    var getTabatas = function () {
        return tabatas;
    }

    var getBasicTabata = function () {
        return  new Models.TabataModel("standard",8,10,20,10)
    }

    var getCustomTabata = function (name,intervals,rest,work,prepare) {
        return new Models.TabataModel(name, intervals, rest, work, prepare)
    }

    var addTabata = function (tabataModel) {
       // if(tabata
        tabatas.push(tabataModel);
    }

    WinJS.Namespace.define("Data", {
        getTabatas: getTabatas,
        addTabata: addTabata,
        getBasicTabata: getBasicTabata,
        getCustomTabata:getCustomTabata
    });
})()