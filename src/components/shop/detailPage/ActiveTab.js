import React, { Component } from 'react';
import './ActivTab.css';
import First from './TabPage/First';
import Second from './TabPage/Second';
import Third from './TabPage/Third';

const menuList = {
	0: <First />,
	1: <Second />,
	2: <Third />,
};

class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			menu: 0,
		};
	}

	changeMenu = menuIndex => {
		this.setState({ menu: menuIndex });
	};

	render() {
		return (
			<div className="wrap">
				<div className="menuBar">
					<ul className="tabs">
						<li
							className={`${this.state.menu === 0 ? 'active' : ''}`}
							onClick={() => this.changeMenu(0)}
						>
							상세정보
						</li>
						<li
							className={`${this.state.menu === 1 ? 'active' : ''}`}
							onClick={() => this.changeMenu(1)}
						>
							상품리뷰
						</li>
						<li
							className={`${this.state.menu === 2 ? 'active' : ''}`}
							onClick={() => this.changeMenu(2)}
						>
							상품 문의
						</li>
						'
					</ul>
				</div>
				<div className="contentArea">{menuList[this.state.menu]}</div>
			</div>
		);
	}
}

export default App;
