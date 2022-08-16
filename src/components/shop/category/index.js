import { useEffect, useState } from 'react';
import { Col, Img, Title, Wrapper } from './styled';

const Category = () => {
	const [category, setCategory] = useState('');

	const onClickCategory = e => {
		e.stopPropagation();
		setCategory(e.currentTarget.getAttribute('name'));
	};

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<Wrapper>
			<Col name="all" onClick={e => onClickCategory(e)}>
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>전체</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="flower">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>꽃</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="houseplant">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>관엽/공기정화</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="succulent">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>다육식물</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="wild">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>야생화/분재</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="orchid">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>동/서양란</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="seedling">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>묘목/씨앗</Title>
			</Col>
			<Col onClick={e => onClickCategory(e)} name="etc">
				<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C-Hg4xKF7Zca-yMEn-l-1x3zu9oqxBucsQ&usqp=CAU" />
				<Title>기타</Title>
			</Col>
		</Wrapper>
	);
};

export default Category;
