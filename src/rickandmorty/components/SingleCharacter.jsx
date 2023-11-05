import PropTypes from 'prop-types'
import { ItemsDescription, StatusCharacter } from "."

export const SingleCharacter = ({ character, episode }) => {
  return (
    <div className="bg-image bg-cover bg-center bg-no repeat flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md dark:bg-zinc-800">

        <div className="flex items-center justify-end m2-4">
          <StatusCharacter status={character.status} />
          <span className="dark:text-slate-300">{character.status}</span>
        </div>
        <div className='md:flex justify-around gap-5'>
          <div className="mb-4 order-last">
            <h1 className='text-end text-4xl font-bold dark:text-slate-300 mb-8'>{character.name}</h1>
            <div className="flex mb-2"><ItemsDescription attrib="Specie" value={character.species} /></div>
            <div className="flex mb-2"><ItemsDescription attrib="Gender" value={character.gender} /></div>
            <div className="flex mb-2"><ItemsDescription attrib="Origin" value={character.origin.name} /></div>
            <div className="flex mb-2"><ItemsDescription attrib="First seen in" value={episode} /></div>
            <div className="flex mb-2"><ItemsDescription attrib="Last known location" value={character.location.name} /></div>
          </div>

          <div className="mb-4 flex items-center">
            <img src={character.image} alt={character.name} className="w-full object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

SingleCharacter.propTypes = {
  character: PropTypes.object.isRequired,
  episode: PropTypes.string.isRequired,
}
