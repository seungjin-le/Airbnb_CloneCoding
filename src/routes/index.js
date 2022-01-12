import { BrowserRouter, Route, Switch } from "react-router-dom"
import NoMatchPage from "../pages/noMatch"
import MainPage from '../pages/home/mainPage'
import SearchPage from '../pages/search/searchPage'



const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

                {/* 기본 루트페이지 */}

              <Route path='/' component={MainPage} exact key='mainPage'/>

                {/* 추가되는 페이지 */}
                <Route path='/search' component={SearchPage} exact key="SearchPage" />


                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} key="noMatch" />

            </Switch>
        </BrowserRouter>
    )
}


export default RootRoute
