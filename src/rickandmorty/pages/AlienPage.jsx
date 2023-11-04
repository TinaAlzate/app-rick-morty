import { MainCharactersPage, useCharacters } from "../"

export const AlienPage = () => {

  const { searchResults } = useCharacters()

  const resultsAlien = searchResults.filter(character => character.species === 'Alien')

  return (
    <MainCharactersPage list={resultsAlien}/>
  )
}

