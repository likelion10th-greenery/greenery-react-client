/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const defaultProps = {
	type: 'button',
	margin: '0',
	padding: '0.6rem 1.5rem',
	fontFamily: 'ASD-SemiBold',
	borderRadius: '0.62rem',
	fontSize: '1.2rem',
	mobileFontSize: '',
	cursor: 'pointer',
	color: 'white',
	backgroundColor: '',
	position: 'static',
	right: '',
	bottom: '',
	disabled: false,
	top: '',
	onClick: Function,
};

const FlexButton = props => {
	const {
		children,
		type,
		disabled,
		margin,
		padding,
		borderRadius,
		fontSize,
		mobileFontSize,
		fontFamily,
		cursor,
		color,
		backgroundColor,
		position,
		bottom,
		right,
		top,
		onClick,
	} = props;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			css={css`
				width: auto;
				height: auto;
				padding: ${padding};
				margin: ${margin};
				border: 0;
				outline: 0;
				border-radius: ${borderRadius};
				font-size: ${fontSize};
				font-family: ${fontFamily};
				background: ${backgroundColor};
				color: ${color};
				cursor: ${cursor ? 'pointer' : cursor};
				position: ${position};
				right: ${right};
				bottom: ${bottom};
				top: ${top};
				transition: all ease 0.25s;
				@media only screen and (max-width: 768px) {
					font-size: ${mobileFontSize};
				}
				top: ${top};
			`}
		>
			{children}
		</button>
	);
};

FlexButton.defaultProps = defaultProps;

export default FlexButton;
