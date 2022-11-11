import { COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

function PlantInfo() {
	return (
		<Wrapper>
			<Title>알보 몬스테라</Title>
			<Describe>금전운과 행운을 들어오게 하는 기특한 식물, 알보 몬스테라</Describe>
			<Price>
				<p>가격: </p>
				<p>150,000원</p>
			</Price>
			<Origin>
				<p>원산지: </p>
				<p>국산</p>
			</Origin>
			<Deliver>
				<p>배송방법: </p>
				<p>택배</p>
			</Deliver>
			<Num>
				<span>수량</span>
				<Counter />
				<CartBtn>장바구니</CartBtn>
				<BuyBtn>구매하기</BuyBtn>
			</Num>
			<SellerInfo>
				<Circle />
				<p>판매자 이름</p>
				<p>
					판매자 설명판매자 설명판매자 설명판매자 설명판매자 설명판매자 설명판매자 설명판매자
					설명판매자 설명판매자 설명
				</p>
			</SellerInfo>
		</Wrapper>
	);
}

export default PlantInfo;

const Wrapper = styled.div``;
const Title = styled.h2`
	padding: 20px;
`;
const Describe = styled.p`
	padding: 20px;
`;
const Price = styled.div`
	display: flex;
`;
const Origin = styled.div`
	display: flex;
`;
const Deliver = styled.div`
	display: flex;
`;

const CartBtn = styled.button`
	display: block;
	border: 1px black solid;
`;
const BuyBtn = styled.button`
	display: block;
	border: 1px black solid;
	color: ${COLOR.white};
	background-color: ${COLOR.black};
`;

const Num = styled.div`
	display: flex;
	flex-wrap: no-wrap;
`;

const SellerInfo = styled.div`
	margin-top: 70px;
	display: flex;
	flex-wrap: wrap;
	height: 220px;
`;

const Circle = styled.div`
	background-color: grey;
	width: 119px;
	height: 119px;
	border-radius: 50%;
`;
