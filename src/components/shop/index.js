import {
	Item,
	Wrapper,
	ItemImg,
	ItemInfo,
	Price,
	DataList,
	Title,
	PlantType,
	Btn,
	BtnBox,
} from './styled';
import Category from './category/index';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
				console.log(err);
			}
		};

		getPlants();
	}, [category]);

	return (
		<Wrapper>
			<Category />
			<DataList>
				{data.map(item => (
					<Item key={item.id} onClick={() => navigate(`/shop/items/${item.id}`)}>
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
		</Wrapper>
	);
};

export default Shop;
