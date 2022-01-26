import styled from "styled-components"
import { Link } from "react-router-dom";
import { PaddingBox } from "./styled";
import {AiOutlineMenu} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import LoginMobal from '../../pages/login/loginMobal'
import Search from '../../pages/home/molecules/search'
import axios from 'axios'




const Header = (props) => {
  const [onClick, setOnClick] = useState(false);
  const [userJoin, setUserJoin] = useState(false);
  const [scroll, setScroll] = useState(false);//50px
  const [data, setData] = useState();
  const [loginStatus, setLoginStatus] = useState(false);
  const [userToken, setUserToken] = useState();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  //   useEffect(() => {
  //     if(data){
  //       axios.get(`https://dev.nada-risingcamp.shop/users/auto-login?token=${data}`).
  //       then(res => setUserToken(res.data)).catch((err) => console.log(err))
  //       console.log('성공')
  //     }
  //   }, [data]);
  //   useEffect(() => {
  //     setData(JSON.parse(localStorage.getItem("users")));
  //     console.log(userToken)
  //   },[])
  //   const success = () => {
  //     if(userToken){
  //       setLoginStatus(true);
  //     }else if(userToken){
  //       setLoginStatus(false);
  //     }
  //   }
  //   useEffect(() => {
  //     success()
  //   },[userToken])

  const pageUrl = document.location.href.split('http://localhost:3000/').join('');
  const handleScroll = () => {
    if(window.scrollY >= 50){
      setScroll(true);
    }else{
      setScroll(false);
    }
  };

  const logOutClick = () => {
    localStorage.clear();
    window.location.reload()
    setLoginStatus(false);
  }
  const toggleMenu = () => {
    setOnClick(onClick => !onClick);
  }
  const joinModal = () => {
    setUserJoin(userJoin => !userJoin);
    setOnClick(onClick => !onClick);
    document.body.style.overflow = 'hidden';
  }
  const toggleState = () => {
    setUserJoin(userJoin => !userJoin);
  }

  return (
        <HeaderPaddingBox className={pageUrl === 'filter' ? 'filter' : scroll ? 'true' : 'false'}>
          { userJoin ? <LoginMobal toggleState={toggleState} /> : false }
          <div className={scroll ? 'true' : 'false'}>
          <HeaderBox className={scroll ? 'true' : 'false'}>
            <LogoBox>
              <Link to='/'>
                {props.page === 'search' ?
                  <svg width="102" height="32">
                    <path fill='rgb(255, 56, 92)' d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z" />
                  </svg> :
                  <svg width="102" height="32">
                    <path fill={scroll ? 'rgb(255, 56, 92)' : '#fff'} d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z" />
                  </svg>
                }
              </Link>
            </LogoBox>
            {props.page === 'search' ? <div /> :
              <CenterBox className={scroll ? 'true' : 'false'}>
                <CenterTextBox>
                  <LineBox>
                    <CenterText><Link to='/search'>숙소</Link></CenterText><UnderLine style={{width:'10px'}}/>
                  </LineBox>
                  <LineBox>
                    <CenterText>체험</CenterText><UnderLine/>
                  </LineBox>
                  <LineBox>
                    <CenterText>온라인 체험</CenterText><UnderLine/>
                  </LineBox>
                </CenterTextBox>
              </CenterBox>
            }
            {props.filterPage === 'filterPage' ? <Search move={'filterPage'}/>
              : <div/>
            }
            <UserBox className={props.filterPage === 'filterPage' ? 'filter' : false}>
              {props.page === 'search' ?
                <HostStartBox className='loginStatus' style={{color:'#222'}}>{loginStatus ? '호스트 모드로 전환' : '호스트 되기'}</HostStartBox> :
                <HostStartBox className={scroll ? 'true' : 'false'}>호스트 되기</HostStartBox>
              }
              <LanguageBox>
                <svg viewBox="0 0 16 16" width='16' height='16'>
                  {props.page === 'search' ?
                    <path fill='#222' d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /> :
                    <path fill={scroll ? '#222' : '#fff'} d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                  }
                </svg>
              </LanguageBox>
              <DropdownMenuBox>
                <UserBtnBox onClick={toggleMenu}>
                  <AiOutlineMenu className='menuIcon'/>
                  <svg className='userIcon' viewBox="0 0 32 32" width='25' height='25'>
                    <path fill='#717171' d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" /></svg>
                </UserBtnBox>
                {onClick ?
                    <DropdownMenu>
                      {loginStatus ?
                        <div>
                          <ListItem>메시지</ListItem>
                          <ListItem>알림</ListItem>
                          <ListItem>위시리스트</ListItem>
                          <span style={{borderBottom: '1px solid #ddd', margin: '3px 0'}}/>
                          <ListItem><Link to='/hosting'>숙소 관리</Link></ListItem>
                          <ListItem>체험 관리</ListItem>
                          <ListItem><Link to='/account'>계정</Link></ListItem>
                          <span style={{borderBottom: '1px solid #ddd', margin: '3px 0'}}/>
                          <ListItem>도움말</ListItem>
                          <ListItem onClick={logOutClick}>로그아웃</ListItem>
                        </div>
                        :
                        <div>
                          <ListItem
                            style={{
                              borderTopLeftRadius: '10px',
                              borderTopRightRadius: '10px',
                              fontWeight: '400'
                            }} onClick={joinModal}>회원가입</ListItem>
                          <ListItem onClick={joinModal}>로그인</ListItem>
                          <span style={{borderBottom: '1px solid #333', margin: '3px 0'}} />
                          <ListItem><Link to='/hosting'>숙소 호스트 되기</Link></ListItem>
                          <ListItem>체험 호스팅하기</ListItem>
                          <ListItem style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>도움말</ListItem>
                        </div>
                      }
                    </DropdownMenu> : false
                }
              </DropdownMenuBox>
            </UserBox>
          </HeaderBox>
          </div>
          {props.page === 'search' ?
            false : <Search move={scroll} token={data}/>
          }

        </HeaderPaddingBox>
    )
}

