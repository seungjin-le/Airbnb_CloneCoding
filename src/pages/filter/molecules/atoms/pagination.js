import styled from "styled-components";
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <MdArrowBackIosNew />
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <MdArrowForwardIos />
        </Button>
      </Nav>
      <SubTextBox>총 {total}개 숙소 중 {limit*page-limit+1}~{limit*page}번째 숙소</SubTextBox>
      <Text>전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다.</Text>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding-top: 40px;
  padding-bottom: 20px;
  border-top: 1px solid #ddd;
`;

const Button = styled.button`
  border: none;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  outline: none;
  color: rgb(34,34,34);
  transition: .3s;
  cursor: pointer;
  background: none;
  font-size: 14px;
  &:hover {
    background: #ddd;
  }

  &[disabled] {
    color: #ddd;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: rgb(34, 34, 34);
    color: rgb(255, 255, 255);
    cursor: revert;
    
  }
`;
const SubTextBox = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(34, 34, 34);
  text-align: center;
  padding-bottom: 40px;
`
const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgb(113, 113, 113);
  text-align: center;
  padding-bottom: 30px;
`
export default Pagination;
