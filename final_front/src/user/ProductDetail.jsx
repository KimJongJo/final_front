import "bootstrap-icons/font/bootstrap-icons.css";
import { Input } from "reactstrap";

export default function ProductDetail() {
    return (
        <div>
            <div>
                {/* 상품 상세 상단 */}
                <div>
                    {/* 좌측 상품 이미지 */}
                    <div>
                        {/* 메인 이미지 */}
                        <div>
                            <img src="/images/이미지테스트.png"></img>
                        </div>
                        {/* 이미지 리스트 */}
                        <div></div>
                    </div>

                    {/* 우측 구매 항목 */}
                    <div>
                        <div>
                            {/* 카테고리 */}
                            <span>카테고리</span>

                            {/* 업체명 */}
                            <span>자재판매업체</span>

                            <div>
                                {/* 상품 이름 */}
                                <div>발트 라운드 수납 선반 다용도 주방 거실장</div>
                                <i className="bi bi-heart"></i>
                            </div>
                            <div>
                                <div>
                                    {/* 세일 퍼센트 */}
                                    <span>5%</span>
                                    {/* 정가 */}
                                    <del>10,000원</del>
                                </div>
                                <div>
                                    {/* 판매 가격 */}
                                    <span>10,000</span>
                                    <span>원</span>
                                </div>
                                <div>
                                    <div>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    {/* 리뷰 수 */}
                                    <span>1,001 개 리뷰</span>
                                </div>
                                <hr />
                                <div>
                                    <span>구매 옵션</span>
                                    <select>
                                        <option value="">규격</option>
                                    </select>
                                    <select>
                                        <option value="">색상</option>
                                    </select>
                                    <button>구매 추가</button>

                                    {/* 추가될 div 박스 만들기 */}
                                    <div>
                                        <div>
                                            <span>규격</span>
                                            <i class="bi bi-x-lg"></i>
                                        </div>
                                        <div>
                                            {/* 수량 증감 버튼 */}
                                            <div>
                                                <i class="bi bi-dash-lg"></i>
                                                <span>1</span>
                                                <i class="bi bi-plus-lg"></i>
                                            </div>
                                            {/* 가격 */}
                                            <span>10,000원</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <span>주문 금액</span>
                                        {/* 주문 금액 */}
                                        <span>20,000원</span>
                                    </div>
                                    <div>배송정책</div>
                                    <div>
                                        방법: <span>택배배송</span>
                                    </div>
                                    <div>
                                        배송 단위:
                                        <span>묶음 배송</span>
                                    </div>
                                    <div>결제 : 주문 시 결제</div>
                                    <div>안내 : 상품이 발송되면 송장번호를 마이페이지에서 확인하실 수 있습니다.</div>
                                </div>
                                <div>
                                    <button>장바구니</button>
                                    <button>구매</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 상품 상세 아래 */}
            </div>
        </div>
    );
}
