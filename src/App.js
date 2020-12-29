import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from "react-google-login";

console.log("v1.1")
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
            clientId="319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l.apps.googleusercontent.com"
            buttonText="Login"
            isSignedIn={true}
            uxMode="redirect"
            redirectUri="https://endorphin.fun/google/redirect"
        />
      </header>
    </div>
  );
}

export default App;
