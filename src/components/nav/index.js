import { Link } from 'react-router-dom';
import { Category, RightBox, Title, Wrapper } from './styled';

const Nav = () => {
	return (
		<Wrapper>
			<Link to="/">
				<Title>Greenery</Title>
			</Link>
			<RightBox>
				<Link to="/">
					<Category>Home</Category>
				</Link>
				<Link to="/shop">
					<Category>Shop</Category>
				</Link>

				<Category>Share</Category>

				<Category>Community</Category>
			</RightBox>
		</Wrapper>
	);
};

export default Nav;
