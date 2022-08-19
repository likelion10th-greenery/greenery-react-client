import { Col, Img, ImgBox, List, Title, Wrapper } from './styled';
import PLANT_IMG from '../../../assets/imgs/pngwing.com.png';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
	const { category } = useParams();

	return (
		<Wrapper>
			<List>
				<Link to="VIEW-ALL">
					<Col>
						<ImgBox isfocused={category === 'VIEW-ALL'}>
							<Img src={PLANT_IMG} isFocused={category === 'VIEW-ALL'} />
						</ImgBox>
						<Title>전체</Title>
					</Col>
				</Link>
				<Link to="FLOWER">
					<Col>
						<ImgBox isfocused={category === 'FLOWER'}>
							<Img isFocused={category === 'FLOWER'} src={PLANT_IMG} />
						</ImgBox>
						<Title>꽃</Title>
					</Col>
				</Link>
				<Link to="FOLIAGE">
					<Col>
						<ImgBox isfocused={category === 'FOLIAGE'}>
							<Img isFocused={category === 'FOLIAGE'} src={PLANT_IMG} />
						</ImgBox>
						<Title>관엽/공기정화</Title>
					</Col>
				</Link>
				<Link to="SUCCULENCE">
					<Col>
						<ImgBox isfocused={category === 'SUCCULENCE'}>
							<Img isFocused={category === 'SUCCULENCE'} src={PLANT_IMG} />
						</ImgBox>
						<Title>다육식물</Title>
					</Col>
				</Link>
				<Link to="WILD">
					<Col>
						<ImgBox isfocused={category === 'WILD'}>
							<Img isFocused={category === 'WILD'} src={PLANT_IMG} />
						</ImgBox>
						<Title>야생화/분재</Title>
					</Col>
				</Link>
				<Link to="ORCHID">
					<Col>
						<ImgBox isfocused={category === 'ORCHID'}>
							<Img isFocused={category === 'ORCHID'} src={PLANT_IMG} />
						</ImgBox>
						<Title>동/서양란</Title>
					</Col>
				</Link>
				<Link to="SEED">
					<Col>
						<ImgBox isfocused={category === 'SEED'}>
							<Img isFocused={category === 'SEED'} src={PLANT_IMG} />
						</ImgBox>
						<Title>묘목/씨앗</Title>
					</Col>
				</Link>
				<Link to="ELSE">
					<Col>
						<ImgBox isfocused={category === 'ELSE'}>
							<Img isFocused={category === 'ELSE'} src={PLANT_IMG} />
						</ImgBox>
						<Title>기타</Title>
					</Col>
				</Link>
			</List>
		</Wrapper>
	);
};

export default Category;
