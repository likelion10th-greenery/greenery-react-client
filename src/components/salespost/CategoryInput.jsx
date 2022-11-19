import React from 'react';
import { InputBox } from 'pages/Salespost';

const Category = ({ register }) => {
	return (
		<InputBox>
			<label>카테고리</label>
			<select {...register('category', { required: true })}>
				<option value="flower">꽃</option>
				<option value="foliage">관엽/공기정화</option>
				<option value="succulence">다육식물</option>
				<option value="wild">야생화/분재</option>
				<option value="orchid">동/서양란</option>
				<option value="seed">묘목/씨앗</option>
				<option value="else">기타</option>
			</select>
		</InputBox>
	);
};

export default Category;
