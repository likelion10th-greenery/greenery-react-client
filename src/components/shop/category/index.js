import { Col, Img, ImgBox, List, Title, Wrapper } from './styled';
import PLANT_IMG from '../../../assets/imgs/pngwing.com.png';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
	const { category } = useParams();

	return (
		<Wrapper>
			<List>
				<Link to="view-all">
					<Col>
						<ImgBox isfocused={category === 'view-all'}>
							<Img src={PLANT_IMG} isFocused={category === 'view-all'} />
						</ImgBox>
						<Title>전체</Title>
					</Col>
				</Link>
				<Link to="flower">
					<Col>
						<ImgBox isfocused={category === 'flower'}>
							<Img isFocused={category === 'flower'} src={PLANT_IMG} />
						</ImgBox>
						<Title>꽃</Title>
					</Col>
				</Link>
				<Link to="foliage">
					<Col>
						<ImgBox isfocused={category === 'foliage'}>
							<Img isFocused={category === 'foliage'} src={PLANT_IMG} />
						</ImgBox>
						<Title>관엽/공기정화</Title>
					</Col>
				</Link>
				<Link to="succulence">
					<Col>
						<ImgBox isfocused={category === 'succulence'}>
							<Img isFocused={category === 'succulence'} src={PLANT_IMG} />
						</ImgBox>
						<Title>다육식물</Title>
					</Col>
				</Link>
				<Link to="wild">
					<Col>
						<ImgBox isfocused={category === 'wild'}>
							<Img isFocused={category === 'wild'} src={PLANT_IMG} />
						</ImgBox>
						<Title>야생화/분재</Title>
					</Col>
				</Link>
				<Link to="orchid">
					<Col>
						<ImgBox isfocused={category === 'orchid'}>
							<Img isFocused={category === 'orchid'} src={PLANT_IMG} />
						</ImgBox>
						<Title>동/서양란</Title>
					</Col>
				</Link>
				<Link to="seed">
					<Col>
						<ImgBox isfocused={category === 'seed'}>
							<Img isFocused={category === 'seed'} src={PLANT_IMG} />
						</ImgBox>
						<Title>묘목/씨앗</Title>
					</Col>
				</Link>
				<Link to="else">
					<Col>
						<ImgBox isfocused={category === 'else'}>
							<Img isFocused={category === 'else'} src={PLANT_IMG} />
						</ImgBox>
						<Title>기타</Title>
					</Col>
				</Link>
			</List>
		</Wrapper>
	);
};

export default Category;
