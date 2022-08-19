import React, { Component } from 'react';
import '../ActivTab.css';

class First extends React.Component {
	constructor(props) {
		super();

		this.state = {
			menu: 0,
		};
	}

	render() {
		return <div>상세 정보</div>;
	}
}

export default First;
