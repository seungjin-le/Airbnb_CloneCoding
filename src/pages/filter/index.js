import {PageWrap} from '../../components/common/styled'
import styled from 'styled-components'
import Header from '../../components/common/header'
import FilterList from './molecules/filterList'
import Footer from '../../components/common/footer'
import RoomList from './molecules/roomList'

const FilterPage = () => {
  const pageUrl = window.location.href.split('http://localhost:3000/');
  console.log(pageUrl)
  return(
    <Page>
      <Header page={'search'} filterPage={'filterPage'}/>
      <FilterList />
      <RoomList />
      <Footer />
    </Page>
  );
}

const Page = styled(PageWrap)`
`
export default FilterPage;
