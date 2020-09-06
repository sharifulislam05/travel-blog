import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../Comments/Comments';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: "10px",
        fontSize: "20px"
    }
}));
const PostDetails = () => {
    const classes = useStyles();
    const { postId } = useParams()

    //post details data load
    const [detailsPost, setDetailsPost] = useState([])
    const { title, body } = detailsPost
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsPost(data))
    }, [postId])
    //comments data load
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postId])
    return (
        <Container>
            <Typography variant="h3">
                <Box textAlign="center"> Post Details here</Box>
            </Typography> <br />
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    <Typography variant="h4" color="inherit">{title}</Typography>
                    <Typography variant="body2">{body}</Typography>
                </Paper>
            </Grid> <br />
            <Typography variant="h4" style={{ display: 'flex', alignItems: 'center' }}>
                <ChatBubbleOutlineIcon /> Comments
            </Typography> <br />
            <div>
                {
                    comments.map(comment => <Comments comment={comment} key= {comment.id}></Comments>)
                }
            </div>
        </Container>
    );
};

export default PostDetails;