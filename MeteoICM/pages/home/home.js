(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

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
            var data = year + "-" + month + "-" + daym;

            //komentarz synoptyka
            var test = "http://www.meteo.pl/komentarze/index1.php?date=" + data;
            var kom = document.getElementById("webview");
            //var fram = '<iframe src="' + test + '"></iframe>';
            //console.log(fram);
            //var safeData = window.toStaticHTML(fram);


            kom.navigate(test);

            //var fram = "<p>testowy akapit iframe</p>";
            //kom.innerHTML += fram;
            //kom.innerHTML += safeData;

           /* WinJS.xhr({ url: test })
           .done(function complete(result) {

               // Report download.
               console.log("xhr");
               //var title = result.responseText;
               var title = result.responseText.match(/<div style="padding: 15px; background-color:#fff; background-color:rgba\(255,255,255,0.6\); margin:10px; border-radius: 10px;">(\s|.)*<\/div>/);
              // title = title.toString();
               console.log(title);
               
               var kom = document.getElementById("komentarz");
               kom.innerHTML += title;

           });*/



               var output = document.getElementById("resultOutput");
               var netinfo = Windows.Networking.Connectivity.NetworkInformation;
               var downloading = false;



               if (netinfo.getInternetConnectionProfile() != null) {
                   //output.innerHTML += "<p> MASZ POŁĄCZENIE Z INTERNETEM </p>";
                   output.innerHTML += "<div id='mapa'><img src='images/wojewodztwa.png'></div>"
               }
               else {
                   output.innerHTML += "<p> Nie ma neta ;(( </p>";
               }


               netinfo.onnetworkstatuschanged = function () {
                   if (netinfo.getInternetConnectionProfile() != null) {
                       //output.innerHTML += "<p> MASZ POŁĄCZENIE Z INTERNETEM </p>";
                       // output.innerHTML += "<div id='mapa'><img src='images/wojewodztwa.png'></div>"
                       //window.location.reload();
                   }
                   else {
                       output.innerHTML += "<p> Nie ma neta ;(( </p>";
                       var msgpopup = new Windows.UI.Popups.MessageDialog("Aplikacja wymaga połączenia z internetem, aktualny brak dostępu do internetu uniemożliwia pracę aplikacji. Sprawdź swoje połączenie.", "Uwaga !");
                       msgpopup.showAsync();
                   }
               };

               var wojewodztwa = [{
                   miasto: 'Gda%F1sk',
                   miastopl: 'Gdańsk',
                   row: 346,
                   col: 210,
                   woj: 'pomorskie',
                   left: 173,
                   top: 1,
                   width: 152,
                   height: 125
               }, {
                   miasto: 'Olsztyn',
                   miastopl: 'Olsztyn',
                   row: 363,
                   col: 240,
                   woj: 'warmińsko-mazurskie',
                   left: 327,
                   top: 44,
                   width: 168,
                   height: 102
               }, {
                   miasto: 'Szczecin',
                   miastopl: 'Szczecin',
                   row: 370,
                   col: 142,
                   woj: 'zachodnio-pomorskie',
                   left: 16,
                   top: 54,
                   width: 143,
                   height: 124
               }, {
                   miasto: 'Bia%B3ystok',
                   miastopl: 'Białystok',
                   row: 379,
                   col: 285,
                   woj: 'podlaskie',
                   left: 501,
                   top: 79,
                   width: 115,
                   height: 171
               }, {
                   miasto: 'Zielona+G%F3ra',
                   miastopl: 'Zielona Góra',
                   row: 412,
                   col: 155,
                   woj: 'lubuskie',
                   left: 26,
                   top: 193,
                   width: 89,
                   height: 141
               }, {
                   miasto: 'Pozna%F1',
                   miastopl: 'Poznań',
                   row: 400,
                   col: 180,
                   woj: 'wielkopolskie',
                   left: 123,
                   top: 215,
                   width: 130,
                   height: 123
               }, {
                   miasto: 'Warszawa',
                   miastopl: 'Warszawa',
                   row: 406,
                   col: 250,
                   woj: 'mazowieckie',
                   left: 387,
                   top: 167,
                   width: 106,
                   height: 205
               }, {
                   miasto: 'Toru%F1',
                   miastopl: 'Toruń',
                   row: 383,
                   col: 209,
                   woj: 'kujawsko-pomorskie',
                   left: 206,
                   top: 147,
                   width: 138,
                   height: 64
               }, {
                   miasto: '%A3%F3d%BC',
                   miastopl: 'Łódź',
                   row: 418,
                   col: 223,
                   woj: 'łódzkie',
                   left: 277,
                   top: 285,
                   width: 104,
                   height: 101
               }, {
                   miasto: 'Wroc%B3aw',
                   miastopl: 'Wrocław',
                   row: 436,
                   col: 181,
                   woj: 'dolnośląskie',
                   left: 56,
                   top: 345,
                   width: 140,
                   height: 70
               }, {
                   miasto: 'Lublin',
                   miastopl: 'Lublin',
                   row: 432,
                   col: 277,
                   woj: 'lubelskie',
                   left: 499,
                   top: 289,
                   width: 121,
                   height: 151
               }, {
                   miasto: 'Opole',
                   miastopl: 'Opole',
                   row: 449,
                   col: 196,
                   woj: 'opolskie',
                   left: 203,
                   top: 395,
                   width: 59,
                   height: 81
               }, {
                   miasto: 'Katowice',
                   miastopl: 'Katowice',
                   row: 461,
                   col: 215,
                   woj: 'śląskie',
                   left: 268,
                   top: 399,
                   width: 62,
                   height: 156
               }, {
                   miasto: 'Kielce',
                   miastopl: 'Kielce',
                   row: 443,
                   col: 244,
                   woj: 'świętokrzyskie',
                   left: 354,
                   top: 389,
                   width: 133,
                   height: 69
               }, {
                   miasto: 'Krak%F3w',
                   miastopl: 'Kraków',
                   row: 466,
                   col: 232,
                   woj: 'małopolskie',
                   left: 332,
                   top: 462,
                   width: 121,
                   height: 111
               }, {
                   miasto: 'Rzesz%F3w',
                   miastopl: 'Rzeszów',
                   row: 465,
                   col: 269,
                   woj: 'podkarpackie',
                   left: 458,
                   top: 459,
                   width: 109,
                   height: 113
               }];

               $('#mapa').click(function (e) {
                   var offset_t = $(this).offset().top - $(window).scrollTop();
                   var offset_l = $(this).offset().left - $(window).scrollLeft();

                   var left = Math.round((e.clientX - offset_l));
                   var top = Math.round((e.clientY - offset_t));
                   test(left, top);
               });

               var test = function (left, top) {
                   for (var i = 0; i < wojewodztwa.length; i++) {
                       if (left < wojewodztwa[i].left + wojewodztwa[i].width && left > wojewodztwa[i].left && top < wojewodztwa[i].top + wojewodztwa[i].height && top > wojewodztwa[i].top) {
                           var woj = wojewodztwa[i];
                        
                           //output.innerHTML += "<p> klikles wojewodztwo: " + woj.woj + "</p>";
                           var result = document.getElementById("woj");
                           result.innerHTML = woj.woj;
                           //console.log(woj.woj);
                           var woje = woj.woj;
                           var mia = woj.miasto;
                           var row = woj.row;
                           var col = woj.col;
                           var miapl = woj.miastopl;
                           var myData = {
                               firstName: woje,
                               miasto: mia,
                               row: row,
                               col: col,
                               miapl: miapl
                           };
                           WinJS.Navigation.navigate('/pages/met/met.html', myData);
                       }

                   }
               };


            

           

           },
            
        
    });
})();
