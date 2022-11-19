import React from 'react';
import { InputBox, ErrorMsg } from 'pages/Salespost';

export const PostTitle = ({ register, errors }) => {
	return (
		<>
			<InputBox>
				<label>제목</label>
				<input
					{...register('feed_Stock', {
						required: '필수 입력 값입니다.',
						maxLength: {
							value: 20,
							message: '최대 20자까지 입력 가능합니다.',
						},
					})}
					type="text"
				/>
			</InputBox>
			{errors.feed_Stock !== undefined && <ErrorMsg>{errors.feed_Stock.message}</ErrorMsg>}
		</>
	);
};

export const PlantName = ({ register, errors }) => {
	return (
		<>
			<InputBox>
				<label>상품명</label>
				<input
					{...register('plant_type', {
						required: '필수 입력 값입니다.',
						pattern: { value: /^[^\s]+$/, message: '띄어쓰기는 불가합니다.' },
					})}
					type="text"
				/>
			</InputBox>
			{errors.plant_type !== undefined && <ErrorMsg>{errors.plant_type.message}</ErrorMsg>}
		</>
	);
};

export const PlantPrice = ({ register, errors }) => {
	return (
		<>
			<InputBox>
				<label>판매가</label>
				<div>
					<input
						{...register('price', { required: '필수 입력 값입니다.' })}
						type="number"
						min={0}
					/>
					원
				</div>
			</InputBox>
			{errors.price !== undefined && <ErrorMsg>{errors.price.message}</ErrorMsg>}
		</>
	);
};

export const PlantStock = ({ register, errors }) => {
	return (
		<>
			<InputBox>
				<label>재고</label>
				<div>
					<input
						{...register('stock', { required: '필수 입력 값입니다.' })}
						type="number"
						min={0}
					/>
					개
				</div>
			</InputBox>
			{errors.stock !== undefined && <ErrorMsg>{errors.stock.message}</ErrorMsg>}
		</>
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
