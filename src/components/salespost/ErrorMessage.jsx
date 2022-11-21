import React from 'react';
import styled from 'styled-components';

const ErrorBox = styled.span`
	font-size: 12.5px;
	color: red;
	padding-top: 0.5rem;
	padding-left: ${props => props.paddingLeft || '0.1rem'};
	//margin-bottom: 12px;
`;

const ErrorMsg = ({ paddingLeft, children }) => {
	return <ErrorBox paddingLeft={paddingLeft}>⚠ {children}</ErrorBox>;
};

export default ErrorMsg;
