import styled from 'styled-components'

const FilterChoiceBtn = ({children,index}) => {
  return (
    <ItemBox className={`num${index+1}`}>
      <DropdownFilter >
        {children}
      </DropdownFilter>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  padding: 8px 4px;
  box-sizing: border-box;
  display: inline-block;
  @media screen and (max-width: 1335px){
    &.num12{
      display: none;
    }
  }
  @media screen and (max-width: 1262px){
    &.num11{
      display: none;
    }
  }
  @media screen and (max-width: 1187px){
    &.num10{
      display: none;
    }
  }
  @media screen and (max-width: 1090px){
    &.num9{
      display: none;
    }
  }
  @media screen and (max-width: 1017px){
    &.num8{
      display: none;
    }
  }
  @media screen and (max-width: 906px){
    &.num7{
      display: none;
    }
  }
  @media screen and (max-width: 795px){
    &.num6{
      display: none;
    }
  }
  @media screen and (max-width: 722px){
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
`

export default FilterChoiceBtn;
