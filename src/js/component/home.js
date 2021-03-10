import React, { useState } from "react";

export function Home() {
	const [color, setColor] = useState("gray");

	const rojo = () => {
		setColor("red");
	};
	const amarillo = () => {
		setColor("yellow");
	};
	const verde = () => {
		setColor("green");
	};

	return (
		<div className="container">
			<div className="col-1">
				<div
					id="r"
					style={{
						background: color === "red" ? color : "gray"
					}}
					onClick={rojo}></div>
				<div
					id="y"
					style={{
						background: color === "yellow" ? color : "gray"
					}}
					onClick={amarillo}></div>
				<div
					id="g"
					style={{
						background: color === "green" ? color : "gray"
					}}
					onClick={verde}></div>
			</div>
		</div>
	);
}
