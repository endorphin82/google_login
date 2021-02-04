import './App.css';
import {GoogleLogin} from "react-google-login";
import axios from "axios";
import {LinkedInLoginButton} from "react-social-login-buttons";
// import LinkedIn from "react-linkedin-login/src";
// import SocialButton from './SocialButton'
import {LinkedIn} from 'react-linkedin-login-oauth2';

const query = new URLSearchParams(window.location.search);
console.log(query.get('code') || '');
console.log(query.get('state') || '');
console.log("window.location.origin", window.location.origin);
const getURLWithQueryParams = (base, params) => {
    const query = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

    return `${base}?${query}`;
};

const LINKEDIN_URL = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/authorization",
    {
        response_type: "code",
        client_id: "78tf1ujvkzq8ks",
        redirect_uri: "https://endorphin82.github.io/google_login",
        state: "state123",
        // scope: "r_basicprofile r_emailaddress",
        scope: "r_liteprofile r_emailaddress"
    }
);

const linkedinError = (err) => {
    console.log("err", err);
}
const linkedinResponse = (res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*"
    };
    console.log("res", res);
    // const redirect_uri = "https%3A%2F%2Fendorphin82.github.io%2Fgoogle_login"
    // const redirect_uri = "https://endorphin82.github.io/google_login"
    // const client_id = "78tf1ujvkzq8ks"
    // const response_type = "code"

    // redirect_uri=https%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback
    // const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    // const url = "https://www.linkedin.com/oauth/v2/authorization"
    // axios.post('https://endorphin.fun/auth/google/callback', null,
    //     {
    //         params: {
    //             serviceId: res.accessToken,
    //             service: res.tokenObj.id_token
    //         }
    //     }
    // )

    // axios.post('https://con29.tk:8080/rest-auth/linkedin',
    //     {
    //         access_token: res.accessToken
    //     }
    // ).then(r => {
    //     console.log("then", r);
    // })

    // axios.get(LINKEDIN_URL/*, {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }*/).then(r => console.log(r)).catch(err => linkedinError(err))

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

    /*
    axios.post('https://endorphin.fun/auth/google/callback', null,
            {
                params: {
                    serviceId: response.accessToken,
                    service: response.tokenObj.id_token
                }
            }
        )
        */

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
        <>

            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    {/*{       <SocialButton*/}
                    {/*    provider='google'*/}
                    {/*    appId='319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l'*/}
                    {/*    onLoginSuccess={googleResponse}*/}
                    {/*    triggerLogin={googleResponse}*/}
                    {/*    onLoginFailure={linkedinError}*/}
                    {/*>*/}
                    {/*    Login with Google*/}
                    {/*</SocialButton>}*/}
                    <GoogleLogin
                        clientId="319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l.apps.googleusercontent.com"
                        buttonText="Login"
                        isSignedIn={true}
                        onSuccess={googleResponse}
                        // uxMode="popup"
                        // redirectUri="https://endorphin.fun/google/redirect"
                    />

                    <br/>
                    {<LinkedInLoginButton onClick={linkedinResponse}/>}
                    <br/>
                    {<a href={LINKEDIN_URL}>
                        <div type="submit" style={{height: "40px", width: "215px"}}>
                            <img
                                style={{height: "100%", width: "100%"}}
                                src={
                                    "https://taggbox.com/blog/wp-content/uploads/2018/09/Signin-with-LinkedIn.png"
                                }
                                alt={"LinkedIn authentification"}
                            />
                        </div>
                    </a>
                    }
                    <br/>
                    <LinkedIn
                        clientId='78tf1ujvkzq8ks'
                        callback={linkedinResponse}
                        text='LinkedIn'
                        redirectUri="https://endorphin82.github.io/google_login"
                    />


                </header>
            </div>
        </>
    );
}

export default App;
