import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'config/queryClient';
import GlobalStyle from './styles/GlobalStyle';
import SalesPost from 'components/salespost';
import DetailPage from 'components/shop/detailPage';
import { AxiosInterceptor } from 'config';
import ResponsiveLayout from 'layouts/responsive.layout';
import 'styles/fonts.css';

import { NotFound, Shop, Home } from 'pages';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<AxiosInterceptor>
				<Router>
					<ResponsiveLayout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/shop" element={<Shop />}>
								<Route path="/shop/shop-list/:category" element={<Shop />} />
							</Route>
							<Route path="/shop/shop-list/items/detail" element={<DetailPage />} />
							<Route path="/shop/salespost" element={<SalesPost />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</ResponsiveLayout>
				</Router>
			</AxiosInterceptor>
		</QueryClientProvider>
	);
}

export default App;
