import { ref, firebaseAuth } from '../config/constants'


export const userData = firebaseAuth().currentUser;


export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function changePassword(pw){
  return firebaseAuth().currentUser.updatePassword(pw)
}

export function changeEmail(email){
  return firebaseAuth().currentUser.updateEmail(email)
}


export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
