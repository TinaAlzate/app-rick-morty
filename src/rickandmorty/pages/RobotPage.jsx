import { MainCharactersPage, useCharacters } from "../"

export const RobotPage = () => {

  const { searchResults } = useCharacters()

  const resultsRobots = searchResults.filter(character => character.species === 'Robot')

  return (
    <>
      <MainCharactersPage list={resultsRobots} />
    </>
  )
}