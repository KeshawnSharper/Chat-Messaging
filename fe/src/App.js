import logo from './logo.svg';
import './App.scss';
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
          <>
<div className="container clearfix">
  <div className="people-list" id="people-list">
    <div className="search">
      <input type="text" placeholder="search" />
      <i className="fa fa-search" />
    </div>
    <ul className="list">
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Vincent Porter</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Aiden Chavez</div>
          <div className="status">
            <i className="fa fa-circle offline" /> left 7 mins ago
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Mike Thomas</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Erica Hughes</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Ginger Johnston</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Tracy Carpenter</div>
          <div className="status">
            <i className="fa fa-circle offline" /> left 30 mins ago
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Christian Kelly</div>
          <div className="status">
            <i className="fa fa-circle offline" /> left 10 hours ago
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Monica Ward</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Dean Henry</div>
          <div className="status">
            <i className="fa fa-circle offline" /> offline since Oct 28
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Peyton Mckinney</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
    </ul>
  </div>
 <Channel user={user} db={db} />
</div> {/* end container */}
</>
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
