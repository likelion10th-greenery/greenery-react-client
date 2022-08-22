import styled from 'styled-components';
import { COLOR } from './../../../utils/color';

export const Wrapper = styled.div`
	display: flex;
	padding: 50px 0;
	margin: 0 auto;
`;

export const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 20px;
`;

export const Col = styled.li`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	cursor: pointer;
`;

export const ImgBox = styled.span`
	box-sizing: border-box;
	display: block;
	padding: 3px;
	border-radius: 50%;
	border: ${props => (props.isfocused ? '1px solid black' : '1px solid transparent')};
	overflow: hidden;
	transition: border-color 0.3s ease 0s;
	margin-bottom: 7px;

	&:hover {
		border: 1px solid #323232;
	}
`;

export const Img = styled.img`
	max-width: 75px;
	max-height: 75px;
	width: 5rem;
	height: 5rem;
	border: 1px solid transparent;
	border-radius: 50%;
	background-color: ${COLOR.gray};
`;

export const Title = styled.p`
	font-size: 12px;
	color: #323232;
`;
