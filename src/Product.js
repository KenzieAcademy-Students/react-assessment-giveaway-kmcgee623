const Product = ({item, cart, setCart, isCartItem}) => {
    
    return (
        <div className="product-card">
            <p className="title">{item.name}</p>
            <img className="product-image" src={item.image}></img>
            {isCartItem ? <button className="product-select" onClick={() => setCart(cart.filter(el => el.id !== item.id))}>Delete Product</button> : <button className="product-select" onClick={() => setCart([...cart, item])}>Select</button>}
           
        </div>
    )
}

export default Product