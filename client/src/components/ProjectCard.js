import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// images import
import roots from "../images/roots.png";
import politics from "../images/connected.png";
import burger from "../images/burger.png";
import reverse from "../images/reverse.png";
import pump from "../images/fitness.png";
import planner from "../images/planner.png";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minHeight: "100%",
        position: "relative"
    },
    media: {
        height: 140,
    },
});

export default function ProjectCard(props) {
    const classes = useStyles();

    let portfolioImage = "";

    switch (props.image) {
        case "roots":
            portfolioImage = roots;
            break;
        case "politics":
            portfolioImage = politics;
            break;
        case "burger":
            portfolioImage = burger;
            break;
        case "reverse":
            portfolioImage = reverse;
            break;
        case "pump":
            portfolioImage = pump;
            break;
        case "planner":
            portfolioImage = planner;
            break;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={portfolioImage}
                    title="project image"
                />
                <CardContent style={{ marginBottom: "50px" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ position: "absolute", bottom: "0" }}>
                <Button size="small" color="primary">
                    Link
                 </Button>
                <Button size="small" color="primary">
                    GitHub Repo
                </Button>
            </CardActions>
        </Card>
    );
}