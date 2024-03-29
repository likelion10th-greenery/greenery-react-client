import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import {
	Category,
	PostTitle,
	PlantName,
	PlantPrice,
	PlantStock,
	Pot,
	ImageInput,
	Origin,
	Size,
	Delivery,
	Description,
	Tags,
} from 'components/Salespost';
import { imageFiles } from 'components/Salespost/atoms';

import axios from 'axios';
import styled from 'styled-components';
import { COLOR } from 'constants/color';

export const Wrapper = styled.div`
	height: 100%;
	margin: 0px auto;
	margin-bottom: 50px;
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
	option {
		min-width: 220px;
		padding: 3px 5px;
		outline: none;
		border: 1px solid rgba(0, 0, 0, 0.4);
		margin-right: 5px;
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
	min-width: 485px;
	max-width: 485px;
	background-color: ${COLOR.white};
	padding-top: 15px;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	padding-top: 5px;
	${InputBox} {
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-top: 20px;
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

const Salespost = () => {
	const API_KEY = 'hu8nfu3m325us5grhquqzn0vsvf8stfwc214ef8x70fwvc7z';
	const navigate = useNavigate();
	const [imgFiles, setImgFiles] = useRecoilState(imageFiles);
	useEffect(() => {
		setImgFiles([]);
	}, [setImgFiles]);

	const postData = async input => {
		try {
			const res = await axios.post(`http://127.0.0.1:8000/shop/register/`, input);

			for (let img of imgFiles) {
				const id = res.data.id;
				// eslint-disable-next-line no-unused-vars
				const imgres = await axios.post(`http://127.0.0.1:8000/shop/img/shopimage/`, {
					plant: id,
					image: img.objUrl,
				});
			}

			alert('상품 등록이 완료되었습니다.');
			navigate('/shop/shop-list/view-all');
		} catch (err) {}
	};

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm();
	const onValid = data => {
		const detail = editorRef.current.getContent();
		const parsedData = {
			address: 'none', // 배송 방법 'courier' 선택 시에도 default로 문자열 들어가도록 설정
			...data,
			plant_detail: detail,
			plant_height: Number(data.plant_height),
			price: Number(data.price),
			stock: Number(data.stock),
			plant_width: Number(data.plant_width),
			plant_vertical: Number(data.plant_vertical),
		};

		postData(parsedData);
	};
	const inValid = errors => {
		alert('입력 조건을 만족시켜주세요!');
	};

	const editorRef = useRef();

	return (
		<Wrapper>
			<Container>
				<Title>판매글 등록하기</Title>
				<Form onSubmit={handleSubmit(onValid, inValid)} id="hook-form">
					<InputWrapper>
						<Category register={register} />
						<PostTitle register={register} errors={errors} />
						<PlantName register={register} errors={errors} />
						<PlantPrice register={register} errors={errors} />
						<PlantStock register={register} errors={errors} />
						<ImageInput register={register} />
						<Tags />
						<InputBox>
							<label>상품 주요 정보</label>
							<InputDetailWrapper>
								<Origin register={register} errors={errors} />
								<Size register={register} />
								<Pot register={register} />
								<Delivery register={register} errors={errors} setValue={setValue} />
							</InputDetailWrapper>
						</InputBox>
						<Description API_KEY={API_KEY} editorRef={editorRef} />
					</InputWrapper>
				</Form>
			</Container>
			<BtnBox>
				<Button type="submit" form="hook-form" disabled={isSubmitting}>
					판매글 등록하기
				</Button>
			</BtnBox>
		</Wrapper>
	);
};

export default Salespost;
