import React from 'react';
import CarouselComponent from './Carousel';

import {
	Wrapper,
	Category,
	CarouselWrapper,
	PlantInfo,
	MiniCarousel,
	SellerInfo,
	PriceInfo,
	SimilarPlant,
	ActiveTab,
} from './styled';

const index = () => {
	return (
		<Wrapper>
			<Category>카테고리</Category>
			<CarouselWrapper>
				<CarouselComponent />
			</CarouselWrapper>
			<PlantInfo />
			<MiniCarousel />
			<SellerInfo />
			<PriceInfo />
			<SimilarPlant />
			<ActiveTab />
		</Wrapper>
	);
};

export default index;
