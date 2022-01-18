import styled from 'styled-components'
import DetailsTitle from './atoms/detailsTitle'
import {PaddingBox} from '../../../components/common/styled'
import DetailsImg from './atoms/detailsImg'
import Announcement from './announcement'
import HostPosition from './atoms/hostPosition'
import ReView from './reView'

const Details = () => {
  return (
    <DetailsPaddingBox>
      <DetailsTitle />
      <DetailsImg />
      <Announcement />
      <ReView />
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
