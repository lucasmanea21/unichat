import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAstVv708IK4Ek2FumauPNp5oH1D8rmCsA",
    authDomain: "unichat-a204d.firebaseapp.com",
    projectId: "unichat-a204d",
    storageBucket: "unichat-a204d.appspot.com",
    messagingSenderId: "627149482869",
    appId: "1:627149482869:web:df4921ec6974367621c13c"
}).auth()
   
  