import { FlexBox } from 'components/common';
import { COLOR } from 'constants/color';
import styled from 'styled-components';

const UserIcon = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;

	margin-right: 0.5rem;
`;

const UserName = styled.span`
	font-weight: 600;

	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
	height: 20rem;
	border-radius: 5px;
`;

const Span = styled.p`
	color: ${props => props.color || COLOR.darkgray};
	font-size: 0.8rem;

	display: flex;
`;

const Follow = styled.p`
	font-size: 0.8rem;
	font-weight: 600;
	color: ${COLOR.demiLightGreen};
	text-align: right;
`;

const Icon = styled.i`
	margin-right: 0.3rem;
`;

const Title = styled.span`
	font-weight: 600;
	margin-top: 1rem;

	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const Card = props => {
	const IMG_SRC =
		'data:image/jpeg;base64,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';

	return (
		<FlexBox column margin="0 0 3rem 0">
			<FlexBox width="100%" justifyContent="space-between" alignItems="center" margin="0 0 1rem 0">
				<FlexBox alignItems="center">
					<UserIcon src={IMG_SRC} />
					<UserName>그리너리그리너리</UserName>
				</FlexBox>
				<Follow>팔로우</Follow>
			</FlexBox>

			<Image src={IMG_SRC} />
			<FlexBox width="100%" justifyContent="space-around" alignItems="center" margin="0 auto">
				<Span>
					<Icon className="pi pi-heart" /> {1}
				</Span>
				<Span>
					<Icon className="pi pi-bookmark" /> {1}
				</Span>
				<Span>
					<Icon className="pi pi-comment" /> {1}
				</Span>
			</FlexBox>
			<Title>
				게시글은 40자까지 나올 수 있다고 합니다.게시글은 40자까지 나올 수 있다고 합니다.게시글은
				40자까지 나올 수 있다고 합니다.게시글은 40자까지 나올 수 있다고 합니다.게시글은 40자까지
				나올 수 있다고 합니다.게시글은 40자까지 나올 수 있다고 합니다.
			</Title>
		</FlexBox>
	);
};

export default Card;
