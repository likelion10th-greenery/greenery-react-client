import styled from 'styled-components';

export const Wrapper = styled.nav`
	height: 86px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.img`
	width: auto;
	height: 50px;
	color: green;
	cursor: pointer;
`;

export const RightBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const Category = styled.span`
	font-size: 16px;
	border: 1px solid transparen;
	padding: 10px;
	cursor: pointer;

	&:hover {
		border-bottom: 1px solid green;
	}
`;

export const IconBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
