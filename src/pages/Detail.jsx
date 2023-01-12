import CarouselComponent from '../components/Detail/carousel/Carousel';
import LongCarousel from '../components/Detail/carousel/LongCarousel';
import PlantInfo from '../components/Detail/PlantInfo/PlantInfo';
import PriceChart from '../components/Detail/pricedata/PriceChart';
import { Tab } from '../components/Detail/Tab/Tab';

import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Container = styled.section`
	background-color: ${COLOR.grayishGreen};
	width: 100%;
	height: 100%;
`;

const Category = styled.div`
	border-bottom: 0.5px solid ${COLOR.darkgray};
	p {
		padding-left: 10rem;
	}
`;

const Infomation = styled.div`
	width: 100%;
	border-bottom: 0.5px solid ${COLOR.darkgray};
	.Box {
		display: flex;
		margin: 0 auto;
		width: 80%;
	}
	.MainCarousel {
		border-left: 0.5px solid ${COLOR.darkgray};
		width: 50%;
		text-align: center;
	}
	.PlantData {
		border-right: 0.5px solid ${COLOR.darkgray};
		border-left: 0.5px solid ${COLOR.darkgray};
		padding: 3rem 3rem;
		width: 50%;
	}
`;

const AddInfo = styled.div`
	width: 80%;
	margin: 0 auto;
	border-left: 0.5px solid ${COLOR.darkgray};
	border-right: 0.5px solid ${COLOR.darkgray};

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

const Detail = () => {
	const { search } = useLocation();
	const getPlantDetail = async () => {
		const params = new URLSearchParams(search);
		const id = params.get('id');
		try {
			const { data } = await axios.get(`http://127.0.0.1:8000/shop/${id}`);
			console.log(data);
		} catch (err) {
			new Error(err);
		}
	};

	useEffect(() => {
		getPlantDetail();
	}, []);

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
					<p className="title">알보 몬스테라와 유사한 식물</p>
					<div className="cover">
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
