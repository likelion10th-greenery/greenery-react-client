import Counter from './Counter';
import './index.css';

function DetailPage() {
	return (
		<div className="App">
			<div className="Category">
				<p>메뉴</p>
				<p>-</p>
				<p>대분류</p>
				<p>-</p>
				<p>소분류</p>
			</div>
			<div>
				<p>상품사진</p>
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
