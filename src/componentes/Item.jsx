import { Link } from "react-router-dom";
const Item = ({ item }) => {
	return (
		<div className="col-md-3 text-center">
			<Link to={"/item/" + item.id} className="text-decoration-none">
				<div className="card my-3 rounded-5 border border-dark">
					<img src={`../public/${item.imagen}`} className="img-fluid rounded-5" alt={item.nombre} />
					<div className="card-body">
						<p className="card-text fw-bold">{item.nombre}</p>
						<p className="card-text bg-black text-light fw-bold">$ {item.precio}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Item;
