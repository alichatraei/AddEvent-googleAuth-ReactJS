import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Grid, Paper, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux'
import useStyles from './Dashboard.styles'
import { ModalBox } from '../../Components'
import { TStore } from '../../State/store'
const Dashboard = () => {
    const classes = useStyles()
    const state = useSelector((state: TStore) => state.event)
    const [openModalBox, setOpenModalBox] = useState(false)
    const handleOpenModalBox = () => {
        setOpenModalBox(true)
    }
    const handleCloseModalBox = () => {
        setOpenModalBox(false)
    }
    return (
        <main className={classes.root}>
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
                            events={state} />
                    </Paper>
                </Grid>
                <Fab color="primary" aria-label="add"
                    className={classes.fab}
                    onClick={handleOpenModalBox}>
                    <AddIcon />
                </Fab>
            </Container>
            <ModalBox openModalBox={openModalBox}
                handleCloseModalBox={handleCloseModalBox} />
        </main>
    )
}

export default Dashboard
