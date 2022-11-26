import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Container = styled.section`
	background-color: ${COLOR.grayishGreen};
	width: 100%;
	height: 100%;
`;

export const Category = styled.div`
	border-bottom: 0.5px solid ${COLOR.darkgray};
	p {
		padding-left: 10rem;
	}
`;

export const Infomation = styled.div`
	width: 100%;
	border-bottom: 0.5px solid ${COLOR.darkgray};
	.Box {
		display: flex;
		margin: 0 auto;
		width: 80%;
	}
	.MainCarousel {
		border: 0.5px solid ${COLOR.darkgray};
		width: 50%;
		text-align: center;
	}
	.PlantData {
		border: 0.5px solid ${COLOR.darkgray};
		padding: 3rem 3rem;
		width: 50%;
	}
`;

export const AddInfo = styled.div`
	width: 80%;
	margin: 0 auto;
	border: 0.5px solid ${COLOR.darkgray};
	.Charts {
		.title {
			font-size: 2rem;
			padding-left: 2rem;
		}
	}
	.SimilarPlant {
		.title {
			font-size: 2rem;
			padding-left: 2rem;
		}
		.cover {
			margin: 2rem 2rem;
			padding: 3rem 3rem;
			background-color: ${COLOR.white};
		}
	}
`;
