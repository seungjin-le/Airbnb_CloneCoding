import styled from 'styled-components'
import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import {useEffect, useState} from 'react'
import {storageService} from '../../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';



const Hosting = () => {
  const [lextPage, setLextPage] = useState(false);
  const [attachment, setAttachment] = useState();
  const [imgPage, setImgPage] = useState(false);

  const onFileChange = (e) => {
    const files = e.target.files
    const theFile = files[0];
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const event = finishedEvent.currentTarget.result
      setAttachment(event)
    }
    reader.readAsDataURL(theFile)
    console.log(theFile)
  }

  const onClearPhotClick = () => setAttachment(null)
  const onClick = async (e) => {
    e.preventDefault();
    const fileRef = storageService.ref().child(`imgs/${uuidv4()}`)
    const response = await fileRef.putString(attachment, 'data_url')
    console.log(response)
    response.snapshot.ref.getDownloadURL().then((url) => {
      console.log(url)
    })
    //response.on('state_changed',
    //       null,
    //       (error => {
    //         console.log('실패사유',error);
    //       },
    //       () => {
    //         response.snapshot.ref.getDownloadURL().then((url) => {
    //           console.log(url)
    //         })
    //       }
    //       ))
    onClearPhotClick();
    alert('등록이 완료 되었습니다')

  }
  //const onSubmit = async () => {
  //     const fileRef = storageService.ref().child(`imgs/${uuidv4()}`);
  //     const response = await fileRef.putString(attachment,'data_url');
  //     console.log(await response.getDownloadURL())
  //   }
  //useEffect( () => {
  //     const fileRef = storageService.ref().child(`imgs/${uuidv4()}`)
  //     const response = fileRef.putString(attachment, 'data_url')
  //     console.log(response)
  //     onClearPhotClick();
  //     alert('등록이 완료 되었습니다')
  //   }, []);

  return (
    <Page>
      <Header page={'search'} filterPage={'filterPage'}/>
      <MailSection>
        <FlexLeft>
          <span>게스트가 머무르게 될<br/>숙소의 정보가<br/>무엇인가요?</span>
        </FlexLeft>
        { lextPage ?
          <FlexRight>
            <BtnBox>
              <span>도움말</span>
              <span>저장 및 나가기</span>
            </BtnBox>
            {imgPage ?
              <InputForm>
                <div>
                  <img src="" alt=""/>
                </div>
              </InputForm> :
              <InputForm>
                <div>
                  <input id='file' className='file' type="file" accept="image/*" onChange={onFileChange}/>
                </div>
                <button onClick={onClick} >사진 등록</button>
              </InputForm>
            }
            <NextBtnBox>
              <span onClick={() => setImgPage(!imgPage)}>뒤로</span>
              <span onClick={() => setImgPage(!imgPage)}>저장</span>
            </NextBtnBox>
          </FlexRight> :
          <FlexRight>
            <BtnBox>
              <span>도움말</span>
              <span>저장 및 나가기</span>
            </BtnBox>
            <InputForm>
              <input className='text' type="text" placeholder='텍스트를 입력하세요.'/>
              <input className='text' type="text" placeholder='텍스트를 입력하세요.'/>
              <input className='text' type="text" placeholder='텍스트를 입력하세요.'/>
              <input className='text' type="text" placeholder='텍스트를 입력하세요.'/>
              <input className='text' type="text" placeholder='텍스트를 입력하세요.'/>
              <input className='text' type="text" placeholder='텍스트를 입력하세요.'/>
            </InputForm>
            <NextBtnBox>
              <span>뒤로</span>
              <span onClick={() => setLextPage(!lextPage)}>다음</span>
            </NextBtnBox>
          </FlexRight>
        }
      </MailSection>
      <Footer />
    </Page>
  )
}

const Page = styled(PageWrap)`

`
const MailSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const FlexLeft = styled.div`
  width: 50%;
  height: 100%;
  background: radial-gradient(circle at center center,
  rgb(255, 56, 92) 0%,
  rgb(230, 30, 77) 27.5%,
  rgb(227, 28, 95) 40%,
  rgb(215, 4, 102) 57.5%,
  rgb(189, 30, 89) 75%,
  rgb(189, 30, 89) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & span{
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    line-height: 44px;
  }
`
const BtnBox = styled.div`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  & span {
    margin-left: 20px;
    padding: 12px;
    box-sizing: border-box;
    background: rgba(200,200,200,.3);
    border-radius: 25px;
    transition: .3s;
    &:hover{
      background: rgba(150,150,150,.9);
      cursor: pointer;
    }
  }
`
const NextBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  & span {
    padding: 12px;
    background: black;
    color: #fff;
    font-size: 25px;
    border-radius: 10px;
    cursor: pointer;
  }

`
const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & input {
    font-size: 25px;
    padding: 25px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  & input::file-selector-button {
    display: none;
  }
  & input::file-selector-button{ 
    font-size: 100px;
  }
  & .text {
    width: 100%;
  }

  & .file {
    border: 1px solid #222;
    width: 200px;
    height: 250px;
    margin: 0 20px 60px;
    box-sizing: border-box;
  }

  & button {
    text-align: center;
    display: inline-block;
    border: none;
    background: #222;
    color: #fff;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 24px;
  }
`
const FlexRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 80px;
  box-sizing: border-box;
`



export default Hosting;



