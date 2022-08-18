import styled from 'styled-components';
import { COLOR } from './../../../utils/color';

export const ImageWrapper = styled.div`
	width: calc(${props => props.innerWidth * 0.5}px);
	height: 130px;
	background-color: white;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	/* &::-webkit-scrollbar {
		display: none; // 스크롤 바 안보이게
	} */
	input {
		display: none;
	}
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	padding-top: 5px;
`;
export const ImageAdder = styled.div`
	min-width: 100px;
	height: 100px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLOR.gray};
	font-size: 24px;
	border: 1px solid gray;
	cursor: pointer;
	position: relative;
	transition: background-color 0.2s ease-in-out;
	&:hover,
	&:active {
		background-color: ${COLOR.lightGreen};
	}
	span {
		position: absolute;
		font-size: 14px;
		bottom: 8%;
	}
`;
export const Image = styled.div`
	min-width: 100px;
	max-width: 100px;
	height: 100px;
	margin-left: 10px;
	position: relative;
	transition: all 0.3s ease-in-out;
	img {
		width: 100%;
		height: 100%;
	}
	&:hover {
		span {
			visibility: visible;
		}
	}
	span {
		position: absolute;
		visibility: hidden;
		cursor: pointer;
	}
	.del {
		top: 5px;
		right: 5px;
	}
	.rep {
		bottom: 5px;
		left: 5px;
		font-size: 14px;
		color: white;
		background-color: rgba(225, 225, 225, 0.8);
		border: 1px soild white;
		border-radius: 5px;
		padding: 2px 5px;
		&:hover {
			background-color: #2bb601;
		}
	}
	.isRep {
		visibility: visible;
		background-color: #2bb601;
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-width: 270px;
	margin: 10px;
	border-radius: 5px;
	background-color: white;
	padding: 10px;
`;
