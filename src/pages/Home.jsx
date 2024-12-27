import ShowMessage from "../component/ShowMessage";
import SearchInput from "../component/SearchInput";
import RegionMenu from "../component/RegionMenu";
import CountryList from "../component/CountryList";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const { result, filterCountries, setFilterCountries, isLoading, isError } =
    useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message="Loading countries data...!" />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
            <SearchInput
              countriesData={result}
              setFilterCountries={setFilterCountries}
            />
            <RegionMenu
              countriesData={result}
              setFilterCountries={setFilterCountries}
            />
          </div>
          <CountryList data={filterCountries} />
        </>
      )}
    </>
  );
};

export default Home;
