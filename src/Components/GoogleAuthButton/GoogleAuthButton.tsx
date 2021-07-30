import React from 'react'
import {
    GoogleLogin, GoogleLoginResponse,
    GoogleLoginResponseOffline
} from 'react-google-login'
import { useHistory } from 'react-router'
import { PersonOutlineOutlined } from '@material-ui/icons'
const GoogleAuthButton = () => {
    const clientId = '652787240636-ojoa48cj2am0qjbleih4g7rg2l1h56sf.apps.googleusercontent.com';
    const history = useHistory()
    const response = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log({ ...res })
        history.push('/dashboard')
    }
    return (
        <>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => {
                    console.log(renderProps)
                    return <PersonOutlineOutlined
                        onClick={renderProps.onClick} />
                }}
                onSuccess={response}
                buttonText="Sign In" />
        </>
    )
}

export default GoogleAuthButton
