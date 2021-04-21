import React from "react"
import GithubButton from 'react-github-login-button'
 const Button = ({handleClick,user = null}) => {
    return (
        <>
        {user ? 
        <button onClick={handleClick}> Sign Out</button>
        :
        <GithubButton
        onClick={handleClick}
/>
    }
        
        </>
    )
}
export default Button