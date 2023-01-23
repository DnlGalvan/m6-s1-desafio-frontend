import styled from "styled-components";

export const Label = styled.label`
	height: 1.875rem;
	display: flex;
	align-items: center;
	color: var(--simulation-text-color);
`;

export const Input = styled.input`
	height: 3.125rem;
	padding-left: 0.3125rem;
	border: 0.125rem solid var(--input-border);
	border-radius: 0.3125rem;
	-webkit-transition: 0.35s;
	transition: 0.35s;
	outline: none;

	::-webkit-input-placeholder {
		color: var(--body-bg-color);
		font-weight: 600;
	}

	:-ms-input-placeholder {
		color: var(--body-bg-color);
		font-weight: 600;
	}

	::placeholder {
		color: var(--body-bg-color);
		font-weight: 600;
	}
`;

export const Span = styled.span`
	height: 1.25rem;
	display: flex;
	align-items: center;
	color: var(--error-color);
	animation: fadein 3s;
	-webkit-animation: fadein 3s;

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	svg {
		margin: 0 0.3125rem;
	}
`;
