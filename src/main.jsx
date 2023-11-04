import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { RickMortyApp } from './RickMortyApp'
import './styles.css'
import { CharactersProvider } from './rickandmorty/hooks/CharactersProvider'
import { ThemeProvider } from './ui/hooks/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <ThemeProvider>
          <RickMortyApp />
        </ThemeProvider> 
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
