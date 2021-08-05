import React from 'react'
import Button from './Button'

const Inventory = (props) => {

    return (
        <>
        <div className='inventory'>
        <h2 id='inventoryTitle'>Inventory</h2>
            {props.inventoryList.map((product, index) => {
                return (
                    <div className='item'>
                    <div className='itemcontent'>
                        <div key={index}></div>
                        <div className="itemName">{product.name}</div>
                        <div className="itemDesc">{product.desc}</div>
                        <div className="itemPrice">${product.price}</div>
                    </div>
                    <img className='itemimage' src={product.img} alt={product.name}/>  
                    <Button className="button" dispatch={props.addToCart} product={product} label='Add to Cart'/>
                    </div>
                )
            })}
    
        </div>
        </>
    )
    
}

export default Inventory
