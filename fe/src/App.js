import logo from './logo.svg';
import './App.scss';
import React, { useState,useEffect } from 'react';
import GithubButton from 'react-github-login-button'
import Button from "./button"
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Channel from './channel';
import Friends from './Friends';
import Facebook from './Facebook';
import axios from 'axios';
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
    const unsubscribe = auth.onAuthStateChanged(change =>{
      if (change){
        console.log(user)
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
    const provider = new firebase.auth.GithubAuthProvider()
    auth.useDeviceLanguage()
    try{
      await 
        auth.signInWithPopup(provider).then(

          res => {
            localStorage.setItem('token',res.credential.accessToken)
            setUser(res)
          })
      
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
  console.log(user)
  return (
    <div>

      {
        user ? (
          <>
          <Button handleClick={signOut} user={user}>  </Button>
          <>
<Friends user={user}/>
</>
          </>
        )
        :
        (
          <div className="signin-btn">
          <Button handleClick={signInWithGoogle} user={null}> Sign in with Google</Button>
        </div>
        )
      }
    </div>
  );
}

export default App;
