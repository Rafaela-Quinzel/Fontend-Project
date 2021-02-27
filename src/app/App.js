import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import  theme from '../constants/theme'
import Router from '../routes/Router'
import SearchAppBar from '../components/AppBar/AppBar'
import '../styles/global.css'



function App() {
  window.document.title = "SoundLab"
 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Router exact 
            path={[
              '/pagina-principal'
            ]}
          >
            <SearchAppBar />
          </Router>       
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
