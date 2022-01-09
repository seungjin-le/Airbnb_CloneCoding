import styled from "styled-components";


export const PageWrap = styled.div`
    width:100vw;
    height:100vh;
`;
export const TextMiddle = styled.div`
    position:absolute;
    top:50%;
    left:50%;

    transform:translate(-50%,-50%);
`;
export const PaddingBox = styled.div`
  width: 100%;
  padding: 0 80px;
  @media screen and (max-width: 950px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 744px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 375px) {
    padding: 0 24px;
  }
  box-sizing: border-box;
  
`
