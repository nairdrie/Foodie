import React from "react";
import { Text } from "react-native";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import "./Login.css";

const clientId =
  "494920979694-66dfupndshi1daqi2ep3cl7elli1caga.apps.googleusercontent.com";


class Login extends React.Component {
  login() {}

  componentDidMount() {
    /*const fbDiv = document.createElement("div");
    fbDiv.id = "fb-root";

    const fbScript = document.createElement("script");
    fbScript.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1265816977120930&autoLogAppEvents=1";
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossorigin = "anonymous";
    fbScript.nonce = "13eKBxo3";

    document.body.appendChild(fbDiv);
    document.body.appendChild(fbScript);
*/
    
  }
  onSuccess = (res) => {
    console.log(res.profileObj);
  };
  onFailure = (res) => {
    console.log(res);
  };

  componentClicked = (res) => {
      console.log(res);
  }
  responseFacebook = (res) => {
      console.log(res);
  }

  render() {
    return (
      <div className="login-page">
          <div className="inner">
        <Text style={{display:'block', marginBottom:23,fontSize: 32, fontWeight: 'bold', color:'#343434' }}> Welcome to Foodie<br/></Text>
        <input id="email" placeholder="Email address"></input>
        <button id="continue">Continue</button>


        {/*<div
          className="fb-login-button"
          data-size="large"
          data-button-type="continue_with"
          data-layout="rounded"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-width=""
        ></div>*/}
      

       { <FacebookLogin
    appId="1265816977120930"
    autoLoad={true}
    fields="name,email,picture"
    textButton="Continue with Facebook"
    cssClass="fb-login-button"
    icon={<FontAwesomeIcon icon={faFacebook} />}
    onClick={this.componentClicked}
       callback={this.responseFacebook} />}
<div className="google">
<GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        </div>


        

        <div className="terms">
        <Text><br/>
          By continuing, you agree to Foodie's <a>Terms of Service</a> and{" "}
          <a>Privacy Policy</a>
        </Text>
        </div>
        
      </div>
      </div>
    );
  }
}
export default Login;
