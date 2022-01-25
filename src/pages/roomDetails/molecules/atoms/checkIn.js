import styled from 'styled-components'
import {useEffect, useState} from 'react'
import moment from 'moment'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {BsKeyboard} from 'react-icons/bs'


const CheckIn = () => {
  const [getMoment, setMoment]=useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  const arr =['월','화','수','목','금','토','일'];
  //useEffect(() => {
  //     const nav = document.getElementById('towBox');
  //     const navs = nav.getBoundingClientRect()
  //     console.log(navs)
  //   }, []);
  const calendarArr=(a)=>{

    let result = [];
    let week = firstWeek;

    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                  <td key={index} className='toDay'>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                  <td key={index} style={{color:'#fff'}} >
                    <span>{days.format('D')}</span>
                  </td>
                );
              }else{
                return(
                  <td key={index}  >
                    {moment().format('DD') > days.format('DD') ?
                      <span style={{color:'#b0b0b0', textDecoration:'line-through' }}>{days.format('D')}</span> :
                      <span>{days.format('D')}</span>
                    }
                  </td>
                );
              }
            })
          }
        </tr>);
    }
    return result;
  }
//
  return(
    <FlexBox>
      <MomentTitleBox>
        <MomentTitle>체크인 날짜를 선택해 주세요</MomentTitle>
        <MomentSubTitle>여행 날짜를 입력하여 정확한 요금을 확인하세요</MomentSubTitle>
      </MomentTitleBox>
      <div className='towBox' >
        <div className='one'>
          <MomentMoveBtn>
            <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month'))}} className='moveBtn'>
              <AiOutlineLeft />
            </button>
            <span>{today.format('YYYY 년 MM 월')}</span>
            <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} className='moveBtn'>
              <AiOutlineRight />
            </button>
          </MomentMoveBtn>
          <MomentTable id='towBox'>
            {arr.map((v,i) =>
              <td key={i}>{v}</td>
            )}
            <tbody>
            {calendarArr()}
            </tbody>
          </MomentTable>
        </div>
      </div>
      <Clear>
        <BsKeyboard />
        <div>날짜 지우기</div>
      </Clear>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  width: 100%;
  padding: 48px 0;
  
  & .moveBtn {
    border: none;
    background: #fff;
    cursor: pointer;
  }
  @media screen and (max-width: 1127px) {
  }
`
const MomentTitleBox = styled.div`
`
const MomentTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
`
const MomentSubTitle = styled.div`
  padding: 15px 0;
`
const MomentMoveBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
const MomentTable = styled.table`
  width: 100%;
  box-sizing: border-box;
  & td{
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    height: 80px;
    text-align: center;
    border-radius: 100%;
    box-sizing: border-box;
    & span{
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    &:hover span{
      border: 1px solid #222;
      
    }
  }
`
const Clear = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & svg {
    font-size: 24px;
  }
  & div{
    font-size: 14px;
    text-decoration: underline;
    font-weight: 600;
    line-height: 14px;
  }
`
export default CheckIn;
