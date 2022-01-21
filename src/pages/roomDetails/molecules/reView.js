import styled from 'styled-components'
import {BsFillStarFill} from 'react-icons/bs'
import {useEffect, useState} from 'react'
import axios from 'axios'


const ReView = ({id}) => {

  const [loding, setLoding] = useState(false);
  const [review, setReview] = useState();
  const [reviews, setReviews] = useState();
  const [reviewText, setReviewText] = useState();

  useEffect(() => {
    if(review) {
      setReviewText(review.reviewGrades[0]);
      setReviews( review.reviews)
    }
  }, [review]);
  useEffect(() => {
    if (id) {
      axios.get(`https://dev.nada-risingcamp.shop/rooms/${id}/reviews`)
        .then(res => setReview(res.data.result))
        .catch((err) => console.log(err)).catch(err => console.log(err))
        console.log(review)
    }
  }, [id]);
  setTimeout(() => {
    setLoding(true);
  }, 1500)



  return (
    <FlexBox className='first'>
      <ReviewTitle>
        <BsFillStarFill/>
        <div>4.90</div>
        <span>.</span>
        <div>후기 114개</div>
      </ReviewTitle>
      {loding ?
        <ScoreBox>
        <Score>
          <ScoreItem>
            <div>청결도</div>
            <div className='lineBox'><hr/>{reviewText.accuracyGrade}</div>
          </ScoreItem>
          <ScoreItem>
            <div>의사소통</div>
            <div className='lineBox'><hr/> {reviewText.bestValueGrade}</div>
          </ScoreItem>
          <ScoreItem>
            <div>체크인</div>
            <div className='lineBox'><hr/> {reviewText.checkInGrade}</div>
          </ScoreItem>
        </Score>
        <Score>
          <ScoreItem>
            <div>정확성</div>
            <div className='lineBox'><hr/>{reviewText.cleanlinessGrade}</div>
          </ScoreItem>
          <ScoreItem>
            <div>위치</div>
            <div className='lineBox'><hr/>{reviewText.communicationGrade}</div>
          </ScoreItem>
          <ScoreItem>
            <div>가격 대비 만족도</div>
            <div className='lineBox'><hr/>{reviewText.locationGrade}</div>
          </ScoreItem>
        </Score>
      </ScoreBox> :
      <div></div>
      }
      {loding ?
        <FlexBox className='comments'>
          <CommentsFlexBox>
            <ReViewBox>
              <UserBox>
                <ReviewUserImg>
                  <img src="https://a0.muscache.com/im/pictures/user/9d8fa040-802c-4230-9e47-802587b0dcee.jpg?im_w=240"
                       alt=""/>
                </ReviewUserImg>
                <div className='user'>
                  <div className='userNickName'>{reviews[0].name}</div>
                  <div className='day'>{reviews[0].userCreatedAt}</div>
                </div>
              </UserBox>
              <CommentsBox>
                {reviews[0].contents}
              </CommentsBox>
            </ReViewBox>
            <ReViewBox>
              <UserBox>
                <ReviewUserImg>
                  <img src="https://a0.muscache.com/im/pictures/user/9d8fa040-802c-4230-9e47-802587b0dcee.jpg?im_w=240"
                       alt=""/>
                </ReviewUserImg>
                <div className='user'>
                  <div className='userNickName'>{reviews[1].name}</div>
                  <div className='day'>{reviews[1].userCreatedAt}</div>
                </div>
              </UserBox>
              <CommentsBox>
                {reviews[1].contents}
              </CommentsBox>
            </ReViewBox>
            <ReViewBox>
              <UserBox>
                <ReviewUserImg>
                  <img src="https://a0.muscache.com/im/pictures/user/9d8fa040-802c-4230-9e47-802587b0dcee.jpg?im_w=240"
                       alt=""/>
                </ReviewUserImg>
                <div className='user'>
                  <div className='userNickName'>{reviews[2].name}</div>
                  <div className='day'>{reviews[2].userCreatedAt}</div>
                </div>
              </UserBox>
              <CommentsBox>
                {reviews[2].contents}
              </CommentsBox>
            </ReViewBox>
          </CommentsFlexBox>
          <CommentsFlexBox>
            <ReViewBox>
              <UserBox>
                <ReviewUserImg>
                  <img src="https://a0.muscache.com/im/pictures/user/9d8fa040-802c-4230-9e47-802587b0dcee.jpg?im_w=240"
                       alt=""/>
                </ReviewUserImg>
                <div className='user'>
                  <div className='userNickName'>{reviews[3].name}</div>
                  <div className='day'>{reviews[3].userCreatedAt}</div>
                </div>
              </UserBox>
              <CommentsBox>
                {reviews[3].contents}
              </CommentsBox>
            </ReViewBox>
            <ReViewBox>
              <UserBox>
                <ReviewUserImg>
                  <img src="https://a0.muscache.com/im/pictures/user/9d8fa040-802c-4230-9e47-802587b0dcee.jpg?im_w=240"
                       alt=""/>
                </ReviewUserImg>
                <div className='user'>
                  <div className='userNickName'>소미</div>
                  <div className='day'>2022년 1월</div>
                </div>
              </UserBox>
              <CommentsBox>
                전반적으로 매우 만족스러운 숙소입니다 창가 바로 옆에 침대가 있어 조금 추울 수 있으니 난방 후 침실 미닫이 문을 열어 거실의 온기가 전달되게 지내시면 좋을것 같습니다
              </CommentsBox>
            </ReViewBox>
            <ReViewBox>
              <UserBox>
                <ReviewUserImg>
                  <img src="https://a0.muscache.com/im/pictures/user/9d8fa040-802c-4230-9e47-802587b0dcee.jpg?im_w=240"
                       alt=""/>
                </ReviewUserImg>
                <div className='user'>
                  <div className='userNickName'>소미</div>
                  <div className='day'>2022년 1월</div>
                </div>
              </UserBox>
              <CommentsBox>
                전반적으로 매우 만족스러운 숙소입니다 창가 바로 옆에 침대가 있어 조금 추울 수 있으니 난방 후 침실 미닫이 문을 열어 거실의 온기가 전달되게 지내시면 좋을것 같습니다
              </CommentsBox>
            </ReViewBox>
          </CommentsFlexBox>
        </FlexBox> : <div></div>
      }
      {loding ?
        <ReviewBtn>
          <span>후기 144개 모두 보기</span>
        </ReviewBtn> :
        <div></div>
      }

    </FlexBox>
  )
}

const FlexBox = styled.div`
  width: 100%;
  padding: 48px 0;
  &.first{
    border-bottom: 1px solid #ddd;  
  }
  
  &.comments{
    padding:0;
    display: flex;
  }
`
const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  & svg {
    margin-right: 10px;
    color: orangered;
  }
`
const ScoreBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Score = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const ScoreItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 19%;
  box-sizing: border-box;
  margin-bottom: 20px;
  & > div{
    flex: 1;
  }
  & .lineBox{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    color: rgb(34, 34, 34);
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    
  }
  & hr{
    width: 50%;
    margin: auto 10px auto 0;
    border: 2px solid #222;
  }
`


const ReViewBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 40px;
`
const UserBox = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  align-items: center;
  justify-content: left;
  & .userNickName {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
  & .day {
    font-size: 14px;
    line-height: 20px;
    color:#717171;
  }
`
const ReviewUserImg = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  margin-right: 10px;
  & img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  
`
const CommentsBox = styled.div`
`
const CommentsFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ReviewBtn = styled.div`
  & span{
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    padding: 14px 24px;
    padding: 13px 23px;
    cursor: pointer;
    &:hover{
      background: rgba(200,200,200,.2);
    }
  }
`


export default ReView;
