import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD0C6W_aL4rYPyt0RlDAJgebHMg0_i2KWg",
  authDomain: "nyame-f232b.firebaseapp.com",
  databaseURL: "https://nyame-f232b.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth