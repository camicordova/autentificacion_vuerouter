import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

 const firebaseConfig = {
        apiKey: "AIzaSyCUw75BssU1zVryg56kFrWg706i2sQKTJA",
        authDomain: "autentificacionvr.firebaseapp.com",
        databaseURL: "https://autentificacionvr.firebaseio.com",
        projectId: "autentificacionvr",
        storageBucket: "autentificacionvr.appspot.com",
        messagingSenderId: "726924771640",
        appId: "1:726924771640:web:ac9db33a600a02a45041cd"
      };

firebase.initializeApp(firebaseConfig);

export default firebase;