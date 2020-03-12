
type color = Css_AtomicTypes.Color.t;

module Spectrum = {
  type t = {
    darkest: color,
    darker: color,
    neutral: color,
    lighter: color,
    lightest: color,
  };

  /*
      TODO: add validation to remove what's not sensical for the colors to be there
      for example: #lkjhnbbvv it is not valid hex code, so it will return None
   */
  let make = (~darkest, ~darker, ~neutral, ~lighter, ~lightest) => {
    darkest: `hex(Js.String.substr(~from=1, darkest)),
    darker: `hex(Js.String.substr(~from=1, darker)),
    neutral: `hex(Js.String.substr(~from=1, neutral)),
    lighter: `hex(Js.String.substr(~from=1, lighter)),
    lightest: `hex(Js.String.substr(~from=1, lightest)),
  };
};


type t = {
  primary: Spectrum.t,
  secondary: Spectrum.t,
  black: Spectrum.t
};

let primary =
  Spectrum.make(
    ~darkest="#B73B36",
    ~darker="#DB5F4E",
    ~neutral="#FF886C",
    ~lighter="#FFAE90",
    ~lightest="#FFC4A6",
  );

let secondary =
  Spectrum.make(
    ~darkest="#B48173",
    ~darker="#D7B4A8",
    ~neutral="#FBEDE6",
    ~lighter="#FCF3EC",
    ~lightest="#FDF6F1",
  );

let black = 
    Spectrum.make(
    ~darkest="#120D0E",
    ~darker="#161313",
    ~neutral="#1A1A1A",
    ~lighter="#313131",
    ~lightest="#484848",
  );

let default = {
  primary,
  secondary,
  black
};
