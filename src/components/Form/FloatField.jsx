/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const FloatField = ({ children }) => {
	return (
		<span
			className="p-float-label"
			css={css`
				margin-top: 2rem;
				width: 100%;

				input {
					font-family: 'ASD-Medium';
				}
			`}
		>
			{children}
		</span>
	);
};

export default FloatField;
