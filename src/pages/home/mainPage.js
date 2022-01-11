import styled from 'styled-components'
import Header from '../../components/common/header'
import Covid19Msg from '../../components/common/covid19Msg'
import SectionImg from '../../components/common/sectionImg'
import {PageWrap} from '../../components/common/styled'
import IdeaSection from '../../components/common/ideaSection'
import Experience from '../../components/common/experience'
import HostingSection from '../../components/common/hostingSection'

const MainPage = () => {
  return (
    <Page>
      <FirstSection>
        <Covid19Msg />
        <Header />
        <SectionImg />
      </FirstSection>
      <IdeaSection />

      <HostingSection/>
    </Page>
  );
}
//<Experience />
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
