import styled from 'styled-components'
import DetailsTitle from './atoms/detailsTitle'
import {PaddingBox} from '../../../components/common/styled'

const Details = () => {
  return (
    <DetailsPaddingBox>
      <DetailsTitle />
    </DetailsPaddingBox>
  )
}
const DetailsPaddingBox = styled(PaddingBox)`
  width: 100%;
  height: 100%;
  box-shadow: 0px -7px 5px -10px #717171;
  padding-top: 20px;
`


export default Details;
