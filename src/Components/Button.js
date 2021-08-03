import React from 'react'



const Button = (props) => {
   
    return <button className="button"onClick={()=>{props.dispatch(props.product)}}>{props.label}</button>

}

export default Button

