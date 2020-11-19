import React from 'react';
import profilpic from "../images/profile.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: "150px",
    maxWidth: "13vw",
    borderRadius: "50%",
    margin: "0 auto",
    marginTop: 25
  },
  media: {
    minHeight: "150px",
    height: "13vw",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={profilpic}
          title="Contemplative Reptile"
        />
    </Card>
  );
}