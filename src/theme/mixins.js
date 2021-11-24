const mixins = {
  disableScrollBar: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
  },
};

export default mixins;
