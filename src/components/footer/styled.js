import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Wrapper = styled.footer`
	height: 100%;
	background-color: ${COLOR.darkGreen};
	color: ${COLOR.white};
	padding: 20px 140px;
	/* padding: 20px 70px; */
	background-color: #657765;
	color: ${COLOR.white};
`;

export const CustomerCenterWrapper = styled.div`
	margin: 40px 0;
	margin-bottom: 25px;
	font-size: 14px;
	h3 {
		margin: 7px 0;
		font-size: 24px;
	}
`;
export const InquireBtn = styled.span`
	border: 2px solid white;
	font-size: 14px;
	padding: 2px 25px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: ${COLOR.white};
		color: #657765;
		font-weight: 600;
	}
`;
export const SubInfoWrapper = styled.div`
	font-size: 12px;
	opacity: 0.6;
	border-top: 1px solid white;
	margin-top: 30px;
	padding-top: 10px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	div {
		display: flex;
		flex-direction: column;
	}
	span {
		margin-top: 7px;
	}
`;
