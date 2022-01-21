import styled from 'styled-components'
import DetailsTitle from './atoms/detailsTitle'
import {PaddingBox} from '../../../components/common/styled'
import DetailsImg from './atoms/detailsImg'
import Announcement from './announcement'
import HostPosition from './atoms/hostPosition'
import ReView from './reView'
import axios from 'axios'
import {useEffect, useState} from 'react'

const Details = () => {
  const [data, setData] = useState();
  const [userToken, setUserToken] = useState();
  let roomImg;

  let pageUrl = window.location.href.split('http://localhost:3000/roomDetails/');
  pageUrl.shift()
  let url = decodeURI(pageUrl);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
  }, [])
  useEffect(() => {
    if (data) {
    axios.get(`https://dev.nada-risingcamp.shop/rooms/${url}/contents?token=${data}`)
      .then(res => setUserToken(res.data.result))
      .catch((err) => console.log(err)).catch(err => console.log(err))
         }
  }, [data]);
  useEffect(() => {
    if(userToken){
      roomImg =userToken.roomImages;
      console.log(roomImg)
    }
    console.log(userToken)
  }, [userToken])



  return (
    <DetailsPaddingBox>
      <DetailsTitle data={data} id={url}/>
      <DetailsImg data={data} id={url}/>
      <Announcement data={data} id={url}/>
      <ReView id={url}/>
      <HostPosition />
    </DetailsPaddingBox>
  )
}
const DetailsPaddingBox = styled(PaddingBox)`
  width: 100%;
  height: 100%;
  box-shadow: 0px -7px 5px -10px #717171;
  padding-top: 20px;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
`


export default Details;
