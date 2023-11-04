import { useParams } from "react-router-dom"
import { StatusCharacter } from "./StatusCharacter"
import { useCharacters } from "../hooks"
import { ItemsDescription } from "./ItemsDescription"
import { useState } from "react"
import { useEffect } from "react"

export const DetailsCharacter = () => {

  const [leakedCharacter, setLeakedCharacter] = useState({});

  const { id } = useParams()
  const idNum = Number(id)

  const { searchResults } = useCharacters()

  const getCharacter = async () => {
    const characterForID = await searchResults.filter(character => character.id === idNum)
    console.log(characterForID[0])
    setLeakedCharacter(characterForID[0])
  }

  useEffect(() => {
    getCharacter()
  }, [leakedCharacter]);
  
  // console.log(characterForID[0])

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">

          <div className="flex items-center mb-4">
            <StatusCharacter status={leakedCharacter.status} />
            {leakedCharacter.status}
          </div>

          <div className="mb-4">
            <h1>{leakedCharacter.name}</h1>
            <ItemsDescription attrib="Specie" value={leakedCharacter.species}/>
            <ItemsDescription attrib="Gender" value={leakedCharacter.gender} />
            <ItemsDescription attrib="Origin" value={leakedCharacter.origin.name} />
            <ItemsDescription attrib="First seen in" value={leakedCharacter.episode} />
            <ItemsDescription attrib="Last known location" value={leakedCharacter.location.name} />
          </div>

          <div className="mb-4">
            <img src={leakedCharacter.image} alt={leakedCharacter.name} className="w-full h-48 object-cover rounded-md" />
          </div>

        </div>
      </div>
    </>
  )
}
