import styled from 'styled-components'
import Benefit from './atoms/benefit'
import {AiOutlineHome,AiOutlineRight} from 'react-icons/ai'
import {MdCleaningServices} from 'react-icons/md'
import {IoCardOutline} from 'react-icons/io5'
import {GiPositionMarker} from 'react-icons/gi'
import {useState} from 'react'
import {GrClose} from 'react-icons/gr'

const Announcement = () => {
  const [modal, setModal] = useState(false);
  const modalClick = () => {
    setModal( modal => !modal)
    console.log(modal)
  }
  return (
    <FlexBox>
      <FlexLeft>
        <UserImgBox>
        <div>
          <Title>나은님이 호스팅 하는 공동 주택 전체</Title>
          <SubTitle>최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개</SubTitle>
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
          새롭게 오픈한 더 팰리스에 방문해주셔서 감사합니다. <br/>
          더 팰리스는 프리미엄 에어비엔비로 고품격 서비스를 추구하고 있으며, 방문하시는 모든 분들께 더없는 만족감을 드리기 위해 최선을 다하겠습니다.
          <br/><br/>
          1. Primium point
          - 신축 건물입니다...

          <ExplainDetails onClick={modalClick}>더 보기<AiOutlineRight/></ExplainDetails>
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
                        <span>새롭게 오픈한 더 팰리스에 방문해주셔서 감사합니다.
                          <br/>더 팰리스는 프리미엄 에어비엔비로 고품격 서비스를 추구하고 있으며, 방문하시는 모든 분들께 더없는 만족감을 드리기 위해 최선을 다하겠습니다.
                          <br/><br/>1. Primium point<br/> - 신축 건물입니다.<br/> - 넷플릭스, 유튜브 프리미엄을 50인치 텔레비전에서 볼수 있습니다.<br/> - 퀸 사이즈의 최고급 수입 침대에서  편안하게 잠들 수 있습니다.
                            <br/> - 암막 블라인드가 설치되어 늦은 시간까지 포근하게 쉴 수 있습니다.
                            <br/> - 매번 침구류를 교체하며, 청결을 위해 최선을 다하고 있습니다.
                            <br/> - 공기청정기가 있어 공기가 나빠도 쾌적하게 지낼 수 있습니다.
                            <br/> - 정수기가 설치되어 무겁게 물을 사오시지 않아도 됩니다.
                            <br/> - 네스프레소 커피머신, 믹스 커피, 드립 커피로 향긋한 아침을 누릴 수 있습니다.
                            <br/> - 두 종류의 시리얼과 신선한 우유를 조식으로 제공하고 있습니다.<br/> - 두툼하고 뽀송뽀송한 호텔 수건을 매일 2개/1인 씩 제공합니다.
                        </span>
                        <div style={{margin:'24px 0'}}>
                          <div><h3 style={{fontSize:'20px'}}>숙소</h3></div>
                          <span>1. 더 팰리스의 위치<br/> - 유성온천역 6분 출구에서 도보 3~4분 거리에 위치하고 있습니다.<br/> - 유성의 가장 핫플레이스인 봉리단길에서 3~4분 거리에 위치하고 있습니다.</span>
                        </div>
                        <div>
                          <div><h3>게스트 이용 가능 공간/시설</h3></div>
                          <span>더 팰리스는 다음의 편의시설을 포함하고 있습니다.<br /><br />1. 거실<br /> - 3인용 소파, 소파 테이블, 공기청정기, 대형 텔레비젼, 시스템 에어컨, 옷장
                            <br /><br />2. 침실<br /> - 퀸 사이즈의 최고급 수입 침대, 최신형 컴퓨터, 조명
                            <br /><br />3. 부엌<br /> - 냉장고, 세탁기, 세탁세제, 전자레인지, 정수기, 커피 머신, 드립 커피 세트,  식용류, 간장, 다양한 양념, 시리얼, 우유
                            <br /><br />4. 화장실<br /> - 치약, 칫솔, 샴푸, 린스, 바디클렌져, 샤워볼, 비누, 핸드 워시
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
      </FlexLeft>
      <FlexRight>as</FlexRight>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  padding: 48px 0 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
`
const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1.37;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  text-decoration: underline;
`
const ModalBackGround = styled.div`
  overflow: hidden;
  position: absolute;
  display: inline;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vw;
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
  position: absolute;
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
  width: 100%;
  height: 100%;
  flex: 1.01;
  background: pink;
  display: flex;
  justify-content: center;
`
export default Announcement;
