import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Wrapper,
	Title,
	Form,
	InputWrapper,
	InputBox,
	ImageWrapper,
	ImageAdder,
	Image,
	InputDetailWrapper,
	RadioBtn,
	SizeInputWrapper,
	SizeInput,
	Textarea,
	Button,
} from './styled';

const SalesPost = () => {
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

		Array.from(imgFiles).forEach(file => dataTransfer.items.add(file));
		data.image = dataTransfer.files;

		console.log(data);
	};
	const inValid = data => {
		console.log(errors);
	};
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	window.addEventListener('resize', () => {
		setInnerWidth(window.innerWidth);
	});

	const [showSelector, setShowSelector] = useState(false);
	const [imgFiles, setImgFiles] = useState([]); // 업로드 된 파일 정보 배열
	const [imgFilesUrl, setImgFilesUrl] = useState([]); // 미리보기용 이미지 파일 경로 배열
	const imgInput = useRef();
	const onImgInputClick = () => {
		if (imgFiles.length >= 10) {
			alert('파일은 최대 10개까지 업로드 가능합니다.');
			setImgFiles(prev => [...prev].splice(0, 10));
			return;
		}
		imgInput.current.click();
	};
	const onChange = () => {
		const imgList = imgInput.current.files;
		setImgFiles(prev => [...prev, ...imgList]);
		setImgFilesUrl(prev => {
			const imgUrlList = [...prev];
			for (let i = 0; i < imgList.length; i += 1) {
				// 미리보기용 상대경로
				const imgUrl = URL.createObjectURL(imgList[i]);
				imgUrlList.push(imgUrl);
			}
			return imgUrlList;
		});
	};
	return (
		<Wrapper>
			<Title>판매글 등록하기</Title>
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
					<InputBox>
						<label>상품 이미지</label>
						<ImageWrapper innerWidth={innerWidth}>
							<ImageAdder onClick={onImgInputClick}>
								➕<span>{`${imgFilesUrl.length}/10`}</span>
							</ImageAdder>
							<input
								{...register('image')}
								ref={imgInput}
								onChange={onChange}
								type="file"
								multiple
								accept="image/*"
							/>
							{imgFilesUrl.map((file, idx) => (
								<Image key={idx}>
									<img src={file} alt="img" />
									<span className="del">❌</span>
									<span className="main">대표</span>
								</Image>
							))}
						</ImageWrapper>
					</InputBox>
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
									<label htmlFor="delivery" onClick={() => setShowSelector(false)}>
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
									<label htmlFor="meet" onClick={() => setShowSelector(true)}>
										직거래
									</label>
								</RadioBtn>
							</InputBox>
							{showSelector ? (
								<InputBox>
									<select {...register('address1')}>
										<option>시/도</option>
									</select>
									<select {...register('address2')}>
										<option>시/군/구</option>
									</select>
									<select {...register('address3')}>
										<option>읍/면/동</option>
									</select>
								</InputBox>
							) : null}
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
