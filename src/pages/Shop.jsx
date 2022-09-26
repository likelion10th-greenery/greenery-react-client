import Category from 'components/shop/category';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox } from 'components/common';

export const DataList = styled.div`
	display: grid;
	grid-template: auto / repeat(3, 1fr);
	gap: 6rem;

	padding: 3.5rem 0;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1.5rem;

	cursor: pointer;
`;

export const ItemImg = styled.img`
	width: 100%;
`;

export const ItemInfo = styled.div`
	text-align: center;
`;

export const PlantType = styled.b`
	font-size: 1.1rem;
`;

export const Title = styled.p`
	color: #a1a1a1;
	padding-top: 0.4rem;
`;

export const Price = styled.p``;

export const BtnBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const Btn = styled.div`
	width: 4rem;
	background-color: ${COLOR.green};
	padding: 0.6rem 1.2rem;
	margin-bottom: 3rem;

	color: white;
	border-radius: 0.4rem;
	text-align: center;
	cursor: pointer;
`;

const Shop = () => {
	const { category } = useParams();
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getPlants = async () => {
			try {
				const { data } = await axios.get(`http://127.0.0.1:8000/shop/${category}`);
				setData(data);
			} catch (err) {
				new Error(err);
			}
		};

		getPlants();
	}, [category]);

	return (
		<FlexBox column justify-content="center" align-items="cneter">
			<Category />
			<DataList>
				{data.map(item => (
					<Item key={item.id} onClick={() => navigate(`/shop/shop-list/items/detail`)}>
						<ItemImg src={item.img_url} />
						<ItemInfo>
							<PlantType>{item.plant_type}</PlantType>
							<Title>{item.feed_title}</Title>
							<Price>{item.price.toLocaleString('ko-KR')}원</Price>
						</ItemInfo>
					</Item>
				))}
			</DataList>
			<BtnBox>
				<Btn onClick={() => navigate('/shop/salespost')}>등록하기</Btn>
			</BtnBox>
		</FlexBox>
	);
};

export default Shop;
