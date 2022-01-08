import styled from "styled-components"
import { TextMiddle, PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const HomePage = () => {

    //외부 모듈
    const history = useHistory();

    //global state
    const { user } = useSelector(state => state.LoginReducer);

    //페이지 첫 로딩시 로직
    useEffect(() => {

        //벨리데이션
        if (!user.name) {
            alert("로그인을 해주세요");
            history.push('/login');
        }

    }, [])

    return (
        <PageWrap>
            <Header page="home" />
            <IndexText>항상 {user.name}님을 응원합니다 !</IndexText>
        </PageWrap>
    )
}

const IndexText = styled(TextMiddle)`
    font-size:30px;
    font-weight:600;
`;

export default HomePage