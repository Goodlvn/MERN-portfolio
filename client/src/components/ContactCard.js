import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import API from "../utils/API"

const useStyles = makeStyles({
    root: {
        minWidth: "50vw",
        maxWidth: "75vw",
        margin: "0 auto"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    buttonContainer: {
        justifyContent: "center"
    },
    inputFields: {
        width: "100%"
    }
});

export default function ContactCard() {
    const classes = useStyles();
    const [form, setForm] = useState({
        subject: "",
        name: "",
        email: "",
        message: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (form.subject && form.email && form.name && form.message) {
            API.saveMessage({
                subject: form.subject,
                name: form.name,
                email: form.email,
                message: form.message
            })
                .then(() => setForm({
                    subject: "",
                    name: "",
                    email: "",
                    message: ""
                }))
                .catch(err => console.log(err));
        }
    };


    return (
        <Card className={classes.root}>
            <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField className={classes.inputFields} id="outlined-basic" label="Name" variant="outlined"
                                onChange={handleInputChange}
                                name="name"
                                value={form.name}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.inputFields} id="outlined-basic" label="Email" variant="outlined"
                                onChange={handleInputChange}
                                name="email"
                                value={form.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.inputFields} id="outlined-basic" label="Subject" variant="outlined"
                                onChange={handleInputChange}
                                name="subject"
                                value={form.subject}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.inputFields} id="outlined-basic" label="message" variant="outlined"
                                onChange={handleInputChange}
                                name="message"
                                value={form.message}
                            />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
                <Button size="small" onClick={handleFormSubmit}>Send Message!</Button>
            </CardActions>
        </Card>
    );
}