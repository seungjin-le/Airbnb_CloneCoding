import styled from 'styled-components'

const DetailsImg = () => {
  return (
    <ImgBox>
      <MainImg>
        <div />
        <img src="https://a0.muscache.com/im/pictures/2ae45f5d-0c2e-4af9-af97-c4aa4d388e89.jpg?im_w=720" alt=""/>
      </MainImg>
      <SubImgBox>
        <ImgFlexBox>
          <SubImg>
            <ImgShadow />
            <img src="https://a0.muscache.com/im/pictures/c808c50e-3062-4012-a2d6-81e65e14ace6.jpg?im_w=720" alt=""/>
          </SubImg>
          <SubImg>
            <ImgShadow />
            <img src="https://a0.muscache.com/im/pictures/dc16d045-5ff6-4363-88b9-44a766e70694.jpg?im_w=720" alt=""/>
          </SubImg>
        </ImgFlexBox>
        <ImgFlexBox>
          <SubImg>
            <ImgShadow className='first'/>
            <img src="https://a0.muscache.com/im/pictures/1a2ef9ab-dbf4-4199-9ac2-cf7be8dc7863.jpg?im_w=720" alt="" className='first'/>
          </SubImg>
          <SubImg>
            <ImgShadow className='last'/>
            <img src="https://a0.muscache.com/im/pictures/bbacd221-1388-4ae2-b605-d0bf4f26fb22.jpg?im_w=720" alt="" className='last'/>
          </SubImg>
        </ImgFlexBox>
      </SubImgBox>
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
