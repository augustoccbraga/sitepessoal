import React, { useState } from "react";
import {
	ProjetoEvenContainer,
	DetalheEvenProjeto,
	DetalheEvenProjetoFim,
	InfoEvenProjeto,
	ButtonsContainer,
} from "./Containers.style.jsx";
import { SetaProjetoEsq } from "./SVGs.jsx";
import BadgeTechs from "./BadgeTechs.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImgProjeto from "./ImgProjeto.jsx";
import Button from "./Button.jsx";

const ProjetoEven = ({ titulo, techs, img, children, device, page }) => {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();

	const handleClick = (e) => {
		if (
			e.target.tagName !== "H2" &&
			e.target.tagName !== "P" &&
			!e.target.closest(".badge-techs")
		) {
			//navigate(`/projetos/${page}/index.html`);
		}
	};

	return (
		<ProjetoEvenContainer
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleClick}
			$device={device}
			$page={page}
		>
			<DetalheEvenProjeto />
			<DetalheEvenProjetoFim />
			{device === "normal" ? (
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: isHovered ? [0, -10, 0] : 0 }}
					transition={{
						type: "tween",
						duration: 1,
						repeat: isHovered ? Infinity : 0,
					}}
				>
					<SetaProjetoEsq />
				</motion.div>
			) : (
				""
			)}

			<InfoEvenProjeto>
				<h2>{titulo}</h2>
				<BadgeTechs className="badge-techs" techs={techs} />
				{children}
				{device !== "normal" ? (
					<ButtonsContainer $gridArea="3/2">
						<Button texto="VISIT" svg="setaContato" onclick={() => {}} />
					</ButtonsContainer>
				) : (
					""
				)}
			</InfoEvenProjeto>

			<ImgProjeto evenOrOdd="even" src={img} />
		</ProjetoEvenContainer>
	);
};

export default ProjetoEven;
