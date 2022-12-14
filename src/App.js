import { Fragment, useState } from "react";
import Modal from "./Layout/Backdrop";
import classes from "./App.module.css";
import Layout from "./Layout/Layout";
// import { ReactComponent as Svg1 } from "./Images/svg/svg1.svg";
// import { ReactComponent as Svg2 } from "./Images/svg/svg2.svg";
// import { ReactComponent as Svg3 } from "./Images/svg/svg3.svg";

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  const hideModal = () => {
    setIsModal(false);
  };

  return (
    <Fragment>
      <Layout>
        {isModal && <Modal onClose={hideModal} />}
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
                  <button onClick={showModal} className={classes.button}>
                    CHOOSE PLAN
                  </button>
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
                  <button onClick={showModal} className={classes.button}>
                    CHOOSE PLAN
                  </button>
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
                  <button onClick={showModal} className={classes.button}>
                    CHOOSE PLAN
                  </button>
                </div>
              </article>
            </div>
          </section>
          <section className={classes.keyFeatures}>
            <h1 className={classes.sectionTitle}>
              Many Good Reasons to Stick Around
            </h1>
            <ul>
              <li>
                <div></div>
                <p>3,857,000 Trusting Customers</p>
              </li>
              <li>
                <div></div>
                <p>99.999% Uptime Guarantee</p>
              </li>
              <li>
                <div></div>
                <p>Lightning Fast CDN</p>
              </li>
            </ul>
          </section>
        </main>
      </Layout>
    </Fragment>
  );
};

export default App;
