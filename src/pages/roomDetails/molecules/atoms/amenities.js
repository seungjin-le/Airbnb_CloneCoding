import styled from 'styled-components'
import {MdKitchen} from 'react-icons/md'
import {AiOutlineWifi} from 'react-icons/ai'
import {GrCar,GrElevator} from 'react-icons/gr'
import {RiTvLine} from 'react-icons/ri'
import {BsSnow,BsBag,BsHeadphones} from 'react-icons/bs'
import {GiWashingMachine,GiCampCookingPot} from 'react-icons/gi'


const Amenities = () => {
  return (
    <FlexBox>
      <TitleBox>
        숙소 편의시설
      </TitleBox>
      <AmenitiesIconBox>
        <AmenitiesIconItem>
          <GiCampCookingPot />
          <span>주방</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <AiOutlineWifi />
          <span>무선 인터넷</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <GrCar />
          <span>건물 내 무료 주차</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <RiTvLine />
          <span>TV + 일반 케이블 TV</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <GrElevator />
          <span>엘리베이터</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <GiWashingMachine />
          <span>세탁기</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <BsSnow />
          <span>세에어컨</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <BsBag />
          <span>여행 가방 보관 가능</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <BsHeadphones />
          <span>헤어드라이어</span>
        </AmenitiesIconItem>
        <AmenitiesIconItem>
          <MdKitchen />
          <span>냉장고</span>
        </AmenitiesIconItem>
      </AmenitiesIconBox>
      <AllViewBtnBpx>
        <AllViewBtn>
          편의시설 32개 모두 보기
        </AllViewBtn>
      </AllViewBtnBpx>
    </FlexBox>
  )
}
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 0;
  border-bottom: 1px solid #ddd;
`
const TitleBox = styled.div`
  text-align: start;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  padding-bottom: 20px;
`
const AmenitiesIconBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
`
const AmenitiesIconItem = styled.div`
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-bottom: 15px;
  & svg{
    font-size: 30px;
  }
  & span{
    color: #222222;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 10px;
  }
`
const AllViewBtnBpx = styled.div`
  margin-top: 40px;
`
const AllViewBtn = styled.span`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  padding: 13px 23px;
`
export default Amenities;
