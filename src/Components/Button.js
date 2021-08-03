import React from 'react'



const Button = (props) => {
   
    return <button onClick={()=>{props.dispatch(props.product)}}>{props.label}</button>

}

export default Button

