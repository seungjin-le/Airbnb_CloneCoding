import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages"
import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import NoMatchPage from "../pages/noMatch"
import MainPage from '../pages/home/mainPage'



const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

                {/* 기본 루트페이지 */}
              {/* <Route path='/' component={IndexPage} exact key="index" /> */}

              <Route path='/' component={MainPage} exact key='mainPage'/>

                {/* 추가되는 페이지 */}
                <Route path='/home' component={HomePage} exact key="home" />
                <Route path='/login' component={LoginPage} exact key="loign" />

                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} key="noMatch" />

            </Switch>
        </BrowserRouter>
    )
}


export default RootRoute
