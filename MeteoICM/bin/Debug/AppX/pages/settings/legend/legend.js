(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;
    var app = WinJS.Application;
    var ui = WinJS.UI;


    ui.Pages.define("/pages/settings/legend/legend.html", {
        ready: function (element, options) {


            var toggle = document.getElementById("toggle");
            toggle.addEventListener("change", this.toggleHandler);


        },
        unload: function () {

        },
        toggleHandler: function (element) {
            var toggle = document.getElementById("toggle");
            console.log(toggle.checked);
            console.log("zmieniłem");
        }

    });





})();