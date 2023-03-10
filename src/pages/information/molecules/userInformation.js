


import styled from 'styled-components'
import {AiOutlineEye, BiChevronRight, FaShoppingBag} from 'react-icons/all'
import {useEffect, useState} from 'react'
import axios from 'axios'


const UserInformation = () => {

  const [data, setData] = useState();
  const [userToken, setUserToken] = useState();
  const [users, setUsers] = useState();
  const [modify, setModify] = useState({
    firstName:'',
    lastName:'',
    gender:'',
    birth:'',
    email:''
  });
  const [test, setTest] = useState({
    firstName:'',
    lastName:'',
    gender:'',
    birth:'',
    email:''
  });
  const [patchData, setPatchData] = useState(false);
  const [name, setName] = useState(false);
  const [gender, setGender] = useState(false);
  const [birth, setBirth] = useState(false);
  const [email, setEmail] = useState(false);
  //const [change, setChange] = useState(null);
  let change;
  // const [nameChange, setNameChange] = useState('')
  let nameChange;
  let tests ='';
  let object ={}


  const modifyModeClick = (e) => {
    switch (e.target.className) {
      case 'name':
        setName(value => !value)
        setGender(false)
        setBirth(false)
        setEmail(false)
        break;
      case 'gender':
        setGender(value => !value)
        setName(false)
        setBirth(false)
        setEmail(false)
        break;
      case 'birth':
        setBirth(value => !value)
        setGender(false)
        setEmail(false)
        setName(false)
        break;
      case 'email':
        setEmail(value => !value)
        setGender(false)
        setBirth(false)
        setName(false)
        break;
      default:
        break;
    }
  }
  const onChange = (e) => {
    change = e.target.value
  }
  const nameOnChange = (e) => {
    nameChange = e.target.value;
  }
  const patch = (obj) => {
    console.log(obj)
    if(false){
      axios.patch(`https://dev.nada-risingcamp.shop/users/personal-info/edit?token=${data}`,
        {
          firstName: obj.firstName,
          lastName: obj.lastName,
          gender: obj.gender,
          birth: obj.birth,
          email: obj.email,
        },
        {
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
          }
        }
      ).then((response) => {
        console.log(response.data);
        if (response.data.code === 1000) {
          window.location.reload()
        }
      }).catch((response) => {
        console.log('Error!', response)
      })
    }

  }
  const modifyClick = (e) => {

    switch (e.target.id) {
      case 'nameBtn':
        setName(false)
        tests = `${nameChange} `
        setModify({
          firstName: change,
          lastName: tests,
          gender:modify.gender,
          birth:modify.birth,
          email:modify.email,
        })
        break;
      case 'genderBtn':
        setGender(false)
        setModify({
          firstName: modify.firstName,
          lastName: modify.lastName,
          gender:change,
          birth:modify.birth,
          email:modify.email,
        });
        break;
      case 'birthBtn':
        setBirth(false)
        tests = change.replace('-','??? ');
        tests = tests.replace('-','??? ');
        tests = tests + '???';
        console.log(tests)
        setModify({
          firstName: modify.firstName,
          lastName: modify.lastName,
          gender:modify.gender,
          birth:tests,
          email:modify.email,
        })
        break;
      case 'emailBtn':
        setEmail(false)
        setModify({
          firstName: modify.firstName,
          lastName: modify.lastName,
          gender:modify.gender,
          birth:modify.birth,
          email: change,
        })
        break;
      default:
        break;
    }
  }


  useEffect( () => {
    patch(object)
  },[object])
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
      setModify({
        firstName: userToken.result[0].name.substr(-1) ,
        lastName: userToken.result[0].name.substring(0,userToken.result[0].name.length-1),
        gender: userToken.result[0].gender,
        birth: userToken.result[0].birth,
        email: userToken.result[0].email
      })
      object ={ ...userToken.result[0].email}

    }

  },[userToken])

  return (
    <FlexBox>
      <TitleBox>
        <InformationSubText>?????? <BiChevronRight /> ??????</InformationSubText>
        <InformationTitle>????????????</InformationTitle>
      </TitleBox>
      <SectionBox>
        <FlexLeft>
          {name ?
            <InputBox className={'setName'}>
              <div className='text'>
                <div>??????</div>
                <div className='name' onClick={modifyModeClick}>??????</div>
              </div>
              {users ?
                <div>
                  <div className='users'>??????????????? ?????? ??? ?????? ????????? ???????????? ?????? ????????? ????????????.</div>
                  <FormatBox>
                    <div>
                      <input type="text" id='lastNameInput' onChange={nameOnChange} placeholder={'??????'}/>
                    </div>
                    <div>
                      <input type="text" id='firstNameInput' onChange={onChange} placeholder={'???'}/>
                    </div>
                  </FormatBox>
                  <SaveBtn id='nameBtn' onClick={modifyClick}>??????</SaveBtn>
                </div>:
                <div></div>
              }
            </InputBox> :
            <InputBox>
              <div className='text'>
                <div>??????</div>
                <div className='name' onClick={modifyModeClick}>??????</div>
              </div>
              {users ?
                <div className='users'>{users.name}</div> :
                <div></div>
              }
            </InputBox>
          }
          {gender ?
            <InputBox className={gender ? 'setGender' : false}>
              <div className='text'>
                <div>??????</div>
                <div className='gender' onClick={modifyModeClick}>??????</div>
              </div>
              {users ?
                <div>
                  <FormatBox>
                    <select id='genderInput' onChange={onChange}>
                      <option value="" hidden>??????</option>
                      <option value=""></option>
                      <option value="??????">??????</option>
                      <option value="??????">??????</option>
                      <option value="??????">??????</option>
                    </select>
                  </FormatBox>
                  <SaveBtn id='genderBtn' onClick={modifyClick}>??????</SaveBtn>
                </div>:
                <div></div>
              }
            </InputBox> :
            <InputBox className={gender ? 'setGender' : false}>
              <div className='text'>
                <div>??????</div>
                <div className='gender' onClick={modifyModeClick}>??????</div>
              </div>
              {users ? <div className='users'>{users.gender}</div> :
                <div></div>
              }
            </InputBox>

          }
          {birth ?
            <InputBox className={birth ? 'setBirth' : false}>
              <div className='text'>
                <div>????????????</div>
                <div className='birth' onClick={modifyModeClick}>??????</div>
              </div>
              {users ?
                <div>
                  <FormatBox>
                    <input id='dateInput' type="date" onChange={onChange}/>
                  </FormatBox>
                  <SaveBtn id='birthBtn' onClick={modifyClick}>??????</SaveBtn>
                </div>
                :
                <div className='users'>{users.birth}</div>
              }
            </InputBox> :
            <InputBox className={birth ? 'setBirth' : false}>
              <div className='text'>
                <div>????????????</div>
                <div className='birth' onClick={modifyModeClick}>??????</div>
              </div>
              {users ? <div className='users'>{users.birth}</div> :
                <div></div>
              }
            </InputBox>
          }
          {email ?
          <InputBox className={email ? 'setEmail' : false}>
            <div className='text'>
              <div>????????? ??????</div>
              <div className='email' onClick={modifyModeClick}>??????</div>
            </div>
            {users ?
              <div>
                <FormatBox>
                  <input id='emailInput' type="email" placeholder={users.email} onChange={onChange}/>
                </FormatBox>
                <SaveBtn id='emailBtn' onClick={modifyClick}>??????</SaveBtn>
              </div>:
              <div className='users'>{users.email}</div>
            }
          </InputBox> :
            <InputBox className={email ? 'setEmail' : false}>
              <div className='text'>
                <div>????????? ??????</div>
                <div className='email' onClick={modifyModeClick}>??????</div>
              </div>
              {users ? <div className='users'>{users.email}</div> :
                <div></div>
              }
            </InputBox>
          }
          <InputBox>
            <div className='text'>
              <div>????????????</div>
              <div>??????</div>
            </div>
            <div className='users'>01011112222</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>?????? ?????? ?????????</div>
              <div>??????</div>
            </div>
            <div className='users'>???????????? ??????</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>??????</div>
              <div>??????</div>
            </div>
            <div className='users'>???????????? ??????</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>?????? ?????????</div>
              <div>??????</div>
            </div>
            <div className='users'>???????????? ??????</div>
          </InputBox>
          <InputBox>
            <div className='text'>
              <div>?????? ????????? ????????? ??????</div>
              <div>??????</div>
            </div>
            <div className='users'>???????????? ??????</div>
          </InputBox>
        </FlexLeft>
        <FlexRight>
          <CuriosityBox>
            <FaShoppingBag />
            <CuriosityTitle>????????? ??? ?????? ?????? ????????? ????????????????</CuriosityTitle>
            <CuriosityText>????????????????????? ?????? ?????? ??? ???????????? ?????? ????????? ????????? ??? ????????????. ????????? ????????? ?????? ??????????????? ????????? ??? ?????????, ????????? ???????????? ????????? ????????? ??? ?????? ?????? ????????? ????????? ??? ?????? ????????????.</CuriosityText>
            <div className='line'/>
            <AiOutlineEye />
            <CuriosityTitle>?????? ???????????? ?????? ????????? ????????????????</CuriosityTitle>
            <CuriosityText>?????????????????? ????????? ????????? ????????? ????????? ??? ???????????? ????????? ????????? ???????????????.</CuriosityText>
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
  &.setName .saveBtn{
    cursor: pointer;
    display: inline-block;
    margin-bottom: 24px;
    margin-top: 24px;
    position: relative;
    text-align: center;
    text-decoration: none;
    touch-action: manipulation;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    border-radius: 8px;
    outline: none;
    padding: 14px 24px;
    background: rgb(34, 34, 34);
    color: rgb(255, 255, 255);
    contain: paint;
  }
  & .users {
    color: rgb(113, 113, 113);
    margin-top: 4px;
    word-break: break-word;
    font-size: 14px;
    line-height: 18px;
  }
`
const FormatBox = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &  div {
    max-width: 290px;
    width: 100%;
    height: 56px;
    box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
    border-radius: 15px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    box-sizing: border-box;
    & input {
      width: 90%;
      border: none;
      outline: none;
      padding: 0px;
      margin: 26px 12px 10px;
      min-height: 1px;
      appearance: none;
      box-sizing: border-box;
    }
  }
  & select{
    width: 100%;
    height: 56px;
    border: none;
    outline: none;
    margin: 0px;
    padding: 13px 36px 10px 12px;
    box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
    border-radius: 15px;
    appearance: none;
    font-size: 16px;
    line-height: 20px;
  }
  & #emailInput{
    position: relative;
    cursor: text;
    display: flex;
    height: 56px;
    width: 100%;
    margin: 0px;
    border: none;
    color: rgb(34, 34, 34);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
  & #dateInput{
    position: relative;
    cursor: text;
    height: 56px;
    width: 100%;
    margin: 0px;
    border: none transparent;
    color: rgb(34, 34, 34);
    border-radius: 0px;
    padding: 0 15px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
    border-radius: 15px;
  }
`
const SaveBtn = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 24px;
  margin-top: 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  background: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  contain: paint;
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
