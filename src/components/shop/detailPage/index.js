import React from 'react';
import CarouselComponent from './Carousel';
// import MiniCarousel from './MiniCarousel';
import { items } from '../rawData';
import Counter from './Counter';

import {
	Wrapper,
	Category,
	CarouselWrapper,
	PlantInfo,
	MiniCarouselWrapper,
	SellerInfo,
	SellerImg,
	SellerName,
	SellerSays,
	PriceInfo,
	SimilarPlant,
	ActiveTab,
} from './styled';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
	{ name: 'Page A', uv: 400 },
	{ name: 'Page A', uv: 200 },
	{ name: 'Page A', uv: 400 },
	{ name: 'Page A', uv: 400 },
];

const index = () => {
	return (
		<Wrapper>
			<Category>카테고리</Category>
			<CarouselWrapper>
				<CarouselComponent />
				<PlantInfo>
					<div>이름:{items[0].name}</div>
					<div>가격:{items[0].price}</div>
					<div>배송방법: {items[0].배송방법}</div>
					<div>
						수량
						<Counter />
					</div>
				</PlantInfo>
			</CarouselWrapper>
			<MiniCarouselWrapper>{/* <MiniCarousel /> */}</MiniCarouselWrapper>
			<SellerInfo>
				<SellerImg></SellerImg>
				<SellerName>판매자이름</SellerName>
				<SellerSays>나는 식물판매자</SellerSays>
			</SellerInfo>
			<PriceInfo>
				<div>{items[0].name}의 시세</div>
				<LineChart width={600} height={300} data={data}>
					<Line dataKey="uv" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey="name" />
					<YAxis />
				</LineChart>
			</PriceInfo>
			<SimilarPlant />
			<ActiveTab />
		</Wrapper>
	);
};

export default index;
