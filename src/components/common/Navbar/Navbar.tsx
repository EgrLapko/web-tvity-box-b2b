import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Grid, Link } from "@material-ui/core";
import LinkComponent from "../LinkComponent";
import { routes } from "utils/routing";

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
    borderBottom: "1px solid rgba(0, 0, 0, 0.1);",
  },
}));

const Navbar = () => {
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
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
