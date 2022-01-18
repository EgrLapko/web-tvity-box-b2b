import React, { ReactNode } from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Grid, Link } from "@material-ui/core";
import { routes } from "utils/routing";
import LinkComponent from "../LinkComponent";

interface NavbarProps {
  center?: ReactNode;
  right?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    boxShadow: "unset",
  },
  toolbar: {
    padding: theme.spacing(2, 3),
    backgroundColor: "#F7F7F8",
  },
}));

const Navbar: React.FC<NavbarProps> = ({ center, right }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link component={LinkComponent} {...routes.home()}>
                <Image
                  src="/static/img/tb_logo.png"
                  width={60}
                  height={31}
                  alt="tb-logo"
                />
              </Link>
            </Grid>
            <Grid item>{center}</Grid>
            <Grid item>{right}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
