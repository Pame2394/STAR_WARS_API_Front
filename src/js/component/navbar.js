import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//console.log(store.favorites);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav className="navbar navbar bg mb-3" style={{ background: "black" }}>
			<Link className="navbar-brand" to="/">
				<img
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
					style={{
						width: "150px",
						height: "100px",

						marginLeft: "7cm"
					}}
				/>
			</Link>

			<Dropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret style={{ marginRight: "2cm" }}>
					Favorites⏱
					{store.favorites.length}
				</DropdownToggle>
				<DropdownMenu>
					{store.favorites.map((element, i) => {
						return (
							<li key={i}>
								<DropdownItem>
									{element.name}
									<button
										className="remove"
										style={{ marginLeft: "10px" }}
										onClick={() => actions.deleteFavorites(i)}>
										<i className="fas fa-trash" />
									</button>
								</DropdownItem>
							</li>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
