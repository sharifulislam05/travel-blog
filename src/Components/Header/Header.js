import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from '../../Images/poster.jpg'
import { IconButton, Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#222",
        position: "fixed"
    },
    poster: {
        backgroundImage: `url(${logo})`,
        height: "400px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "3rem"
    },
    menuBar: {
        display: "flex",
        justifyContent: "space-evenly",

    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Grid item xs={6}>
                        <Typography variant="h6" color="inherit" className={classes.title}>
                            Travel Blog
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.menuBar}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About Us</Button>
                        <Button color="inherit">Blog</Button>
                        <Button color="inherit">Gallery</Button>
                    </Grid>
                    <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="search" color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <Button variant="contained" color="primary">Sign in</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box className={classes.poster}>
                <Box>
                    <Box>Discover new worlds</Box>
                    <Button variant="contained" color="primary">Learn More>></Button>
                </Box>
            </Box>
        </>
    );
};

export default Header;
