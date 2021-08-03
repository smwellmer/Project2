import React from 'react'
import Button from './Button'

const Inventory = (props) => {

    return (
        <div className='inventory'>
            {props.inventoryList.map((product, index) => {
                return (
                <>
                <div key={index}>
                <h1>{product.name}</h1>
                <img src={product.img} alt={product.name}/>
                <div>{product.desc}</div>
                <div>${product.price}</div>
                </div>
                 <Button dispatch={props.addToCart} product={product} label='Add to Cart'/>
                </>
                )
            })}
        </div>
    )
    
}

export default Inventory
