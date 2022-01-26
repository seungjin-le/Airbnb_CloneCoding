import styled from 'styled-components';
import KakaoMap from '../../../../components/common/atoms/kakaoMap'
import {useState} from 'react'

const HostPosition = () => {
  let pageUrl = window.location.href.split('http://localhost:3000/roomDetails/').join().substr(1);
  let url = pageUrl.split('/')
  const [latitude, setLatitude] = useState(url[0].split('=')[1]);
  const [longitude, setLongitude] = useState(url[1].split('=')[1]);
  let positions ={
    latitude:latitude,
    longitude:longitude
  }
  return (
    <FlexBox>
      <HostTitle>호스팅 지역</HostTitle>
      <KakaoMapBox>
        <KakaoMap positions={positions}/>
      </KakaoMapBox>
      <HostTextBox>
        <div>Oncheon 1(il)-dong, Yuseong-gu, 대전(Daejeon), 한국</div>
        <div>- 도보로 5분 이내에, CGV, 스타벅스, 맥도날드, 마트, 관광정보센터, 피자헛, 아웃백, 시외버스터미널, 유성온천 족욕체험장 등이 있습니다.</div>
        <div>더보기 ></div>
      </HostTextBox>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  padding: 48px 0;
  border-bottom: 1px solid #ddd
`
const KakaoMapBox = styled.div`
  height: 480px;
`
const HostTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  padding-bottom: 24px;
`
const HostTextBox = styled.div`
  margin-top: 24px;
  & div{
    margin-bottom: 24px;
  }
`


export default HostPosition
