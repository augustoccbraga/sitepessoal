import React from "react";
import styled from "styled-components";

const badges = {
	html: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
	javascript:
		"https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
	css3: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
	typescript:
		"https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
	react:
		"https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
	reactRouter:
		"https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
	reactQuery:
		"https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white",
	redux:
		"https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
	zustand:
		"https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white",
	styledComponents:
		"https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
	tailwind:
		"https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
	node:
		"https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
	express:
		"https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
	prisma:
		"https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white",
	mongoDB:
		"https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
	zod:
		"https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white",
	axios:
		"https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white",
	threeJS:
		"https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white",
};

const TechContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	img {
		height: 20px;
		width: fit-content;
		margin: 5px;
	}
`;

const BadgeTechs = ({ techs }) => {
	return (
		<TechContainer>
			{techs.split(", ").map((tech) => (
				<img key={tech} src={badges[tech]} alt={tech} />
			))}
		</TechContainer>
	);
};

export default BadgeTechs;
