import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBg6s36yhA86aGx2allp3wEvNsGd0KljbY',
  authDomain: 'fir-auth-b97ba.firebaseapp.com',
  databaseURL: 'https://FirebaseAuth.firebaseio.com',
  projectId: 'fir-auth-b97ba',
  storageBucket: 'fir-auth-b97ba.appspot.com',
  messagingSenderId: '26842584728'
})

export const auth = app.auth()
export default app
