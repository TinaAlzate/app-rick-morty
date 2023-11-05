import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RickMortyApp } from './RickMortyApp'
import { CharactersProvider, SingleCharacterProvider } from './rickandmorty'
import { ThemeProvider } from './ui'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <SingleCharacterProvider>
          <ThemeProvider>
            <RickMortyApp />
          </ThemeProvider> 
        </SingleCharacterProvider>
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
