import { useState, useEffect } from "react";

function useDataFetching(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pokemonData = async (allpokemon) => {
      allpokemon.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    };
    const fetchPokemonData = async (pokemon) => {
      try {
        const response = await fetch(pokemon.url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchKantoPokemon = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        await pokemonData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchKantoPokemon();
  }, [url]);

  return { data, isLoading, error };
}

export default useDataFetching;
