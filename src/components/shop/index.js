import { Item, Wrapper, ItemImg, ItemInfo, Price, DataList, Title, PlantType } from './styled';
import Category from './category/index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
	const { category } = useParams();
	const [data, setData] = useState([]);

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
					<Item key={item.id}>
						<ItemImg src={item.img_url} />
						<ItemInfo>
							<PlantType>{item.name}</PlantType>
							<Title>title</Title>
							<Price>{item.price.toLocaleString('ko-KR')}원</Price>
						</ItemInfo>
					</Item>
				))}
			</DataList>
		</Wrapper>
	);
};

export default Shop;
