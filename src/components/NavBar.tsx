import { Link } from "react-router-dom";

// interface Props {}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" >Meat Market</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav nav-underline">
          <Link className="nav-link" aria-current="page" to='/'>
            Home
          </Link>
          <Link className="nav-link" to='/riot'>
            Features
          </Link>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <Link className="nav-link" to= '/help'>Help Page</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
