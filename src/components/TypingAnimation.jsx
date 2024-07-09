import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Animação para o cursor piscante
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const TypingWrapper = styled.div`
	display: inline-block;
	font-family: monospace;
	font-size: 24px;
	white-space: nowrap;
	overflow: hidden;
	position: absolute;
	top: 13%;
	@media (max-width: 800px) {
		top: 11%;
		display: none;
	}
`;

const Cursor = styled.span`
	border-right: 1px solid white;
	animation: ${css`
		${blink} 1s step-end infinite
	`};
`;

const TypingAnimation = ({ messages }) => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		let isMounted = true;
		const typeSpeed = 100; // Velocidade de digitação (ms)
		const deleteSpeed = 50; // Velocidade de deleção (ms)
		const delay = 1000; // Atraso entre digitar e deletar (ms)

		const getRandomIndex = () => {
			return Math.floor(Math.random() * messages.length);
		};

		const typeText = async (text) => {
			for (let i = 0; i <= text.length; i++) {
				if (!isMounted) return;
				setDisplayedText(text.slice(0, i));
				await new Promise((r) => setTimeout(r, typeSpeed));
			}
			await new Promise((r) => setTimeout(r, delay));
			for (let i = text.length; i >= 0; i--) {
				if (!isMounted) return;
				setDisplayedText(text.slice(0, i));
				await new Promise((r) => setTimeout(r, deleteSpeed));
			}
		};

		const loopMessages = async () => {
			while (isMounted) {
				const randomIndex = getRandomIndex();
				setCurrentIndex(randomIndex);
				const message = messages[randomIndex];
				await typeText(message);
			}
		};

		loopMessages();

		return () => {
			isMounted = false;
		};
	}, [messages]);

	return (
		<TypingWrapper>
			{displayedText}
			<Cursor />
		</TypingWrapper>
	);
};

const TypingAnimationContainer = ({ messages }) => {
	return <TypingAnimation messages={messages} />;
};

export default TypingAnimationContainer;
