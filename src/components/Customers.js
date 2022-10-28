import classes from "./Customer.module.css";
import customerLogo1 from "../Images/customer-1.jpg";
import customerLogo2 from "../Images/customer-2.jpg";
import { Fragment } from "react";
import Layout from "../Layout/Layout";

const Customers = () => {
  return (
    <Fragment>
      <Layout>
        <main>
          <div>
            <div className={[classes.testimonial, classes.customer1].join(" ")}>
              <div className={classes.testimonial__imageContainer}>
                <img
                  src={customerLogo1}
                  alt="Mike Statham - Customer"
                  className={classes.testimonial__image}
                />
              </div>
              <div className={classes.testimonial__info}>
                <h1 className={classes.testimonial__name}>Mike Statham</h1>
                <h2 className={classes.testimonial__subtitle}>
                  Founder of
                  <a href="tech-analysis.com">tech-analysis.com</a>
                </h2>
                <p className={classes.testimonial__text}>
                  uHost helped me realize my project with a highly constrained
                  budget in like no time.
                </p>
              </div>
            </div>
            <div className={[classes.testimonial, classes.customer2].join(" ")}>
              <div className={classes.testimonial__info}>
                <h1 className={classes.testimonial__name}>John Mellow</h1>
                <h2 className={classes.testimonial__subtitle}>
                  Hosts his private videos on uHost.
                </h2>
                <p className={classes.testimonial__text}>
                  I worked as a blogger and always looked for an integrated
                  hosting and file storage solution. I found it in uHost!
                </p>
              </div>
              <div className={classes.testimonial__imageContainer}>
                <img
                  src={customerLogo2}
                  alt="John Mellow - Customer"
                  className={classes.testimonial__image}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </Fragment>
  );
};
export default Customers;
