import React from 'react';
import { SelectBox, SelectWrapper } from './styled';

const AddressSelector = ({ register }) => {
	return (
		<SelectWrapper>
			<SelectBox>
				<select {...register('address1a', { required: true })}>
					<option>시/도</option>
					<option>서울시</option>
				</select>
				<select {...register('address1b', { required: true })}>
					<option>시/군/구</option>
				</select>
				<select {...register('address1c', { required: true })}>
					<option>읍/면/동</option>
				</select>
			</SelectBox>
			<SelectBox>
				<select {...register('address2a')}>
					<option>시/도</option>
				</select>
				<select {...register('address2b')}>
					<option>시/군/구</option>
				</select>
				<select {...register('address2c')}>
					<option>읍/면/동</option>
				</select>
			</SelectBox>
			<SelectBox>
				<select {...register('address3a')}>
					<option>시/도</option>
				</select>
				<select {...register('address3b')}>
					<option>시/군/구</option>
				</select>
				<select {...register('address3c')}>
					<option>읍/면/동</option>
				</select>
			</SelectBox>
		</SelectWrapper>
	);
};

export default AddressSelector;
