import { Fragment } from "react";
import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <header className={classes.mainHeader}>
        <div>
          <a href="/">uHost</a>
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
      <main>
        <section className={classes.productOverview}>
          <h1>Get the freedom you deserve.</h1>
        </section>
        <section className={classes.plans}>
          <h1 className={classes.sectionTitle}>Choose Your Plan</h1>
          <div>
            <article>
              <h1 className={classes.title}>FREE</h1>
              <h2 className={classes.price}>$0/month</h2>
              <h3>For hobby projects or small teams.</h3>
              <ul>
                <li>1 Workspace</li>
                <li>Unlimited Traffic</li>
                <li>10GB Storage</li>
                <li>Basic Support</li>
              </ul>
              <div>
                <button>CHOOSE PLAN</button>
              </div>
            </article>
            <article>
              <h1>RECOMMENDED</h1>
              <h1 className={classes.title}>PLUS</h1>
              <h2 className={classes.price}>$29/month</h2>
              <h3>For ambitious projects.</h3>
              <ul>
                <li>5 Workspaces</li>
                <li>Unlimited Traffic</li>
                <li>100GB Storage</li>
                <li>Plus Support</li>
              </ul>
              <div>
                <button>CHOOSE PLAN</button>
              </div>
            </article>
            <article>
              <h1 className={classes.title}>PREMIUM</h1>
              <h2 className={classes.price}>$99/month</h2>
              <h3>Your enterprise solution.</h3>
              <ul>
                <li>10 Workspaces</li>
                <li>Unlimited Traffic</li>
                <li>Unlimited Storage</li>
                <li>Priority Support</li>
              </ul>
              <div>
                <button>CHOOSE PLAN</button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
