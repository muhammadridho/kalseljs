// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var container = Css.style(/* :: */[
      Css.alignItems(/* stretch */-162316795),
      /* :: */[
        Css.borderWidth(/* `pt */[
              25092,
              0
            ]),
        /* :: */[
          Css.borderStyle(/* solid */12956715),
          /* :: */[
            Css.boxSizing(/* borderBox */9307263),
            /* :: */[
              Css.display(/* flex */-1010954439),
              /* :: */[
                Css.flexDirection(/* column */-963948842),
                /* :: */[
                  Css.flexGrow(0),
                  /* :: */[
                    Css.flexShrink(0),
                    /* :: */[
                      Css.margin(/* `pt */[
                            25092,
                            0
                          ]),
                      /* :: */[
                        Css.padding(/* `pt */[
                              25092,
                              0
                            ]),
                        /* :: */[
                          Css.position(/* relative */903134412),
                          /* :: */[
                            Css.minHeight(/* `pt */[
                                  25092,
                                  0
                                ]),
                            /* :: */[
                              Css.minWidth(/* `pt */[
                                    25092,
                                    0
                                  ]),
                              /* :: */[
                                Css.userSelect(/* none */-922086728),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  container: container
};

function View(Props) {
  Props.style;
  var onScroll = Props.onScroll;
  var onPress = Props.onPress;
  var onMouseEnter = Props.onMouseEnter;
  var onMouseLeave = Props.onMouseLeave;
  var onBlur = Props.onBlur;
  var tabIndex = Props.tabIndex;
  var forwardRef = Props.forwardRef;
  var onKeyDown = Props.onKeyDown;
  var testId = Props.testId;
  var id = Props.id;
  var children = Props.children;
  var onDoubleClick = Props.onDoubleClick;
  var props = {
    className: container,
    onScroll: onScroll,
    onClick: onPress,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur,
    tabIndex: tabIndex,
    ref: forwardRef,
    onKeyDown: onKeyDown,
    "data-testid": testId,
    onDoubleClick: onDoubleClick,
    id: id
  };
  var child = children !== undefined ? Caml_option.valFromOption(children) : null;
  return React.createElement("div", props, child);
}

var make = View;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
