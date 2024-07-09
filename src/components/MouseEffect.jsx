import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

const MainContainer = styled.main`
	position: relative;
`;

const BackgroundEffect = styled.div.attrs((props) => ({
	style: {
		background: `radial-gradient(300px at ${props.x}px ${props.y}px, ${props.theme.fadeMouseEffect}, transparent 100%)`,
		transition: "background 0.2s ease-out",
	},
}))`
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	filter: blur(4px);
	@media (max-width: 800px) {
		display: none;
	}
`;

const MouseEffect = ({ children }) => {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
	const theme = useTheme();

	useEffect(() => {
		const handleMouseMove = (event) => {
			setCoordinates({ x: event.clientX, y: event.clientY + window.scrollY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<MainContainer>
			<BackgroundEffect x={coordinates.x} y={coordinates.y} theme={theme} />
			{children}
		</MainContainer>
	);
};

export default MouseEffect;
