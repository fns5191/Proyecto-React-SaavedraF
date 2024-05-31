import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const ItemDetail = ({ item }) => {
	const { agregarItem } = useContext(CartContext);

	const onAdd = (quantity) => {
		agregarItem(item, quantity);
		console.log("Agregaste: " + quantity + " productos");
	};

	return (
		<div className="container">
			<div className="row ">
				<div className="col-md-5 offset-md-1">
					<img src={`../public/${item.imagen}`} className="img-fluid" alt={item.nombre} />
				</div>
				<div className="col-md-5">
					<h1 className="display-6 text-uppercase"> {item.nombre} </h1>
					<p className="fs-2 fw-bold"> ${item.precio} </p>
					<p> {item.descripcion} </p>
					<ItemCount stock={item.stock} onAdd={onAdd} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
