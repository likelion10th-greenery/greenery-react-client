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
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '0.5rem',
			}}
		>
			<button onClick={onDecrease}>
				<i className="pi pi-minus" style={{ fontSize: '.5rem' }} />
			</button>
			<span>{count}</span>
			<button onClick={onIncrease}>
				<i className="pi pi-plus" style={{ fontSize: '.5rem' }} />
			</button>
		</div>
	);
};

export default Counter;
