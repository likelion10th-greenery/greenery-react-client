import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../components/home';
import SalesPost from '../components/salespost';
import Shop from '../components/shop';
import DetailPage from '../components/shop/detailPage';

const RouterWrapper = styled.div`
	flex: 1;
`;

const Routes = () => {
	return (
		<RouterWrapper>
			<Router>
				<Route path="/" element={<Home />} />
				<Route path="/shop/*" element={<Shop />}>
					<Route path="shop-list/:category" element={<Shop />} />
					<Route path="shop-list/items/:id" element={<DetailPage />} />
				</Route>
				<Route path="/shop/salespost" element={<SalesPost />} />
			</Router>
		</RouterWrapper>
	);
};

export default Routes;
