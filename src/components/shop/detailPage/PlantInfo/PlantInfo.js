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
				<p>수량</p>
				<Counter />
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
	padding: 10px 10px;
`;
const Origin = styled.div`
	display: flex;
	padding: 10px 10px;
`;
const Deliver = styled.div`
	display: flex;
	padding: 10px 10px;
`;
const Num = styled.div`
	padding: 10px 10px;
`;

const SellerInfo = styled.div`
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
