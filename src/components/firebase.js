import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCD6hpdDlsn2i-rSj91nn_AC-SHpItTdAE",
    authDomain: "get-a-thing.firebaseapp.com",
    projectId: "get-a-thing",
    storageBucket: "get-a-thing.appspot.com",
    messagingSenderId: "829681281057",
    appId: "1:829681281057:web:e2769ee669841f87d79b60"
};

let instance;

export default function getFirebase () {
    if (typeof window !== "undefined") {
        if (instance) return instance;
        instance = firebase.initializeApp(firebaseConfig);
        return instance
    }

    return null;
}