import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../Images/uhost-icon.png";

const Navigation = () => {
  return (
    <header className={classes.mainHeader}>
      <div>
        <a href="/">
          <img src={logo} alt="uHost - Your favorite hosting company" />{" "}
        </a>
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
