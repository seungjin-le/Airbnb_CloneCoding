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
  const [bodyLock, setBodyLock] = useState(false);


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
    toggleState(!toggleState)
    document.body.style.overflow = 'unset';
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
    <ModalBackground onClick={onClick}>
      {loginStatus ?
        <JoinModalBox >
          <ModalTitleBox>
            <CloseIconBox onClick={onClick}>
              <GrClose/>
            </CloseIconBox>
            <ModalTitleText>?????? ?????? ????????????</ModalTitleText>
          </ModalTitleBox>
          <LoginForm>
              <FormBox>
                <PhoneNumber type='text' placeholder='??????(???: ?????????)' onChange={nameChange}/>
                <PhoneNumber type='text' placeholder='???(???: ???)' onChange={firstNameChange}/>
              </FormBox>
            <div className='joinSubText'>?????? ?????? ???????????? ????????? ????????? ??????????????? ???????????????</div>
            <FormBox>
              <PhoneNumber type='date' placeholder='????????????' onChange={dateChange}/>
            </FormBox>
            <div className='joinSubText'>??? 19??? ????????? ????????? ???????????? ????????? ??? ???????????? ????????? ?????????????????? ?????? ???????????? ???????????? ????????????</div>
            <FormBox>
              <PhoneNumber type='email' placeholder='?????????' onChange={emailChange}/>
            </FormBox>
            <div className='joinSubText'>?????? ????????? ???????????? ???????????? ??????????????????.</div>
            <FormBox>
              <PhoneNumber type='password' placeholder='????????????' onChange={pwChange}/>
            </FormBox>
            <div className='texts'><span>?????? ??? ??????</span>?????? ????????? ???????????? ??????????????? <span>????????? ??????, ?????? ????????? ??????</span> ??? <span>?????? ?????? ??????</span>??? ???????????? ???????????? ???????????? ????????? ???????????? ????????????.</div>
            <LoginBtn onClick={joinClick}>??????</LoginBtn>
          </LoginForm>
        </JoinModalBox>
        :
        <JoinModalBox>
          <ModalTitleBox>
            <CloseIconBox onClick={onClick}>
              <GrClose/>
            </CloseIconBox>
            <ModalTitleText>????????? ?????? ?????? ??????</ModalTitleText>
          </ModalTitleBox>
          <LoginForm>
            <WelcomeMsg>?????????????????? ???????????? ???????????????.</WelcomeMsg>
            {emailLogin ?
              <FormBox>
                <PhoneNumber type='email' placeholder='?????????' id='emailInput' onChange={emailChange}/>
                <PhoneNumber type='password' placeholder='????????????' id='emailInput' onChange={pwChange}/>
              </FormBox> :
              <FormBox>
                <NationForm>
                  <option value="??????">??????</option>
                  <option value="??????">??????</option>
                  <option value="??????">??????</option>
                  <option value="??????">??????</option>
                  <option value="?????????">?????????</option>
                </NationForm>
                <PhoneNumber type='text' placeholder='????????????' />
              </FormBox>
            }
            <SubText>????????? ????????? ??????????????? ?????????????????????. ?????? ?????? ????????? ?????? ??? ????????? ????????? ???????????????.<Link to='/'> ???????????? ????????????</Link></SubText>
            <LoginBtn onClick={emailClick}>??????</LoginBtn>
            <AndLineBox><Line/><span>??????</span><Line/></AndLineBox>
            <SocialLoginBtn>
              <IoLogoFacebook style={{color:'dodgerblue'}}/>
              <span>?????????????????? ???????????????</span>
            </SocialLoginBtn>
            <SocialLoginBtn>
              <FcGoogle />
              <span>????????? ???????????????</span>
            </SocialLoginBtn>
            <SocialLoginBtn>
              <AiFillApple style={{color:'#333'}}/>
              <span>Apple ???????????? ???????????????</span>
            </SocialLoginBtn>
            <SocialLoginBtn style={{marginBottom:'0px'}} onClick={emailLoginClick}>
              <AiOutlineMail />
              <span>???????????? ???????????????</span>
            </SocialLoginBtn>
          </LoginForm>
        </JoinModalBox>
      }
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
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
  z-index: 4;
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
