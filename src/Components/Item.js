import React from 'react'
import Button from './Button'

const Item = (props) => {

    const loaded = () => {
        return (
            <div className='item'>
                  <div className='itemcontent'>
                    <div className="itemName">{props.selected.name}</div>
                    <div className="itemDesc">{props.selected.description}</div>
                    <div className="itemPrice">{props.selected.price}</div>
                    <Button className="button" dispatch={props.removeFromCart} product={props.product} label='Remove From Cart'/>
                  </div>
                  <img src={props.selected.img} alt={props.selected.name}/>
           </div>
        )
     }

     const loading = () => {
         return <h1 className='loading'>Items loading...</h1>
     }

     return props.selected ? loaded() : loading()
}
export default Item