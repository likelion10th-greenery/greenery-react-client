import { COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

function PlantInfo() {
	return (
		<Wrapper>
			<Upper>
				<div className="title">알보 몬스테라</div>
				<div className="description">금전운과 행운을 들어오게 하는 기특한 식물, 알보 몬스테라</div>
				<div className="tagBox">
					<div className="tag">#알보몬</div>
					<div className="tag">#희귀</div>
					<div className="tag">#태그</div>
					<div className="tag">#태그</div>
				</div>
			</Upper>
			<Information>
				<div className="price info">
					<p>가격</p>
					<p>150,000 원</p>
				</div>
				<div className="origin info">
					<p>원산지</p>
					<p>국산</p>
				</div>
				<div className="deliver info">
					<p>배송 방법</p>
					<p>택배</p>
				</div>
				<div className="count info">
					<p>수량</p>
					<Counter />
				</div>
				<div className="size info">
					<p>사이즈</p>
					<p>(가로) 30cm</p>
					<p>(세로) 30cm</p>
					<p>(높이) 30cm</p>
				</div>
				<Button>
					<button className="Cart">
						<span>장바구니</span>
					</button>
					<button className="Buy">
						<p>구매하기</p>
					</button>
				</Button>
			</Information>
			<SellerInfo>
				<Circle />
				<div className="name">판매자 이름</div>
			</SellerInfo>
		</Wrapper>
	);
}

export default PlantInfo;

const Wrapper = styled.div``;

const Upper = styled.div`
	.title {
		font-size: 2rem;
	}
	.description {
		font-size: 1rem;
		color: ${COLOR.black};
	}
	.tagBox {
		display: flex;
		margin-bottom: 1.5rem;
		.tag {
			text-align: center;
			margin: 0 0.1rem;
			font-size: 1rem;
			color: ${COLOR.green};
			border: 0.2px solid ${COLOR.green};
			border-radius: 30px;
			width: 4rem;
			padding: 0 5px;
		}
	}
`;

const Information = styled.div`
	.info {
		display: flex;
		p {
			margin: 1rem 0.5rem;
		}
	}
`;

const Button = styled.div`
	display: flex;
	margin-left: 3rem;
	margin-bottom: 5rem;
	.Cart {
		display: block;
		width: 180px;
		height: 60px;
		border: 1px black solid;
		color: ${COLOR.white};
		background-color: ${COLOR.black};
		margin-right: 1rem;
	}
	.Buy {
		display: block;
		width: 180px;
		height: 60px;
		color: ${COLOR.black};
		border: 1px solid black;
		margin-right: 15px;
	}
`;

const SellerInfo = styled.div`
	display: flex;
	.name {
		margin: 1rem 1rem;
		font-size: 1rem;
	}
`;

const Circle = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${COLOR.gray};
	border-radius: 50%;
`;
