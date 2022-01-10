import styled from 'styled-components'
import {PaddingBox} from './styled'
//<ItemImg style={{background:'url(https://a0.muscache.com/im/pictures/cc5716eb-7454-4ae4-890a-fdcaf6b724be.jpg?im_q=highq&im_w=720) no-repat center center fixed'}}></ItemImg>
const IdeaSection = () => {
  return (
    <SectionBox>
      <Section>
        <SectionTitle>설레는 다음 여행을 위한 아이디어</SectionTitle>
        <RecommendationBox>
          <RecommendationItem>
            <ItemImg src='https://a0.muscache.com/im/pictures/cc5716eb-7454-4ae4-890a-fdcaf6b724be.jpg?im_q=highq&im_w=720' />
            <ItemTexts style={{background:'rgb(222, 49, 81)'}}>
              <ItemTitle>제주도(Jeju)</ItemTitle>
              <ItemText>324km 거리</ItemText>
            </ItemTexts>
          </RecommendationItem>
          <RecommendationItem>
            <ItemImg src='https://a0.muscache.com/im/pictures/241d2e75-21ed-4b13-bf46-673baf1abc69.jpg?im_w=720' />
            <ItemTexts style={{background:'rgb(217, 59, 48)'}}>
              <ItemTitle>부산</ItemTitle>
              <ItemText>196km 거리</ItemText>
            </ItemTexts>
          </RecommendationItem>
          <RecommendationItem>
            <ItemImg src='https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=720' />
            <ItemTexts style={{background: 'rgb(188, 26, 110)'}}>
              <ItemTitle>서울</ItemTitle>
              <ItemText>144km 거리</ItemText>
            </ItemTexts>
          </RecommendationItem>
          <RecommendationItem>
            <ItemImg src='https://a0.muscache.com/im/pictures/b4b61a38-00c0-4411-a0d6-e2f6fa10d46c.jpg?im_w=720' />
            <ItemTexts style={{background: 'rgb(204, 45, 74)'}}>
              <ItemTitle>전주시</ItemTitle>
              <ItemText>60km 거리</ItemText>
            </ItemTexts>
          </RecommendationItem>
        </RecommendationBox>
      </Section>
    </SectionBox>
  );
}
const SectionBox = styled.div`
  padding: 96px 0 48px;
`
const Section = styled(PaddingBox)`
`
const SectionTitle = styled.div`
  font-size: 42px;
  font-weight: 4
  letter-spacing: -0.02em;
  line-height: 47px;
  padding-bottom: 48px;
`
const RecommendationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`
const RecommendationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  width: 24%;
  height: 28vw;
  border-radius: 15px;
  box-sizing: border-box;
`
const ItemImg = styled.img`
  flex: 1;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: auto;
  left: 0px;
  right: 0px;
  object-fit: cover;
  object-position: center center;
  vertical-align: bottom;
`
const ItemTexts = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`
const ItemTitle = styled.div`
  color: #FFFFFF;
  font-size: 27px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 30px;
  padding-bottom: 8px;
`
const ItemText = styled.div`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
`
export default IdeaSection;
