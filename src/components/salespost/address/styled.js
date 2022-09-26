import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 35px;
	position: relative;
`;

export const AddressBox = styled.div`
	margin-left: 63px;
	margin-bottom: 15px;
`;

export const SearchBtn = styled.button`
	padding: 2.5px 7px;
	background-color: transparent;
	margin-left: 5px;
	border-width: 1px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	background-color: ${COLOR.green};
	color: ${COLOR.white};
`;
