import {PageWrap} from '../../components/common/styled'
import styled from 'styled-components'
import Header from '../../components/common/header'
import FilterList from './molecules/filterList'
import Footer from '../../components/common/footer'
import RoomList from './molecules/roomList'

const FilterPage = () => {
  return(
    <Page>
      <Header page={'search'}/>
      <FilterList />
      <RoomList />
      <Footer />
    </Page>
  );
}

const Page = styled(PageWrap)`
`
export default FilterPage;