import PLANT_IMG from 'assets/imgs/pngwing.com.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { FlexBox, FlexTextBox } from 'components/common';

// const List = styled.ul`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	gap: 20px;
// `;

// const Col = styled.li`
// 	width: auto;
// 	height: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	gap: 15px;

// 	cursor: pointer;

// 	&:hover div {
// 		border: 1px solid ${COLOR.demiLightGreen} !important;
// 	}
// `;

const CustomNavLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 0.5rem;

	cursor: pointer;

	&:hover span {
		border: 1px solid ${COLOR.demiLightGreen};
	}

	&.active span {
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

const Category = () => {
	return (
		<FlexBox padding="0 0 3rem 0" margin="0 auto">
			<CustomNavLink
				className={({ isActive }) => (isActive ? 'active' : '')}
				to="shop-list/view-all"
			>
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					전체
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink className={({ isActive }) => (isActive ? 'active' : '')} to="shop-list/flower">
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					꽃
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink
				className={({ isActive }) => (isActive ? 'active' : '')}
				to="shop-list/foliage"
			>
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					관엽/공기정화
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink
				className={({ isActive }) => (isActive ? 'active' : '')}
				to="shop-list/succlence"
			>
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					다육식물
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink className={({ isActive }) => (isActive ? 'active' : '')} to="shop-list/whild">
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					야생화/분재
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink className={({ isActive }) => (isActive ? 'active' : '')} to="shop-list/orchid">
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					동/서양란
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink className={({ isActive }) => (isActive ? 'active' : '')} to="shop-list/seed">
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					묘목/씨앗
				</FlexTextBox>
			</CustomNavLink>

			<CustomNavLink className={({ isActive }) => (isActive ? 'active' : '')} to="shop-list/else">
				<ImgBox>
					<Img src={PLANT_IMG} />
				</ImgBox>
				<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
					기타
				</FlexTextBox>
			</CustomNavLink>
		</FlexBox>

		// <FlexBox padding="0 0 3rem 0" margin="0 auto">
		// 	<List>
		// 		<Col id="view-all" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				전체
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="flower" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				꽃
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="foliage" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				관엽/공기정화
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="succulence" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				다육식물
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="wild" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				야생화/분재
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="orchid" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				동/서양란
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="seed" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				묘목/씨앗
		// 			</FlexTextBox>
		// 		</Col>

		// 		<Col id="else" onClick={onClickNav}>
		// 			<ImgBox>
		// 				<Img src={PLANT_IMG} />
		// 			</ImgBox>
		// 			<FlexTextBox fontFamily="ASD-Medium" fontSize=".8rem" color="#323232">
		// 				기타
		// 			</FlexTextBox>
		// 		</Col>
		// 	</List>
		// </FlexBox>
	);
};

export default Category;
