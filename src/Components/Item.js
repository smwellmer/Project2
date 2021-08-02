import React from 'react'

const Item = (props) => {

    const loaded = () => {
        return (
            <div className="item">
                <div>{props.name}</div>
                <img src={props.url} alt={props.name}/>
                <div>{props.description}</div>
                <div>{props.price}</div>
                <button>Add to Cart</button>

           </div>
        )
     }

     const loading = () => {
         return <h1 className='loading'>Items loading...</h1>
     }

     return props.selected ? loaded() : loading()
}
export default Item