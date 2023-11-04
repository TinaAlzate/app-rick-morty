import { MainCharactersPage, useCharacters } from "../"

export const HumanPage = () => {

  const { searchResults } = useCharacters()

  const resultsHuman = searchResults.filter(character => character.species === 'Human')

  return (
    <>
      <MainCharactersPage list={ resultsHuman }/>
    </>
  )
}