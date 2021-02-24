import React from "react"
import { Route, Switch } from "react-router-dom"
import SplashScreen from "../screens/SplashScreen/SplashScreen"
import LoginPage from "../screens/Login/LoginPage"
import NotFoundPage from "../screens/Error/NotFoundPage"


export default function Router() {

    return (

        <Switch>
            <Route exact path="/">
                <SplashScreen />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>

    )
}
