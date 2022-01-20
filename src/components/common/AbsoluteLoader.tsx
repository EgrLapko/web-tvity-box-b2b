import React from "react";
import { CircularProgress, CircularProgressProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface AbsoluteLoaderProps extends CircularProgressProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  loader: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, .8)",
  },
}));

const AbsoluteLoader: React.FC<AbsoluteLoaderProps> = ({
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.loader, className)}>
      <CircularProgress {...props} />
    </div>
  );
};

export default AbsoluteLoader;
