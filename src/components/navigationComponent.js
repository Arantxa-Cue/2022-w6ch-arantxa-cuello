import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav title="Main navigation">
        <ul>
          <li>
            <Link to="robots">Robots List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
