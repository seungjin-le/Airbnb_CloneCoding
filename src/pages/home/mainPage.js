import styled from 'styled-components'
import Header from '../../components/common/header'
import Covid19Msg from './atoms/covid19Msg'
import SectionImg from './atoms/sectionImg'
import {PageWrap} from '../../components/common/styled'
import IdeaSection from './atoms/ideaSection'
import Experience from './atoms/experience'
import HostingSection from './atoms/hostingSection'
import Footer from '../../components/common/footer'

const MainPage = () => {
  return (
    <Page>
      <FirstSection>
        <Covid19Msg />
        <Header />
        <SectionImg />
      </FirstSection>
      <IdeaSection />
      <Experience />
      <HostingSection/>
      <Footer />
    </Page>
  );
}

const Page = styled(PageWrap)`
  box-sizing: border-box;
`
const FirstSection = styled.div`
  background: #000;
  width: 100%;
  max-height: 1122px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export default MainPage
