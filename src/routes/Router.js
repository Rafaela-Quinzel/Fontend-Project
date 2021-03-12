import React from "react"
import { Route, Switch } from "react-router-dom"
import SplashScreen from "../screens/SplashScreen/SplashScreen"
import LoginPage from "../screens/Login/LoginPage"
import NotFoundPage from "../screens/Error/NotFoundPage"
import SignUpPage from "../screens/Signup/SignupPage"
import HomePage from "../screens/Home/HomePage"
import MusicFeedPage from '../screens/Musics/MusicsPage'
import PlaylistDetailsPage from '../screens/PlaylistDetails/PlaylistDetailsPage'
import PlaylistPage from '../screens/Playlists/PlaylistsPage'
import MusicsPage from '../screens/Musics/MusicsPage'



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
            <Route exact path="/musicas">
                <MusicsPage />
            </Route>
            <Route exact path="/playlists">
                <PlaylistPage />
            </Route>
            <Route exact path="/playlist-detalhes/:id">
                <PlaylistDetailsPage />
            </Route>
            <Route exact path="/playlist-musicas">
                <MusicFeedPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>

    )
}

