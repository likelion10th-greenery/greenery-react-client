import React, { useState } from 'react';
import { InputBox, RadioBtn } from 'pages/Salespost';
import AddressSelector from './AddressInput';
import ErrorMsg from './ErrorMessage';

const Delivery = ({ register, errors, setValue }) => {
	const [showAddress, setShowAddress] = useState(false);

	return (
		<>
			<InputBox style={{ marginBottom: 0 }}>
				<label>배송 방법</label>
				<RadioBtn>
					<input type="radio" id="delivery" {...register('deliver_type')} value="courier" />
					<label htmlFor="delivery" onClick={() => setShowAddress(false)}>
						택배
					</label>
				</RadioBtn>
				<RadioBtn>
					<input
						type="radio"
						id="meet"
						{...register('deliver_type', { required: '필수 입력 값입니다.' })}
						value="direct"
					/>
					<label htmlFor="meet" onClick={() => setShowAddress(true)}>
						직거래
					</label>
				</RadioBtn>
			</InputBox>
			{errors.deliver_type !== undefined && (
				<ErrorMsg paddingLeft="6.2rem">{errors.deliver_type.message}</ErrorMsg>
			)}
			{showAddress ? <AddressSelector register={register} setValue={setValue} /> : null}
		</>
	);
};

export default Delivery;
