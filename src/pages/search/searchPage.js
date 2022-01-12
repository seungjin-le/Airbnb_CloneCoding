import styled from 'styled-components'
import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header/header'
import Filter from '../../components/common/sections/filter'
import FilterItemList from '../../components/common/sections/filterItemList'
import Footer from '../../components/common/footer/footer'

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
