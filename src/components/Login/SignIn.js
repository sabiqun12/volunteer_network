import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';





const SignIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // // The signed-in user info.
                // var user = result.user;
                // console.log(user)
                // // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div className="login-container d-flex align-items-center justify-content-center">
            <div className="login-form text-center">
            <h1 className="mb-3">LOGIN WITH</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-warning rounded-pill login-btn">Continue with google</button>
            <p className="mt-3">Don't have an account? <u>Create an account</u></p>
        </div>
        </div>
    );
};

export default SignIn;