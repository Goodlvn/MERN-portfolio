import ProfilePicture from "../components/ProfilePicture";
import Navigation from "../components/Navigation";
import TagBio from "../components/TagBio";
import ProjectCard from "../components/ProjectCard";

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
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    centerCard: {
        textAlign: "-webkit-center"
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Navigation />
            <ProfilePicture />
            <TagBio />

            <div className={classes.gridContianer}>
                <Grid container spacing={3}>
                    <Grid className={classes.cardCenter} item xs={12} sm={6} md={4}>
                        <ProjectCard />
                    </Grid>
                    <Grid className={classes.cardCenter} item xs={12} sm={6} md={4}>
                        <ProjectCard />
                    </Grid>
                    <Grid className={classes.cardCenter} item xs={12} sm={6} md={4}>
                        <ProjectCard />
                    </Grid>
                    <Grid className={classes.cardCenter} item xs={12} sm={6} md={4}>
                        <ProjectCard />
                    </Grid>
                    <Grid className={classes.cardCenter} item xs={12} sm={6} md={4}>
                        <ProjectCard />
                    </Grid>
                    <Grid className={classes.cardCenter} item xs={12} sm={6} md={4}>
                        <ProjectCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
