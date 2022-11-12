import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import AddressSelector from 'components/Salespost/AddressInput';
import { imageFiles } from 'components/Salespost/atoms';
import ImageInput from 'components/Salespost/ImageInput';
import { Editor } from '@tinymce/tinymce-react';
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
	const [showAddress, setShowAddress] = useState(false);
	const imgFiles = useRecoilValue(imageFiles);

	const postData = async input => {
		try {
			const res = await axios.post(`http://127.0.0.1:8000/shop/register/`, input);
			console.log(res);
			//window.location.reload();
			navigate('/shop/shop-list/view-all');
		} catch (err) {
			console.log(err);
		}
	};

	const { register, handleSubmit, setValue } = useForm();
	const onValid = data => {
		// const newObj = []...imgFiles],

		// 주소 합치기
		//const address = data.address1 + data.address2 + data.address3;

		// data.image (=FileList) 덮어쓰기 필요
		// const dataTransfer = new DataTransfer();

		// Array.from(imgFiles).forEach(file => dataTransfer.items.add(file.file));

		// console.log(dataTransfer.files);

		const detail = editorRef.current.getContent();
		const parsedData = {
			address: 'none', // 배송 방법 'courier' 선택 시에도 default로 문자열 들어가도록 설정
			...data,
			plant_detail: detail,
			plant_images: imgFiles.map((img, idx) => {
				const plant_images = { image_url: img.objUrl, image_number: idx };

				return plant_images;
			}),

			plant_height: Number(data.plant_height),
			price: Number(data.price),
			stock: Number(data.stock),
			plant_width: Number(data.plant_width),
			plant_vertical: Number(data.plant_vertical),
			// address: `${data.address1}, ${data.address2}, ${data.address3}`,
		};
		// console.log(parsedData);

		// multipart data 전송하는 게 아니라면 formData 쓸 필요는 없는 것 같아요
		//const formData = new FormData();
		//formData.append('file', parsedData);

		postData(parsedData);
	};
	const inValid = errors => {
		console.log(errors);
	};

	const editorRef = useRef();

	return (
		<Wrapper>
			<Container>
				<Title>상품 등록</Title>
				<Form onSubmit={handleSubmit(onValid, inValid)} id="hook-form">
					<InputWrapper>
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
						<InputBox>
							<label>제목</label>
							<input {...register('feed_title', { required: true })} type="text" />
						</InputBox>
						<InputBox>
							<label>상품명</label>
							<input {...register('plant_type', { required: true })} type="text" />
						</InputBox>
						<InputBox>
							<label>판매가</label>
							<div>
								<input {...register('price', { required: true })} type="number" min={0} />원
							</div>
						</InputBox>
						<InputBox>
							<label>재고</label>
							<div>
								<input {...register('stock', { required: true })} type="number" min={0} />개
							</div>
						</InputBox>

						<ImageInput register={register} />
						<InputBox>
							<label>상품 주요 정보</label>
							<InputDetailWrapper>
								<InputBox>
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
											{...register('origin', { required: true })}
											value="else"
										/>
										<label htmlFor="else">모름</label>
									</RadioBtn>
								</InputBox>
								<InputBox>
									<SizeInputWrapper>
										<label>사이즈(cm)</label>
										<div>
											<SizeInput>
												<span>가로 |</span>
												<input {...register('plant_width')} type="number" min={0} />
											</SizeInput>
											<SizeInput>
												<span>세로 |</span>
												<input {...register('plant_vertical')} type="number" min={0} />
											</SizeInput>
											<SizeInput>
												<span>높이 |</span>
												<input {...register('plant_height')} type="number" min={0} />
											</SizeInput>
										</div>
									</SizeInputWrapper>
								</InputBox>
								<InputBox>
									<label>화분 종류</label>
									<input {...register('pot_type')} type="text" />
								</InputBox>
								<InputBox>
									<label>배송 방법</label>
									<RadioBtn>
										<input
											type="radio"
											id="delivery"
											{...register('deliver_type', { required: true })}
											value="courier"
										/>
										<label htmlFor="delivery" onClick={() => setShowAddress(false)}>
											택배
										</label>
									</RadioBtn>
									<RadioBtn>
										<input
											type="radio"
											id="meet"
											{...register('deliver_type', { required: true })}
											value="direct"
										/>
										<label htmlFor="meet" onClick={() => setShowAddress(true)}>
											직거래
										</label>
									</RadioBtn>
								</InputBox>
								{showAddress ? <AddressSelector register={register} setValue={setValue} /> : null}
							</InputDetailWrapper>
						</InputBox>
						<InputBox>
							<label>상세 설명</label>
							<Editor
								apiKey={API_KEY}
								// ref={editorRef}
								onInit={(evt, editor) => (editorRef.current = editor)}
								initialValue=""
								init={{
									height: 500,
									menubar: false,
									plugins: [
										'advlist',
										'autolink',
										'lists',
										'link',
										'image',
										'charmap',
										'preview',
										'anchor',
										'searchreplace',
										'visualblocks',
										'code',
										'fullscreen',
										'insertdatetime',
										'media',
										'table',
										'code',
										'help',
										'wordcount',
									],
									toolbar:
										'undo redo | blocks | ' +
										'bold italic forecolor | alignleft aligncenter ' +
										'alignright alignjustify | bullist numlist outdent indent | ' +
										'removeformat | help',
									content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
								}}
							/>
						</InputBox>
					</InputWrapper>
				</Form>
			</Container>
			<BtnBox>
				<Button type="submit" form="hook-form">
					판매글 등록하기
				</Button>
			</BtnBox>
		</Wrapper>
	);
};

export default Salespost;
