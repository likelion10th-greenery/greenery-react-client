import { Link } from 'react-router-dom';
import { Category, IconBox, Logo, RightBox, Wrapper } from './styled';
import LOGO_IMG from '../../assets/imgs/Greenery LOGO.png';
import SEARCH_LOGO from '../../assets/icons/search-line.svg';
import CART_LOGO from '../../assets/icons/shopping-cart-line.svg';
import USER_LOGO from '../../assets/icons/user-line.svg';

const Nav = () => {
	return (
		<Wrapper>
			<Link to="/">
				<Logo src={LOGO_IMG} />
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
			<IconBox>
				<img src={SEARCH_LOGO} alt="search_logo" />
				<img src={USER_LOGO} alt="user_logo" />
				<img src={CART_LOGO} alt="cart_logo" />
			</IconBox>
		</Wrapper>
	);
};

export default Nav;
