import styled from 'styled-components'
import {PaddingBox} from '../styled'
import {Link} from 'react-router-dom'

const Covid19Msg = () => {
  return (
    <MsgBox>
      <MsgText><Link to='/'>에어비엔비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요</Link></MsgText>
    </MsgBox>
  );
}
const MsgBox = styled(PaddingBox)`
  padding-top: 16px;
  padding-bottom: 16px;
  
`
const MsgText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  text-decoration: underline;
  font-weight: 600;
  color: #fff;
  & a:hover{
    color: #ddd;
  }
`

export default Covid19Msg;
