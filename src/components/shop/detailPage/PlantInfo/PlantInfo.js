import { COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

function PlantInfo() {
	return (
		<Wrapper>
			<Title>
				<div className="title">알보 몬스테라</div>
				<div className="description">금전운과 행운을 들어오게 하는 기특한 식물, 알보 몬스테라</div>
			</Title>
			<Information>
				<div>
					<p>가격</p>
					<p>150,000 원</p>
				</div>
				<div>
					<p>원산지</p>
					<p>국산</p>
				</div>
				<div>
					<p>배송 방법</p>
					<p>택배</p>
				</div>
				<div>
					<p>수량</p>
					<Counter />
				</div>
				<div>
					<p>사이즈</p>
					<p>(가로) 30cm</p>
					<p>(세로) 30cm</p>
					<p>(높이) 30cm</p>
				</div>
				<div className="Button">
					<CartBtn>장바구니</CartBtn>
					<BuyBtn>구매하기</BuyBtn>
				</div>
			</Information>
			<SellerInfo>
				<Circle />
				<div className="name">판매자 이름</div>
				<p>판매자 설명판매자 설명판매자 설명판매자 설명판매자 설명판매자 설명판매자 설명판매자</p>
			</SellerInfo>
		</Wrapper>
	);
}

export default PlantInfo;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 0.2px solid ${COLOR.gray};
	width: 967px;
`;
const Title = styled.div`
	.title {
		font-size: 30px;
	}
	.description {
		font-size: 15px;
	}
`;
const Information = styled.div`
	div {
		display: flex;
		p {
			margin: 10px 10px;
		}
	}
	.Button {
		padding-left: 70px;
		display: flex;
		margin-top: 20px;
	}
`;

const BuyBtn = styled.button`
	display: block;
	width: 180px;
	height: 60px;
	border: 1px black solid;
	color: ${COLOR.white};
	background-color: ${COLOR.black};
`;

const CartBtn = styled.button`
	display: block;
	width: 180px;
	height: 60px;
	color: ${COLOR.black};
	border: 1px solid black;
	margin-right: 15px;
`;

const SellerInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 80px;
	padding: 30px 30px;
	.name{
		display: flex;
		align-items: center;
		justify-content; center;
		margin-left: 15px;
	}
`;

const Circle = styled.div`
	background-color: grey;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content; center;
`;
