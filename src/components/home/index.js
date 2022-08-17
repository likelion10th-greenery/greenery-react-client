import React from 'react';
import { Wrapper, Banner, CircleWrapper, Circle } from './styled';

const Home = () => {
	return (
		<Wrapper>
			<Banner>Banner</Banner>
			<CircleWrapper>
				<Circle />
				<Circle />
				<Circle />
			</CircleWrapper>
		</Wrapper>
	);
};

export default Home;
