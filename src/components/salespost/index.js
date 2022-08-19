import React, { useRef, useState } from 'react';
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
	Button,
} from './styled';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';

const SalesPost = () => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	window.addEventListener('resize', () => {
		setInnerWidth(window.innerWidth);
	});
	const [showAddress, setShowAddress] = useState(false);
	const imgFiles = useRecoilValue(imageFiles);

	const postData = async input => {
		const { data } = await axios.post(`http://127.0.0.1:8000/shop/register/`, { input });

		console.log(data);
	};

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

		//data.image = imgFiles.map(img => img.file); // -> array of File
		const detail = editorRef.current.getInstance().getHTML();
		const parsedData = { ...data, detail: detail, plant_images: dataTransfer.files };

		console.log(parsedData);

		postData(parsedData);
	};
	const inValid = errors => {
		console.log(errors);
	};

	const editorRef = useRef();

	/*
	{
    "plant_type":"[식물이름]",
    "price":1,
    "category":"FLOWER",
    "stock":1,
    "origin":"DOMESTIC",
    "deliver_type":"COURIER",
    "address":"[판매자 주소]",
    "plant_images":[
        {
            "image_url":"image_url1.com",
            "image_number":1
        },
        {
            "image_url":"image_url2.com",
            "image_number":2
        }
    ]
}
*/

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
						<input {...register('plant_type', { required: true })} type="text" />
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
										id="deliver_type"
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
						{/* <Textarea {...register('detail')} innerWidth={innerWidth} /> */}
						<Editor
							ref={editorRef}
							initialValue="."
							placeholder="내용을 입력해주세요."
							previewStyle="vertical"
							height="500px"
							initialEditType="wysiwyg"
							toolbarItems={[
								['heading', 'bold', 'italic', 'strike'],
								['hr', 'quote'],
								['ul', 'ol', 'task', 'indent', 'outdent'],
								['table', 'image', 'link'],
								['code', 'codeblock'],
							]}
							useCommandShortcut={false}
						/>
					</InputBox>
				</InputWrapper>
				<Button>판매글 등록하기</Button>
			</Form>
		</Wrapper>
	);
};

export default SalesPost;
