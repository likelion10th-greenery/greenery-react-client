import PLANT_IMG from 'assets/imgs/pngwing.com.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox } from 'components/common';
import { useEffect } from 'react';
import { useState } from 'react';

const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 20px;
`;

const Col = styled.li`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	cursor: pointer;

	&:hover span {
		border: 1px solid ${COLOR.demiLightGreen};
	}
`;

const ImgBox = styled.span`
	box-sizing: border-box;
	display: block;
	padding: 3px;
	border-radius: 50%;
	border: 1px solid transparent;
	overflow: hidden;
	transition: border-color 0.3s ease 0s;
	margin-bottom: 7px;
	align-items: center;
`;

const Img = styled.img`
	max-width: 75px;
	max-height: 75px;
	width: 5rem;
	height: 5rem;
	border: 1px solid transparent;
	border-radius: 50%;
	background-color: ${COLOR.gray};
`;

const Title = styled.p`
	font-size: 12px;
	color: #323232;
`;

const Category = () => {
	const [currentCategory, setCurrentCategory] = useState('view-all');
	const BASE_URL = 'shop-list';
	const navigate = useNavigate();
	const { category } = useParams();

	const onClickNav = e => {
		const prev = document.getElementById(currentCategory);
		prev.style.border = '1px solid transparent';
		setCurrentCategory(e.currentTarget.id);
		navigate(`${BASE_URL}/${currentCategory}`);

		// if (e.target.id === '/island') {
		// 	navigate('/');
		// } else {
		// 	navigate(`${e.target.id}`);
		// }

		// if (e.target.id === 'challenge') {
		// 	setClickedChallenge(true);
		// 	setCurrentClickSubNav('/challenge');
		// } else {
		// 	setClickedChallenge(false);
		// }
	};

	useEffect(() => {
		if (currentCategory !== null) {
			let current = document.getElementById(currentCategory);
			current.style.border = `1px solid ${COLOR.demiLightGreen}`;
		}
	}, [currentCategory]);

	return (
		<FlexBox padding="0 0 3rem 0" margin="0 auto">
			<List>
				<Col>
					<ImgBox id="view-all" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>전체</Title>
				</Col>

				<Col>
					<ImgBox id="flower" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>꽃</Title>
				</Col>

				<Col>
					<ImgBox id="foliage" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>관엽/공기정화</Title>
				</Col>

				<Col>
					<ImgBox id="succulence" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>다육식물</Title>
				</Col>

				<Col>
					<ImgBox id="wild" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>야생화/분재</Title>
				</Col>

				<Col>
					<ImgBox id="orchid" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>동/서양란</Title>
				</Col>

				<Col>
					<ImgBox id="seed" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>묘목/씨앗</Title>
				</Col>

				<Col>
					<ImgBox id="else" onClick={onClickNav}>
						<Img src={PLANT_IMG} />
					</ImgBox>
					<Title>기타</Title>
				</Col>
			</List>
		</FlexBox>
	);
};

export default Category;
