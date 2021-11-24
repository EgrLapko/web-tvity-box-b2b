import palette from "./palette";
// import gtWalsheinMedium from "fonts/gt-walsheim-medium.ttf";

const overrides = {
  MuiButton: {
    root: {
      padding: "13px 24px",
      borderRadius: 6,
      overflow: "hidden",
      boxShadow: "none",
      transitionProperty: "background-color, box-shadow",
    },
    startIcon: {
      "&$iconSizeSmall": {
        marginLeft: 0,
      },
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 16,
      },
    },
    sizeSmall: {
      padding: "7px 16px 6px",
      lineHeight: "19px",
    },
    sizeLarge: {
      padding: "12px 40px",
      borderRadius: 8,
      fontSize: 16,
      lineHeight: "24px",
    },
    outlined: {
      padding: "11px 22px",
    },
    text: {
      padding: "13px 24px",
    },
    outlinedPrimary: {
      border: `2px solid ${palette.primary.main}`,
      "&:hover": {
        border: `2px solid ${palette.primary.main}`,
      },
    },
    // Refactor repeating params
    containedPrimary: {
      borderRadius: "8px",
      boxShadow: "none",
      "&$disabled, &:hover$disabled": {
        backgroundColor: "rgba(123, 139, 173, 0.4)",
        color: "#FFF",
      },
      "&:hover": {
        backgroundColor: "tomato",
        boxShadow: "none",
      },
    },
    containedSecondary: {
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
    outlinedSizeSmall: {
      padding: "5px 14px 4px !important",
    },
    outlinedSizeLarge: {
      padding: "10px 38px",
    },
  },
  MuiOutlinedInput: {
    root: {
      borderRadius: 6,
      borderColor: "#E8E8E8",
      backgroundColor: "#F3F3F4",
      "&$focused $notchedOutline": {
        borderColor: palette.custom.periwinkle,
        borderWidth: 1,
      },
      "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
        borderColor: palette.custom.periwinkle,
      },
    },
    input: {
      padding: "16px",
      // padding: "8px 16px",
      lineHeight: 1.6,
    },
    notchedOutline: {
      borderColor: palette.custom.periwinkle,
    },
    multiline: {
      padding: "16px",
      // padding: "8px 16px",
    },
  },
  MuiInputLabel: {
    root: {
      fontSize: 17,
      color: "#777777",
      "&$outlined": {
        transform: "translate(16px, 12px) scale(1)",
        "&$shrink": {
          transform: "translate(0px, -20px) scale(0.75)",
          color: palette.text.primary,
          letterSpacing: "0.03em",
          fontWeight: 500,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          maxWidth: "133%",
        },
      },
    },
  },
  MuiInputBase: {
    input: {
      height: "24px",
    },
  },
  MuiAccordion: {
    root: {
      boxShadow: "unset",
      padding: "24px 0",
    },
  },
};

export default overrides;
