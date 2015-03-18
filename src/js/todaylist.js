var today = today || {};
today.list = today.list || {};

(function (window, document, p, undefined) {

  "use strict";

  p.json = {};

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

    // Cookieの有効期限の形式　"Tue, 10 Mar 2015 23:59:59 GMT"
    var expire = week_arr[date.week] + ", " + date.day + " " + month_arr[date.month] + " " + date.year + " 14:59:59 GMT";
    document.cookie = "_m8_daily_visited=true;expires=" + expire;

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

  p.fetchCSV = function () {

    var protocol = location.protocol;
    var d = new $.Deferred();

    $.ajax({
      //url: "http://localhost:8888/recommend/src/php/index.php?url=http://localhost:8888/recommend/src/php/load.php",
      url: protocol + "//support.moba8.net/recommend/src/php/index.php?url=http://support.moba8.net/recommend/src/php/load.php",
      type: "get",
      processData: false,
      contentType: false,
      success: d.resolve,
      error: d.reject
    });

    return d.promise();

  };

  p.extractData = function () {

    var _this = this;
    var w = $(window);

    this.fetchCSV().done(function (d) {

      var array = d.split("\n");
      //console.log(array);
      _this.generateJson(array);
      w.trigger("start_view");

    }).fail(function () {
      console.log("Ajax error !!");
    });

  };

  p.generateJson = function (a) {

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var today = month + "月" + day + "日";
    var array = a;

    for (var i = 0, l = array.length; i < l; i++) {

      var data = array[i].split(",");

      if (data[0] === today) {
        this.json.date = data[0];
        this.json.pid = data[1];
        this.json.pname = data[2];
      }

    }

  };

  p.init = function () {

    var c = this.getCookie();

    if (c._m8_daily_visited !== "true") {
      this.extractData();
      this.setCookie();
    }

  };

} (window, document, window.today.list = window.today.list || {}));


(function (window, document, p, undefined) {

  "use strict";

  p.makeView = function (j) {

    //渡すデータの形式
    //var data = [
    //  {date: "2015年3月11日", pid: "xxxxxxxxxxxxxxx", pname: "xxxxxxxxxxx"}
    //];
    var data = [j];

    var ProgramBox = React.createClass({displayName: "ProgramBox",
      style: {
        div: {
          "font-family": "メイリオ",
          "color": "#546E7A",
          "position": "absolute",
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "margin": "auto",
          "opacity": 1,
          "z-index": 1000,
          "width": "90%",
          "max-width": "500px",
          "min-width": "300px",
          "height": "160px",
          "background-color": "#fff",
          "border": "6px solid #c62828",
          "border-radius": "3px",
          "padding-bottom": "16px",
          "box-shadow": "0 2px 4px #111"
        },
        title: {
          "margin": "0",
          "line-height": "28px",
          "font-size": "18px",
          "text-align": "center",
          "background-color": "#c62828",
          "color": "#fff",
          "padding-bottom": "6px"
        },
        p: {
          "font-size": "12px",
          "margin-bottom": 0,
          "position": "absolute",
          "bottom": 0,
          "left": "16px"
        }
      },
      render: function () {
        return (
          React.createElement("div", {style: this.style.div, className: "programBox"},
            React.createElement("h2", {style: this.style.title}, "本日のおすすめプログラム"),
            React.createElement(ProgramList, {data: this.props.data}),
            React.createElement(ClearButton, null),
            React.createElement("p", {style: this.style.p}, "※こちらの情報は1日1回のみの表示となります。")
          )
        );
      }
    });

    var ProgramList = React.createClass({displayName: "ProgramList",
      render: function () {
        var style = {
          ul: {
            "margin-top": "2px",
            "text-align": "center",
            "font-size": "16px",
            "font-weight": "bold",
            "list-style-type": "none",
            "padding-left": 0,
            "margin-left": 0
          },
          date: {
            "margin-top": "8px",
            "font-size": "14px"
          },
          name: {
            "text-align": "left",
            "margin": "4px 16px 0",
            "line-height": "1.4em"
          },
          a: {
            "color": "#FF3D00",
            "text-decoration": "underline"
          }
        };
        var programNodes = this.props.data.map(function (p) {
          var url = '/a8v2/asProgramDetailAction.do?insId=' + p.pid + "&r=todaylist";
          var analytics = "ga('send', 'event', 'login-top', 'click', 'today-osusume-" + p.pid + "');";
          return (
            React.createElement("ul", {style: style.ul},
              React.createElement("li", {style: style.date}, "【", p.date, "】"),
              React.createElement("li", {style: style.name}, React.createElement("a", {href: url, style: style.a, onclick: analytics}, p.pname))
            )
          );
        });
        return (
          React.createElement("div", null,
            programNodes
          )
        );
      }
    });

    var ClearButton = React.createClass({displayName: "ClearButton",
      clearBox: function (e) {
        e.preventDefault();
        var program_box = $(".programBox");
        program_box.fadeOut(500);
      },
      style: {
        "font-family": "'Helvetica Neue',Helvetica,Arial,sans-serif",
        "width": "28px !important",
        "height": "28px !important",
        "margin": 0,
        "pading": 0,
        "vertical-align": "middle",
        "line-height": "28px",
        "text-align": "center",
        "background-color": "#fff",
        "border": "none",
        "cursor": "pointer",
        "border-radius": "10px",
        "font-size": "18px",
        "font-weight": "bold",
        "position": "absolute",
        "top": "0",
        "right": "0",
        "z-index": 1001,
        "color": "#455A64",
        "box-shadow": "inset 0 0 1px #333"
      },
      render: function () {
        return (
          React.createElement("button", {style: this.style, className: "clearButton", onClick: this.clearBox},
            "×"
          )
        );
      }
    });

    if (data[0].date !== undefined) {
      React.render(
        React.createElement(ProgramBox, {data: data}),
        document.getElementById('todaylist')
      );
    }

  };

} (window, document, window.today.list = window.today.list || {}));


(function ($, window, document, undefined) {

  $(document).ready(function () {

    var w = $(window);
    today.list.init();
    w.on("start_view", function () {
      var json = today.list.json;
      setTimeout(function () {
        today.list.makeView(json)
      }, 500);
    });

  });

} (jQuery, window, document));
