import styled from 'styled-components';
import {useEffect} from 'react'
/*global kakao*/



const KakaoMap = () => {
  useEffect(()=>{
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    let map = new kakao.maps.Map(container, options);
  }, [])


  return <MapBox id="map"></MapBox> ;
}

const MapBox = styled.div`
  width: 100%;
  height: 840px;
`

export default KakaoMap;
