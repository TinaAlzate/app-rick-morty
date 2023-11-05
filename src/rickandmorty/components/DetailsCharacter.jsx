import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { SingleCharacter, useSingleCharacter, LoadingCharacter } from "..";

export const DetailsCharacter = () => {

  const { id } = useParams()
  const idNum = Number(id)

  const url = `https://rickandmortyapi.com/api/character/${idNum}`

  const { leakedCharacter, nameEpisodeCharacter, getCharacterId } = useSingleCharacter(url)

  useEffect(() => {
    getCharacterId(url)
  }, [url]);

  return (
    <>
      {
        !leakedCharacter
          ? <LoadingCharacter />
          : <SingleCharacter character={leakedCharacter} episode={nameEpisodeCharacter} />
      }
    </>
  )
}
