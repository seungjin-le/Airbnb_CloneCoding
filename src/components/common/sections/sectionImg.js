import styled from 'styled-components'
import {PaddingBox} from '../styled'
import {Link} from 'react-router-dom'

const SectionImg = () => {
  return (
    <SectionBox>
      <ImgBox>
        <Section>
          <BtnBox>
            <BtnTitle>에어비앤비가<br/>여행지를 찾아드릴게요!</BtnTitle>
            <Btn><Link to='/'>유연한 검색</Link></Btn>
          </BtnBox>
        </Section>
      </ImgBox>
    </SectionBox>
  );
}
const SectionBox = styled.div`
  width: 100%;
  height: 100%;
  
`
const ImgBox = styled(PaddingBox)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Section = styled.div`
  background-image: url("https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=1920");
  background-size: cover;
  padding: 0 80px 64px;
  box-sizing: border-box;
  max-width: 1600px;
  max-height: 800px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`
const BtnBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`
const BtnTitle = styled.div`
  color: #FFFFFF;
  font-size: 38px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 43px;
  text-align: center;
`
const Btn = styled.div`
  display: inline-block;
  text-align: center;
  width: 8%;
  min-width: 70px;
  margin-top: 16px;
  font-size: 18px;
  border-radius: 45px;
  cursor: pointer;
  @media screen and (max-width: 950px) {
    font-size: 17px;
  }
  @media screen and (max-width: 744px) {
    font-size: 16px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
  padding: 14px 32px;
  -webkit-tap-highlight-color: transparent;
  background-color: #FFFFFF;
  border: initial;
  font-weight: 800;
  color: #222222;
  line-height: inherit;
  max-height: 120px;
  & a{
    background: linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default SectionImg;
