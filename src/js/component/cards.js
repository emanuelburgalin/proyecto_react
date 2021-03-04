import React from "react";
import { Button } from "bootstrap";

export function cards(card) {
	return (
		<div className="col">
			<div className="card" style="width: 18rem;">
				<img src={image} className="card-img-top" src="..." alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href={url} className="btn btn-primary">
						{button}
					</a>
				</div>
			</div>
		</div>
	);
}
