import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StickyBottom, { JustifyContent, Position } from "./StickyBottom";

interface IProps {
  children: React.ReactNode;
  position?: Position;
  justifyContent?: JustifyContent;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 8),
    backgroundColor: "white",
    color: "white",
    borderTop: `1px solid #EFEFEF`,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 8),
      boxShadow: "0px -8px 16px rgba(60, 85, 165, 0.16)",
    },
  },
}));

const StickyBottomContent: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();
  return (
    <StickyBottom className={classes.container} {...rest}>
      {children}
    </StickyBottom>
  );
};

export default StickyBottomContent;
