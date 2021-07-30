import React from 'react'
import {
    AppBar,
    Toolbar, IconButton, Typography,
} from '@material-ui/core';
import { GoogleAuthButton } from '../../Components';
import useStyles from './HeaderLayout.styles'
const HeaderLayout = () => {
    const classes = useStyles();
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
                    </div>

                </Toolbar>
            </AppBar>
        </header>
    )
}

export default HeaderLayout
