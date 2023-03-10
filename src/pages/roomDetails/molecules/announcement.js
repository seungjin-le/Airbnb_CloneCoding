import styled from 'styled-components'
import Benefit from './atoms/benefit'
import {AiOutlineHome,AiOutlineRight} from 'react-icons/ai'
import {MdCleaningServices} from 'react-icons/md'
import {IoCardOutline} from 'react-icons/io5'
import {GiPositionMarker} from 'react-icons/gi'
import {useEffect, useState} from 'react'
import {GrClose} from 'react-icons/gr'
import Amenities from './atoms/amenities'
import CheckIn from './atoms/checkIn'
import {BsFillStarFill} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import axios from 'axios'


const Announcement = ({data,id}) => {
  const [modal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [bodyLock, setBodyLock] = useState(false);
  const modalClick = () => {
    setBodyLock(!bodyLock)
    if(bodyLock){
      console.log(bodyLock)
      document.body.style.overflow='unset';
    }else{
      document.body.style.overflow='hidden';
      console.log(bodyLock)
    }


    setModal( modal => !modal)
  }
  const [loding, setLoding] = useState(false);
  const [announcement, setAnnouncement] = useState();

  //useEffect(() => {
  //     if (data) {
  //       axios.get(`https://dev.nada-risingcamp.shop/rooms/${id}/contents?token=${data}`)
  //         .then(res => setAnnouncement(res.data.result.roomInfo[0]))
  //         .catch((err) => console.log(err)).catch(err => console.log(err))
  //     }
  //   }, [data]);
  //setTimeout(() => {
  //     setLoding(true)
  //   }, 1500)


  return (
    <FlexBox>
      <FlexLeft>
        <UserImgBox>
          <div>
            <Title>나은님이 호스팅 하는 공동 주택 전체</Title>
            <SubTitle>최대 인원 4명 · 침실 2개 · 침대 1개 · 욕실 1개</SubTitle>
          </div>
          <UserImg><img src="https://a0.muscache.com/im/pictures/user/ac6ea835-287f-46f5-a573-55a14024ef08.jpg?im_w=240" alt=""/>
          </UserImg>
        </UserImgBox>
        <BenefitBox>
          <Benefit>
            <AiOutlineHome />
            <div className='mainText'>집 전체</div>
            <div className='subText'>아파트 전체를 단독으로 사용하시게 됩니다.</div>
          </Benefit>
          <Benefit>
            <MdCleaningServices />
            <div className='mainText'>청결 강화</div>
            <div className='subText'>에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.</div>
          </Benefit>
          <Benefit>
            <IoCardOutline />
            <div className='mainText'>셀프 체크인</div>
            <div className='subText'>키패드를 이용해 체크인하세요.</div>
          </Benefit>
          <Benefit>
            <GiPositionMarker />
            <div className='mainText'>훌륭한 숙소 위치</div>
            <div className='subText'>최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.</div>
          </Benefit>
        </BenefitBox>
        <ExplainBox>
            <span>건물</span>
          - 신축 건물입니다...
          <ExplainDetails onClick={modalClick}><span>더 보기<AiOutlineRight/></span></ExplainDetails>
          {modal ?
            <ModalBackGround onClick={modalClick}>
              <Modal>
                <div className='iconBox'>
                  <GrClose/>
                </div>
                <div className='textBox'>
                  <div className='modalTitle'>숙소 설명</div>
                  <div className='text'>
                    <div>
                      <div>
                        <div>
                           <span>
                              ㅁㄴㅇㅁㄴㅇ
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </ModalBackGround> :
            false
          }
        </ExplainBox>
        <Amenities />
        <CheckIn />
      </FlexLeft>
      <FlexRight>
        <RemoteControl >
          <RemoteControlTitle>요금을 확인하려면 날짜를</RemoteControlTitle>
          <RemoteControlTitle>입력하세요</RemoteControlTitle>
          <Score>
            <BsFillStarFill/>
            <span>4.9</span>
            <span>.</span>
            <span className='line'>후기 141개</span>
          </Score>
          <CheckBox>
            <div>
              <div className='checkIn'>
                <div className='subText'>체크인</div>
                <div className='mainText'>날짜 추가</div>
              </div>
              <div className='checkOut'>
                <div className='subText'>체크아웃</div>
                <div className='mainText'>날짜 추가</div>
              </div>
            </div>
            <div className='user'>
              <div className='subText'>인원</div>
              <div className='mainText'>게스트 1명 <IoIosArrowDown /></div>
            </div>
          </CheckBox>
          <RemoteControlBtn>예약 가능 여부 보기</RemoteControlBtn>
        </RemoteControl>
      </FlexRight>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  padding: 48px 0 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ddd;
  
`
const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`

const UserImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #ddd;
`
const UserImg = styled.div`
  & img{
    width: 56px;
    height: 56px;
    border-radius: 45px;
  }
`
const Title = styled.div`
  color: #222;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
`
const SubTitle = styled.div`
  margin-top: 7px;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
const BenefitBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  border-bottom: 1px solid #ddd;
`
const ExplainBox = styled.div`
  padding: 32px 0 48px;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid #ddd;
`
const ExplainDetails = styled.div`
  margin-top: 15px;
  text-decoration: underline;
  & span{
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`
const ModalBackGround = styled.div`
  
  position: fixed;
  display: inline;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  z-index: 3;
`
const Modal = styled.div`
  border-radius: 15px;
  display: inline-block;
  z-index: 4;
  max-width: 780px;
  width: 100%;
  height: 773px;
  overflow-y: scroll;
  position: fixed;
  transform: translate(-50%, -50%);
  background: #fff;
  top: 50%;
  left: 50%;
  padding: 0 20px;
  box-sizing: border-box;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{ display:none; }
  & .iconBox{
    width: 100%;
    height: 64px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  & .modalTitle{
    font-size: 26px;
    line-height: 30px;
    font-weight: 800;
    margin-bottom: 32px;
  }
  & .textBox {
    padding-top: 16px;
    padding-bottom: 32px;
  }
`




const FlexRight = styled.div`
  width: 30%;
  height: 1700px;
  display: block;
  justify-content: center;
`
const RemoteControl = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0 6px 16px;
  position: sticky;
  top: 150px;
`
const RemoteControlTitle = styled.div`
  font-size: 22px;
  line-height: 26px;
`
const Score = styled.div`
  margin-top: 10px;
  color: rgb(34, 34, 34);
  padding-left: 4px;
  font-weight: 600;
  font-size: 13px;
  & svg {
    margin-right: 5px;
    font-size: 12px;
    color: orangered;
  }
  & .line{
    padding-left: 4px;
    text-decoration: underline;
  }
`
const CheckBox = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  & > div {
    width: 100%;
    display: flex;
  }
  & .checkIn{
    border-right: 1px solid #ddd;
  }
  & .checkIn,
  & .checkOut {
    flex: 1;
    padding: 5px 36px 10px 12px;
  }
  & .user{
    border-top: 1px solid #ddd;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px 5px 10px 12px;
  }
  & .subText{
    font-size: 10px;
    line-height: 12px;
    color: rgb(34, 34, 34);
    font-weight: 600;
  }
  & .mainText{
    font-size: 15px;
    margin-top: 5px;
    color: #717171;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & svg{
      font-size: 25px;
    }
  }
`
const RemoteControlBtn = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 200px;
  background-size: 200% 200%;
  text-align: center;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  color: #fff;
  padding: 15px 25px;
  border-radius: 8px;
`

export default Announcement;
