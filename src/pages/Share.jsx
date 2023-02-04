import { Filter, FlexBox } from 'components/common';
import Inform from 'components/common/Inform';
import ShareList from 'components/Share/ShareList';
import { COLOR } from 'constants/color';
import styled from 'styled-components';

const ColorText = styled.span`
	display: inline;
	color: ${props => props.color};
`;

const Share = () => {
	const title = '🚨 교환/나눔 전 꼭 읽어주세요!';
	const InformText = (
		<ul>
			<li>
				종자관리사가 아닌 개인이 씨앗, 삽수 형태의 식물을 돈을 주고 받으며 거래하는 것은&nbsp;
				<ColorText color="red">불법</ColorText>
				입니다.
			</li>
			<li>‘돈’으로 거래하는 것이 아니라면 교환/나눔 게시판 이용이 가능합니다.</li>
			<li>
				기프티콘, 포인트 등 현금성 대가를 주고 받는 것은 불법입니다.
				<ColorText color={COLOR.demiLightGreen}>
					&nbsp;교환은 상품끼리 바꾸고, 나눔은 무료로 진행하는 것만 가능합니다.
				</ColorText>
			</li>
			<br />
			<li>해당 사이트 내에서 발생하는 거래에 대해 그리너리는 책임지지 않습니다.</li>
		</ul>
	);
	const filterOption = [
		{ id: '거래 유형', options: ['나눔', '교환'] },
		{ id: '거래 상태', options: ['거래 전', '거래 완료'] },
	];

	return (
		<FlexBox column width="80%" minWidth="560px" margin="0 0 3rem 0">
			<Inform title={title} text={InformText} />
			<Filter filterOption={filterOption} />
			<ShareList />
		</FlexBox>
	);
};

export default Share;
