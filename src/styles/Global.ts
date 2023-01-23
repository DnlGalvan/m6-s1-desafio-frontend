import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --body-bg-color: #C0C0C0;
		--simulation-bg-color: #FFFF;
		--simulation-text-color: #696969;
		--input-border: #DCDCDC;
		--input-border-focus: #1E90FF;
		--error-color: #FF0000;
		--result-bg-color: #F0F8FF;
		--result-text-color: #4682B4;
		--result-bg-error-color: #FFF0F5;
		--loading-border: #4682B4;
		--loading-border-top: #FFFF;
		--font-family: "Montserrat", sans-serif;
		--box-shadow: 0rem 0rem 0.9375rem 0.3125rem #3D3D3D;
    }

	* {
		margin:0;
		padding:0;
		box-sizing: border-box;
		font-family: var(--font-family);
	}

	#root {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	body {
		height: 100vh;
		width: 100vw;
		background: var(--body-bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
	}

	button {
		cursor:pointer;
	}

	ul, ol, li {
		list-style:none;
	}

	input:focus {
		border: 0.125rem solid var(--input-border-focus);
	}

	input:invalid {
		border: 0.125rem solid var(--input-invalid-color);
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="number"] {
		-moz-appearance: textfield;
	}

	
`;
