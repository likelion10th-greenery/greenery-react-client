import { FlexBox } from 'components/common';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import { COLOR } from 'constants/color';
import { pricedata } from './pricedata';

// recharts 라이브러리 활용했습니다. API_URL : https://recharts.org/en-US/api/LineChart

export default function PriceChart() {
	return (
		<Wrapper>
			<LineChart
				width={400}
				height={300}
				data={pricedata}
				padding={{ top: 15, right: 30, left: 20, bottom: 5 }}
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
				<FlexBox center column>
					<TableTitle>거래가</TableTitle>
					<Price>{pricedata[0].price}원</Price>
					<Price>{pricedata[1].price}원</Price>
					<Price>{pricedata[2].price}원</Price>
					<Price>{pricedata[3].price}원</Price>
					<Price>{pricedata[4].price}원</Price>
					<Price>{pricedata[5].price}원</Price>
				</FlexBox>
				<FlexBox center column>
					<TableTitle>거래일자</TableTitle>
					<Price>
						{pricedata[0].month}.{pricedata[0].date}
					</Price>
					<Price>
						{pricedata[1].month}.{pricedata[1].date}
					</Price>
					<Price>
						{pricedata[2].month}.{pricedata[2].date}
					</Price>
					<Price>
						{pricedata[3].month}.{pricedata[3].date}
					</Price>
					<Price>
						{pricedata[4].month}.{pricedata[4].date}
					</Price>
					<Price>
						{pricedata[5].month}.{pricedata[5].date}
					</Price>
				</FlexBox>
			</PriceTable>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	border: 0.5px solid ${COLOR.darkgray};
	background-color: ${COLOR.white};
	margin: 2rem 2rem;
	justify-content: space-around;
	padding-top: 2rem;
`;
const PriceTable = styled.div`
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const TableTitle = styled.p`
	border-bottom: 1px solid black;
	text-align: center;
`;
const Price = styled.p`
	margin: 0.5rem 0;
`;
