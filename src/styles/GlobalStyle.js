import { createGlobalStyle } from 'styled-components';
import { COLOR } from '../utils/color';

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		height: 100%;
		background-color: ${COLOR.white}
	}
	
	* {
		box-sizing: border-box;
	}
	
	body {
		background-color: ${COLOR.white};
		color: ${COLOR.black};
		font-family: "ASD-Light";
		font-size: 16px;
		height: 100%;
	}
	
	a {
		color: inherit;
		text-decoration: none;
	}
	
	input, button {
		background-color: transparent;
		border: none;
		outline: none;
	}

	ol, ul, li {
		list-style: none;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

export default GlobalStyle;
