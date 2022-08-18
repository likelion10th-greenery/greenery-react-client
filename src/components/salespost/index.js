import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import AddressSelector from './address';
import { imageFiles } from './atoms';
import ImageInput from './imageInput';
import {
	Wrapper,
	Title,
	Form,
	InputWrapper,
	InputBox,
	InputDetailWrapper,
	RadioBtn,
	SizeInputWrapper,
	SizeInput,
	Textarea,
	Button,
} from './styled';

const SalesPost = () => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	window.addEventListener('resize', () => {
		setInnerWidth(window.innerWidth);
	});
	const [showAddress, setShowAddress] = useState(false);
	const imgFiles = useRecoilValue(imageFiles);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onValid = data => {
		// 주소 합치기
		//const address = data.address1 + data.address2 + data.address3;

		// data.image (=FileList) 덮어쓰기 필요
		const dataTransfer = new DataTransfer();

		Array.from(imgFiles).forEach(file => dataTransfer.items.add(file.file));
		data.image = dataTransfer.files; // -> Filelist

		//data.image = imgFiles.map(img => img.file); // -> array of File
		console.log(imgFiles);
		console.log(data);
	};
	const inValid = data => {
		console.log(errors);
	};

	return (
		<Wrapper>
			<Title>상품 등록</Title>
			<Form onSubmit={handleSubmit(onValid, inValid)} enctype="multipart/form-data">
				<InputWrapper>
					<InputBox>
						<label>카테고리</label>
						<select {...register('category', { required: true })}>
							<option>꽃</option>
							<option>관엽/공기정화</option>
							<option>다육식물</option>
							<option>야생화/분재</option>
							<option>동/서양란</option>
							<option>묘목/씨앗</option>
							<option>기타</option>
						</select>
					</InputBox>
					<InputBox>
						<label>상품명</label>
						<input {...register('name', { required: true })} type="text" />
					</InputBox>
					<InputBox>
						<label>판매가</label>
						<div>
							<input {...register('price', { required: true })} type="number" min={0} />원
						</div>
					</InputBox>
					<ImageInput register={register} innerWidth={innerWidth} />
					<InputBox>
						<label>상품 주요 정보</label>
						<InputDetailWrapper innerWidth={innerWidth}>
							<InputBox>
								<label>원산지</label>
								<RadioBtn>
									<input
										type="radio"
										id="native"
										{...register('origin', { required: true })}
										value="국산"
									/>
									<label htmlFor="native">국산</label>
								</RadioBtn>
								<RadioBtn>
									<input
										type="radio"
										id="abroad"
										{...register('origin', { required: true })}
										value="수입산"
									/>
									<label htmlFor="abroad">수입산</label>
								</RadioBtn>
								<RadioBtn>
									<input
										type="radio"
										id="else"
										{...register('origin', { required: true })}
										value="모름"
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
											<input {...register('width')} type="number" min={0} />
										</SizeInput>
										<SizeInput>
											<span>세로 |</span>
											<input {...register('vertical')} type="number" min={0} />
										</SizeInput>
										<SizeInput>
											<span>높이 |</span>
											<input {...register('height')} type="number" min={0} />
										</SizeInput>
									</div>
								</SizeInputWrapper>
							</InputBox>
							<InputBox>
								<label>화분 종류</label>
								<input {...register('pot')} type="text" />
							</InputBox>
							<InputBox>
								<label>배송 방법</label>
								<RadioBtn>
									<input
										type="radio"
										id="delivery"
										{...register('transport', { required: true })}
										value="택배"
									/>
									<label htmlFor="delivery" onClick={() => setShowAddress(false)}>
										택배
									</label>
								</RadioBtn>
								<RadioBtn>
									<input
										type="radio"
										id="meet"
										{...register('transport', { required: true })}
										value="직거래"
									/>
									<label htmlFor="meet" onClick={() => setShowAddress(true)}>
										직거래
									</label>
								</RadioBtn>
							</InputBox>
							{showAddress ? <AddressSelector register={register} /> : null}
						</InputDetailWrapper>
					</InputBox>
					<InputBox>
						<label>상세 설명</label>
						<Textarea {...register('detali')} innerWidth={innerWidth} />
					</InputBox>
				</InputWrapper>
				<Button>판매글 등록하기</Button>
			</Form>
		</Wrapper>
	);
};

export default SalesPost;
