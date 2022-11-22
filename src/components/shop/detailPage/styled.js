import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Wrapper = styled.section`
	margin: 0;
	box-sizing: border-box;
	width: 80%;
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
`;

export const SellerInfo = styled.div``;

export const AddInfo = styled.div`
	border: 0.2px solid ${COLOR.gray};
	.title {
		padding-left: 20px;
		font-size: 24px;
		margin: 15px 15px;
	}
	.longcarousel {
		heigth: 386px;
	}
`;
