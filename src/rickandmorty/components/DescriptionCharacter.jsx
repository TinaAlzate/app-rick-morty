import PropTypes from 'prop-types'
import { ItemsDescription, StatusCharacter } from '..'

export const DescriptionCharacter = ({name, status, specie, gender, locname}) => {
  return (
    <div className='p-2'>
      <h2 className='font-bold tracking-wide text-2xl 2xl:text-3xl dark:text-slate-50'>{name}</h2>
      <p className="mt-2 flex items-center text-xl 2xl:text-2xl dark:text-slate-50 2xl:my-5">
        <StatusCharacter status={status} />
        {status} - {specie}
      </p>
      <ItemsDescription attrib={'Gender'} value={gender} />
      <ItemsDescription attrib={'Last location'} value={locname} />
    </div>

  )
}

DescriptionCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  locname: PropTypes.string.isRequired,
}
