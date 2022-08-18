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

// const duplicationCheck = (arr, x) => {
// 	for (var i = 0; i < arr.length; i += 1) {
// 		if (arr[i] === x) return true;
// 	}
// 	return false;
// };

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

		Array.from(imgFiles).forEach(file => dataTransfer.items.add(file.file));
		data.image = dataTransfer.files; // -> Filelist

		//data.image = imgFiles.map(img => img.file); // -> array of File

		console.log(data);
	};
	const inValid = data => {
		console.log(errors);
	};
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	window.addEventListener('resize', () => {
		setInnerWidth(window.innerWidth);
	});

	const [showAddress, setShowAddress] = useState(false);
	const [imgFiles, setImgFiles] = useState([]); // 업로드 된 파일 정보 배열
	const imgInput = useRef();
	const onImgInputClick = () => {
		if (imgFiles.length >= 10) {
			alert('파일은 최대 10개까지 업로드 가능합니다.');
			return;
		}
		imgInput.current.click();
	};
	const onChange = () => {
		let imgList = imgInput.current.files; // 사용자가 입력한 FileList

		// 업로드 개수 제한
		const canUpload = 10 - imgFiles.length; // 현재 업로드할 수 있는 최대 개수
		if (canUpload < imgList.length) {
			const tempList = [];
			for (let i = 0; i < canUpload; i += 1) {
				tempList.push(imgList[i]);
			}
			imgList = tempList;
		}

		// 미리보기용 상대경로 / 이미지 id 생성
		const tempList = [];
		for (let i = 0; i < imgList.length; i += 1) {
			const id = new Date().getTime() + imgList[i].lastModified;
			tempList.push({ file: imgList[i], objUrl: URL.createObjectURL(imgList[i]), id: id });
		}
		imgList = tempList;

		// 입력 파일데이터 리스트에 저장
		setImgFiles(prev => [...prev, ...imgList]);
	};
	const onDelete = id => {
		setImgFiles(prev => {
			const copied = [...prev];
			return copied.filter(file => file.id !== id);
		});
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
					<InputBox>
						<label>상품 이미지</label>
						<ImageWrapper innerWidth={innerWidth}>
							<ImageAdder onClick={onImgInputClick}>
								➕<span>{`${imgFiles.length}/10`}</span>
							</ImageAdder>
							<input
								{...register('image')}
								ref={imgInput}
								onChange={onChange}
								type="file"
								multiple
								accept="image/*"
							/>
							{imgFiles.map(img => (
								<Image key={img.id}>
									<img src={img.objUrl} alt="img" />
									<span className="del" onClick={() => onDelete(img.id)}>
										❌
									</span>
									<span className="rep">대표</span>
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
							{showAddress ? (
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
