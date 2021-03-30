import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetailed = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div
			className="jumbotron"
			style={{
				backgroundImage: `url("https://trumpwallpapers.com/wp-content/uploads/Star-Wars-4K-Wallpaper-02-2560-x-1440.jpg")`,
				backgroundSize: "cover"
			}}>
			<h1 className="display-4"> {store.people[params.theid].name}</h1> <hr className="my-4" />
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://images6.alphacoders.com/857/857790.jpg" style={{ width: "8cm" }} alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="">{store.people[params.theid].name}</h5>
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
						{store.people[params.theid].name}
					</div>
					<div className="col-sm-2">
						<strong>Birth Year: </strong>
						{store.people[params.theid].birth_year}
					</div>
					<div className="col-sm-2">
						<strong>Gender: </strong>
						{store.people[params.theid].gender}
					</div>
					<div className="col-sm-2">
						<strong>Height: </strong>
						{store.people[params.theid].height}
					</div>
					<div className="col-sm-2">
						<strong>Skin Color: </strong>
						{store.people[params.theid].skin_color}
					</div>
					<div className="col-sm-2">
						<strong>Eye Color:</strong>
						{store.people[params.theid].eye_color}
					</div>
				</div>
			</div>
			<Link to="/">
				<img src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2d2a.png" style={{ float: "right" }} />
			</Link>
		</div>
	);
};
