import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import trash from "../assets/bxs-trash.svg";
import conmocion from "../assets/conmocion.png";

const Cart = () => {
	const { carro, agregarItem, vaciar, retirarItem, contarProductos, abonoTotal } = useContext(CartContext);

	return (
		<div className="container my-5 min-vh-100">
			<div className="row">
				<div className="col">
					<div className="conteiner-fluid">
						<h2 className="text-center bg-danger-subtle p-5 rounded-pill ">
							<img src={conmocion} alt="" width={50} /> ¿En serio vas a comprar eso?{" "}
							<img src={conmocion} alt="" width={50} />{" "}
						</h2>
					</div>
					<br />
					<table className="table table-hover">
						<tbody>
							<br />
							{carro.map((item) => (
								<tr key={item.id}>
									<td>
										<img src={`../public/${item.imagen}`} alt="{item.imagen}" width={80} />
									</td>
									<td className="fw-bold">{item.nombre}</td>
									<td className="fw-bold">$ {item.precio}</td>
									<td className="fw-bold">{item.quantity}</td>
									<td className="text-end">
										{" "}
										<img
											src={trash}
											width={32}
											onClick={() => {
												retirarItem(item.id);
											}}
										/>
									</td>
								</tr>
							))}
							<tr>
								<td colSpan={4} className="fw-bold">
									Total
								</td>
								<td className="text-end bg-danger-subtle text-center rounded-pill fw-bold">
									$ {abonoTotal()}
								</td>
							</tr>
							<br />
							<tr>
								<td colSpan={5} className="text-end">
									<button className="btn text-white bg-dark rounded-0" onClick={vaciar}>
										Limpiar Carrito
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Cart;
