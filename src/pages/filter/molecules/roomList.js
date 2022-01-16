import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoomListItem from './atoms/roomListItem'
import KakaoMap from '../../../components/common/atoms/kakaoMap'
import PageMoveBtn from './atoms/pageMoveBtn'

const RoomList = () => {
  const data = [1,2,3,4,5,6,7,8,9]
  return(
    <RoomListBox>
      <ListBox>
        <ExplainText>지도의 표시된 지역에 위치한 193개의 숙소</ExplainText>
        <ExplainText>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</ExplainText>
        <ExplainText>예약하기 전에 코로나19 관련 여행제한 사항을 확인하세요. <Link>자세히 알아보기</Link></ExplainText>
        <ItemBox>
          <ListPagNumBox>
            {data.map((v,i) => (
              <RoomListItem key={i}/>
            ))}
            <PageNumBtnBox>
              <PageMoveBtn />

            </PageNumBtnBox>
          </ListPagNumBox>
        </ItemBox>
      </ListBox>
      <MapBox>
        <KakaoMap />
      </MapBox>
    </RoomListBox>
  )
}

const RoomListBox = styled.div`
  width: 100%;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: row;
`
const ListBox = styled.div`
  max-width: 840px;
  max-height: 836px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const ExplainText = styled.div`
  width: 100%;
  padding: 15px 24px 15px ;
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  &:nth-last-child(3){
    margin-top: 10px;
  }
  &:nth-last-child(2){
    color: #717171;
  }
  & a{
    text-decoration: underline;
  }
`
const ItemBox = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
const MapBox = styled.div`
  width: 100%;
  height: 100%;
`
const ListPagNumBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const PageNumBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default RoomList
