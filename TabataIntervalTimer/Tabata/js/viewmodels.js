(function () {
    var tabatasList = new WinJS.Binding.List([]);

    var loadTabatas = function () {
        var tabataDTOs = Data.getTabatas();

        var currentCount = tabatasList.dataSource.list.length
        tabatasList.dataSource.list.splice(0, currentCount);

        for (var i = 0; i < tabataDTOs.length; i++) {
            tabatasList.push(tabataDTOs[i]);
        }
    }

    WinJS.Namespace.define("ViewModels", {
        loadTabatas: loadTabatas,
        tabatas: tabatasList,
        addTabata: function (name, intervals, rest, work, prepare) {
            Data.addTabata(new Models.TabataModel(name, intervals, rest, work, prepare));
        }
    });
})();