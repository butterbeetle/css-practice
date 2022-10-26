import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./packages.module.css";

function Packages() {
  return (
    <Fragment>
      <header className={classes.mainHeader}>
        <div>
          <Link to="/">uHost</Link>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Packages</a>
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
      <footer className={classes.mainFooter}>
        <nav>
          <ul>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
          </ul>
        </nav>
      </footer>
    </Fragment>
  );
}

export default Packages;
