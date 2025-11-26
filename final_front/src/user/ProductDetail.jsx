import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/ProductDetail.css";
import { useState } from "react";

export default function ProductDetail() {
    const [bottomSelect, setBottomSelect] = useState(1);

    const navItems = [
        { id: 1, label: "상품정보" },
        { id: 2, label: "리뷰", count: 1001 },
        { id: 3, label: "문의", count: 90 },
        { id: 4, label: "배송/환불" },
    ];

    return (
        <div className="body-div">
            <div className="ProductDetail-main-div">
                {/* 상품 상세 상단 */}
                <div className="detail-top">
                    {/* 좌측 상품 이미지 */}
                    <div>
                        {/* 메인 이미지 */}
                        <div>
                            <img className="detail-main-img" src="/images/이미지테스트.png"></img>
                        </div>
                        {/* 이미지 리스트 */}
                        <div></div>
                    </div>

                    {/* 우측 구매 항목 */}
                    <div className="detail-top-right">
                        <div className="detail-product-info">
                            {/* 카테고리 */}
                            <span className="product-category">카테고리</span>

                            {/* 업체명 */}
                            <span className="product-store-name">자재판매업체</span>

                            <div className="detail-product-name-div">
                                {/* 상품 이름 */}
                                <div className="detail-product-name">발트 라운드 수납 선반 다용도 주방 거실장</div>
                                <i className="bi bi-heart product-like"></i>
                            </div>
                            <div className="detail-product-div-under">
                                <div className="detail-price-review-div">
                                    <div>
                                        <div className="detail-sale-div">
                                            {/* 세일 퍼센트 */}
                                            <span className="detail-sale-percent">5%</span>
                                            {/* 정가 */}
                                            <del className="detail-default-price">10,000원</del>
                                        </div>
                                        <div>
                                            {/* 판매 가격 */}
                                            <span className="detail-sale-price">10,000</span>
                                            <span className="won">원</span>
                                        </div>
                                    </div>
                                    <div className="detail-review">
                                        <div className="detail-star-list">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        {/* 리뷰 수 */}
                                        <span className="detail-review-count">1,001 개 리뷰</span>
                                    </div>
                                </div>
                                <hr className="hr" />
                                <div className="detail-select-option">
                                    <span className="detail-option-span">구매 옵션</span>
                                    <div className="detail-select-div">
                                        <select className="detail-select">
                                            <option value="">규격</option>
                                        </select>
                                    </div>
                                    <div className="detail-select-div">
                                        <select className="detail-select">
                                            <option value="">색상</option>
                                        </select>
                                    </div>
                                    <div className="detail-button-div">
                                        <button type="button" className="detail-append-buy">
                                            구매 추가
                                        </button>
                                    </div>

                                    {/* 추가될 div 박스 만들기 */}

                                    <div className="detail-append-box">
                                        <div className="detail-append-box-top detail-box-son">
                                            <span className="detail-size">120x120x11700mm, 화이트</span>
                                            <i className="bi bi-x-lg detail-x-button"></i>
                                        </div>
                                        <div className="detail-append-box-bottom detail-box-son">
                                            {/* 수량 증감 버튼 */}
                                            <div className="detail-append-button">
                                                <i className="bi bi-dash-lg append-button-son"></i>
                                                <span className="append-button-son">1</span>
                                                <i className="bi bi-plus-lg append-button-son"></i>
                                            </div>
                                            {/* 가격 */}
                                            <span className="detail-order-price">10,000원</span>
                                        </div>
                                    </div>

                                    {/* 여기까지 추가되는 div 박스 */}
                                </div>
                                <hr className="hr" />
                                <div>
                                    <div className="detail-order-price-div">
                                        <span className="detail-order-hard-span">주문 금액</span>
                                        {/* 주문 금액 */}
                                        <span className="detail-order-hard-price">20,000원</span>
                                    </div>
                                    <div className="hard-15">배송정책</div>
                                    <div className="hard-14">
                                        방법 : <span className="hard-14"> 택배배송</span>
                                    </div>
                                    <div className="hard-14">
                                        배송 단위 :<span className="hard-14"> 묶음 배송</span>
                                    </div>
                                    <div className="hard-14">결제 : 주문 시 결제</div>
                                    <div className="hard-14">안내 : 상품이 발송되면 송장번호를 마이페이지에서 확인하실 수 있습니다.</div>
                                </div>
                                <div className="detail-order-button-div">
                                    <button className="detail-order-button go-cart">장바구니</button>
                                    <button className="detail-order-button go-order">구매</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 상품 상세 아래 */}
                {/* 상품상세 하단 네비 */}
                <div className="detail-product-bottom-nav">
                    {navItems.map((item) => (
                        <button key={item.id} className={bottomSelect === item.id ? "bottom-nav-select-button" : "bottom-nav-button"} onClick={() => setBottomSelect(item.id)}>
                            {item.label}
                            {item.count && <span>{item.count.toLocaleString()}</span>}
                            {/* toLocaleString -> 3자리마다 자동으로 쉼표 */}
                        </button>
                    ))}
                </div>
                <div>
                    <div className="detail-product-bottom">
                        {/* 상품 상세 좌측 라인 */}
                        <div className="detail-bottom-left">
                            {/* 상품 정보 */}
                            <div>
                                <img className="test-img-test" src="/images/이미지테스트.png"></img>
                            </div>

                            {/* 리뷰 */}
                            <div>
                                <div>
                                    <span>리뷰</span>
                                    <span>16 </span>
                                </div>
                                <div>
                                    <span>닉네임</span>
                                </div>
                                <div>
                                    <div>
                                        <div className="detail-star-list">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <span>2025년 11월 09일 12시 12분</span>
                                    </div>
                                </div>
                                <img src="/images/이미지테스트.png" />
                                <div>
                                    상품에 대한 리뷰 작성 글 예시 입니다. <br />
                                    상품에 대한 리뷰
                                    <br />
                                    작성 글 예시 입니다.
                                    <br />
                                    상품에 대한 리뷰 작성 글 예시입니다.
                                </div>
                            </div>

                            {/* 문의 */}
                            <div>
                                <div>
                                    <div>
                                        <span>문의</span>
                                        {/* 문의 수 */}
                                        <span>16 </span>
                                    </div>
                                    {/* 문의 하기 버튼 */}
                                    <button>문의하기</button>
                                </div>
                                <div>
                                    {/* 문의 사용자 닉네임 */}
                                    <span>닉네임</span>
                                    {/* 문의 날짜 */}
                                    <span>2025년 11월 09일 12시 12분</span>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>Q</span>
                                            </td>
                                            <td>
                                                {/* 문의 내용 */}
                                                <span>언제쯤 출고될지 대강 알 수 있을까요?</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>A</span>
                                            </td>
                                            <td>
                                                {/* 자재업체 이름 */}
                                                <span>자재업체이름</span>
                                                {/* 답변 날짜 */}
                                                <span>2025년 11월 09일 12시 12분</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div>
                                                    안녕하세요 고객님 <br />
                                                    우선 이용에 불편드려서 죄송합니다. <br />
                                                    현재 출고는 완료되었으나, <br />
                                                    택배사 물량과다로 스캔 작업 지연되고 있습니다. <br />
                                                    금일 저녁~익일 새벽에 배송조회 가능 할 것 같습니다. <br />
                                                    시간 양해 부탁드립니다. <br />
                                                    불편드려서 죄송합니다.
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div></div>
                                <div></div>
                            </div>

                            {/* 배송/환불 */}
                            <div></div>
                        </div>

                        {/* 상품 상세 우측 라인 (주문 폼) */}
                        <div className="detail-bottom-right">
                            <div className="detail-select-option">
                                <div className="detail-select-div">
                                    <select className="detail-select2">
                                        <option value="">규격</option>
                                    </select>
                                </div>
                                <div className="detail-select-div">
                                    <select className="detail-select2">
                                        <option value="">색상</option>
                                    </select>
                                </div>
                                <div className="detail-button-div">
                                    <button type="button" className="detail-append-buy">
                                        구매 추가
                                    </button>
                                </div>

                                {/* 추가될 div 박스 만들기 */}

                                <div className="detail-append-box">
                                    <div className="detail-append-box-top detail-box-son2">
                                        <span className="detail-size">120x120x11700mm, 화이트</span>
                                        <i className="bi bi-x-lg detail-x-button"></i>
                                    </div>
                                    <div className="detail-append-box-bottom detail-box-son2">
                                        {/* 수량 증감 버튼 */}
                                        <div className="detail-append-button">
                                            <i className="bi bi-dash-lg append-button-son"></i>
                                            <span className="append-button-son">1</span>
                                            <i className="bi bi-plus-lg append-button-son"></i>
                                        </div>
                                        {/* 가격 */}
                                        <span className="detail-order-price">10,000원</span>
                                    </div>
                                </div>

                                {/* 여기까지 추가되는 div 박스 */}

                                <hr className="hr" />
                                <div>
                                    <div className="detail-order-price-div">
                                        <span className="detail-order-hard-span">주문 금액</span>
                                        <div>
                                            {/* 주문 금액 */}
                                            {/* 세일 퍼센트 */}
                                            <span className="detail-sale-percent">5%</span>
                                            {/* 정가 */}
                                            <del className="detail-default-price">10,000원</del>
                                            <span className="detail-order-hard-price2">20,000원</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-order-button-div">
                                    <button className="detail-bottom-order-heart">
                                        <i class="bi bi-heart "></i>
                                    </button>
                                    <button className="detail-order-button2 go-cart">장바구니</button>
                                    <button className="detail-order-button2 go-order">구매</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
