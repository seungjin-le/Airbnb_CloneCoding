import styled from 'styled-components'
import KakaoMap from '../../../components/common/atoms/kakaoMap'
import {AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'
import {BsMapFill} from 'react-icons/bs'
import {PaddingBox} from '../../../components/common/styled'
import {IoIosHeartEmpty,IoIosHeart} from 'react-icons/io'

const FilterItemList = () => {
  const [toggleMap, setToggleMap] = useState(false);
  const [like, setLike] = useState(true);
  const MapToggle = () => {
    setToggleMap(toggleMap =>!toggleMap)
  }
  const likeToggle = () => {
    setLike(like =>!like)
  }
  return (
    <KakaoMapBox className={toggleMap ? 'kakaoMap' : 'list'}>
      {
        toggleMap ?
        <KakaoMap/> :
        <ItemListBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
            <ItemBox>
              <ItemImg>
                {like ?
                  <IoIosHeart className={'like'} onClick={likeToggle}/> :
                  <IoIosHeartEmpty onClick={likeToggle}/>}
                <Img src='https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720'></Img>
              </ItemImg>
              <LodgingTextBox>
                <LodgingTitleBox>
                  <Title>Balamban, 중부 비사야</Title>
                  <Title>₩308.990 / 박</Title>
                </LodgingTitleBox>
                <LodgingTitleBox>
                  <SubText>2,2893km 거리</SubText>
                  <SubText>1월 31일 ~ 2월7일</SubText>
                </LodgingTitleBox>
              </LodgingTextBox>
            </ItemBox>
          </ItemListBox>

      }
      {toggleMap ?
        <MapToggleBtn onClick={MapToggle}>
          지도로 표시하기
          <BsMapFill className='map'/>
        </MapToggleBtn> :
        <MapToggleBtn onClick={MapToggle}>
          목록보기
          <AiOutlineMenu />
        </MapToggleBtn>
      }
    </KakaoMapBox>

  )
}

const KakaoMapBox = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  &.kakaoMap {
    height: 840px;
  }
  &.list {
    min-height: 800px;
  }
`

const MapToggleBtn = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  padding: 14px 19px;
  color: #fff;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  background: rgb(34, 34, 34);
  top: 90%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%,0);
  font-size: 14px;
  & svg{
    margin-left: 7px;
    font-size: 16px;
  }
  
`

const ItemListBox = styled(PaddingBox)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  max-width: 1760px;
  margin: 0 auto;
`
const ItemBox = styled.div`
  width: 23.3%;
  height: 24.3vw;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  max-height: 470px;
  @media screen and (max-width: 1231px){
    width: 31.5%;
    height: 31.5vw;
  }
`
const ItemImg = styled.div`
  height: 100%;
  background: gray;
  background-size: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  position: relative;
  & svg{
    position: absolute;
    left: 90%;
    top: 5%;
    font-size: 25px;
    color: #fff;
    &.like {
      color: red;
    }
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
const LodgingTextBox = styled.div`
`
const LodgingTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`
const SubText = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: rgb(113, 113, 113)
`

export default FilterItemList;
