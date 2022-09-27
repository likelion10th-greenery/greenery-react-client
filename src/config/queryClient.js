import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0, // 쿼리 호출 실패 시 최대 재시도 횟수
			staleTime: 10 * 1000, // 쿼리 데이터 호출 쿨타임
			refetchOnWindowFocus: false, // query가 stale 상태일 경우, 윈도우에 포커싱이 될 때마다 재패치 여부
			refetchOnReconnect: false, // query가 stale 상태일 경우, reconnect 될 때마다 리패치 여부
		},
		mutation: {
			retry: 0,
		},
	},
});
