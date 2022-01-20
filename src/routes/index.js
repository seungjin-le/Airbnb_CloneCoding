import { BrowserRouter, Route, Switch } from "react-router-dom"
import NoMatchPage from "../pages/noMatch"
import MainPage from '../pages/home/mainPage'
import SearchPage from '../pages/search/searchPage'
import FilterPage from '../pages/filter'
import RoomDetails from '../pages/roomDetails'
import Account from '../pages/account'
import Information from '../pages/information'



const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

              {/* 기본 루트페이지 */}

              <Route path='/' component={MainPage} exact key='mainPage'/>

              {/* 추가되는 페이지 */}
              <Route path='/search' component={SearchPage} exact key="SearchPage" />
              <Route path='/filter' component={FilterPage} key="FilterPage" />
              <Route path='/roomDetails' component={RoomDetails} key="RoomDetails" />
              <Route path='/account' component={Account} exact key="Account" />
              <Route path='/information' component={Information} exact key="Information" />
              {/* 경로가 유효하지 않을 때 */}
              <Route path='*' component={NoMatchPage} key="noMatch" />

            </Switch>
        </BrowserRouter>
    )
}


export default RootRoute
