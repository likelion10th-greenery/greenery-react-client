import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
// import { COLOR } from './../../constants/color';
import { FlexBox } from 'components/common';

const Wrapper = styled.nav`
	position: sticky;
	top: 0%;
	background-color: ${COLOR.white};
	height: 7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 8% 0 8%;

	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	z-index: 100;
`;

const Logo = styled.img`
	width: auto;
	height: 3.5rem;
	cursor: pointer;
`;

const Category = styled.span`
	padding-bottom: 0.5rem;
	border: 1px solid transparen;
	cursor: pointer;

	&:hover {
		border-bottom: 1px solid green;
	}
`;

const Icon = styled.img`
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
				<Logo src="/images/logo.png" />
			</Link>
			<FlexBox column justifyContent="center" alignItems="flex-end" gap="1rem">
				<FlexBox justifyContent="center" alignItems="flex-end" gap="1.5rem">
					<Icon src="/icons/icon-search.svg" alt="search_logo" />
					<Icon src="/icons/icon-user.svg" alt="user_logo" />
					<Icon src="/icons/icon-cart.svg" alt="cart_logo" />
				</FlexBox>
				<FlexBox justifyContent="center" alignItems="center" gap="3rem">
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
				</FlexBox>
			</FlexBox>
		</Wrapper>
	);
};

export default Navbar;
