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
		console.log(input);
		const { data } = await axios.post(`http://127.0.0.1:8000/shop/register/`, input);

		console.log(data);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();
	const onValid = data => {
		// const newObj = []...imgFiles],

		// 주소 합치기
		//const address = data.address1 + data.address2 + data.address3;

		// data.image (=FileList) 덮어쓰기 필요
		// const dataTransfer = new DataTransfer();

		// Array.from(imgFiles).forEach(file => dataTransfer.items.add(file.file));

		// console.log(dataTransfer.files);

		const detail = editorRef.current.getInstance().getHTML();
		const parsedData = {
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

		const formData = new FormData();
		formData.append('file', parsedData);

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
    "category":"flower",
    "stock":1,
    "origin":"domestic",
    "deliver_type":"courier",
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

	/*{
  "category": "flower",
  "deliver_type": "courier",
  "detail": "<p>.gkdl</p>",
  "height": 1,
  "origin": "domestic",
  "plant_images": [{"image_url: 'blob:http://localhost:3000/688ed76f-47f9-4131-98d8-5e81854280a1", "image_number": 0}
}, {"image_url": "blob:http://localhost:3000/688ed76f-47f9-4131-98d8-5e81854280a1", "image_number": 0}
],
  "plant_type": "test",
  "pot": "11",
  "price": 11,
  "stock": 11,
  "vertical": 1,
  "width": 1
}*/

	return (
		<Wrapper>
			<Title>상품 등록</Title>
			<Form onSubmit={handleSubmit(onValid, inValid)} enctype="multipart/form-data">
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

					<ImageInput register={register} innerWidth={innerWidth} />
					<InputBox>
						<label>상품 주요 정보</label>
						<InputDetailWrapper innerWidth={innerWidth}>
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
