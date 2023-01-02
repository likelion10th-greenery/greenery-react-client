import { FlexBox } from 'components/common';
import { COLOR } from 'constants/color';
import styled from 'styled-components';
import ShareItem from './ShareItem';
import Symbol from './Symbol';

const items = [
	{
		id: 1,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇ이라고한머리먿ㄹㄷ저퍄애너ㅐㅑ런래ㅑㅓㅈ대ㅑ헌ㅇ랴냐퍼ㅑㄴ럴먀ㅐ너랴ㅐㅇㄴ머ㅑㅐ',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
	{
		id: 2,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇ',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
	{
		id: 3,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇ',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
	{
		id: 4,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇ',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
	{
		id: 5,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇ',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
	{
		id: 6,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇ',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
	{
		id: 7,
		name: '나눔',
		status: '거래 전',
		title:
			'여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목은 2줄까지만 표시되고 그 이상은 ...으로 줄여요여기는 게시글 제목입니다. 게시글 제목ㅇㄴㅁ라ㅓ인ㅁ;러ㅏㅣㅁㄴ어리ㅏㅁㄴ러ㅏ밍너라ㅣㄴㅁㅇsdaklfgjhsrejawgldksbjlksjfdkfjae;krsigjkldfbj lksjfdjisgiwerijofibjfdvlkjfirglejsflidk',
		userName: '소리',
		date: '2023.01.01',
		views: 12,
		like: 1,
		bookmark: 12,
		comments: 1,
	},
];

const ShareList = () => {
	return (
		<>
			{items.map((item, idx) => {
				return (
					<FlexBox key={item.id} column>
						<Symbol name={item.name} status={item.status} />
						<ShareItem item={item} fin={idx === items.length - 1 && true} />
					</FlexBox>
				);
			})}
		</>
	);
};

export default ShareList;
