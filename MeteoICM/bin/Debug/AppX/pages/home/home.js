(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var output = document.getElementById("resultOutput");
            var netinfo = Windows.Networking.Connectivity.NetworkInformation;
            var downloading = false;

            if (netinfo.getInternetConnectionProfile() != null) {
                output.innerHTML += "<p> MASZ POŁĄCZENIE Z INTERNETEM </p>";
                output.innerHTML += "<div id='mapa'><img src='images/wojewodztwa.png'></div>"
            }
            else {
                output.innerHTML += "<p> Nie ma neta ;(( </p>";
            }


            netinfo.onnetworkstatuschanged = function () {
                if (netinfo.getInternetConnectionProfile() != null) {
                    output.innerHTML += "<p> MASZ POŁĄCZENIE Z INTERNETEM </p>";
                }
                else {
                    output.innerHTML += "<p> Nie ma neta ;(( </p>";
                }
            };

            var wojewodztwa = [{
                woj: 'pomorskie',
                left: 173,
                top: 1,
                width: 152,
                height: 125
            }, {
                woj: 'warmińsko-mazurskie',
                left: 327,
                top: 44,
                width: 168,
                height: 102
            }, {
                woj: 'zachodnio-pomorskie',
                left: 16,
                top: 54,
                width: 143,
                height: 124
            }, {
                woj: 'podlaskie',
                left: 501,
                top: 79,
                width: 115,
                height: 171
            }, {
                woj: 'lubuskie',
                left: 26,
                top: 193,
                width: 89,
                height: 141
            }, {
                woj: 'wielkopolskie',
                left: 123,
                top: 215,
                width: 130,
                height: 123
            }, {
                woj: 'mazowieckie',
                left: 387,
                top: 167,
                width: 106,
                height: 205
            }, {
                woj: 'kujawsko-pomorskie',
                left: 206,
                top: 147,
                width: 138,
                height: 64
            }, {
                woj: 'łódzkie',
                left: 277,
                top: 285,
                width: 104,
                height: 101
            }, {
                woj: 'dolnośląskie',
                left: 56,
                top: 345,
                width: 140,
                height: 70
            }, {
                woj: 'lubelskie',
                left: 499,
                top: 289,
                width: 121,
                height: 151
            }, {
                woj: 'opolskie',
                left: 203,
                top: 395,
                width: 59,
                height: 81
            }, {
                woj: 'śląskie',
                left: 268,
                top: 399,
                width: 62,
                height: 156
            }, {
                woj: 'świętokrzyskie',
                left: 354,
                top: 389,
                width: 133,
                height: 69
            }, {
                woj: 'małopolskie',
                left: 332,
                top: 462,
                width: 121,
                height: 111
            }, {
                woj: 'podkarpackie',
                left: 458,
                top: 459,
                width: 109,
                height: 113
            }];

            $('#mapa').click(function (e) {
                e.preventDefault();
                var offset_t = $(this).offset().top - $(window).scrollTop();
                var offset_l = $(this).offset().left - $(window).scrollLeft();

                var left = Math.round((e.clientX - offset_l));
                var top = Math.round((e.clientY - offset_t));
                test(left, top);
                //   alert("Left: " + left + " Top: " + top);


            });

            var test = function (left, top) {
                for (var i = 0; i < wojewodztwa.length; i++) {
                    if (left < wojewodztwa[i].left + wojewodztwa[i].width && left > wojewodztwa[i].left && top < wojewodztwa[i].top + wojewodztwa[i].height && top > wojewodztwa[i].top) {
                        var woj = wojewodztwa[i];
                        output.innerHTML += "<p> klikles wojewodztwo: " + woj.woj + "</p>";
                    }

                }
            };


            var calcButton = document.getElementById("calcButton");
            calcButton.addEventListener("click", this.buttonClickHandler, false);



        },

        buttonClickHandler: function (eventInfo) {
            var output = document.getElementById("resultOutput");
            output.innerHTML += "<p> klikniecie buttona</p>";
        },
    });
})();
