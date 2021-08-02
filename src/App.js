import { Route, Switch } from 'react-router-dom';
import './App.css';
import {useState, useEffect} from 'react'
import Header from './Components/Header'
import MyCart from './Pages/MyCart';
import Home from './Pages/Home'

function App() {

  const [cart, setCart] = useState([])

  const [inventoryList, setInventoryList] = useState([])

  const getInventoryList = async () => {
    const response = await fetch("https://cdn.contentful.com/spaces/0ds39ghov63b/environments/master/entries?access_token=MhC6oO1V5NEeiAYNdZRgfn8m3yrWMxgt__MEatT-oJM&content_types/product")
    const data = await response.json()
    setInventoryList(data.items.fields)
  }

  useEffect(() => {getInventoryList()}, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home inventoryList = {inventoryList}/>
          </Route>
          <Route path="/MyCart">
           <MyCart />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
