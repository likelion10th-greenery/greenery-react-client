import React from 'react';
import { InputBox } from 'pages/Salespost';
import styled from 'styled-components';

export const SizeInputWrapper = styled.div`
	display: flex;
	div {
		display: inherit;
		flex-direction: column;
	}
`;

export const SizeInput = styled.div`
	height: 24px;
	min-width: 100px;
	position: relative;
	padding-left: 40px;
	margin-bottom: 7px;
	& {
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
	span {
		font-size: 14px;
		text-align: center;
		position: absolute;
		left: 3px;
		top: 4px;
	}
	input {
		font-size: 15px;
		min-width: 160px;
		height: 100%;
		border: none;
	}
`;

const Size = ({ register }) => {
	return (
		<InputBox>
			<SizeInputWrapper>
				<label>사이즈(cm)</label>
				<div>
					<SizeInput>
						<span>가로 |</span>
						<input style={{ border: 'none' }} {...register('plant_width')} type="number" min={0} />
					</SizeInput>
					<SizeInput>
						<span>세로 |</span>
						<input
							style={{ border: 'none' }}
							{...register('plant_vertical')}
							type="number"
							min={0}
						/>
					</SizeInput>
					<SizeInput>
						<span>높이 |</span>
						<input style={{ border: 'none' }} {...register('plant_height')} type="number" min={0} />
					</SizeInput>
				</div>
			</SizeInputWrapper>
		</InputBox>
	);
};

export default Size;
