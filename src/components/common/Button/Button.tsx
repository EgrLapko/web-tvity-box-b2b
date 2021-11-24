import React, { forwardRef } from "react";
import clsx from "clsx";
import { Button as MuiButton, ButtonProps, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface IProps extends ButtonProps {
  rounded?: boolean;
  edge?: "start" | "end";
}

const useStyles = makeStyles((theme: Theme) => ({
  sizeSmall: {},
  root: {
    "&.rounded": {
      borderRadius: "64px",
    },
    "&.edge-start": {
      marginLeft: theme.spacing(-1),
      "& $sizeSmall": {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
    "&.selected": {
      padding: 7,
      color: "black",
      border: "2px solid black",
      backgroundColor: "black",
    },
    "&.edge-end": {
      marginRight: theme.spacing(-1),
      "& $sizeSmall": {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
  },
}));

const Button: React.FC<IProps> = forwardRef((props, ref) => {
  const classes = useStyles(props);
  const { rounded, edge, className, ...rest } = props;
  return (
    <MuiButton
      {...rest}
      ref={ref}
      classes={classes}
      className={clsx({ rounded, [`edge-${edge}`]: edge }, className)}
    />
  );
});

(Button as any).muiName = "Button";
Button.displayName = "Button";

export default Button;
