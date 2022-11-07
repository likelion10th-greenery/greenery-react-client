import React from 'react';

import { Wrapper, Category, MainCarousel, Info, AddInfo, LongCarousel } from './styled';

import CarouselComponent from './Carousel';
import PlantInfo from './PlantInfo/PlantInfo';
import PriceChart from './pricedata/PriceChart';
import { Tab } from './Tab/Tab';

const data = [
	{ name: 'Page A', uv: 400 },
	{ name: 'Page A', uv: 200 },
	{ name: 'Page A', uv: 400 },
	{ name: 'Page A', uv: 400 },
];

const DetailPage = () => {
	return (
		<>
			<Category>카테고리</Category>
			<Wrapper>
				<MainCarousel>
					<CarouselComponent />
				</MainCarousel>
				<Info>
					<PlantInfo />
				</Info>
				<AddInfo>
					<h3>알보 몬스테라의 시세</h3>
					<PriceChart />
					<h3>알보 몬스테라와 유사한 식물</h3>
					<LongCarousel />
					<Tab />
				</AddInfo>
			</Wrapper>
		</>
	);
};

export default DetailPage;
