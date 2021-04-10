// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtOGgwho0QPSrGbVeloc36ThuvcFJ7Mj4",
    authDomain: "portfolio-59b5b.firebaseapp.com",
    projectId: "portfolio-59b5b",
    storageBucket: "portfolio-59b5b.appspot.com",
    messagingSenderId: "840822093095",
    appId: "1:840822093095:web:20906e10d19109156fa502",
    measurementId: "G-X855XD54K8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider,db}
