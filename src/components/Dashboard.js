import products from "../items"
import Product from "../Product"
import { useState } from "react";
const Dashboard = () => {
const [cart, setCart] = useState([])
    return (
        <div id="container">
            <header>Title and {/* Users name */}</header>
            <div id="main">
                <article>
                    <div className="products">
                        {products.map(item => <Product item={item} cart={cart} setCart={setCart}/>)}
                    </div>
                </article>
                <nav></nav>
                <aside>
                    <div className="cart">
                        <p>Cart</p>
                        <div className="cart-products">
                        {cart.map(item => <Product item={item}/>)}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Dashboard