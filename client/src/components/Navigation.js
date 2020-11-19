import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContianer: {
    flexGrow: 1,
    width: "75%",
    margin: "0 auto",
    marginTop: "50px"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
  navItems: {
    textDecoration: "none",
    fontWeight: "bold",
    margin: "0 13px 0 13px"
  }
}));

export default function CenteredTabs() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>


      <Grid container spacing={3} style={{justifyContent:"center"}}>
        <Grid className={classes.right} item lg={6}  >
          <Link style={{padding: "20px", color: "green"}} to="/" className={classes.navItems}>
            HOME
          </Link>
        </Grid>

        <Grid className={classes.left} item lg={6}  >
          <Link style={{padding: "20px", color: "green"}} to="/contact" className={classes.navItems}>
            CONTACT
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}