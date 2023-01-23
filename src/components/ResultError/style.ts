import styled from "styled-components";

export const ErrorWrapper = styled.div`
	width: 70%;
	height: 100%;
	padding: 3.125rem;
	border-radius: 0.5rem;
	background-color: var(--result-bg-error-color);
	color: var(--error-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.875rem;
`;

export const TitleResult = styled.h3`
	border-bottom: 0.0625rem solid var(--error-color);
	font-size: 2.1875rem;
	font-style: italic;
`;

export const Message = styled.p`
	font-size: 1.5625rem;
	font-style: italic;
`;
