import React from "react"

const Button=({increment,onClickFunction})=>{
  
    const handleClick=()=>{
        onClickFunction(increment)
    }

    return(
        <div>
            <button onClick={handleClick}>+{increment}</button>
        
        </div>
    )
}
export default Button