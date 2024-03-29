/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const defaultProps = {
	width: 'auto',
	maxWidth: 'none',
	minWidth: 'none',
	tabletWidth: '',
	mobileWidth: '',
	height: 'auto',
	margin: '0',
	tabletMargin: '0',
	padding: '0',
	mobilePadding: '0',
	shadow: false,
	borderRadius: '',
	column: false,
	reverse: false,
	wrap: 'nowrap',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	center: false,
	position: 'static',
	background: 'transparent',
	top: '0',
	left: '0',
	mobileLeft: '0',
	right: '0',
	bottom: '0',
	gap: '0',
	float: 'none',
	transform: 'none',
};

const FlexBox = props => {
	const {
		children,
		width,
		tabletWidth,
		mobileWidth,
		maxWidth,
		minWidth,
		height,
		margin,
		tabletMargin,
		padding,
		mobilePadding,
		shadow,
		borderRadius,
		column,
		reverse,
		wrap,
		justifyContent,
		alignItems,
		center,
		background,
		position,
		top,
		left,
		mobileLeft,
		right,
		bottom,
		gap,
		float,
		transform,
	} = props;

	const dir = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');

	return (
		<div
			css={css`
				display: flex;
				width: ${width};
				max-width: ${maxWidth};
				min-width: ${minWidth};
				height: ${height};
				margin: ${margin};
				padding: ${padding};
				box-shadow: ${shadow ? 'rgba(00, 00, 00, 0.2 0px 2px 8px 0px' : ''};
				border-radius: ${borderRadius};
				flex-direction: ${dir};
				flex-wrap: ${wrap};
				justify-content: ${center ? 'center' : justifyContent};
				align-items: ${center ? 'center' : alignItems};
				background: ${background};
				position: ${position};
				top: ${top};
				left: ${left};
				bottom: ${bottom};
				right: ${right};
				gap: ${gap};
				float: ${float};
				transform: ${transform};

				@media only screen and (min-width: 768px) and (max-width: 1023px) {
					width: ${tabletWidth};
					margin: ${tabletMargin !== '0' ? tabletMargin : margin};
				}

				@media only screen and (max-width: 767px) {
					width: ${mobileWidth};
					left: ${mobileLeft};
					padding: ${mobilePadding !== '0' ? mobilePadding : padding};
				}
			`}
		>
			{children}
		</div>
	);
};

FlexBox.defaultProps = defaultProps;

export default FlexBox;
