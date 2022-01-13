import styled from 'styled-components'
import {PaddingBox, SectionTitle} from '../../../components/common/styled'

const Experience = () => {
  return (
    <SectionBox>
      <Section>
        <Title>에어비앤비 체험 둘러보기</Title>
        <SectionImgBox>
          <SectionItem>
            <SectionImg src='https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=1200' />
              <SectionText>여행중 만나는<br/>이색적인 즐길 거리</SectionText>
              <SectionBtn>체험</SectionBtn>
          </SectionItem>
          <SectionItem>
            <SectionImg src='https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=1200' />
              <SectionText>집에서 만나는<br/>다양한 즐길 거리</SectionText>
              <SectionBtn>온라인 체험</SectionBtn>
          </SectionItem>
        </SectionImgBox>
      </Section>
    </SectionBox>
  );
}

const SectionBox = styled.div`
  padding: 48px 0 96px;
`
const Section = styled(PaddingBox)`
`
const Title = styled(SectionTitle)`
`
const SectionImgBox = styled.div`
  width: 100%;
  height: 49.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SectionItem = styled.div`
  width: 49.5%;
  position: relative;
  box-sizing: border-box;
  padding: 80px;
`
const SectionImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: -1;
`
const SectionText = styled.div`
  color: #FFFFFF;
  font-size: 41px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 46px;
  padding-bottom: 24px;
`
const SectionBtn = styled.span`
  display: inline-block;
  padding: 14px 24px;
  border-radius: 10px;
  background-color: #FFFFFF;
  cursor: pointer;
  &:hover{
    background: #EBEBEB;
  }
`
export default Experience
