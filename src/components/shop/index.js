import { items } from './rawData';
import { Item, Wrapper, ItemImg, ItemInfo, Name, Price } from './styled';

const Shop = () => {
	return (
		<Wrapper>
			{items.map(item => (
				<Item key={item.id}>
					<ItemImg src={item.img_url} />
					<ItemInfo>
						<Name>{item.name}</Name>
						<Price>{item.price.toLocaleString('ko-KR')}원</Price>
					</ItemInfo>
				</Item>
			))}
		</Wrapper>
	);
};

export default Shop;
