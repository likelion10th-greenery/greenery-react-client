import React from 'react';
import { Wrapper, Banner1, Banner2, Banner3, Banner4, ImgWrapper, DescWrapper } from './styled';
import { Link } from 'react-router-dom';
import banner1_bgImg from '../../assets/imgs/home_assets/Home_p.1/concept_page.png';
import banner1_logo from '../../assets/imgs/home_assets/Home_p.1/concept_graphic.png';
import banner2_img1 from '../../assets/imgs/home_assets/Home_p.2/certificate.jpg';
import banner2_img2 from '../../assets/imgs/home_assets/Home_p.2/price_graph.jpg';
import banner2_img3 from '../../assets/imgs/home_assets/Home_p.2/share.jpg';
import banner3_img from '../../assets/imgs/home_assets/Home_p.3/flower_main.jpg';

const Home = () => {
	return (
		<Wrapper>
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
		</Wrapper>
	);
};

export default Home;
