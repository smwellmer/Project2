import React from 'react'
import Button from './Button'

const Inventory = (props) => {

    return (
        <div className='inventory'>
            {props.inventoryList.map((product, index) => {
                return (
                <div className='item'>
                <div key={index}>
                <div className="itemName">{product.name}</div>
                <img src={product.img} alt={product.name}/>
                <div className="itemDesc">{product.desc}</div>
                <div className="itemPrice">${product.price}</div>
                </div>
                 <Button className="button" dispatch={props.addToCart} product={product} label='Add to Cart'/>
                </div>
                )
            })}
        </div>
    )
    
}

export default Inventory
