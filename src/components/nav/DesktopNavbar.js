import { Link } from 'react-router-dom';
import LOGO_IMG from 'assets/imgs/Greenery LOGO.png';
import SEARCH_LOGO from 'assets/icons/search-line.svg';
import CART_LOGO from 'assets/icons/shopping-cart-line.svg';
import USER_LOGO from 'assets/icons/user-line.svg';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
	position: sticky;
	top: 0%;
	background-color: white;
	height: 7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 140px;

	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	z-index: 100;
`;

const Logo = styled.img`
	width: auto;
	height: 50px;
	color: green;
	cursor: pointer;
`;

const RightBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	gap: 20px;
`;

const CategoryBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;

const Category = styled.span`
	font-size: 16px;
	padding-bottom: 10px;
	border: 1px solid transparen;
	cursor: pointer;

	&:hover {
		border-bottom: 1px solid green;
	}
`;

const IconBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Icon = styled.img`
	background-color: transparent;
	cursor: pointer;
`;

const Navbar = () => {
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
		<Wrapper>
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
					<Link to="/shop/shop-list/view-all">
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

export default Navbar;
