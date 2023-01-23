import styled from "styled-components";

export const WelcomeWrapper = styled.div`
	height: 24.375rem;
	margin: 0.625rem;
	padding: 3.125rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
	box-shadow: var(--box-shadow);
	gap: 2.5rem;
	background-color: var(--simulation-bg-color);
	animation: entering 1s ease-in-out;

	@keyframes entering {
		from {
			opacity: 0;
			scale: 0.5;
		}

		to {
			opacity: 1;
			scale: 1;
		}
	}
`;

export const Title = styled.h2`
	align-self: center;
	text-align: center;
	color: var(--simulation-text-color);
	font-weight: 800;
`;

export const Description = styled.p`
	width: 28.125rem;
	text-align: justify;
	color: var(--simulation-text-color);
`;

export const BtnSimulation = styled.button`
	padding: 0.9375rem 1.875rem;
	border: none;
	border-radius: 0.5rem;
	background-color: var(--body-bg-color);
	color: var(--simulation-text-color);
	font-weight: 600;
	transition: 0.5s;

	:hover {
		background-color: var(--simulation-text-color);
		color: var(--body-bg-color);
	}
`;
