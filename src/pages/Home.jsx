import React from 'react';
import { Link } from 'react-router-dom';
import banner1_bgImg from '../assets/imgs/home_assets/Home_p.1/concept_page.png';
import banner1_logo from '../assets/imgs/home_assets/Home_p.1/concept_graphic.png';
import banner2_img1 from '../assets/imgs/home_assets/Home_p.2/certificate.jpg';
import banner2_img2 from '../assets/imgs/home_assets/Home_p.2/price_graph.jpg';
import banner2_img3 from '../assets/imgs/home_assets/Home_p.2/share.jpg';
import banner3_img from '../assets/imgs/home_assets/Home_p.3/flower_main.jpg';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox } from 'components/common';

const Banner = styled.div`
	width: 100%;
	min-height: 500px;
	margin-bottom: 15px;
	padding: 20px;
`;

const Banner1 = styled(Banner)`
	background-image: url(${props => props.bgImg});
	background-size: cover;
	background-position: center center;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 55%;
		height: 75%;
	}
`;
const Banner2 = styled(Banner)`
	background-color: #e1ddd2;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ImgWrapper = styled.div`
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
		top: 185px;
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
		margin-bottom: 7px;
		font-weight: 600;
	}
	p {
		text-align: end;
		font-size: 14px;
		margin: 5px 0;
		line-height: 1.2rem;
		color: black;
	}
`;

const Banner3 = styled(Banner)`
	background-color: #e2fea1;
	background-image: url(${props => props.sideImg});
	background-size: 50%;
	background-position: right;
	background-repeat: no-repeat;
`;
const DescWrapper = styled.div`
	//font-family: 'Times New Roman', Times, serif;
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
		border: 1px solid rgba(0, 0, 0, 0.7);
		border-radius: 15px;
		cursor: pointer;
		&:hover {
			background-color: rgba(255, 255, 255, 0.8);
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
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
const Banner4 = styled(Banner)`
	background-color: #131732;
`;

const Home = () => {
	return (
		<FlexBox column>
			<Banner1 bgImg={banner1_bgImg}>
				<img src={banner1_logo} alt="banner1" />
			</Banner1>
			<Banner2>
				<ImgWrapper>
					<span>01</span>
					<img src={banner2_img1} alt="banner2" />
					<h4>판매자 종자자격증 인증</h4>
					<p>
						그리너리만의 판매자
						<br />
						종자 자격증 인증 절차로
						<br />
						믿을 수 있는 거래를 보장합니다.
					</p>
				</ImgWrapper>
				<ImgWrapper>
					<span>02</span>
					<img src={banner2_img2} alt="banner2" />
					<h4>식물 시세 그래프</h4>
					<p>
						식물 별 시세 그래프를
						<br />
						제공합니다.
						<br />
						한눈에 가격을 비교해보세요.
					</p>
				</ImgWrapper>
				<ImgWrapper>
					<span>03</span>
					<img src={banner2_img3} alt="banner2" />
					<h4>나눔/교환 서비스</h4>
					<p>
						회원 간 나눔/교환 서비스로
						<br />
						반려식물의 새로운 집사님을
						<br />
						찾아주세요.
					</p>
				</ImgWrapper>
			</Banner2>
			<Banner3 sideImg={banner3_img}>
				<DescWrapper>
					<p>
						Plant <br />
						your own flower <br />
						and decorate <br />
						your own soul <br />
						with Greenery.
					</p>

					<button type="button">
						<Link to="/shop/shop-list/view-all">Shop Now</Link>
					</button>

					<span>
						Greenery
						<hr />
					</span>
				</DescWrapper>
			</Banner3>
			<Banner4></Banner4>
		</FlexBox>
	);
};

export default Home;
