(function () {

    var applicationData = Windows.Storage.ApplicationData.current;

    function initialize() {
        applicationData.addEventListener("datachanged", datachangeHandler);
    }

    function dataChangeHandler(eventArgs) {
        // TODO: Refresh your data
    }
    var roamingSettings = applicationData.roamingSettings;
    var roamingFolder = applicationData.roamingFolder;

    // Simple setting

    var settingName = "exampleSetting";
    var settingValue = "Hello World";

    roamingSettings.values[settingName] = settingValue;
    //or



    function settingsWriteSetting() {
        roamingSettings.values[settingName] = settingValue;
    }

    function settingsDeleteSetting() {
        roamingSettings.values.remove(settingName);
    }

    // store the data
    var storeData = function (data) {

        var container = roamingSettings.createContainer("workoutsContainer",
                                                            Windows.Storage.ApplicationDataCreateDisposition.Always);

        for (var i = 0; i < data.length; i++) {
            if (roamingSettings.containers.hasKey("workoutsContainer")) {

                var woDetails = new Windows.Storage.ApplicationDataCompositeValue();
                woDetails["name"] = data[i].name;
                woDetails["intervals"] = data[i].intervals;
                woDetails["rest"] = data[i].rest;
                woDetails["work"] = data[i].work;
                woDetails["prepare"] = data[i].prepare;
                roamingSettings.containers.lookup("workoutsContainer").values["workout"+i] = woDetails;
            }
        }
    }

    var getRoamingData = function () {
        var hasContainer = roamingSettings.containers.hasKey("workoutsContainer");
        if (hasContainer) {
            var roamingData=roamingSettings.containers.lookup("workoutsContainer").values;
            return roamingData;
        }
    }
    WinJS.Utilities.markSupportedForProcessing(storeData);
    WinJS.Utilities.markSupportedForProcessing(getRoamingData);

    WinJS.Namespace.define("RoamingCodeBehind", {
        storeData: storeData,
        getRoamingData:getRoamingData
    });

})();


