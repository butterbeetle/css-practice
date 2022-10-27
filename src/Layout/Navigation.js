import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.mainHeader}>
      <div>
        <a href="/">uHost</a>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <a href="/">Customers</a>
          </li>
          <li className={classes.cta}>
            <a href="/">Start Hosting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
