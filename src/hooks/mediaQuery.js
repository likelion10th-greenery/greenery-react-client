import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
	// 너비가 1024px 이상이면 true, 그렇지 않으면 false
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
	// 너비가 768px 이상 1023px 이하이면 true, 그렇지 않으면 false
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

	return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
	// 너비가 767px 이하면 true, 그렇지 않으면 false
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return isMobile ? children : null;
};
