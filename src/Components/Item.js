import React from 'react'
import Button from './Button'

const Item = (props) => {

    const loaded = () => {
        return (
            <div className="item">
                <div>{props.selected.name}text</div>
                <img src={props.selected.img} alt={props.selected.name}/>
                <div>{props.selected.description}</div>
                <div>{props.selected.price}</div>
                <Button dispatch={props.remove} product={props.product} label='remove from cart'/>

           </div>
        )
     }

     const loading = () => {
         return <h1 className='loading'>Items loading...</h1>
     }

     return props.selected ? loaded() : loading()
}
export default Item