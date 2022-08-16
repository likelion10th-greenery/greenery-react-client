import { Category, RightBox, Title, Wrapper } from './styled';

const Nav = () => {
	return (
		<Wrapper>
			<Title>Greenery</Title>
			<RightBox>
				<Category>Home</Category>
				<Category>Shop</Category>
				<Category>Share</Category>
				<Category>Community</Category>
			</RightBox>
		</Wrapper>
	);
};

export default Nav;
