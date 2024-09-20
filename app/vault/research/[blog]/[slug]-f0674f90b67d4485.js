/** @format */

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3591],
  {
    54743: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/vault/research/[blog]/[slug]",
        function () {
          return e(27886);
        },
      ]);
    },
    22030: function (n, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/faq-ico.5fa6038a.png",
        height: 114,
        width: 98,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAARVBMVEVMaXH///////+AoupPfeCMqONgh9xTgOBeiONQft9Sft1fieWjuebAz+1Ket9ZhOFQfd5Pfd/Q3PJwludehttuk+Hl7fmUoQOPAAAAFXRSTlMACBAS6Py0/v18jM38/f1UKLz+V0YOP7l1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nBXHRxLAIAwAsQUMtqlp5P9PzUQ3wd1UHB7TnqdTzN6hQtF8jT3/96wntenecgCregJSjCHwAUJQAd2+2kVWAAAAAElFTkSuQmCC",
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    34060: function (n, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/user-ico.3cc13c80.jpg",
        height: 33,
        width: 33,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIDBBEhMQUUUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQASMf/aAAwDAQACEQMRAD8ArVsscXPRTtLus2N4e8aBAtbefcIiKYCbXt//2Q==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    50686: function (n, t, e) {
      "use strict";
      e.d(t, {
        XB: function () {
          return c;
        },
        x3: function () {
          return s;
        },
      });
      var i,
        r = e(47568),
        o = e(97582),
        a = "https://llcms-dev.liquidloans.io/wp-json/md/v1";
      (0, r.Z)(function () {
        return (0, o.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                n.trys.push([0, 3, , 4]), [4, fetch("".concat(a, "/posts"))]
              );
            case 1:
              return [4, n.sent().json()];
            case 2:
              return [2, n.sent()];
            case 3:
              return n.sent(), [2, []];
            case 4:
              return [2];
          }
        });
      });
      var s =
        ((i = (0, r.Z)(function (n) {
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 3, , 4]),
                  [4, fetch("".concat(a, "/post/").concat(n))]
                );
              case 1:
                return [4, t.sent().json()];
              case 2:
                return [2, t.sent()];
              case 3:
                return t.sent(), [2, []];
              case 4:
                return [2];
            }
          });
        })),
        function (n) {
          return i.apply(this, arguments);
        });
      (0, r.Z)(function () {
        return (0, o.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                n.trys.push([0, 3, , 4]),
                [4, fetch("".concat(a, "/categories"))]
              );
            case 1:
              return [4, n.sent().json()];
            case 2:
              return [2, n.sent()];
            case 3:
              return n.sent(), [2, []];
            case 4:
              return [2];
          }
        });
      }),
        (0, r.Z)(function (n) {
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 3, , 4]),
                  [4, fetch("".concat(a, "/posts/author/").concat(n))]
                );
              case 1:
                return [4, t.sent().json()];
              case 2:
                return [2, t.sent()];
              case 3:
                return t.sent(), [2, []];
              case 4:
                return [2];
            }
          });
        }),
        (0, r.Z)(function (n) {
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 3, , 4]),
                  [4, fetch("".concat(a, "/posts/search/").concat(n))]
                );
              case 1:
                return [4, t.sent().json()];
              case 2:
                return [2, t.sent()];
              case 3:
                return t.sent(), [2, []];
              case 4:
                return [2];
            }
          });
        }),
        (0, r.Z)(function (n) {
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 3, , 4]),
                  [4, fetch("".concat(a, "/posts/category/").concat(n))]
                );
              case 1:
                return [4, t.sent().json()];
              case 2:
                return [2, t.sent()];
              case 3:
                return t.sent(), [2, []];
              case 4:
                return [2];
            }
          });
        });
      var c = function (n) {
        for (
          var t = [],
            e = new DOMParser()
              .parseFromString(n, "text/html")
              .getElementsByClassName("tableContent"),
            i = 0;
          i < e.length;
          i++
        )
          t.push(e[i].innerText);
        return t;
      };
      (0, r.Z)(function () {
        return (0, o.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                n.trys.push([0, 3, , 4]),
                [4, fetch("".concat(a, "/posts/sticky/1"))]
              );
            case 1:
              return [4, n.sent().json()];
            case 2:
              return [2, n.sent()];
            case 3:
              return n.sent(), [2, []];
            case 4:
              return [2];
          }
        });
      });
    },
    27886: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSP: function () {
            return nz;
          },
          default: function () {
            return nI;
          },
        });
      var i = e(47568),
        r = e(828),
        o = e(7297),
        a = e(97582),
        s = e(85893),
        c = e(67294),
        l = e(30653),
        d = e(3238),
        p = e(76737),
        u = e(40946),
        h = e(33601),
        x = e(79352),
        f = e(93677),
        g = e(49051),
        A = e(51237),
        m = e(8225),
        b = e(57054),
        w = e(5083),
        v = e(13743),
        j = e(76663),
        B = e(22540),
        C = e(41664),
        y = e.n(C),
        k = e(25675),
        E = e.n(k),
        Z = e(9008),
        _ = e.n(Z),
        O = e(11163),
        z = e(10063),
        I = e(1872),
        N = e(65925),
        S = e(34060),
        T = {
          src: "/_next/static/media/video-thumb.95649ef8.jpg",
          height: 132,
          width: 236,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgASAxEhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEBAAMAAAAAAAAAAAAAAAAAAANBcf/aAAwDAQACEQMRAD8Am+NhTClFBLIbAd0R0eRES40lY//Z",
          blurWidth: 8,
          blurHeight: 4,
        },
        X = {
          src: "/_next/static/media/video-thumb02.335e1d19.png",
          height: 227,
          width: 236,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEUTGig1J19pQXUAKEQYCC0pCUYgDEUKCh8UIDAsC1IVKFAYJUgCOVotCXAyPm9VE1geDDlZHWaDXGFjMmU8O2gZGUgfPFofE1FcUn15EW4uQG1NZH80UXgRAkQEFj1lHF1JCU2hdnFeTktNPzhUM26siox699HYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBgwHAQAAEsHubtb3/ik3g7e5ICAa+nPXLmwErqV5HEmAxPreZOJzlmQMKehlfShtA9evcEqEg5dBpaPyKvQOHE2Lg8gAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        D = e(22030),
        P = {
          src: "/_next/static/media/user-img01.19ff7bf1.jpg",
          height: 170,
          width: 170,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDEQQFEhMygf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAgABIf/aAAwDAQACEQMRAD8ArZO21p2E2UM5pgfE2MP7DwDr81dX8REVCMilvL//2Q==",
          blurWidth: 8,
          blurHeight: 8,
        },
        L = {
          src: "/_next/static/media/clos-btn001.3c6da9b0.png",
          height: 37,
          width: 37,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVvL8VYDshmIsSie9l4Pr96QL5MaXFaEslXDcl6QMN8Q8R5P75+Rb1aEch4Pb5Bu/UjAAAADnRSTlP8/fz+sygAsij++PH28j/5oAQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicFcdHDsAwDAMwSZ4Z9f+fW+RCgMjwez0ScWZmTsCx19pwADB7SjKThOIrC/2R5NfILrI6fzNLAT9YJEZuAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        Q = e(50686);
      function M() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  .listen-article-wrapper {\n    margin: 12px 0 0 0;\n    .sticky-inner-wrapper {\n      background-color: ",
          ";\n      z-index: 1000;\n      border-radius: 10px;\n      overflow: hidden;\n    }\n  }\n",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        var n = (0, o.Z)([
          "\n  background-image: url('",
          "');\n  background-repeat: no-repeat;\n  background-position: center -60px;\n\n  /* For Chrome or Safari */\n  progress::-webkit-progress-bar {\n    background: ",
          ";\n  }\n  /* For Firefox */\n  progress {\n    background: ",
          ";\n  }\n  progress {\n    background: ",
          ";\n  }\n\n  .Rprogresor {\n    z-index: 1000;\n    top: 90px;\n    transition: all 0.3s ease;\n    opacity: 0;\n    &.active {\n      opacity: 1;\n    }\n\n    ",
          " {\n      top: 65px;\n    }\n  }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function U() {
        var n = (0, o.Z)([
          "\n  padding: 120px 0px 85px;\n  ",
          " {\n    padding: 100px 0px 60px;\n  }\n",
        ]);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function F() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  background: ",
          ";\n  border-radius: 30px;\n  -webkit-box-shadow: 0 0 15px 1px ",
          ";\n  box-shadow: 0 0 15px 1px ",
          ";\n  padding: 32px;\n  min-height: 190px;\n  flex-direction: column;\n  h1 {\n    font-size: 38px;\n    color: ",
          ";\n    line-height: 48px;\n    letter-spacing: -1px;\n    font-weight: 600;\n    max-width: 740px;\n    text-align: center;\n    span {\n      color: ",
          ";\n    }\n  }\n  ",
          " {\n    h1 {\n      font-size: 26px;\n      line-height: 38px;\n    }\n  }\n  ",
          " {\n    padding: 20px;\n  }\n",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        var n = (0, o.Z)([
          "\n  font-size: 15px;\n  color: #a7a7a7;\n  margin: 10px 0 0 0;\n  a {\n    color: #a7a7a7;\n    margin-right: 6px;\n    :hover {\n      text-decoration: underline;\n    }\n  }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function H() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  margin: 30px 0 0 0;\n  align-items: flex-start;\n  justify-content: flex-start;\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = (0, o.Z)([
          "\n  width: 276px;\n  padding: 0 0 0 16px;\n  justify-content: flex-start;\n  align-items: flex-start;\n  .blContainer {\n    width: 276px;\n    height: auto;\n\n    &.v2 {\n      width: 100%;\n      max-width: 276px;\n    }\n  }\n\n  ",
          " {\n    display: none;\n  }\n",
        ]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      function J() {
        var n = (0, o.Z)([
          "\n  width: calc(100% - 552px);\n  padding: 0 66px;\n\n  p {\n    display: block;\n    width: 100%;\n\n    &.withICO {\n      display: flex;\n      align-items: center;\n      img {\n        margin: 0 10px 0 0;\n        max-width: 100%;\n        height: auto;\n      }\n    }\n  }\n\n  ",
          " {\n    width: calc(100% - 276px);\n    padding: 0 20px 0 0;\n  }\n  ",
          " {\n    width: 100%;\n    padding: 0 10px;\n  }\n",
        ]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = (0, o.Z)([
          "\n  width: 276px;\n  padding: 0 16px 0 0;\n  display: block;\n  .blContainer {\n    width: 276px;\n    height: auto;\n    margin-bottom: 40px;\n    &.v2 {\n      width: 260px;\n    }\n  }\n  .IndexBLink{margin:22px 0px 0 0; display:inline-block; :hover{opacity: 0.8;}}\n\n  ",
          " {\n    .blContainer {\n      &.MobileFix {\n        display: none;\n      }\n    }\n  }\n\n  .VideoLink {\n    width: 100%;\n    max-width: 276px;\n    margin: 0 auto 0 auto;\n    border: 1px solid ",
          ";\n    padding: 10px;\n    display: flex;\n    border-radius: 12px;\n    overflow: hidden;\n    img {\n      max-width: 100%;\n      height: auto;\n      border-radius: 12px;\n      overflow: hidden;\n    }\n    :hover {\n      filter: brightness(1.2);\n    }\n  }\n\n  ",
          " {\n    margin-left: auto;\n    padding: 16px 16px 0 16px;\n    width: calc(100% - 276px);\n    background-color: ",
          ";\n    .blContainer {\n      width: 100%;\n      max-width: 100%;\n      &.v2 {\n        width: 100%;\n        max-width: 100%;\n      }\n    }\n    .VideoLink {\n      width: 100%;\n      max-width: 250px;\n      margin-left: 0;\n      border-radius: 12px;\n      overflow: hidden;\n    }\n  }\n  ",
          " {\n    width: 100%;\n    margin-top: 30px;\n  }\n",
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",
          ";\n  margin: 0 0 0 0;\n",
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      function K() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 16px;\n  .tableOfContent,\n  a {\n    color: ",
          ";\n    width: 100%;\n    max-width: 210px;\n    line-height: 20px;\n    padding: 12px 0;\n    border-bottom: 1px solid ",
          ";\n    cursor: pointer;\n    &:nth-child(1) {\n      padding-top: 0;\n    }\n    :hover,\n    &.active {\n      color: #8224e9;\n    }\n  }\n  ",
          " {\n    &.v2 {\n      a {\n        width: 50%;\n        max-width: none;\n      }\n    }\n  }\n  ",
          " {\n    &.v2 {\n      a {\n        width: 100%;\n        max-width: none;\n      }\n    }\n  }\n  ",
          " {\n    &.v2 {\n      .tableOfContent {\n        width: 100%;\n        max-width: none;\n      }\n    }\n  }\n",
        ]);
        return (
          (K = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  justify-content: flex-start;\n  margin: 0 0 50px 0;\n  color: ",
          ";\n  font-size: 15px;\n\n  a {\n    color: ",
          ";\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  span {\n    color: ",
          ";\n    font-weight: 600;\n    margin: 0 6px 0 3px;\n    cursor: pointer;\n  }\n  .ImgBX {\n    width: 29px;\n    border-radius: 50%;\n    overflow: hidden;\n    height: 29px;\n    margin: 0 6px 0 0;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .btnFix01 {\n    padding: 0;\n  }\n  .secondSBX {\n    margin: 0 0 0 25px;\n    position: relative;\n    display: flex;\n    button {\n      background-color: transparent;\n      color: #656565;\n      display: flex;\n      align-items: center;\n      line-height: 15px;\n      svg {\n        fill: #8224e9;\n        margin-right: 6px;\n      }\n      :hover {\n        color: #8224e9;\n      }\n    }\n  }\n  .trdSBX {\n    margin-right: auto;\n    margin-left: 8px;\n  }\n\n  ",
          " {\n    .secondSBX {\n      margin: 8px 0 0 0;\n    }\n  }\n",
        ]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  align-items: flex-start;\n  justify-content: flex-start;\n  font-size: 18px;\n  color: ",
          ";\n  line-height: 28px;\n  font-weight: 400;\n  figure {\n    width: 100%;\n    border-radius: 15px;\n    margin-bottom: 48px;\n    overflow: hidden;\n    p {\n      margin-bottom: 0;\n    }\n    img {\n      /* width: 100%; */\n      border-radius: 15px;\n      max-width: 100%;\n      height: auto;\n    }\n  }\n  h2 {\n    font-size: 30px;\n    width: 100%;\n    font-weight: 600;\n    color: ",
          ";\n    letter-spacing: -1px;\n    line-height: 34px;\n    margin-bottom: 40px;\n  }\n  h3,\n  h4 {\n    font-weight: 600;\n    width: 100%;\n    color: ",
          ";\n  }\n  h5 {\n    font-weight: 600;\n    width: 100%;\n    color: ",
          ";\n\n    font-size: 22px;\n  }\n\n  p {\n    margin: 0 0 32px 0;\n    color: ",
          ";\n  }\n  ul {\n    margin: 0;\n    width: 100%;\n    padding-left: 25px;\n    margin-bottom: 20px;\n    li {\n      margin-bottom: 26px;\n      color: ",
          ";\n      list-style-type: none;\n      position: relative;\n      :after {\n        content: '●';\n        border: none;\n        color: #8224e9;\n        position: absolute;\n        left: -19px;\n        top: -2px;\n      }\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    &.v2 {\n      li {\n        width: 50%;\n        display: inline-block;\n      }\n    }\n  }\n  ol {\n    li {\n      margin-bottom: 26px;\n      &:nth-last-child(01) {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  ul + h2,\n  p + h2 {\n    margin-top: 12px;\n  }\n  ol + h2,\n  ol + h5 {\n    margin-top: 30px;\n  }\n  figure + h2 {\n    margin-top: 12px;\n  }\n  ul + h5,\n  p + h5 {\n    margin-top: 12px;\n    margin-bottom: 32px;\n  }\n  p + ol {\n    margin-top: 0;\n  }\n  ul + p,\n  ol + p {\n    margin-top: 20px;\n  }\n  ul + h2 {\n    margin-top: 24px;\n  }\n  iframe {\n    border-radius: 15px;\n    overflow: hidden;\n  }\n\n  a {\n    color: #944ce5;\n    :hover {\n      text-decoration: underline;\n    }\n  }\n\n  div.teleBX,\n  .utubeBX,\n  .linkinBX,\n  .mediumBX,\n  .spotfyBX,\n  .tiktokBX,\n  .tweetBX {\n    width: 100%;\n    min-height: 112px;\n    position: relative;\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 18px;\n    color: #ffffff;\n    background: url(",
          ") left top no-repeat;\n    margin-top: 10px;\n    margin-bottom: 40px;\n    background-size: cover;\n    padding: 15px 15px 15px 105px;\n\n    p {\n      margin: 0;\n      color: #ffffff;\n    }\n\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 23px;\n      top: 34px;\n      background: url(",
          ") left top no-repeat;\n      width: 48px;\n      height: 40px;\n    }\n\n    button,\n    a {\n      font-size: 18px;\n      padding: 10px 20px;\n      text-decoration: none;\n      background: transparent;\n      border-radius: 10px;\n      color: #ffffff;\n      border: 2px solid #fff;\n      :hover {\n        background-color: #fff;\n        color: #000000;\n      }\n    }\n\n    ",
          " {\n      a {\n        font-size: 16px;\n        padding: 2px 6px;\n        border-radius: 6px;\n        margin-top: 0px;\n      }\n    }\n  }\n  .utubeBX {\n    background: url(",
          ") left top no-repeat;\n    padding: 15px 15px 15px 136px;\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 23px;\n      top: 34px;\n      background: url(",
          ") left top no-repeat;\n      width: 68px;\n      height: 48px;\n    }\n  }\n  .linkinBX {\n    background: url(",
          ") left top no-repeat;\n    padding: 15px 15px 15px 136px;\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 26px;\n      top: 26px;\n      background: url(",
          ") left top no-repeat;\n      width: 61px;\n      height: 61px;\n    }\n  }\n  .mediumBX {\n    background: url(",
          ") left top no-repeat;\n    padding: 15px 15px 15px 136px;\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 28px;\n      top: 30px;\n      background: url(",
          ") left top no-repeat;\n      width: 51px;\n      height: 51px;\n    }\n  }\n  .spotfyBX {\n    background: url(",
          ") left top no-repeat;\n    padding: 15px 15px 15px 136px;\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 27px;\n      top: 30px;\n      background: url(",
          ") left top no-repeat;\n      width: 58px;\n      height: 58px;\n    }\n  }\n  .tiktokBX {\n    background: url(",
          ") left top no-repeat;\n    padding: 15px 15px 15px 136px;\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 36px;\n      top: 33px;\n      background: url(",
          ") left top no-repeat;\n      width: 43px;\n      height: 49px;\n    }\n  }\n  .tweetBX {\n    background: url(",
          ") left top no-repeat;\n    padding: 15px 15px 15px 136px;\n    &:after {\n      content: '';\n      border: none;\n      display: block;\n      position: absolute;\n      left: 40px;\n      top: 34px;\n      background: url(",
          ") left top no-repeat;\n      width: 57px;\n      height: 47px;\n    }\n  }\n\n  .utubeBX + p,\n  .linkinBX + p,\n  .mediumBX + p,\n  .spotfyBX + p,\n  .tiktokBX + p,\n  .tweetBX + p {\n    margin-top: 10px;\n  }\n\n  ",
          " {\n    ul.v2 {\n      li {\n        width: 100%;\n      }\n    }\n  }\n  ",
          " {\n    div.teleBX,\n    div.utubeBX,\n    div.linkinBX,\n    div.mediumBX,\n    div.spotfyBX,\n    div.tiktokBX,\n    div.tweetBX {\n      flex-direction: row;\n      font-size: 14px;\n      line-height: 18px;\n      justify-content: center !important;\n      align-items: center !important;\n      background-size: cover;\n      min-height: 70px;\n      a {\n        font-size: 13px;\n      }\n      p {\n        max-width: 180px;\n      }\n    }\n    div.teleBX {\n      padding: 15px 15px 15px 70px;\n      &:after {\n        left: 13px;\n        top: 21px;\n        width: 29px;\n        height: 24px;\n        background-size: cover;\n      }\n    }\n    div.utubeBX {\n      padding: 15px 15px 15px 70px;\n      &:after {\n        left: 21px;\n        top: 23px;\n        width: 34px;\n        height: 24px;\n        background-size: cover;\n      }\n    }\n    div.tweetBX {\n      padding: 15px 15px 15px 70px;\n      &:after {\n        left: 23px;\n        top: 21px;\n        width: 34px;\n        height: 28px;\n        background-size: cover;\n      }\n    }\n    div.linkinBX {\n      padding: 15px 15px 15px 72px;\n      &:after {\n        left: 21px;\n        top: 19px;\n        width: 34px;\n        height: 34px;\n        background-size: cover;\n      }\n    }\n    div.mediumBX {\n      padding: 15px 15px 15px 72px;\n      &:after {\n        left: 21px;\n        top: 19px;\n        width: 34px;\n        height: 34px;\n        background-size: cover;\n      }\n    }\n    div.spotfyBX {\n      padding: 15px 15px 15px 72px;\n      &:after {\n        left: 21px;\n        top: 19px;\n        width: 34px;\n        height: 34px;\n        background-size: cover;\n      }\n    }\n    div.tiktokBX {\n      padding: 15px 15px 15px 72px;\n      &:after {\n        left: 21px;\n        top: 19px;\n        width: 30px;\n        height: 34px;\n        background-size: cover;\n      }\n    }\n  }\n\n  .DMBX {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    .DSbox01 {\n      width: 50%;\n      padding-right: 12px;\n    }\n    .DSbox02 {\n      width: 50%;\n      padding-left: 12px;\n    }\n\n    ",
          " {\n      .DSbox01,\n      .DSbox02 {\n        width: 100%;\n        padding: 0 0 15px 0;\n      }\n    }\n  }\n\n  ",
          " {\n    .DSbox01,\n    .DSbox02 {\n      width: 100%;\n      padding: 0 0 15px 0;\n    }\n  }\n",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      function nn() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  max-width: 260px;\n  flex-direction: column;\n  h4 {\n    font-size: 16px;\n    font-weight: 600;\n    color: ",
          ";\n    cursor: pointer;\n    a {\n      color: ",
          ";\n      :hover {\n        text-decoration: underline;\n      }\n    }\n  }\n  p {\n    max-width: 242px;\n    text-align: center;\n    color: ",
          ";\n    font-size: 15px;\n  }\n  ",
          " {\n    max-width: 100%;\n    p {\n      max-width: 90%;\n    }\n  }\n",
        ]);
        return (
          (nn = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        var n = (0, o.Z)([
          "\n  width: 84px;\n  height: 84px;\n  border-radius: 50px;\n  overflow: hidden;\n  margin: 0 0 22px 0;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 50px;\n  }\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function ne() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  max-width: 260px;\n  position: relative;\n  margin: 10px auto 12px auto;\n  i {\n    position: absolute;\n    top: 12px;\n    right: 10px;\n    font-size: 22px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n    border-radius: 12px;\n    border: 1px solid ",
          ";\n    color: ",
          ";\n    padding: 12px 40px 12px 12px;\n    background: transparent;\n  }\n  button {\n    font-size: 17px;\n    line-height: 15px;\n    padding: 12px 16px;\n    color: #fff;\n    border-radius: 12px;\n    background: linear-gradient(\n      90deg,\n      ",
          ",\n      ",
          "\n    );\n    width: 100%;\n    text-align: center;\n    margin-top: 12px;\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n  &.v2 {\n    margin-bottom: 0;\n  }\n\n  ",
          " {\n    max-width: 100%;\n    p {\n      max-width: 90%;\n    }\n  }\n",
        ]);
        return (
          (ne = function () {
            return n;
          }),
          n
        );
      }
      function ni() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  max-width: 260px;\n  position: relative;\n  margin: 30px auto 20px auto;\n  .BTMSbox01 {\n    width: 100%;\n    background-color: ",
          ";\n    color: ",
          ";\n    height: 100px;\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 20px;\n    font-weight: 600;\n    img {\n      margin: 12px 20px 0 25px;\n      max-width: 62px;\n    }\n    :hover {\n      opacity: 0.8;\n    }\n  }\n\n  ",
          " {\n    margin-left: 0%;\n    .BTMSbox01 {\n      border: 1px solid ",
          ";\n    }\n  }\n",
        ]);
        return (
          (ni = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  border: 1px solid ",
          ";\n  padding: 10px;\n  border-radius: 12px;\n  justify-content: space-between;\n\n  a {\n    font-size: 25px;\n    display: inline-flex;\n    color: #b097ca;\n    :hover {\n      color: #5408ca;\n    }\n  }\n  ",
          " {\n    max-width: 300px;\n  }\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      function no() {
        var n = (0, o.Z)([
          "\n  justify-content: space-between;\n  margin: 40px 0;\n  width: 100%;\n\n  a {\n    min-height: 106px;\n    background: ",
          ";\n    width: 47%;\n    text-align: left;\n    padding: 12px 12px 12px 60px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 16px;\n    color: ",
          ";\n    transition: all 0.1s ease-in-out;\n    span {\n      color: #9b9b9b;\n      font-size: 14px;\n    }\n    .PrevNextBlog {\n      color: ",
          ";\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n    i {\n      position: absolute;\n      left: 18px;\n      top: 36%;\n      font-size: 24px;\n    }\n    &.next {\n      padding: 12px 60px 12px 12px;\n      text-align: right;\n      align-items: flex-end;\n      border-radius: 12px;\n      i {\n        left: auto;\n        right: 18px;\n      }\n    }\n    &.prev {\n      padding: 12px 12px 12px 60px;\n      text-align: right;\n      align-items: flex-end;\n      border-radius: 12px;\n      i {\n        right: auto;\n        left: 18px;\n      }\n    }\n    :hover {\n      background: linear-gradient(\n        90deg,\n        ",
          ",\n        ",
          "\n      );\n      color: #fff !important;\n      i {\n        color: #fff;\n      }\n      .PrevNextBlog {\n        color: #fff;\n      }\n    }\n  }\n\n  ",
          " {\n    a {\n      width: 100%;\n      margin-bottom: 15px;\n    }\n  }\n",
        ]);
        return (
          (no = function () {
            return n;
          }),
          n
        );
      }
      function na() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  font-size: 15px;\n  line-height: 22px;\n  color: ",
          ";\n",
        ]);
        return (
          (na = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        var n = (0, o.Z)([
          "\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1000000;\n  display: none;\n\n  ",
          " {\n    display: flex;\n  }\n",
        ]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  max-width: 300px;\n  background: ",
          ";\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n  -webkit-box-shadow: 0 0 22px 1px ",
          ";\n  box-shadow: 0 0 22px 1px ",
          ";\n\n  .ClsBTN01 {\n    width: 37px;\n    height: 37px;\n    padding: 0;\n    margin: 0;\n    background: none;\n    border: none;\n    position: absolute;\n    top: -17px;\n    right: -15px;\n  }\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      var nl = z.ZP.div.withConfig({ componentId: "sc-4bd95316-0" })(
          M(),
          function (n) {
            return n.theme.AudioBXbg;
          }
        ),
        nd = z.ZP.div.withConfig({ componentId: "sc-4bd95316-1" })(
          R(),
          function (n) {
            return n.theme.ReserBG02;
          },
          function (n) {
            return n.theme.BHbxColor;
          },
          function (n) {
            return n.theme.BHbxColor;
          },
          function (n) {
            return n.theme.BHbxColor;
          },
          N.Z.sm
        ),
        np = z.ZP.div.withConfig({ componentId: "sc-4bd95316-2" })(U(), N.Z.sm),
        nu = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-3" })(
          F(),
          function (n) {
            return n.theme.BHbxColor;
          },
          function (n) {
            return n.theme.HeroboxShadow;
          },
          function (n) {
            return n.theme.HeroboxShadow;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.TextWhite02;
          },
          N.Z.sm,
          N.Z.xs
        ),
        nh = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-4" })(W()),
        nx = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-5" })(H()),
        nf = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-6" })(
          V(),
          N.Z.sm
        ),
        ng = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-7" })(
          J(),
          N.Z.md,
          N.Z.sm
        ),
        nA = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-8" })(
          G(),
          N.Z.sm,
          function (n) {
            return n.theme.TransBorder;
          },
          N.Z.md,
          function (n) {
            return n.theme.RightBXbg;
          },
          N.Z.sm
        ),
        nm = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-9" })(
          q(),
          function (n) {
            return n.theme.TextWhite;
          }
        ),
        nb = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-10" })(
          K(),
          function (n) {
            return n.theme.TextWhite02;
          },
          function (n) {
            return n.theme.TransBorder;
          },
          N.Z.md,
          N.Z.sm,
          N.Z.xs
        ),
        nw = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-11" })(
          Y(),
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          N.Z.xs
        ),
        nv = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-12" })(
          $(),
          function (n) {
            return n.theme.TextWhite03;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.TextWhite03;
          },
          function (n) {
            return n.theme.TextWhite03;
          },
          "/_next/static/media/telegram-back.7c50e5b3.png",
          "/_next/static/media/TeleICON.0460d891.png",
          N.Z.sm,
          "/_next/static/media/utube-back.d74a8791.png",
          "/_next/static/media/YtubeICON.694f8d8a.png",
          "/_next/static/media/linkedin-BG.cd2ae69c.png",
          "/_next/static/media/linkedin-ICO.f98c136a.png",
          "/_next/static/media/medium-BG.372cf8f1.png",
          "/_next/static/media/medium-ICO.d5d3d09c.png",
          "/_next/static/media/spotify-BG.0fc0d5f2.png",
          "/_next/static/media/spotify-ICO.7dffa521.png",
          "/_next/static/media/tik-tok-BG.e7a2b07b.png",
          "/_next/static/media/tik-tok-ICO.a1267891.png",
          "/_next/static/media/twitter-BG.3b606197.png",
          "/_next/static/media/twitter-ICO.04d12a11.png",
          N.Z.sm,
          N.Z.xs,
          N.Z.sm,
          N.Z.sm
        ),
        nj = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-13" })(
          nn(),
          function (n) {
            return n.theme.TextWhite03;
          },
          function (n) {
            return n.theme.TextWhite03;
          },
          function (n) {
            return n.theme.TextWhite02;
          },
          N.Z.md
        ),
        nB = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-14" })(nt()),
        nC = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-15" })(
          ne(),
          function (n) {
            return n.theme.TransBorder;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          function (n) {
            return n.theme.GColor1;
          },
          function (n) {
            return n.theme.GColor2;
          },
          N.Z.md
        ),
        ny = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-16" })(
          ni(),
          function (n) {
            return n.theme.BHbxColor02;
          },
          function (n) {
            return n.theme.TextWhite;
          },
          N.Z.md,
          function (n) {
            return n.theme.TransBorder;
          }
        ),
        nk = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-17" })(
          nr(),
          function (n) {
            return n.theme.TransBorder;
          },
          N.Z.md
        ),
        nE = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-18" })(
          no(),
          function (n) {
            return n.theme.BHbxColor02;
          },
          function (n) {
            return n.theme.TextWhite02;
          },
          function (n) {
            return n.theme.TextWhite02;
          },
          function (n) {
            return n.theme.GColor1;
          },
          function (n) {
            return n.theme.GColor2;
          },
          N.Z.sm
        ),
        nZ = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-19" })(
          na(),
          function (n) {
            return n.theme.TextWhite02;
          }
        ),
        n_ = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-20" })(
          ns(),
          N.Z.sm
        ),
        nO = (0, z.ZP)(nl).withConfig({ componentId: "sc-4bd95316-21" })(
          nc(),
          function (n) {
            return n.theme.BHbxColor;
          },
          function (n) {
            return n.theme.HeroboxShadow02;
          },
          function (n) {
            return n.theme.HeroboxShadow02;
          }
        ),
        nz = !0,
        nI = function (n) {
          var t,
            e,
            o,
            C,
            k,
            Z,
            z,
            N,
            M,
            R,
            U = n.blog,
            F = n.allCategories,
            W = n.setAllCategories,
            H = n.isMobile,
            V = n.annouOn;
          n.setAnnouOn;
          var J = (0, O.useRouter)();
          (0, c.useEffect)(
            function () {
              (0 === F.length || 0 === U.length) && J.push("/");
            },
            [U, F, J]
          );
          var G = (0, c.useRef)(),
            q = (0, r.Z)((0, c.useState)(!1), 2),
            K = q[0],
            Y = q[1],
            $ = function () {
              window.scrollY > 110 ? Y(!0) : Y(!1);
            },
            nn = (0, r.Z)((0, c.useState)([]), 2),
            nt = nn[0],
            ne = nn[1],
            ni = (0, r.Z)((0, c.useState)(""), 2),
            nr = ni[0],
            no = ni[1],
            na = (0, r.Z)((0, c.useState)([]), 2),
            ns = (na[0], na[1]);
          (0, c.useEffect)(
            function () {
              var n = function () {
                no("");
              };
              return (
                J.events.on("routeChangeComplete", n),
                function () {
                  J.events.off("routeChangeComplete", n);
                }
              );
            },
            [J.events]
          ),
            (0, c.useEffect)(
              function () {
                var n;
                ((n = (0, i.Z)(function () {
                  return (0, a.__generator)(this, function (n) {
                    return ns(U.twitter_ids.split(",")), [2];
                  });
                })),
                function () {
                  return n.apply(this, arguments);
                })();
              },
              [U.twitter_ids]
            ),
            (0, c.useEffect)(
              function () {
                window.addEventListener("scroll", $),
                  ne((0, Q.XB)(U.post_content));
                for (
                  var n = document.getElementsByClassName("tablecontent"),
                    t = 0;
                  t < n.length;
                  t++
                )
                  n[t].id = "tableContent" + t;
              },
              [U.post_content]
            ),
            (0, c.useEffect)(
              function () {
                W(F);
              },
              [F, W]
            );
          var nc = function (n, t) {
              window.scrollTo({
                behavior: "smooth",
                top:
                  document.querySelector(n).getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  t,
              });
            },
            nl =
              null ===
                (t =
                  null === (e = U.tag) || void 0 === e
                    ? void 0
                    : e.map(function (n) {
                        return n.name;
                      })) || void 0 === t
                ? void 0
                : t.toString(),
            nz = (0, r.Z)((0, c.useState)(""), 2),
            nI = nz[0],
            nN = nz[1],
            nS = (0, r.Z)((0, c.useState)(""), 2),
            nT = nS[0],
            nX = nS[1],
            nD = (0, r.Z)((0, c.useState)(""), 2),
            nP = nD[0],
            nL = nD[1];
          (0, c.useEffect)(function () {
            var n;
            (n = encodeURIComponent(
              "https://www.youtube.com/feeds/videos.xml?channel_id=".concat(
                "UCN6FyFBHf4s4Nxibz3brE8g"
              )
            )),
              fetch("https://api.rss2json.com/v1/api.json?rss_url=".concat(n))
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  var t = n.items[0].link;
                  nX(n.items[0].thumbnail), nN(t), nL(n.items[0].title);
                })
                .catch(function (n) {
                  return console.log("error", n);
                });
          }, []);
          var nQ = (0, r.Z)((0, c.useState)(!1), 2),
            nM = nQ[0],
            nR = nQ[1],
            nU = (0, r.Z)((0, c.useState)(""), 2),
            nF = nU[0],
            nW = nU[1];
          (0, c.useEffect)(function () {
            fetch("https://anchor.fm/s/d5d3b668/podcast/rss")
              .then(function (n) {
                return n.text();
              })
              .then(function (n) {
                var t,
                  e,
                  i,
                  r,
                  o = new DOMParser().parseFromString(n, "text/xml"),
                  a = o.querySelectorAll("item")[0];
                nW({
                  title:
                    null === (t = a.querySelector("title")) || void 0 === t
                      ? void 0
                      : t.textContent,
                  description:
                    null === (e = a.querySelector("description")) ||
                    void 0 === e
                      ? void 0
                      : e.textContent,
                  image:
                    null ===
                      (i =
                        null ===
                          (r = o.getElementsByTagName("itunes:image")[0]) ||
                        void 0 === r
                          ? void 0
                          : r.attributes[0]) || void 0 === i
                      ? void 0
                      : i.textContent,
                });
              });
          }, []);
          var nH = [
              '<div class="teleBX"><p>Join The Leading Crypto Channel</p> <a target="_blank" href="https://t.me/liquidloans" aria-label="Join The Leading Crypto Channel">JOIN</a> </div>',
              '<div class="utubeBX"><p>Watch Our Latest Videos.</p><a target="_blank" href="https://www.youtube.com/c/liquidloans" aria-label="Watch Our Latest Videos">SUBSCRIBE</a></div>',
              '<div class="linkinBX"><p>Join Our Growing Community.</p><a target="_blank" href="https://www.linkedin.com/company/liquid-loans/" aria-label="Join Our Growing Community">FOLLOW</a></div>',
              '<div class="mediumBX"><p>Join The Leading Crypto Medium.</p><a target="_blank" href="https://liquidloans.medium.com/" aria-label="Join The Leading Crypto Medium">FOLLOW</a></div>',
              '<div class="tweetBX"><p>Participate In The Conversation</p><a target="_blank" href="https://twitter.com/liquidloansio/" aria-label="Participate In The Conversation">FOLLOW</a></div>',
              '<div class="spotfyBX"><p>Listen Our Latest Podcasts.</p><a target="_blank" href="https://weighinwithwallrus.com/spotify" aria-label="Listen Our Latest Podcasts">JOIN</a></div>',
              '<div class="tiktokBX"><p>Join Our Growing Community.</p><a target="_blank" href="https://www.tiktok.com/@liquidloans" aria-label="Join Our Growing Community">FOLLOW</a></div>',
            ],
            nV = (0, r.Z)((0, c.useState)(0), 2),
            nJ = nV[0],
            nG = nV[1];
          function nq(n, t) {
            return Math.floor(Math.random() * (t - n + 1) + n);
          }
          var nK = (0, c.useRef)(null),
            nY = (0, c.useRef)(null),
            n$ = (0, c.useRef)(null);
          (0, c.useEffect)(function () {
            var n, t, e, i, r, o;
            (n = window),
              (t = document),
              (e = "script"),
              (i = "GrTracking"),
              (n.__GetResponseAnalyticsObject = i),
              (n[i] =
                n[i] ||
                function () {
                  (n[i].q = n[i].q || []).push(arguments);
                }),
              (r = t.createElement(e)),
              (o = t.getElementsByTagName(e)[0]),
              (r.async = 1),
              (r.src =
                "https://ga.getresponse.com/script/bc994635-99a2-4884-87f6-817dc4ee6509/ga.js"),
              r.setAttribute("crossorigin", "use-credentials"),
              o.parentNode.insertBefore(r, o);
          }, []),
            (0, c.useEffect)(function () {
              var n = document.getElementsByTagName("h2"),
                t = document.getElementsByTagName("p"),
                e = null == n ? void 0 : n.length,
                i = null == t ? void 0 : t.length,
                r = n[nq(2, e - 1)],
                o = t[nq(2, i - 1)];
              (nK.current = r), (nY.current = o);
            }, []),
            (0, c.useEffect)(function () {
              var n = document.getElementsByTagName("h2");
              (null == n ? void 0 : n.length) > 2
                ? nK.current &&
                  n$.current &&
                  nK.current.parentNode.insertBefore(n$.current, nK.current)
                : nY.current &&
                  n$.current &&
                  nY.current.parentNode.insertBefore(n$.current, nY.current);
            }, []);
          var n0 = (0, r.Z)((0, c.useState)(!1), 2),
            n1 = n0[0],
            n2 = n0[1],
            n5 = function () {
              var n = n$.current.getBoundingClientRect(),
                t = n.top,
                e = n.bottom;
              t < window.innerHeight && e >= 0 ? n2(!0) : n2(!1);
            };
          (0, c.useEffect)(function () {
            return (
              window.addEventListener("scroll", n5),
              function () {
                window.removeEventListener("scroll", n5);
              }
            );
          }, []),
            (0, c.useEffect)(
              function () {
                n1 || nG((nJ + 1) % nH.length);
              },
              [n1]
            );
          var n4 = (0, r.Z)((0, c.useState)(!1), 2),
            n3 = n4[0],
            n6 = n4[1];
          (0, c.useEffect)(function () {
            var n = setTimeout(function () {
              n6(!0);
            }, 3e4);
            return function () {
              return clearTimeout(n);
            };
          }, []);
          var n7 = (0, O.useRouter)().route;
          (0, c.useEffect)(
            function () {
              var n = [],
                t = function (t) {
                  var e = document.createElement("script");
                  (e.src = t),
                    (e.async = !0),
                    n.find(function (n) {
                      return n.url === t;
                    }) ||
                      (document.body.appendChild(e),
                      n.push({ url: t, script: e }));
                },
                e = function () {
                  n.forEach(function (n) {
                    document.body.contains(n.script) &&
                      document.body.removeChild(n.script);
                  });
                };
              if (n7) {
                var i = [
                    "https://platform.twitter.com/widgets.js?v=".concat(U.ID),
                  ],
                  r = !0,
                  o = !1,
                  a = void 0;
                try {
                  for (
                    var s, c = i[Symbol.iterator]();
                    !(r = (s = c.next()).done);
                    r = !0
                  ) {
                    var l = s.value;
                    t(l);
                  }
                } catch (n) {
                  (o = !0), (a = n);
                } finally {
                  try {
                    r || null == c.return || c.return();
                  } finally {
                    if (o) throw a;
                  }
                }
              }
              return function () {
                n.length > 0 && e();
              };
            },
            [n7, U.ID]
          );
          var n8 = "".concat("https://www.liquidloans.io").concat(J.asPath);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(_(), {
                children: [
                  (0, s.jsx)("title", { children: U.post_title }),
                  (0, s.jsx)("link", {
                    rel: "apple-touch-icon",
                    href: "./images/favicon.png",
                  }),
                  (0, s.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1, maximum-scale=2.0",
                  }),
                  (0, s.jsx)("meta", { name: "keywords", content: nl }),
                  (0, s.jsx)("meta", {
                    property: "og:title",
                    content: U.seo_title,
                  }),
                  (0, s.jsx)("meta", {
                    name: "description",
                    content: U.seo_description,
                  }),
                  (0, s.jsx)("link", { rel: "canonical", href: n8 }),
                  (0, s.jsx)("meta", {
                    name: "robots",
                    content: "index, follow, max-image-preview:large",
                  }),
                  (0, s.jsx)("meta", {
                    name: "revisit-after",
                    content: "3 days",
                  }),
                  (0, s.jsx)("meta", {
                    description: "og:description",
                    content: U.seo_description,
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image",
                    content: "".concat(U.banner_img_url),
                  }),
                  (0, s.jsx)("meta", { property: "og:url", content: n8 }),
                  (0, s.jsx)("meta", {
                    property: "og:type",
                    content: "article",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image:width",
                    content: "1440",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image:height",
                    content: "640",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image",
                    content: U.banner_img_url,
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:title",
                    content: U.seo_title,
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:description",
                    content: U.seo_description,
                  }),
                  (0, s.jsx)("meta", { name: "twitter:url", content: n8 }),
                  (0, s.jsx)("meta", {
                    name: "twitter:image",
                    content: U.banner_img_url,
                  }),
                ],
              }),
              (0, s.jsxs)(nd, {
                children: [
                  n3
                    ? (0, s.jsx)(n_, {
                        children: (0, s.jsxs)(nO, {
                          children: [
                            (0, s.jsx)("button", {
                              "aria-label": "Mobile Banner",
                              className: "ClsBTN01",
                              onClick: function () {
                                n6(!1);
                              },
                              children: (0, s.jsx)(E(), {
                                src: L,
                                alt: "ClostPICON",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "blContainer v2",
                              children: [
                                (0, s.jsx)(nm, {
                                  children: "Newsletter Subscribe",
                                }),
                                (0, s.jsx)("getresponse-form", {
                                  "form-id":
                                    "ae4f3859-3415-4e18-9b56-42ce201a3c9d",
                                  e: "1",
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                    : null,
                  (0, s.jsx)(p.Z, {
                    className: "Rprogresor " + [K ? " active" : ""],
                  }),
                  (0, s.jsx)(I.Z.Container, {
                    className: "blFont",
                    children: (0, s.jsxs)(np, {
                      children: [
                        (0, s.jsxs)(nu, {
                          children: [
                            (0, s.jsx)("h1", { children: U.post_title }),
                            (0, s.jsx)(nh, {
                              children:
                                null === (o = U.category) || void 0 === o
                                  ? void 0
                                  : o.map(function (n, t) {
                                      var e;
                                      return (0,
                                      s.jsx)("div", { children: (0, s.jsxs)(y(), { href: "/vault/research/category/".concat(n.slug), "arial-label": "categories of blog", prefetch: !1, children: [n.name, (null === (e = U.category) || void 0 === e ? void 0 : e.length) - 1 === t ? "" : ", "] }) }, n.cat_ID);
                                    }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(nx, {
                          id: "BodyBX",
                          children: [
                            (0, s.jsx)(nf, {
                              children: (0, s.jsx)(d.Z, {
                                enabled: !0,
                                top: V ? 155 : 120,
                                bottomBoundary: "#BodyBX",
                                children: (0, s.jsxs)("div", {
                                  className: "blContainer",
                                  children: [
                                    (0, s.jsx)(nm, {
                                      children: "TABLE OF CONTENTS",
                                    }),
                                    (0, s.jsx)(nb, {
                                      children:
                                        null == nt
                                          ? void 0
                                          : nt.map(function (n, t) {
                                              return (0, s.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    nr === "tag".concat(t)
                                                      ? "active tableOfContent"
                                                      : "tableOfContent",
                                                  onClick: function () {
                                                    nc(
                                                      "#tableContent".concat(t),
                                                      120
                                                    ),
                                                      no("tag" + t);
                                                  },
                                                  children: n,
                                                },
                                                t
                                              );
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, s.jsxs)(ng, {
                              children: [
                                (0, s.jsxs)(nw, {
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "ImgBX",
                                      children: [
                                        (0, s.jsx)(E(), {
                                          src: U.author.avtar
                                            ? U.author.avtar
                                            : S.Z,
                                          alt: "User profile photo",
                                          width: 29,
                                          height: 29,
                                        }),
                                        " ",
                                      ],
                                    }),
                                    " ",
                                    "By",
                                    " ",
                                    (0, s.jsx)("span", {
                                      className: "authorName",
                                      children: (0, s.jsx)(y(), {
                                        href: "/vault/research/author/".concat(
                                          null === (C = U.author.first_name) ||
                                            void 0 === C
                                            ? void 0
                                            : C.toLowerCase()
                                        ),
                                        prefetch: !1,
                                        children: U.author.nickname,
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "trdSBX",
                                      children: [
                                        "Estimated reading: ",
                                        U.reading_time,
                                        1 === U.reading_time ? "min" : "mins",
                                      ],
                                    }),
                                    U.audio &&
                                      (0, s.jsx)("div", {
                                        className: "secondSBX",
                                        children: (0, s.jsxs)("button", {
                                          "aria-label": "Listen to Article",
                                          className: "btnFix01",
                                          onClick: function () {
                                            nR(function (n) {
                                              return !n;
                                            });
                                          },
                                          children: [
                                            (0, s.jsx)(j.m, {}),
                                            " Listen To Article",
                                          ],
                                        }),
                                      }),
                                    U.audio &&
                                      nM &&
                                      (0, s.jsx)("div", {
                                        style: { width: "100%" },
                                        className: "listen-article-wrapper",
                                        children: (0, s.jsxs)(d.Z, {
                                          enabled: !0,
                                          top: H ? 80 : 120,
                                          bottomBoundary: "#BodyBX",
                                          children: [
                                            (0, s.jsx)("div", {
                                              style: {
                                                position: "absolute",
                                                right: 10,
                                                top: 5,
                                                cursor: "pointer",
                                              },
                                              onClick: function () {
                                                return nR(!1);
                                              },
                                              children: (0, s.jsx)(v.F, {}),
                                            }),
                                            (0, l.ZP)(U.audio),
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                                (0, s.jsxs)(
                                  nv,
                                  {
                                    ref: G,
                                    children: [
                                      (0, l.ZP)(U.post_content),
                                      (0, s.jsx)("div", {
                                        ref: n$,
                                        style: { width: "100%" },
                                        children: (0, l.ZP)(nH[nJ]),
                                      }),
                                    ],
                                  },
                                  U.ID
                                ),
                                (0, s.jsxs)(nE, {
                                  children: [
                                    U.prev_post &&
                                      (0, s.jsxs)(y(), {
                                        href: "/vault/research/"
                                          .concat(
                                            null ===
                                              (k = U.prev_post.categories[0]) ||
                                              void 0 === k
                                              ? void 0
                                              : k.slug,
                                            "/"
                                          )
                                          .concat(
                                            null == U
                                              ? void 0
                                              : null === (Z = U.prev_post) ||
                                                void 0 === Z
                                              ? void 0
                                              : Z.slug
                                          ),
                                        "aria-label": "Go to previous blog",
                                        className: "prev",
                                        prefetch: !1,
                                        children: [
                                          (0, s.jsx)("i", {
                                            children: (0, s.jsx)(f.C, {}),
                                          }),
                                          (0, s.jsx)("span", {
                                            children: "Previous",
                                          }),
                                          (0, s.jsx)("div", {
                                            className: "PrevNextBlog",
                                            children:
                                              null == U
                                                ? void 0
                                                : null === (z = U.prev_post) ||
                                                  void 0 === z
                                                ? void 0
                                                : z.post_title,
                                          }),
                                        ],
                                      }),
                                    U.next_post &&
                                      (0, s.jsxs)(y(), {
                                        href: "/vault/research/"
                                          .concat(
                                            null ===
                                              (N = U.next_post.categories[0]) ||
                                              void 0 === N
                                              ? void 0
                                              : N.slug,
                                            "/"
                                          )
                                          .concat(
                                            null == U
                                              ? void 0
                                              : null === (M = U.next_post) ||
                                                void 0 === M
                                              ? void 0
                                              : M.slug
                                          ),
                                        "aria-label": "Go to next blog",
                                        className: "next",
                                        prefetch: !1,
                                        children: [
                                          (0, s.jsx)("i", {
                                            children: (0, s.jsx)(g.T, {}),
                                          }),
                                          (0, s.jsx)("span", {
                                            children: "Next",
                                          }),
                                          (0, s.jsx)("div", {
                                            className: "PrevNextBlog",
                                            children: U.next_post.post_title,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, s.jsx)(nZ, {
                                  children: (0, s.jsxs)("p", {
                                    children: [
                                      (0, s.jsx)("strong", {
                                        children: "Disclaimer:",
                                      }),
                                      (0, s.jsx)("em", {
                                        children:
                                          "Please note that nothing on this website constitutes financial advice. Whilst every effort has been made to ensure that the information provided on this website is accurate, individuals must not rely on this information to make a financial or investment decision. Before making any decision, we strongly recommend you consult a qualified professional who should take into account your specific investment objectives, financial situation and individual needs.",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)(nA, {
                              children: [
                                (0, s.jsxs)(nj, {
                                  children: [
                                    (0, s.jsx)(nB, {
                                      children: (0, s.jsx)(E(), {
                                        src: U.author.avtar
                                          ? U.author.avtar
                                          : P.src,
                                        alt: "User Avatar",
                                        width: P.width,
                                        height: P.height,
                                      }),
                                    }),
                                    (0, s.jsx)("h4", {
                                      children: (0, s.jsx)(y(), {
                                        href: "/vault/research/author/".concat(
                                          null === (R = U.author.first_name) ||
                                            void 0 === R
                                            ? void 0
                                            : R.toLowerCase()
                                        ),
                                        prefetch: !1,
                                        children: U.author.nickname,
                                      }),
                                    }),
                                    (0, s.jsx)("p", {
                                      children: U.author.description,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(nm, {
                                  style: { marginTop: "10px" },
                                  children: "Search The Blog",
                                }),
                                (0, s.jsxs)(nC, {
                                  children: [
                                    (0, s.jsx)("input", {
                                      "aria-labelledby": "Search",
                                      name: "Search",
                                      type: "text",
                                      placeholder: "Search here ....",
                                      onKeyDown: function (n) {
                                        ("Enter" === n.key ||
                                          "NumpadEnter" === n.code) &&
                                          J.push(
                                            "/vault/research/search/".concat(
                                              n.target.value
                                            )
                                          );
                                      },
                                    }),
                                    (0, s.jsx)("i", {
                                      children: (0, s.jsx)(u.R, {}),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "blContainer v2",
                                  children: [
                                    (0, s.jsx)(nm, { children: "Categories" }),
                                    (0, s.jsxs)(nb, {
                                      className: "v2",
                                      children: [
                                        (0, s.jsx)(y(), {
                                          href: "/vault/research/index/",
                                          style: { marginTop: "8px" },
                                          children: "Index",
                                        }),
                                        F.map(function (n, t) {
                                          return (0,
                                          s.jsx)(y(), { href: "/vault/research/category/".concat(n.slug), "aria-label": "Categories", prefetch: !1, children: n.name }, t);
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "blContainer v2",
                                  children: [
                                    (0, s.jsx)(nm, {
                                      style: {
                                        marginTop: "16px",
                                        marginBottom: "12px",
                                      },
                                      children: "Latest Video",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "VideoLink ani-1",
                                      onClick: function () {
                                        window.open(nI, "_blank");
                                      },
                                      style: { cursor: "pointer" },
                                      children: (0, s.jsx)(E(), {
                                        src: nT || T.src,
                                        alt: nP || "Latest Youtube Video",
                                        width: T.width,
                                        height: T.height,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "blContainer v2",
                                  children: [
                                    (0, s.jsx)(nm, {
                                      style: { marginBottom: "12px" },
                                      children: "Latest Podcast",
                                    }),
                                    (0, s.jsx)(y(), {
                                      className: "VideoLink ani-1",
                                      target: "_blank",
                                      href: {
                                        pathname:
                                          "https://open.spotify.com/show/3HdzYPpRFGJJXuXql2LLyA",
                                      },
                                      "aria-label": nF.title
                                        ? nF.title
                                        : "Latest Podcast",
                                      prefetch: !1,
                                      children: (0, s.jsx)(E(), {
                                        src: nF.image ? nF.image : X,
                                        alt: nF.title
                                          ? nF.title
                                          : "Latest Podcast",
                                        width: X.width,
                                        height: X.height,
                                      }),
                                    }),
                                    (0, s.jsx)(ny, {
                                      children: (0, s.jsxs)("button", {
                                        className: "BTMSbox01",
                                        "aria-label": "FAQs",
                                        children: [
                                          " ",
                                          (0, s.jsx)(E(), {
                                            src: D.Z,
                                            alt: "FAQs",
                                          }),
                                          " FAQ’s",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: "blContainer v2",
                                  children: (0, s.jsx)(B.t, {
                                    id: U.twitter_ids,
                                  }),
                                }),
                                (0, s.jsxs)(d.Z, {
                                  enabled: !0,
                                  top: V ? 155 : 120,
                                  bottomBoundary: "#BodyBX",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "blContainer v2 MobileFix",
                                      children: [
                                        (0, s.jsx)(nm, {
                                          children: "Newsletter Subscribe",
                                        }),
                                        (0, s.jsx)("getresponse-form", {
                                          "form-id":
                                            "ae4f3859-3415-4e18-9b56-42ce201a3c9d",
                                          e: "1",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "blContainer v2",
                                      children: [
                                        (0, s.jsx)(nm, {
                                          style: { marginBottom: "12px" },
                                          children: "Share This Article",
                                        }),
                                        (0, s.jsxs)(nk, {
                                          children: [
                                            (0, s.jsx)(y(), {
                                              href: "https://twitter.com/intent/tweet?url="
                                                .concat(n8, "&text=")
                                                .concat(U.post_title),
                                              target: "_blank",
                                              "aria-label":
                                                "Connect with us on Twitter",
                                              prefetch: !1,
                                              children: (0, s.jsx)(x.cy8, {}),
                                            }),
                                            (0, s.jsx)(y(), {
                                              href: "https://www.linkedin.com/shareArticle?mini=true&url="
                                                .concat(n8, "&title=")
                                                .concat(U.post_title),
                                              target: "_blank",
                                              "aria-label":
                                                "Connect with us on Linkedin",
                                              prefetch: !1,
                                              children: (0, s.jsx)(h._, {}),
                                            }),
                                            (0, s.jsx)(y(), {
                                              href: "https://www.facebook.com/sharer/sharer.php?u=".concat(
                                                n8
                                              ),
                                              target: "_blank",
                                              "aria-label":
                                                "Connect with us on Facebook",
                                              prefetch: !1,
                                              children: (0, s.jsx)(A.A, {}),
                                            }),
                                            (0, s.jsx)(y(), {
                                              href: "https://reddit.com/submit?url="
                                                .concat(n8, "&title=")
                                                .concat(U.post_title),
                                              target: "_blank",
                                              "aria-label":
                                                "Connect with us on Reddit",
                                              prefetch: !1,
                                              children: (0, s.jsx)(m.h, {}),
                                            }),
                                            (0, s.jsx)(y(), {
                                              href: "https://t.me/share/url?url="
                                                .concat(n8, "&text=")
                                                .concat(U.post_title),
                                              target: "_blank",
                                              "aria-label":
                                                "Connect with us on Telegram",
                                              prefetch: !1,
                                              children: (0, s.jsx)(b.W, {}),
                                            }),
                                            (0, s.jsx)(y(), {
                                              href: "mailto:?&subject="
                                                .concat(
                                                  U.post_title,
                                                  "&cc=&bcc=&body="
                                                )
                                                .concat(n8),
                                              target: "_blank",
                                              "aria-label":
                                                "Connect with us on Email",
                                              prefetch: !1,
                                              children: (0, s.jsx)(w.i, {}),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    9557: function () {},
  },
  function (n) {
    n.O(0, [5937, 653, 5900, 9774, 2888, 179], function () {
      return n((n.s = 54743));
    }),
      (_N_E = n.O());
  },
]);
