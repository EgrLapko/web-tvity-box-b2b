import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

export type Position = "static" | "relative" | "fixed" | "absolute" | "sticky";
export type JustifyContent =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface IProps {
  className?: string;
  children: React.ReactNode;
  position?: Position;
  justifyContent?: JustifyContent;
}

type StylePropsType = {
  position?: Position;
  justifyContent?: JustifyContent;
};

const useStyles = makeStyles(() => ({
  container: (props: StylePropsType) => {
    const { justifyContent = "center", position = "static" } = props;
    return {
      position,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent,
    };
  },
}));

const StickyBottom: React.FC<IProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = useStyles(rest);
  return <div className={clsx(classes.container, className)}>{children}</div>;
};

export default StickyBottom;
