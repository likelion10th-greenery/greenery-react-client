import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Icon = styled.div`
	width: 3rem;
	height: 3rem;
	background-image: url('icons/btnG_icon_square.png');
	background-size: cover;
	cursor: pointer;
`;

const NaverLogin = () => {
	const { naver } = window;
	const location = useLocation();

	const CLIENT_ID = '7T7w55f77AbZJtSOXk6y';

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: CLIENT_ID,
			callbackUrl: 'http://127.0.0.1:8000/accounts/login/naver/callback/',
			isPopup: false, // 팝업으로 로그인을 진행할 것인지?
			loginButton: { color: 'green', type: 1, height: 1 },
			// userLoginButton: ??,
			callbackHandle: true,
		});

		naverLogin.init();

		naverLogin.getLoginStatus(async status => {
			if (status) {
				const userId = naverLogin.user.getEmail();
				const username = naverLogin.user.getName();
			}
		});
	};

	const userAccessToken = () => {
		location.includes('access_token') && getToken();
	};

	const getToken = () => {
		const token = location.split('=')[1].split('&')[0];
		console.log(token);
	};

	useEffect(() => {
		initializeNaverLogin();
	});

	return <Icon id="naverIdLogin">{/* <img src="icons/btnG_icon_square.png" /> */}</Icon>;
};

export default NaverLogin;
