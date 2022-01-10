import styled from 'styled-components'
import Header from '../../components/common/header'
import Covid19Msg from '../../components/common/covid19Msg'
import SectionImg from '../../components/common/sectionImg'

const MainPage = () => {
  return (
    <FirstSection>
      <Covid19Msg />
      <Header />
      <SectionImg />
    </FirstSection>
  );
}
const FirstSection = styled.div`
  background: #000;
  width: 100%;
`
export default MainPage
