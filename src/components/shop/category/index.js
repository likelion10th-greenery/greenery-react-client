import { useEffect, useState } from 'react';
import { Col, Img, ImgBox, List, Title, Wrapper } from './styled';
import PLANT_IMG from '../../../assets/imgs/pngwing.com.png';

const Category = () => {
	const [category, setCategory] = useState('all');

	const onClickCategory = e => {
		e.stopPropagation();
		setCategory(e.currentTarget.getAttribute('name'));
	};

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<Wrapper>
			<List>
				<Col name="all" onClick={e => onClickCategory(e)}>
					<ImgBox isfocused={category === 'all'}>
						<Img src={PLANT_IMG} isFocused={category === 'all'} />
					</ImgBox>
					<Title>전체</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="flower">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>꽃</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="houseplant">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>관엽/공기정화</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="succulent">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>다육식물</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="wild">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>야생화/분재</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="orchid">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>동/서양란</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="seedling">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>묘목/씨앗</Title>
				</Col>
				<Col onClick={e => onClickCategory(e)} name="etc">
					<ImgBox>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>기타</Title>
				</Col>
			</List>
		</Wrapper>
	);
};

export default Category;
