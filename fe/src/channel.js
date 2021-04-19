import React,{useState,useEffect} from "react"
import firebase from 'firebase/app';
import VoiceText from "./VoiceText"
const Channel = ({user = null,db = null}) => {
    const [messages,setMessages] = useState([])
    const [message,setMessage] = useState({
        message:null,
        date:null
    })
    useEffect(() => {
        if (db){
            const unsubscribe = db
            .collection('messages')
            .orderBy('date')
            .limit(100)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ... doc.data(),
                    id:doc.id,
                }))
                setMessages(data)
            })
            return unsubscribe
         }                                          
    },[db])
const handleChange = e => {
    setMessage({
        message:e.target.value
    })
}
const submit = e => {
    if (db){
        db.collection("messages").add({
            message:message.message,
            date:firebase.firestore.FieldValue.serverTimestamp()
        })
    }
        
    
}
    return (
        <>
             <div className="chat">
    <div className="chat-header clearfix">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
      <div className="chat-about">
        <div className="chat-with">Chat with Vincent Porter</div>
        <div className="chat-num-messages">already 1 902 messages</div>
      </div>
      <i className="fa fa-star" />
    </div> {/* end chat-header */}
    <div className="chat-history">
      <ul>
          {messages.map(message => (
            <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
            <span className="message-data-name">Olia</span> <i className="fa fa-circle me" />
          </div>
          <div className="message other-message float-right">
            {message.message}
          </div>
        </li>
          ))}
        
       
      </ul>
    </div> {/* end chat-history */}
    <div className="chat-message clearfix">
      <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows={3} onChange={e =>handleChange(e)} value={message.message} />
      <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
      <i className="fa fa-file-image-o" />
      
      <button onClick={submit}>Send</button>
      <VoiceText setMessage={setMessage} message={message.message}/>
    </div> {/* end chat-message */}
  </div> {/* end chat */}
           

        </>
    )
}
export default Channel