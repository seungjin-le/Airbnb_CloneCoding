import styled from 'styled-components'
import Header from '../../components/common/header'
import {PageWrap} from '../../components/common/styled'
import Footer from '../../components/common/footer'
import UserInformation from './molecules/userInformation'

const Information = () => {
  return (
    <Page>
      <Header page={'search'}/>
      <UserInformation />
      <Footer />
    </Page>

  )
}


const Page = styled(PageWrap)`
  height: 100%;
`


export default Information
