import axios from 'axios';
import { useEffect } from 'react';

const KakaoRedirectHandler = () => {
	useEffect(() => {
		let params = new URL(document.location.toString()).searchParams;
		let code = params.get('code');
		let grant_type = 'authorization_code';
		let client_id = '5387724f66acc29adcf293571cd0ecb5';
		let redirect_uri = 'http://localhost:3000/accounts/login/kakao/callback/';

		// axios.get(`/user/kakao/callback?code=${code}`).then(res => console.log(res));

		axios
			.post(
				`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
				{ headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' } },
			)
			.then(res => {
				console.log(res);
			});
	});

	return;
};

export default KakaoRedirectHandler;
