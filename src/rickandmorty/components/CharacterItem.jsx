import PropTypes from 'prop-types'
import '../styles/style.css'

export const CharacterItem = ({ character }) => {
  return (
    <>
      {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={character.image} alt="Characters rick and morty" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <p href="#" className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div> */}


      <div className="w-[90%] md:w-full h-full overflow-hidden card group shadow-md shadow-grey-500/50 rounded-lg xl:flex gap-2 dark:bg-zinc-700 dark:shadow-zinc-500/50 hover:scale-[1.02] transform-gpu cursor-pointer duration-150">
        <img className="object-cover w-full lg:w-52 2xl:w-full 2xl:h-80" src={ character.image } />
        <div className='p-2'>
          <h2 className='font-bold tracking-wide text-2xl dark:text-slate-50'>{ character.name }</h2>
          <p className="mt-2 flex items-center text-xl dark:text-slate-50">
            <span className={`rounded-full w-2 h-2 me-2 ${character.status === 'Dead' ? 'bg-red-500' : 'bg-green-500'} `}></span>
            {character.status} - {character.species}
          </p>
          <h3 className="dark:text-amber-400/50 flex flex-column text-amber-600/50">Gender: </h3>
          <span className="text-lg dark:text-slate-300">{character.gender}</span>
          <h3 className="dark:text-amber-400/50 flex flex-column text-amber-600/50">Location: </h3>
          <span className="text-lg dark:text-slate-300"> {character.location.name}</span>
        </div>
      </div>
    </>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
}