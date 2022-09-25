import { css } from '@emotion/react';

const defaultProps = {
	width: 'auto',
	height: 'auto',
	margin: '0',
	padding: '0',
	fontSize: '1rem',
	fontFamily: 'Pr-SemiBold',
	color: 'white',
	position: 'static',
	top: '0',
	right: '0',
	bottom: '0',
	background: 'transparent',
	mobileFontSize: '',
	mobileDisplay: 'block',
	lineHeight: 'auto',
	whiteSpace: '',
};

const FlexTextBox = props => {
	const {
		children,
		width,
		mobileFontSize,
		height,
		padding,
		margin,
		fontSize,
		fontFamily,
		color,
		position,
		top,
		right,
		bottom,
		background,
		mobileDisplay,
		lineHeight,
		whiteSpace,
	} = props;

	return (
		<div
			css={css`
				width: ${width};
				height: ${height};
				margin: ${margin};
				padding: ${padding};
				font-size: ${fontSize};
				font-family: ${fontFamily};
				text-align: left;
				color: ${color};
				position: ${position};
				top: ${top};
				right: ${right};
				bottom: ${bottom};
				background: ${background};
				line-height: ${lineHeight};
				white-space: ${whiteSpace};
				@media only screen and (max-width: 767px) {
					font-size: ${mobileFontSize};
					display: ${mobileDisplay};
				}
			`}
		>
			{children}
		</div>
	);
};
FlexTextBox.defaultProps = defaultProps;

export default FlexTextBox;
