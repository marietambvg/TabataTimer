(function () {

    var tabata = {
        intervals: 0,
        rest: 0,
        restleft: 0,
        work: 0,
        workleft: 0,
        prepare: 0
        }
    

    var ObservableTabata = WinJS.Binding.define(tabata);

    var getTabata = function (intervals, rest, work, prepare) {
        return new ObservableTabata({
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
            intervals: 3,
            rest: 10,
            restleft: 10,
            work: 5,
            workleft: 5,
            prepare: 10
        });
    }

    WinJS.Namespace.define("Data", {
        getTabata: getTabata,
        getBasicTabata:getBasicTabata
        }
    );
})();