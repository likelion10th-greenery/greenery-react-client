import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox } from 'components/common';
import { useEffect } from 'react';
import { useState } from 'react';

const Wrapper = styled.nav`
	position: sticky;
	top: 0%;
	background-color: ${COLOR.white};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 8% 1.5rem 8%;

	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	z-index: 100;
`;

const Logo = styled.img`
	width: auto;
	height: 2rem;
	cursor: pointer;
`;

const NavItem = styled.div`
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
		props.isClicked &&
		css`
			font-size: 1rem;

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
	const [clickedNav, setClickedNav] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	// const [scroll, setScroll] = useState(0);

	// const onScroll = () => {
	// 	setScroll(window.scrollY || document.documentElement.scrollTop);

	// 	// if (scroll > 80) {

	// 	// }
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', onScroll);
	// });

	const onClickLogo = () => {
		setClickedNav('home');
		navigate('/');
	};

	const onClickNav = e => {
		const current = e.currentTarget.id;
		setClickedNav(current);

		switch (current) {
			case 'home':
				navigate('/');
				break;
			case 'shop':
				navigate('/shop/shop-list/view-all');
				break;
			default:
				navigate(current);
		}
		// if (current === 'home') {
		// 	navigate('/');
		// } else if (current === 'shop') {
		// 	navigate('/shop/shop-list/view-all');
		// } else {
		// 	navigate(current);
		// }
	};

	useEffect(() => {
		if (clickedNav === '') {
			let url = location.pathname.slice(1, 5);

			switch (url) {
				case 'shop':
					setClickedNav('shop');
					break;
				case 'shar':
					setClickedNav('share');
					break;
				case 'comm':
					setClickedNav('community');
					break;
				default:
					setClickedNav('home');
			}
		}
	}, [clickedNav]);

	return (
		<Wrapper>
			<Logo src="/images/logo.png" onClick={onClickLogo} isClicked={'home' === clickedNav} />

			<FlexBox justifyContent="space-between" alignItems="center" gap="3rem">
				<FlexBox justifyContent="center" alignItems="center" gap="3rem">
					<NavItem id="home" onClick={onClickNav} isClicked={'home' === clickedNav}>
						Home
					</NavItem>
					<NavItem id="shop" onClick={onClickNav} isClicked={'shop' === clickedNav}>
						Shop
					</NavItem>

					<NavItem id="share" onClick={onClickNav} isClicked={'share' === clickedNav}>
						Share
					</NavItem>
					<NavItem id="community" onClick={onClickNav} isClicked={'community' === clickedNav}>
						Community
					</NavItem>
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
