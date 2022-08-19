import styled from 'styled-components';
import { COLOR } from './../../utils/color';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: cneter;
`;

export const DataList = styled.div`
	display: grid;
	grid-template: auto / repeat(3, 1fr);
	gap: 100px;

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

export const PlantType = styled.b`
	font-size: 1.1rem;
`;

export const Title = styled.p`
	color: #a1a1a1;
	padding-top: 5px;
`;

export const Price = styled.p``;

export const BtnBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const Btn = styled.div`
	width: 4rem;
	background-color: ${COLOR.green};
	padding: 10px 20px;
	margin-bottom: 50px;

	color: white;
	border-radius: 5px;
	text-align: center;
	cursor: pointer;
`;
