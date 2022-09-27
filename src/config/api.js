import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useToken, useUser } from 'hooks';
import { baseUrl } from 'constants/url';

const createInstance = () => {
	return axios.create({
		baseURL: baseUrl,
		timeout: 2000,
		withCredentials: true,
		headers: { 'Content-Type': 'application/json' },
	});
};

const instance = createInstance();

const AxiosInterceptor = props => {
	const [cookie, setCookie] = useCookies(['access_token']);
	const { user } = useUser();

	instance.interceptors.request.use(
		async config => {
			const newConfig = { ...config };
			const accessToken = cookie.access_token;
			if (user) {
				if (!!accessToken) {
					newConfig.headers.Authorization = `Bearer ${accessToken}`;
				} else {
					const { refresh } = useToken;
					const refreshInstance = createInstance();
					await refreshInstance.post('user/token/refresh', { refresh }).then(data => {
						const newAccess = data.data.access;
						const expires = new Date();
						expires.setMinutes(expires.getMinutes() + 25);
						setCookie('access_token', newAccess, { expires });
						newConfig.headers.Authorization = `Bearer ${newAccess}`;
					});
				}
			}
			return newConfig;
		},

		async error => {
			return Promise.reject(error);
		},
	);
	return props.children;
};

export { AxiosInterceptor, instance };
