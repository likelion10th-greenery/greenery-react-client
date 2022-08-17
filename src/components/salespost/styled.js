import styled from 'styled-components';

export const Wrapper = styled.div`
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
	background-color: #d6d6d66b;
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
export const ImageWrapper = styled.div`
	width: calc(${props => props.innerWidth * 0.5}px);
	height: 130px;
	background-color: white;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	/* &::-webkit-scrollbar {
		display: none; // 스크롤 바 안보이게
	} */
	input {
		display: none;
	}
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	padding-top: 5px;
`;
export const ImageAdder = styled.div`
	min-width: 100px;
	height: 100px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(225, 225, 225, 0.3);
	font-size: 24px;
	border: 1px solid gray;
	cursor: pointer;
	position: relative;
	transition: background-color 0.2s ease-in-out;
	&:hover,
	&:active {
		background-color: aliceblue;
	}
	span {
		position: absolute;
		font-size: 14px;
		bottom: 8%;
	}
`;
export const Image = styled.div`
	min-width: 100px;
	max-width: 100px;
	height: 100px;
	margin-left: 10px;
	position: relative;
	img {
		width: 100%;
		height: 100%;
	}
	&:hover {
		span {
			opacity: 1;
		}
	}
	span {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}
	.del {
		top: 5px;
		right: 5px;
	}
	.main {
		bottom: 5px;
		left: 5px;
		font-size: 14px;
		color: white;
		border: 1px soild white;
		padding: 2px 5px;
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
	background-color: white;
	padding: 10px;
`;
export const InputDetailWrapper = styled.div`
	background-color: white;
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
		background-color: #fad19c;
	}
	label {
		font-size: 14px;
		border: 1px solid gray;
		padding: 2px 25px;
		background-color: rgba(225, 225, 225, 0.2);
		transition: all 0.2s ease-in-out;
		&:hover,
		&:focus {
			background-color: antiquewhite;
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
export const Button = styled.button`
	position: absolute;
	bottom: -40px;
	background-color: #2bb601;
	color: whitesmoke;
	border: none;
	border-radius: 5px;
	padding: 7px 15px;
	&:hover {
		background-color: #2bc401;
	}
`;
