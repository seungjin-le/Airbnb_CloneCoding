//@media screen and (max-width: 1127px) {
//     flex-direction: column-reverse;
//     padding-top: 24px;
//     padding-bottom: 24px;
//     border-top: 0;
//   }

import styled from 'styled-components'
import {AiOutlineEye, BiChevronRight, FaShoppingBag} from 'react-icons/all'
import {useEffect, useState} from 'react'
import axios from 'axios'


const UserInformation = () => {


  const [data, setData] = useState();
  const [userToken, setUserToken] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    if(data){
      axios.get(`https://dev.nada-risingcamp.shop/users/personal-info?token=${data}`).
      then(res => setUserToken(res.data)).catch((err) => console.log(err))
    }
  }, [data]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
  },[])
  useEffect(() => {
    if(userToken){
      setUsers(userToken.result[0])
    }
  },[userToken])

  return (
    <FlexBox>
      <TitleBox>
        <InformationSubText>계정 <BiChevronRight /> 정보</InformationSubText>
        <InformationTitle>개인정보</InformationTitle>
      </TitleBox>
      <SectionBox>
        <FlexLeft>
          <InputBox>
            <div className='text'>
              <div>실명</div>
              <div>수정</div>
            </div>
            {users ? <div className='users'>{users.name}</div> :
              <div></div>
            }
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>성별</div>
              <div>수정</div>
            </div>
            {users ? <div className='users'>{users.gender}</div> :
              <div></div>
            }
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>생년월일</div>
              <div>수정</div>
            </div>
            {users ? <div className='users'>{users.birth}</div> :
              <div></div>
            }
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>이메일 주소</div>
              <div>수정</div>
            </div>
            {users ? <div className='users'>{users.email}</div> :
              <div></div>
            }
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>전화번호</div>
              <div>추가</div>
            </div>
            <div className='users'>01011112222</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>정부 발급 신분증</div>
              <div>추가</div>
            </div>
            <div className='users'>제공되지 않음</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>주소</div>
              <div>수정</div>
            </div>
            <div className='users'>제공되지 않음</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>비상 연락처</div>
              <div>추가</div>
            </div>
            <div className='users'>제공되지 않음</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>중국 여행에 필요한 여권</div>
              <div>추가</div>
            </div>
            <div className='users'>제공되지 않음</div>
          </InputBox>
        </FlexLeft>
        <FlexRight>
          <CuriosityBox>
            <FaShoppingBag />
            <CuriosityTitle>수정할 수 있는 세부 정보는 무엇인가요?</CuriosityTitle>
            <CuriosityText>에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번 예약또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 잇습니다.</CuriosityText>
            <div className='line'/>
            <AiOutlineEye />
            <CuriosityTitle>다른 사람에게 어떤 정보가 공개되나요?</CuriosityTitle>
            <CuriosityText>에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.</CuriosityText>
          </CuriosityBox>
        </FlexRight>
      </SectionBox>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  max-width: 1080px;
  width: 100%;
  height: 100%;
  margin: 0 auto 48px;
  padding-right: 24px;
  padding-left: 24px;
  box-sizing: border-box;
`
const TitleBox = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`
const InformationTitle = styled.div`
  overflow-wrap: break-word;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.125em;
  color: rgb(72, 72, 72);
  
`
const InformationSubText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  overflow-wrap: break-word;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571em;
  color: rgb(72, 72, 72);
  & svg{
    font-size: 20px;
  }
`

const SectionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  
`
const FlexLeft = styled.div`
  width: 58.3333%;
`
const InputBox = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 1px;
  border-bottom: 1px solid rgb(235, 235, 235);
  & .text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 20px;
    & div:last-child{
      color: rgb(34, 34, 34);
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
    }
  }
  & .users {
    color: rgb(113, 113, 113);
    margin-top: 4px;
    word-break: break-word;
    font-size: 14px;
    line-height: 18px;
  }
`


const FlexRight = styled.div`
  display: inline-block;
  width: 32.3%;
  height: 100%;
  top:0;
  margin-left: 8.33333%;
  position: relative;
`
const CuriosityBox = styled.div`
  position: absolute;
  top: -410px;
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  & svg{
    font-size: 48px;
    color: rgb(237,28,95);
  }
  & .line {
    border-bottom: 1px solid rgb(221, 221, 221);
    margin: 32px 0px;
  }
`
const CuriosityTitle = styled.div`
  margin-top: 16px;
  font-size: 20px;
  font-weight: 800;
  
`
const CuriosityText = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: rgb(113, 113, 113);
  
`
export default UserInformation;
