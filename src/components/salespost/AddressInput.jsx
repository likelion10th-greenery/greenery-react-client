import React, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import styled from 'styled-components';
import { COLOR } from 'constants/color';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 35px;
	position: relative;
`;

const AddressBox = styled.div`
	margin-left: 63px;
	margin-bottom: 15px;
`;

const SearchBtn = styled.button`
	padding: 2.5px 7px;
	background-color: transparent;
	margin-left: 5px;
	border-width: 1px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	background-color: ${COLOR.green};
	color: ${COLOR.white};
`;

const AddressSelector = ({ register, setValue }) => {
	const [addressNum, setAddressNum] = useState('');
	// const [addResult, setAddResult] = useState('');
	const [popup, setPopup] = useState(false);
	const togglePopup = i => {
		setPopup(prev => !prev);
		setAddressNum('address');
	};

	const onCompletePost = data => {
		setValue('address', data.address);
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
			{[1].map(i => (
				<AddressBox key={i}>
					<input {...register(`address`)} type="text" placeholder={`직거래 가능 지역 ${i}`} />
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
