import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
const RegionMenu = (props) => {
  const { countriesData, setFilterCountries } = props;
  const handleRegionChange = (e) => {
    const region = e.label;
    const filterCountries =
      region === "All regions"
        ? countriesData
        : countriesData.filter((country) => country.region === region);
    setFilterCountries(filterCountries);
  };

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={handleRegionChange}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
};

export default RegionMenu;
