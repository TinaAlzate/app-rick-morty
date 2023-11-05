export const LoadingCharacter = () => {
  return (
    <div className="mt-4 flex items-center justify-center flex-col h-screen">
      <div className="mx-auto animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading"></div>
      <p className="text-gray-400 text-center">Loading...</p>
    </div>  
  )
}
