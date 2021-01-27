import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from "react-google-login";
import axios from "axios";
// import LinkedIn from "react-linkedin-login/src";
// import SocialButton from './SocialButton'


console.log("v2.2.55")
const linkedinError = (err) => {
    console.log("err", err);
}
const linkedinResponse = (res) => {
    console.log("res", res);
    // axios.post('https://endorphin.fun/auth/google/callback', null,
    //     {
    //         params: {
    //             serviceId: res.accessToken,
    //             service: res.tokenObj.id_token
    //         }
    //     }
    // )
    /*
                axios.post('https://endorphin.fun/auth/google/callback',
                    {
                        access_token: res.accesstoken,
                    }
        )
        console.log(res);
        return await res.status;
    */

    //     .then(r => {
    //     console.log(r);
    // }).catch(e => {
    //     linkedinError(e)
    // })
}

const googleResponse = (response) => {

    console.log("response", response);
    // fetch('https://endorphin.fun/auth/google/callback', options).then(r => {
    // // fetch('https://endorphin.fun/google/redirect', options).then(r => {
    //     const token = r.headers.get('x-auth-token');
    //     r.json().then(user => {
    //         if (token) {
    //             this.setState({isAuthenticated: true, user, token})
    //         }
    //     });
    // })

    // axios(options)
    //     .then(r => {
    //         // .get('https://endorphin.fun/google/redirect', options).then(r => {
    //         const token = r.headers.get('x-auth-token');
    //         r.json().then(user => {
    //             if (token) {
    //                 this.setState({isAuthenticated: true, user, token})
    //             }
    //         });
    //     })
    // const params = new url.URLSearchParams({
    //     serviceId: response.accessToken,
    //     service: response.tokenObj.id_token
    // });
    // querystring.stringify({
    //     serviceId: response.accessToken,
    //     service: response.tokenObj.id_token
    // })

    /*    axios.post('https://endorphin.fun/auth/google/callback', null,
            {
                params: {
                    serviceId: response.accessToken,
                    service: response.tokenObj.id_token
                }
            }
        )*/
    axios.post('https://con29.tk:8080/rest-auth/google',
        {
            access_token: response.accessToken
        }
    ).then(r => {
        console.log("then", r);
    })

};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {/*       <SocialButton
                    provider='google'
                    appId='319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l'
                    onLoginSuccess={googleResponse}
                    triggerLogin={googleResponse}
                    onLoginFailure={linkedinError}
                >
                    Login with Google
                </SocialButton>*/}
                <GoogleLogin
                    clientId="319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l.apps.googleusercontent.com"
                    buttonText="Login"
                    isSignedIn={true}
                    onSuccess={googleResponse}
                    // uxMode="popup"
                    // redirectUri="https://endorphin.fun/google/redirect"
                />

                <br/>
                {/*<LinkedIn*/}
                {/*    clientId='78bmlnwju2j0vj'*/}
                {/*    callback={linkedinResponse}*/}
                {/*    text='LinkedIn'/>*/}


            </header>
        </div>
    );
}

export default App;
