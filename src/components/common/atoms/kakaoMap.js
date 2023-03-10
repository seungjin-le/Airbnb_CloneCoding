import styled from 'styled-components';
import {useEffect} from 'react'
/*global kakao*/



const KakaoMap = ({positions}) => {
  useEffect(()=>{
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    let map = new kakao.maps.Map(container, options);
    console.log(positions)
    if(Array.isArray(positions)){
      positions.map((v,i) => {
        let markerPosition  = new kakao.maps.LatLng(v.Latitude, v.Longitude);
        let marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
        console.log('ttet')
      })
    }else if(typeof positions === 'object'){
      setTimeout(() => {
        console.log(positions.latitude, positions.longitude)
        let markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);
        let marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
      },1500)
    }
  }, [])


  return <MapBox id="map"/> ;
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
`

export default KakaoMap;
