import React from 'react'



const Button = (props) => {
   
    return <button onClick= {() => props.addToCart(props)}>Add to Cart</button>

}

export default Button

