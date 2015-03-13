var today = today || {};
today.list = today.list || {};

(function (window, document, p, undefined) {

 "use strict";

 p.setCookie = function () {

 var week_arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var month_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 var d = new Date();
 var date = {
 year: d.getFullYear(),
 month: d.getMonth() ,
 day: d.getDate(),
 week: d.getDay()
 };
 var expire = week_arr[date.week] + ", " + date.day + " " + month_arr[date.month] + " " + date.year + " 23:59:59 GMT";
 document.cookie = "_m8_daily_visited=true;expires=" + expire;
 // "Tue, 10 Mar 2015 23:59:59 GMT"

 };

 p.getCookie = function () {

 var result = [];
 var allcookies = document.cookie;
 var cookies, cookie;

 if (allcookies !== "") {

 cookies = allcookies.split("; ");
 for (var i = 0, l = cookies.length; i < l; i++) {
 cookie = cookies[i].split("=");
 result[cookie[0]] = cookie[1];
 }

 }

 return result;

 };

 p.extractionData = function () {

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "list.csv", false);
 xhr.send();
 xhr.overrideMimeType('text/plain; charset=euc-jp');
 alert(xhr.responseText);

 };

 p.makeList = function () {

 var body = $(document.body);
 var clear_btn = $("<button>").html("あ").css({
 "width": "32px",
 "line-height": "24px",
 "background-color": "#fff",
 "border": "none",
 "cursor": "pointer",
 "border-radius": "2px",
 "font-size": "18px",
 "position": "absolute",
 "top": "8px",
 "right": "8px",
 "opacity": 1,
 "z-index": 1001
 });
 var elem = $("<div>").css({
 "position": "absolute",
 "top": 0,
 "bottom": 0,
 "left": 0,
 "right": 0,
 "margin": "auto",
 "opacity": 1,
 "z-index": 1000,
 "width": "300px",
 "height": "200px",
 "background-color": "#fff",
 "border": "5px solid #9CCC65",
 "border-radius": "2px",
 "padding": "16px",
 "box-shadow": "0 0 5px #666"
 }).text("aaa");

 clear_btn.on("click", function () {
 $(elem).fadeOut(500);
 });

 $(elem).append(clear_btn);
 body.append(elem);

 this.setCookie();

 };

 p.init = function () {

 var c = this.getCookie();
 console.dir(c);
 this.extractionData();

 //if (c._m8_daily_visited !== "true") {
 this.makeList();
 //}

 };

})(window, document, window.today.list = window.today.list || {});

window.onload = setTimeout(function () {
 today.list.init();
}, 1000);