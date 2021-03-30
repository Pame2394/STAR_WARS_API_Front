import React, { Component } from "react";

export const Footer = () => (
	<footer
		className="footer mt-auto py-3 text-center"
		style={{
			backgroundImage: `url("https://media.musclegrid.io/imafit.com/uploads/2019/03/24200337/star-wars-wallpaper-6-1024x576.jpg")`,
			width: "auto",
			marginTop: "1cm"
		}}>
		<h2>
			<strong>STAR WARS</strong>
		</h2>
		<a href="https://www.instagram.com/?hl=esl" className="fab fa-instagram fa-2x " style={{ margin: "0.5cm" }} />
		<a href="https://www.facebook.com/" className="fab fa-facebook fa-2x fa-lg" style={{ margin: "0.5cm" }} />
		<a
			href="https://blog.twitter.com/es_es.html"
			className="fab fa-twitter fa-2x fa-lg"
			style={{ margin: "0.5cm" }}
		/>
		<a href="https://www.youtube.com/" className="fab fa-youtube fa-2x fa-lg" style={{ margin: "0.5cm" }} />
	</footer>
);
