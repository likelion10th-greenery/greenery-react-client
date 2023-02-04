import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'config/queryClient';
import GlobalStyle from 'styles/GlobalStyle';
import { AxiosInterceptor } from 'config';
import ResponsiveLayout from 'layouts/responsive.layout';
import 'styles/fonts.css';

import { NotFound, Shop, Home, Salespost, Auth, Detail, Share, Community } from 'pages';

import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import KakaoRedirectHandler from 'components/Auth/Social/KakaoRedirectHandler';

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
							<Route path="/shop/:category/*" element={<Detail />} />
							<Route path="/accounts/login/kakao/callback" element={<KakaoRedirectHandler />} />
							<Route path="/shop/salespost" element={<Salespost />} />
							<Route path="/share" element={<Share />} />
							<Route path="/community" element={<Community />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</ResponsiveLayout>
				</Router>
			</AxiosInterceptor>
		</QueryClientProvider>
	);
}

export default App;
