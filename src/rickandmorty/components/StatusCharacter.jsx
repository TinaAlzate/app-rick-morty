import PropTypes from 'prop-types'

export const StatusCharacter = ({status}) => {
  return (
    <span 
      className={`rounded-full w-2 h-2 2xl:w-3 2xl:h-3 me-2 ${status === 'Dead' ? 'bg-red-500' : 'bg-green-500'} `}>
    </span>
  )
}

StatusCharacter.propTypes = {
  status: PropTypes.string.isRequired,
}
