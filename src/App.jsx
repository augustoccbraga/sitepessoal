import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Augusto, Github, Linkedin } from "./components/SVGs.jsx";
import GlobalStyle from "./globalStyles.jsx";
import {
	ButtonsContainer,
	ContatoBoxContainer,
	ContatoContainer,
	DetailSection,
	FooterContainer,
	HomeContainer,
	InfoPrimeiraLinhaBox,
	InfoSegundaLinhaBox,
	IntroContainer,
	LogoContainer,
	NavContainer,
	PortfolioContainer,
	PrimeiraLinhaBox,
	SegundaLinhaBox,
	SideNavContainer,
	SvgContainer,
} from "./components/Containers.style.jsx";
import ToggleMode from "./components/ToggleMode.jsx";
import Button from "./components/Button.jsx";
import ProjetoEven from "./components/ProjetoEven.jsx";
import ProjetoOdd from "./components/ProjetoOdd.jsx";
import { motion } from "framer-motion";
import MouseEffect from "./components/MouseEffect.jsx";
import Cube3d from "./components/Cube3d.jsx";
import imgProjeto1 from "./assets/FinanSeeIMG.jpg";
import imgProjeto2 from "./assets/FormularioIMG.jpg";
import Curriculo from "./assets/CV.pdf";
import TypingAnimationContainer from "./components/TypingAnimation.jsx";

const lightTheme = {
	backgroundGradient:
		"linear-gradient(180deg, rgba(16,153,222,1) 0%, rgba(51,85,232,1) 20%, rgba(51,85,232,1) 60%, rgba(13,53,221,1) 80%)",
	backgroundProjetoOdd:
		"linear-gradient(270deg, rgba(38,73,219,1) 0%, rgba(31,67,222,1) 60%, rgba(13,53,221,1) 100%)",
	backgroundProjetoEven:
		"linear-gradient(90deg, rgba(38,73,219,1) 0%, rgba(31,67,222,1) 60%, rgba(13,53,221,1) 100%)",
	backgroundDetalheProjeto: "%230D35DD",
	backgroundDetalheFimProjeto: "%231F43DE",
	boxesContato: "#2F51E1",
	fadeMouseEffect: "rgba(13, 221, 180, 0.25)",
};

const darkTheme = {
	backgroundGradient:
		"linear-gradient(180deg, rgba(95,97,100,1) 0%, rgba(69,71,72,1) 20%, rgba(69,71,72,1) 60%, rgba(36,36,36,1) 80%)",
	backgroundProjetoOdd:
		"linear-gradient(270deg, rgba(69,71,72,1) 0%, rgba(48,48,48,1) 60%, rgba(20,20,20,1) 100%)",
	backgroundProjetoEven:
		"linear-gradient(90deg, rgba(69,71,72,1) 0%, rgba(48,48,48,1) 60%, rgba(20,20,20,1) 100%)",
	backgroundDetalheProjeto: "%23141414",
	backgroundDetalheFimProjeto: "%23303030",
	boxesContato: "#454748",
	fadeMouseEffect: "rgba(95, 97, 100, 0.5)",
};

