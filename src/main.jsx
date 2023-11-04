import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RickMortyApp } from './RickMortyApp'
import { CharactersProvider } from './rickandmorty'
import { ThemeProvider } from './ui'
import './styles.css'

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
