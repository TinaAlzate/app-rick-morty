import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import { SingleCharacterContext } from '.';

export function SingleCharacterProvider({ children }) {

  const [urlEpisode, setUrlEpisode] = useState('');
  const [nameEpisodeCharacter, setNameEpisodeCharacter] = useState('');
  const [leakedCharacter, setLeakedCharacter] = useState(null);

  const getCharacterId = async (url) => {
    try {
      const resp = await fetch(url)
      const characterForID = await resp.json()
      setLeakedCharacter(characterForID)
    } catch (error) {
      return false
    }
  }

  const getEpisode = async () => {
    try {
      const { episode } = !!leakedCharacter && leakedCharacter
      const firstEpisode = !!episode && episode[0]
      setUrlEpisode(firstEpisode)

      const res = await fetch(urlEpisode)
      const episodeCharacter = await res.json()

      const { name } = !!episodeCharacter && episodeCharacter
      setNameEpisodeCharacter(name)

    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    getEpisode()
  }, [leakedCharacter]);


  return (
    <SingleCharacterContext.Provider value={{ getCharacterId, nameEpisodeCharacter, leakedCharacter }}>
      {children}
    </SingleCharacterContext.Provider>
  )
}

SingleCharacterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};