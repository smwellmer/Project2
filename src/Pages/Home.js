import React, {useState} from 'react'
import Inventory from '../Components/Inventory.js'
import Item from '../Components/Item'

const Home = (props) => {

    const [selected, setSelected] = useState(null)

    const selectProduct = async (product) => {
        const response = await fetch()
        const data = await response.json()
        setSelected ({
            id: data.index,
            name: data.productName,
            img: data.url,
            price: data.productPrice,
            desc: data.description
        })
    }










    return <div>
        <Inventory inventoryList={props.inventoryList}/>
        <Item />
        </div>
}

export default Home