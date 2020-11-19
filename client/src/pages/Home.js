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
            <TagBio />

            <div className={classes.gridContianer}>
                <Grid container spacing={3} style={{justifyContent: "center"}}>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
