import React, { useEffect } from "react";
import styled from "styled-components";
// import { ImgProjetoEven, ImgProjetoOdd } from "./Containers.style";

const ImgProjetoOdd = styled.img.attrs((props) => ({
	style: {
		objectPosition: `${-props.x}px`,
	},
}))`
	width: 425px;
	height: 500px;
	grid-area: 1;
	object-fit: cover;
	object-position: 0%;
	@media (max-width: 1400px) {
		width: 100%;
	}
	@media (max-width: 1000px) {
		display: none;
	}
`;

const ImgProjetoEven = styled.img.attrs((props) => ({
	style: {
		objectPosition: `${-props.x}px`,
	},
}))`
	width: 425px;
	height: 500px;
	top: 0;
	left: 895px;
	object-fit: cover;
	object-position: 100%;
	@media (max-width: 1400px) {
		width: 100%;
	}
	@media (max-width: 1000px) {
		display: none;
	}
`;

const ImgProjeto = ({ src, evenOrOdd }) => {
	const [coordinates, setCoordinates] = React.useState({ x: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setCoordinates({ x: event.clientX / 10 });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return evenOrOdd === "odd" ? (
		<ImgProjetoOdd src={src} x={coordinates.x} alt="" />
	) : (
		<ImgProjetoEven src={src} x={coordinates.x} alt="" />
	);
};

export default ImgProjeto;
