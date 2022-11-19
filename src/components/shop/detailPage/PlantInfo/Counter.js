import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(1);

	const onIncrease = () => {
		setCount(prevCount => prevCount + 1);
	};
	const onDecrease = () => {
		setCount(prevCount => prevCount - 1);
	};
	return (
		<div style={{ border: '1px solid black', margin: '0px 10px' }}>
			<button onClick={onDecrease}>-</button>
			<span>{count}</span>
			<button onClick={onIncrease}>+</button>
		</div>
	);
};

export default Counter;
