import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import {IoLogoFacebook} from 'react-icons/io'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple, AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react'
import axios from 'axios'

const LoginMobal = ({ toggleState }) => {
  const [emailLogin, setEmailLogin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState('');



  let jwt;
  let userId;

  let userEmail;
  let userPassword;
  let userName;
  let userDate;
  let userFirstName;

  const emailChange = (e) => {
    userEmail = e.target.value;
  }
  const pwChange = (e) => {
    userPassword = e.target.value;
  }
  const dateChange = (e) => {
    userDate = e.target.value;
  }
  const nameChange = (e) => {
    userName = e.target.value;
  }
  const firstNameChange = (e) => {
    userFirstName = e.target.value;
  }



  const emailLoginClick = () => {
    setEmailLogin(emailLogin => !emailLogin);
  }
  const onClick = () => {
    toggleState(toggle => !toggle)
  }
  const emailClick = () => {
    const email = userEmail;
    const password = userPassword;
    const testEmail = 'alskek27@gmail.com'
    const testPassword = 'password'
    axios.post('https://dev.nada-risingcamp.shop/users/login',
      {
        email: email,
        password: password
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then((response) => {
      console.log(response.data);
      if(response.data.code === 1000){
        jwt = response.data.result.jwt;
        userId = response.data.result.userId;
        const userInfo = jwt;
        window.localStorage.setItem('users',JSON.stringify((userInfo)));
        window.location.reload()
      }
      if(response.data.code === 3002){
        setLoginStatus(true);
      }
    })
      .catch((response) => {
        console.log('Error!',response)

      })
  }

  const joinClick = () => {
    axios.post('https://dev.nada-risingcamp.shop/users/sign-up',
      {
        firstName:userFirstName,
        lastName:userName,
        birth:userDate,
        email: userEmail,
        password: userPassword
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then((response) => {
      console.log(response.data);
      window.location.reload()
    }).catch((response) => {
        console.log('Error!',response)

      })
  }

  return (
    <ModalBackground>
      {loginStatus ?
        <JoinModalBox>
          <ModalTitleBox>
            <CloseIconBox onClick={onClick}>
              <GrClose/>
            </CloseIconBox>
            <ModalTitleText>회원 가입 완료하기</ModalTitleText>
          </ModalTitleBox>
          <LoginForm>
              <FormBox>
                <PhoneNumber type='text' placeholder='이름(예: 홍길동)' onChange={nameChange}/>
                <PhoneNumber type='text' placeholder='성(예: 홍)' onChange={firstNameChange}/>
              </FormBox>
            <div className='joinSubText'>정부 발급 신분증에 펴시된 이름과 일치하는지 확인하세요</div>
            <FormBox>
              <PhoneNumber type='date' placeholder='생년월일' onChange={dateChange}/>
            </FormBox>
            <div className='joinSubText'>만 19세 이상의 성인만 회원ㅇ로 가입할 수 있습니다 생일은 에어비앤비의 ㅏ른 회원에게 공개되지 않습니다</div>
            <FormBox>
              <PhoneNumber type='email' placeholder='이메일' onChange={emailChange}/>
            </FormBox>
            <div className='joinSubText'>예약 확인과 영수증을 이메일로 보내드립니다.</div>
            <FormBox>
              <PhoneNumber type='password' placeholder='비밀번호' onChange={pwChange}/>
            </FormBox>
            <div className='texts'><span>동의 및 계속</span>하기 버튼을 선택하면 에어비앤비 <span>서비스 약관, 결제 서비스 약관</span> 및 <span>차별 금지 정책</span>에 동의하며 개인정보 처리방침 정책을 이해하는 것입니다.</div>
            <LoginBtn onClick={joinClick}>계속</LoginBtn>
          </LoginForm>
        </JoinModalBox>
        :
        <JoinModalBox>
          <ModalTitleBox>
            <CloseIconBox onClick={onClick}>
              <GrClose/>
            </CloseIconBox>
            <ModalTitleText>로그인 또는 회원 가입</ModalTitleText>
          </ModalTitleBox>
          <LoginForm>
            <WelcomeMsg>에어비앤비에 오신것을 환영합니다.</WelcomeMsg>
            {emailLogin ?
              <FormBox>
                <PhoneNumber type='email' placeholder='이메일' id='emailInput' onChange={emailChange}/>
                <PhoneNumber type='password' placeholder='비밀번호' id='emailInput' onChange={pwChange}/>
              </FormBox> :
              <FormBox>
                <NationForm>
                  <option value="한국">한국</option>
                  <option value="중국">중국</option>
                  <option value="마국">미국</option>
                  <option value="일본">일본</option>
                  <option value="러시아">러시아</option>
                </NationForm>
                <PhoneNumber type='text' placeholder='전화번호' />
              </FormBox>
            }
            <SubText>전화나 문자로 전화번호를 확인하겟습니다. 일반 문자 메시지 여금 및 데이터 요금이 부과됩니다.<Link to='/'> 개인정보 처리방침</Link></SubText>
            <LoginBtn onClick={emailClick}>계속</LoginBtn>
            <AndLineBox><Line/><span>또는</span><Line/></AndLineBox>
            <SocialLoginBtn>
              <IoLogoFacebook style={{color:'dodgerblue'}}/>
              <span>페이스북으로 로그인하기</span>
            </SocialLoginBtn>
            <SocialLoginBtn>
              <FcGoogle />
              <span>구글로 로그인하기</span>
            </SocialLoginBtn>
            <SocialLoginBtn>
              <AiFillApple style={{color:'#333'}}/>
              <span>Apple 계정으로 로그인하기</span>
            </SocialLoginBtn>
            <SocialLoginBtn style={{marginBottom:'0px'}} onClick={emailLoginClick}>
              <AiOutlineMail />
              <span>이메일로 로그인하기</span>
            </SocialLoginBtn>
          </LoginForm>
        </JoinModalBox>
      }
    </ModalBackground>
  );
}
//{loginStatus ?
//             <LoginBtn onClick={passwordClick}>로그인</LoginBtn> :
//             <LoginBtn onClick={emailClick}>계속</LoginBtn>
//           }
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 3;
`
const JoinModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  border-radius: 10px;
  width: 568px;
  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 2;
`
const ModalTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  min-height: 48px;
  border-bottom: 1px solid rgb(235, 235, 235);
  color: rgb(34, 34, 34);
  position: relative;
`
const CloseIconBox = styled.div`
  position: absolute;
  left: 10px;
  font-size: 14px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
  border-radius: 45px;
  justify-content: center;
  &:hover {
    transition: .3s;
    background: rgba(0,0,0,.1);
  }
`
const ModalTitleText = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
`

const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
  & .joinSubText{
    display: flex;
    color: rgb(113, 113, 113);
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    margin-top: 5px;
  }
  & .texts{
    font-size: 12px;
    line-height: 16px;
    color: rgb(113, 113, 113);
    margin: 20px 0;
    & span{
      color: rgb(0, 76, 196);
      text-decoration: underline;
      border-radius: 4px;
      font-weight: 600;
      outline: none;
      &:first-child{
        color: #717171;
      }
    }
    
  }
`
const WelcomeMsg = styled.div`
  font-size: 22px;
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  margin-bottom: 8px;
`
const FormBox = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(0,0,0, .2);
  border-radius: 8px;
  
`
const NationForm = styled.select`
  height: 56px;
  width: 100%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 26px 36px 10px 12px;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  appearance: none;
`
const PhoneNumber = styled.input`
  box-sizing: border-box;
  height: 56px;
  width: 100%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 26px 36px 10px 12px;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  appearance: none;
  border-top:1px solid rgba(0,0,0, .2);
`

const SubText = styled.div`
  color: rgb(34, 34, 34);
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 8px;
  padding-right: 20px;
  box-sizing: border-box;
  & a{
    font-weight: 600;
    text-decoration: underline;
  }
`
const LoginBtn = styled.div`
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  transition: .3s;
  margin: 16px auto 24px;
  color: #fff;
  border-radius: 8px;
  background: radial-gradient(circle at center center,
  rgb(255, 56, 92) 0%,
  rgb(230, 30, 77) 27.5%,
  rgb(227, 28, 95) 40%,
  rgb(215, 4, 102) 57.5%,
  rgb(189, 30, 89) 75%,
  rgb(189, 30, 89) 100%);

  &:active {
    margin: 16px auto 24px;
    width: 90%;
    background: radial-gradient(circle at center center,
    rgb(255, 56, 92) 40%,
    rgb(255, 56, 92) 40%,
    rgb(255, 56, 92) 40%,
    rgb(255, 56, 92) 40%,
    rgb(255, 56, 92) 40%,
    rgb(255, 56, 92) 40%);

  }
`

const AndLineBox = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & span{
    padding: 16px;
    min-width: 25px;
    text-align: center;
    color: #484848;
  }
`
const Line = styled.div`
  width: 100%;
  border-top: .5px solid rgb(176,176,176);
`

const SocialLoginBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  border-radius: 8px;
  border: 2px solid rgb(176,176,176);
  box-sizing: border-box;
  transition: .2s;
  position: relative;
  margin-bottom: 16px;
  & span{
    font-weight: 600;
    font-size: 14px;;
  }
  &:hover{
    border: 2px solid #484848;
  }
  & svg{
    position: absolute;
    font-size: 20px;
    
    left: 10px;
  }
`
export default LoginMobal
