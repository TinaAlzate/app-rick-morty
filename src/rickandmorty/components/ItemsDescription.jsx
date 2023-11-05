import PropTypes from 'prop-types'

export const ItemsDescription = ({ attrib, value }) => {
  return (
    <>
      <h3 className="dark:text-amber-400/50 2xl:text-lg text-amber-600/50">{attrib}:&nbsp;</h3>
      <span className="text-lg 2xl:text-xl dark:text-slate-300">{value}</span>
    </>
  )
}

ItemsDescription.propTypes = {
  attrib: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
