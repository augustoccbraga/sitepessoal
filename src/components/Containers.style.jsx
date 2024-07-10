import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const svgBackgroundDetalheProjetoFim = (width, height, fill) => `
  url("data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 ${width} ${height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='${width}' height='${height}' fill='${fill}'/%3E%3C/svg%3E%0A");
`;

const svgBackgroundDetalheProjeto = (width, height, fill) => `
  url("data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 ${width} ${height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M180 0H0V175L180 0Z' fill='${fill}'/%3E%3C/svg%3E ");
`;

export const NavContainer = styled(motion.header)`
	margin: 0 auto;
	padding: 80px 120px;
	display: flex;
	justify-content: space-between;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		list-style: none;
		gap: 100px;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1300px) {
		display: grid;
		grid-template-rows: 1fr 1fr;
		align-items: center;
		justify-content: center;
		gap: 32px;
	}

	@media (max-width: 800px) {
		flex-direction: column;
		padding: 40px;
		justify-content: center;
		align-items: center;
		ul {
			flex-direction: row;
			gap: 20px;
		}
	}
`;

export const LogoContainer = styled.div`
	margin: 0;
	padding: 0;
	text-align: center;
`;

export const SideNavContainer = styled(motion.nav)`
	position: fixed;
	right: 40px;
	z-index: 1000;
	margin: 0 auto;
	display: flex;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		list-style: none;
		gap: 20px;
		justify-content: center;
		align-items: end;
	}

	@media (max-width: 1700px) {
		right: -20px;
	}
	@media (max-width: 1600px) {
		right: -40px;
	}
	@media (max-width: 1400px) {
		display: none;
	}
`;

export const DetailSection = styled.span`
	display: inline-block;
	width: 16px;
	height: 8px;
	background-color: #eae9fc;
	margin: 4px;
	border-radius: 8px 0px 0px 8px;
`;

export const HomeContainer = styled.section`
	margin: 0 auto;
	padding: 380px 240px 255px;
	display: grid;
	grid-template-columns: 800px 500px;
	justify-content: center;

	@media (max-width: 1400px) {
		padding: 320px 120px 140px;
		grid-template-columns: 1fr;
	}

	@media (max-width: 800px) {
		padding: 180px 80px 120px;
		grid-template-columns: 1fr;
	}

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		padding: 180px 20px 120px;
	}
`;

export const IntroContainer = styled.div`
	h1 {
		margin-bottom: 80px;
	}
	p {
		margin-bottom: 42px;
	}

	@media (max-width: 800px) {
		h1 {
			margin-bottom: 40px;
		}
		p {
			margin-bottom: 21px;
		}
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	grid-area: ${(props) => props.$gridArea};
	@media (max-width: 800px) {
		flex-direction: row;
		gap: 10px;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		gap: 20px;
		align-items: center;
		justify-content: center;
	}
`;

export const CuboContainer = styled.div`
	width: 500px;
	height: 500px;

	@media (max-width: 800px) {
		width: 300px;
		height: 300px;
	}
`;

export const PortfolioContainer = styled.section`
	margin: 0 auto 420px;
	padding: 0px 240px;
	display: grid;
	grid-template-rows: 82px 675px 675px;
	grid-template-columns: 1300px;
	justify-content: center;

	@media (max-width: 1400px) {
		h1 {
			margin-left: 120px;
			margin-bottom: 60px;
		}
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		margin: 60px auto;
		padding: 0;
	}

	@media (max-width: 800px) {
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		gap: 0px;
	}
	@media (max-width: 600px) {
		margin: 0;
		padding: 0;
		h1 {
			margin-left: 20px;
		}
	}
`;

export const ProjetoOddContainer = styled.div`
	margin: 60px auto;
	display: grid;
	grid-template-columns: 425px 800px 95px;
	position: relative;
	align-items: center;
	justify-items: center;
	left: -160px;
	width: 1320px;
	height: 500px;
	background: ${({ theme }) => theme.backgroundProjetoOdd};

	a {
		display: contents;
	}

	@media (max-width: 1400px) {
		width: 100%;
		grid-template-columns: 1fr 1fr;
		left: 0;
		height: 500px;
		gap: 0;
		margin: 0;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		width: 100%;
		left: 0;
		height: auto;
		padding: 0px;
	}
`;

export const InfoOddProjeto = styled.div`
	display: grid;
	grid-template-rows: 1fr 3fr;
	grid-template-columns: 250px 450px;
	gap: 16px;
	justify-content: center;
	align-self: center;

	p {
		grid-column-start: 1;
		grid-column-end: -1;
		padding: 0;
		height: max-content;
	}

	@media (max-width: 1400px) {
		margin: auto 60px;
		grid-template-rows: 1fr 200px 1fr;
	}

	@media (max-width: 800px) {
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		margin: 20px 40px;
	}
`;

