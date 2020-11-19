import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import linkedIn from "../images/linkedin.svg";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: "50px"
    },
    icon: {
        width: "33px",
        marginLeft: 20,
        marginRight: 20,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <a href="https://www.linkedin.com/in/jonathan-martinez-316406113/" target="_blank">
                    <img className={classes.icon} src={linkedIn}/>
                </a>
                <a href="https://github.com/Goodlvn" target="_blank">
                    <img className={classes.icon} src={github}/>
                </a>
                <a href="https://twitter.com/focus4ursoul" target="_blank">
                    <img className={classes.icon} src={twitter}/>
                </a>
            </Paper>
        </div>
    )
}
