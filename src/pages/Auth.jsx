import Login from 'components/Auth/Login';
import Signup from 'components/Auth/Signup';
import { FlexBox } from 'components/common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Logo = styled.img`
	width: auto;
	height: 3rem;
	cursor: pointer;
	margin-bottom: 3rem;
`;

const Auth = () => {
	const [auth, setAuth] = useState(false);
	const navigate = useNavigate();

	return (
		<FlexBox column justifyContent="center" alignItems="center" height="100%">
			<Logo src="images/logo.png" onClick={() => navigate('/')} />
			{!auth ? <Login auth={auth} setAuth={setAuth} /> : <Signup auth={auth} setAuth={setAuth} />}
		</FlexBox>
	);
};

export default Auth;
