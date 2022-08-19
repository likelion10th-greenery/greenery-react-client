import { Link } from 'react-router-dom';
import { Category, CategoryBox, Icon, IconBox, Logo, RightBox, Wrapper } from './styled';
import LOGO_IMG from '../../assets/imgs/Greenery LOGO.png';
import SEARCH_LOGO from '../../assets/icons/search-line.svg';
import CART_LOGO from '../../assets/icons/shopping-cart-line.svg';
import USER_LOGO from '../../assets/icons/user-line.svg';
// import { useEffect, useState } from 'react';

const Nav = () => {
	// const [scroll, setScroll] = useState(0);

	// const onScroll = () => {
	// 	setScroll(window.scrollY || document.documentElement.scrollTop);

	// 	// if (scroll > 80) {

	// 	// }
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', onScroll);
	// });

	return (
		<Wrapper /*visibility={(scroll > 80) + ''}*/>
			<Link to="/">
				<Logo src={LOGO_IMG} />
			</Link>
			<RightBox>
				<IconBox>
					<Icon src={SEARCH_LOGO} alt="search_logo" />
					<Icon src={USER_LOGO} alt="user_logo" />
					<Icon src={CART_LOGO} alt="cart_logo" />
				</IconBox>
				<CategoryBox>
					<Link to="/">
						<Category>Home</Category>
					</Link>
					<Link to="/shop/view-all">
						<Category>Shop</Category>
					</Link>

					<Link to="/share">
						<Category>Share</Category>
					</Link>
					<Link to="/community">
						<Category>Community</Category>
					</Link>
				</CategoryBox>
			</RightBox>
		</Wrapper>
	);
};

export default Nav;
