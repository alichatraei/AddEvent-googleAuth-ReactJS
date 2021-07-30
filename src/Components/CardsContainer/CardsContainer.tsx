import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import useStyles from './CardsContainer.styles'
const CardsContainer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>باکس برای نمایش</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CardsContainer
