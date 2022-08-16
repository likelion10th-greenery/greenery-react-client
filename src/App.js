import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Nav from './components/nav';
import Category from './components/shop/category';
import Shop from './components/shop';
import Search from './components/shop/search/index';

const GlobalStyle = createGlobalStyle`
	${reset}

	body {
		font-family: "Noto Sans Kr", sans-serif;
		box-sizing: border-box;
		height: 100vh;
		padding: 0 140px;
		margin: 0;
	}

	input {
		outline: none;
	}

	button {
		outline: none;
	}
`;

const RootDiv = styled.div`
	height: 100vh;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<RootDiv>
				<Nav />
				<Search />
				<Category />
				<Shop />
			</RootDiv>
		</>
	);
}

export default App;
