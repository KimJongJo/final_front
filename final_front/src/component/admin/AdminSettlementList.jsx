import { useState } from "react";
import "../../css/admin/AdminUserList.css";
import AdminSidebar from "./AdminNav";
import { Input, Table, Modal, ModalBody } from "reactstrap";

export default function AdminSettlementList() {
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
      label: "정산 대기",
    },
    {
      stateCode: 2,
      label: "정산 완료",
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
      rentalNo: 1,
      productName: "홍길동",
      provider: 10000000, // 빌려준 사람
      renter: 10000000, // 빌린 사람
      rentalDate: "정산완료",
    },
    {
      rentalNo: 1,
      productName: "홍길동",
      provider: 10000000, // 빌려준 사람
      renter: 10000000, // 빌린 사람
      rentalDate: "정산완료",
    },
    {
      rentalNo: 1,
      productName: "홍길동",
      provider: 10000000, // 빌려준 사람
      renter: 10000000, // 빌린 사람
      rentalDate: "정산완료",
    },
  ];

  const [useCate, setCate] = useState(1);

  const cateNo = [
    {
      cate: 1,
      label: "전문가",
    },
    {
      cate: 2,
      label: "판매업체",
    },
  ];

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div className="admin-body-div">
      <AdminSidebar />
      {/* 회원 관리 */}
      <div className="admin-userList-div">
        <div className="admin-userList-top-div">
          <span className="font-18 medium">정산 관리</span>
        </div>

        {/* 중 헤더 */}
        <div className="admin-middle-header">
          {cateNo.map((cate) => (
            <button
              onClick={() => setCate(cate.cate)}
              className={
                cate.cate === useCate
                  ? "admin-settlement-select"
                  : "admin-settlement-default"
              }
              key={cate.cate}
            >
              {cate.label}
            </button>
          ))}
        </div>

        {/* 검색 필터 라인 */}
        <div className="admin-filter-line-div-settlement">
          <div className="admin-filter-line-div-under">
            {/* 활동 상태 */}
            <div className="admin-userList-radio-div">
              {userState.map((state) => (
                <div key={state.stateCode} className="admin-radio-div">
                  <input
                    className="admin-radio"
                    onChange={() => setDefaultState(state.stateCode)}
                    checked={defaultState === state.stateCode}
                    type="radio"
                    name="userState"
                    id={state.stateCode}
                  />
                  <label
                    style={{
                      marginLeft: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    htmlFor={state.stateCode}
                  >
                    <span className="font-14">{state.label}</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="admin-filter-line-div-top">
              <Input className="admin-filter-input-date font-13" type="date" />
              <span className="font-22 medium">~</span>
              <Input className="admin-filter-input-date font-13" type="date" />
            </div>

            {/* 우측 검색 필터 */}
            <div className="admin-userList-filter-right">
              {/* 필터 select */}
              <select
                className="admin-userList-filter-select font-13"
                name=""
                id=""
              >
                <option value="">전체</option>
                <option value="">공구명</option>
                <option value="">빌려준 사람</option>
                <option value="">빌린 사람</option>
              </select>

              {/* 검색 input */}
              <div className="admin-userList-search-div">
                <i className="bi bi-search"></i>
                <Input
                  onChange={(e) => setKeyword(e.target.value)}
                  className="font-12 admin-userList-search-input"
                  placeholder="검색어를 입력해주세요"
                />
              </div>

              {/* 검색 버튼 */}
              <button className="admin-userList-search-button font-13 medium">
                검색
              </button>

              {/* 초기화 버튼 */}
              <button
                onClick={clearFilter}
                className="admin-userList-clean-button font-13 medium"
              >
                초기화
              </button>
            </div>
          </div>
        </div>

        <div>
          {testUser.length === 0 ? (
            <div
              style={{
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #eaecf0",
              }}
            >
              <span className="font-12 medium">회원 정보를 검색해주세요.</span>
            </div>
          ) : (
            <div className="admin-userList-table-div">
              <Table hover className="admin-userList-table">
                <thead>
                  <tr>
                    <td>
                      <span className="font-14 medium">정산일</span>
                    </td>
                    <td>
                      <span className="font-14 medium">대상</span>
                    </td>
                    <td>
                      <span className="font-14 medium">총 금액</span>
                    </td>
                    <td>
                      <span className="font-14 medium">정산 금액</span>
                    </td>
                    <td>
                      <span className="font-14 medium">상태</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {testUser.map((rental) => (
                    <tr key={rental.rentalNo}>
                      <td>
                        <span className="font-14">{rental.rentalNo}</span>
                      </td>
                      <td>
                        <span className="font-14">{rental.productName}</span>
                      </td>
                      <td>
                        <span className="font-14">
                          {rental.provider.toLocaleString()}원
                        </span>
                      </td>

                      <td>
                        <span className="font-14">
                          {rental.renter.toLocaleString()}원
                        </span>
                      </td>
                      <td>
                        <span className="font-14">{rental.rentalDate}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* 페이징 div */}
              <div className="admin-userList-paging-bar">
                {/* 이전 버튼 */}
                <button className="admin-userList-nextbutton">
                  <i className="bi bi-chevron-left"></i>
                  <span>이전</span>
                </button>

                {/* 페이지 가져와서 map 돌리기 */}
                <div className="admin-userList-paging-button-div">
                  <button className="admin-userList-paging-curpage-button">
                    1
                  </button>
                  <button className="admin-userList-paging-button">2</button>
                  <button className="admin-userList-paging-button">3</button>
                </div>

                <button className="admin-userList-nextbutton">
                  <span>다음</span>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
