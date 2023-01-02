import { FlexBox, FlexTextBox } from 'components/common';
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
			<Title>🚨 교환/나눔 전 꼭 읽어주세요!</Title>
			<Box>
				<ul>
					<li>
						종자관리사가 아닌 개인이 씨앗, 삽수 형태의 식물을 돈을 주고 받으며 거래하는 것은{' '}
						<ColorText color="red" display="inline">
							불법
						</ColorText>
						입니다
					</li>
					<li>‘돈’으로 거래하는 것이 아니라면 교환/나눔 게시판 이용이 가능합니다.</li>
					<li>
						기프티콘, 포인트 등 현금성 대가를 주고 받는 것은 불법입니다.{' '}
						<ColorText color={COLOR.demiLightGreen}>
							교환은 상품끼리 바꾸고, 나눔은 무료로 진행하는 것만 가능합니다.
						</ColorText>
					</li>
					<br />
					<li>해당 사이트 내에서 발생하는 거래에 대해 그리너리는 책임지지 않습니다.</li>
				</ul>
			</Box>
		</FlexBox>
	);
};

export default Inform;
