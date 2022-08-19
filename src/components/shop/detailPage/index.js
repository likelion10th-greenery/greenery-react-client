import Search from '../search';
import Category from '../category';
import Counter from './Counter';
import './index.css';
import Carousel from './Carousel';
import ActiveTab from './ActiveTab';
import RefCarousel from './RefCarousel';

function DetailPage() {
	return (
		<div className="App">
			<div className="Search">
				<Search />
			</div>
			<div className="Category">
				<Category />
			</div>
			<div className="PlantPicture">
				<Carousel />
			</div>
			<div className="PlantExplain">
				<h1>제품명</h1>
				<p>가격</p>
				<p>배송비</p>
				<div className="Counter">
					<span>수량</span>
					<Counter />
				</div>
				<div className="Btn">
					<button>구매하기</button>
					<button>장바구니</button>
				</div>
				<div className="SellerInfo">
					<p>판매자 정보</p>
				</div>
			</div>
			<div className="PriceInfo">
				<div className="PriceGraph">
					<p>시세그래프</p>
				</div>
				<div className="PriceTable">
					<p>시세 금액표</p>
				</div>
			</div>
			<div className="PostRef">
				<RefCarousel />
			</div>
			<div className="ProductDetail">
				<ActiveTab />
			</div>
		</div>
	);
}

export default DetailPage;
