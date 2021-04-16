import logo from './logo.svg';
import './App.css';
import React from 'react';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyBcEl1L4U9GPz-EN8iws3oX8wQDr9CmC24",
  authDomain: "react-chat-f7a98.firebaseapp.com",
  projectId: "react-chat-f7a98",
  storageBucket: "react-chat-f7a98.appspot.com",
  messagingSenderId: "354514005635",
  appId: "1:354514005635:web:f174459fce4ecde2b475b6",
  measurementId: "G-3QF3XEZCKE"
});

function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
