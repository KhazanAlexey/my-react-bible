import React, {useState} from "react";
import {HashRouter, Link, NavLink, Route,Redirect, Switch} from 'react-router-dom'
import {useParams} from "react-router-dom";


import {   BrowserRouter} from 'react-router-dom'

export function App12 () {
   const [data,setData]=useState({
       username:'',
       password:'',
       email:''
   })
    const handleChange=papamName=>event=>{
       debugger
       setData(prevData=>({
           username: prevData.username,
           password: prevData.password,
           email:prevData.email,
        [papamName]:event.target.value

       }))
    }
const handleSubmit=()=>{
    console.log(data)
}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Username"
                   value={data.username}
                   onChange={handleChange('username')} />
            <input type="text"
                   placeholder="E-mail"
                   value={data.email}
                   onChange={handleChange('email')} />
            <input type="password"
                   placeholder="Password"
                   value={data.password}
                   onChange={handleChange('password')} />
            <button type="submit">Submit</button>
        </form>
    )
}
