import { Link } from "react-router-dom";

// interface Props {}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand">Meat Market</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to='/'>
            Home
          </Link>
          <a className="nav-link" href="#">
            Features
          </a>
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
