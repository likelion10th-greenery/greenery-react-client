import { COLOR } from 'constants/color';
import { Fragment } from 'react';
import styled from 'styled-components';
import { FlexBox } from '.';

const SelectBox = styled.select`
	padding: 0.4rem 0.5rem;
	border: 1px solid ${COLOR.demiLightGreen};
	color: ${COLOR.demiLightGreen};
	border-radius: 5px;
	margin: 0 1rem 1.5rem 0;
`;

const OptionItem = styled.option`
	width: 100%;
	border-radius: 5px;
`;

const returnOptions = item => {
	return <OptionItem key={item}>{item}</OptionItem>;
};

const returnLabel = opt => {
	return (
		<Fragment key={opt.id}>
			<label htmlFor={opt.id} />
			<SelectBox id={opt.id}>
				<OptionItem disabled>{opt.id}</OptionItem>
				{opt.options.map(returnOptions)}
			</SelectBox>
		</Fragment>
	);
};

const Filter = ({ filterOption }) => {
	return <FlexBox>{filterOption.map(returnLabel)}</FlexBox>;
};

export default Filter;
