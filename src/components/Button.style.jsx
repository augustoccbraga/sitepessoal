import styled from "styled-components";

const ButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	margin: 24px 52px;
	padding: 0;
	font-size: 2.25rem;
	font-family: "IBM Plex Mono", serif;
	font-weight: 600;
	color: #eae9fc;
	background: rgba(0, 0, 0, 0);
	border: none;
	gap: 16px;
	cursor: pointer;
	position: relative;
	&::after {
		content: "";
		position: absolute;
		display: block;
		width: 0;
		height: 4px;
		background-color: #eae9fc;
		bottom: -8px;
		border-radius: 2px;
		transition: width 0.5s ease;
	}
	&:hover::after {
		width: 100%;
	}
`;

export default ButtonWrapper;
