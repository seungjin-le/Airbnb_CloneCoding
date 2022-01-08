import styled from "styled-components"
import { TextMiddle } from "./styled";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
    return (
        <div style={{ display: 'flex', padding: '10px 50px', border: '1px solid gray' }}>
            <div>
                <LogoImg src='https://risingcamp.com/assets/image-bro-logo@2x.png' />
            </div>
            <div style={{ flexGrow: '1', position: 'relative' }}>
                <HeaderText>Header Component</HeaderText>
            </div>
            <div>
                {page == 'index' &&
                    <Link to='/login'>
                        <Button>로그인</Button>
                    </Link>
                }

                {page == 'login' &&
                    <Link to='/'>
                        <Button>뒤로가기</Button>
                    </Link>
                }

                {page == 'home' &&
                    <Link to='/'>
                        <Button>로그아웃</Button>
                    </Link>
                }
            </div>
        </div>
    )
}



const LogoImg = styled.img`
    width:60px;
    height: 60px;
`;

const HeaderText = styled(TextMiddle)`
    font-size:20px;
    font-weight:600;
`;

const Button = styled.div`
    position:relative;
    top:50%;
    transform:translate(0,-50%);

    width:100px;
    padding:10px 0px;


    border-radius:6px;

    background-color:rgb(59,105,246);

    font-size:18px;
    font-weight:600;
    color:white;
    text-align:center;

    cursor: pointer;
`;

export default Header