import { Link } from "react-router-dom"

const Logo = () => {
    return (
      <Link to="/" className="flex items-center gap-3 font-semibold">
        <img src="../../public/Group 25.svg" alt="logo" />
        Around the world
      </Link>
    );
  };
  
  export default Logo;