import React, { useContext } from "react";
//import PropTypes from "prop-types";//
//import { useParams } from "react-router-dom";//
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import planets_pics from "../component/planets_pics";

export function Planets() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row p-2 w-6">
				<div className="cards-container d-flex justify-content-between">
					{store.planets.map((element, index) => {
						return (
							<div
								key={index}
								className="card col-4 card-img-top"
								style={{
									width: "2.5cm",
									padding: "0.5cm",
									margin: "0.5cm",

									color: "black"
								}}>
								<img
									src={planets_pics[element.name]}
									className="card-img-top"
									alt="..."
									style={{ margin: "auto" }}
								/>
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<ul className="planets">
										<li>Diameter: {element.diameter}</li>
										<li>Gravity: {element.gravity}</li>
										<li>Terrain: {element.terrain}</li>
									</ul>
									<Link to={"/planets_detailed/" + index} className="btn btn-info">
										MORE
									</Link>
									<button
										onClick={() => actions.addFavorites(element.name, "planeta")}
										type="button"
										className="btn btn-outline-warning float-right">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
