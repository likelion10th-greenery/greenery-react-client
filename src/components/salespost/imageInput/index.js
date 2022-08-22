import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { imageFiles } from '../atoms';
import { InputBox, ImageWrapper, ImageAdder, Image } from './styled';

const ImageInput = ({ register, innerWidth }) => {
	const [imgFiles, setImgFiles] = useRecoilState(imageFiles);
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
			const repValue = imgFiles.length + i === 0 ? true : false; // 0번 인덱스 -> 대표사진
			tempList.push({
				file: imgList[i], // input에서 넘어온 File 데이터
				objUrl: URL.createObjectURL(imgList[i]), // 상대 경로
				id: id, // 이미지 id
				isRep: repValue, // 대표 이미지 식별값
			});
		}
		imgList = tempList;

		// 입력 파일데이터 리스트에 저장
		setImgFiles(prev => [...prev, ...imgList]);
	};
	const onDelete = id => {
		setImgFiles(prev => {
			const copied = [...prev];
			const tempList = copied.filter(file => file.id !== id);
			if (copied[0].id === id) {
				// 삭제한 이미지가 대표사진이면
				const nextRep = tempList.splice(0, 1);
				tempList.splice(0, 0, { ...nextRep[0], isRep: true }); // 대표 넘겨주기
			}
			return tempList;
		});
	};
	const onRepClick = id => {
		let index = 0;
		setImgFiles(prev => {
			const tempList = [...prev].map((img, idx) => {
				if (img.id === id) {
					index = idx;
					return { ...img, isRep: true };
				} else {
					return { ...img, isRep: false };
				}
			});
			const target = tempList.splice(index, 1);
			tempList.splice(0, 0, target[0]);
			return tempList;
		});
		//alert('대표 이미지가 변경되었습니다.');
	};
	return (
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
						<span onClick={() => onRepClick(img.id)} className={img.isRep ? 'rep isRep' : 'rep'}>
							대표
						</span>
					</Image>
				))}
			</ImageWrapper>
		</InputBox>
	);
};

export default ImageInput;
