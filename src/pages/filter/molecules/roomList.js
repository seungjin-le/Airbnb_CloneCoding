import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoomListItem from './atoms/roomListItem'

const RoomList = () => {
  return(
    <RoomListBox>
      <ListBox>
        <ExplainText>지도의 표시된 지역에 위치한 193개의 숙소</ExplainText>
        <ExplainText>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</ExplainText>
        <ExplainText>예약하기 전에 코로나19 관련 여행제한 사항을 확인하세요. <Link>자세히 알아보기</Link></ExplainText>
        <ItemBox>
          <RoomListItem />
        </ItemBox>
      </ListBox>
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
  width: 100%;
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
`


export default RoomList
