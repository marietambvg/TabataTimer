(function () {

    var restUrl = "/sounds/ring.mp3";
    var workUrl = "/sounds/ring.mp3";

    var backgroundMusic = [];
    var getBackgroundMusic = function () {

        if (backgroundMusic.length > 0) {
            return backgroundMusic[0]
        }
        else return "";
    }
    //var backgroundMusic = "";

    var pickMusicFile = function () {

        // Verify that we are currently not snapped, or that we can unsnap to open the picker
        var currentState = Windows.UI.ViewManagement.ApplicationView.value;
        if (currentState === Windows.UI.ViewManagement.ApplicationViewState.snapped &&
            !Windows.UI.ViewManagement.ApplicationView.tryUnsnap()) {
            // Fail  if we can't unsnap
            Windows.UI.Popups.MessageDialog("Sorry! You can't do this from snap view state").showAsync();

            return;
        }

        // Create the picker object and set options
        var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
        openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
        openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.musicLibrary;

        openPicker.fileTypeFilter.replaceAll([".mp3", ".avi", ".mp4"]);

        // Open the picker for the user to pick a file
        openPicker.pickSingleFileAsync().then(function (file) {
            if (file) {
                Windows.UI.Popups.MessageDialog("You successfuly picked file!").showAsync();
                backgroundMusic.push(URL.createObjectURL(file));


            } else {
                // The picker was dismissed with no selected file
                WinJS.log && WinJS.log("Operation cancelled.", "sample", "status");
            }
        });
    }

    WinJS.Utilities.markSupportedForProcessing(pickMusicFile);
    WinJS.Utilities.markSupportedForProcessing(getBackgroundMusic);

    WinJS.Namespace.define("MusicSetter", {
        restUrl: restUrl,
        workUrl: workUrl,
        backgroundMusic: getBackgroundMusic,
        pickMusicFile: pickMusicFile
    });

})();
