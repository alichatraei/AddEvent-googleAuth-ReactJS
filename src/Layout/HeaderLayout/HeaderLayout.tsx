import React from 'react'
import {
    AppBar,
    Toolbar, IconButton, Typography,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { PersonOutlineOutlined } from '@material-ui/icons'
import useStyles from './HeaderLayout.styles'
const clientId = '';
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
                            <GoogleLogin
                                clientId={clientId}
                                render={renderProps => {
                                    console.log(renderProps)
                                    return <PersonOutlineOutlined
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled} />
                                }}
                                buttonText="Sign In"
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true} />

                        </IconButton>

                    </div>

                </Toolbar>
            </AppBar>
        </header>
    )
}

export default HeaderLayout
