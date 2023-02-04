import CarouselComponent from '../components/Detail/carousel/Carousel';
import LongCarousel from '../components/Detail/carousel/LongCarousel';
import PlantInfo from '../components/Detail/PlantInfo/PlantInfo';
import PriceChart from '../components/Detail/pricedata/PriceChart';
import { Tab } from '../components/Detail/Tab/Tab';

import styled from 'styled-components';
import { COLOR } from 'constants/color';

const Container = styled.section`
	width: 100%;
	font-family: 'Noto Sans KR', sans-serif;
`;

const Category = styled.div`
	width : 100%;
	margin 0 1rem;	
	border-top: .5px solid ${COLOR.darkgray};
	border-bottom: .5px solid ${COLOR.darkgray};
	p {
		padding-left: 10rem;
	}
`;

const Infomation = styled.div`
	width: 100%;
	.Box {
		display: flex;
		margin: 0 auto;
		width: 80%;
	}
	.MainCarousel {
		width: 50%;
		text-align: center;
	}
	.PlantData {
		padding: 3rem 3rem;
		width: 50%;
	}
`;

const AddInfo = styled.div`
	width: 80%;
	margin: 0 auto;

	.Charts {
		.title {
			margin: 0;
			font-size: 2rem;
			padding-top: 1rem;
			padding-left: 2rem;
		}
	}
	.SimilarPlant {
		.title {
			font-size: 2rem;
			padding-left: 2rem;
		}
		.Cover {
			border: 0.5px solid ${COLOR.darkgray};
			margin: 2rem 2rem;
			padding: 2rem 3rem;
			background-color: ${COLOR.white};
		}
	}
`;

const Detail = () => {
	return (
		<Container>
			<Category>
				<p>
					상점 {'>'} 관엽/공기정화 {'>'} 알보 몬스테라
				</p>
			</Category>
			<Infomation>
				<div className="Box">
					<div className="MainCarousel">
						<CarouselComponent />
					</div>
					<div className="PlantData">
						<PlantInfo />
					</div>
				</div>
			</Infomation>
			<AddInfo>
				<div className="Charts">
					<p className="title">알보 몬스테라의 시세</p>
					<PriceChart />
				</div>
				<div className="SimilarPlant">
					<p className="title">이런 상품은 어떠세요?</p>
					<div className="Cover">
						<LongCarousel />
					</div>
				</div>
				<div className="TabBox">
					<Tab />
				</div>
			</AddInfo>
		</Container>
	);
};

export default Detail;
