import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import Button from "./button"
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Channel from './channel';
firebase.initializeApp({
  apiKey: "AIzaSyBcEl1L4U9GPz-EN8iws3oX8wQDr9CmC24",
    authDomain: "react-chat-f7a98.firebaseapp.com",
    projectId: "react-chat-f7a98",
    storageBucket: "react-chat-f7a98.appspot.com",
    messagingSenderId: "354514005635",
    appId: "1:354514005635:web:f174459fce4ecde2b475b6",
    measurementId: "G-3QF3XEZCKE"
});
const auth = firebase.auth()
const db = firebase.firestore()
function App() {
  const [user,setUser] = useState(() => auth.currentUser)
  const [initializing,setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if (user){
        setUser(user)
      }
      else{
        setUser(null)
      }
      if (initializing){
        setInitializing(false)
      }
    })
    return unsubscribe
  },[])
  const signInWithGoogle = async() =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.useDeviceLanguage()
    try{
      await auth.signInWithPopup(provider)
    }
    catch(err){
      console.log(err)
    }
  }
  const signOut = async() => {
    try{
      await firebase.auth().signOut()
    }
    catch (error){
      console.log(error.message)
    }
  }
  if (initializing) return "Loading..."
  return (
    <div>
      {
        user ? (
          <>
          <Button handleClick={signOut}> </Button>
          <p>Sign out </p>
          <Channel user={user} db={db} />
          </>
        )
        :
        (
          <>
          <Button handleClick={signInWithGoogle}> Sign in with Google</Button>
        <p>Sign in with Google</p>
        </>
        )
      }
    </div>
  );
}

export default App;
