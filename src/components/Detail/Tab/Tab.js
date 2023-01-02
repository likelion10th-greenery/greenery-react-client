import { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.
const Wrapper = styled.div`
	margin: 2rem 2rem;
`;

const TabMenu = styled.ul`
	background-color: ${COLOR.green};
	color: ${COLOR.white};
	font-weight: bold;
	display: flex;
	align-items: center;
	list-style: none;
	padding: 0;

	.submenu {
		text-align: center;
		// 기본 Tabmenu 에 대한 CSS를 구현
		display: flex;
		justify-content: center;
		/* justify-content: space-between;
    	heigth: 305px; */
		width: calc(100% / 3);
		padding: 10px;
		font-size: 15px;
		transition: 0.2s;
	}

	.focused {
		//선택된 Tabmenu 에만 적용되는 CSS를 구현
		background-color: ${COLOR.white};
		color: ${COLOR.green};
	}

	& div.desc {
		text-align: center;
	}
`;

const Desc = styled.div`
	background-color: ${COLOR.white};
`;
export const Tab = () => {
	// Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
	const [currentTab, clickTab] = useState(0);

	const menuArr = [
		{ name: '상세정보', content: 'Tab menu ONE' },
		{ name: '상품리뷰', content: 'Tab menu TWO' },
		{ name: '상품문의', content: 'Tab menu THREE' },
	];

	const selectMenuHandler = index => {
		// parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
		// 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
		clickTab(index);
	};

	return (
		<Wrapper>
			<TabMenu>
				{menuArr.map((el, index) => (
					<li
						key={el.name}
						className={index === currentTab ? 'submenu focused' : 'submenu'}
						onClick={() => selectMenuHandler(index)}
					>
						{el.name}
					</li>
				))}
			</TabMenu>
			<Desc>
				<p>{menuArr[currentTab].content}</p>
			</Desc>
		</Wrapper>
	);
};
