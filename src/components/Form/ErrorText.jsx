import { FlexBox, FlexTextBox } from 'components/common';

const defaultProps = {
	margin: '0',
};

const Error = ({ children, margin }) => {
	return (
		<FlexBox
			width="100%"
			justifyContent="flex-start"
			alignItem="center"
			background="transparent"
			margin={margin}
			padding="0 0 0 0.2rem"
		>
			<i className="pi pi-exclamation-circle p-error" style={{ fontSize: '1rem' }} />
			<FlexTextBox
				lineHeight="bottom"
				className="p-error"
				color="#f44336"
				fontSize=".8rem"
				fontFamily="ASD-Medium"
				margin="0 0 0 0.3rem"
			>
				{children}
			</FlexTextBox>
		</FlexBox>
	);
};

Error.defaultProps = defaultProps;

export default Error;
