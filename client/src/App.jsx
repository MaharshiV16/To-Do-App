import React, { useEffect, useState } from "react";
import "./App.css";
import ListHeader from "./components/listHeader/ListHeader";
import ListItem from "./components/listItem/ListItem";
import Auth from "./components/auth/Auth";
import { useCookies } from "react-cookie";

const App = () => {
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const authToken = cookies.AuthToken;
	const userEmail = cookies.Email;
	const [tasks, setTasks] = useState(null);

	const getData = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/todos/${userEmail}`);
			const json = await response.json();
			setTasks(json);
			// console.log(json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (authToken) {
			getData(); // Call the getData function here
		}
	}, []);

	// todo sorting task by date
	const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));

	return (
		<div className="app">
			{!authToken && <Auth />}
			{authToken && (
				<>
					<ListHeader
						listName="Tasks"
						getData={getData}
					/>
					<p>Welcome {userEmail}</p>
					{sortedTasks?.map((task) => (
						<ListItem
							key={task.id}
							task={task}
							getData={getData}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default App;
