import { MainCharactersPage, useCharacters } from ".."

export const AllCharactersPage = () => {

  const { searchResults } = useCharacters()

  return (
    <MainCharactersPage list={ searchResults }/>
  )
}