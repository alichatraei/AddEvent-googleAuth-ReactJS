import React, { useState } from 'react'
import {
    AppBar,
    Toolbar, IconButton, Typography,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { GoogleAuthButton, ModalBox } from '../../Components';
import { useHistory } from 'react-router-dom';
import useStyles from './HeaderLayout.styles'
const HeaderLayout = () => {
    const classes = useStyles();
    const history = useHistory()
    const [openModalBox, setOpenModalBox] = useState(false)
    const handleOpenModalBox = () => {
        setOpenModalBox(true)
    }
    const handleCloseModalBox = () => {
        setOpenModalBox(false)
    }
    return (
        <header>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        فرانش
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <GoogleAuthButton />
                        </IconButton>
                        {history.location.pathname === '/dashboard' ?
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AddCircleOutlineOutlinedIcon onClick={handleOpenModalBox} />
                            </IconButton> : false}

                    </div>
                </Toolbar>
            </AppBar>
            {openModalBox ? <ModalBox openModalBox={openModalBox}
                handleCloseModalBox={handleCloseModalBox} /> : false}
        </header>
    )
}

export default HeaderLayout
