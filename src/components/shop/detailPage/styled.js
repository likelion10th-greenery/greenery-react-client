import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Container = styled.section`
	background-color: ${COLOR.grayishGreen};
	width: 100%;
	height: 100%;
`;

export const Category = styled.div`
	border-bottom: 1px solid ${COLOR.gray};
`;

export const Infomation = styled.div`
	display: flex;
	.MainCarousel {
		border: 1px solid ${COLOR.gray};
		width: 50%;
		text-align: center;
	}
	.PlantData {
		border: 1px solid ${COLOR.gray};
		padding: 5rem 5rem;
		width: 50%;
	}
`;

export const AddInfo = styled.div`
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
