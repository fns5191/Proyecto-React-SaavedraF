import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({}) => {
	const [items, setItems] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const itemsCollection = collection(db, "Items");

		const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

		getDocs(queryCollection).then((snapShot) => {
			if (snapShot.size > 0) {
				setItems(snapShot.docs.map((item) => ({ id: item.id, ...item.data() })));
			}
		});
	}, [id]);

	return (
		<div className="container min-vh-100">
			<div className="row my-5">
				<ItemList items={items} />
			</div>
		</div>
	);
};

export default ItemListContainer;
