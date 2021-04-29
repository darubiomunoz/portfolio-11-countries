import Header from "../components/Header";
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Countries from "../components/Countries";

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <Countries />
    </>
  );
}; 

export default HomePage;
