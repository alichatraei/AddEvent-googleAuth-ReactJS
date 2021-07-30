import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Grid, Paper } from '@material-ui/core'
const Dashboard = () => {
    return (
        <main>
            <Container>
                <Grid container style={{
                    width: "100%",
                    height: '100%'
                }}>
                    <Paper elevation={3} style={{
                        width: "100%",
                        height: "100%"
                    }} >
                        <FullCalendar
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
