const Rebase = require('re-base')
const firebase = require('firebase')


const FirebaseConfig = {
    apiKey: "AIzaSyDfFVHqIbAsDJlA2DGkYLKte6fSeuyos5c",
    authDomain: "alisson-portfolio.firebaseapp.com",
    databaseURL: "https://alisson-portfolio.firebaseio.com",
    projectId: "alisson-portfolio",
    storageBucket: "alisson-portfolio.appspot.com",
    messagingSenderId: "538188953608"
  }
  

  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config