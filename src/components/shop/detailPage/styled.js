import styled from 'styled-components';
import { COLOR } from '../../../utils/color';

export const Wrapper = styled.div`
	box-sizing: border-box;
	width: 80%;
	margin: 0 auto;
`;

export const Section = styled.div`
	width: 100%;
	margin-right: auto;
`;

export const Rows = styled.div`
	width: 100%;
	display: flex;
`;

export const Title = styled.div`
	font-size: 1.5em;
	margin-bottom: 20px;
	padding-left: 20px;
`;

export const ProductWrapper = styled.div`
	background-color: ${COLOR.gray};
	display: flex;
`;

export const CarouselBox = styled.div`
	width: 200px;
`;

export const DataList = styled.div`
	border: 1px solid black;
	width: 70%;
	padding-left: 20px;
`;

export const Name = styled.p`
	margin: 10px;
`;

export const Price = styled(Name)``;

export const Delivery = styled(Name)``;

export const Amount = styled.div`
	display: flex;
	margin: 10px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
`;

export const Button = styled.div`
	width: 100px;
	height: 20px;
	text-align: center;
	border: 1px solid ${COLOR.white};
	background-color: ${COLOR.black};
	color: ${COLOR.white};
`;

export const CartButton = styled(Button)`
	background-color: ${COLOR.demiLightGreen};
`;

export const SellerInfo = styled.div`
	border: 1px soild ${COLOR.green};
	width: 400px;
	height: 30px;
`;
