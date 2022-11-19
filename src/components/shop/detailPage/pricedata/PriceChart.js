import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import { COLOR } from '../../../../constants/color';
import { pricedata } from './pricedata';

// recharts 라이브러리 활용했습니다. API_URL : https://recharts.org/en-US/api/LineChart

export default function PriceChart() {
	return (
		<Wrapper>
			<LineChart
				width={580}
				height={386}
				data={pricedata}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				{/* <CartesianGrid strokeDasharray="0 0" /> */}
				{/* x축, datakey가 x 축으로 들어갈 내용 */}
				<XAxis dataKey="month" />
				{/* y축, x 축고 ㅏ동일함. */}
				<YAxis dataKey="price" />
				<Tooltip />
				<Legend />
				<Line dataKey="price" stroke={COLOR.green} />
			</LineChart>
			<PriceTable>
				<TablePrice>
					<TableTitle>거래가</TableTitle>
					<p>{pricedata[0].price}원</p>
					<p>{pricedata[1].price}원</p>
					<p>{pricedata[2].price}원</p>
					<p>{pricedata[3].price}원</p>
				</TablePrice>
				<TableDate>
					<TableTitle>거래일자</TableTitle>
					<p>
						{pricedata[0].month}.{pricedata[0].date}
					</p>
					<p>
						{pricedata[1].month}.{pricedata[1].date}
					</p>
					<p>
						{pricedata[2].month}.{pricedata[2].date}
					</p>
					<p>
						{pricedata[3].month}.{pricedata[3].date}
					</p>
				</TableDate>
			</PriceTable>
		</Wrapper>
	);
}

export const Wrapper = styled.div`
	display: flex;
	border: 1px solid ${COLOR.gray};
	background-color: ${COLOR.white};
	margin: 30px 30px;
	border-radius: 10px;
`;
export const PriceTable = styled.div`
	width: 400px;
	display: flex;
	align-itmes: center;
	justify-content: space-around;
`;
export const TableTitle = styled.p`
	border-bottom: 1px solid black;
`;
export const TablePrice = styled.div``;
export const TableDate = styled.div``;
