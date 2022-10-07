import { FlexBox, FlexTextBox } from 'components/common';
import { ErrorText, Field, FormContainer } from 'components/Form';
import { PrimaryBtn } from 'components/Form/Button';
import { COLOR } from 'constants/color';
import { useInput } from 'hooks';
import { Divider } from 'primereact/divider';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import styled from 'styled-components';

const ChangeAuth = styled.span`
	color: ${COLOR.demiLightGreen};
	font-size: 0.8rem;
	text-decoration: underline;
	margin-top: 1rem;
	cursor: pointer;
`;

const Login = ({ auth, setAuth }) => {
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');

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
				{/* <FlexBox></FlexBox> */}
				<ChangeAuth onClick={() => setAuth(!auth)}>회원가입 하시겠습니까?</ChangeAuth>
			</FlexBox>
		</FlexBox>
	);
};

export default Login;
