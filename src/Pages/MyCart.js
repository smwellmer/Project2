import React from 'react'
import Item from '../Components/Item'

const MyCart = (props) => {
    return <div>
        {props.cart.map((item) => {
            return <Item selected={item} key={item.id} handleClick={props.remove} label="Remove from Cart" />
        })}
    </div>
}

export default MyCart
