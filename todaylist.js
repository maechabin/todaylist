(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    var clear_btn = $("<button>").html("��").css({
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
    }).text("�����Τ��������ץ�����");

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNoaWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHRvZGF5ID0gdG9kYXkgfHwge307XHJcbnRvZGF5Lmxpc3QgPSB0b2RheS5saXN0IHx8IHt9O1xyXG5cclxuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBwLCB1bmRlZmluZWQpIHtcclxuXHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHAuc2V0Q29va2llID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB3ZWVrX2FyciA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcclxuICAgIHZhciBtb250aF9hcnIgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgZGF0ZSA9IHtcclxuICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBtb250aDogZC5nZXRNb250aCgpICxcclxuICAgICAgZGF5OiBkLmdldERhdGUoKSxcclxuICAgICAgd2VlazogZC5nZXREYXkoKVxyXG4gICAgfTtcclxuICAgIHZhciBleHBpcmUgPSB3ZWVrX2FycltkYXRlLndlZWtdICsgXCIsIFwiICsgZGF0ZS5kYXkgKyBcIiBcIiArIG1vbnRoX2FycltkYXRlLm1vbnRoXSArIFwiIFwiICsgZGF0ZS55ZWFyICsgXCIgMjM6NTk6NTkgR01UXCI7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBcIl9tOF9kYWlseV92aXNpdGVkPXRydWU7ZXhwaXJlcz1cIiArIGV4cGlyZTtcclxuICAgIC8vIFwiVHVlLCAxMCBNYXIgMjAxNSAyMzo1OTo1OSBHTVRcIlxyXG5cclxuICB9O1xyXG5cclxuICBwLmdldENvb2tpZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICB2YXIgYWxsY29va2llcyA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgIHZhciBjb29raWVzLCBjb29raWU7XHJcblxyXG4gICAgaWYgKGFsbGNvb2tpZXMgIT09IFwiXCIpIHtcclxuXHJcbiAgICAgIGNvb2tpZXMgPSBhbGxjb29raWVzLnNwbGl0KFwiOyBcIik7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY29va2llcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICByZXN1bHRbY29va2llWzBdXSA9IGNvb2tpZVsxXTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICB9O1xyXG5cclxuICBwLmV4dHJhY3Rpb25EYXRhID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIFwibGlzdC5jc3ZcIiwgZmFsc2UpO1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKCd0ZXh0L3BsYWluOyBjaGFyc2V0PWV1Yy1qcCcpO1xyXG4gICAgYWxlcnQoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblxyXG4gIH07XHJcblxyXG4gIHAubWFrZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgdmFyIGNsZWFyX2J0biA9ICQoXCI8YnV0dG9uPlwiKS5odG1sKFwi77+977+9XCIpLmNzcyh7XHJcbiAgICAgIFwid2lkdGhcIjogXCIzMnB4XCIsXHJcbiAgICAgIFwibGluZS1oZWlnaHRcIjogXCIyNHB4XCIsXHJcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcclxuICAgICAgXCJib3JkZXJcIjogXCJub25lXCIsXHJcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxyXG4gICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIycHhcIixcclxuICAgICAgXCJmb250LXNpemVcIjogXCIxOHB4XCIsXHJcbiAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBcInRvcFwiOiBcIjhweFwiLFxyXG4gICAgICBcInJpZ2h0XCI6IFwiOHB4XCIsXHJcbiAgICAgIFwib3BhY2l0eVwiOiAxLFxyXG4gICAgICBcInotaW5kZXhcIjogMTAwMVxyXG4gICAgfSk7XHJcbiAgICB2YXIgZWxlbSA9ICQoXCI8ZGl2PlwiKS5jc3Moe1xyXG4gICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcclxuICAgICAgXCJ0b3BcIjogMCxcclxuICAgICAgXCJib3R0b21cIjogMCxcclxuICAgICAgXCJsZWZ0XCI6IDAsXHJcbiAgICAgIFwicmlnaHRcIjogMCxcclxuICAgICAgXCJtYXJnaW5cIjogXCJhdXRvXCIsXHJcbiAgICAgIFwib3BhY2l0eVwiOiAxLFxyXG4gICAgICBcInotaW5kZXhcIjogMTAwMCxcclxuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCIsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxyXG4gICAgICBcImJvcmRlclwiOiBcIjVweCBzb2xpZCAjOUNDQzY1XCIsXHJcbiAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjJweFwiLFxyXG4gICAgICBcInBhZGRpbmdcIjogXCIxNnB4XCIsXHJcbiAgICAgIFwiYm94LXNoYWRvd1wiOiBcIjAgMCA1cHggIzY2NlwiXHJcbiAgICB9KS50ZXh0KFwi77+977+977+977+977+9zqTvv73vv73vv73vv73vv73vv73vv73vv73Xpe+/ve+/ve+/ve+/ve+/vVwiKTtcclxuXHJcbiAgICBjbGVhcl9idG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoZWxlbSkuZmFkZU91dCg1MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChlbGVtKS5hcHBlbmQoY2xlYXJfYnRuKTtcclxuICAgIGJvZHkuYXBwZW5kKGVsZW0pO1xyXG5cclxuICAgIHRoaXMuc2V0Q29va2llKCk7XHJcblxyXG4gIH07XHJcblxyXG4gIHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgYyA9IHRoaXMuZ2V0Q29va2llKCk7XHJcbiAgICBjb25zb2xlLmRpcihjKTtcclxuICAgIHRoaXMuZXh0cmFjdGlvbkRhdGEoKTtcclxuXHJcbiAgICAvL2lmIChjLl9tOF9kYWlseV92aXNpdGVkICE9PSBcInRydWVcIikge1xyXG4gICAgICB0aGlzLm1ha2VMaXN0KCk7XHJcbiAgICAvL31cclxuXHJcbiAgfTtcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy50b2RheS5saXN0ID0gd2luZG93LnRvZGF5Lmxpc3QgfHwge30pO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gIHRvZGF5Lmxpc3QuaW5pdCgpO1xyXG59LCAxMDAwKTtcclxuIl19
