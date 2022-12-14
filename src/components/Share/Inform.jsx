import { FlexBox } from 'components/common';
import { COLOR } from 'constants/color';
import styled from 'styled-components';

const Title = styled.h2`
	text-align: left;
`;

const Box = styled.div`
	background-color: ${COLOR.gray};
	width: 100%;
	height: 10rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	margin-bottom: 3rem;
`;

const ColorText = styled.span`
	color: ${props => props.color};
`;

const Inform = () => {
	return (
		<FlexBox column width="100%">
			<Title>π¨ κ΅ν/λλ μ  κΌ­ μ½μ΄μ£ΌμΈμ!</Title>
			<Box>
				<ul>
					<li>
						μ’μκ΄λ¦¬μ¬κ° μλ κ°μΈμ΄ μ¨μ, μ½μ ννμ μλ¬Όμ λμ μ£Όκ³  λ°μΌλ©° κ±°λνλ κ²μ{' '}
						<ColorText color="red" display="inline">
							λΆλ²
						</ColorText>
						μλλ€
					</li>
					<li>βλβμΌλ‘ κ±°λνλ κ²μ΄ μλλΌλ©΄ κ΅ν/λλ κ²μν μ΄μ©μ΄ κ°λ₯ν©λλ€.</li>
					<li>
						κΈ°νν°μ½, ν¬μΈνΈ λ± νκΈμ± λκ°λ₯Ό μ£Όκ³  λ°λ κ²μ λΆλ²μλλ€.{' '}
						<ColorText color={COLOR.demiLightGreen}>
							κ΅νμ μνλΌλ¦¬ λ°κΎΈκ³ , λλμ λ¬΄λ£λ‘ μ§ννλ κ²λ§ κ°λ₯ν©λλ€.
						</ColorText>
					</li>
					<br />
					<li>ν΄λΉ μ¬μ΄νΈ λ΄μμ λ°μνλ κ±°λμ λν΄ κ·Έλ¦¬λλ¦¬λ μ±μμ§μ§ μμ΅λλ€.</li>
				</ul>
			</Box>
		</FlexBox>
	);
};

export default Inform;
