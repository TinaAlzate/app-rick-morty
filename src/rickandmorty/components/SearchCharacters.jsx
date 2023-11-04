import { Search } from "../../ui"
import { useCharacters } from "../";

export const SearchCharacters = () => {

  const { search, searcher } = useCharacters()

  return (
    <>
      <span className="absolute px-2">
        <Search />
      </span>

      <input 
        className="block w-full lg:w-96 py-1.5 text-gray-700 bg-transparent border border-amber-500 rounded-lg placeholder-gray-400 pl-10 rtl:pr-11 rtl:pl-5 transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(245,158,11)] focus:outline-none motion-reduce:transition-none dark:border-amber-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Search here" />
    </>
  )
}
