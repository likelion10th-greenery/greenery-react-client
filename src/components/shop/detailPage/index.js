import React from 'react';

import { Container, Wrapper, Category, MainCarousel, Info, AddInfo } from './styled';

import PlantInfo from './PlantInfo/PlantInfo';
import PriceChart from './pricedata/PriceChart';
import { Tab } from './Tab/Tab';
import LongCarousel from './carousel/LongCarousel';
import CarouselComponent from './carousel/Carousel';

const DetailPage = () => {
	return (
		<Container>
			<Category>
				<p>
					상점{'>'}관엽/공기정화{'>'}알보 몬스테라
				</p>
			</Category>
			<Wrapper>
				<Info>
					<MainCarousel>
						<CarouselComponent />
					</MainCarousel>
					<PlantInfo />
				</Info>
				<AddInfo>
					<div className="title">알보 몬스테라의 시세</div>
					<PriceChart />
					<div className="title">알보 몬스테라와 유사한 식물</div>
					<div className="longcarousel">
						<LongCarousel />
					</div>
					<Tab />
				</AddInfo>
			</Wrapper>
		</Container>
	);
};

export default DetailPage;
