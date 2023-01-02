import { FlexBox } from 'components/common';
import { COLOR } from 'constants/color';

const { default: styled } = require('styled-components');

const Box = styled.div`
	background-color: ${COLOR.gray};
	padding: 0.3rem 1.2rem;
	margin-right: 1rem;
	border-radius: 5px;
	color: ${COLOR.demiLightGreen};
`;

const Symbol = ({ name = '교환', status = '거래 전' }) => {
	return (
		<FlexBox>
			<Box>{name}</Box>
			<Box>{status}</Box>
		</FlexBox>
	);
};

export default Symbol;
