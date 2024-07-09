import React, { useState } from "react";
import {
	ProjetoOddContainer,
	DetalheOddProjeto,
	DetalheOddProjetoFim,
	InfoOddProjeto,
	ButtonsContainer,
} from "./Containers.style.jsx";
import { SetaProjetoDir } from "./SVGs.jsx";
import BadgeTechs from "./BadgeTechs.jsx";
import { motion } from "framer-motion";
import ImgProjeto from "./ImgProjeto.jsx";
import Button from "./Button.jsx";

const ProjetoOdd = ({ titulo, techs, img, children, device, page }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<ProjetoOddContainer
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			$device={device}
			$page={page}
		>
			<DetalheOddProjeto />
			<DetalheOddProjetoFim />
			<InfoOddProjeto>
				<h2>{titulo}</h2>
				<BadgeTechs techs={techs} />
				{children}
				{device === "normal" ? (
					""
				) : (
					<a href={page} target="_blank" rel="noopener noreferrer">
						<ButtonsContainer>
							<Button texto="VISIT" svg="setaContato" onclick={() => {}} />
						</ButtonsContainer>
					</a>
				)}
			</InfoOddProjeto>
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
						<SetaProjetoDir />
					</motion.div>
				) : (
					""
				)}

				<ImgProjeto evenOrOdd="odd" src={img} />
			</a>
		</ProjetoOddContainer>
	);
};

export default ProjetoOdd;
