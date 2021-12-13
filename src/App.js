import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./UserList";

function App() {
	const [listOfUSer, setlistOfUSer] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => setlistOfUSer(res.data))
			.catch((err) => setError(true));
	}, []);
	return (
		<div>
			{listOfUSer.map((data) => (
				<UserList data={data} />
			))}
		</div>
	);
}

export default App;
