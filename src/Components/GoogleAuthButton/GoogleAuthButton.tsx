import React, { useState } from 'react'
import {
    GoogleLogin, GoogleLoginResponse,
    GoogleLoginResponseOffline,
    GoogleLogout
} from 'react-google-login'
import { useHistory } from 'react-router'
import { PersonOutlineOutlined } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'
const GoogleAuthButton = () => {
    const [isLogin, setIsLogin] = useState(false)
    const history = useHistory()
    const clientId = '652787240636-ojoa48cj2am0qjbleih4g7rg2l1h56sf.apps.googleusercontent.com';
    const handleLogin = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        setIsLogin(true)
        history.push('/dashboard')
    }
    const handleLogout = () => {
        setIsLogin(false)
        history.push('/')
    }
    return (
        <div>
            {isLogin ? <GoogleLogout
                clientId={clientId}
                render={renderProps => {
                    return (
                        <>
                            <Grid container
                                spacing={4} onClick={renderProps.onClick}>
                                <Typography variant="subtitle1" component="span">خارج شوید</Typography>
                                <PersonOutlineOutlined />
                            </Grid>
                        </>)
                }}
                onLogoutSuccess={handleLogout}
            /> : <GoogleLogin
                clientId={clientId}
                render={renderProps => {
                    return (
                        <Grid container
                            spacing={4} onClick={renderProps.onClick}>
                            <Typography variant="subtitle1" component="span">وارد شوید</Typography>
                            <PersonOutlineOutlined />
                        </Grid>
                    )
                }}
                onSuccess={handleLogin}
            />}

        </div >

    )
}

export default GoogleAuthButton
