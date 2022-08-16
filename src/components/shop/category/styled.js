import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 50px 0;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	cursor: pointer;
`;

export const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

export const Title = styled.p`
	font-size: 16px;
`;
