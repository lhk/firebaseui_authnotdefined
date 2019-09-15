
import firebase from "firebase"
import firebaseui from "firebaseui"

window.onload = () => {

    // configure firebase
    var config = {
        // TODO: add your config here
    };
    firebase.initializeApp(config);
    var ui = new firebaseui.auth.AuthUI(firebase.auth())

    // sign-in flow
    firebase.auth().onAuthStateChanged(function (authUser) {
        if (authUser) {
            console.log("already logged in");
        }
        else {
            var uiConfig = {
                callbacks: {
                    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                        // User successfully signed in.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.

                        //ui.start('#firebaseui-auth-container', uiConfig);
                        return false;
                    }
                },
                // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
                signInFlow: 'popup',
                signInOptions: [
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                ]
            };
            // remove other html+
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    })
}