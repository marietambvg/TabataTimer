(function () {
    var TabataModel = WinJS.Class.define(function (name, intervals, rest, work, prepare) {
        
        this.name = name;
        this.intervals = intervals;
        this.rest= rest;
        this.restleft= rest;
        this.work= work;
        this.workleft= work;
        this.prepare= prepare
    }, {
        name:"",
        intervals: 8,
        rest: 10,
        restleft: 10,
        work: 5,
        workleft: 5,
        prepare: 10
    })

    WinJS.Namespace.define("Models", {
        TabataModel: TabataModel
    })
})()