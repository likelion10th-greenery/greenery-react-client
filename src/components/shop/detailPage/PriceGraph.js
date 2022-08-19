import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
	{ time: '2022/04', price: 14000 },
	{ time: '2022/05', price: 15750 },
	{ time: '2022/06', price: 8000 },
	{ time: '2022/07', price: 12000 },
	{ time: '2022/08', price: 13050 },
];

const PriceGraph = () => (
	<LineChart
		width={600}
		height={300}
		data={data}
		margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
	>
		<Line dataKey="price" stroke="#405840" />
		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
		<XAxis dataKey="time" />
		<YAxis />
		<Tooltip />
	</LineChart>
);

export default PriceGraph;
