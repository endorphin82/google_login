import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from "react-google-login";
import axios from "axios";

console.log("v2.2.29")

const googleResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({
        access_token: response.accessToken,
        email: response.profileObj.email,
        name: response.profileObj?.name,
        avatar: response.profileObj?.imageUrl,
        googleId: response.googleId,
        id_token: response.tokenObj.id_token
    }, null, 2)], {type: 'application/json'});
    // const options = {
    //     method: 'POST',
    //     body: tokenBlob,
    //     // body: new Blob([JSON.stringify(response, null, 2)], {type: 'application/json'}),
    //     mode: 'cors',
    //     cache: 'default'
    // };
    const options = {
        method: 'POST',
        url: 'https://endorphin.fun/auth/google/callback',
        body: tokenBlob,
        // body: new Blob([JSON.stringify(response, null, 2)], {type: 'application/json'}),
        mode: 'cors',
        cache: 'default'
    };
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

    axios(options).then(r => {
        // .get('https://endorphin.fun/google/redirect', options).then(r => {
        const token = r.headers.get('x-auth-token');
        r.json().then(user => {
            if (token) {
                this.setState({isAuthenticated: true, user, token})
            }
        });
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
                <GoogleLogin
                    clientId="319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l.apps.googleusercontent.com"
                    buttonText="Login"
                    isSignedIn={true}
                    onSuccess={googleResponse}
                    // uxMode="popup"
                    // redirectUri="https://endorphin.fun/google/redirect"
                />
            </header>
        </div>
    );
}

export default App;
