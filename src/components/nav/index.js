import { Link } from 'react-router-dom';
import { Category, RightBox, Title, Wrapper } from './styled';
import LOGO_IMG from '../../assets/imgs/Greenery LOGO.png';

const Nav = () => {
	return (
		<Wrapper>
			<Link to="/">
				<Title src={LOGO_IMG} />
			</Link>
			<RightBox>
				<Link to="/">
					<Category>Home</Category>
				</Link>
				<Link to="/shop/view-all">
					<Category>Shop</Category>
				</Link>

				<Category>Share</Category>

				<Category>Community</Category>
			</RightBox>
		</Wrapper>
	);
};

export default Nav;
