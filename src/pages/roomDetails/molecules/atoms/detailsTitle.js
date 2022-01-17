import styled from 'styled-components'
import {RiStarSFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import {IoIosMedal,IoIosHeartEmpty} from 'react-icons/io'
import {MdOutlineIosShare} from 'react-icons/md'


const DetailsTitle = () => {
  return (
    <FlexBox>
      <Title>[유성온천역 3분] 더 팰리스1 - 프리미엄 에어비엔비 the Palace primium</Title>
      <SubTextBox>
        <SubTextLeft>
          <RiStarSFill className='scoreSvg'/>
          <span className='score'>4.90 · <Link to={'#'}>후기 114개</Link> ·</span>
          <IoIosMedal className={'hostSvg'}/>
          <span className='host'>슈퍼호스트 ·</span>
          <span className='position'>Oncheon 1(il)-dong, Yuseong-gu, 대전(Daejeon), 한국</span>
        </SubTextLeft>
        <SubTextRight>
          <MdOutlineIosShare className='shareSvg'/>
          <span className='share'>공유하기</span>
          <IoIosHeartEmpty className='HeartSvg'/>
          <span className='heart'>저장</span>
        </SubTextRight>
      </SubTextBox>
    </FlexBox>
  )
}
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
const Title = styled.div`
  color: #222;
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  margin: 0px;
  padding: 0px;
  display: inline;
`
const SubTextBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`
const SubTextLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
  & .position{
    margin-left: 5px;
    line-height: 20px;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: rgb(113, 113, 113);
    font-weight: 600;
    text-decoration: underline;
  }
  & .host{
    line-height: 20px;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    color: rgb(113, 113, 113);
  }
  & .hostSvg{
    margin: 0 7px;
    color: orangered;
  }
  & .score{
    margin-left: 3px;
    line-height: 20px;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(34, 34, 34);
    font-size: 14px;
    position: relative;
    font-weight: 600;
    & a{
      text-decoration: underline;
    }
  }
  & .scoreSvg{
    color: orangered;
  }
`
const SubTextRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: end;
  & svg{
    margin: 0 7px;
  }
  & span{
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-decoration: underline;
  }
`

export default DetailsTitle;
