import React from 'react'
import Inventory from '../Components/Inventory.js'


const Home = (props) => {


    return <div className="home">
            <Inventory inventoryList={props.inventoryList} />
        </div>
}

export default Home