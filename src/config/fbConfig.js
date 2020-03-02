import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAMEOZu1nAY7L03K1-mS7vlLmX_RPPcTHM",
  authDomain: "net-ninja-mario-plan-e4296.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-plan-e4296.firebaseio.com",
  projectId: "net-ninja-mario-plan-e4296",
  storageBucket: "net-ninja-mario-plan-e4296.appspot.com",
  messagingSenderId: "531353531533",
  appId: "1:531353531533:web:6dcae1fcefd1889b149ec4"
};


firebase.initializeApp(firebaseConfig)
firebase.firestore()


export default firebase;
