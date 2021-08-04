import React from 'react'
import Item from '../Components/Item'

const MyCart = (props) => {
    return <div className="mycart">
        {props.cart.map((item) => {
            return <Item selected={item} key={item.id} removeFromCart={props.removeFromCart} label="Remove from Cart" />
        })}
    </div>
}

export default MyCart
