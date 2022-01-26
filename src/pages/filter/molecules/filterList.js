import styled from 'styled-components'
import FilterBtn from '../../../components/common/atoms/filterBtn'
import FilterChoiceBtn from '../../../components/common/atoms/filterChoiceBtn'
import {useEffect, useState} from 'react'

const FilterList = () => {
  const filterTextArray = [
    '취소 수수료 없음','무선 인터넷','주방','에어컨','세탁기','다리미','업무 전용 공간','무료 주차 공간','건조기','셀프 체크인','수영장','헬스장'
  ]
  return (
    <ListBox>
      <BtnBox>
        <FilterChoiceBtn icon={true}>요금</FilterChoiceBtn>
        <FilterChoiceBtn icon={true}>숙소 유형</FilterChoiceBtn>
        <span className='line' />
        <SelectBtnBox>
          {filterTextArray.map((v,i) => (
            <FilterChoiceBtn key={i} index={i}>{v}</FilterChoiceBtn>
          ))}
        </SelectBtnBox>
        <FilterBtn/>
      </BtnBox>
    </ListBox>
  );
}

const ListBox = styled.div`
  width: 100%;
  position: sticky;
  top: 80px;
  z-index: 2;
  background: #fff;
`
const BtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
  color: #222222;
  font-size: 16px;
  line-height: 20px;
  padding: 8px 20px 12px;
  height: 68px;
  box-sizing: border-box;
  & .line {
    height: 40%;
    margin: 0 10px;
    border: 1px solid #ddd;
  }
  
`
const SelectBtnBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  
`
const DropdownBtn = styled.div`
`
export default FilterList;
