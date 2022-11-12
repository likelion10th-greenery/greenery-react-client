import { Link, NavLink, useMatch } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox } from 'components/common';
// import { useEffect } from 'react';
// import { useState } from 'react';

const Wrapper = styled.nav`
	position: sticky;
	top: 0%;
	background-color: ${COLOR.white};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 8%;

	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	z-index: 100;
`;

const Logo = styled.img`
	width: auto;
	height: 2rem;
	cursor: pointer;
`;

const CustomNavLink = styled(NavLink)`
	position: relative;
	display: block;
	padding: 1px 0.3rem;
	cursor: pointer;

	&::after {
		position: absolute;
		content: '';
		top: 100%;
		left: 0;
		width: 100%;
		height: 2px;
		background: ${COLOR.demiLightGreen};
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.5s;
	}

	&:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	${props =>
		props.clicked &&
		css`
			font-weight: bold;
			color: ${COLOR.demiLightGreen};

			&::after {
				transform: scale(1);
				transform-origin: left;
			}
		`}
`;

const Icon = styled.img`
	cursor: pointer;
`;

const Navbar = () => {
	const homeMatch = useMatch('/');
	const shopMatch = useMatch('/shop/shop-list/:category');
	const shareMatch = useMatch('/share');
	const communityMatch = useMatch('/community');

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
				<Logo src="/images/logo.png" clicked={homeMatch} />
			</Link>

			<FlexBox justifyContent="space-between" alignItems="center" gap="3rem">
				<FlexBox justifyContent="center" alignItems="center" gap="3rem">
					<CustomNavLink to="/" clicked={homeMatch}>
						Home
					</CustomNavLink>
					<CustomNavLink to="/shop/shop-list/view-all" clicked={shopMatch}>
						Shop
					</CustomNavLink>

					<CustomNavLink to="/share" clicked={shareMatch}>
						Share
					</CustomNavLink>
					<CustomNavLink to="/community" clicked={communityMatch}>
						Community
					</CustomNavLink>
				</FlexBox>

				<FlexBox justifyContent="center" alignItems="center" gap="1.5rem">
					<Icon src="/icons/icon-search.svg" alt="search_logo" />
					<Icon src="/icons/icon-user.svg" alt="user_logo" />
					<Icon src="/icons/icon-cart.svg" alt="cart_logo" />
				</FlexBox>
			</FlexBox>
		</Wrapper>
	);
};

export default Navbar;
