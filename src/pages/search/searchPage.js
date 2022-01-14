import styled from 'styled-components'
import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header'
import Filter from './atoms/filter'
import FilterItemList from './atoms/filterItemList'
import Footer from '../../components/common/footer'

const SearchPage = () => {
  return(
    <Page>
      <PageBox>
        <Header page={'search'}/>
        <Filter />
        <FilterItemList />
        <Footer />
      </PageBox>
    </Page>
  );
}

const Page = styled(PageWrap)`
  background: #fff;
  
`
const PageBox = styled.div`
  width: 100%;
`

export default SearchPage;
