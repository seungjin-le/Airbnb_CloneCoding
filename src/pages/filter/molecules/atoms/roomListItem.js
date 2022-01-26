import styled from 'styled-components'
import {IoMdHeartEmpty} from 'react-icons/io'
import {RiStarSFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'


const RoomListItem = ({title ,positions}) => {
  //const moveDetailsPage = () => {
  //     setTimeout(() => {
  //       let DetailsPage ='/roomDetails/'+roomData.roomId
  //       window.location.href= `${DetailsPage}`
  //     },1000)
  //   }

  return (
    <ItemBox>
      <ImgBox>
        <Link to={`/roomDetails/Latitude=${positions[0].Latitude}/Longitude=${positions[0].Longitude}`}>
          <SuperHostBtn>슈퍼호스트</SuperHostBtn>
          <img src="https://a0.muscache.com/im/pictures/2ae45f5d-0c2e-4af9-af97-c4aa4d388e89.jpg?im_w=720" alt=""/>
        </Link>
      </ImgBox>
      <TextBox>
        <Link to={'/roomDetails'}>
            <div className='box'>
              <TitleBox>
                <Title>
                  <div>Oncheon 1(il)-dong, Yuseong-gu의 공동 주택 전체</div>
                  <div>{title}</div>
                </Title>
                <IconBox>
                  <IoMdHeartEmpty/>
                </IconBox>
              </TitleBox>
              <span className='line'/>
              <SubText>최대 인원 2명 · 침대 1개 · 욕실 1개</SubText>
              <SubText>주방 . 무료 주차 공간 . 무선 인터넷 . 난방</SubText>
            </div>
        </Link>
        <RatingsBox>
          <Link to={'/roomDetails'}>
          <RiStarSFill />
          <RatingsNum>4.90</RatingsNum>
          <RatingsText>(후기 121개)</RatingsText>
          </Link>
        </RatingsBox>
      </TextBox>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  & a {
    text-decoration: none;
  }
`
const ImgBox = styled.div`
  width: 300px;
  min-width: 300px;
  height: 200px;
  & img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: inline-block;
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
  padding-left: 15px;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  & .line{
    display: inline-block;
    width: 30px;
    border: 1px solid #ddd;
    margin: 10px 0;
  }
  & .box {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
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
    text-decoration: none;
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
const SubText = styled.div`
  font-size: 12px;
  color: #717171;
  &:last-child{
    margin-top: 10px;
  }
`
const RatingsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
  position: relative;
  left: -2px;
  & svg {
    color: orangered;
  }
`
const RatingsNum = styled.span`
`
const RatingsText = styled.span`
`
export default RoomListItem;
