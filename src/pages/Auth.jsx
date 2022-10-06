import Login from 'components/Auth/Login';
import { FlexBox } from 'components/common';
import styled from 'styled-components';
// import { useState } from 'react';

const Logo = styled.img`
	width: auto;
	height: 3rem;
	cursor: pointer;
	margin-bottom: 3rem;
`;

const Auth = () => {
	// const [auth, setAuth] = useState(0);
	return (
		<FlexBox column justifyContent="center" alignItems="center" height="100%">
			<Logo src="images/logo.png" />
			<Login />
		</FlexBox>
	);
};

export default Auth;
