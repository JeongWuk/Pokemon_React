import useDataFetching from "../utils/fetch";

const PokemonList = () => {
    const fetchData = useDataFetching(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
    console.log(fetchData.data);
    return ();
}

export default PokemonList;