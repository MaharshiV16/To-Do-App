import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
	let barColor = "";
	if (progress <= 25) {
		barColor = "rgb(255, 0, 0)";
	} else if (progress <= 50 && progress > 25) {
		barColor = "rgb(255, 80, 0)";
	} else if (progress <= 75 && progress > 50) {
		barColor = "rgb(255, 255, 0)";
	} else if (progress <= 90 && progress > 75) {
		barColor = "rgb(180, 255, 0)";
	} else {
		barColor = "rgb(0, 255, 0)";
	}

	return (
		<div className="outer-bar">
			<div
				className="inner-bar"
				style={{ width: `${progress}%`, backgroundColor: barColor }}
			></div>
		</div>
	);
};

export default ProgressBar;
