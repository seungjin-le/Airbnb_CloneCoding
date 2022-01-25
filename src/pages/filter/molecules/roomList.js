import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoomListItem from './atoms/roomListItem'
import KakaoMap from '../../../components/common/atoms/kakaoMap'
import {useEffect, useState} from 'react'
import Pagination from './atoms/pagination'

const RoomList = ({searchUrl}) => {
  const [roomData, setRoomData] = useState();
  let token;
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  //useEffect(() => {
  //     token = JSON.parse(localStorage.getItem("users"));
  //   }, []);
  //   useEffect(() => {
  //     if(token){
  //       axios.get(`https://dev.nada-risingcamp.shop/rooms?location=${searchUrl}&token=${token}`)
  //         .then(res => setRoomData(res.data.result))
  //         .catch(err => console.log(err))
  //     }
  //   },[token])
  //   useEffect(() => {
  //     console.log(roomData)
  //   },[roomData])


  return(
    <RoomListBox>
      <ListBox>
        <ExplainText>지도의 표시된 지역에 위치한 193개의 숙소</ExplainText>
        <ExplainText>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</ExplainText>
        <ExplainText>예약하기 전에 코로나19 관련 여행제한 사항을 확인하세요. <Link>자세히 알아보기</Link></ExplainText>
        <ItemBox>
          <ListPagNumBox>
            {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
              <RoomListItem title={title}/>
            ))}
            <footer>
              <Pagination
                total={posts.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </footer>
            <PageNumBtnBox>
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
  height: 100%;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: row;
`
const ListBox = styled.div`
  max-width: 840px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1127px){
    & {
      max-width: 100%;
    }
  }
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
  height: 100%;
`
const MapBox = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1127px){
    & {
      display: none;
    }
  }
`
const ListPagNumBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const PageNumBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default RoomList
