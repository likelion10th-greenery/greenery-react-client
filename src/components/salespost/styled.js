import styled from 'styled-components';
import { COLOR } from './../../utils/color';

export const Wrapper = styled.div`
	height: 100%;
	margin: 50px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Container = styled.div`
	width: 100%;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
export const Title = styled.h3`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 20px;
`;
export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${COLOR.gray};
	position: relative;
`;
export const InputWrapper = styled.div`
	width: 80%;
	margin: 15px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	label {
		margin-bottom: 10px;
	}
	input,
	select,
	option,
	textarea {
		min-width: 220px;
		padding: 3px 5px;
		outline: none;
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-width: 270px;
	margin: 10px;
	border-radius: 5px;
	background-color: ${COLOR.white};
	padding: 10px;
`;
export const InputDetailWrapper = styled.div`
	background-color: ${COLOR.white};
	width: calc(${props => props.innerWidth * 0.5}px);
	padding-top: 15px;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	padding-top: 5px;
	${InputBox} {
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 20px;
	}
	label {
		font-size: 12px;
		margin-right: 10px;
		min-width: 70px;
		text-align: end;
	}
`;
export const RadioBtn = styled.div`
	input[type='radio'] {
		display: none;
	}
	input[type='radio']:checked + label {
		background-color: ${COLOR.lightGreen};
	}
	label {
		font-size: 14px;
		border: 1px solid gray;
		padding: 2px 25px;
		background-color: rgba(225, 225, 225, 0.15);
		transition: all 0.2s ease-in-out;
		&:hover,
		&:focus {
			background-color: ${COLOR.gray};
		}
	}
`;
export const SizeInputWrapper = styled.div`
	display: flex;
	div {
		display: inherit;
		flex-direction: column;
	}
`;
export const SizeInput = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.5);
	height: 24px;
	min-width: 100px;
	position: relative;
	padding-left: 40px;
	margin-bottom: 7px;
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
export const Textarea = styled.textarea`
	width: calc(${props => props.innerWidth * 0.5 - 14}px);
	height: 100px;
	resize: none;
	padding: 7px;
`;

export const BtnBox = styled.div`
	text-align: center;
`;

export const Button = styled.button`
	background-color: ${COLOR.green};
	color: ${COLOR.white};
	border: none;
	border-radius: 5px;
	padding: 7px 15px;
	&:hover {
		background-color: ${COLOR.neonGreen};
		color: ${COLOR.darkGreen};
	}
`;
