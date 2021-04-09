import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../constants/theme'
import Router from '../routes/Router'
import '../styles/global.css'
import SearchAppBar from '../components/AppBar/AppBar'


function App() {
  window.document.title = "SoundLab"

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact
          path={[
            '/musicas',
            '/playlists',
            '/playlist-detalhes/:id',
            '/playlist-musicas'
          ]}
        >
          <SearchAppBar wrapper="span"/>
        </Route>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
