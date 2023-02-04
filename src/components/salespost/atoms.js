import { atom } from 'recoil';

export const imageFiles = atom({
	key: 'imgFiles',
	default: [],
});

export const tagList = atom({
	key: 'tagList',
	default: [{ data: 'hi', id: 0 }],
});
