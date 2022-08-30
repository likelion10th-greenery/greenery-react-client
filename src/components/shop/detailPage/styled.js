import styled from 'styled-components';
import { COLOR } from '../../../utils/color';

export const Wrapper = styled.section`
	background-color: #f2f5f1;
	box-sizing: border-box;
`;

export const Category = styled.p`
	height: 150px;
	width: 100%
	border: 1px soild ${COLOR.gray};
`;

export const CarouselWrapper = styled.div`
	width: 769px;
	height: 940px;
`;

export const CarouselComponent = styled(CarouselWrapper);

export const PlantInfo = styled.div`
	width: 769px;
	height: 940px;
`;

export const PlantInfomation = styled(PlantInfo);

export const MiniCarousel = styled.div`
	width: 769px;
	height: 195px;
`;
export const SellerInfo = styled.div`
	width: 769px;
	height: 195px;
`;

export const PriceInfo = styled.div``;

export const SimilarPlant = styled.div``;

export const ActiveTab = styled.div``;
