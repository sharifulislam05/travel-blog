import React, { useState, useEffect } from 'react';
import UsersPost from '../UsersPost/UsersPost';
import Header from '../Header/Header';
import { Grid, Container, Box } from '@material-ui/core';

const Home = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    
    return (
        <>
            <Header/>
            <Container maxWidth="md">
                <h1>Articles</h1>
                    <Grid container spacing={3} style={{ padding: 5 }}>
                        {post.map(post => ( 
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <UsersPost post={post} key={post.id}></UsersPost>
                            </Grid>
                        ))}
                    </Grid>
            </Container>
            <Box variant="p" style={{textAlign:'center', backgroundColor:'gray'}}>Copyright &copy; 2020 Travel Blog</Box>
        </>
    );
};

export default Home;