import styled from "styled-components";

export const Svg = styled.svg`
	& path {
		fill: ${({ $color }) => $color || "#EAE9FC"};
		transition: fill 0.3s;
	}
	&:hover path {
		fill: ${({ $hoverColor }) => $hoverColor || "#cdcdcd;"};
		transition: fill 0.3s;
	}
`;
