import styled from 'styled-components'
import {PaddingBox} from '../styled'
import {MdKeyboardArrowDown} from 'react-icons/md'
const Filter = () => {
  return (
    <FilterBox>
      <HeaderBox>
        <ThemeFilterBox>
          <FilterItemBox>
            <ThemeFilter>초소형 주택</ThemeFilter>
          </FilterItemBox>
          <FilterItemBox><ThemeFilter>농장</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>해변 근처</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>통나무집</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>멋진 수영장</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>캠핑카</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>트리하우스</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>개성 넘치는 숙소</ThemeFilter></FilterItemBox>
          <FilterItemBox><ThemeFilter>유르트</ThemeFilter></FilterItemBox>
        </ThemeFilterBox>
        <DropdownFilterBox>
          <ItemBox><DropdownFilter>언제든<MdKeyboardArrowDown/></DropdownFilter></ItemBox>
          <ItemBox><DropdownFilter>인원<MdKeyboardArrowDown/></DropdownFilter></ItemBox>
          <ItemBox>
            <DropdownFilter>
              <svg viewBox="0 0 16 16" width='16px' height='16px'><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
              필터
            </DropdownFilter>
          </ItemBox>
        </DropdownFilterBox>
      </HeaderBox>
    </FilterBox>
  )
}

const FilterBox = styled.div`
  width: 100%;
  height: 80px;
`
const HeaderBox = styled(PaddingBox)`
  padding-top: 14px;
  padding-bottom: 14px;
  max-width: 1760px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ThemeFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
`
const FilterItemBox = styled.div`
  box-sizing: border-box;
  border-bottom: 2px solid #fff;
  &:hover{
    border-bottom: 2px solid #333;
  }
`
const ThemeFilter = styled.div`
  cursor: pointer;
  text-align: center;
  border: none;
  outline: none;
  margin: 6px 6px 6px 0px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  background: transparent;
  color: rgb(113, 113, 113);
  border-radius: 8px;
  padding: 10px;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
`
const DropdownFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`
const ItemBox = styled.div`
  padding: 8px 4px;
  box-sizing: border-box;
`
const DropdownFilter = styled.div`
  cursor: pointer;
  text-align: center;
  
  border-radius: 30px;
  position: relative;
  padding: 10px 16px;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  border: 1px solid rgba(34, 34, 34, .3);
  color: rgb(34, 34, 34);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  & svg{
    transition: .3s;
    font-size: 16px;
    margin: 0 2px;
  }
  &:hover {
    background-color: rgb(247, 247, 247);
    border: 1px solid rgb(34, 34, 34);
  }
`

export default Filter;
