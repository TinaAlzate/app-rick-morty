import { useCharacters, IntersectionObserverFunc } from "..";

export const LoadCharactersOnIntersection = (elementRef) => {

  const { hasMore, searchResults, getData } = useCharacters()

  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) getData()
  }

  IntersectionObserverFunc(elementRef, onIntersection, searchResults);

}

