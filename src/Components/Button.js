import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) => {
    return  <Link to="MyCart"><button>Add to Cart</button></Link>
}

export default Button