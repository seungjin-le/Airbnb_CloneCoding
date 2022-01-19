import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaRegIdCard, FaRegMoneyBillAlt} from 'react-icons/fa'
import {AiOutlineSound, BiShield, BsGift, GiDesk, GoGraph, IoEyeSharp, IoOptionsSharp} from 'react-icons/all'
import {useEffect, useState} from 'react'
import {render} from 'react-dom'

const AccountMenu = ({userToken}) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    if(userToken){
      setUsers(userToken.result)
    }
  }, [userToken]);

  console.log(users)

  return(
    <FlexBox>
      <MarginBox>
        <AccountTitle>계정</AccountTitle>
        <AccountEmail>
          {users ?
            <div>
            <span className='name'>{users.name},</span>
            <span className='email'> {users.email} ·</span>
            <Link className='link'>프로필로 이동</Link>
            </div>
            :
            false
          }
        </AccountEmail>
        <AccountCardBox>
          <MenuCard>
            <CardIcon><FaRegIdCard/></CardIcon>
            <CardTextBox>
              <CardTitle>개인정보</CardTitle>
              <CardText>개인정보 빛 연락처를 알려주세요</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><BiShield/></CardIcon>
            <CardTextBox>
              <CardTitle>로그인 및 보안</CardTitle>
              <CardText>비밀번호를 변경하고 계정을 안전하게 보호하세요</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><FaRegMoneyBillAlt/></CardIcon>
            <CardTextBox>
              <CardTitle>결제 및 대금 수령</CardTitle>
              <CardText>결제, 대금 수령, 쿠폰, 기프트카드 및 세금 검토하기</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><AiOutlineSound/></CardIcon>
            <CardTextBox>
              <CardTitle>알림</CardTitle>
              <CardText>알림 환경설정 및 연락 방식을 선택하세요</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><IoEyeSharp/></CardIcon>
            <CardTextBox>
              <CardTitle>개인정보 및 공개 설정</CardTitle>
              <CardText>연결된 앱, 공유하는 정보 및공개 대상 관리하기</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><IoOptionsSharp/></CardIcon>
            <CardTextBox>
              <CardTitle>글로벌 환경 설정</CardTitle>
              <CardText>기본 언어, 통화, 시간대 설정하기</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><GiDesk/></CardIcon>
            <CardTextBox>
              <CardTitle>출장</CardTitle>
              <CardText>회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><GoGraph/></CardIcon>
            <CardTextBox>
              <CardTitle>전문 호스팅 도구</CardTitle>
              <CardText>에어비앤비에서 여러 숙소를 관라하신다면 전문 도구를 이용해보세요.</CardText>
            </CardTextBox>
          </MenuCard>
          <MenuCard>
            <CardIcon><BsGift/></CardIcon>
            <CardTextBox>
              <CardTitle>추천 크레딧 및 쿠폰</CardTitle>
              <CardText>₩0의 추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기</CardText>
            </CardTextBox>
          </MenuCard>
        </AccountCardBox>
        <CardTextBox className='subText'>
          <div className='one'>계정을 비황성화 하셔야하나요?</div>
          <div className='two'>지금 처리하기</div>
        </CardTextBox>
      </MarginBox>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  
`
const MarginBox = styled.div`
  max-width: 1080px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  display: block;
  @media screen and (max-width: 1128px) {
    max-width: 696px;
  }
`
const AccountTitle = styled.div`
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  color: rgb(34, 34, 34);
  margin-top: 64px;
  margin-left: 16px;
`
const AccountEmail = styled.div`
  font-size: 18px;
  margin-left: 16px;
  margin-bottom: 56px;
  & .name,
  & .link{
    font-weight: 600;
    line-height: 24px;
  }
  & .link{
    text-decoration: underline;
  }
`
const AccountCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`
const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32%;
  height: 156px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  margin: 8px 0px;
  padding: 16px;
  border-radius: 12px;
  text-decoration: none;
  box-sizing: border-box;
  @media screen and (max-width: 1128px) {
    width: 49%;
    
  }
`
const CardIcon = styled.div`
  
  & svg{
    font-size:32px;
  }
`
const CardTextBox = styled.div`
  
  &.subText{
    margin-top: 49px;
    margin-bottom: 49px;
  }
  & .one{
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: rgb(0, 0, 0);
  }
  & .two{
    font-size: 14px;
    color: rgb(34, 34, 34);
    border-radius: 4px;
    font-weight: 600;
    text-decoration: underline;
  }
  & .one,
  & .two{
    text-align: center;
  }
`
const CardTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  height: auto;
  margin-bottom: 8px;
`
const CardText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgb(113, 113, 113);
  font-weight: 400;
`


export default AccountMenu;
