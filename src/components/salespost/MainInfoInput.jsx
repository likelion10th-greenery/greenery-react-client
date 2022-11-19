import React from 'react';
import { InputBox } from 'pages/Salespost';

export const PostTitle = ({ register }) => {
	return (
		<InputBox>
			<label>제목</label>
			<input {...register('feed_Stock', { required: '필수 입력 값입니다.' })} type="text" />
		</InputBox>
	);
};

export const PlantName = ({ register }) => {
	return (
		<InputBox>
			<label>상품명</label>
			<input {...register('plant_type', { required: '필수 입력 값입니다.' })} type="text" />
		</InputBox>
	);
};

export const PlantPrice = ({ register }) => {
	return (
		<InputBox>
			<label>판매가</label>
			<div>
				<input {...register('price', { required: '필수 입력 값입니다.' })} type="number" min={0} />
				원
			</div>
		</InputBox>
	);
};

export const PlantStock = ({ register }) => {
	return (
		<InputBox>
			<label>재고</label>
			<div>
				<input {...register('stock', { required: '필수 입력 값입니다.' })} type="number" min={0} />
				개
			</div>
		</InputBox>
	);
};

export const Pot = ({ register }) => {
	return (
		<InputBox>
			<label>화분 종류</label>
			<input {...register('pot_type')} type="text" />
		</InputBox>
	);
};
