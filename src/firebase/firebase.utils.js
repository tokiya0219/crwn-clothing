import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7MQiu5zZJfDcCGPNb3MAP9ka63v2G6c4",
    authDomain: "crown-db-f61c5.firebaseapp.com",
    databaseURL: "https://crown-db-f61c5.firebaseio.com",
    projectId: "crown-db-f61c5",
    storageBucket: "crown-db-f61c5.appspot.com",
    messagingSenderId: "80220355608",
    appId: "1:80220355608:web:28af647dc1c3f1f25f176d",
    measurementId: "G-9V4NZ16BWF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
