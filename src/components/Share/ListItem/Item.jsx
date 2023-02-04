import { FlexBox } from 'components/common';
import { COLOR } from 'constants/color';
import styled from 'styled-components';

const Title = styled.h2`
	color: ${COLOR.black};
	font-size: 1rem;
	width: 100%;
	margin: 1rem 0 1.5rem 0;

	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const Span = styled.p`
	position: relative;
	color: ${props => props.color || COLOR.darkgray};
	font-size: 0.8rem;

	margin: 0 1.5rem 0 0;
	display: flex;

	&:not(:last-child)::after {
		content: '';
		width: 1px;
		height: 1px;
		background-color: ${COLOR.darkgray};
		position: absolute;
		top: 50%;
		right: -0.75rem;
		transform: translateY(-0.5px);
	}
`;

const Icon = styled.i`
	margin-right: 0.3rem;
`;

const ShareItem = ({ item }) => {
	return (
		<FlexBox width="100%">
			<FlexBox column height="100%">
				<Title>{item.title}</Title>
				<FlexBox>
					<Span color={COLOR.black}>{item.userName}</Span>
					<Span>{item.date}</Span>
					<Span>조회 {item.views}</Span>
					<Span>
						<Icon className="pi pi-heart" /> {item.like}
					</Span>
					<Span>
						<Icon className="pi pi-bookmark" /> {item.bookmark}
					</Span>
					<Span>
						<Icon className="pi pi-comment" /> {item.comments}
					</Span>
				</FlexBox>
			</FlexBox>
		</FlexBox>
	);
};

export default ShareItem;
