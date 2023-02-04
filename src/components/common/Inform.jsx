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

const Inform = ({ title, text }) => {
	return (
		<FlexBox column width="100%">
			<Title>{title}</Title>
			<Box>{text}</Box>
		</FlexBox>
	);
};

export default Inform;
