import styled from 'styled-components'
import {PaddingBox} from '../styled'


//<HostingImg src=''/>
const HostingSection = () => {
  return(
    <SectionBox>
      <Section>
        <SectionImgBox>
          <HostingTextBox>
            <HostingTitle><div>호스팅에 관해 <br/> 궁금하신 점이 <br/> 있나요?</div></HostingTitle>
            <HostingBtnBox>
              <HostingBtn>슈퍼호스트에게 물어보세요</HostingBtn>
            </HostingBtnBox>
          </HostingTextBox>
          <BackImg />
        </SectionImgBox>
      </Section>
    </SectionBox>
  );
}

const SectionBox = styled.div`
  padding: 0 0 48px;
`
const Section = styled(PaddingBox)`
  position: relative;
  width: 100%;
  height: 44.2vw;
  border-radius: 10px;
  @media screen and (max-width: 1127px){
    padding:0;
    border-radius: 0px;
  }
`
const SectionImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  //padding: 80px;
`
const BackImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=1440") ;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
  border-radius: 10px;
  @media screen and (max-width: 1127px){
    border-radius: 0px;
  }
`
const HostingTextBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`
const HostingTitle = styled.div`
  color: #FFFFFF;
  font-size: 95px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 105px;
  @media screen and (max-width: 1300px){
    font-size: 74px;
    line-height: normal;
  }
  & > div{
    width: 40vw;
  }
  @media screen and (max-width: 1127px){
    font-size: 45px;
    line-height: normal;
  }
`
const HostingBtnBox = styled.div`
`
const HostingBtn = styled.div`
  display: inline-block;
  padding: 14px 24px;
  border-radius: 10px;
  background-color: #FFFFFF;
  cursor: pointer;
  &:hover{
    background: #EBEBEB;
`

export default HostingSection;
