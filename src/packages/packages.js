import { Fragment } from "react";
import Layout from "../Layout/Layout";
import classes from "./packages.module.css";

const Packages = () => {
  return (
    <Fragment>
      <div className={classes.background}></div>
      <Layout>
        <main>
          <section className={classes.package}>
            <a href="#">
              <h1>Our PLUS Plan</h1>
              <h2 className={classes.badge}>RECOMMENDED</h2>
              <h2 className={classes.subtitle}>
                The most popular choice of our customers.
              </h2>
              <p>
                Benefit from increased storage and faster support to ensure that
                your mission-critical data and applications are always
                available!
              </p>
            </a>
          </section>
          <section className={classes.package}>
            <a href="#">
              <h1>Our FREE Plan</h1>
              <h2 className={classes.subtitle}>
                An extremely solid start into our hosting world.
              </h2>
              <p>Get started immediately at zero cost!</p>
            </a>
          </section>

          <div className={classes.clearfix}></div>

          <section className={classes.package}>
            <a href="#">
              <h1>Our PREMIUM Plan</h1>
              <h2 className={classes.subtitle}>
                All your enterprise needs. Instant support, guaranteed uptime.{" "}
              </h2>
              <p>
                The best solution for small to large enterprises. Because
                hosting shouldn't be in the way!
              </p>
            </a>
          </section>
        </main>
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
      </Layout>
    </Fragment>
  );
};

export default Packages;
