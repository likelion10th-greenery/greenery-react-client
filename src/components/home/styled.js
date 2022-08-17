import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
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
	background-color: gray;
	width: 7px;
	height: 7px;
	border-radius: 5px;
	margin: 0 3px;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: #2bb601;
	}
`;
