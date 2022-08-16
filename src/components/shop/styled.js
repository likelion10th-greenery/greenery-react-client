import styled from 'styled-components';

export const Wrapper = styled.section`
	display: grid;
	grid-template: auto / repeat(4, 1fr);
	gap: 50px;

	padding: 50px 0;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;

	gap: 20px;

	cursor: pointer;
`;

export const ItemImg = styled.img`
	width: 100%;
`;

export const ItemInfo = styled.div`
	text-align: center;
`;

export const Name = styled.b``;

export const Price = styled.p``;
