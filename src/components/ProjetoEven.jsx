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
import ImgProjeto from "./ImgProjeto.jsx";
import Button from "./Button.jsx";

const ProjetoEven = ({ titulo, techs, img, children, device, page }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<ProjetoEvenContainer
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			$device={device}
			$page={page}
		>
			<DetalheEvenProjeto />
			<DetalheEvenProjetoFim />
			<a href={page} target="_blank" rel="noopener noreferrer">
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
			</a>

			<InfoEvenProjeto>
				<h2>{titulo}</h2>
				<BadgeTechs className="badge-techs" techs={techs} />
				{children}
				{device !== "normal" ? (
					<a href={page} target="_blank" rel="noopener noreferrer">
						<ButtonsContainer $gridArea="3/2">
							<Button texto="VISIT" svg="setaContato" onclick={() => {}} />
						</ButtonsContainer>
					</a>
				) : (
					""
				)}
			</InfoEvenProjeto>

			<a href={page} target="_blank" rel="noopener noreferrer">
				<ImgProjeto evenOrOdd="even" src={img} />
			</a>
		</ProjetoEvenContainer>
	);
};

export default ProjetoEven;
