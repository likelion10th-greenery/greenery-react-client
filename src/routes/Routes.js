import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import Home from '../components/home';
import SalesPost from '../components/salespost';
import Shop from '../components/shop';
import DetailPage from '../components/shop/detailPage';

const Routes = () => {
	return (
		<Router>
			<Route path="/" element={<Home />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/shop/detail" element={<DetailPage />} />
			<Route path="/salespost" element={<SalesPost />} />
		</Router>
	);
};

export default Routes;
