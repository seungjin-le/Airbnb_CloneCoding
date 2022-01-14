import styled from 'styled-components'
import {PaddingBox} from '../../../components/common/styled'
import {BiSearch} from 'react-icons/bi'
import {useState} from 'react'

const Search = ({move}) => {
  console.log(move)
  const [searchClick, setSearchClick] = useState(false);
  const searchIcon = () => {
    setSearchClick(search => !search);
  }
  return (
    <Box>
      <SearchPaddingBox>
        <SearchBox className={move ? 'true' : 'false'}>
          <BoxItemList>
            {
              move ? 'true' : false

            }
            <SearchItem className='position'>
              <ItemTitle className='positionTitle'>위치</ItemTitle>
              <PositionInput placeholder='어디로 여행가세요?' type='text'></PositionInput>
            </SearchItem>
            <ItemLine className='one'/>
            <SearchItem className='checkIn'>
              <ItemTitle>체크인</ItemTitle>
              <ItemText>날짜 입력</ItemText>
            </SearchItem>
            <ItemLine className='two'/>
            <SearchItem className='checkOut'>
              <ItemTitle>체크아웃</ItemTitle>
              <ItemText>날짜 입력</ItemText>
            </SearchItem>
            <ItemLine className='three'/>
            <SearchItem className='personnel'>
              <ItemTitle>인원</ItemTitle>
              <ItemText>게스트 추가</ItemText>
            </SearchItem>
            <SearchIconBox onClick={searchIcon} className={searchClick ? 'true' : 'false'}>
              <BiSearch />
              <div>
                검색
              </div>
            </SearchIconBox>
          </BoxItemList>
        </SearchBox>
      </SearchPaddingBox>
    </Box>
  );
}
const Box = styled.div`
  width: 100%;
`
const SearchPaddingBox = styled(PaddingBox)`
  width: 100%;
  position: relative;
`
const SearchBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 850px;
  width: 100%;
  height: 64px;
  background: #fff;
  border: 1px solid #DDDDDD;
  border-radius: 32px;
  color: #222;
  box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  transition: all .3s;
  &.true{
    width: 300px;
    position: fixed;
    top: 50px;
    height: 48px;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
    z-index: 2;
    & .true svg {
      
    }
    
    & .checkIn,
    & .checkOut,
    & .personnel,
    & .position,
    & .one,
    & .two,
    & .three
    {
      display: none;
    }
  }
`
const BoxItemList = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
`
const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 14px 24px;
  flex: 1;
  z-index: 1;
  border-radius: 32px;
  transition: .2s;
  &:hover {
    background: rgba(200,200,200,.3);
  }
  &:hover input{
    background-color:transparent;
  }
  &.checkIn,
  &.checkOut, 
  &.personnel
  {
    cursor: pointer;
  }
  &.position{
    flex: 1.3;
    & .positionTitle {
      cursor: pointer;  
    }
  }
`
const ItemTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding-bottom: 2px;
  width: 100%;
`
const ItemText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  font-weight: 400;
  overflow: hidden;
`
const PositionInput = styled.input`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  transition: .2s;
  &:focus{
    outline: none;
  }
`
const SearchIconBox = styled.div`
  z-index: 1;
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 15px;
  background: var(--header-brand-color, #FF385C);
  border-radius: 45px;
  align-items: center;
  transition: .3s;
  transition: all .3s;
  &.true {
   & div {
     display: inline-block;
   } 
  }
  & svg{
    font-size: 20px;
    color: #fff;
  }
  & div{
    transition: all .3s;
    display: none;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #fff;
    margin-left: 5px;
  }
`
const ItemLine = styled.span`
  width: 0;
  height: 55%;
  border-left: 1.5px solid rgba(200,200,200,.8);
`

export default Search;
