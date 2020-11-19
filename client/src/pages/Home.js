import ProfilePicture from "../components/ProfilePicture";
import Navigation from "../components/Navigation";
import TagBio from "../components/TagBio";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

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
            <TagBio />

            <div className={classes.gridContianer}>
                <Grid container spacing={3} style={{justifyContent: "center"}}>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Roots a social media garden"} 
                        body={"A social media forum used for posting pictures of your plants and learning more through community interactivity. Project two for ucb full-stack web dev bootcamp: collaboration with Christy & Kelly"}
                        image={"roots"}
                        link={"https://roots-a-social-garden.herokuapp.com/"}
                        repo={"https://github.com/Goodlvn/roots-a-social-garden"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Connected Politics"} 
                        body={"An app to help you find elected your elected officials by address. Project one for ucb full-stacj web dev: collaboration with David & Ry."}
                        image={"politics"}
                        link={"https://goodlvn.github.io/connected-politics/"}
                        repo={"https://github.com/Goodlvn/connected-politics"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Pick Your Burgers"} 
                        body={"A homework assignment meant to practice CRUD skills using express, express-handlebars, and MYSQL"}
                        image={"burger"}
                        link={"https://pickin-my-burgers.herokuapp.com/"}
                        repo={"https://github.com/Goodlvn/pickin-my-burgers"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Reverse Uno Code"} 
                        body={"Home work assignment meant to teach us about sequelize models and how to require them in future projects. Also learned about user authentication using Passport and Bycript for password encryption. Check out my youtube video!"}
                        image={"reverse"}
                        link={"https://www.youtube.com/watch?v=XDCU6qmW7_4"}
                        repo={"https://github.com/Goodlvn/reverse-uno-code"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Fitness Tracker"} 
                        body={"This fitness tracker app is designed to help you keep track of your workouts! Create a new workout plan and add exercises as you go through it. Check the stats of your work outs to see the progress that you've made!"}
                        image={"pump"}
                        link={"https://work-your-pump.herokuapp.com/"}
                        repo={"https://github.com/Goodlvn/track-your-pump"}
                        />
                    </Grid>
                    <Grid className={classes.centerCard} item lg={4}  >
                        <ProjectCard title={"Work Day Scheduler"} 
                        body={"A simple app that uses momentjs to help you keep track of your schedule for a typical work day"}
                        image={"planner"}
                        link={"https://goodlvn.github.io/day-planner/"}
                        repo={"https://github.com/Goodlvn/day-planner"}
                        />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}
