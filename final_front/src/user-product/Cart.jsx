import "../css/user-product/Cart.css";

export default function Cart() {
    return (
        <div className="body-div">
            <div className="Cart-main-div">
                {/* 왼쪽 장바구니 목록 */}
                <div className="cart-product-info-list">
                    <div>
                        <span>장바구니</span>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" id="cartSelectAll" />
                            <label htmlFor="cartSelectAll">모두선택</label>
                        </div>
                        <button>선택삭제</button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <span>상품정보</span>
                                </td>
                                <td>
                                    <span>수량</span>
                                </td>
                                <td>
                                    <span>상품금액</span>
                                </td>
                                <td>
                                    <span>배송단위</span>
                                </td>
                                <td>
                                    <span>배송비</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 결제 box */}
                <div className="cart-pay-box">
                    <div className="cart-pay-box-top">
                        {/* 총 상품 금액 */}
                        <div className="cart-pay-box-top-info">
                            <span className="font-15">총 상품 금액</span>
                            <span className="font-14">456,000원</span>
                        </div>
                        {/* 총 배송비 */}
                        <div className="cart-pay-box-top-info cart-pay-box-top-second-div">
                            <span className="font-15">총 배송비</span>
                            <span className="font-14">6,000원</span>
                        </div>
                        {/* 결제 금액 */}
                        <div className="cart-pay-box-top-info cart-pay-box-top-last-div">
                            <span className="font-16 semibold">결제 금액</span>
                            <span className="font-22 semibold total-price-info">
                                456,000<span className="font-16">원</span>
                            </span>
                        </div>
                    </div>
                    {/* 구매 버튼 */}
                    {/* 수량 들어가야함 */}
                    <button className="cart-pay-box-bottom-button font-16 semibold">1개 상품 구매하기</button>
                </div>
            </div>
        </div>
    );
}
