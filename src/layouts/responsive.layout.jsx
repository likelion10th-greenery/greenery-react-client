import { useMediaQuery } from 'react-responsive';
import MobileLayout from './mobile.layout';
import DesktopLayout from './desktop.layout';

const Desktop = ({ children }) => {
	// 너비가 768 이상이면 Desktop으로 인지
	const isDesktop = useMediaQuery({ minWidth: 768 });
	return isDesktop && <DesktopLayout>{children}</DesktopLayout>;
};
const Mobile = ({ children }) => {
	// 너비가 767 이하면 Mobile으로 인지
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile && <MobileLayout>{children}</MobileLayout>;
};

const ResponsiveLayout = ({ children }) => {
	return (
		<>
			<Desktop>{children}</Desktop>
			<Mobile>{children}</Mobile>
		</>
	);
};

export default ResponsiveLayout;
