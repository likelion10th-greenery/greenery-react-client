import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../../utils/color';

export default function Tab() {
	const [activeIndex, setActiveIndex] = useState(0);

	const tabClickHandler = index => [setActiveIndex(index)];

	const tabContArr = [
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(0)}>상세정보</TabTitle>,
			tabCont: <TabCont>상세정보 내용</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(1)}>상품리뷰</TabTitle>,
			tabCont: <TabCont>상품리뷰 내용</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(2)}>상품문의</TabTitle>,
			tabCont: <TabCont>상품문의 내용</TabCont>,
		},
	];
	return (
		<Container>
			<TabBoxed>
				{tabContArr.map((section, index) => {
					return section.tabTitle;
				})}
			</TabBoxed>
			<TabContentBox>{tabContArr[activeIndex].tabCont}</TabContentBox>
		</Container>
	);
}

const Container = styled.div`
	margin-top: 30px;
`;

const TabBoxed = styled.ul`
	display: flex;
	width: 100%;
`;

const TabContentBox = styled.div``;

const TabTitle = styled.li`
	border: 1px solid ${COLOR.gray};
	width: 30%;
	height: 50px;
`;

const TabCont = styled.div``;
