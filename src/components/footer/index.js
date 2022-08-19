import React from 'react';
import { CustomerCenterWrapper, InquireBtn, SubInfoWrapper, Wrapper } from './styled';

const Footer = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Wrapper>
				<CustomerCenterWrapper>
					<span>고객센터</span>
					<h3>+82 2-2173-2114</h3>
					<span style={{ opacity: 0.7 }}>AM 10:00 - PM 5:00 / DAY OFF (SAT. SUN. HOLIDAY)</span>
				</CustomerCenterWrapper>
				<InquireBtn>1:1 문의하기</InquireBtn>
				<SubInfoWrapper>
					<div>
						<span>상호명: Greenery</span>
						<span>주소: 02450 서울특별시 동대문구 이문로 107</span>
						<span>개인정보보호책임자: 김멋사 (greenery@hufs.ac.kr)</span>
					</div>
					<span>copyright © Greenery. All right reserved.</span>
				</SubInfoWrapper>
			</Wrapper>
		</div>
	);
};

export default Footer;
