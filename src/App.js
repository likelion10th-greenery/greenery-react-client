import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'config/queryClient';
import GlobalStyle from 'styles/GlobalStyle';
import Home from 'components/home';
import SalesPost from 'components/salespost';
import DetailPage from 'components/shop/detailPage';
import { AxiosInterceptor } from 'config';
import ResponsiveLayout from 'layouts/responsive.layout';
import 'styles/fonts.css';

import { NotFound, Shop } from 'pages';
import Auth from 'pages/Auth';

import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<AxiosInterceptor>
				<Router>
					<ResponsiveLayout>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route path="/shop" element={<Shop />}>
								<Route path="/shop/shop-list/:category" element={<Shop />} />
							</Route>
							<Route path="/auth" element={<Auth />} />
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
