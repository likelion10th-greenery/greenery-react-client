import React, { Component } from 'react';
import '../ActivTab.css';

class Third extends React.Component {
	constructor(props) {
		super();

		this.state = {
			menu: 0,
		};
	}

	render() {
		return <div>상품 문의 탭입니다.</div>;
	}
}

export default Third;
