import { useLocation } from "react-router-dom"

const Confirmation = () => {
    const {state} = useLocation()
    return (
        <div>
            <h3>Thank You! Order confirmed for email {state.user.email}</h3>
            <h3>Products purchased are </h3>
            <ul>
                {state.cart.map(el => <li>{el.name}</li>)}
            </ul>
            
        </div>
    )
}

export default Confirmation