import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Nav from './components/nav';
import Footer from './components/footer';
import Routes from './routes/Routes';

const GlobalStyle = createGlobalStyle`
	${reset}

	body {
		font-family: "Noto Sans Kr", sans-serif;
		box-sizing: border-box;
		position: relative;
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

	a {
		text-decoration: none;
		color: #000;
	}
`;

const RootDiv = styled.div`
	min-height: 100vh;
	padding-bottom: 380px; // footer 공간 마련
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<RootDiv>
				<Nav />
				<Routes />
			</RootDiv>
			<Footer />
		</>
	);
}

export default App;
