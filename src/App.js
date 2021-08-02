import { Route, Switch } from 'react-router-dom';
import './App.css';
import {useState, useEffect} from 'react'
import Header from './Components/Header'
import MyCart from './Pages/MyCart';
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {

  const [cart, setCart] = useState([])

  const [inventoryList, setInventoryList] = useState([])

  const getInventoryList = async () => {
    const response = await fetch("https://cdn.contentful.com/spaces/0ds39ghov63b/environments/master/entries?access_token=MhC6oO1V5NEeiAYNdZRgfn8m3yrWMxgt__MEatT-oJM&content_types/product")
    const data = await response.json()
    const productArr = data.items.map((item, index) => { 
      return {
        id: item.sys.id,
        name: item.fields.productName,
        img: data.includes.Asset[index].fields.file.url,
        desc: item.fields.description,
        price: item.fields.productPrice
      }
    })
    setInventoryList(productArr)
  }

    const addToCart = (product) => {
      setCart([...cart, product])
    }
  
    const removeFromCart = (product) => {
      const index = cart.findIndex((thing) =>(product.id === thing.id))
      const updatedArray = [...cart]
      updatedArray.splice(index, 1)
      setCart(updatedArray)
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
        <Footer />
      </main>
    </div>
  );
}

export default App;
