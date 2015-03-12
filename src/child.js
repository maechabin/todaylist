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

    var d = new $.Deferred();

    $.ajax({
      url: "src/index.php",

      processData: false,
      contentType: false,
      success: d.resolve,
      error: d.reject
    });

    return d.promise();

  };

  p.makeData = function () {

    this.extractionData().done(function (d) {
      console.log(d);
    });
    this.setCookie();

  };

  p.init = function () {

    var c = this.getCookie();

    //if (c._m8_daily_visited !== "true") {
      this.makeData();
    //}

  };

})(window, document, window.today.list = window.today.list || {});




window.onload = setTimeout(function () {

  var data = [
    {date: "2015-03-11", pid: "m00000000475001", pname: "モバハチ【Moba8.net】無料会員募集プログラム"}
  ];

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
      console.dir(program_box);
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

  today.list.init();

}, 1000);
