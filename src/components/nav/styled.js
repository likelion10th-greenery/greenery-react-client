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
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	gap: 20px;
`;

export const CategoryBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;

export const Category = styled.span`
	font-size: 16px;
	padding-bottom: 10px;
	border: 1px solid transparen;
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

export const Icon = styled.img`
	background-color: transparent;
	cursor: pointer;
`;
