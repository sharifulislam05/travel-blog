import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '300px',
        boxShadow: '0 0 5px gray',
        margin: 'auto',
        marginBottom: '10px'
    },
    title: {
        textDecoration: 'none',
        color: '#2A649D',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    readBtn: {
        textTransform: 'none'

    }
});

const UsersPost = ({post}) => {
    const classes = useStyles();
    const { title, body, id } = post
    const history = useHistory();
    const handleLearnMore = (postId) => {
        const url = `/posts/${postId}`
        history.push(url)
    }
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" >
                            <Link to={`/posts/${id}`} className={classes.title}>{title}</Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" className={classes.readBtn} size="small" onClick={() => handleLearnMore(id)}>
                        Learn More
                 </Button>
                </CardActions>
            </Card>
        </>

    );
};

export default UsersPost;