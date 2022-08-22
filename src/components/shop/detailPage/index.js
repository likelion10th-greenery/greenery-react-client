import React, { Children } from 'react';
import Carousel from './Carousel';
import Category from '../category';
import Search from '../search';
import { items } from '../rawData';
import Counter from './Counter';
import PriceGraph from './PriceGraph';

import {
	Wrapper,
	Rows,
	Section,
	Title,
	ProductWrapper,
	CarouselBox,
	DataList,
	Name,
	Price,
	Delivery,
	Amount,
	Button,
	CartButton,
	ButtonWrapper,
	PriceInfoWrapper,
	PriceTable,
	SellerInfo,
} from './styled';

const index = () => {
	return (
		<Wrapper>
			<Section>
				<Search />
			</Section>
			<Rows>
				<Category />
			</Rows>
			<Title>
				<p>관엽/공기정화</p>
			</Title>
			<ProductWrapper>
				<CarouselBox>
					<Carousel />
				</CarouselBox>
				<DataList>
					<Name>알보 몬스테라</Name>
					<Price>가격</Price>
					<Delivery>배송비</Delivery>
					<Amount>
						수량
						<Counter />
					</Amount>
					<ButtonWrapper>
						<Button>구매하기</Button>
						<CartButton>장바구니</CartButton>
					</ButtonWrapper>
					<SellerInfo>판매자이름</SellerInfo>
				</DataList>
				<PriceInfoWrapper>
					<PriceGraph />
					<PriceTable>시세 그래프</PriceTable>
				</PriceInfoWrapper>
			</ProductWrapper>
		</Wrapper>
	);
};

export default index;
