import { InputBox } from 'pages/Salespost';
import styled from 'styled-components';
import FlexBox from './../common/FlexBox';
import { COLOR } from 'constants/color';
import { tagList } from './atoms';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

const TagBox = styled.div`
	border-radius: 10px;
	padding: 2px 6px;
	margin-top: 7px;
	margin-right: 5px;
	background-color: ${COLOR.lightGreen};
	font-size: small;
`;

const TagInput = styled.input`
	border: 4px solid ${COLOR.darkGreen};
	border-radius: 5px;
`;

const DeleteBtn = styled.div`
	padding-left: 5px;
	cursor: pointer;
`;

const Tag = ({ children, id }) => {
	const [tags, setTags] = useRecoilState(tagList);
	const onDelete = id => {
		setTags(prev => prev.filter(tag => tag.id !== id));
	};
	return (
		<TagBox>
			<FlexBox>
				{children}
				<DeleteBtn onClick={e => onDelete(id)}>x</DeleteBtn>
			</FlexBox>
		</TagBox>
	);
};

const Tags = () => {
	const [tag, setTag] = useState('');
	const [tags, setTags] = useRecoilState(tagList);

	const onTagChange = e => {
		setTag(e.target.value);
	};

	const onKeyDown = e => {
		if (e.code === 'Enter') {
			e.preventDefault();
		}
		if (e.target.value.length > 15) {
			alert('태그 입력은 최대 15자까지 가능합니다.');
			setTag('');
			return;
		}
		if (e.code === 'Space' && e.target.value.length !== 0) {
			setTags(prev => [...prev, { data: tag, id: new Date().getTime() }]);
			setTag('');
		}
	};

	return (
		<InputBox style={{ maxWidth: '500px', minWidth: '500px', marginRight: '5px' }}>
			<label>태그</label>
			<TagInput
				onKeyDown={onKeyDown}
				onChange={onTagChange}
				name="tag"
				value={tag}
				placeholder="# 태그 입력 (최대 15자, 태그는 space 단위로 입력됩니다.)"
				style={{ width: '100%', marginBottom: '5px' }}
			/>
			<FlexBox maxWidth="100%" wrap="wrap">
				{tags.map((tag, index) => (
					<Tag key={index} id={tag.id}>
						#{tag.data}
					</Tag>
				))}
			</FlexBox>
		</InputBox>
	);
};

export default Tags;
