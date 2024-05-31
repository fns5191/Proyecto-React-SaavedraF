import { children, createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [carro, setCarro] = useState([]);

    const agregarItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let product = carro.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCarro([...carro])
        } else {
            setCarro ([...carro, {...item, quantity:quantity}]);
        }
    }


    const retirarItem = (id) => {
        const items = carro.filter(item => item.id !== id);
        setCarro([...items]);

    }

    const vaciar = () => {
        setCarro ([]);
    }

    const isInCart = (id) => {
        return carro.some(item => item.id === id);
    }

    const contarProductos = () => {
        return carro.reduce((acum, item) => acum += item.quantity, 0);
    }

    const abonoTotal = () => {
        return carro.reduce((acum, item) => acum += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{carro, agregarItem, retirarItem, vaciar, contarProductos, abonoTotal}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;