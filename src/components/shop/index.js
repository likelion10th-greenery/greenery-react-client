import { items } from './rawData';
import { Item, Wrapper, ItemImg, ItemInfo, Name, Price, DataList } from './styled';
import Category from './category/index';
import { useParams } from 'react-router-dom';

const Shop = () => {
	const { category } = useParams();

	return (
		<Wrapper>
			<Category />
			<DataList>
				{items.map(item => (
					<Item key={item.id}>
						<ItemImg src={item.img_url} />
						<ItemInfo>
							<Name>{item.name}</Name>
							<Price>{item.price.toLocaleString('ko-KR')}원</Price>
						</ItemInfo>
					</Item>
				))}
			</DataList>
		</Wrapper>
	);
};

export default Shop;
