import React from 'react'
import { GoogleLogin } from 'react-google-login'
const GoogleAuthButton = () => {
    const clientId = '652787240636-ojoa48cj2am0qjbleih4g7rg2l1h56sf.apps.googleusercontent.com';
    return (
        <>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => {
                    console.log(renderProps)
                    return <PersonOutlineOutlined
                        onClick={renderProps.onClick} />
                }}
                buttonText="Sign In"
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} />

        </>
    )
}

export default GoogleAuthButton
