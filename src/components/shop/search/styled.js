import styled from 'styled-components';

export const Wrapper = styled.form`
	text-align: right;
	position: relative;
`;

export const Input = styled.input`
	min-width: 300px;
	border: none;
	border-bottom: 1px solid black;
	padding: 12px 0;
`;

export const Magni = styled.button`
	height: 100%;
	position: absolute;
	border: none;
	background-color: transparent;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	padding: 12px 0;
	line-height: 0;

	cursor: pointer;
`;
