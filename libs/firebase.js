import { auth } from 'react-native-twitter';
import * as firebase from 'firebase';
import Expo, { AuthSession } from 'expo';

import { Buffer } from 'buffer';
global.Buffer = Buffer;



const config = {
    apiKey: "AIzaSyDY0m_7dm1S60J1PZiGyQnMz-dwQDJNczY",
    authDomain: "circleme-2019.firebaseapp.com",
    databaseURL: "https://circleme-2019.firebaseio.com",
    projectId: "circleme-2019",
    storageBucket: "circleme-2019.appspot.com",
    messagingSenderId: "235282086347",
    appId: "1:235282086347:web:fd849c618d32e02fbb5e4e",
    measurementId: "G-JWS4FEL5RQ"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
    if(!user) {
        console.log('user not signed in!');
    } else {
        console.log('user signed in!');
    }
});

const currentUser = firebase.auth().currentUser;

export const authWithTwitter = (onSuccess, onError) => {
    const consumerKey = 'brtWC6mqxDdtfI8TUTYuSJisq';
    const consumerSecret = 'gxBlLXT5D7ucmSnhKyethFSDlgExwFsN2dcplDKC9kLwWK8cIZ';
    const callbackUrl = AuthSession.getRedirectUrl();
    //const callbackUrl = 'https://circleme-2019.firebaseapp.com/__/auth/handler';
    console.log('consumer key is ', consumerKey);
    console.log('callback URL is', callbackUrl);

    auth({ consumerKey, consumerSecret }, callbackUrl)
        .then(({ accessToken: token, accessTokenSecret: secret}) => {
            const credential = firebase.auth.TwitterAuthProvider.credential({
                token,
                secret
            });

            firebase.auth()
                .signInAndRetrieveDataWithCredential(credential)
                .then(onSuccess)
                .catch(onError);
        })
        .catch(error => (onError(error), console.log('auth failure!')));


};

export const logout = () => {
    firebase.auth().signOut()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
};

export default firebase;



