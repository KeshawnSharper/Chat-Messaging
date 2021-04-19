import React, { useState } from "react"

const VoiceText = ({setMessage,message}) => {
    const [play,setPlay] = useState(false)
    let speechRecognition = window.webkitSpeechRecognition
    let recognition = new speechRecognition()
    recognition.continuous = true
    let handleClick = () => {
        setPlay(!play)
        if(play){
            recognition.abort();
            recognition.stop()
        }
        else{
            recognition.start()

        }
    }
recognition.onresult = (e) => {
    setMessage({
        message:message +" " + e.results[e.resultIndex][0].transcript
    })
}
    return (
<>

    <button onClick={() => {handleClick()}}>{!play ? "Voice Message" : "Stop"}</button>


</>
    )
}
export default VoiceText