(function () {

    var tabatas = [
            new Models.TabataModel("standard triple",12,10,20,10),
            new Models.TabataModel("standard half",4,10,20,10),
            new Models.TabataModel("ironman half",4,10,50,10),
            new Models.TabataModel("ironman triple",12,10,50,10),
    ]

    var getTabatas = function () {
        return tabatas;
    }

    var getBasicTabata = function () {
        return  new Models.TabataModel("standard",8,10,20,10)
    }

    var addTabata = function (tabataModel) {
        tabatas.push(tabataModel);
    }

    WinJS.Namespace.define("Data", {
        getTabatas: getTabatas,
        addTabata: addTabata,
        getBasicTabata: getBasicTabata
    });
})()