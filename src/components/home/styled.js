import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	//margin-top: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Banner = styled.div`
	width: 100%;
	min-height: 400px;
	background-color: aliceblue;
	margin-bottom: 15px;
	padding: 20px;
`;

export const Banner1 = styled(Banner)`
	background-image: url(${props => props.bgImg});
	background-size: cover;
	background-position: center center;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 45%;
		height: 55%;
	}
`;
export const Banner2 = styled(Banner)`
	background-color: #e1ddd2;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ImgWrapper = styled.div`
	color: ${COLOR.green};
	width: 220px;
	min-height: 320px;
	background-color: #efeeeb;
	box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
	margin: 0 15px;
	padding: 20px;
	padding-left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	position: relative;
	span {
		position: absolute;
		top: 195px;
		left: 30px;
		font-weight: 800;
		padding-bottom: 10px;
		border-bottom: 5px solid ${COLOR.green};
	}
	img {
		width: 135px;
		height: 200px;
	}
	h4 {
		margin: 15px 0;
		margin-top: 20px;
		font-weight: 600;
	}
	p {
		text-align: end;
		font-size: 14px;
		line-height: 1.2rem;
		color: black;
	}
`;

export const Banner3 = styled(Banner)`
	background-color: #e2fea1;
	background-image: url(${props => props.sideImg});
	background-size: 50%;
	background-position: right;
	background-repeat: no-repeat;
`;
export const DescWrapper = styled.div`
	font-family: 'Times New Roman', Times, serif;
	width: 50%;
	height: 100%;
	padding: 4%;
	padding-bottom: 0;
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	p {
		font-size: 38px;
		line-height: 2.2rem;
	}
	button {
		font-size: 16px;
		width: 100px;
		padding: 5px 10px;
		margin: 40px 0;
		background-color: transparent;
		border: 1px solid black;
		border-radius: 15px;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
		&:hover {
			background-color: rgba(255, 255, 255, 0.8);
		}
	}
	span {
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	hr {
		margin: 0;
		margin-top: 5px;
		margin-left: 15px;
		width: 60%;
		background-color: black;
	}
`;
export const Banner4 = styled(Banner)`
	background-color: #131732;
`;
