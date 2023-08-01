import React, { useState } from "react";
import "./Modal.css";
import { useCookies } from "react-cookie";

const Modal = (props) => {
	const { close, mode, task, getData } = props;
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const editMode = mode === "Edit" ? true : false;

	const [data, setData] = useState({
		user_email: editMode ? task.user_email : cookies.Email,
		title: editMode ? task.title : "",
		progress: editMode ? task.progress : 0,
		date: editMode ? task.date : new Date(),
	});

	const postData = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/todos`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (response.status === 200) {
				console.log("Successful Insertion Query");
				close(false);
				getData();
			}
		} catch (err) {
			console.error(err);
		}
	};

	const editData = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/todos/${task.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (response.status === 200) {
				console.log("Successful Edit of Query");
				close(false);
				getData();
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((data) => ({
			...data,
			[name]: value,
		}));
	};

	return (
		<div className="overlay">
			<div className="modal rounded-lg bg-slate-900">
				<div className="form-title-container flex justify-between">
					<p className="text-xl py-5">{`${mode} Task`}</p>
					<button
						onClick={() => close(false)}
						type="button"
						className="bg-transparent font-medium rounded-full px-2 py-1.5 text-center inline-flex items-center mr-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 384 512"
							className="fill-white"
						>
							<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
						</svg>
					</button>
				</div>
				<form
					action=""
					className="modal-form"
				>
					<input
						type="text"
						required
						maxLength={30}
						placeholder="Your Task"
						name="title"
						value={data.title}
						onChange={(e) => {
							handleChange(e);
						}}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
					<br />
					<label
						htmlFor="range"
						className="blocktext-sm font-medium text-gray-900 dark:text-white"
					>
						{`Progress - ${data.progress}`}
					</label>
					<input
						type="range"
						id="range"
						required
						min="0"
						max="100"
						name="progress"
						value={data.progress}
						onChange={(e) => {
							handleChange(e);
						}}
						className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
					/>
					<div className="text-center mt-5">
						<input
							className={`${mode} p-2 rounded-lg text-s hover:cursor-pointer hover:outline-1 hover:outline-white hover:outline`}
							type="submit"
							onClick={editMode ? editData : postData}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
