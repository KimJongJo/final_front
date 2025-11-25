import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Product.css";

export default function Product() {
    return (
        <a className="Product-card">
            {/* 자재 이미지 */}
            <div className="product-image">
                <img src="/images/이미지테스트.png" alt="상품" />
                <i className="bi bi-heart favorite-icon"></i>
            </div>

            {/* 자재 정보 */}
            <div className="product-info">
                {/* 업체명 */}
                <span className="store-name">업체명</span>
                {/* 업체 소개 */}
                <div className="product-name">상품명 2줄까지 노출해야 하나 싶기도 근데 오늘의 집은 2줄 나옴 최대 글자수가 있는듯</div>
                <div>
                    {/* 세일 퍼센트 */}
                    <span className="sale">30%</span>
                    {/* 세일 가격 */}
                    <span className="sale-price">34,900</span>
                </div>
                <div>
                    <i className="bi bi-star-fill star-icon"></i>
                    {/* 평점 */}
                    <span className="review-count">4.5</span>
                    {/* 리뷰 수 */}(<span className="review-count">5</span>)
                </div>
            </div>
        </a>
    );
}
