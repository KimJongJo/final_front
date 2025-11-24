import { Input } from "reactstrap";

export default function ProductList() {
    return (
        <>
            {/* 검색바 */}
            <div>
                <Input placeholder="검색어를 입력해주세요" />
                <button>검색</button>
            </div>

            {/* 상품 카테고리 */}
            <div>
                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">주방</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">욕실</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">중문/도어</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">폴딩도어</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">벽지/장판/마루</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">타일</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">시트/필름</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">스위치/콘센트</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">커튼블라인드</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">페인트</span>
                </button>

                <button className="p-cate-btn">
                    <img className="p-cate-img" src="이미지테스트.png" />
                    <span className="p-cate-span">조명</span>
                </button>
            </div>

            {/* 추가 카테고리, 정렬 필터 */}
            <div>
                <div></div>
                <div></div>
            </div>

            {/* 상품 리스트 */}
        </>
    );
}
