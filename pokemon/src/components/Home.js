import useDataFetching from "../utils/fetch";

const Home = () => {
  const fetchData = useDataFetching(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  console.log(fetchData.data);
  return <div></div>;
};

export default Home;
