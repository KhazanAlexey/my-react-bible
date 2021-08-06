import React from "react";
import {HashRouter, Link, NavLink,useLocation, Route,Redirect,useHistory, Switch} from 'react-router-dom'


import {   BrowserRouter} from 'react-router-dom'


export function App11 () {
    return (
        <HashRouter>
            app11
            <Switch>
                aa
                <Route
                    path="/"
                    // component={Homepage}
                    render={(props)=><Homepage{...props}/>}
                    exact />
                <Route
                    path="/users"
                    render={(props)=><Users2{...props}/>}
                    // component={Users2}
                />
            </Switch>
        </HashRouter>
    )
}

function Homepage ({ history }) {
    const handleManualRedirect = () => {
        history.push('users?name=princess&email=castle@kingdom.far')
    }

    const handleSearchParamsRedirect = () => {
        const searchParams = new URLSearchParams()
        searchParams.set('name', 'princess')
        searchParams.set('email', 'castle@kingdom.far')
        // search params will escape the @ character for us
        history.push('users?' + searchParams.toString())
    }

    return (
        <React.Fragment>
            <button onClick={handleManualRedirect}>
                Click to redirect with manual query string
            </button>
            <button onClick={handleSearchParamsRedirect}>
                Click to redirect with search params
            </button>
        </React.Fragment>
    )
}

function Users2 ({ location }) {
    const searchParams = new URLSearchParams(location.search)
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    console.log(location.search)

    return (
        <div>
            {name}: {email}
        </div>
    )
}
