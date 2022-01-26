import {PageWrap} from '../../components/common/styled'
import styled from 'styled-components'
import Header from '../../components/common/header'
import FilterList from './molecules/filterList'
import Footer from '../../components/common/footer'
import RoomList from './molecules/roomList'

const FilterPage = () => {
  let pageUrl = window.location.href.split('http://localhost:3000/filter/');
  pageUrl.shift()
  let url = decodeURI(pageUrl);
  return(
    <Page>
      <Header page={'search'} filterPage={'filterPage'}/>
      <FilterList />
      <RoomList searchUrl={url}/>
      <Footer />
    </Page>
  );
}

const Page = styled(PageWrap)`
  
`


export default FilterPage;
