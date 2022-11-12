import axios from 'axios';
import { FlexBox, FlexTextBox } from 'components/common';
import { ErrorText, Field, FormContainer } from 'components/Form';
import { PrimaryBtn } from 'components/Form/Button';
import { COLOR } from 'constants/color';
import { useInput } from 'hooks';
import { Divider } from 'primereact/divider';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NaverLogin from './Social/NaverLogin';

const ChangeAuth = styled.span`
	color: ${COLOR.demiLightGreen};
	font-size: 0.8rem;
	text-decoration: underline;
	margin-top: 1rem;
	cursor: pointer;
`;

const Icon = styled.img`
	width: 3rem;
	height: 3rem;
	cursor: pointer;
`;

const Login = ({ auth, setAuth }) => {
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');
	const navigate = useNavigate();
	let naver_api_url =
		'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7T7w55f77AbZJtSOXk6y&redirect_uri=http://127.0.0.1:8000/accounts/login/naver/callback/&state=' +
		Math.random().toString(36).substr(3, 14);

	return (
		<FlexBox column>
			<FormContainer className="p-fluid">
				<Field className="p-input-icon-right">
					<InputText autoFocus value={email} onChange={onChangeEmail} placeholder="이메일" />
					<i className="pi pi-envelope" />
				</Field>
				<Field>
					<Password
						value={password}
						onChange={onChangePassword}
						placeholder="비밀번호"
						feedback={false}
						toggleMask
					/>
				</Field>
				{/* 에러 있을 시에만 나오는 걸로 바꿔야 함 */}
				<ErrorText margin="0.5rem 0 0 0">이메일 혹은 비밀번호를 확인해주세요.</ErrorText>

				<PrimaryBtn className="p-fluid" type="submit" style={{ marginTop: '2rem' }}>
					로그인
				</PrimaryBtn>
			</FormContainer>
			<Divider />
			<FlexBox column width="100%" justifyContent="center" alignItems="center">
				<FlexTextBox color={`${COLOR.demiLightGreen}`} fontSize="1rem" fontFamily="ASD-Medium">
					SNS 계정으로 간편 로그인 / 회원가입
				</FlexTextBox>
				<FlexBox margin="1rem 0 0 0">
					{/* <a href={naver_api_url}> */}
					<Icon src="icons/btnG_icon_square.png" />
					<NaverLogin />
					{/* </a> */}
					{/* <div id="naverIdLogin"></div> */}
				</FlexBox>

				<ChangeAuth onClick={() => setAuth(!auth)}>회원가입 하시겠습니까?</ChangeAuth>
			</FlexBox>
		</FlexBox>
	);
};

export default Login;
