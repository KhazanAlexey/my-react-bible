import React from "react";
import {HashRouter, Link, NavLink, Route,Redirect, Switch} from 'react-router-dom'
import {useParams} from "react-router-dom";


import {   BrowserRouter} from 'react-router-dom'

export function App9 () {
    return (
        <BrowserRouter>
            <div className="nav">
                ssssssssss
              <NavLink style={{border:'1px solid'}} to={'/home/1'}>home1</NavLink>

              <NavLink style={{border:'1px solid'}} to={'/dead'}>dead</NavLink>
            </div>
            {/*<Home/>*/}
            {/*<Work/>*/}
                <div>components</div>
                <Route path={'/home/:id?'} render={() => <Home/>}/>
                <Route path={'/work'} render={() => <Work/>}/>
        </BrowserRouter>
    )
}

function Home (){
    const {id}=useParams()
    return (
        <div style={{backgroundColor:'blue'}}>
        HomeComponent {id}
        </div>
    )
}
function Work (){
    return (
        <div style={{backgroundColor:'yellow'}}>
            <hr></hr>
            workComponent
        </div>
    )
}


export function App8 () {

    return (
        <HashRouter>
            <div className="nav">
                <Link to="/home">
                    Home
                </Link>
                <Link to="/user/1">
                    User 1
                </Link>
                <Link to="/user/2">
                    User 2
                </Link>
            </div>

            <Switch>
                <Route
                    path="/home"
                    component={() => <div>Home page</div>} />
                <Redirect
                    from="/"
                    to="/home"
                    exact />
                <Redirect
                    from="*"
                    to="/not-found" />
                <Route
                    path="/user/:id"
                    component={UserPage} />
            </Switch>
        </HashRouter>
    )
}

function UserPage ({ match, history, location }) {
    return (
        <div>
            User {match.params.id}
        </div>
    )
}