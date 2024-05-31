import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, SetItemStock] = useState(stock);

    const [mostrar, SetMostrar] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);

        }
    }

    const sumarAlCarrito = () => {
        if (contador <= itemStock) {
            SetItemStock (itemStock - contador);
            onAdd(contador);
            setContador(1);
            SetMostrar(false);
        }
    }

    useEffect(() => {
        SetItemStock(stock);
    }, [stock])

    return (
    <div className="container">       
        <div className="row">
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={decrementar}> - </button>
                    <button type="button" className="btn btn-secondary"> {contador}</button>
                    <button type="button" className="btn btn-secondary" onClick={incrementar}> + </button>
                </div>
            </div>
        </div>
        <br />
        <div>
            {mostrar ? <button type="button" className="btn btn-danger" onClick={sumarAlCarrito}>Agregar al Carrito</button> : <Link to={"/cart"} className="btn btn-danger"> Finalizar la compra </Link> }

        </div>
    </div>
    )
}

export default ItemCount;