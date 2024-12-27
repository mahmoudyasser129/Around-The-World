import { Link } from "react-router-dom";

const CountryCard = (props) => {
  const { name, population, region, capital, flag } = props;
  return (
    <Link to={name}>
      <div className="lg:w-[264px h-full rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800">
        <img
          className="mb-4 h-48 w-full rounded-md"
          src={flag}
          alt="placeholder"
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <p>
          <span className="font-semibold">Population: </span>
          <span className="font-light">{population}</span>
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          <span className="font-light">{region}</span>
        </p> 
        <p>
          <span className="font-semibold">Capital: </span>
          <span className="font-light">{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
