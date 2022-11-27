import { FlexBox } from 'components/common';

const { default: styled } = require('styled-components');

const APP_KEY = '63d54236bd871ba909f5f0ba5447a8e1';
const CLIENT_ID = '5387724f66acc29adcf293571cd0ecb5';
const REDIRECT_URI = 'http://localhost:3000/accounts/login/kakao/callback';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoBtn = styled.div`
	background-color: #fee500;
	margin: 10px auto;
	color: #000;
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
`;

const Img = styled.img`
	background-color: #fee500;
	width: 48px;
	height: 48px;
	border-radius: 5px;
`;

const ImgBox = styled.div`
	width: 40px;
	height: 40px;

	background-image: url('/icons/kakao-new.png');
	background-size: cover;
	background-position: center;
`;

const KakaoLogin = () => {
	return (
		<a href={KAKAO_AUTH_URL}>
			<FlexBox center background="#fee500" width="48px" height="48px" borderRadius="5px">
				<ImgBox alt="kakao" />
			</FlexBox>
			{/* <Img src="/icons/kakao.png" /> */}
		</a>
	);
};

export default KakaoLogin;
