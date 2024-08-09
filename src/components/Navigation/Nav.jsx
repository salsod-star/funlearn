import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="list-none flex gap-3">
        <Link to="/learn">
          <li>Learn</li>
        </Link>
        <Link to="/project">
          <li>Projects</li>
        </Link>
        <Link to="/games">
          <li>Games</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
