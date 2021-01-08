import firebase from "firebase";
// since firebase is huge module, we only import /app from it

const firebaseConfig = {
    apiKey: "AIzaSyCgCqcSyL7mzCwXiCsPw3xss2zQEnOKxYk",
    authDomain: "chat-web-application-f6bdc.firebaseapp.com",
    projectId: "chat-web-application-f6bdc",
    storageBucket: "chat-web-application-f6bdc.appspot.com",
    messagingSenderId: "466772619221",
    appId: "1:466772619221:web:a734ff11b7bf557f2c975c",
    measurementId: "G-C85KMQ3Q0T"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// firebase.analytics();