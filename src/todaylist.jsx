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

  p.fetchCSV = function () {

    var d = new $.Deferred();

    $.ajax({
      url: "http://support.moba8.net/test/maeda/src/index.php?url=http://support.moba8.net/test/maeda/src/load.php",
      type: "get",
      //dataType: "jsonp",
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
      console.dir(d);
      var array = JSON.parse(d);
      _this.generateJson(array);
      w.trigger("start_view");
    });

  };

  p.generateJson = function (a) {

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var today = month + "月" + day + "日";
    var array = a;

    for (var i = 0, l = array.length; i < l; i++) {

      if (array[i][0] === today) {
        this.json.date = array[i][0];
        this.json.pid = array[i][1];
        this.json.pname = array[i][2];
      }

    }

  }

  p.init = function () {

    var c = this.getCookie();

    //if (c._m8_daily_visited !== "true") {
      this.extractData();
      this.setCookie();
    //}

  };

})(window, document, window.today.list = window.today.list || {});


function makeView(j) {

/*
  var data = [
    {date: "2015-03-11", pid: "xxxxxxxxxxxxxxx", pname: "xxxxxxxxxxx"}
  ];
*/
  var data = [j];

  var ProgramBox = React.createClass({
    style: {
      div: {
        "font-family": "メイリオ",
        "color": "#0288D1",
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "margin": "auto",
        "opacity": 1,
        "z-index": 1000,
        "width": "300px",
        "height": "120px",
        "background-color": "#fff",
        "border": "6px solid #0277BD",
        "border-radius": "2px",
        "padding": "16px",
        "box-shadow": "0 0 6px #666"
      },
      title: {
        "margin": "0",
        "font-size": "18px",
        "text-align": "center"
      }
    },
    render: function () {
      return (
        <div style={this.style.div} className="programBox">
          <h2 style={this.style.title}>本日のおすすめプログラム</h2>
          <ProgramList data={this.props.data} />
          <ClearButton />
        </div>
      );
    }
  });

  var ProgramList = React.createClass({
    render: function () {
      var style = {
        ul: {
          "margin-top": "2px",
          "text-align": "center",
          "font-size": "16px",
          "font-weight": "bold",
          "list-style-type": "none",
          "padding-left": 0
        },
        date: {
          "font-size": "14px"
        },
        name: {
          "text-align": "left",
          "margin-top": "8px"
        }
      };
      var programNodes = this.props.data.map(function (p) {
        return (
          <ul style={style.ul}>
            <li style={style.date}>【{p.date}】</li>
            <li style={style.name}><a href='http://moba8.net/a8v2/asProgramDetailAction.do?insId={p.pid}'>{p.pname}</a></li>
          </ul>
        );
      });
      return (
        <div>
          {programNodes}
        </div>
      );
    }
  });

  var ClearButton = React.createClass({
    clearBox: function (e) {
      e.preventDefault();
      var program_box = $(".programBox");
      program_box.fadeOut(500);
    },
    style: {
      "width": "32px",
      "line-height": "32px",
      "vertical-align": "middle",
      "background-color": "#fff",
      "border": "none",
      "cursor": "pointer",
      "border-radius": "2px",
      "font-size": "20px",
      "font-weight": "bold",
      "position": "absolute",
      "top": "4px",
      "right": "4px",
      "opacity": 1,
      "z-index": 1001,
      "color": "#455A64"
    },
    render: function () {
      return (
        <button style={this.style} className="clearButton" onClick={this.clearBox}>
          ×
        </button>
      );
    }
  });

  React.render(
    <ProgramBox data={data} />,
    document.getElementsByTagName('body')[0]
  );

};

(function () {

  var w = $(window);
  today.list.init();
  w.on("start_view", function () {
    var json = today.list.json;
    setTimeout(function () {
      makeView(json)
    }, 1000);
  });

} ());
