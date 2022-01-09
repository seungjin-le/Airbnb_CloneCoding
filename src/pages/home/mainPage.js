import styled from 'styled-components'
import Header from '../../components/common/header'
import Covid19Msg from '../../components/common/covid19Msg'

const MainPage = () => {
  return (
    <FirstSection>
      <Covid19Msg />
      <Header />
    </FirstSection>
  );
}
const FirstSection = styled.div`
  width: 100%;
`
export default MainPage
