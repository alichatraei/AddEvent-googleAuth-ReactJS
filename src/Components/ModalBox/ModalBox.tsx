import React, { useState } from 'react'
import {
    Modal, Backdrop,
    Fade,
    Typography,
    TextField,
    Grid, Button
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import useStyles from './ModalBox.styles';
import { EventCreator } from '../../State'
interface IProp {
    openModalBox: boolean;
    handleCloseModalBox: () => void
}
const ModalBox: React.FC<IProp> = ({ openModalBox, handleCloseModalBox }) => {
    const classes = useStyles();
    const [eventTextField, setEventTextField] = useState("");
    const [eventDateField, setEventDateField] = useState("");
    const dispatch = useDispatch()
    const addEvent = bindActionCreators(EventCreator, dispatch);
    const handleClick = () => {
        addEvent({
            action: 'ADD_EVENT', payload: {
                eventName: eventTextField,
                eventDate: eventDateField
            }
        })
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModalBox}
                onClose={handleCloseModalBox}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModalBox}>
                    <div className={classes.paper}>
                        <Typography variant="h5" component="h5"
                            id="headerTypography">یک رویداد را ثبت کنید</Typography>
                        <Grid container className={classes.gridContainer} spacing={3}>
                            <Grid item>
                                <label htmlFor="outlined-basic">رویداد: </label>
                            </Grid>
                            <Grid item>
                                <TextField id="outlined-basic"
                                    placeholder="نام رویداد" type="text"
                                    required
                                    autoFocus
                                    value={eventTextField}
                                    onChange={e =>
                                        setEventTextField(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container className={classes.gridContainer} spacing={3}>
                            <Grid item>
                                <label htmlFor="datePicker">تاریخ: </label>
                            </Grid>
                            <Grid item>
                                <TextField type="date"
                                    className={classes.datePicker}
                                    onChange={e =>
                                        setEventDateField(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container className={classes.gridContainer} spacing={3}>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary"
                                    onClick={handleClick}>
                                    ثبت
                                </Button>
                            </Grid>

                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default ModalBox
