import { useContext } from "react";
import { CharactersContext } from ".";

export const useCharacters = () => useContext(CharactersContext)