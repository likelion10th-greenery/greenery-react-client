import { useState, useCallback } from 'react';

const useInput = (initValue = '') => {
	const [value, setValue] = useState(initValue);
	const handler = useCallback(e => {
		setValue(e.target.value);
	}, []);

	return [value, handler, handler];
};

export default useInput;
