import { useMemo } from 'react';

const useUser = () => {
	const user = useMemo(() => JSON.parse(localStorage.getItem('user')), []);
	return { user: user || false };
};

export default useUser;
