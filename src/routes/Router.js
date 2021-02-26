import React from "react"
import { Route, Switch } from "react-router-dom"
import SplashScreen from "../screens/SplashScreen/SplashScreen"
import LoginPage from "../screens/Login/LoginPage"
import NotFoundPage from "../screens/Error/NotFoundPage"
import SignUpPage from "../screens/Signup/SignupPage"
import HomePage from "../screens/Home/HomePage"


export default function Router() {

    return (

        <Switch>
            <Route exact path="/">
                <SplashScreen />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage />
            </Route>
            <Route exact path="/pagina-principal">
                <HomePage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>

    )
}

