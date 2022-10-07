import { FlexBox } from 'components/common';
import { FloatField, FormContainer } from 'components/Form';
import { PrimaryBtn } from 'components/Form/Button';
import { COLOR } from 'constants/color';
import { useInput } from 'hooks';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

const ChangeAuth = styled.span`
	color: ${COLOR.demiLightGreen};
	font-size: 0.8rem;
	text-decoration: underline;
	margin-top: 1rem;
	cursor: pointer;
`;

const Signup = ({ auth, setAuth }) => {
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');
	const [checkPw, onChangeCheckPw] = useInput('');
	const [nickname, onChangeNickname] = useInput('');
	return (
		<FlexBox column>
			<FormContainer className="p-fluid">
				<FloatField>
					<InputText id="email" autoFocus value={email} onChange={onChangeEmail} />
					<label htmlFor="email">이메일</label>
				</FloatField>
				<FloatField>
					<InputText id="password" value={password} onChange={onChangePassword} />
					<label htmlFor="password">비밀번호</label>
				</FloatField>
				<FloatField>
					<InputText id="checkPw" value={checkPw} onChange={onChangeCheckPw} />
					<label htmlFor="checkPw">비밀번호 확인</label>
				</FloatField>
				<FloatField>
					<InputText id="nickname" value={nickname} onChange={onChangeNickname} />
					<label htmlFor="nickname">닉네임</label>
				</FloatField>
				<PrimaryBtn className="p-fluid" type="submit" style={{ marginTop: '2rem' }}>
					회원가입 하기
				</PrimaryBtn>
			</FormContainer>
			<FlexBox column width="100%" justifyContent="center" alignItems="center">
				<ChangeAuth onClick={() => setAuth(!auth)}>이미 가입된 계정이 있나요?</ChangeAuth>
			</FlexBox>
		</FlexBox>
	);
};

export default Signup;
