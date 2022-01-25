import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import styled from 'styled-components'
import Details from './molecules/details'


const RoomDetails = () => {

  return (
    <Page>
      <div>
        <Header page={'search'} filterPage={'filterPage'} searchNone={false}/>
      </div>
      <Details />
      <Footer />
    </Page>
  );
}

//
const Page = styled(PageWrap)`
  height: 100%;
`

export default RoomDetails;
