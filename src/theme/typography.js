// const gtWalsheim = {
//   src: "url(/static/fonts/gt-walsheim-black.ttf) format('truetype')",
// };

const ttCommons = {
  src: "url(/static/fonts/TTNorms-Black.ttf) format('truetype')",
};

const gtWalsheim = {
  fontFamily: "GT Walsheim",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: "url(/fonts/gt-walsheim-black.ttf) format('truetype')",
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const typography = {
  fontFamily: "GT Walsheim, sans-serif",
  h1: {
    fontSize: 40,
    fontFamily: gtWalsheim.src,
    fontWeight: 500,
    lineHeight: "100%",
  },
  h2: {
    fontSize: 28,
    fontFamily: gtWalsheim,
    fontWeight: 500,
    lineHeight: "100%",
  },
  h3: {
    fontSize: 26,
    fontFamily: gtWalsheim,
    fontWeight: 500,
    lineHeight: "100%",
  },

  h4: {
    fontSize: 26,
    fontFamily: ttCommons,
    fontWeight: 500,
    lineHeight: "100%",
  },

  h5: {
    fontSize: 24,
    fontFamily: ttCommons,
    fontWeight: 500,
    lineHeight: "100%",
  },

  h6: {
    fontSize: 20,
    fontFamily: gtWalsheim,
    fontWeight: 500,
    lineHeight: "100%",
  },

  subtitle1: {
    fontSize: 17,
    fontFamily: ttCommons,
    fontWeight: 500,
    lineHeight: "100%",
  },

  subtitle2: {
    fontSize: 16,
    fontFamily: ttCommons,
    fontWeight: 500,
    lineHeight: "100%",
  },

  body1: {
    fontSize: 18,
    fontFamily: ttCommons,
    fontWeight: 400,
    lineHeight: "100%",
  },

  body2: {
    fontSize: 17,
    fontFamily: ttCommons,
    fontWeight: 400,
    lineHeight: "130%",
  },

  body3: {
    fontSize: 16,
    fontFamily: ttCommons,
    fontWeight: 400,
    lineHeight: "120%",
  },

  button1: {
    fontSize: 19,
    fontFamily: ttCommons,
    fontWeight: 500,
    lineHeight: "100%",
  },

  button2: {
    fontSize: 17,
    fontFamily: ttCommons,
    fontWeight: 500,
    lineHeight: "100%",
  },
};

export default typography;
