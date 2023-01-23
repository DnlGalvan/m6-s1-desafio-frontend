import styled from "styled-components";

export const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(204, 204, 204, 0.3);
	backdrop-filter: blur(0.1875rem);
`;

export const Spinner = styled.div`
	width: 3.125rem;
	height: 3.125rem;
	border: 0.625rem solid var(--loading-border);
	border-top: 0.625rem solid var(--loading-border-top);
	border-radius: 50%;
	animation: spinner 1.5s linear infinite;
	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
