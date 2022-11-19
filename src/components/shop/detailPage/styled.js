import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Wrapper = styled.section`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background-color: ${COLOR.grayishGreen};
	position: absoulte;
	width: 80%;
	left: -0.04px;
`;

export const Info = styled.div`
	display: flex;
`;
export const Category = styled.div`
	border-bottom: 0.5px solid ${COLOR.gray};
	display: flex;
	align-items: center;
	justify-content; center;
	padding-left: 20px;
	height: 75px;
`;

export const MainCarousel = styled.div`
	border-bottom: 0.5px solid ${COLOR.gray};
	width: 953px;
`;

export const SellerInfo = styled.div``;

export const AddInfo = styled.div`
	.title {
		padding-left: 20px;
		font-size: 24px;
		margin: 15px 15px;
	}
	.longcarousel {
		heigth: 386px;
	}
`;
