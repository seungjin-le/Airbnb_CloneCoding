import styled from 'styled-components'

const FilterBtn = () => {
  return (
    <FilterBtnBox>
      <IconBox>
        <svg viewBox="0 0 16 16" width='16px' height='16px'><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
        필터
      </IconBox>
    </FilterBtnBox>
  );
}
const FilterBtnBox = styled.div`
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  position: relative;
  padding: 10px 16px;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid rgba(34, 34, 34, .3);
  color: rgb(34, 34, 34);
  display: inline-block;
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
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export default FilterBtn;
