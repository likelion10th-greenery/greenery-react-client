import React from 'react';
import CarouselComponent from './carousel/Carousel';
import LongCarousel from './carousel/LongCarousel';
import PlantInfo from './PlantInfo/PlantInfo';
import PriceChart from './pricedata/PriceChart';
import { Container, Category, Infomation, AddInfo } from './styled';
import { Tab } from './Tab/Tab';

export default function DetailPage() {
	return (
		<Container>
			<Category>
				<p>카테고리</p>
			</Category>
			<Infomation>
				<div className="MainCarousel">
					<CarouselComponent />
				</div>
				<div className="PlantData">
					<PlantInfo />
				</div>
			</Infomation>
			<AddInfo>
				<div className="Charts">
					<p className="title">알보 몬스테라의 시세</p>
					<PriceChart />
				</div>
				<div className="SimilarPlant">
					<p className="title">알보 몬스테라와 유사한 식물</p>
					<div className="cover">
						<LongCarousel />
					</div>
				</div>
				<div className="TabBox">
					<Tab />
				</div>
			</AddInfo>
		</Container>
	);
}
