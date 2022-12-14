import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'config/queryClient';
import GlobalStyle from 'styles/GlobalStyle';
import { AxiosInterceptor } from 'config';
import ResponsiveLayout from 'layouts/responsive.layout';
import 'styles/fonts.css';

import { NotFound, Shop, Home, Salespost, Auth, Detail } from 'pages';

import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import NaverLogin from 'components/Auth/Social/NaverLogin';
import KakaoRedirectHandler from 'components/Auth/Social/KakaoRedirectHandler';
import Share from 'pages/Share';

function App() {
	// let naver_api_url =
	// 	'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7T7w55f77AbZJtSOXk6y&redirect_uri=http://127.0.0.1:8000/accounts/login/naver/callback/&state=' +
	// 	Math.random().toString(36).substr(3, 14);

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
							<Route path="/shop/shop-list/:category/*" element={<Detail />} />
							<Route path="/accounts/login/kakao/callback" element={<KakaoRedirectHandler />} />
							<Route path="/shop/salespost" element={<Salespost />} />
							<Route path="/share" element={<Share />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</ResponsiveLayout>
				</Router>
			</AxiosInterceptor>
		</QueryClientProvider>
	);
}

export default App;
