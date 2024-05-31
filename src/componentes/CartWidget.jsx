import { Link } from "react-router-dom";
import cart from "../assets/cart3.svg";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const CartWidget = () => {
	const { contarProductos } = useContext(CartContext);

	return (
		<>
			<Link to={"/Cart"} className="btn btn-primary position-relative bg-white me-5">
				<img src={cart} alt="Carrito" width={32} />
				<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
					{contarProductos()}
				</span>
			</Link>
		</>
	);
};

export default CartWidget;