const HeaderPaddingBox = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  
  &.filter > div{
    padding: 0 30px;
    max-width: 100%;
  }
  &.true {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  & > div{
    margin-bottom: 50px;
  }
  & > .true{
    width: 100%;
    height: 80px;
    top:0;
    position: fixed;
    z-index: 3;
    background: #fff;
  }
`
const HeaderBox = styled(PaddingBox)`
  height: 100%;
  margin: 0 auto;
  max-width: 1760px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &.true {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
  }
  & .true {
    color: #222;
  }
`
const LogoBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`
const CenterBox = styled.div`
  flex: 0 1 auto;
  padding: 0 24px;
  &.true{
    display: none;
  }
`
const CenterTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const CenterText = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  padding: 10px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
`
const LineBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover span{
    width: 5px;
  }
  &:hover div {
    color: rgba(200,200,200,.9 );
  }
`
const UnderLine = styled.span`
  box-sizing: border-box;
  width: 0;
  transition: .3s;
  &:hover{
    display: inline-block;
  }
  border-bottom: 2px solid #fff;
`
const UserBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  &.filter {
    min-width: 300px;
    flex: 1;
  }
`
const HostStartBox = styled.div`
  padding: 12px;
  color: #fff;
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 12px;
  text-align: inherit;
  &.loginStatus:hover{
    border-radius: 25px;
    background: rgba(200,200,200,.3);
  }
`
const LanguageBox = styled.div`
  display: inline-block;
  border: 0px;
  cursor: pointer;
  padding: 12px;
  border-radius: 22px;
  &:hover{
    transition: .5s;
    background: rgba(255,255,255,.1);
  }
`
const UserBtnBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 77px;
  height: 40px;
  cursor: pointer;
  border-radius: 45px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  & .menuIcon{
    width: 16px;
    height: 16px;
    color: #222;
  }
  & .userIcon{
    margin-left: 12px;
  }
`
const DropdownMenuBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
`
const DropdownMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  right: 0;
  margin-top: 20px;
  width: 240px;
  border-radius: 10px;
  background: #fff;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.08);
  & > div{
    display: flex;
    flex-direction: column;
    top: 100%;
  }
`
const ListItem = styled.li`
  padding: 12px 16px 12px 16px;
  font-size: 14px;
  line-height: 18px;
  color: #222;
  font-weight: 400;
  cursor: pointer;
  transition: .2s;
  &:hover{
    background: rgba(0,0,0,.1);
  }
  
`
export default Header;
