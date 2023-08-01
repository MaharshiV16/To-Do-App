import React, { useState } from "react";
import "./ListItem.css";
import ProgressBar from "../progressBar/ProgressBar";
import TickIcon from "../tickIcon/TickIcon";
import Modal from "../modal/Modal";

const ListItem = ({ task, getData }) => {
	const [showModal, setShowModal] = useState(false);

	const deleteItem = async (id) => {
		try {
			const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/todos/${id}`, {
				method: "DELETE",
			});
			if (response.status === 200) {
				console.log("Task Deleted Succesfully");
				getData();
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<li className="listItem">
			<div className="infoContainer">
				<TickIcon />
				<p className="taskTitle">{task.title}</p>
				<ProgressBar progress={task.progress} />
			</div>
			<div className="buttonContainer">
				<button
					onClick={() => {
						setShowModal(true);
					}}
					className="cbtn relative inline-flex items-center justify-center px-2 py-2 overflow-hidden font-mono tracking-tighter text-white text-xs rounded-lg group"
				>
					<span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
					<span className="relative">Edit</span>
				</button>
				<button
					onClick={() => {
						deleteItem(task.id);
					}}
					className="cbtn relative inline-flex items-center justify-center px-2 py-2 overflow-hidden font-mono tracking-tighter text-white text-xs rounded-lg group"
				>
					<span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
					<span className="relative">Delete</span>
				</button>
			</div>
			{showModal && (
				<Modal
					close={setShowModal}
					mode="Edit"
					task={task}
					getData={getData}
				/>
			)}
		</li>
	);
};

export default ListItem;
