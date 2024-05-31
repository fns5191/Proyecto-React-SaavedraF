import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const docRef = doc(db, "Items", id);

		getDoc(docRef).then((snapShot) => {
			if (snapShot.exists()) {
				setItem({ id: snapShot.id, ...snapShot.data() });
			}
		});
	}, [id]);

	return (
		<div className="container min-vh-100">
			<div className="row d-flex p-2">
				<div className="col d-flex p-2 d-flex justify-content-center">
					<ItemDetail item={item} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetailContainer;
