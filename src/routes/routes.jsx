import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React,{useState, useMemo} from 'react'
import Login from '../pages/Landing/index'
import AppUser from '../pages/User/index'
import UserRepositorio from '../pages/repositorio/index'
import Followers from '../pages/seguidores/index'

import {UserContext} from '../components/store/context'
export default function Routes(){
    const [user, setUser] = useState(null)

    const value = useMemo(() => ({user, setUser}), [user, setUser])

    return (
        <BrowserRouter>
        <UserContext.Provider value={value}>
        <Switch>
            <Route component={Login} exact path='/' />
            <Route component={AppUser} path='/user' />
            <Route component={UserRepositorio} path='/repositorio' />
            <Route component={Followers} path='/followers' />

        </Switch>
        </UserContext.Provider>
        </BrowserRouter>
    )
}