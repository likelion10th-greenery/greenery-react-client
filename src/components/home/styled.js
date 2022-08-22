import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Banner = styled.div`
	width: 100%;
	height: 40%;
	background-color: aliceblue;
	margin-bottom: 15px;
`;

export const CircleWrapper = styled.div`
	display: flex;
`;

export const Circle = styled.div`
	background-color: ${COLOR.gray};
	width: 7px;
	height: 7px;
	border-radius: 5px;
	margin: 0 3px;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: ${COLOR.neonGreen};
	}
`;
