// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/met/met.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var applicationData = Windows.Storage.ApplicationData.current;
            var roamingSettings = applicationData.roamingSettings;
            var rom = roamingSettings.values["legenda"];
            console.log(rom);
            var mia = options.miasto;
            var row = options.row;
            var col = options.col;

            var leg = document.getElementById("legenda");
            var urlobrazka = "<img src='http://www.meteo.pl/um/metco/leg_um_pl_20120615.png'>";
            var safe = window.toStaticHTML(urlobrazka);
            if (rom) {
                leg.innerHTML += safe;
            }

            //obliczanie daty
            var mydate = new Date();
            var year = mydate.getYear();
            var hour = mydate.getHours();
            if (year < 1000) {
                year += 1900;
            }

            var day = mydate.getDay();
            var month = mydate.getMonth();
            var daym = mydate.getDate();
            if (daym < 10) {
                daym = "0" + daym;
            }
            if (month < 10) {
                month = month + 1;
                month = "0" + month;
            }
            if (hour < 10) {
                hour = "0" + hour;
            }
            var data = year + month + daym + "00";
            /*if (hour >= 0 && hour < 6) {
                data = year + month + daym + "00";
                console.log(data);
            }
            if (hour >= 6 && hour < 12) {
                data = year + month + daym + "06";
                console.log(data);
            }
            if (hour >= 12 && hour < 18) {
                data = year + month + daym + "12";
                console.log(data);
            }
            else {
                data = year + month + daym + "18";
                console.log(data);
            }*/
            //koniec obliczania daty


            var out = document.getElementById("res");
            var gora = document.getElementById("nag");
            //var url = "<img src='http://www.meteo.pl/um/metco/mgram_pict.php?ntype=0u&fdate=" + data + "&row=" + row + "&col=" + col + "&lang=pl" + "'>";
            //var url = "<img src='http://www.meteo.pl/um/metco/mgram_pict.php?ntype=0u&fdate=" + "2014051006" + "&row=" + row + "&col=" + col + "&lang=pl" + "'>";
            var url = "<img src='http://www.meteo.pl/um/metco/mgram_pict.php?ntype=0u&fdate=" + data + "&row=" + row + "&col=" + col + "&lang=pl" + "'>";
            console.log(url);
            var safeData = window.toStaticHTML(url);
            out.innerHTML += safeData;

            var naglowek = "Prognoza pogody dla miasta: " + options.miapl;
            gora.innerText += naglowek;
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
