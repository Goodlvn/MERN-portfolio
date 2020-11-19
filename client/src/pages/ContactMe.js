import ProfilePicture from "../components/ProfilePicture";
import Navigation from "../components/Navigation";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
        marginTop: "50px"
    },
    centerCard: {
        textAlign: "-webkit-center"
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        }
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Navigation />
            <ProfilePicture />
        

            <Paper className={classes.paper}></Paper>
        </div>
    );
}
