import { useState } from "react";
import "../../css/admin/AdminUserList.css";
import AdminSidebar from "./AdminNav";
import { Input, Table } from "reactstrap";

export default function InquiryReturn() {
    // 전문 서비스
    const [defaultMajor, setDefaultMajor] = useState(1);

    // 활동 상태
    const [defaultState, setDefaultState] = useState(1);
    // 속성명
    const [defaultColumn, setDefaultColumn] = useState(1);
    // 검색 키워드
    const [keyword, setKeyword] = useState("");

    const userState = [
        {
            stateCode: 1,
            label: "답변대기",
        },
        {
            stateCode: 2,
            label: "답변완료",
        },
    ];

    const expertMajor = [
        {
            majorCode: 1,
            label: "전체",
        },
        {
            majorCode: 2,
            label: "일반회원",
        },
        {
            majorCode: 3,
            label: "전문가",
        },
        {
            majorCode: 4,
            label: "판매업체",
        },
    ];

    const clearFilter = () => {
        setDefaultState(1);
        setDefaultColumn(1);
        setKeyword("");
    };

    // const testUser = [];

    const testUser = [
        {
            inquiryNo: 1,
            sender: "홍길동",
            userType: "일반회원",
            inquiryContent: "문의내용",
            writeDate: "수리",
            stateCode: 1,
        },
        {
            inquiryNo: 2,
            sender: "홍길동",
            userType: "일반회원",
            inquiryContent: "문의내용",
            writeDate: "수리",
            stateCode: 2,
        },
    ];

    return (
        <div className="admin-body-div">
            <AdminSidebar />
            {/* 회원 관리 */}
            <div className="admin-userList-div">
                <div className="admin-userList-top-div">
                    <span className="font-18 medium">1:1 문의</span>
                    <div className="admin-userList-top-div-right">
                        <div className="admin-rental-count-card">
                            <span className="font-13 medium">답변대기 / 답변완료</span>

                            {/* 총 회원수 + 이번달 가입자 수 */}
                            <span className="font-13 medium">
                                <span>15</span>건 / <span>30</span>건
                            </span>
                        </div>
                    </div>
                </div>

                <div className="admin-detail-back-div">
                    <button className="admin-detail-back-button">
                        <i className="bi bi-arrow-left font-18"></i>
                        <span className="font-14 medium">목록</span>
                    </button>
                </div>
                <div className="admin-detail-back-div">
                    <div className="admin-inquiryReturn-back-div">
                        <div>
                            <span className="font-16 medium">회원명</span> / <span className="font-16 medium">(회원구분)</span>
                        </div>
                        <div>
                            <span className="font-14 medium">등록일 : 2025-11-09</span>
                        </div>
                    </div>
                </div>
                <div className="admin-inquiryReturn-content-div"></div>

                <div style={{ marginLeft: "24px", marginTop: "10px", marginRight: "24px", marginBottom: "80px" }}>
                    <span className="font-18 mideum">답변</span>
                    <Input style={{ marginTop: "10px" }} className="admin-inquiryReturn-input-textarea" type="textarea" />
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                        <button style={{ borderRadius: "4px", border: "none", backgroundColor: "#303441", color: "#ffffff", width: "50px", height: "30px" }} className="font-14 semibold">
                            답변
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
