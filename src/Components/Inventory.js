import React from 'react'
import Button from './Button'

const Inventory = (props) => {
    //console.log('inventory data', props)
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
                 <Button dispatch={props.addToCart} product={product} label='add to cart'/>
                </>
                )
            })}
        </div>
    )
    
}

export default Inventory
//onClick = {() => props.selectProduct()}