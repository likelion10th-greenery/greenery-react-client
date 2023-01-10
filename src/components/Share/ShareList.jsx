import { FlexBox } from 'components/common';
import { COLOR } from 'constants/color';
import styled from 'styled-components';
import ShareItem from './ListItem/Item';
import Symbol from './ListItem/Symbol';

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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
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
		image:
			'https://media.istockphoto.com/id/1372896722/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%99%94%EB%B6%84-%EB%B0%94%EB%82%98%EB%82%98-%EC%8B%9D%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=R_oZjWbJwOnW8oR6ORnkQrYHQmg1NL1NzCqnAYpiFCc=',
	},
];

const Image = styled.img`
	width: 10rem;
	height: 10rem;
	padding-bottom: 1rem;
	margin-left: 3rem;
`;

const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${COLOR.gray};
	text-align: center;
	vertical-align: middle;

	margin-bottom: 2rem;
`;

const ShareList = () => {
	return (
		<>
			{items.map((item, idx) => {
				return (
					<>
						<FlexBox key={item.id} center>
							<FlexBox column height="100%" padding="0 0 1rem 0" justifyContent="space-around">
								<Symbol name={item.name} status={item.status} />
								<ShareItem item={item} fin={idx === items.length - 1 && true} />
							</FlexBox>
							<Image src={item.image} />
						</FlexBox>
						{idx !== items.length - 1 && <Separator />}
					</>
				);
			})}
		</>
	);
};

export default ShareList;
