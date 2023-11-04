import { useCharacters, useIntersectionObserver } from "../hooks";

export const LoadCharactersOnIntersection = (elementRef) => {

  const { hasMore, searchResults, getData } = useCharacters()

  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore)  getData()
  }

  useIntersectionObserver(elementRef, onIntersection, searchResults);

}

