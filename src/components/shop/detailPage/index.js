import React from 'react';

import { Wrapper, Category, MainCarousel, Info, AddInfo } from './styled';

import CarouselComponent from './carousel/Carousel';
import PlantInfo from './PlantInfo/PlantInfo';
import PriceChart from './pricedata/PriceChart';
import { Tab } from './Tab/Tab';
import LongCarousel from './carousel/LongCarousel';

const DetailPage = () => {
	return (
		<Wrapper>
			<Category>
				상점{'>'}관엽/공기정화{'>'}알보 몬스테라
			</Category>
			<Info>
				<MainCarousel>
					<CarouselComponent />
				</MainCarousel>
				<PlantInfo />
			</Info>
			<AddInfo>
				<h3>알보 몬스테라의 시세</h3>
				<PriceChart />
				<h3>알보 몬스테라와 유사한 식물</h3>
				<div>
					<LongCarousel />
				</div>
				<Tab />
			</AddInfo>
		</Wrapper>
	);
};

export default DetailPage;
