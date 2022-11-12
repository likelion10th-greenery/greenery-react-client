import { COLOR } from 'constants/color';
import styled from 'styled-components';

const Foot = styled.div`
	height: 100%;
	background-color: ${COLOR.darkGreen};
	color: ${COLOR.white};
	padding: 3rem 8%;
	background-color: #657765;
	color: ${COLOR.white};
`;

const CustomerCenterWrapper = styled.div`
	margin-bottom: 25px;
	font-size: 0.87rem;

	h3 {
		margin: 0.5rem 0;
		font-size: 1.5rem;
	}
`;
const InquireBtn = styled.span`
	border: 2px solid white;
	font-size: 0.87rem;
	padding: 2px 1.5rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: ${COLOR.white};
		color: #657765;
	}
`;
const SubInfoWrapper = styled.div`
	font-size: 0.75rem;
	opacity: 0.6;
	border-top: 1px solid white;
	margin-top: 2.1rem;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 0.5rem;
`;

const Footer = () => {
	return (
		<Foot>
			<CustomerCenterWrapper>
				<span>고객센터</span>
				<h3>+82 2-2173-2114</h3>
				<span style={{ opacity: 0.7 }}>AM 10:00 - PM 5:00 / DAY OFF (SAT. SUN. HOLIDAY)</span>
			</CustomerCenterWrapper>
			<InquireBtn>1:1 문의하기</InquireBtn>
			<SubInfoWrapper>
				<span>상호명: Greenery</span>
				<span>주소: 02450 서울특별시 동대문구 이문로 107</span>
				<span>개인정보보호책임자: 김멋사 (greenery@hufs.ac.kr)</span>

				<span>copyright © Greenery. All right reserved.</span>
			</SubInfoWrapper>
		</Foot>
	);
};

export default Footer;
