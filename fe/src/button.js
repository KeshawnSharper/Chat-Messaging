import React from "react"
 const Button = (props) => {
    const {handleClick} = props
    console.log(handleClick)
    return (
        <button onClick={handleClick}> </button>
    )
}
export default Button