import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Container = styled.div`
	display: flex;
	background-color: ${COLOR.grayishGreen};
	max-width: 90%;
	flex-direction: column;
	box-sizing: border-box;
`;

export const Wrapper = styled.section`
	margin: 0;
`;

export const Info = styled.div`
	display: flex;
`;
export const Category = styled.div`
	border-bottom: 1px solid ${COLOR.gray};
	padding-left: 1rem;
	height: 75px;
	width: 100%;
	p {
		padding-left: 5rem;
	}
`;

export const MainCarousel = styled.div`
	width: 50%;
	border-bottom: 0.5px solid ${COLOR.gray};
`;

export const AddInfo = styled.div`
	border: 0.2px solid ${COLOR.gray};
	.title {
		padding-left: 20px;
		font-size: 2rem;
		margin: 15px 15px;
	}
	.longcarousel {
		margin: 2rem 2rem;
		padding: 1rem 1rem;
		background-color: ${COLOR.white};
		heigth: 386px;
	}
`;
