import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TypographyProps } from "@material-ui/core";
import clsx from "clsx";

interface IconWithTextProps extends TypographyProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    textTransform: "uppercase",
  },
}));

const IconWithText: React.FC<IconWithTextProps> = ({
  icon,
  text,
  className,
  color = "primary",
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {icon}
      <Typography
        className={clsx(classes.text, className)}
        color={color}
        {...props}
      >
        {text}
      </Typography>
    </div>
  );
};

export default IconWithText;
