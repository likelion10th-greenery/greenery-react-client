import MaxWidthLayout from './maxWidth.layout';

const MobileLayout = ({ children }) => {
	return (
		<>
			<MaxWidthLayout>{children}</MaxWidthLayout>
		</>
	);
};

export default MobileLayout;
