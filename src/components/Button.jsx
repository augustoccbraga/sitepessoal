import React from "react";
import Download from "../assets/download.svg";
import SetaContato from "../assets/setaContato.svg";
import ButtonWrapper from "./Button.style.jsx";

const icons = {
	download: (
		<img src={Download} alt="Download Icon" width="36px" height="36px" />
	),
	setaContato: (
		<img src={SetaContato} alt="Seta Contato Icon" width="36px" height="30px" />
	),
};

const Button = ({ texto, svg, onclick }) => {
	return (
		<ButtonWrapper onClick={onclick}>
			{texto}
			{icons[svg]}
		</ButtonWrapper>
	);
};

export default Button;
