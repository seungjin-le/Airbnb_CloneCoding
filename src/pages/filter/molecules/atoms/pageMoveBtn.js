import styled from 'styled-components'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'

const PageMoveBtn = () => {
  return(
    <MoveBox>
      <NumBtnBox>
        <MdArrowBackIosNew/>
        <NumBtn>1</NumBtn>
        <NumBtn>2</NumBtn>
        <NumBtn>3</NumBtn>
        <NumBtn>4</NumBtn>
        <NumBtn>5</NumBtn>
        <NumBtn>6</NumBtn>
        <NumBtn>7</NumBtn>
        <MdArrowForwardIos />
      </NumBtnBox>
      <PageText>총 300개 이상의 숙소 중 1~20번째</PageText>
      <PageSubText>전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다</PageSubText>
    </MoveBox>

  )
}
const MoveBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
`
const NumBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const NumBtn = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  padding: 0px;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  outline: none;
  color: rgb(34,34,34);
  transition: .3s;
  cursor: pointer;
  &:hover{
    background: rgb(34, 34, 34);
    color: rgb(255, 255, 255);
  }
`
const PageText = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(34, 34, 34);
  text-align: center;
  margin-top: 15px;
  width: 100%;
`
const PageSubText = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: rgb(113, 113, 113);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`



export default PageMoveBtn;
