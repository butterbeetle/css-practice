import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../Images/uhost-icon.png";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <header className={classes.mainHeader}>
        <div>
          <a href="/">
            <img src={logo} alt="uHost - Your favorite hosting company" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li className={classes.cta}>
              <Link to="/">Start Hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
