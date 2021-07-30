import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Grid, Paper } from '@material-ui/core'
import useStyles from './Dashboard.styles'
const Dashboard = () => {
    const classes = useStyles()
    return (
        <main>
            <Container className={classes.container}>
                <Grid container className={classes.grid}>
                    <Paper elevation={3} className={classes.paper}>
                        <FullCalendar
                            aspectRatio={5 / 3}
                            buttonText={{ today: 'امروز' }}
                            plugins={[dayGridPlugin]}
                            initialView={"dayGridMonth"}
                            locale={"fa"}
                            direction="rtl"
                            events={[
                                { title: 'خانه تکانی', date: '2021-05-01' },
                                { title: 'event 2', date: '1400-04-02' }
                            ]} />
                    </Paper>
                </Grid>
            </Container>
        </main>
    )
}

export default Dashboard
