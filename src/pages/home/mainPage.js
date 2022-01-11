import styled from 'styled-components'
import Header from '../../components/common/header/header'
import Covid19Msg from '../../components/common/header/covid19Msg'
import SectionImg from '../../components/common/sections/sectionImg'
import {PageWrap} from '../../components/common/styled'
import IdeaSection from '../../components/common/sections/ideaSection'
import Experience from '../../components/common/sections/experience'
import HostingSection from '../../components/common/sections/hostingSection'
import Footer from '../../components/common/footer/footer'

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
