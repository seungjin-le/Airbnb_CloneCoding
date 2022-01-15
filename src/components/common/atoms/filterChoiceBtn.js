import styled from 'styled-components'
import {MdKeyboardArrowDown} from 'react-icons/md'

const FilterChoiceBtn = ({children,index,icon}) => {

  return (
    <ItemBox className={`num${index+1}`}>
      <DropdownFilter >
        {children}
        {icon ? <MdKeyboardArrowDown/> : false}
      </DropdownFilter>
    </ItemBox>
  );
}
const ItemBox = styled.div`
  padding: 8px 4px;
  box-sizing: border-box;
  display: inline-block;
  @media screen and (max-width: 1385px){
    &.num12{
      display: none;
    }
  }
  @media screen and (max-width: 1312px){
    &.num11{
      display: none;
    }
  }
  @media screen and (max-width: 1237px){
    &.num10{
      display: none;
    }
  }
  @media screen and (max-width: 1140px){
    &.num9{
      display: none;
    }
  }
  @media screen and (max-width: 1067px){
    &.num8{
      display: none;
    }
  }
  @media screen and (max-width: 956px){
    &.num7{
      display: none;
    }
  }
  @media screen and (max-width: 845px){
    &.num6{
      display: none;
    }
  }
  @media screen and (max-width: 772px){
    &.num5{
      display: none;
    }
  }
  
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
  &:hover {
    background-color: rgb(247, 247, 247);
    border: 1px solid rgb(34, 34, 34);
  }
  & svg{
    font-size: 20px;
    margin-left: 5px;
  }
`

export default FilterChoiceBtn;
