import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../services/firebase';
import { LoginContainer, LoginInnercontainer} from './styles'
import GoogleIcon from '../../assets/google-icon.svg';

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }   

    return (
        <LoginContainer>
            <LoginInnercontainer>
                <img 
                    src="https://logodownload.org/wp-content/uploads/2019/08/slack-logo-1.png"
                    alt="login" 
                />
                <h1>Sign in to Slack 2</h1>
                <p>github.com/matheus13f</p>

                <Button onClick={signIn} variant="contained" color="primary" size="large">
                    <img src={GoogleIcon} alt="Google" />
                    Sign in with Google
                </Button>
            </LoginInnercontainer>
        </LoginContainer>
    )
}

export default Login
