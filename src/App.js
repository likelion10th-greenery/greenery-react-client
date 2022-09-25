import styled from 'styled-components';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'config/queryClient';
import GlobalStyle from './styles/GlobalStyle';

import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home/index';
import Shop from './components/shop/index';
import SalesPost from './components/salespost';
import DetailPage from './components/shop/detailPage';
import { AxiosInterceptor } from 'config';
import ResponsiveLayout from 'layouts/responsive.layout';

const RootDiv = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 0 140px; // footer 공간 마련
`;

const RouterWrapper = styled.div`
	flex: 1;
`;

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<AxiosInterceptor>
				<Nav />
				<RootDiv>
					<BrowserRouter>
						<ResponsiveLayout>
							<RouterWrapper>
								<Router>
									<Route path="/" element={<Home />} />
									<Route path="/shop" element={<Shop />}>
										<Route path="/shop/shop-list/:category" element={<Shop />} />
									</Route>
									<Route path="/shop/shop-list/items/detail" element={<DetailPage />} />
									<Route path="/shop/salespost" element={<SalesPost />} />
								</Router>
							</RouterWrapper>
						</ResponsiveLayout>
					</BrowserRouter>
				</RootDiv>
				<Footer />
			</AxiosInterceptor>
		</QueryClientProvider>
	);
}

export default App;
