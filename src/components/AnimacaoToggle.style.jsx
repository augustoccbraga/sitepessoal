import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedSvg = styled.svg`
	cursor: pointer;
	&.rotate {
		animation: ${rotate} 0.5s linear;
	}
`;
