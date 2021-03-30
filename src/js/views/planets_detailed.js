import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetailed = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div
			className="jumbotron"
			style={{
				backgroundImage: `url("https://trumpwallpapers.com/wp-content/uploads/Star-Wars-4K-Wallpaper-02-2560-x-1440.jpg")`,
				backgroundSize: "cover"
			}}>
			<h1 className="display-4"> {store.planets[params.theid].name}</h1>
			<hr className="my-4" />
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://images6.alphacoders.com/857/857790.jpg" style={{ width: "8cm" }} alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="">{store.planets[params.theid].name}</h5>
							<p className="card-text">
								Star Wars is a multi-genre mythology and multimedia franchise created by George Lucas in
								1976. Comprising movies, novels, comics, video games, toys, and numerous television
								series, the Star Wars franchise employs archetypal motifs common to religions, classical
								mythology, and political climax, as well as musical motifs of those same aspects.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container" style={{ height: "2cm", padding: "0.5cm", color: "white" }}>
				<div className="row">
					<div className="col-sm-2">
						<strong>Name: </strong>
						{store.planets[params.theid].name}
					</div>
					<div className="col-sm-2">
						<strong>Climate: </strong>
						{store.planets[params.theid].climate}
					</div>
					<div className="col-sm-2">
						<strong>Population: </strong>
						{store.planets[params.theid].population}
					</div>
					<div className="col-sm-2">
						<strong>Orbital_Period: </strong>
						{store.planets[params.theid].orbital_period}
					</div>
					<div className="col-sm-2">
						<strong>Rotation_Period</strong>
						{store.planets[params.theid].rotation_period}
					</div>
					<div className="col-sm-2">
						<strong>Diameter: </strong>
						{store.planets[params.theid].diameter}
					</div>
				</div>
			</div>
			<Link to="/">
				<img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2d2a.png" style={{ float: "right" }} />
			</Link>
		</div>
	);
};
