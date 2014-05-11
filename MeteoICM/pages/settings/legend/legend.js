(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;
    var app = WinJS.Application;
    var ui = WinJS.UI;
    var applicationData = Windows.Storage.ApplicationData.current;
    var roamingSettings = applicationData.roamingSettings;

    ui.Pages.define("/pages/settings/legend/legend.html", {
        ready: function (element, options) {

            var toggle = document.getElementById("toggle").winControl;
            toggle.addEventListener("change", this.toggleHandler);
            toggle.checked = roamingSettings.values["legenda"];
        },
        unload: function () {

        },

        toggleHandler: function () {
            var toggle = document.getElementById("toggle").winControl;
            console.log(toggle.checked);
            console.log("zmieniłem");
            
            roamingSettings.values["legenda"] = toggle.checked;
        }
        

    });





})();