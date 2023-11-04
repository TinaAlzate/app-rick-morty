import PropTypes from 'prop-types'
import { DescriptionCharacter } from '.';
import '../styles/style.css'

export const CharacterItem = ({ character }) => {
  return (
    <>
      <div className="w-[90%] md:w-full h-full overflow-hidden card group shadow-md shadow-grey-500/50 rounded-lg xl:flex gap-2 dark:bg-zinc-700 dark:shadow-zinc-500/50 hover:scale-[1.02] transform-gpu cursor-pointer duration-150">
        <img className="object-cover w-full xl:w-52 2xl:h-72 2xl:w-auto" src={ character.image } alt={character.name}/>
        <DescriptionCharacter
          name={character.name}
          status={character.status}
          specie={character.species}
          gender={character.gender}
          locname={character.location.name} />
      </div>
    </>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
}