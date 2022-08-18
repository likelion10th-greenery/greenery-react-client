import Search from '../search';
import Category from '../category';
import Counter from './Counter';
import './index.css';
import Carousel from './Carousel';

function DetailPage() {
	return (
		<div className="App">
			<div className="Search">
				<Search />
			</div>
			<div className="Category">
				<Category />
			</div>
			<div className="PlantPicture" style={{ width: '30%' }}>
				<Carousel />
			</div>
			<div className="PlantExplain">
				<h2>제품명</h2>
				<p>가격</p>
				<p>배송비</p>
				<div>
					수량
					<Counter />
				</div>
				<div className="BuyBtn">
					<button>구매하기</button>
				</div>
				<div className="BasketBtn">
					<button>장바구니</button>
				</div>
				<div className="SellerInfo">
					<p>판매자 정보</p>
				</div>
			</div>
			<div className="PriceGraph">
				<p>시세그래프</p>
			</div>
			<div className="PriceTable">
				<p>시세 금액표</p>
			</div>
			<div className="PostRef">
				<p>관련 추천 게시물</p>
			</div>
			<div className="ProductDetail">
				<p>상품 상세 설명페이지</p>
			</div>
		</div>
	);
}

export default DetailPage;
