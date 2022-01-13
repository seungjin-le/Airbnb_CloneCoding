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

    }, [])

    return (
        <PageWrap>
            <Header page="home" />
        </PageWrap>
    )
}


export default HomePage
