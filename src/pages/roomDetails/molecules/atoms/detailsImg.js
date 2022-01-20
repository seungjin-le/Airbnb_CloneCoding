import styled from 'styled-components'
import {useEffect, useState} from 'react'
import axios from 'axios'

const DetailsImg = ({data,id}) => {

  const [Token, setToken] = useState();


  useEffect(() => {
    if (data) {
      axios.get(`https://dev.nada-risingcamp.shop/rooms/${id}/contents?token=${data}`)
        .then(res => setToken(res.data.result.roomImages))
        .catch((err) => console.log(err)).catch(err => console.log(err))
      console.log(Token)
    }
  }, [data]);


  return (
    <ImgBox>
      {Token ?
        <MainImg>
          <div/>
          <img src={Token[0].roomImgUrl} alt=""/>
        </MainImg> : <div></div>
      }
      {Token ?
      <SubImgBox>
        <ImgFlexBox>
          <SubImg>
            <ImgShadow />
            <img src={Token[1].roomImgUrl} alt=""/>
          </SubImg>
          <SubImg>
            <ImgShadow />
            <img src={Token[2].roomImgUrl} alt=""/>
          </SubImg>
        </ImgFlexBox>
        <ImgFlexBox>
          <SubImg>
            <ImgShadow className='first'/>
            <img src={Token[3].roomImgUrl} alt="" className='first'/>
          </SubImg>
          <SubImg>
            <ImgShadow className='last'/>
            <img src={Token[4].roomImgUrl} alt="" className='last'/>
          </SubImg>
        </ImgFlexBox>
      </SubImgBox> :
        <div></div>
      }
    </ImgBox>
  )
}

const ImgBox = styled.div`
  max-height: 560px;
  width: 100%;
  height: 36.7vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 10px 0;
`
const MainImg = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  width: 50%;
  & div{
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top:0;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    transition: .2s;
    &:hover{
      background: rgba(0,0,0, .2);  
    }
  }
  & > img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    z-index: -1;
  }
`
const SubImgBox = styled.div`
  flex: 1;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ImgFlexBox = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 8px;
  box-sizing: border-box;
  &:last-child{
    & .first{
      border-top-right-radius: 13px;
    }
    & .last{
      border-bottom-right-radius: 13px;
    }
  }
`
const SubImg = styled.div`
  position: relative;
  width: 100%;
  height: 49%;
  &:last-child{
    padding-top: 8px;
  }
  & img{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`
const ImgShadow = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top:0;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  transition: .2s;
  &:hover{
    background: rgba(0,0,0, .2);
  }
`

export default DetailsImg;
