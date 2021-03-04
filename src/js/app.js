import React from "react";

import { Navbar } from "./component/Navbar";
import { jumbotron } from "./component/Jumbotron";
import { cards } from "./component/cards";

const carta = {
	image: "/workspace/react-hello/src/img/rigo-baby.jpg",
	alt: "rigo",
	title: "Hello rigo",
	description: "jkjkcjnednk",
	url: "http://wikipedia.com",
	button: "click here"
};
export function App() {
	return (
		<div className="text-center mt-5">
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Cards card={carta} />
			</div>
		</div>
	);
}
