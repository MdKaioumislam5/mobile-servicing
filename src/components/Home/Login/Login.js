import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                // console.log(user);
                setLoggedInUser(user);
                history.replace(from);
            })

            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="bg-warning mt-5 p-5 m-auto text-center">
            <h1 className="bg-info p-5">LOGIN WITH GOOGLE</h1>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;
