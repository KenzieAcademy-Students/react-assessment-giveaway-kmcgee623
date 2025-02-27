import products from "../items"
import Product from "../Product"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({user}) => {
const [cart, setCart] = useState([])
const navigate = useNavigate()
    return (
        <div id="container">
            <header>Welcome {user.name}</header>
            <div id="main">
                <article>
                    <div className="products">
                        {products.map(item => <Product isCartItem={false} item={item} cart={cart} setCart={setCart}/>)}
                    </div>
                </article>
                <nav></nav>
                <aside>
                    <div className="cart">
                        <p>Cart</p>
                        <div className="cart-products">
                        {cart.map(item => <Product item={item} isCartItem={true} cart={cart} setCart={setCart}/>)}
                        </div>
                    </div>
                    <button onClick={() => navigate("/confirmation", {state: {cart, user}})} style={{margin: "30px"}}>Confirm Order</button>
                </aside>
            </div>
        </div>
    )
}

export default Dashboard