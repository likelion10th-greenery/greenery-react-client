import React from 'react';
import { InputBox } from 'pages/Salespost';
import ErrorMsg from './ErrorMessage';

export const PostTitle = ({ register, errors }) => {
	return (
		<InputBox>
			<label>제목</label>
			<input
				{...register('feed_title', {
					required: '필수 입력 값입니다.',
					maxLength: {
						value: 20,
						message: '최대 20자까지 입력 가능합니다.',
					},
				})}
				type="text"
			/>
			{errors.feed_title !== undefined && <ErrorMsg>{errors.feed_title.message}</ErrorMsg>}
		</InputBox>
	);
};

export const PlantName = ({ register, errors }) => {
	return (
		<InputBox>
			<label>상품명</label>
			<input
				{...register('plant_name', {
					required: '필수 입력 값입니다.',
					pattern: { value: /^[^\s]+$/, message: '띄어쓰기는 불가합니다.' },
				})}
				type="text"
			/>
			{errors.plant_name !== undefined && <ErrorMsg>{errors.plant_name.message}</ErrorMsg>}
		</InputBox>
	);
};

export const PlantPrice = ({ register, errors }) => {
	return (
		<InputBox>
			<label>판매가</label>
			<div>
				<input {...register('price', { required: '필수 입력 값입니다.' })} type="number" min={0} />
				원
			</div>
			{errors.price !== undefined && <ErrorMsg>{errors.price.message}</ErrorMsg>}
		</InputBox>
	);
};

export const PlantStock = ({ register, errors }) => {
	return (
		<InputBox>
			<label>재고</label>
			<div>
				<input {...register('stock', { required: '필수 입력 값입니다.' })} type="number" min={0} />
				개
			</div>
			{errors.stock !== undefined && <ErrorMsg>{errors.stock.message}</ErrorMsg>}
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
