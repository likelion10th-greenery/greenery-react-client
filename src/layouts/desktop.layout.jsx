import styled from 'styled-components';
import MaxWidthLayout from './maxWidth.layout';
import DesktopFooter from 'components/Footer/DesktopFooter';
import DesktopNavbar from 'components/Nav/DesktopNavbar';

const ChildrenContainer = styled.div`
	margin: 2rem 0 0 0;
	display: flex;
	justify-content: center;
	width: 100%;
`;

const DesktopLayout = ({ children }) => {
	return (
		<>
			<DesktopNavbar />
			<ChildrenContainer>
				<MaxWidthLayout>{children}</MaxWidthLayout>
			</ChildrenContainer>
			<DesktopFooter />
		</>
	);
};

export default DesktopLayout;
