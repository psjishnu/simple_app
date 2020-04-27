import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCiUa7wLEqWuhD1IjAsM1FTYPG5PujtVEo",
    authDomain: "kluupm.firebaseapp.com",
    databaseURL: "https://kluupm.firebaseio.com",
    projectId: "kluupm",
    storageBucket: "kluupm.appspot.com",
    messagingSenderId: "374488001094",
    appId: "1:374488001094:web:0373e24595cb73242d3847",
    measurementId: "G-ND6CLC1G7D"
  };
  const Fire =  firebase.initializeApp(config);
  export default Fire;