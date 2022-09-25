import styled from 'styled-components';
import { COLOR } from '../../../utils/color';

export const Wrapper = styled.section`
	box-sizing: border-box;
`;

export const Category = styled.p`
	height: 150px;
	width: 100%;
	border: 1px soild ${COLOR.gray};
`;

export const CarouselWrapper = styled.div`
	width: 580px;
	height: 586px;
	display: flex;
	text-align: center;
	justify-items: center;
`;

export const CarouselComponent = styled(CarouselWrapper);

export const PlantInfo = styled.div`
	width: 580px;
	height: 586px;
	align-items: center;
`;

export const MiniCarouselWrapper = styled.div``;
export const SellerInfo = styled.div`
	width: 769px;
	height: 195px;
	display: flex;
`;

export const SellerImg = styled.div`
	background-color: ${COLOR.gray};
	width: 119px;
	height: 119px;
	border-radius: 50%;
`;

export const SellerName = styled.p``;

export const SellerSays = styled.p`
	display: block;
`;

export const PriceInfo = styled.div``;

export const SimilarPlant = styled.div``;

export const ActiveTab = styled.div``;
