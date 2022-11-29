const Product = ({item, cart, setCart}) => {
    
    return (
        <div className="product-card">
            <p className="title">{item.name}</p>
            <img className="product-image" src={item.image}></img>
            <button className="product-select" onClick={() => setCart([...cart, item])}>Select</button>
        </div>
    )
}

export default Product