// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Format = require("date-fns/format");

function formatDate(isoDateString) {
  return Format(new Date(isoDateString), "dddd, MMMM D, YYYY");
}

function $pipe$question(option, defaultValue) {
  if (option !== undefined) {
    return Caml_option.valFromOption(option);
  } else {
    return defaultValue;
  }
}

var Infix = {
  $pipe$question: $pipe$question,
  $great$great$eq: Belt_Option.flatMap,
  $less$$great: Belt_Option.map
};

var $$Option = {
  Infix: Infix
};

function preset(param) {
  Css.$$global("\n      html, body, div, span, applet, object, iframe,\n      h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n      a, abbr, acronym, address, big, cite, code,\n      del, dfn, em, img, ins, kbd, q, s, samp,\n      small, strike, strong, sub, sup, tt, var,\n      b, u, i, center,\n      dl, dt, dd, ol, ul, li,\n      fieldset, form, label, legend,\n      table, caption, tbody, tfoot, thead, tr, th, td,\n      article, aside, canvas, details, embed,\n      figure, figcaption, footer, header, hgroup,\n      menu, nav, output, ruby, section, summary,\n      time, mark, audio, video\n    ", /* :: */[
        Css.margin(Css.zero),
        /* :: */[
          Css.border(Css.zero, Css.solid, Css.black),
          /* :: */[
            Css.fontSize(/* `percent */[
                  -119887163,
                  100
                ]),
            /* :: */[
              Css.verticalAlign(/* baseline */287825029),
              /* :: */[
                Css.fontSize(Css.inherit_),
                /* [] */0
              ]
            ]
          ]
        ]
      ]);
  Css.$$global("html", /* :: */[
        Css.width(/* `percent */[
              -119887163,
              100
            ]),
        /* :: */[
          Css.height(/* `percent */[
                -119887163,
                100
              ]),
          /* :: */[
            Css.margin(Css.zero),
            /* :: */[
              Css.overflow(/* hidden */-862584982),
              /* :: */[
                Css.fontSize(/* `percent */[
                      -119887163,
                      100
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]);
  Css.$$global("body", /* :: */[
        Css.width(/* `percent */[
              -119887163,
              100
            ]),
        /* :: */[
          Css.height(/* `percent */[
                -119887163,
                100
              ]),
          /* :: */[
            Css.margin(Css.zero),
            /* :: */[
              Css.padding(Css.zero),
              /* :: */[
                Css.overflow(/* hidden */-862584982),
                /* :: */[
                  Css.backgroundColor(/* `hex */[
                        5194459,
                        "FAE8DD"
                      ]),
                  /* :: */[
                    Css.lineHeight(/* `abs */[
                          4845682,
                          1
                        ]),
                    /* :: */[
                      Css.fontFamily("Rubik, sans-serif"),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]);
  Css.$$global("article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section", /* :: */[
        Css.display(/* block */888960333),
        /* [] */0
      ]);
  Css.$$global("ol, ul", /* :: */[
        Css.listStyleType(/* none */-922086728),
        /* [] */0
      ]);
  Css.$$global("blockquote, q", /* :: */[
        Css.unsafe("quotes", "none"),
        /* [] */0
      ]);
  Css.$$global("blockquote:before, blockquote:after, q:before, q:after", /* :: */[
        Css.unsafe("content", "''"),
        /* :: */[
          Css.unsafe("content", "none"),
          /* [] */0
        ]
      ]);
  Css.$$global("table", /* :: */[
        Css.borderCollapse(/* collapse */-996847251),
        /* :: */[
          Css.borderSpacing(Css.zero),
          /* [] */0
        ]
      ]);
  return Css.$$global("input[type=search]::-webkit-search-cancel-button,\n       input[type=search]::-webkit-search-decoration,\n       input[type=search]::-webkit-search-results-button,\n       input[type=search]::-webkit-search-results-decoration", /* :: */[
              Css.unsafe("-webkit-appearance", "none"),
              /* :: */[
                Css.unsafe("-moz-appearance", "none"),
                /* [] */0
              ]
            ]);
}

var Styles = {
  preset: preset
};

exports.formatDate = formatDate;
exports.$$Option = $$Option;
exports.Styles = Styles;
/* Css Not a pure module */
