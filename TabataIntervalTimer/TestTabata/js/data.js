(function () {

    var tabata = {
        prepare: 0,
        work: 0,
        rest: 0,
        intervals: 0
        }
    

    var ObservableTabata = WinJS.Binding.define(tabata);

    var getTabata = function (intervals, rest, work, prepare) {
        return new ObservableTabata({
            intervals: intervals,
            rest: rest,
            work: work,
            prepare: prepare
        });
    }

    var basicTabata = function () {
        var basic = getTabata(8, 10, 20, 10);
        return basic;
    }

    WinJS.Namespace.define("Data", {
        getTabata: getTabata,
        basicTabata:basicTabata
        }
    );
})();