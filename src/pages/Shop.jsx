import Category from 'components/Shop/Category';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox, FlexButton } from 'components/common';

export const DataList = styled.div`
	display: grid;
	grid-template: auto / repeat(4, 1fr);
	gap: 3rem;

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
	border-radius: 5px;
`;

export const PlantType = styled.b`
	font-size: 1.1rem;
	font-weight: 600;
`;

export const FeedTitle = styled.p`
	color: #a1a1a1;
	font-size: 0.9rem;
	margin: 0;
`;

export const Price = styled.p`
	margin: 0;
`;

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

export const items = [
	{
		id: 1,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 2,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 3,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 4,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 5,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 6,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 7,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 8,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 9,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
	{
		id: 10,
		img_url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg',
		feed_title: '이름',
		plant_type: '알보 몬스테라',
		price: 100000,
	},
];

const Shop = () => {
	const { category } = useParams();
	const [, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getPlants = async () => {
			try {
				const { data } = await axios.get(`http://127.0.0.1:8000/shop`);
				setData(data);
			} catch (err) {
				new Error(err);
			}
		};

		getPlants();
	}, [category]);

	return (
		<FlexBox column justify-content="center" align-items="center">
			<Category />
			<DataList>
				{items.map(item => (
					<Item
						key={item.id}
						onClick={() => navigate(`/shop/shop-list/${category}/detail?id=${item.id}`)}
					>
						<ItemImg src={item.img_url} />
						<FlexBox column justifyContent="center" alignItems="flex-start" gap="0.2rem">
							<PlantType>{item.plant_type}</PlantType>
							<FeedTitle>{item.feed_title}</FeedTitle>
							<Price>{item.price.toLocaleString('ko-KR')}원</Price>
						</FlexBox>
					</Item>
				))}
			</DataList>
			<FlexBox
				width="100%"
				backgroundColor="transparent"
				justifyContent="flex-end"
				margin="0 0 3rem 0"
			>
				<FlexButton onClick={() => navigate('/shop/salespost')} backgroundColor={`${COLOR.green}`}>
					등록하기
				</FlexButton>
			</FlexBox>
		</FlexBox>
	);
};

export default Shop;
