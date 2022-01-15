import styled from 'styled-components'
import {IoMdHeartEmpty} from 'react-icons/io'

const RoomListItem = () => {
  return (
    <ItemBox>
      <ImgBox>
        <SuperHostBtn>슈퍼호스트</SuperHostBtn>
        <img src="https://a0.muscache.com/im/pictures/2ae45f5d-0c2e-4af9-af97-c4aa4d388e89.jpg?im_w=720" alt=""/>
      </ImgBox>
      <TextBox>
        <TitleBox>
          <Title>
            <div>Oncheon 1(il)-dong, Yuseong-gu의 공동 주택 전체</div>
            <div>[유성온천역 3분] 더 팰리스1 - 프리미엄 에어비엔비 the Palace primium</div>
          </Title>
          <IconBox>
            <IoMdHeartEmpty/>
          </IconBox>
        </TitleBox>
      </TextBox>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  padding-top: 25px;
  padding-bottom: 12px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
`
const ImgBox = styled.div`
  width: 300px;
  min-width: 300px;
  height: 200px;
  & img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`
const SuperHostBtn = styled.div`
  position: absolute;
  z-index: 2;
  top: 35px;
  left: 10px;
  font-size: 12px;
  padding: 3px 5px;
  background: #f7f7f7;
  border-radius: 3px;
  font-weight: 600;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  width: 100%;
  box-sizing: border-box;
  
`
const TitleBox = styled.div`
  text-overflow : ellipsis;
  display: flex;
  flex-direction: row;
  & svg{
    font-size: 28px;
    padding: 6px;
    border-radius: 45px;
    position: relative;
    top:-10px;
    cursor: pointer;
    &:hover{
      background-color: rgb(245, 245, 245);
    }
  }
`
const Title = styled.div`
  width: 100%;
  & div{
    max-width: 400px;
    width: 100%;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    
  }
  & div:first-child{
    font-size: 14px;
    color: #717171;
  }
  & div:last-child{
    margin-top: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #222;
  }
`
const IconBox = styled.div`
  
`
export default RoomListItem;
