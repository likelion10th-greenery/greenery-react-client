import { COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PlantInfo() {
	const { id } = useParams();
	const [data, setData] = useState([]);

	const items = [
		{
			feed_title: '식물 판매합니다',
			plant_name: '알보 몬스테라',
			category: 'flower',
			price: 5000,
			stock: 2,
			origin: 'import',
			deliver_type: 'both',
			address: '우리집',
			plant_detail: '뷰티풀',
		},
	];

	useEffect(() => {
		const getPlants = async () => {
			try {
				// 식물 id =>서버 재확인
				const { data } = await axios.get(`http://127.0.0.1:8000/shop/${id}`);
				setData(data);
			} catch (err) {
				new Error(err);
			}
		};

		getPlants();
	}, []);
	return (
		<Wrapper>
			{items.map(item => (
				<Container key={item.id}>
					<Upper>
						<div className="title">{item.plant_name}</div>
						<div className="description">
							금전운과 행운을 들어오게 하는 기특한 식물, 알보 몬스테라
						</div>
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
							<p>{item.price} 원</p>
						</div>
						<div className="origin info">
							<p>원산지</p>
							<p>{item.origin === 'import' && <span>국산</span>}</p>
							<p>{item.origin === 'export' && <span>수입</span>}</p>
							<p>{item.origin === 'else' && <span>수입</span>}</p>
						</div>
						<div className="deliver info">
							<p>배송 방법</p>
							<p>{item.deliver_type === 'courier' && <span>택배</span>}</p>
							<p>{item.deliver_type === 'direct' && <span>직거래</span>}</p>
							<p>{item.deliver_type === 'both' && <span>상관없음</span>}</p>
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
					</Information>
				</Container>
			))}
			<Button>
				<button className="Cart">
					<span>장바구니</span>
				</button>
				<button className="Buy">
					<p>결제하기</p>
				</button>
			</Button>
			<SellerInfo>
				<Circle />
				<div className="name">판매자 이름</div>
			</SellerInfo>
		</Wrapper>
	);
}

export default PlantInfo;

const Wrapper = styled.div``;

const Container = styled.div``;
// upper .title font : Noto Serif vs Noto Sans
const Upper = styled.div`
	.title {
		font-family: 'Noto Serif KR', serif;
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	.description {
		font-size: 1rem;
		color: ${COLOR.darkgray};
		margin-bottom: 0.5rem;
	}
	.tagBox {
		display: flex;
		margin-bottom: 1.5rem;
		.tag {
			text-align: center;
			margin: 0 0.1rem;
			font-size: 1rem;
			color: ${COLOR.green};
			background-color: rgba(70, 88, 64, 0.2);
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
	.size {
		font-size: 0.8em;
	}
`;

const Button = styled.div`
	display: flex;
	margin: 2rem 3rem 3rem 3rem;

	.Cart {
		display: block;
		width: 180px;
		height: 60px;
		border: 1px black solid;
		color: ${COLOR.green};
		background-color: ${COLOR.white};
		margin-right: 1rem;
	}
	.Buy {
		display: block;
		width: 180px;
		height: 60px;
		color: ${COLOR.white};
		background-color: ${COLOR.green};
		border: 1px solid black;
		margin-right: 15px;
	}
`;

const SellerInfo = styled.div`
	display: flex;
	align-items: center;

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
