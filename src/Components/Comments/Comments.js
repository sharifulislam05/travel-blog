import React, { useState, useEffect } from 'react';
import { Grid, Avatar, Paper, makeStyles, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: "10px",
        fontSize: "20px"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

const Comments = ({ comment }) => {
    const classes = useStyles();
    const { email, body, name, id } = comment
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => setComments(data.results[0].picture))
    }, [])
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} container direction="row" justify="flex-end" alignItems="flex-start">
                    <Avatar className={classes.large} alt="Photo" src={comments.thumbnail} />
                </Grid>
                <Grid item xs={9} >
                    <Paper className={classes.paper} elevation={10}>
                        <Typography variant="h6"  style={{ display: 'flex', alignItems: 'center', color:"#282C34" }}>
                            <AccountCircleIcon fontSize="large" />User{id}
                        </Typography>
                        <Typography variant="h4" style ={{color: "#3F51B5"}}>{name}</Typography>
                        <Typography variant="subtitle1">Email:{email}</Typography>
                        <Typography variant="h6">{body}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Comments;