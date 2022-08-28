import React from 'react';
import { items } from '../../rawData';
import Counter from '../Counter';
import { Wrapper, Title, Price, Delivery, Amount } from './styled';

export default function PlantInformation() {
	return (
		<Wrapper>
			<Title>이름:{items[0].name}</Title>
			<Price>가격:{items[0].price}</Price>
			<Delivery>배송방법: {items[0].배송방법}</Delivery>
			<Amount>
				<p>수량</p>
				<Counter />
			</Amount>
		</Wrapper>
	);
}
