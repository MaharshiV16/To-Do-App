import React, { useState } from "react";
import "./ListHeader.css";
import Modal from "../modal/Modal";
import { useCookies } from "react-cookie";

const ListHeader = ({ listName, getData }) => {
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const signOut = () => {
		console.log("Sign Out");
		removeCookie("Email");
		removeCookie("AuthToken");
		window.location.reload();
	};

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="listHeader">
			<span className="text-4xl font-meduim items-center flex">{listName}</span>
			<div className="buttonContainer">
				<button
					onClick={() => {
						setShowModal(true);
					}}
					className="inline-flex items-center justify-center h-12 px-2 py-2 text-s font-semibold text-center text-gray-200 align-middle bg-transparent border-1 border-white border-solid rounded-full cursor-pointer hover:text-yellow-400"
				>
					Add new
				</button>
				<button
					onClick={() => {
						signOut();
					}}
					className="inline-flex items-center justify-center h-12 px-2 py-2 text-s font-semibold text-center text-gray-200 align-middle bg-transparent border-1 border-white border-solid rounded-full cursor-pointer hover:text-cyan-400"
				>
					Sign Out
				</button>
			</div>
			{showModal && (
				<Modal
					mode="Create"
					close={setShowModal}
					getData={getData}
				/>
			)}
		</div>
	);
};

export default ListHeader;
