import React from "react"
import { Route, Switch } from "react-router-dom"
import SplashScreen from "../screens/SplashScreen/SplashScreen"
import LoginPage from "../screens/Login/LoginPage"
import NotFoundPage from "../screens/Error/NotFoundPage"
import SignUpPage from "../screens/Signup/SignupPage"
import HomePage from "../screens/Home/HomePage"
import AddMusicsPage from '../screens/AddMusics/AddMusicsPage'
import MusicFeedPage from '../screens/MusicFeed/MusicFeedPage'
import PlaylistDetailsPage from '../screens/PlaylistDetailsPage/PlaylistDetailsPage'



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
            <Route exact path="/playlist-musicas">
                <MusicFeedPage />
            </Route>
            <Route exact path="/adicionar-musicas">
                <AddMusicsPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>

    )
}

