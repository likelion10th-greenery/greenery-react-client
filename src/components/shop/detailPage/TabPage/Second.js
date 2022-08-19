import React, { Component } from 'react';
import '../ActivTab.css';

class Second extends React.Component {
	constructor(props) {
		super();

		this.state = {
			menu: 0,
		};
	}

	render() {
		return <div>상세 리뷰 탭 입니다</div>;
	}
}

export default Second;
