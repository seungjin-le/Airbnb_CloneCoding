import styled from 'styled-components'
import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header'
import Filter from './atoms/filter'
import FilterItemList from './atoms/filterItemList'
import Footer from '../../components/common/footer'

const SearchPage = () => {
  return(
    <Page>
      <Header page={'search'}/>
      <Filter />
      <FilterItemList />
      <Footer />
    </Page>
  );
}

const Page = styled(PageWrap)`
  background: #fff;
  
`

export default SearchPage;
