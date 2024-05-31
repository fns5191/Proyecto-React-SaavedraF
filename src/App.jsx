import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import PieDePagina from "./componentes/Pie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/Error404";
import CartContextProvider from "./contexts/CartContext";
import Cart from "./componentes/Cart";

function App() {
	return (
		<>
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />

					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/category/:id" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<Error404 />} />
					</Routes>

					<PieDePagina />
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;
