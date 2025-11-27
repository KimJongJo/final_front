import "../css/StoreInfo.css";
import Product from "./Product";

export default function StoreInfo() {
    const store = {
        storeName: "자재업체이름",
        storeIntro:
            "더플라워마켓은 2008년 공간을 더 아름답게 하기 위해 시작한 크리스마스&조화인테리어 전문브랜드입니다. 오랜 기간동안 고객님과 여러 사이트에서 검증받은 베스트판매자로, 4년연속 오늘의집 크리스마스 시즌매출 1등을 지켜오고 있습니다. 더플라워마켓만의 디자인과 좋은 퀄리티의 상품을 만나보세요.",
        storeTel: "02-123-1234",
        storeAddress: "서울 금천구 가산디지털 1로 70",
        storeImg: "/images/이미지테스트.png",
    };

    const bestProduct = [
        {
            productName: "업체명",
            productIntro: "상품명 2줄까지 노출해야 하나 싶기도 근데 오늘의 집은 2줄 나옴 최대 글자수가 있는듯",
            sale: "30%",
            salePrice: 34900,
            reviewScore: 4.5,
            reviewCount: 5,
        },
        {
            productName: "업체명",
            productIntro: "상품명 2줄까지 노출해야 하나 싶기도 근데 오늘의 집은 2줄 나옴 최대 글자수가 있는듯",
            sale: "30%",
            salePrice: 34900,
            reviewScore: 4.5,
            reviewCount: 5,
        },
        {
            productName: "업체명",
            productIntro: "상품명 2줄까지 노출해야 하나 싶기도 근데 오늘의 집은 2줄 나옴 최대 글자수가 있는듯",
            sale: "30%",
            salePrice: 34900,
            reviewScore: 4.5,
            reviewCount: 5,
        },
        {
            productName: "업체명",
            productIntro: "상품명 2줄까지 노출해야 하나 싶기도 근데 오늘의 집은 2줄 나옴 최대 글자수가 있는듯",
            sale: "30%",
            salePrice: 34900,
            reviewScore: 4.5,
            reviewCount: 5,
        },
    ];

    return (
        <div className="body-div">
            <div className="StoreInfo-main-div">
                {/* 자제 업체 정보 */}
                <div className="store-info-top-div">
                    {/* 업체 정보 */}
                    <div className="store-info-top-left">
                        {/* 정보 위쪽 */}
                        <div>
                            <div className="store-info-name-report">
                                {/* 업체명 */}
                                <span className="font-24 semibold">{store.storeName}</span>
                                <button className="store-report-button">
                                    <i className="bi bi-exclamation-triangle font-20"></i>
                                </button>
                            </div>
                            <div className="font-16">{store.storeIntro}</div>
                        </div>

                        {/* 정보 아래쪽 */}
                        <div>
                            <div className="store-info-under-div">
                                <i className="bi bi-telephone font-20"></i>
                                <span className="font-15 margin-left-10">{store.storeTel}</span>
                            </div>
                            <div className="store-info-under-div">
                                <i className="bi bi-house-door font-20"></i>
                                <span className="font-15 margin-left-10">{store.storeAddress}</span>
                            </div>
                        </div>
                    </div>
                    {/* 업체 이미지 */}
                    <div>
                        <img className="store-info-img" src={store.storeImg} />
                    </div>
                </div>

                {/* 베스트 상품 */}
                <div className="store-best-product">
                    {bestProduct.map((product) => (
                        <Product product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
