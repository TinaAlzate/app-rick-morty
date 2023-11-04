import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import { CharactersContext } from '.';
export function CharactersProvider({ children }) {

  const initialState = {
    data: [],
    hasMore: true,
    page: 1,
    isLoading: true,
    hasError: null
  }

  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${state.page}`)
      const { info, results } = await res.json()

      if (info.next === null) {
        setState({
          ...state,
          hasMore: false,
          isLoading: false,
        });
      } else {
        setState({
          ...state,
          data: [...state.data, ...results],
          page: state.page + 1 ,
          isLoading: false,
        })
      }

    } catch (err) {
      setState({
        ...state,
        hasError: err,
        isLoading: false,
      })
    }
  }

  const searcher = ({target}) => {
    setSearch(target.value)
  }
  useEffect(() => {
    if (!search) {
      setSearchResults(state.data)
    } else {
      setSearchResults(state.data.filter((result) => result.name.toLowerCase().includes(search.toLowerCase())))
    }
  }, [search, state.data]);

  useEffect(() => {
    if (search === '') {
      setState(initialState);
    }
  }, [search]);

  return (
    <CharactersContext.Provider value={{ getData, ...state, search, searcher, searchResults }}>
      {children}
    </CharactersContext.Provider>
  )
}

CharactersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};