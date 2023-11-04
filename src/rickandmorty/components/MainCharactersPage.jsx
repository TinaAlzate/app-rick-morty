import { useRef } from "react";
import { CharactersList, LoadCharactersOnIntersection, LoadingData, ResultsNotFound, useCharacters } from "../"


export const MainCharactersPage = ({list}) => {

  const { hasMore, isLoading } = useCharacters()

  const elementRef = useRef(null)

  LoadCharactersOnIntersection(elementRef)

  return (
    <>
      <div className="min-h-screen h-full dark:bg-zinc-800">
        <div className='bg-movil sm:bg-tablet lg:bg-laptop 2xl:bg-desktop bg-no-repeat bg-bottom bg-cover max-w-full h-[60vh] dark:bg-movil-d sm:dark:bg-tablet-d lg:dark:bg-laptop-d 2xl:dark:bg-desktop-d'></div>
        <div className="relative mx-auto -mt-40 min-w-[80%] max-w-[80%] min-h-[60vh] h-auto rounded-md lg:col-span-2 p-4 md:p-10 bg-white z-10 dark:bg-zinc-800">
          {!isLoading && <CharactersList characters={list} />}
          {
            hasMore
              ? <LoadingData elementRef={elementRef} />
              : (list.length === 0) && <ResultsNotFound />
          }
        </div>
      </div>
    </>
  )
}