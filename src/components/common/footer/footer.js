import styled from 'styled-components'
import {PaddingBox} from '../styled'
import {Link} from 'react-router-dom'

const Footer = () => {
  const footerTopList = [
    {
      Text:['도움말 센터','안전 정보','예약 취소 옵션','에어비앤비의 코로나19 대응 방안','장애인 지원','이웃 민원 신고']
    },
    {
      Text:['Airbnb.org: 재난 구호 숙소','아프간 난민 지원','다양한 소속감 증진','차별 철폐를 위한 노력']
    },
    {
      Text:['호스팅 시작하기','에어커버: 호스트를 위한 보호 프로그램','호스팅 자료 둘러보기','커뮤니티 포럼 방문하기','책임감 있는 호스팅']
    },
    {
      Text:['뉴스룸','새로운 기능에 대해 알아보기','에어비앤비 공동창업자의 메시지','채용정보','투자자 정보','에어비앤비 Luxe']
    }
  ]
  return (
    <FooterBox>
      <FooterPaddingBox>
        <FooterTop>
          <FooterTopListItemBox>
            <FooterTopListItem>
              <ItemTitle>에어비앤비 지원</ItemTitle>
              <ItemTextBox>
                {
                  footerTopList[0].Text.map((v,i) => (
                    <ItemText key={i}>{v}</ItemText>
                  ))
                }
              </ItemTextBox>
            </FooterTopListItem>
          </FooterTopListItemBox>
          <FooterTopListItemBox>
            <FooterTopListItem>
              <ItemTitle>커뮤니티</ItemTitle>
              <ItemTextBox>
                {
                  footerTopList[1].Text.map((v,i) => (
                    <ItemText key={i}>{v}</ItemText>
                  ))
                }
              </ItemTextBox>
            </FooterTopListItem>
          </FooterTopListItemBox>
          <FooterTopListItemBox>
            <FooterTopListItem>
              <ItemTitle>호스팅</ItemTitle>
              <ItemTextBox>
                {
                  footerTopList[2].Text.map((v,i) => (
                    <ItemText key={i}>{v}</ItemText>
                  ))
                }
              </ItemTextBox>
            </FooterTopListItem>
          </FooterTopListItemBox>
          <FooterTopListItemBox>
            <FooterTopListItem>
              <ItemTitle>소개</ItemTitle>
              <ItemTextBox>
                {
                  footerTopList[3].Text.map((v,i) => (
                    <ItemText key={i}>{v}</ItemText>
                  ))
                }
              </ItemTextBox>
            </FooterTopListItem>
          </FooterTopListItemBox>
        </FooterTop>
        <FooterBottom>
          <CompanyBox>
            <CompanyText>© 2022 Airbnb, Inc.</CompanyText>
            <span>·</span>
            <CompanyText><Link to='/'>개인정보 처리방침</Link></CompanyText>
            <span>·</span>
            <CompanyText><Link to='/'>이용약관</Link></CompanyText>
            <span>·</span>
            <CompanyText><Link to='/'>사이트맵</Link></CompanyText>
            <span>·</span>
            <CompanyText><Link to='/'>한국의 변경된 환불 정책</Link></CompanyText>
            <span>·</span>
            <CompanyText><Link to='/'>회사 세부정보</Link></CompanyText>
          </CompanyBox>
          <SocialBox>
            <IconsBox>
              <svg viewBox="0 0 16 16" >
                <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
              </svg>
              <LngText>한국어(KR)</LngText>
              <span>₩</span>
              <LngText style={{marginRight:'24px'}}>KRW</LngText>
            </IconsBox>
            <SocialIconsBox>
              <svg viewBox="0 0 32 32">
                <path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fill-rule="evenodd"/>
              </svg>
              <svg viewBox="0 0 32 32">
                <path d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16" fill-rule="evenodd" />
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z" fill-rule="evenodd" />
              </svg>
              <svg viewBox="0 0 1024 1024" >
                <path d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z" fill="#00c73c"></path><path d="m757 203.2h-490.4c-70.4 0-127.5 57.1-127.5 127.5v303.5c0 70.7 57.3 127.9 127.9 127.9h173.8l58.7 101.6c5.4 9.3 18.9 9.3 24.2 0l58.7-101.6h174.2c70.6 0 128.5-57.8 128.5-128.5v-302.4c0-70.7-57.3-128-128.1-128z" fill="#fff"></path><g fill="#ff812c"><path d="m390.7 495.6c0 38.7-28 68.5-62.1 68.5-17.4 0-30.1-6-38.7-15.8v12.2h-38.9v-173.1h38.9v55.5c8.6-9.9 21.3-15.8 38.7-15.8 34 0 62.1 29.8 62.1 68.5zm-36.4 0c0-21.1-14-34.3-33.4-34.3s-33.4 13.2-33.4 34.3 14 34.3 33.4 34.3c19.3 0 33.4-13.2 33.4-34.3z"></path><path d="m477.6 495.6c0-38.7 30.6-68.5 68.8-68.5s68.8 29.9 68.8 68.5c0 38.7-30.6 68.5-68.8 68.5s-68.8-29.8-68.8-68.5zm101.1 0c0-19.9-14-33.2-32.3-33.2s-32.3 13.2-32.3 33.2c0 19.9 14 33.2 32.3 33.2 18.2 0 32.3-13.2 32.3-33.2z"></path><path d="m704.6 616.1c34.5 0 68.5-18.4 68.5-62.1v-123.3h-37.9v13.2c-8.6-10.6-21-16.9-37.9-16.9-36.9 0-63.9 30.1-63.9 66 0 35.8 27 65.9 63.9 65.9 16.9 0 29.3-6.2 37.9-16.9v12c0 18.4-11.2 27.8-29.3 27.8h-1.3zm-.7-90.5c-19.9 0-34-13.2-34-32.6s14-32.6 34-32.6c19.9 0 34 13.2 34 32.6s-14.1 32.6-34 32.6z"></path><path d="m394.3 382.7v35.1c13.4 2.6 21.3 11.8 21.3 27.4v115.3h38.9v-115.3c0-40.3-28.6-59.4-60.2-62.5z" />
              </g>
              </svg>
              <svg viewBox="0 0 1024 1024">
                <path d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z" fill="#fff"></path><g fill="#00c73c"><path d="m0 198h1024v7h-1024z"></path><path d="m0 405h1024v7h-1024z"></path><path d="m0 612h1024v7h-1024z"></path><path d="m0 819h1024v7h-1024z"></path></g><path d="m307 537 188.2 324.1c7.5 12.9 26.1 12.9 33.6 0l188.2-324.1z" fill="#f4e49d"></path><path d="m307 0h410v537h-410z" fill="#00e831"></path><path d="m392 0h240v537h-240z" fill="#00c73c"></path><path d="m392 148.5v240h240v-240zm188 182h-47.8l-41.2-62.8v62.8h-47v-124h45.8l42.2 62.4v-62.4h48z" fill="#fff"></path><path d="m632 0h85v537h-85z" fill="#00a32a"></path><path d="m528.8 861.1 188.2-324.1h-85l-119.5 333.7c6.3-.1 12.6-3.3 16.3-9.6z" fill="#e0c141"/>
                <path d="m448.8 781.2 46.4 79.9c7.5 12.9 26.1 12.9 33.6 0l46.4-79.9z" fill="#2d2d2d" />
              </svg>
            </SocialIconsBox>
          </SocialBox>
        </FooterBottom>
      </FooterPaddingBox>
    </FooterBox>
  );
}
const FooterBox = styled.div`
  width: 100%;
  background: rgb(247, 247, 247);
`
const FooterPaddingBox = styled(PaddingBox)`
  width: 100%;
`
const FooterTop = styled.div`
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  padding-top: 48px;
  padding-bottom: 48px;
  @media screen and (max-width: 1127px) {
    flex-direction: column;
    padding-bottom: 0px;
  }
`
const FooterTopListItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1127px) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  
`
const FooterTopListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ItemTitle = styled.div`
  color: rgb(34, 34, 34);
  font-size: 14px;
  line-height: 18px;
  font-weight: 800;
