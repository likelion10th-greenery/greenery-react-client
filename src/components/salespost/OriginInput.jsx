import React from 'react';
import { InputBox, RadioBtn, ErrorMsg } from 'pages/Salespost';

export const Origin = ({ register, errors }) => {
	return (
		<>
			<InputBox style={{ marginBottom: 0 }}>
				<label>원산지</label>
				<RadioBtn>
					<input type="radio" id="native" {...register('origin')} value="domestic" />
					<label htmlFor="native">국산</label>
				</RadioBtn>
				<RadioBtn>
					<input type="radio" id="abroad" {...register('origin')} value="import" />
					<label htmlFor="abroad">수입산</label>
				</RadioBtn>
				<RadioBtn>
					<input
						type="radio"
						id="else"
						{...register('origin', { required: '필수 입력 값입니다.' })}
						value="else"
					/>
					<label htmlFor="else">모름</label>
				</RadioBtn>
			</InputBox>
			{errors.origin !== undefined && (
				<ErrorMsg style={{ paddingLeft: '6rem' }}>{errors.origin.message}</ErrorMsg>
			)}
		</>
	);
};
