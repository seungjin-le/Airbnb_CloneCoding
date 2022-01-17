import styled from 'styled-components'

const Benefit = (props) => {
  return(
    <IconBox>
      {props.children[0]}
      <BenefitTextBox>
        <div className='mainText'>{props.children[1]}</div>
        <div className='subText'>{props.children[2]}</div>
      </BenefitTextBox>
    </IconBox>
  )
}

const IconBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  & svg{
    font-size: 24px;
  }
  &:last-child{
    margin-bottom: 0px;
  }
`
const BenefitTextBox = styled.div`
  & div{
    margin-left: 8px;
    &.mainText{
      color: rgb(34, 34, 34);
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 4px;
    }
    &.subText {
      color: rgb(113, 113, 113);
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
`

export default Benefit;
