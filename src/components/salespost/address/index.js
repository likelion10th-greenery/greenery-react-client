import React, { useState } from 'react';
import { AddressBox, Wrapper, SearchBtn } from './styled';
import DaumPostCode from 'react-daum-postcode';

const AddressSelector = ({ register, setValue }) => {
	const [addressNum, setAddressNum] = useState('');
	const [popup, setPopup] = useState(false);
	const togglePopup = i => {
		setPopup(prev => !prev);
		setAddressNum('address' + i);
	};

	const onCompletePost = data => {
		setValue(addressNum, data.address);
		setPopup(false);
	};

	const popupStyle = {
		display: 'block',
		position: 'absolute',
		zIndex: '100',
		width: '400px',
		height: '400px',
		border: '1px solid #333333',
	};

	return (
		<Wrapper>
			{[1, 2, 3].map(i => (
				<AddressBox key={i}>
					<input {...register(`address${i}`)} type="text" placeholder={`직거래 가능 지역 ${i}`} />
					<SearchBtn type="button" onClick={() => togglePopup(i)}>
						주소 찾기
					</SearchBtn>
				</AddressBox>
			))}
			{popup && (
				<div>
					<DaumPostCode style={popupStyle} autoClose onComplete={onCompletePost} />
				</div>
			)}
		</Wrapper>
	);
};

export default AddressSelector;
