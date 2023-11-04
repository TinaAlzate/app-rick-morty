import PropTypes from 'prop-types'

export const LoadingData = ({ elementRef }) => {

  return (
    <>
      <div ref={ elementRef } className="mt-4 flex flex-col">
        <div className="mx-auto animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading"></div>
          <p className="text-gray-400 text-center">Loading...</p>
      </div>  
    </>
  )
}

LoadingData.propTypes = {
  elementRef: PropTypes.object.isRequired,
}

