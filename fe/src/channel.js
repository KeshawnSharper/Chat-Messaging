import React,{useState,useEffect} from "react
import firebase from 'firebase/app';

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
        <ul>
           
{           
    messages.map(message => (
        <li key={message.id}>{message.message}</li>
    ))
}
<input onChange={e =>handleChange(e)} value={message.message}/>
<button onClick={submit} />
        </ul>
    )
}
export default Channel