function App() {
	const [theme, setTheme] = React.useState(() => {
		const preference = window.localStorage.getItem("preference");
		return preference === "dark" ? "dark" : "light";
	});
	const [animateScrollHeader, setAnimateScrollHeader] = React.useState(false);
	const [animateScrollSide, setAnimateScrollSide] = React.useState(false);
	const [scrollSection, setScrollSection] = React.useState(1);
	const [animateToggle, setAnimateToggle] = React.useState(false);
	const [showOddProject, setShowOddProject] = React.useState(false);
	const [showEvenProject, setShowEvenProject] = React.useState(false);
	const [device, setDevice] = React.useState(null);
	const messages = [
		"Olá, 👋 eu sou Augusto!",
		"Bem-vindo ao meu site! 😁",
		"Estou cursando TI na UFRN. 📚",
		"Gosto de programar e aprender. 💻",
		"Busco minha primeira oportunidade na área. 🔍",
		"Adoro jogos 🎮 e músicas. 🎧",
		"Espero que goste do site!",
	];

	const determineDevice = () => {
		const width = window.innerWidth;
		switch (true) {
			case width >= 1400:
				setDevice("normal");
				break;
			case width < 1400 && width >= 800:
				setDevice("small");
				break;
			case width < 800:
				setDevice("mobile");
				break;
			default:
				setDevice(null);
		}
	};

	useEffect(() => {
		window.localStorage.setItem("preference", theme);
		determineDevice();
		window.addEventListener("resize", determineDevice);
		return () => window.removeEventListener("resize", determineDevice);
	}, [theme]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth >= 1400) {
				if (window.scrollY > 50) {
					setAnimateScrollHeader(true);
					setAnimateScrollSide(true);
				} else {
					setAnimateScrollHeader(false);
					setAnimateScrollSide(true);
				}
				if (window.scrollY >= 0 && window.scrollY <= 1000) {
					setScrollSection(1);
				} else if (window.scrollY > 1000 && window.scrollY <= 2900) {
					setScrollSection(2);
				} else {
					setScrollSection(3);
				}
			} else {
				setAnimateScrollHeader(false);
				setAnimateScrollSide(false);
			}
			if (scrollY >= 700) {
				setShowOddProject(true);
			}
			if (scrollY >= 1400) {
				setShowEvenProject(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
		setAnimateToggle(true);
		const timeout = setTimeout(() => setAnimateToggle(false), 1000);
		return () => clearTimeout(timeout);
	}

	const handleNav = (e) => {
		let selectedNav = e.target.innerHTML;
		switch (selectedNav) {
			case "Sobre":
				window.scrollTo(0, 400);
				break;
			case "Projetos":
				window.scrollTo(0, 1300);
				break;
			case "Contato":
				window.scrollTo(0, 3200);
				break;
		}
	};

	const currentTheme = theme === "dark" ? darkTheme : lightTheme;

	const variants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 },
		hiddenRight: { opacity: 0, x: 0 },
		visibleRight: { opacity: 1, x: -20 },
		hiddenOdd: { opacity: 0, x: window.innerWidth < 800 ? 0 : 100 },
		visibleOdd: { opacity: 1, x: 0 },
		hiddenEven: { opacity: 0, x: window.innerWidth < 800 ? 0 : -100 },
		visibleEven: { opacity: 1, x: 0 },
	};

	return (
		<ThemeProvider theme={currentTheme}>
			<MouseEffect>
				<GlobalStyle background={theme === "dark" ? "black" : "white"} />

				<NavContainer
					as={motion.header}
					initial="visible"
					animate={animateScrollHeader ? "hidden" : "visible"}
					variants={variants}
				>
					<LogoContainer>
						<Augusto />
					</LogoContainer>

					<motion.ul
						initial="visible"
						animate={animateScrollHeader ? "hidden" : "visible"}
						variants={variants}
					>
						<motion.li variants={variants}>
							<a onClick={handleNav}>Sobre</a>
						</motion.li>
						<motion.li variants={variants}>
							<a onClick={handleNav}>Projetos</a>
						</motion.li>
						<motion.li variants={variants}>
							<a onClick={handleNav}>Contato</a>
						</motion.li>
						<motion.li>
							<ToggleMode
								mode={theme}
								$animate={animateToggle}
								onClick={toggleTheme}
							/>
						</motion.li>
					</motion.ul>
				</NavContainer>

				{animateScrollHeader ? (
					<SideNavContainer>
						<motion.ul
							as={motion.nav}
							initial="visible"
							animate={animateScrollSide ? "visibleRight" : "hiddenRight"}
							variants={variants}
						>
							<motion.li variants={variants}>
								<a onClick={handleNav}>Sobre</a>
								{scrollSection === 1 ? <DetailSection /> : ""}
							</motion.li>
							<motion.li variants={variants}>
								<a onClick={handleNav}>Projetos</a>
								{scrollSection === 2 ? <DetailSection /> : ""}
							</motion.li>
							<motion.li variants={variants}>
								<a onClick={handleNav}>Contato</a>
								{scrollSection === 3 ? <DetailSection /> : ""}
							</motion.li>
							<motion.li variants={variants}>
								<ToggleMode
									mode={theme}
									$animate={animateToggle}
									onClick={toggleTheme}
								/>
							</motion.li>
						</motion.ul>
					</SideNavContainer>
				) : (
					""
				)}
				<HomeContainer>
					<IntroContainer>
						<TypingAnimationContainer messages={messages} />
						<h1>Sobre</h1>
						<p>
							Estou procurando minha primeira oportunidade na área de
							programação. Sempre aprendendo e aprimorando meus conhecimentos,
							busco sempre ser eficiente e proativo.
							{device === "normal" ? (
								<>
									<br />
									<br />
									<strong>
										Gire o cubo para ver algumas das minhas competências!
									</strong>
								</>
							) : (
								""
							)}
						</p>

						<ButtonsContainer>
							<a href={Curriculo} download="Curriculo_Augusto">
								<Button texto="CURRICULO" svg="download" />
							</a>

							<Button
								texto="CONTATO"
								svg="setaContato"
								onclick={() => {
									window.scrollTo(0, 3200);
								}}
							/>
						</ButtonsContainer>
					</IntroContainer>
					{device === "normal" && <Cube3d />}
				</HomeContainer>
				<PortfolioContainer>
					<h1>Portfólio</h1>

					<motion.div
						initial="hiddenOdd"
						animate={showOddProject ? "visibleOdd" : "hiddenOdd"}
						variants={variants}
					>
						<ProjetoOdd
							titulo="Finansee"
							techs="react, reactRouter, redux, styledComponents, html, javascript"
							img={imgProjeto1}
							device={device}
							page="https://projeto-finansee.vercel.app"
						>
							<p>
								Site de gerenciamento de finanças, onde você pode criar uma
								conta para acessar todas as funcionalidades exclusivas. Na tela
								de gerenciamento, você tem a capacidade de realizar operações
								<strong> CRUD</strong> (Criar, Ler, Atualizar e Deletar)
								diretamente no front-end utilizando <strong>Redux</strong>,
								proporcionando uma experiência fluida e responsiva. O FinanSee
								foi estruturado em <strong>React</strong> com{" "}
								<strong>Vite</strong>, garantindo alta performance e rápida
								construção, e estilizado com <strong>Styled Components</strong>.
							</p>
						</ProjetoOdd>
					</motion.div>
					<motion.div
						initial="hiddenEven"
						animate={showEvenProject ? "visibleEven" : "hiddenEven"}
						variants={variants}
					>
						<ProjetoEven
							titulo="Formulário"
							techs="react, javascript, css3, html"
							img={imgProjeto2}
							device={device}
							page="https://formulario-job.vercel.app"
						>
							<p>
								Site simples para candidaturas de trabalho. O usuário preenche
								as informações necessárias e obrigatórias, e, utilizando
								<strong> React</strong> e <strong>regex</strong>, os campos são
								validados automaticamente após a inserção das informações. O
								site foi desenvolvido com <strong>React </strong>e
								<strong> Vite</strong>, aproveitando conhecimentos de
								<strong> regex</strong> e estilizado com módulos utilizando
								<strong> CSS</strong>.
							</p>
						</ProjetoEven>
					</motion.div>
				</PortfolioContainer>
				<ContatoContainer>
					<h1>Contato</h1>
					<ContatoBoxContainer>
						<PrimeiraLinhaBox>
							<SvgContainer>
								<a href="https://linkedin.com/in/augustoccb">
									<Linkedin />
								</a>
							</SvgContainer>
							<InfoPrimeiraLinhaBox>
								<h3>
									Se gostou do site e(ou) dos projetos que fiz, fique a vontade
									para se conectar comigo no LinkedIn ou entrar em contato!
								</h3>
							</InfoPrimeiraLinhaBox>
						</PrimeiraLinhaBox>
						<SegundaLinhaBox>
							<InfoSegundaLinhaBox>
								<h3>augustoccb.br@gmail.com</h3>
								<h3>(84) 98607-9056</h3>
							</InfoSegundaLinhaBox>
							<SvgContainer>
								<a href="https://github.com/augustoccbraga">
									<Github />
								</a>
							</SvgContainer>
						</SegundaLinhaBox>
					</ContatoBoxContainer>
				</ContatoContainer>
				<FooterContainer>
					<p>2024 @ All rights reserved</p>
				</FooterContainer>
			</MouseEffect>
		</ThemeProvider>
	);
}

export default App;
