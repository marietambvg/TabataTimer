(function () {

    var tabata = {
        tabatas: 0,
        intervals: 0,
        rest: 0,
        restleft: 0,
        work: 0,
        workleft: 0,
        prepare: 0
        }
    

    var ObservableTabata = WinJS.Binding.define(tabata);

    var getTabata = function (tabatas, intervals, rest, work, prepare) {
        return new ObservableTabata({
            tabatas: tabatas,
            intervals: intervals,
            rest: rest,
            restleft:rest,
            work: work,
            workleft:work,
            prepare: prepare
        });
    }

    var getBasicTabata = function () {
        return new ObservableTabata({
            tabatas: 2,
            intervals: 3,
            rest: 3,
            restleft: 3,
            work: 3,
            workleft: 3,
            prepare: 3
        });
    }

    WinJS.Namespace.define("Data", {
        getTabata: getTabata,
        getBasicTabata:getBasicTabata
        }
    );
})();