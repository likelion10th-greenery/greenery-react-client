import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import Home from '../components/home';
import SalesPost from '../components/salespost';

const Routes = () => {
	return (
		<Router>
			<Route path="/" element={<Home />} />
			<Route path="/salespost" element={<SalesPost />} />
		</Router>
	);
};

export default Routes;
