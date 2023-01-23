import styled from "styled-components";

export const Container = styled.div`
	width: 45rem;
	height: 30rem;
	margin: 0.625rem;
	border-radius: 0.5rem;
	box-shadow: var(--box-shadow);
	background-color: var(--simulation-bg-color);
	display: flex;
	justify-content: center;
	align-items: center;
	animation: entering 1s ease-in-out;
	
	@keyframes entering {
		0% {
			color: transparent;
			transform: translateX(-6.25rem);
			filter: opacity(0);
		}
		100% {
			transform: translateX(0rem);
			filter: opacity(1);
		}
	}

	@media screen and (max-width: 375px) {
		padding: 1.25rem;
	}

	@media screen and (max-width: 569px) {
		height: auto;
		flex-direction: column;
	}
`;

export const ContainerForm = styled.div`
	width: 100%;
	height: 100%;
	padding: 3.125rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	@media screen and (max-width: 375px) {
		padding: 0;
	}
`;

export const TitleSimulation = styled.h2`
	color: var(--simulation-text-color);
	font-size: 1.5rem;
	font-weight: 600;
`;

export const FormWrapper = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 0.125rem;
`;

export const ContainerResult = styled.ul`
	width: 70%;
	height: 100%;
	padding: 3.125rem;
	border-radius: 0.5rem;
	background-color: var(--result-bg-color);
	color: var(--result-text-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.875rem;

	@media screen and (max-width: 375px) {
		padding: 1rem;
		width: 100%;
	}
`;

export const TitleResult = styled.h3`
	border-bottom: 0.0625rem solid var(--result-text-color);
	height: 1.875rem;
	font-style: italic;
`;