export const DetalheOddProjeto = styled.span`
	display: block;
	position: absolute;
	width: 180px;
	height: 175px;
	bottom: -175px;
	left: 1140px;
	background-image: ${({ theme }) =>
		svgBackgroundDetalheProjeto(180, 175, theme.backgroundDetalheProjeto)};
	background-repeat: no-repeat;
	background-size: contain;
	cursor: default;

	@media (max-width: 1400px) {
		display: none;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

export const DetalheOddProjetoFim = styled.span`
	display: block;
	position: absolute;
	width: 300px;
	height: 500px;
	top: 175px;
	right: -120px;
	z-index: -1;
	background-image: ${({ theme }) =>
		svgBackgroundDetalheProjetoFim(
			300,
			500,
			theme.backgroundDetalheFimProjeto
		)};
	background-repeat: no-repeat;
	background-size: contain;
	@media (max-width: 1400px) {
		display: none;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

export const ProjetoEvenContainer = styled.div`
	margin: 340px auto;
	display: grid;
	grid-template-columns: 95px 800px 425px;
	position: relative;
	align-items: center;
	justify-items: center;
	left: -40px;
	width: 1320px;
	height: 500px;
	background: ${({ theme }) => theme.backgroundProjetoEven};

	a {
		display: contents;
	}

	@media (max-width: 1400px) {
		display: grid;
		grid-template-columns: 70% 30%;
		width: 100%;
		left: 0;
		height: 500px;
		gap: 0;
		margin: 0;
	}

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		left: 0;
		height: auto;
		gap: 20px;
		padding: 0;
	}
`;

export const InfoEvenProjeto = styled.div`
	display: grid;
	grid-template-rows: 1fr 3fr;
	grid-template-columns: 450px 250px;
	gap: 16px;
	justify-content: center;
	align-self: center;
	cursor: default;

	h2 {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 1;
	}
	p {
		grid-column-start: 1;
		grid-column-end: -1;
	}

	@media (max-width: 1400px) {
		margin: auto 60px;
		grid-template-rows: 1fr 200px 1fr;
	}

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		margin: 20px 40px;
	}
`;

export const DetalheEvenProjeto = styled.span`
	display: block;
	position: absolute;
	width: 180px;
	height: 175px;
	top: -175px;
	left: 0px;
	rotate: 180deg;
	background-image: ${({ theme }) =>
		svgBackgroundDetalheProjeto(180, 175, theme.backgroundDetalheProjeto)};
	background-repeat: no-repeat;
	background-size: contain;
	cursor: default;
	@media (max-width: 1400px) {
		display: none;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

export const DetalheEvenProjetoFim = styled.span`
	display: block;
	position: absolute;
	width: 300px;
	height: 500px;
	top: -175px;
	left: -120px;
	z-index: -1;
	background-image: ${({ theme }) =>
		svgBackgroundDetalheProjetoFim(
			300,
			500,
			theme.backgroundDetalheFimProjeto
		)};
	background-repeat: no-repeat;
	background-size: contain;
	@media (max-width: 1400px) {
		display: none;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

export const ContatoContainer = styled.section`
	margin: 0 auto 220px;
	padding: 0px 240px;
	display: grid;
	grid-template-rows: 82px 740px;
	grid-template-columns: 1300px;
	justify-content: center;
	gap: 60px;

	@media (max-width: 1400px) {
		margin: 0;
		padding: 0px 120px;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		gap: 60px;
	}

	@media (max-width: 800px) {
		padding: 0px 120px;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	@media (max-width: 600px) {
		h1 {
			margin-left: 20px;
		}
		padding: 0;
	}
`;

export const ContatoBoxContainer = styled.div`
	display: grid;
	grid-template-rows: 360px 360px;
	gap: 16px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 800px) {
		grid-template-rows: auto;
	}
`;

export const PrimeiraLinhaBox = styled.div`
	display: grid;
	grid-template-columns: 360px 904px;
	gap: 16px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

export const SegundaLinhaBox = styled.div`
	display: grid;
	grid-template-columns: 904px 360px;
	gap: 16px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

const boxStyles = css`
	background-color: ${(props) => props.theme.boxesContato};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1400px) {
		padding: 40px;
	}
`;

export const SvgContainer = styled.div`
	${boxStyles}
	@media (max-width: 380px) {
		padding: 20px;
	}
	&:first-child {
		@media (max-width: 1400px) {
			border-radius: 0px 32px 0px 0px;
		}
		@media (max-width: 450px) {
			border-radius: 0;
		}
	}
	&:last-child {
		@media (max-width: 1400px) {
			border-radius: 0px 0px 0px 32px;
		}
		@media (max-width: 450px) {
			border-radius: 0;
		}
	}
`;

export const InfoPrimeiraLinhaBox = styled.div`
	${boxStyles}
	padding: 60px;
	border-radius: 0px 32px 0px 0px;

	@media (max-width: 1400px) {
		border-radius: 0px;
	}

	@media (max-width: 800px) {
		padding: 30px;
		border-radius: 0px;
	}
`;

export const InfoSegundaLinhaBox = styled.div`
	${boxStyles}
	padding: 60px;
	flex-direction: column;
	gap: 40px;
	align-items: flex-end;
	border-radius: 0px 0px 0px 32px;
	text-align: end;

	@media (max-width: 1400px) {
		border-radius: 0px;
		align-items: center;
	}

	@media (max-width: 800px) {
		padding: 30px;
		border-radius: 0px;
	}
`;

export const FooterContainer = styled.footer`
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 60px;

	@media (max-width: 800px) {
		padding: 30px;
	}
`;
