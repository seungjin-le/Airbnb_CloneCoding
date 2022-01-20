import {PageWrap} from '../../components/common/styled'
import styled from 'styled-components'
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import AccountMenu from './molecules/accountMenu'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Account = () => {
  const [data, setData] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    if(data){
      axios.get(`https://dev.nada-risingcamp.shop/users/auto-login?token=${data}`).
      then(res => setUserToken(res.data)).catch((err) => console.log(err))
    }
  }, [data]);


  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
    console.log(setData)
  },[])

  return (
    <Page>
      <Header page={'search'} />
      <AccountMenu userToken={userToken}/>
      <Footer />
    </Page>
  )
}

const Page = styled(PageWrap)`
  height: 100%;
`

export default Account;