`
const ItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 1127px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
const ItemText = styled.div`
  color: rgb(34, 34, 34);
  font-size: 14px;
  line-height: 18px;
  margin-top: 16px;
  @media screen and (max-width: 1127px) {
    flex-direction: row;
    flex-basis: 33.3333%;
    
  }
`

const FooterBottom = styled.div`
  width: 100%;
  padding: 24px 0;
  border-top: 1px solid rgb(221, 221, 221);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1127px) {
    flex-direction: column-reverse;
    padding-top: 24px;
    padding-bottom: 24px;
    border-top: 0;
  }
`
const CompanyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  & span {
    text-align: center;
    width: 19px;
  }
`
const CompanyText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgb(34, 34, 34);
  display: inline-block;
`
const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 1127px){
    margin-bottom: 16px;
  }
`
const LngText = styled.span`
  font-weight: 600 ;
  text-decoration: underline;
  user-select: auto;
  font-size: 14px;
  line-height: 18px;
  color: rgb(34, 34, 34);
  margin-right: 24px;
`
const IconsBox = styled.div`
  & svg{
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  & span{
    font-size: 14px;
    line-height: 18px;
    color: rgb(34, 34, 34);
    margin-right: 8px;
  }
`
const SocialIconsBox = styled.div`
  margin-left: 32px;
  & svg{
    width: 18px;
    height: 18px;
    margin-right: 24px;
  }
`
export default Footer;
