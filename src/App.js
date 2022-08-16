import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Nav from './components/nav';

const GlobalStyle = createGlobalStyle`
	${reset}

	body {
		font-family: "Noto Sans Kr", sans-serif;
		box-sizing: border-box;
		height: 100vh;
		padding: 0 140px;
		margin: 0;
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
			</RootDiv>
		</>
	);
}

export default App;
