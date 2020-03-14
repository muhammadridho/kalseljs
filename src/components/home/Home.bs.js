// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactIntl = require("react-intl");
var Locale$KalseljsCommunityPage = require("../../commons/Locale.bs.js");

function str(prim) {
  return prim;
}

function Home(Props) {
  var match = Locale$KalseljsCommunityPage.Context.useLanguange(/* () */0);
  var actionIntl = match[1];
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "message"
                }, React.createElement(ReactIntl.FormattedMessage, {
                      id: "page.hello",
                      defaultMessage: "Hello"
                    })), React.createElement("br", undefined), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(actionIntl, /* SetLocale */[/* En */0]);
                    })
                }, "Change to English"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(actionIntl, /* SetLocale */[/* Id */1]);
                    })
                }, "Ganti ke indonesia"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(actionIntl, /* SetLocale */[/* Bn */2]);
                    })
                }, "Ganti ke Banjar"));
}

var make = Home;

var $$default = Home;

exports.str = str;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
