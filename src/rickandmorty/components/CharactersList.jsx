import PropTypes from 'prop-types'
import { CharacterItem } from '.';

export const CharactersList = ({ characters = [] }) => {
  return (
    <div className='grid md:grid-cols-2 min-[2000px]:grid-cols-3 gap-12 place-items-center'>
      {
        characters.map( character => (
          <CharacterItem
            key = { character.id }
            character = { character }
          />
        ))
      }
      </div>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
}




// grid md: grid - cols - 2 gap - 4 place - items - center