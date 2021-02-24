import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import  theme from '../constants/theme'
import Router from '../routes/Router'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Route exact 
            path={[
              '/cadastro'
            ]}
          >
          </Route>       
          <Router />
   
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
